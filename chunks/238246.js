n.d(t, { Z: () => et }), n(388685);
var i,
    r = n(200651),
    o = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(563555),
    a = n(512722),
    u = n.n(a),
    d = n(568611),
    h = n(252258),
    p = n(731965),
    m = n(442837),
    b = n(481060),
    f = n(490173),
    v = n(175724),
    g = n(280492),
    y = n(40851),
    O = n(607070),
    x = n(899663),
    C = n(636449),
    j = n(317381),
    w = n(496616),
    P = n(100527),
    k = n(906732),
    E = n(168551),
    S = n(260035),
    Z = n(628123),
    z = n(686546),
    N = n(950796),
    T = n(151851),
    D = n(587061),
    M = n(540059),
    R = n(280049),
    L = n(314910),
    A = n(22205),
    I = n(746106),
    W = n(892071),
    _ = n(740492),
    U = n(358085),
    F = n(62883),
    K = n(998502),
    q = n(473159),
    B = n(928518),
    H = n(981631),
    G = n(501787),
    V = n(388032),
    J = n(728294);
function Y(e, t, n) {
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
function Q(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
class $ extends (i = o.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateClientTheme(), (0, q.O)(e), e.addEventListener('blur', this.handleBlur), U.isPlatformEmbedded ? t.addEventListener('contextmenu', F.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', F.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), U.isPlatformEmbedded ? t.removeEventListener('contextmenu', F.contextMenuCallbackNative) : t.removeEventListener('contextmenu', F.contextMenuCallbackWeb), (0, p.j)(() => b.s9z.setState((e) => X(Q({}, e), { [b.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
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
        let r = i.querySelector('style['.concat(E.PQ, ']'));
        if (null != r) {
            r.textContent = e;
            return;
        }
        let o = n.createElement('style');
        o.setAttribute(E.PQ, 'true'), (o.textContent = e), i.appendChild(o);
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, R.r)(t.documentElement)), [g.iN, g.oV, v.f])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { focused: e, forcedColors: t, children: n, windowKey: i, isFullScreen: o, isRefreshEnabled: l, withTitleBar: a, guestWindow: u, clientThemesClassName: h, contentClassName: p } = this.props,
            m = (0, U.getPlatform)(),
            v = a && !o,
            g = i === G.$J ? A.Z : Z.Z;
        return (0, r.jsx)(d.VK, {
            children: (0, r.jsx)(
                I.w,
                {
                    windowKey: i,
                    children: (0, r.jsx)(x.Z, {
                        children: (0, r.jsxs)(b.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(ee, {
                                    guestWindow: u,
                                    className: h,
                                    children: (0, r.jsxs)(g, {
                                        children: [
                                            (0, r.jsx)(z.Co, {}),
                                            (0, r.jsx)(y.Wu, {
                                                appContext: H.IlC.POPOUT,
                                                renderWindow: u,
                                                children: (0, r.jsx)(S.m, {
                                                    children: (0, r.jsxs)(L.yP, {
                                                        children: [
                                                            (0, r.jsxs)('div', {
                                                                className: J.popout,
                                                                children: [
                                                                    l &&
                                                                        v &&
                                                                        (0, r.jsx)(N.T, {
                                                                            windowKey: i,
                                                                            short: !0
                                                                        }),
                                                                    !l && v && null != m
                                                                        ? (0, r.jsx)(T.Z, {
                                                                              focused: e,
                                                                              type: m,
                                                                              windowKey: i,
                                                                              macOSFrame: !0
                                                                          })
                                                                        : null,
                                                                    (0, r.jsx)('div', {
                                                                        className: s()(J.content, p),
                                                                        children: n
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(b.nKe, {}),
                                                            (0, r.jsx)(f.Z, {}),
                                                            (0, r.jsx)(L.Un, {})
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
            Y(this, 'rootRef', o.createRef()),
            Y(this, '_cleanupWindowActionCreators', void 0),
            Y(this, '_combokeys', null),
            Y(this, 'beforeUnload', (e) => {
                let t = () => {
                    B.Z.unmountWindow(this.props.windowKey), U.isPlatformEmbedded && K.ZP.close(this.props.windowKey);
                };
                if (null == this.props.connectedEmbeddedActivity || _.ZP.disableEmbeddedActivityPopOutAlert) t();
                else {
                    if (!U.isPlatformEmbedded) return;
                    (0, C.R)({ isContextless: this.props.connectedEmbeddedActivity.location.kind === h.E.CONTEXTLESS })
                        ? t()
                        : ((e.returnValue = V.intl.string(V.t['bST/Y2'])),
                          (0, w.Z)(() => {
                              t();
                          }));
                }
            }),
            Y(this, 'handleBlur', () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
Y($, 'defaultProps', { withTitleBar: !0 });
let ee = o.forwardRef(function (e, t) {
        let { guestWindow: n, className: i, children: l } = e,
            { lang: c, style: a, className: d } = (0, W.vP)();
        return (
            o.useEffect(() => {
                let e = n.document.documentElement;
                u()(null != e, 'Window document element was null'), e.setAttribute('style', a);
            }, [n, a]),
            o.useEffect(() => {
                let e = n.document.documentElement;
                u()(null != e, 'Window document element was null'), e.setAttribute('lang', c);
            }, [n, c]),
            (0, r.jsx)('div', {
                'data-popout-root': !0,
                ref: t,
                className: s()(d, i),
                children: l
            })
        );
    }),
    et = o.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: i,
            isFullScreen: o
        } = (0, m.cj)([B.Z], () => ({
            guestWindow: B.Z.getWindow(e.windowKey),
            focused: B.Z.getWindowFocused(e.windowKey),
            isFullScreen: B.Z.isWindowFullScreen(e.windowKey)
        }));
        u()(null != n, 'Missing guestWindow reference');
        let l = (0, M.Q3)('PopoutWindow'),
            { forcedColors: s, connectedEmbeddedActivity: c } = (0, m.cj)([O.Z, j.ZP], () => ({
                forcedColors: O.Z.useForcedColors ? 'yes' : 'no',
                connectedEmbeddedActivity: j.ZP.getCurrentEmbeddedActivity()
            }));
        (0, D.Z)(n, !1);
        let { analyticsLocations: a } = (0, k.ZP)(P.Z.POPOUT_WINDOW),
            { clientThemesClassName: d, clientThemesCSS: h } = (0, E.ZP)();
        return null == n
            ? null
            : (0, r.jsx)(b.Sle, {
                  children: (0, r.jsx)(k.Gt, {
                      value: a,
                      children: (0, r.jsx)(
                          $,
                          X(Q({ ref: t }, e), {
                              guestWindow: n,
                              focused: i,
                              isFullScreen: o,
                              forcedColors: s,
                              connectedEmbeddedActivity: c,
                              clientThemesClassName: d,
                              clientThemesCSS: h,
                              isRefreshEnabled: l
                          })
                      )
                  })
              });
    });
