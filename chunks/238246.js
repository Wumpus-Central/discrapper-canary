n.d(t, { Z: () => X }), n(47120);
var l,
    i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    u = n.n(o),
    c = n(568611),
    d = n(731965),
    m = n(442837),
    f = n(481060),
    h = n(490173),
    p = n(40851),
    v = n(607070),
    g = n(899663),
    E = n(636449),
    Z = n(317381),
    x = n(496616),
    S = n(100527),
    C = n(906732),
    b = n(168551),
    I = n(260035),
    _ = n(597952),
    N = n(628123),
    R = n(686546),
    y = n(950796),
    T = n(80006),
    j = n(151851),
    w = n(587061),
    A = n(392358),
    O = n(540059),
    P = n(314910),
    k = n(22205),
    M = n(892254),
    D = n(706454),
    L = n(210887),
    F = n(740492),
    U = n(451478),
    V = n(358085),
    z = n(62883),
    W = n(998502),
    Y = n(473159),
    H = n(928518),
    B = n(981631),
    K = n(501787),
    G = n(388032),
    q = n(81796);
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
class Q extends (l = r.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, Y.O)(e), e.addEventListener('blur', this.handleBlur), V.isPlatformEmbedded ? t.addEventListener('contextmenu', z.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', z.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: l, clientThemesCSS: i } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== l && this.updateLocale(), e.clientThemesCSS !== i && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            V.isPlatformEmbedded ? t.removeEventListener('contextmenu', z.contextMenuCallbackNative) : t.removeEventListener('contextmenu', z.contextMenuCallbackWeb),
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
        u()(null != n, 'Window document element was null'), n.style.setProperty('--saturation-factor', e.toString());
    }
    updateLocale() {
        let { locale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        u()(null != n, 'Window document element was null'), (n.lang = e);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateFontScale() {
        let { fontScale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        u()(null != n, 'Window document element was null'), (n.style.fontSize = ''.concat(e, '%'));
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            l = n.head;
        u()(null != l, 'Window document '.concat('head', ' was null'));
        let i = l.querySelector('style['.concat(b.PQ, ']'));
        if (null != i) {
            i.textContent = e;
            return;
        }
        let r = n.createElement('style');
        r.setAttribute(b.PQ, 'true'), (r.textContent = e), l.appendChild(r);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props,
            l = n.document.documentElement;
        l.classList.toggle('disable-forced-colors', !e && 'active' === t), l.classList.toggle('enable-forced-colors', e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: l, children: r, windowKey: a, isRefreshEnabled: o, isRefreshChatInputEnabled: u, mouseModeEnabled: d, reducedMotionEnabled: m, fontScaleClass: v, withTitleBar: E, guestWindow: Z, clientThemesClassName: x, contentClassName: S, appWrapperClassName: C } = this.props,
            b = (0, V.getPlatform)(),
            T = s()(v, {
                'mouse-mode': d,
                'reduce-motion': m,
                'full-motion': !m,
                'app-focused': n || l,
                'visual-refresh': o,
                'visual-refresh-chat-input': u
            }),
            w = a === K.$J ? k.Z : N.Z;
        return (0, i.jsx)(c.VK, {
            children: (0, i.jsx)(
                M.Z,
                {
                    children: (0, i.jsx)(f.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, i.jsx)(f.vWI, {
                                children: (0, i.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, _.Z)(), T, x, C),
                                    children: (0, i.jsx)(f.JcV, {
                                        containerRef: this.rootRef,
                                        children: (0, i.jsx)(g.Z, {
                                            children: (0, i.jsxs)(w, {
                                                children: [
                                                    (0, i.jsx)(R.Co, {}),
                                                    (0, i.jsx)(p.Wu, {
                                                        appContext: B.IlC.POPOUT,
                                                        renderWindow: Z,
                                                        children: (0, i.jsx)(I.m, {
                                                            children: (0, i.jsxs)(P.yP, {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: q.popout,
                                                                        children: [
                                                                            o &&
                                                                                E &&
                                                                                (0, i.jsx)(y.T, {
                                                                                    windowKey: a,
                                                                                    short: !0
                                                                                }),
                                                                            !o && E && null != b
                                                                                ? (0, i.jsx)(j.Z, {
                                                                                      focused: n,
                                                                                      type: b,
                                                                                      windowKey: a,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, i.jsx)('div', {
                                                                                className: s()(q.content, S),
                                                                                children: r
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(f.nKe, {}),
                                                                    (0, i.jsx)(h.Z, {}),
                                                                    (0, i.jsx)(P.Un, {})
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
            J(this, 'rootRef', r.createRef()),
            J(this, '_cleanupWindowActionCreators', void 0),
            J(this, 'beforeUnload', (e) => {
                let t = () => {
                    H.Z.unmountWindow(this.props.windowKey), V.isPlatformEmbedded && W.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !F.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!V.isPlatformEmbedded) return;
                    (0, E.R)()
                        ? t()
                        : ((e.returnValue = G.intl.string(G.t['bST/Y2'])),
                          (0, x.Z)(() => {
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
J(Q, 'defaultProps', { withTitleBar: !0 });
let X = r.forwardRef(function (e, t) {
    let { guestWindow: n, focused: l } = (0, m.cj)([H.Z], () => ({
        guestWindow: H.Z.getWindow(e.windowKey),
        focused: H.Z.getWindowFocused(e.windowKey)
    }));
    u()(null != n, 'Missing guestWindow reference');
    let r = (0, O.Q3)('PopoutWindow'),
        a = (0, O.R6)('PopoutWindow'),
        s = (0, m.e7)([U.Z], () => U.Z.isFocused()),
        { locale: o, theme: c } = (0, m.cj)([L.Z, D.default], () => ({
            locale: D.default.locale,
            theme: L.Z.theme
        })),
        d = (0, m.e7)([v.Z], () => (v.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: h, appWrapperClassName: p } = (0, T.I)(),
        g = (0, m.e7)([Z.ZP], () => null != e.channelId && null !== Z.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, w.Z)(n, !1);
    let E = (0, A.Z)(n, l),
        { analyticsLocations: x } = (0, C.ZP)(S.Z.POPOUT_WINDOW),
        { clientThemesClassName: I, clientThemesCSS: _ } = (0, b.ZP)();
    return null == n
        ? null
        : (0, i.jsx)(f.Sle, {
              children: (0, i.jsx)(C.Gt, {
                  value: x,
                  children: (0, i.jsx)(Q, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: l,
                      appFocused: s,
                      locale: o,
                      theme: c,
                      forcedColors: d,
                      useForcedColors: h.useForcedColors,
                      systemForcedColors: h.systemForcedColors,
                      fontScale: h.fontScale,
                      keyboardModeEnabled: h.keyboardModeEnabled,
                      mouseModeEnabled: E,
                      reducedMotionEnabled: h.useReducedMotion,
                      connectedToEmbeddedActivity: g,
                      fontScaleClass: h.fontScaleClass,
                      saturation: h.saturation,
                      alwaysShowLinkDecorations: h.alwaysShowLinkDecorations,
                      clientThemesClassName: I,
                      clientThemesCSS: _,
                      appWrapperClassName: p,
                      isRefreshEnabled: r,
                      isRefreshChatInputEnabled: a
                  })
              })
          });
});
