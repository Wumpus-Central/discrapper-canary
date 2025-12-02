n.d(t, {
    Y: () => q,
    Z: () => J,
}),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(319498),
    d = n(731965),
    f = n(966044),
    p = n(793030),
    _ = n(442837),
    m = n(481060),
    h = n(490173),
    g = n(175724),
    E = n(280492),
    b = n(607070),
    y = n(899663),
    O = n(317381),
    v = n(100527),
    S = n(906732),
    I = n(999203),
    T = n(260035),
    A = n(686546),
    C = n(950796),
    N = n(587061),
    P = n(248687),
    R = n(280049),
    w = n(314910),
    D = n(728285),
    x = n(22205),
    L = n(984802),
    j = n(746106),
    M = n(892071),
    k = n(358085),
    U = n(62883),
    G = n(998502),
    Z = n(473159),
    B = n(928518),
    F = n(981631),
    V = n(501787),
    H = n(413943);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && k.isPlatformEmbedded && !n;
}
class X extends (r = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateClientTheme(),
            (0, Z.O)(e),
            e.addEventListener("blur", this.handleBlur),
            k.isPlatformEmbedded
                ? t.addEventListener("contextmenu", U.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", U.contextMenuCallbackWeb, !1),
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
            k.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", U.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", U.contextMenuCallbackWeb),
            (0, d.j)(() => m.s9z.setState((e) => z(W({}, e), { [m.u1M]: [] }))),
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
        let a = i.querySelector("style[".concat(I.PQ, "]"));
        if (null != a) {
            a.textContent = e;
            return;
        }
        let o = n.createElement("style");
        o.setAttribute(I.PQ, "true"), (o.textContent = e), i.appendChild(o);
    }
    registerPopoutGlobalKeybinds() {
        var e;
        let { guestWindow: t } = this.props,
            n = t.document;
        for (let t of ((this._combokeys = (0, R.r)(n.documentElement)),
        [E.iN, E.oV, g.f, ...(null != (e = this.props.keybinds) ? e : [])]))
            if (t.comboKeysBindGlobal)
                for (let e of t.binds)
                    this._combokeys.bindGlobal(e, (e, n) => ("function" == typeof t.action && t.action(e, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let {
                forcedColors: e,
                children: t,
                windowKey: n,
                isFullScreen: r,
                withTitleBar: a,
                guestWindow: o,
                clientThemesClassName: l,
                contentClassName: c,
                themeOverride: d,
                titleBarTheme: _,
                hideModals: g = !1,
                appContext: E,
            } = this.props,
            b = q({
                withTitleBar: a,
                isFullScreen: r,
            }),
            O = n === V.$J ? x.Z : P.Z;
        return (0, i.jsx)(u.VK, {
            children: (0, i.jsx)(
                j.w,
                {
                    windowKey: n,
                    themeOverride: d,
                    children: (0, i.jsx)(y.Z, {
                        children: (0, i.jsxs)(m.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(Q, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, i.jsxs)(O, {
                                        children: [
                                            (0, i.jsx)(A.Co, {}),
                                            (0, i.jsx)(D.Wu, {
                                                appContext: null != E ? E : F.IlC.POPOUT,
                                                renderWindow: o,
                                                children: (0, i.jsx)(T.m, {
                                                    children: (0, i.jsxs)(w.yP, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: H.popout,
                                                                children: [
                                                                    b &&
                                                                        (0, i.jsx)(p.f6W, {
                                                                            theme: _,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(C.TF, {
                                                                                    windowKey: n,
                                                                                    className: s()(e, H.titleBar),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: s()(H.content, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !g && (0, i.jsx)(m.nKe, {}),
                                                            (0, i.jsx)(h.Z, {}),
                                                            (0, i.jsx)(f.uZ, {}),
                                                            (0, i.jsx)(w.Un, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(p.OUJ, {}),
                            ],
                        }),
                    }),
                },
                e,
            ),
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, "rootRef", a.createRef()),
            Y(this, "_cleanupWindowActionCreators", void 0),
            Y(this, "_combokeys", null),
            Y(this, "beforeUnload", (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        B.Z.unmountWindow(this.props.windowKey),
                            k.isPlatformEmbedded && G.ZP.close(this.props.windowKey);
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n,
                      })
                    : n();
            }),
            Y(this, "handleBlur", () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
Y(X, "defaultProps", { withTitleBar: !0 });
let Q = a.forwardRef(function (e, t) {
        let { guestWindow: n, className: r, children: o } = e,
            { lang: l, style: u, className: d } = (0, M.vP)();
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
    J = a.forwardRef(function (e, t) {
        var n;
        let { guestWindow: r, isFullScreen: a } = (0, _.cj)([B.Z], () => ({
            guestWindow: B.Z.getWindow(e.windowKey),
            isFullScreen: B.Z.isWindowFullScreen(e.windowKey),
        }));
        c()(null != r, "Missing guestWindow reference");
        let { forcedColors: o, connectedEmbeddedActivity: s } = (0, _.cj)([b.Z, O.ZP], () => ({
            forcedColors: b.Z.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: O.ZP.getCurrentEmbeddedActivity(),
        }));
        (0, N.Z)(r, !1);
        let { analyticsLocations: l } = (0, S.ZP)(v.Z.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: d } = (0, I.ZP)(),
            f = (0, L.Ll)(),
            p = null != (n = e.themeOverride) ? n : f;
        return null == r
            ? null
            : (0, i.jsx)(m.Sle, {
                  children: (0, i.jsx)(S.Gt, {
                      value: l,
                      children: (0, i.jsx)(
                          X,
                          z(W({ ref: t }, e), {
                              titleBarTheme: p,
                              guestWindow: r,
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
