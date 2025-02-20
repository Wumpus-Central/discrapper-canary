n.d(t, { Z: () => ee }), n(47120);
var r,
    l = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    c = n.n(s),
    u = n(568611),
    d = n(731965),
    f = n(442837),
    m = n(481060),
    p = n(490173),
    h = n(40851),
    v = n(607070),
    g = n(899663),
    b = n(636449),
    y = n(317381),
    E = n(496616),
    O = n(100527),
    S = n(906732),
    j = n(168551),
    x = n(260035),
    Z = n(597952),
    w = n(628123),
    C = n(686546),
    P = n(950796),
    N = n(80006),
    I = n(151851),
    R = n(587061),
    _ = n(392358),
    k = n(540059),
    A = n(314910),
    T = n(22205),
    D = n(892254),
    M = n(706454),
    L = n(210887),
    F = n(740492),
    W = n(451478),
    U = n(358085),
    z = n(62883),
    V = n(998502),
    H = n(473159),
    Y = n(928518),
    B = n(981631),
    K = n(501787),
    q = n(388032),
    G = n(53794);
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
function Q(e) {
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
                J(e, t, n[t]);
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
class $ extends (r = i.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, H.O)(e), e.addEventListener('blur', this.handleBlur), U.isPlatformEmbedded ? t.addEventListener('contextmenu', z.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', z.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: r, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== r && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur), U.isPlatformEmbedded ? t.removeEventListener('contextmenu', z.contextMenuCallbackNative) : t.removeEventListener('contextmenu', z.contextMenuCallbackWeb), (0, d.j)(() => m.s9z.setState((e) => X(Q({}, e), { [m.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
    }
    updateSaturationFactor() {
        let { saturation: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), n.style.setProperty('--saturation-factor', e.toString());
    }
    updateLocale() {
        let { locale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), (n.lang = e);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateFontScale() {
        let { fontScale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), (n.style.fontSize = ''.concat(e, '%'));
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            r = n.head;
        c()(null != r, 'Window document '.concat('head', ' was null'));
        let l = r.querySelector('style['.concat(j.PQ, ']'));
        if (null != l) {
            l.textContent = e;
            return;
        }
        let i = n.createElement('style');
        i.setAttribute(j.PQ, 'true'), (i.textContent = e), r.appendChild(i);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props,
            r = n.document.documentElement;
        r.classList.toggle('disable-forced-colors', !e && 'active' === t), r.classList.toggle('enable-forced-colors', e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: r, children: i, windowKey: a, isRefreshEnabled: s, isRefreshChatInputEnabled: c, mouseModeEnabled: d, reducedMotionEnabled: f, fontScaleClass: v, withTitleBar: b, guestWindow: y, clientThemesClassName: E, contentClassName: O, appWrapperClassName: S } = this.props,
            j = (0, U.getPlatform)(),
            N = o()(v, {
                'mouse-mode': d,
                'reduce-motion': f,
                'full-motion': !f,
                'app-focused': n || r,
                'visual-refresh': s,
                'visual-refresh-chat-input': c
            }),
            R = a === K.$J ? T.Z : w.Z;
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                D.Z,
                {
                    children: (0, l.jsx)(m.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(m.vWI, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: o()(e, (0, Z.Z)(), N, E, S),
                                    children: (0, l.jsx)(m.JcV, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(g.Z, {
                                            children: (0, l.jsxs)(R, {
                                                children: [
                                                    (0, l.jsx)(C.Co, {}),
                                                    (0, l.jsx)(h.Wu, {
                                                        appContext: B.IlC.POPOUT,
                                                        renderWindow: y,
                                                        children: (0, l.jsx)(x.m, {
                                                            children: (0, l.jsxs)(A.yP, {
                                                                children: [
                                                                    (0, l.jsxs)('div', {
                                                                        className: G.popout,
                                                                        children: [
                                                                            s &&
                                                                                b &&
                                                                                (0, l.jsx)(P.T, {
                                                                                    windowKey: a,
                                                                                    short: !0
                                                                                }),
                                                                            !s && b && null != j
                                                                                ? (0, l.jsx)(I.Z, {
                                                                                      focused: n,
                                                                                      type: j,
                                                                                      windowKey: a,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, l.jsx)('div', {
                                                                                className: o()(G.content, O),
                                                                                children: i
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, l.jsx)(m.nKe, {}),
                                                                    (0, l.jsx)(p.Z, {}),
                                                                    (0, l.jsx)(A.Un, {})
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
                    })
                },
                t
            )
        });
    }
    constructor(...e) {
        super(...e),
            J(this, 'rootRef', i.createRef()),
            J(this, '_cleanupWindowActionCreators', void 0),
            J(this, 'beforeUnload', (e) => {
                let t = () => {
                    Y.Z.unmountWindow(this.props.windowKey), U.isPlatformEmbedded && V.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !F.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!U.isPlatformEmbedded) return;
                    (0, b.R)()
                        ? t()
                        : ((e.returnValue = q.NW.string(q.t['bST/Y2'])),
                          (0, E.Z)(() => {
                              t();
                          }));
                } else t();
            }),
            J(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
J($, 'defaultProps', { withTitleBar: !0 });
let ee = i.forwardRef(function (e, t) {
    let { guestWindow: n, focused: r } = (0, f.cj)([Y.Z], () => ({
        guestWindow: Y.Z.getWindow(e.windowKey),
        focused: Y.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let i = (0, k.Q3)('PopoutWindow'),
        a = (0, k.R6)('PopoutWindow'),
        o = (0, f.e7)([W.Z], () => W.Z.isFocused()),
        { locale: s, theme: u } = (0, f.cj)([L.Z, M.default], () => ({
            locale: M.default.locale,
            theme: L.Z.theme
        })),
        d = (0, f.e7)([v.Z], () => (v.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: p, appWrapperClassName: h } = (0, N.I)(),
        g = (0, f.e7)([y.ZP], () => null != e.channelId && null !== y.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, R.Z)(n, !1);
    let b = (0, _.Z)(n, r),
        { analyticsLocations: E } = (0, S.ZP)(O.Z.POPOUT_WINDOW),
        { clientThemesClassName: x, clientThemesCSS: Z } = (0, j.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(m.Sle, {
              children: (0, l.jsx)(S.Gt, {
                  value: E,
                  children: (0, l.jsx)(
                      $,
                      X(Q({ ref: t }, e), {
                          guestWindow: n,
                          focused: r,
                          appFocused: o,
                          locale: s,
                          theme: u,
                          forcedColors: d,
                          useForcedColors: p.useForcedColors,
                          systemForcedColors: p.systemForcedColors,
                          fontScale: p.fontScale,
                          keyboardModeEnabled: p.keyboardModeEnabled,
                          mouseModeEnabled: b,
                          reducedMotionEnabled: p.useReducedMotion,
                          connectedToEmbeddedActivity: g,
                          fontScaleClass: p.fontScaleClass,
                          saturation: p.saturation,
                          alwaysShowLinkDecorations: p.alwaysShowLinkDecorations,
                          clientThemesClassName: x,
                          clientThemesCSS: Z,
                          appWrapperClassName: h,
                          isRefreshEnabled: i,
                          isRefreshChatInputEnabled: a
                      })
                  )
              })
          });
});
