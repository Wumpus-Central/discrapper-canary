(n.d(t, { Z: () => V }), n(388685));
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
    P = n(260035),
    k = n(628123),
    Z = n(686546),
    E = n(950796);
n(151851);
var S = n(587061),
    z = n(280049),
    N = n(314910),
    D = n(22205),
    T = n(746106),
    M = n(892071),
    L = n(358085),
    R = n(62883),
    I = n(998502),
    W = n(473159),
    _ = n(928518),
    A = n(981631),
    U = n(501787),
    F = n(728294);
function K(e, t, n) {
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
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                K(e, t, n[t]);
            }));
    }
    return e;
}
function B(e, t) {
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
class H extends (i = l.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        (null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateClientTheme(), (0, W.O)(e), e.addEventListener('blur', this.handleBlur), L.isPlatformEmbedded ? t.addEventListener('contextmenu', R.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', R.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds());
    }
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        (e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme());
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        (this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), L.isPlatformEmbedded ? t.removeEventListener('contextmenu', R.contextMenuCallbackNative) : t.removeEventListener('contextmenu', R.contextMenuCallbackWeb), (0, h.j)(() => m.s9z.setState((e) => B(q({}, e), { [m.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload));
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
        (l.setAttribute(w.PQ, 'true'), (l.textContent = e), i.appendChild(l));
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, z.r)(t.documentElement)), [v.iN, v.oV, f.f])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { focused: e, forcedColors: t, children: n, windowKey: i, isFullScreen: l, withTitleBar: o, guestWindow: a, clientThemesClassName: u, contentClassName: h } = this.props;
        (0, L.getPlatform)();
        let p = i === U.$J ? D.Z : k.Z;
        return (0, r.jsx)(d.VK, {
            children: (0, r.jsx)(
                T.w,
                {
                    windowKey: i,
                    children: (0, r.jsx)(O.Z, {
                        children: (0, r.jsxs)(m.JcV, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(G, {
                                    guestWindow: a,
                                    className: u,
                                    children: (0, r.jsxs)(p, {
                                        children: [
                                            (0, r.jsx)(Z.Co, {}),
                                            (0, r.jsx)(g.Wu, {
                                                appContext: A.IlC.POPOUT,
                                                renderWindow: a,
                                                children: (0, r.jsx)(P.m, {
                                                    children: (0, r.jsxs)(N.yP, {
                                                        children: [
                                                            (0, r.jsxs)('div', {
                                                                className: F.popout,
                                                                children: [
                                                                    o &&
                                                                        !l &&
                                                                        (0, r.jsx)(E.T, {
                                                                            windowKey: i,
                                                                            short: !0
                                                                        }),
                                                                    null,
                                                                    (0, r.jsx)('div', {
                                                                        className: s()(F.content, h),
                                                                        children: n
                                                                    })
                                                                ]
                                                            }),
                                                            (0, r.jsx)(m.nKe, {}),
                                                            (0, r.jsx)(b.Z, {}),
                                                            (0, r.jsx)(N.Un, {})
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
        (super(...e),
            K(this, 'rootRef', l.createRef()),
            K(this, '_cleanupWindowActionCreators', void 0),
            K(this, '_combokeys', null),
            K(this, 'beforeUnload', (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        (_.Z.unmountWindow(this.props.windowKey), L.isPlatformEmbedded && I.ZP.close(this.props.windowKey));
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n
                      })
                    : n();
            }),
            K(this, 'handleBlur', () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            }));
    }
}
K(H, 'defaultProps', { withTitleBar: !0 });
let G = l.forwardRef(function (e, t) {
        let { guestWindow: n, className: i, children: o } = e,
            { lang: c, style: a, className: d } = (0, M.vP)();
        return (
            l.useEffect(() => {
                let e = n.document.documentElement;
                (u()(null != e, 'Window document element was null'), e.setAttribute('style', a));
            }, [n, a]),
            l.useEffect(() => {
                let e = n.document.documentElement;
                (u()(null != e, 'Window document element was null'), e.setAttribute('lang', c));
            }, [n, c]),
            (0, r.jsx)('div', {
                'data-popout-root': !0,
                ref: t,
                className: s()(d, i),
                children: o
            })
        );
    }),
    V = l.forwardRef(function (e, t) {
        let {
            guestWindow: n,
            focused: i,
            isFullScreen: l
        } = (0, p.cj)([_.Z], () => ({
            guestWindow: _.Z.getWindow(e.windowKey),
            focused: _.Z.getWindowFocused(e.windowKey),
            isFullScreen: _.Z.isWindowFullScreen(e.windowKey)
        }));
        u()(null != n, 'Missing guestWindow reference');
        let { forcedColors: o, connectedEmbeddedActivity: s } = (0, p.cj)([y.Z, x.ZP], () => ({
            forcedColors: y.Z.useForcedColors ? 'yes' : 'no',
            connectedEmbeddedActivity: x.ZP.getCurrentEmbeddedActivity()
        }));
        (0, S.Z)(n, !1);
        let { analyticsLocations: c } = (0, j.ZP)(C.Z.POPOUT_WINDOW),
            { clientThemesClassName: a, clientThemesCSS: d } = (0, w.ZP)();
        return null == n
            ? null
            : (0, r.jsx)(m.Sle, {
                  children: (0, r.jsx)(j.Gt, {
                      value: c,
                      children: (0, r.jsx)(
                          H,
                          B(q({ ref: t }, e), {
                              guestWindow: n,
                              focused: i,
                              isFullScreen: l,
                              forcedColors: o,
                              connectedEmbeddedActivity: s,
                              clientThemesClassName: a,
                              clientThemesCSS: d
                          })
                      )
                  })
              });
    });
