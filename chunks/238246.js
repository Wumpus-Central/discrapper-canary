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
    g = n(40851),
    h = n(607070),
    v = n(899663),
    S = n(636449),
    I = n(317381),
    _ = n(496616),
    x = n(100527),
    E = n(906732),
    C = n(168551),
    Z = n(260035),
    y = n(597952),
    b = n(628123),
    T = n(686546),
    A = n(950796),
    N = n(80006),
    w = n(151851),
    j = n(587061),
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
    W = n(998502),
    B = n(473159),
    G = n(928518),
    z = n(981631),
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
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, B.O)(e), e.addEventListener('blur', this.handleBlur), V.isPlatformEmbedded ? t.addEventListener('contextmenu', F.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', F.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
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
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: r, isRefreshEnabled: o, mouseModeEnabled: c, reducedMotionEnabled: d, fontScaleClass: m, withTitleBar: h, guestWindow: S, clientThemesClassName: I, contentClassName: _, appWrapperClassName: x } = this.props,
            E = (0, V.getPlatform)(),
            C = s()(m, {
                'mouse-mode': c,
                'reduce-motion': d,
                'full-motion': !d,
                'app-focused': n || i,
                'visual-refresh': o
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
                                    className: s()(e, (0, y.Z)(), C, I, x),
                                    children: (0, l.jsx)(f.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(b.Z, {
                                                children: [
                                                    (0, l.jsx)(T.Co, {}),
                                                    (0, l.jsx)(g.Wu, {
                                                        appContext: z.IlC.POPOUT,
                                                        renderWindow: S,
                                                        children: (0, l.jsx)(Z.m, {
                                                            children: (0, l.jsxs)(M.yP, {
                                                                children: [
                                                                    (0, l.jsxs)('div', {
                                                                        className: Y.popout,
                                                                        children: [
                                                                            o &&
                                                                                h &&
                                                                                (0, l.jsx)(A.T, {
                                                                                    windowKey: r,
                                                                                    short: !0
                                                                                }),
                                                                            !o && h && null != E
                                                                                ? (0, l.jsx)(w.Z, {
                                                                                      focused: n,
                                                                                      type: E,
                                                                                      windowKey: r,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, l.jsx)('div', {
                                                                                className: s()(Y.content, _),
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
                    G.Z.unmountWindow(this.props.windowKey), V.isPlatformEmbedded && W.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !D.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!V.isPlatformEmbedded) return;
                    (0, S.R)()
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
    let { guestWindow: n, focused: i } = (0, m.cj)([G.Z], () => ({
        guestWindow: G.Z.getWindow(e.windowKey),
        focused: G.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, R.Q3)('PopoutWindow'),
        r = (0, m.e7)([U.Z], () => U.Z.isFocused()),
        { locale: s, theme: o } = (0, m.cj)([k.Z, L.default], () => ({
            locale: L.default.locale,
            theme: k.Z.theme
        })),
        u = (0, m.e7)([h.Z], () => (h.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: d, appWrapperClassName: p } = (0, N.I)(),
        g = (0, m.e7)([I.ZP], () => null != e.channelId && null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, j.Z)(n, !1);
    let v = (0, P.Z)(n, i),
        { analyticsLocations: S } = (0, E.ZP)(x.Z.POPOUT_WINDOW),
        { clientThemesClassName: _, clientThemesCSS: Z } = (0, C.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(E.Gt, {
                  value: S,
                  children: (0, l.jsx)(q, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: r,
                      locale: s,
                      theme: o,
                      forcedColors: u,
                      useForcedColors: d.useForcedColors,
                      systemForcedColors: d.systemForcedColors,
                      fontScale: d.fontScale,
                      keyboardModeEnabled: d.keyboardModeEnabled,
                      mouseModeEnabled: v,
                      reducedMotionEnabled: d.useReducedMotion,
                      connectedToEmbeddedActivity: g,
                      fontScaleClass: d.fontScaleClass,
                      saturation: d.saturation,
                      alwaysShowLinkDecorations: d.alwaysShowLinkDecorations,
                      clientThemesClassName: _,
                      clientThemesCSS: Z,
                      appWrapperClassName: p,
                      isRefreshEnabled: a
                  })
              })
          });
});
t.Z = X;
