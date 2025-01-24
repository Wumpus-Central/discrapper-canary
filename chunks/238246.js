n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
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
    S = n(636449),
    I = n(317381),
    x = n(496616),
    _ = n(100527),
    C = n(906732),
    b = n(168551),
    E = n(260035),
    y = n(597952),
    Z = n(628123),
    T = n(686546),
    N = n(950796),
    A = n(80006),
    j = n(151851),
    w = n(587061),
    P = n(392358),
    R = n(540059),
    O = n(314910),
    k = n(22205),
    M = n(892254),
    L = n(706454),
    D = n(210887),
    U = n(740492),
    V = n(451478),
    F = n(358085),
    z = n(62883),
    B = n(998502),
    W = n(473159),
    G = n(928518),
    H = n(981631),
    Y = n(501787),
    q = n(388032),
    J = n(81796);
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
class K extends (i = r.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, W.O)(e), e.addEventListener('blur', this.handleBlur), F.isPlatformEmbedded ? t.addEventListener('contextmenu', z.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', z.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            F.isPlatformEmbedded ? t.removeEventListener('contextmenu', z.contextMenuCallbackNative) : t.removeEventListener('contextmenu', z.contextMenuCallbackWeb),
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
        let l = i.querySelector('style['.concat(b.PQ, ']'));
        if (null != l) {
            l.textContent = e;
            return;
        }
        let r = n.createElement('style');
        r.setAttribute(b.PQ, 'true'), (r.textContent = e), i.appendChild(r);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: r, windowKey: a, isRefreshEnabled: o, isRefreshChatInputEnabled: c, mouseModeEnabled: d, reducedMotionEnabled: m, fontScaleClass: g, withTitleBar: S, guestWindow: I, clientThemesClassName: x, contentClassName: _, appWrapperClassName: C } = this.props,
            b = (0, F.getPlatform)(),
            A = s()(g, {
                'mouse-mode': d,
                'reduce-motion': m,
                'full-motion': !m,
                'app-focused': n || i,
                'visual-refresh': o,
                'visual-refresh-chat-input': c
            }),
            w = a === Y.OVERLAY_V3_KEY ? k.Z : Z.Z;
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                M.Z,
                {
                    children: (0, l.jsx)(f.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(f.RedesignIconContextProvider, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, y.Z)(), A, x, C),
                                    children: (0, l.jsx)(f.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(w, {
                                                children: [
                                                    (0, l.jsx)(T.Co, {}),
                                                    (0, l.jsx)(h.Wu, {
                                                        appContext: H.IlC.POPOUT,
                                                        renderWindow: I,
                                                        children: (0, l.jsx)(E.m, {
                                                            children: (0, l.jsxs)(O.yP, {
                                                                children: [
                                                                    (0, l.jsxs)('div', {
                                                                        className: J.popout,
                                                                        children: [
                                                                            o &&
                                                                                S &&
                                                                                (0, l.jsx)(N.T, {
                                                                                    windowKey: a,
                                                                                    short: !0
                                                                                }),
                                                                            !o && S && null != b
                                                                                ? (0, l.jsx)(j.Z, {
                                                                                      focused: n,
                                                                                      type: b,
                                                                                      windowKey: a,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, l.jsx)('div', {
                                                                                className: s()(J.content, _),
                                                                                children: r
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, l.jsx)(f.Modals, {}),
                                                                    (0, l.jsx)(p.Z, {}),
                                                                    (0, l.jsx)(O.Un, {})
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
            X(this, 'rootRef', r.createRef()),
            X(this, '_cleanupWindowActionCreators', void 0),
            X(this, 'beforeUnload', (e) => {
                let t = () => {
                    G.Z.unmountWindow(this.props.windowKey), F.isPlatformEmbedded && B.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !U.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!F.isPlatformEmbedded) return;
                    (0, S.R)()
                        ? t()
                        : ((e.returnValue = q.intl.string(q.t['bST/Y2'])),
                          (0, x.Z)(() => {
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
let Q = r.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, m.cj)([G.Z], () => ({
        guestWindow: G.Z.getWindow(e.windowKey),
        focused: G.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let r = (0, R.Q3)('PopoutWindow'),
        a = (0, R.R6)('PopoutWindow'),
        s = (0, m.e7)([V.Z], () => V.Z.isFocused()),
        { locale: o, theme: u } = (0, m.cj)([D.Z, L.default], () => ({
            locale: L.default.locale,
            theme: D.Z.theme
        })),
        d = (0, m.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: p, appWrapperClassName: h } = (0, A.I)(),
        v = (0, m.e7)([I.ZP], () => null != e.channelId && null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, w.Z)(n, !1);
    let S = (0, P.Z)(n, i),
        { analyticsLocations: x } = (0, C.ZP)(_.Z.POPOUT_WINDOW),
        { clientThemesClassName: E, clientThemesCSS: y } = (0, b.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(C.Gt, {
                  value: x,
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
                      mouseModeEnabled: S,
                      reducedMotionEnabled: p.useReducedMotion,
                      connectedToEmbeddedActivity: v,
                      fontScaleClass: p.fontScaleClass,
                      saturation: p.saturation,
                      alwaysShowLinkDecorations: p.alwaysShowLinkDecorations,
                      clientThemesClassName: E,
                      clientThemesCSS: y,
                      appWrapperClassName: h,
                      isRefreshEnabled: r,
                      isRefreshChatInputEnabled: a
                  })
              })
          });
});
t.Z = Q;
