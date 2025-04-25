n.d(t, { Z: () => ee }), n(388685);
var i,
    r = n(200651),
    o = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(563555),
    a = n(512722),
    u = n.n(a),
    d = n(568611),
    h = n(731965),
    p = n(442837),
    m = n(481060),
    b = n(490173),
    f = n(175724),
    v = n(280492),
    g = n(40851),
    y = n(607070),
    O = n(899663),
    x = n(636449),
    C = n(317381),
    j = n(496616),
    w = n(100527),
    P = n(906732),
    k = n(168551),
    E = n(260035),
    Z = n(628123),
    S = n(686546),
    z = n(950796),
    N = n(151851),
    T = n(587061),
    D = n(540059),
    M = n(280049),
    R = n(314910),
    L = n(22205),
    A = n(746106),
    I = n(892071),
    W = n(740492),
    _ = n(358085),
    U = n(62883),
    F = n(998502),
    K = n(473159),
    q = n(928518),
    B = n(981631),
    H = n(501787),
    G = n(388032),
    V = n(728294);
function J(e, t, n) {
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
function Y(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateClientTheme(), (0, K.O)(e), e.addEventListener('blur', this.handleBlur), _.isPlatformEmbedded ? t.addEventListener('contextmenu', U.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', U.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), _.isPlatformEmbedded ? t.removeEventListener('contextmenu', U.contextMenuCallbackNative) : t.removeEventListener('contextmenu', U.contextMenuCallbackWeb), (0, h.j)(() => m.s9z.setState((e) => Q(Y({}, e), { [m.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
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
        let r = i.querySelector('style['.concat(k.PQ, ']'));
        if (null != r) {
            r.textContent = e;
            return;
        }
        let o = n.createElement('style');
        o.setAttribute(k.PQ, 'true'), (o.textContent = e), i.appendChild(o);
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, M.r)(t.documentElement)), [v.iN, v.oV, f.f])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { focused: e, forcedColors: t, children: n, windowKey: i, isFullScreen: o, isRefreshEnabled: l, withTitleBar: a, guestWindow: u, clientThemesClassName: h, contentClassName: p } = this.props,
            f = (0, _.getPlatform)(),
            v = a && !o,
            y = i === H.$J ? L.Z : Z.Z;
        return (0, r.jsx)(d.VK, {
            children: (0, r.jsx)(
                A.w,
                {
                    windowKey: i,
                    children: (0, r.jsx)(O.Z, {
                        children: (0, r.jsxs)(m.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(X, {
                                    guestWindow: u,
                                    className: h,
                                    children: (0, r.jsxs)(y, {
                                        children: [
                                            (0, r.jsx)(S.Co, {}),
                                            (0, r.jsx)(g.Wu, {
                                                appContext: B.IlC.POPOUT,
                                                renderWindow: u,
                                                children: (0, r.jsx)(E.m, {
                                                    children: (0, r.jsxs)(R.yP, {
                                                        children: [
                                                            (0, r.jsxs)('div', {
                                                                className: V.popout,
                                                                children: [
                                                                    l &&
                                                                        v &&
                                                                        (0, r.jsx)(z.T, {
                                                                            windowKey: i,
                                                                            short: !0
                                                                        }),
                                                                    !l && v && null != f
                                                                        ? (0, r.jsx)(N.Z, {
                                                                              focused: e,
                                                                              type: f,
                                                                              windowKey: i,
                                                                              macOSFrame: !0
                                                                          })
                                                                        : null,
                                                                    (0, r.jsx)('div', {
                                                                        className: s()(V.content, p),
                                                                        children: n
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(m.nKe, {}),
                                                            (0, r.jsx)(b.Z, {}),
                                                            (0, r.jsx)(R.Un, {})
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
            J(this, 'rootRef', o.createRef()),
            J(this, '_cleanupWindowActionCreators', void 0),
            J(this, '_combokeys', null),
            J(this, 'beforeUnload', (e) => {
                let t = () => {
                    q.Z.unmountWindow(this.props.windowKey), _.isPlatformEmbedded && F.ZP.close(this.props.windowKey);
                };
                if (null == this.props.connectedEmbeddedActivity || W.ZP.disableEmbeddedActivityPopOutAlert) t();
                else {
                    if (!_.isPlatformEmbedded) return;
                    (0, x.R)()
                        ? t()
                        : ((e.returnValue = G.intl.string(G.t['bST/Y2'])),
                          (0, j.Z)(() => {
                              t();
                          }));
                }
            }),
            J(this, 'handleBlur', () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
J($, 'defaultProps', { withTitleBar: !0 });
let X = o.forwardRef(function (e, t) {
        let { guestWindow: n, className: i, children: l } = e,
            { lang: c, style: a, className: d } = (0, I.vP)();
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
    ee = o.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: i,
            isFullScreen: o
        } = (0, p.cj)([q.Z], () => ({
            guestWindow: q.Z.getWindow(e.windowKey),
            focused: q.Z.getWindowFocused(e.windowKey),
            isFullScreen: q.Z.isWindowFullScreen(e.windowKey)
        }));
        u()(null != n, 'Missing guestWindow reference');
        let l = (0, D.Q3)('PopoutWindow'),
            { forcedColors: s, connectedEmbeddedActivity: c } = (0, p.cj)([y.Z, C.ZP], () => ({
                forcedColors: y.Z.useForcedColors ? 'yes' : 'no',
                connectedEmbeddedActivity: C.ZP.getCurrentEmbeddedActivity()
            }));
        (0, T.Z)(n, !1);
        let { analyticsLocations: a } = (0, P.ZP)(w.Z.POPOUT_WINDOW),
            { clientThemesClassName: d, clientThemesCSS: h } = (0, k.ZP)();
        return null == n
            ? null
            : (0, r.jsx)(m.Sle, {
                  children: (0, r.jsx)(P.Gt, {
                      value: a,
                      children: (0, r.jsx)(
                          $,
                          Q(Y({ ref: t }, e), {
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
