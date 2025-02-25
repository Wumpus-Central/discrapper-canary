n.d(t, { Z: () => en }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    c = n.n(s),
    u = n(568611),
    d = n(731965),
    f = n(442837),
    m = n(481060),
    p = n(490173),
    h = n(280492),
    v = n(40851),
    b = n(607070),
    g = n(899663),
    y = n(636449),
    E = n(317381),
    O = n(496616),
    S = n(100527),
    j = n(906732),
    x = n(168551),
    Z = n(260035),
    w = n(597952),
    C = n(628123),
    P = n(686546),
    N = n(950796),
    I = n(80006),
    R = n(151851),
    _ = n(587061),
    k = n(392358),
    T = n(540059),
    A = n(280049),
    D = n(314910),
    M = n(22205),
    L = n(892254),
    W = n(706454),
    F = n(210887),
    U = n(740492),
    z = n(451478),
    V = n(358085),
    H = n(62883),
    Y = n(998502),
    K = n(473159),
    B = n(928518),
    G = n(981631),
    q = n(501787),
    J = n(388032),
    X = n(53794);
function Q(e, t, n) {
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
function $(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function ee(e, t) {
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
class et extends (r = l.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, K.O)(e), e.addEventListener('blur', this.handleBlur), V.isPlatformEmbedded ? t.addEventListener('contextmenu', H.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', H.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: r, clientThemesCSS: i } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== r && this.updateLocale(), e.clientThemesCSS !== i && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), V.isPlatformEmbedded ? t.removeEventListener('contextmenu', H.contextMenuCallbackNative) : t.removeEventListener('contextmenu', H.contextMenuCallbackWeb), (0, d.j)(() => m.s9z.setState((e) => ee($({}, e), { [m.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
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
        let i = r.querySelector('style['.concat(x.PQ, ']'));
        if (null != i) {
            i.textContent = e;
            return;
        }
        let l = n.createElement('style');
        l.setAttribute(x.PQ, 'true'), (l.textContent = e), r.appendChild(l);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props,
            r = n.document.documentElement;
        r.classList.toggle('disable-forced-colors', !e && 'active' === t), r.classList.toggle('enable-forced-colors', e && 'active' === t);
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, A.r)(t.documentElement)), [h.iN, h.oV])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: r, children: l, windowKey: o, isRefreshEnabled: s, isRefreshChatInputEnabled: c, mouseModeEnabled: d, reducedMotionEnabled: f, fontScaleClass: h, withTitleBar: b, guestWindow: y, clientThemesClassName: E, contentClassName: O, appWrapperClassName: S } = this.props,
            j = (0, V.getPlatform)(),
            x = a()(h, {
                'mouse-mode': d,
                'reduce-motion': f,
                'full-motion': !f,
                'app-focused': n || r,
                'visual-refresh': s,
                'visual-refresh-chat-input': c
            }),
            I = o === q.$J ? M.Z : C.Z;
        return (0, i.jsx)(u.VK, {
            children: (0, i.jsx)(
                L.Z,
                {
                    children: (0, i.jsx)(m.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, i.jsx)(m.vWI, {
                                children: (0, i.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: a()(e, (0, w.Z)(), x, E, S),
                                    children: (0, i.jsx)(m.JcV, {
                                        containerRef: this.rootRef,
                                        children: (0, i.jsx)(g.Z, {
                                            children: (0, i.jsxs)(I, {
                                                children: [
                                                    (0, i.jsx)(P.Co, {}),
                                                    (0, i.jsx)(v.Wu, {
                                                        appContext: G.IlC.POPOUT,
                                                        renderWindow: y,
                                                        children: (0, i.jsx)(Z.m, {
                                                            children: (0, i.jsxs)(D.yP, {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: X.popout,
                                                                        children: [
                                                                            s &&
                                                                                b &&
                                                                                (0, i.jsx)(N.T, {
                                                                                    windowKey: o,
                                                                                    short: !0
                                                                                }),
                                                                            !s && b && null != j
                                                                                ? (0, i.jsx)(R.Z, {
                                                                                      focused: n,
                                                                                      type: j,
                                                                                      windowKey: o,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, i.jsx)('div', {
                                                                                className: a()(X.content, O),
                                                                                children: l
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(m.nKe, {}),
                                                                    (0, i.jsx)(p.Z, {}),
                                                                    (0, i.jsx)(D.Un, {})
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
            Q(this, 'rootRef', l.createRef()),
            Q(this, '_cleanupWindowActionCreators', void 0),
            Q(this, '_combokeys', null),
            Q(this, 'beforeUnload', (e) => {
                let t = () => {
                    B.Z.unmountWindow(this.props.windowKey), V.isPlatformEmbedded && Y.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !U.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!V.isPlatformEmbedded) return;
                    (0, y.R)()
                        ? t()
                        : ((e.returnValue = J.NW.string(J.t['bST/Y2'])),
                          (0, O.Z)(() => {
                              t();
                          }));
                } else t();
            }),
            Q(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
Q(et, 'defaultProps', { withTitleBar: !0 });
let en = l.forwardRef(function (e, t) {
    let { guestWindow: n, focused: r } = (0, f.cj)([B.Z], () => ({
        guestWindow: B.Z.getWindow(e.windowKey),
        focused: B.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let l = (0, T.Q3)('PopoutWindow'),
        o = (0, T.R6)('PopoutWindow'),
        a = (0, f.e7)([z.Z], () => z.Z.isFocused()),
        { locale: s, theme: u } = (0, f.cj)([F.Z, W.default], () => ({
            locale: W.default.locale,
            theme: F.Z.theme
        })),
        d = (0, f.e7)([b.Z], () => (b.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: p, appWrapperClassName: h } = (0, I.I)(),
        v = (0, f.e7)([E.ZP], () => null != e.channelId && null !== E.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, _.Z)(n, !1);
    let g = (0, k.Z)(n, r),
        { analyticsLocations: y } = (0, j.ZP)(S.Z.POPOUT_WINDOW),
        { clientThemesClassName: O, clientThemesCSS: Z } = (0, x.ZP)();
    return null == n
        ? null
        : (0, i.jsx)(m.Sle, {
              children: (0, i.jsx)(j.Gt, {
                  value: y,
                  children: (0, i.jsx)(
                      et,
                      ee($({ ref: t }, e), {
                          guestWindow: n,
                          focused: r,
                          appFocused: a,
                          locale: s,
                          theme: u,
                          forcedColors: d,
                          useForcedColors: p.useForcedColors,
                          systemForcedColors: p.systemForcedColors,
                          fontScale: p.fontScale,
                          keyboardModeEnabled: p.keyboardModeEnabled,
                          mouseModeEnabled: g,
                          reducedMotionEnabled: p.useReducedMotion,
                          connectedToEmbeddedActivity: v,
                          fontScaleClass: p.fontScaleClass,
                          saturation: p.saturation,
                          alwaysShowLinkDecorations: p.alwaysShowLinkDecorations,
                          clientThemesClassName: O,
                          clientThemesCSS: Z,
                          appWrapperClassName: h,
                          isRefreshEnabled: l,
                          isRefreshChatInputEnabled: o
                      })
                  )
              })
          });
});
