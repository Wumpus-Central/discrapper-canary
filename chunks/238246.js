n.d(t, {
    Y: () => z,
    Z: () => Q,
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
    E = n(607070),
    b = n(899663),
    y = n(317381),
    O = n(100527),
    v = n(906732),
    I = n(168551),
    T = n(260035),
    S = n(686546),
    A = n(950796),
    C = n(587061),
    N = n(248687),
    R = n(280049),
    P = n(314910),
    w = n(728285),
    D = n(22205),
    x = n(984802),
    L = n(746106),
    M = n(892071),
    j = n(358085),
    k = n(62883),
    U = n(998502),
    G = n(473159),
    B = n(928518),
    Z = n(981631),
    F = n(501787),
    V = n(413943);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && j.isPlatformEmbedded && !n;
}
class q extends (r = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateClientTheme(),
            (0, G.O)(e),
            e.addEventListener("blur", this.handleBlur),
            j.isPlatformEmbedded
                ? t.addEventListener("contextmenu", k.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", k.contextMenuCallbackWeb, !1),
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
                ? t.removeEventListener("contextmenu", k.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", k.contextMenuCallbackWeb),
            (0, d.j)(() => p.s9z.setState((e) => K(Y({}, e), { [p.u1M]: [] }))),
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
                hideModals: m = !1,
                appContext: g,
            } = this.props,
            E = z({
                withTitleBar: a,
                isFullScreen: r,
            }),
            y = n === F.$J ? D.Z : N.Z;
        return (0, i.jsx)(u.VK, {
            children: (0, i.jsx)(
                L.w,
                {
                    windowKey: n,
                    themeOverride: d,
                    children: (0, i.jsx)(b.Z, {
                        children: (0, i.jsxs)(p.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(X, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, i.jsxs)(y, {
                                        children: [
                                            (0, i.jsx)(S.Co, {}),
                                            (0, i.jsx)(w.Wu, {
                                                appContext: null != g ? g : Z.IlC.POPOUT,
                                                renderWindow: o,
                                                children: (0, i.jsx)(T.m, {
                                                    children: (0, i.jsxs)(P.yP, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: V.popout,
                                                                children: [
                                                                    E &&
                                                                        (0, i.jsx)(f.f6W, {
                                                                            theme: _,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(A.TF, {
                                                                                    windowKey: n,
                                                                                    className: s()(e, V.titleBar),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: s()(V.content, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !m && (0, i.jsx)(p.nKe, {}),
                                                            (0, i.jsx)(h.Z, {}),
                                                            (0, i.jsx)(P.Un, {}),
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
                e,
            ),
        });
    }
    constructor(...e) {
        super(...e),
            H(this, "rootRef", a.createRef()),
            H(this, "_cleanupWindowActionCreators", void 0),
            H(this, "_combokeys", null),
            H(this, "beforeUnload", (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        B.Z.unmountWindow(this.props.windowKey),
                            j.isPlatformEmbedded && U.ZP.close(this.props.windowKey);
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n,
                      })
                    : n();
            }),
            H(this, "handleBlur", () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
H(q, "defaultProps", { withTitleBar: !0 });
let X = a.forwardRef(function (e, t) {
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
    Q = a.forwardRef(function (e, t) {
        var n;
        let { guestWindow: r, isFullScreen: a } = (0, _.cj)([B.Z], () => ({
            guestWindow: B.Z.getWindow(e.windowKey),
            isFullScreen: B.Z.isWindowFullScreen(e.windowKey),
        }));
        c()(null != r, "Missing guestWindow reference");
        let { forcedColors: o, connectedEmbeddedActivity: s } = (0, _.cj)([E.Z, y.ZP], () => ({
            forcedColors: E.Z.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: y.ZP.getCurrentEmbeddedActivity(),
        }));
        (0, C.Z)(r, !1);
        let { analyticsLocations: l } = (0, v.ZP)(O.Z.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: d } = (0, I.ZP)(),
            f = (0, x.Ll)(),
            h = null != (n = e.themeOverride) ? n : f;
        return null == r
            ? null
            : (0, i.jsx)(p.Sle, {
                  children: (0, i.jsx)(v.Gt, {
                      value: l,
                      children: (0, i.jsx)(
                          q,
                          K(Y({ ref: t }, e), {
                              titleBarTheme: h,
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
