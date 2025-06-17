n.d(t, { Z: () => Y }), n(388685);
var i,
    r = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    c = n(670481),
    a = n(512722),
    u = n.n(a),
    d = n(688642),
    h = n(731965),
    p = n(442837),
    m = n(481060),
    b = n(490173),
    f = n(175724),
    v = n(280492),
    g = n(40851),
    y = n(607070),
    O = n(899663),
    x = n(317381),
    C = n(100527),
    j = n(906732),
    w = n(168551),
    k = n(260035),
    P = n(628123),
    Z = n(686546),
    E = n(950796),
    S = n(151851),
    z = n(587061),
    N = n(540059),
    D = n(280049),
    T = n(314910),
    M = n(22205),
    R = n(746106),
    L = n(892071),
    I = n(358085),
    W = n(62883),
    _ = n(998502),
    A = n(473159),
    F = n(928518),
    K = n(981631),
    U = n(501787),
    q = n(728294);
function B(e, t, n) {
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class J extends (i = l.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateClientTheme(), (0, A.O)(e), e.addEventListener('blur', this.handleBlur), I.isPlatformEmbedded ? t.addEventListener('contextmenu', W.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', W.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), I.isPlatformEmbedded ? t.removeEventListener('contextmenu', W.contextMenuCallbackNative) : t.removeEventListener('contextmenu', W.contextMenuCallbackWeb), (0, h.j)(() => m.s9z.setState((e) => G(H({}, e), { [m.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            i = n.head;
        u()(null != i, 'Window document '.concat('head', ' was null'));
        let r = i.querySelector('style['.concat(w.PQ, ']'));
        if (null != r) {
            r.textContent = e;
            return;
        }
        let l = n.createElement('style');
        l.setAttribute(w.PQ, 'true'), (l.textContent = e), i.appendChild(l);
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, D.r)(t.documentElement)), [v.iN, v.oV, f.f])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { focused: e, forcedColors: t, children: n, windowKey: i, isFullScreen: l, isRefreshEnabled: o, withTitleBar: a, guestWindow: u, clientThemesClassName: h, contentClassName: p } = this.props,
            f = (0, I.getPlatform)(),
            v = a && !l,
            y = i === U.$J ? M.Z : P.Z;
        return (0, r.jsx)(d.VK, {
            children: (0, r.jsx)(
                R.w,
                {
                    windowKey: i,
                    children: (0, r.jsx)(O.Z, {
                        children: (0, r.jsxs)(m.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(V, {
                                    guestWindow: u,
                                    className: h,
                                    children: (0, r.jsxs)(y, {
                                        children: [
                                            (0, r.jsx)(Z.Co, {}),
                                            (0, r.jsx)(g.Wu, {
                                                appContext: K.IlC.POPOUT,
                                                renderWindow: u,
                                                children: (0, r.jsx)(k.m, {
                                                    children: (0, r.jsxs)(T.yP, {
                                                        children: [
                                                            (0, r.jsxs)('div', {
                                                                className: q.popout,
                                                                children: [
                                                                    o &&
                                                                        v &&
                                                                        (0, r.jsx)(E.T, {
                                                                            windowKey: i,
                                                                            short: !0
                                                                        }),
                                                                    !o && v && null != f
                                                                        ? (0, r.jsx)(S.Z, {
                                                                              focused: e,
                                                                              type: f,
                                                                              windowKey: i,
                                                                              macOSFrame: !0
                                                                          })
                                                                        : null,
                                                                    (0, r.jsx)('div', {
                                                                        className: s()(q.content, p),
                                                                        children: n
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(m.nKe, {}),
                                                            (0, r.jsx)(b.Z, {}),
                                                            (0, r.jsx)(T.Un, {})
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)(c.OU, {})
                            ]
                        })
                    })
                },
                t
            )
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'rootRef', l.createRef()),
            B(this, '_cleanupWindowActionCreators', void 0),
            B(this, '_combokeys', null),
            B(this, 'beforeUnload', (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        F.Z.unmountWindow(this.props.windowKey), I.isPlatformEmbedded && _.ZP.close(this.props.windowKey);
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n
                      })
                    : n();
            }),
            B(this, 'handleBlur', () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
B(J, 'defaultProps', { withTitleBar: !0 });
let V = l.forwardRef(function (e, t) {
        let { guestWindow: n, className: i, children: o } = e,
            { lang: c, style: a, className: d } = (0, L.vP)();
        return (
            l.useEffect(() => {
                let e = n.document.documentElement;
                u()(null != e, 'Window document element was null'), e.setAttribute('style', a);
            }, [n, a]),
            l.useEffect(() => {
                let e = n.document.documentElement;
                u()(null != e, 'Window document element was null'), e.setAttribute('lang', c);
            }, [n, c]),
            (0, r.jsx)('div', {
                'data-popout-root': !0,
                ref: t,
                className: s()(d, i),
                children: o
            })
        );
    }),
    Y = l.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: i,
            isFullScreen: l
        } = (0, p.cj)([F.Z], () => ({
            guestWindow: F.Z.getWindow(e.windowKey),
            focused: F.Z.getWindowFocused(e.windowKey),
            isFullScreen: F.Z.isWindowFullScreen(e.windowKey)
        }));
        u()(null != n, 'Missing guestWindow reference');
        let o = (0, N.Q3)('PopoutWindow'),
            { forcedColors: s, connectedEmbeddedActivity: c } = (0, p.cj)([y.Z, x.ZP], () => ({
                forcedColors: y.Z.useForcedColors ? 'yes' : 'no',
                connectedEmbeddedActivity: x.ZP.getCurrentEmbeddedActivity()
            }));
        (0, z.Z)(n, !1);
        let { analyticsLocations: a } = (0, j.ZP)(C.Z.POPOUT_WINDOW),
            { clientThemesClassName: d, clientThemesCSS: h } = (0, w.ZP)();
        return null == n
            ? null
            : (0, r.jsx)(m.Sle, {
                  children: (0, r.jsx)(j.Gt, {
                      value: a,
                      children: (0, r.jsx)(
                          J,
                          G(H({ ref: t }, e), {
                              guestWindow: n,
                              focused: i,
                              isFullScreen: l,
                              forcedColors: s,
                              connectedEmbeddedActivity: c,
                              clientThemesClassName: d,
                              clientThemesCSS: h,
                              isRefreshEnabled: o
                          })
                      )
                  })
              });
    });
