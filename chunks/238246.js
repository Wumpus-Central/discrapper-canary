n.d(t, { Z: () => Q }), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(512722),
    c = n.n(o),
    u = n(568611),
    d = n(731965),
    m = n(442837),
    f = n(481060),
    p = n(490173),
    h = n(40851),
    g = n(607070),
    v = n(899663),
    _ = n(636449),
    I = n(317381),
    S = n(496616),
    x = n(100527),
    E = n(906732),
    C = n(168551),
    Z = n(260035),
    y = n(597952),
    b = n(628123),
    N = n(686546),
    T = n(950796),
    A = n(80006),
    w = n(151851),
    P = n(587061),
    j = n(392358),
    R = n(540059),
    k = n(314910),
    L = n(22205),
    O = n(892254),
    M = n(706454),
    D = n(210887),
    U = n(740492),
    F = n(451478),
    z = n(358085),
    V = n(62883),
    W = n(998502),
    B = n(473159),
    Y = n(928518),
    G = n(981631),
    H = n(501787),
    J = n(388032),
    q = n(81796);
function X(e, t, n) {
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
class K extends (i = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, B.O)(e), e.addEventListener('blur', this.handleBlur), z.isPlatformEmbedded ? t.addEventListener('contextmenu', V.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', V.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            z.isPlatformEmbedded ? t.removeEventListener('contextmenu', V.contextMenuCallbackNative) : t.removeEventListener('contextmenu', V.contextMenuCallbackWeb),
            (0, d.j)(() =>
                f.s9z.setState((e) => ({
                    ...e,
                    [f.u1M]: []
                }))
            ),
            e.removeEventListener('beforeunload', this.beforeUnload);
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
            i = n.head;
        c()(null != i, 'Window document '.concat('head', ' was null'));
        let l = i.querySelector('style['.concat(C.PQ, ']'));
        if (null != l) {
            l.textContent = e;
            return;
        }
        let a = n.createElement('style');
        a.setAttribute(C.PQ, 'true'), (a.textContent = e), i.appendChild(a);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props,
            i = n.document.documentElement;
        i.classList.toggle('disable-forced-colors', !e && 'active' === t), i.classList.toggle('enable-forced-colors', e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: r, isRefreshEnabled: o, isRefreshChatInputEnabled: c, mouseModeEnabled: d, reducedMotionEnabled: m, fontScaleClass: g, withTitleBar: _, guestWindow: I, clientThemesClassName: S, contentClassName: x, appWrapperClassName: E } = this.props,
            C = (0, z.getPlatform)(),
            A = s()(g, {
                'mouse-mode': d,
                'reduce-motion': m,
                'full-motion': !m,
                'app-focused': n || i,
                'visual-refresh': o,
                'visual-refresh-chat-input': c
            }),
            P = r === H.$J ? L.Z : b.Z;
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                O.Z,
                {
                    children: (0, l.jsx)(f.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(f.vWI, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, y.Z)(), A, S, E),
                                    children: (0, l.jsx)(f.JcV, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(P, {
                                                children: [
                                                    (0, l.jsx)(N.Co, {}),
                                                    (0, l.jsx)(h.Wu, {
                                                        appContext: G.IlC.POPOUT,
                                                        renderWindow: I,
                                                        children: (0, l.jsx)(Z.m, {
                                                            children: (0, l.jsxs)(k.yP, {
                                                                children: [
                                                                    (0, l.jsxs)('div', {
                                                                        className: q.popout,
                                                                        children: [
                                                                            o &&
                                                                                _ &&
                                                                                (0, l.jsx)(T.T, {
                                                                                    windowKey: r,
                                                                                    short: !0
                                                                                }),
                                                                            !o && _ && null != C
                                                                                ? (0, l.jsx)(w.Z, {
                                                                                      focused: n,
                                                                                      type: C,
                                                                                      windowKey: r,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, l.jsx)('div', {
                                                                                className: s()(q.content, x),
                                                                                children: a
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, l.jsx)(f.nKe, {}),
                                                                    (0, l.jsx)(p.Z, {}),
                                                                    (0, l.jsx)(k.Un, {})
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
            X(this, 'rootRef', a.createRef()),
            X(this, '_cleanupWindowActionCreators', void 0),
            X(this, 'beforeUnload', (e) => {
                let t = () => {
                    Y.Z.unmountWindow(this.props.windowKey), z.isPlatformEmbedded && W.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !U.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!z.isPlatformEmbedded) return;
                    (0, _.R)()
                        ? t()
                        : ((e.returnValue = J.intl.string(J.t['bST/Y2'])),
                          (0, S.Z)(() => {
                              t();
                          }));
                } else t();
            }),
            X(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
X(K, 'defaultProps', { withTitleBar: !0 });
let Q = a.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, m.cj)([Y.Z], () => ({
        guestWindow: Y.Z.getWindow(e.windowKey),
        focused: Y.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, R.Q3)('PopoutWindow'),
        r = (0, R.R6)('PopoutWindow'),
        s = (0, m.e7)([F.Z], () => F.Z.isFocused()),
        { locale: o, theme: u } = (0, m.cj)([D.Z, M.default], () => ({
            locale: M.default.locale,
            theme: D.Z.theme
        })),
        d = (0, m.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: p, appWrapperClassName: h } = (0, A.I)(),
        v = (0, m.e7)([I.ZP], () => null != e.channelId && null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, P.Z)(n, !1);
    let _ = (0, j.Z)(n, i),
        { analyticsLocations: S } = (0, E.ZP)(x.Z.POPOUT_WINDOW),
        { clientThemesClassName: Z, clientThemesCSS: y } = (0, C.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.Sle, {
              children: (0, l.jsx)(E.Gt, {
                  value: S,
                  children: (0, l.jsx)(K, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: s,
                      locale: o,
                      theme: u,
                      forcedColors: d,
                      useForcedColors: p.useForcedColors,
                      systemForcedColors: p.systemForcedColors,
                      fontScale: p.fontScale,
                      keyboardModeEnabled: p.keyboardModeEnabled,
                      mouseModeEnabled: _,
                      reducedMotionEnabled: p.useReducedMotion,
                      connectedToEmbeddedActivity: v,
                      fontScaleClass: p.fontScaleClass,
                      saturation: p.saturation,
                      alwaysShowLinkDecorations: p.alwaysShowLinkDecorations,
                      clientThemesClassName: Z,
                      clientThemesCSS: y,
                      appWrapperClassName: h,
                      isRefreshEnabled: a,
                      isRefreshChatInputEnabled: r
                  })
              })
          });
});
