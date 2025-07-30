(n.d(t, {
    Y: () => K,
    Z: () => X
}),
    n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(670481),
    c = n(512722),
    u = n.n(c),
    d = n(688642),
    f = n(731965),
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
    N = n(686546),
    C = n(950796);
n(151851);
var R = n(587061),
    P = n(280049),
    w = n(314910),
    D = n(22205),
    L = n(746106),
    x = n(892071),
    M = n(358085),
    k = n(62883),
    j = n(998502),
    U = n(473159),
    G = n(928518),
    B = n(981631),
    V = n(501787),
    F = n(728294);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    return t && M.isPlatformEmbedded && !n;
}
class z extends (r = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        (null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateClientTheme(), (0, U.O)(e), e.addEventListener('blur', this.handleBlur), M.isPlatformEmbedded ? t.addEventListener('contextmenu', k.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', k.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds());
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        (e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme());
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        (this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), M.isPlatformEmbedded ? t.removeEventListener('contextmenu', k.contextMenuCallbackNative) : t.removeEventListener('contextmenu', k.contextMenuCallbackWeb), (0, f.j)(() => p.s9z.setState((e) => W(H({}, e), { [p.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload));
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            r = !1,
            i = n.head;
        u()(null != i, 'Window document '.concat(r ? 'body' : 'head', ' was null'));
        let a = i.querySelector('style['.concat(T.PQ, ']'));
        if (null != a) {
            a.textContent = e;
            return;
        }
        let o = n.createElement('style');
        (o.setAttribute(T.PQ, 'true'), (o.textContent = e), i.appendChild(o));
    }
    registerPopoutGlobalKeybinds() {
        var e;
        let { guestWindow: t } = this.props,
            n = t.document;
        for (let t of ((this._combokeys = (0, P.r)(n.documentElement)), [g.iN, g.oV, m.f, ...(null != (e = this.props.keybinds) ? e : [])])) if (t.comboKeysBindGlobal) for (let e of t.binds) this._combokeys.bindGlobal(e, (e, n) => ('function' == typeof t.action && t.action(e, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { focused: e, forcedColors: t, children: n, windowKey: r, isFullScreen: a, withTitleBar: o, guestWindow: c, clientThemesClassName: u, contentClassName: f, hideModals: _ = !1 } = this.props;
        (0, M.getPlatform)();
        let m = K({
                withTitleBar: o,
                isFullScreen: a
            }),
            g = r === V.$J ? D.Z : A.Z;
        return (0, i.jsx)(d.VK, {
            children: (0, i.jsx)(
                L.w,
                {
                    windowKey: r,
                    children: (0, i.jsx)(y.Z, {
                        children: (0, i.jsxs)(p.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(q, {
                                    guestWindow: c,
                                    className: u,
                                    children: (0, i.jsxs)(g, {
                                        children: [
                                            (0, i.jsx)(N.Co, {}),
                                            (0, i.jsx)(E.Wu, {
                                                appContext: B.IlC.POPOUT,
                                                renderWindow: c,
                                                children: (0, i.jsx)(S.m, {
                                                    children: (0, i.jsxs)(w.yP, {
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: F.popout,
                                                                children: [
                                                                    m &&
                                                                        (0, i.jsx)(C.TF, {
                                                                            windowKey: r,
                                                                            short: !0
                                                                        }),
                                                                    null,
                                                                    (0, i.jsx)('div', {
                                                                        className: s()(F.content, f),
                                                                        children: n
                                                                    })
                                                                ]
                                                            }),
                                                            !_ && (0, i.jsx)(p.nKe, {}),
                                                            (0, i.jsx)(h.Z, {}),
                                                            (0, i.jsx)(w.Un, {})
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(l.OU, {})
                            ]
                        })
                    })
                },
                t
            )
        });
    }
    constructor(...e) {
        (super(...e),
            Z(this, 'rootRef', a.createRef()),
            Z(this, '_cleanupWindowActionCreators', void 0),
            Z(this, '_combokeys', null),
            Z(this, 'beforeUnload', (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        (G.Z.unmountWindow(this.props.windowKey), M.isPlatformEmbedded && j.ZP.close(this.props.windowKey));
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n
                      })
                    : n();
            }),
            Z(this, 'handleBlur', () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            }));
    }
}
Z(z, 'defaultProps', { withTitleBar: !0 });
let q = a.forwardRef(function (e, t) {
        let { guestWindow: n, className: r, children: o } = e,
            { lang: l, style: c, className: d } = (0, x.vP)();
        return (
            a.useEffect(() => {
                let e = n.document.documentElement;
                (u()(null != e, 'Window document element was null'), e.setAttribute('style', c));
            }, [n, c]),
            a.useEffect(() => {
                let e = n.document.documentElement;
                (u()(null != e, 'Window document element was null'), e.setAttribute('lang', l));
            }, [n, l]),
            (0, i.jsx)('div', {
                'data-popout-root': !0,
                ref: t,
                className: s()(d, r),
                children: o
            })
        );
    }),
    X = a.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: r,
            isFullScreen: a
        } = (0, _.cj)([G.Z], () => ({
            guestWindow: G.Z.getWindow(e.windowKey),
            focused: G.Z.getWindowFocused(e.windowKey),
            isFullScreen: G.Z.isWindowFullScreen(e.windowKey)
        }));
        u()(null != n, 'Missing guestWindow reference');
        let { forcedColors: o, connectedEmbeddedActivity: s } = (0, _.cj)([b.Z, O.ZP], () => ({
            forcedColors: b.Z.useForcedColors ? 'yes' : 'no',
            connectedEmbeddedActivity: O.ZP.getCurrentEmbeddedActivity()
        }));
        (0, R.Z)(n, !1);
        let { analyticsLocations: l } = (0, I.ZP)(v.Z.POPOUT_WINDOW),
            { clientThemesClassName: c, clientThemesCSS: d } = (0, T.ZP)();
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
                              clientThemesClassName: c,
                              clientThemesCSS: d
                          })
                      )
                  })
              });
    });
