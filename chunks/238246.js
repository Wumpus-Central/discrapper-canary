n.d(t, {
    Y: () => K,
    Z: () => X,
}),
    n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(799899),
    d = n(731965),
    f = n(793030),
    _ = n(442837),
    p = n(481060),
    h = n(490173),
    m = n(175724),
    g = n(280492),
    E = n(40851),
    b = n(607070),
    y = n(899663),
    O = n(317381),
    v = n(100527),
    I = n(906732),
    T = n(168551),
    S = n(260035),
    A = n(628123),
    C = n(686546),
    N = n(950796);
n(151851);
var R = n(587061),
    P = n(280049),
    w = n(314910),
    D = n(22205),
    x = n(746106),
    L = n(892071),
    j = n(358085),
    M = n(62883),
    k = n(998502),
    U = n(473159),
    G = n(928518),
    B = n(981631),
    Z = n(501787),
    F = n(413943);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && j.isPlatformEmbedded && !n;
}
class z extends (r = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateClientTheme(),
            (0, U.O)(e),
            e.addEventListener("blur", this.handleBlur),
            j.isPlatformEmbedded
                ? t.addEventListener("contextmenu", M.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", M.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(),
            e.removeEventListener("blur", this.handleBlur),
            j.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", M.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", M.contextMenuCallbackWeb),
            (0, d.j)(() => p.s9z.setState((e) => W(H({}, e), { [p.u1M]: [] }))),
            e.removeEventListener("beforeunload", this.beforeUnload);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector("title");
        null != n && (n.innerText = e);
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            r = !1,
            i = n.head;
        c()(null != i, "Window document ".concat(r ? "body" : "head", " was null"));
        let a = i.querySelector("style[".concat(T.PQ, "]"));
        if (null != a) {
            a.textContent = e;
            return;
        }
        let o = n.createElement("style");
        o.setAttribute(T.PQ, "true"), (o.textContent = e), i.appendChild(o);
    }
    registerPopoutGlobalKeybinds() {
        var e;
        let { guestWindow: t } = this.props,
            n = t.document;
        for (let t of ((this._combokeys = (0, P.r)(n.documentElement)),
        [g.iN, g.oV, m.f, ...(null != (e = this.props.keybinds) ? e : [])]))
            if (t.comboKeysBindGlobal)
                for (let e of t.binds)
                    this._combokeys.bindGlobal(e, (e, n) => ("function" == typeof t.action && t.action(e, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let {
            focused: e,
            forcedColors: t,
            children: n,
            windowKey: r,
            isFullScreen: a,
            withTitleBar: o,
            guestWindow: l,
            clientThemesClassName: c,
            contentClassName: d,
            themeOverride: _,
            hideModals: m = !1,
        } = this.props;
        (0, j.getPlatform)();
        let g = K({
                withTitleBar: o,
                isFullScreen: a,
            }),
            b = r === Z.$J ? D.Z : A.Z;
        return (0, i.jsx)(u.VK, {
            children: (0, i.jsx)(
                x.w,
                {
                    windowKey: r,
                    themeOverride: _,
                    children: (0, i.jsx)(y.Z, {
                        children: (0, i.jsxs)(p.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(q, {
                                    guestWindow: l,
                                    className: c,
                                    children: (0, i.jsxs)(b, {
                                        children: [
                                            (0, i.jsx)(C.Co, {}),
                                            (0, i.jsx)(E.Wu, {
                                                appContext: B.IlC.POPOUT,
                                                renderWindow: l,
                                                children: (0, i.jsx)(S.m, {
                                                    children: (0, i.jsxs)(w.yP, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: F.popout,
                                                                children: [
                                                                    g && (0, i.jsx)(N.TF, { windowKey: r }),
                                                                    null,
                                                                    (0, i.jsx)("div", {
                                                                        className: s()(F.content, d),
                                                                        children: n,
                                                                    }),
                                                                ],
                                                            }),
                                                            !m && (0, i.jsx)(p.nKe, {}),
                                                            (0, i.jsx)(h.Z, {}),
                                                            (0, i.jsx)(w.Un, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(f.OUJ, {}),
                            ],
                        }),
                    }),
                },
                t,
            ),
        });
    }
    constructor(...e) {
        super(...e),
            V(this, "rootRef", a.createRef()),
            V(this, "_cleanupWindowActionCreators", void 0),
            V(this, "_combokeys", null),
            V(this, "beforeUnload", (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        G.Z.unmountWindow(this.props.windowKey),
                            j.isPlatformEmbedded && k.ZP.close(this.props.windowKey);
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n,
                      })
                    : n();
            }),
            V(this, "handleBlur", () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
V(z, "defaultProps", { withTitleBar: !0 });
let q = a.forwardRef(function (e, t) {
        let { guestWindow: n, className: r, children: o } = e,
            { lang: l, style: u, className: d } = (0, L.vP)();
        return (
            a.useEffect(() => {
                let e = n.document.documentElement;
                c()(null != e, "Window document element was null"), e.setAttribute("style", u);
            }, [n, u]),
            a.useEffect(() => {
                let e = n.document.documentElement;
                c()(null != e, "Window document element was null"), e.setAttribute("lang", l);
            }, [n, l]),
            (0, i.jsx)("div", {
                "data-popout-root": !0,
                ref: t,
                className: s()(d, r),
                children: o,
            })
        );
    }),
    X = a.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: r,
            isFullScreen: a,
        } = (0, _.cj)([G.Z], () => ({
            guestWindow: G.Z.getWindow(e.windowKey),
            focused: G.Z.getWindowFocused(e.windowKey),
            isFullScreen: G.Z.isWindowFullScreen(e.windowKey),
        }));
        c()(null != n, "Missing guestWindow reference");
        let { forcedColors: o, connectedEmbeddedActivity: s } = (0, _.cj)([b.Z, O.ZP], () => ({
            forcedColors: b.Z.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: O.ZP.getCurrentEmbeddedActivity(),
        }));
        (0, R.Z)(n, !1);
        let { analyticsLocations: l } = (0, I.ZP)(v.Z.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: d } = (0, T.ZP)();
        return null == n
            ? null
            : (0, i.jsx)(p.Sle, {
                  children: (0, i.jsx)(I.Gt, {
                      value: l,
                      children: (0, i.jsx)(
                          z,
                          W(H({ ref: t }, e), {
                              guestWindow: n,
                              focused: r,
                              isFullScreen: a,
                              forcedColors: o,
                              connectedEmbeddedActivity: s,
                              clientThemesClassName: u,
                              clientThemesCSS: d,
                          }),
                      ),
                  }),
              });
    });
