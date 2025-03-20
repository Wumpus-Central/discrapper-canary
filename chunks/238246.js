n.d(t, { Z: () => $ }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    c = n.n(s),
    u = n(568611),
    d = n(252258),
    f = n(731965),
    m = n(442837),
    p = n(481060),
    h = n(490173),
    v = n(280492),
    b = n(40851),
    g = n(607070),
    y = n(899663),
    E = n(636449),
    O = n(317381),
    S = n(496616),
    x = n(100527),
    j = n(906732),
    w = n(168551),
    Z = n(260035),
    C = n(628123),
    P = n(686546),
    N = n(950796),
    I = n(151851),
    _ = n(587061),
    R = n(540059),
    T = n(280049),
    A = n(314910),
    D = n(22205),
    k = n(746106),
    M = n(892071),
    L = n(740492),
    W = n(358085),
    U = n(62883),
    z = n(998502),
    F = n(473159),
    V = n(928518),
    Y = n(981631),
    H = n(501787),
    K = n(388032),
    G = n(534998);
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
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class X extends (r = l.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateClientTheme(), (0, F.O)(e), e.addEventListener('blur', this.handleBlur), W.isPlatformEmbedded ? t.addEventListener('contextmenu', U.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', U.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), W.isPlatformEmbedded ? t.removeEventListener('contextmenu', U.contextMenuCallbackNative) : t.removeEventListener('contextmenu', U.contextMenuCallbackWeb), (0, f.j)(() => p.s9z.setState((e) => J(q({}, e), { [p.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            r = n.head;
        c()(null != r, 'Window document '.concat('head', ' was null'));
        let i = r.querySelector('style['.concat(w.PQ, ']'));
        if (null != i) {
            i.textContent = e;
            return;
        }
        let l = n.createElement('style');
        l.setAttribute(w.PQ, 'true'), (l.textContent = e), r.appendChild(l);
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, T.r)(t.documentElement)), [v.iN, v.oV])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { focused: e, forcedColors: t, children: n, windowKey: r, isFullScreen: l, isRefreshEnabled: o, withTitleBar: s, guestWindow: c, clientThemesClassName: d, contentClassName: f } = this.props,
            m = (0, W.getPlatform)(),
            v = s && !l,
            g = r === H.$J ? D.Z : C.Z;
        return (0, i.jsx)(u.VK, {
            children: (0, i.jsx)(
                k.w,
                {
                    windowKey: r,
                    children: (0, i.jsx)(y.Z, {
                        children: (0, i.jsx)(p.vWI, {
                            children: (0, i.jsx)(Q, {
                                guestWindow: c,
                                className: d,
                                children: (0, i.jsx)(p.JcV, {
                                    containerRef: this.rootRef,
                                    children: (0, i.jsxs)(g, {
                                        children: [
                                            (0, i.jsx)(P.Co, {}),
                                            (0, i.jsx)(b.Wu, {
                                                appContext: Y.IlC.POPOUT,
                                                renderWindow: c,
                                                children: (0, i.jsx)(Z.m, {
                                                    children: (0, i.jsxs)(A.yP, {
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: G.popout,
                                                                children: [
                                                                    o &&
                                                                        v &&
                                                                        (0, i.jsx)(N.T, {
                                                                            windowKey: r,
                                                                            short: !0
                                                                        }),
                                                                    !o && v && null != m
                                                                        ? (0, i.jsx)(I.Z, {
                                                                              focused: e,
                                                                              type: m,
                                                                              windowKey: r,
                                                                              macOSFrame: !0
                                                                          })
                                                                        : null,
                                                                    (0, i.jsx)('div', {
                                                                        className: a()(G.content, f),
                                                                        children: n
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(p.nKe, {}),
                                                            (0, i.jsx)(h.Z, {}),
                                                            (0, i.jsx)(A.Un, {})
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
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
                let t = () => {
                    V.Z.unmountWindow(this.props.windowKey), W.isPlatformEmbedded && z.ZP.close(this.props.windowKey);
                };
                if (null == this.props.connectedEmbeddedActivity || L.ZP.disableEmbeddedActivityPopOutAlert) t();
                else {
                    if (!W.isPlatformEmbedded) return;
                    (0, E.R)({ isContextless: this.props.connectedEmbeddedActivity.location.kind === d.E.CONTEXTLESS })
                        ? t()
                        : ((e.returnValue = K.NW.string(K.t['bST/Y2'])),
                          (0, S.Z)(() => {
                              t();
                          }));
                }
            }),
            B(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
B(X, 'defaultProps', { withTitleBar: !0 });
let Q = l.forwardRef(function (e, t) {
        let { guestWindow: n, className: r, children: o } = e,
            { lang: s, style: u, className: d } = (0, M.vP)();
        return (
            l.useEffect(() => {
                let e = n.document.documentElement;
                c()(null != e, 'Window document element was null'), e.setAttribute('style', u);
            }, [n, u]),
            l.useEffect(() => {
                let e = n.document.documentElement;
                c()(null != e, 'Window document element was null'), e.setAttribute('lang', s);
            }, [n, s]),
            (0, i.jsx)('div', {
                'data-popout-root': !0,
                ref: t,
                className: a()(d, r),
                children: o
            })
        );
    }),
    $ = l.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: r,
            isFullScreen: l
        } = (0, m.cj)([V.Z], () => ({
            guestWindow: V.Z.getWindow(e.windowKey),
            focused: V.Z.getWindowFocused(e.windowKey),
            isFullScreen: V.Z.isWindowFullScreen(e.windowKey)
        }));
        c()(null != n, 'Missing guestWindow reference');
        let o = (0, R.Q3)('PopoutWindow'),
            { forcedColors: a, connectedEmbeddedActivity: s } = (0, m.cj)([g.Z, O.ZP], () => ({
                forcedColors: g.Z.useForcedColors ? 'yes' : 'no',
                connectedEmbeddedActivity: O.ZP.getCurrentEmbeddedActivity()
            }));
        (0, _.Z)(n, !1);
        let { analyticsLocations: u } = (0, j.ZP)(x.Z.POPOUT_WINDOW),
            { clientThemesClassName: d, clientThemesCSS: f } = (0, w.ZP)();
        return null == n
            ? null
            : (0, i.jsx)(p.Sle, {
                  children: (0, i.jsx)(j.Gt, {
                      value: u,
                      children: (0, i.jsx)(
                          X,
                          J(q({ ref: t }, e), {
                              guestWindow: n,
                              focused: r,
                              isFullScreen: l,
                              forcedColors: a,
                              connectedEmbeddedActivity: s,
                              clientThemesClassName: d,
                              clientThemesCSS: f,
                              isRefreshEnabled: o
                          })
                      )
                  })
              });
    });
