n(47120);
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
    I = n(636449),
    S = n(317381),
    _ = n(496616),
    x = n(100527),
    E = n(906732),
    C = n(168551),
    y = n(260035),
    b = n(597952),
    Z = n(628123),
    T = n(686546),
    N = n(950796),
    A = n(80006),
    j = n(151851),
    w = n(587061),
    P = n(392358),
    R = n(540059),
    M = n(314910),
    O = n(892254),
    L = n(706454),
    k = n(210887),
    D = n(740492),
    U = n(451478),
    V = n(358085),
    F = n(62883),
    B = n(998502),
    W = n(473159),
    z = n(928518),
    G = n(981631),
    H = n(388032),
    Y = n(81796);
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
class q extends (i = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, W.O)(e), e.addEventListener('blur', this.handleBlur), V.isPlatformEmbedded ? t.addEventListener('contextmenu', F.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', F.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            V.isPlatformEmbedded ? t.removeEventListener('contextmenu', F.contextMenuCallbackNative) : t.removeEventListener('contextmenu', F.contextMenuCallbackWeb),
            (0, d.j)(() =>
                f.useModalsStore.setState((e) => ({
                    ...e,
                    [f.POPOUT_MODAL_CONTEXT]: []
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
            i = (0, n.head);
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
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: r, isRefreshEnabled: o, isRefreshChatInputEnabled: c, mouseModeEnabled: d, reducedMotionEnabled: m, fontScaleClass: g, withTitleBar: I, guestWindow: S, clientThemesClassName: _, contentClassName: x, appWrapperClassName: E } = this.props,
            C = (0, V.getPlatform)(),
            A = s()(g, {
                'mouse-mode': d,
                'reduce-motion': m,
                'full-motion': !m,
                'app-focused': n || i,
                'visual-refresh': o,
                'visual-refresh-chat-input': c
            });
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                O.Z,
                {
                    children: (0, l.jsx)(f.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(f.RedesignIconContextProvider, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, b.Z)(), A, _, E),
                                    children: (0, l.jsx)(f.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(Z.Z, {
                                                children: [
                                                    (0, l.jsx)(T.Co, {}),
                                                    (0, l.jsx)(h.Wu, {
                                                        appContext: G.IlC.POPOUT,
                                                        renderWindow: S,
                                                        children: (0, l.jsx)(y.m, {
                                                            children: (0, l.jsxs)(M.yP, {
                                                                children: [
                                                                    (0, l.jsxs)('div', {
                                                                        className: Y.popout,
                                                                        children: [
                                                                            o &&
                                                                                I &&
                                                                                (0, l.jsx)(N.T, {
                                                                                    windowKey: r,
                                                                                    short: !0
                                                                                }),
                                                                            !o && I && null != C
                                                                                ? (0, l.jsx)(j.Z, {
                                                                                      focused: n,
                                                                                      type: C,
                                                                                      windowKey: r,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, l.jsx)('div', {
                                                                                className: s()(Y.content, x),
                                                                                children: a
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, l.jsx)(f.Modals, {}),
                                                                    (0, l.jsx)(p.Z, {}),
                                                                    (0, l.jsx)(M.Un, {})
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
            J(this, 'rootRef', a.createRef()),
            J(this, '_cleanupWindowActionCreators', void 0),
            J(this, 'beforeUnload', (e) => {
                let t = () => {
                    z.Z.unmountWindow(this.props.windowKey), V.isPlatformEmbedded && B.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !D.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!V.isPlatformEmbedded) return;
                    (0, I.R)()
                        ? t()
                        : ((e.returnValue = H.intl.string(H.t['bST/Y2'])),
                          (0, _.Z)(() => {
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
J(q, 'defaultProps', { withTitleBar: !0 });
let X = a.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, m.cj)([z.Z], () => ({
        guestWindow: z.Z.getWindow(e.windowKey),
        focused: z.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, R.Q3)('PopoutWindow'),
        r = (0, R.R6)('PopoutWindow'),
        s = (0, m.e7)([U.Z], () => U.Z.isFocused()),
        { locale: o, theme: u } = (0, m.cj)([k.Z, L.default], () => ({
            locale: L.default.locale,
            theme: k.Z.theme
        })),
        d = (0, m.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: p, appWrapperClassName: h } = (0, A.I)(),
        v = (0, m.e7)([S.ZP], () => null != e.channelId && null !== S.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, w.Z)(n, !1);
    let I = (0, P.Z)(n, i),
        { analyticsLocations: _ } = (0, E.ZP)(x.Z.POPOUT_WINDOW),
        { clientThemesClassName: y, clientThemesCSS: b } = (0, C.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(E.Gt, {
                  value: _,
                  children: (0, l.jsx)(q, {
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
                      mouseModeEnabled: I,
                      reducedMotionEnabled: p.useReducedMotion,
                      connectedToEmbeddedActivity: v,
                      fontScaleClass: p.fontScaleClass,
                      saturation: p.saturation,
                      alwaysShowLinkDecorations: p.alwaysShowLinkDecorations,
                      clientThemesClassName: y,
                      clientThemesCSS: b,
                      appWrapperClassName: h,
                      isRefreshEnabled: a,
                      isRefreshChatInputEnabled: r
                  })
              })
          });
});
t.Z = X;
