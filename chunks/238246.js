n.d(t, { Z: () => er }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    c = n.n(s),
    u = n(568611),
    d = n(115911),
    f = n(731965),
    m = n(442837),
    p = n(481060),
    h = n(490173),
    v = n(280492),
    b = n(40851),
    g = n(607070),
    y = n(899663),
    E = n(636449),
    O = n(317381),
    S = n(496616),
    x = n(100527),
    j = n(906732),
    C = n(168551),
    Z = n(260035),
    w = n(597952),
    P = n(628123),
    N = n(686546),
    I = n(950796),
    _ = n(80006),
    R = n(151851),
    T = n(587061),
    A = n(392358),
    D = n(540059),
    k = n(280049),
    M = n(314910),
    L = n(22205),
    W = n(746106),
    F = n(706454),
    U = n(210887),
    z = n(740492),
    V = n(451478),
    Y = n(358085),
    H = n(62883),
    K = n(998502),
    G = n(473159),
    B = n(928518),
    q = n(981631),
    J = n(501787),
    X = n(388032),
    Q = n(534998);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
class en extends (r = l.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, G.O)(e), e.addEventListener('blur', this.handleBlur), Y.isPlatformEmbedded ? t.addEventListener('contextmenu', H.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', H.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload), this.registerPopoutGlobalKeybinds();
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: r, clientThemesCSS: i } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== r && this.updateLocale(), e.clientThemesCSS !== i && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(), e.removeEventListener('blur', this.handleBlur), Y.isPlatformEmbedded ? t.removeEventListener('contextmenu', H.contextMenuCallbackNative) : t.removeEventListener('contextmenu', H.contextMenuCallbackWeb), (0, f.j)(() => p.s9z.setState((e) => et(ee({}, e), { [p.u1M]: [] }))), e.removeEventListener('beforeunload', this.beforeUnload);
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
        let i = r.querySelector('style['.concat(C.PQ, ']'));
        if (null != i) {
            i.textContent = e;
            return;
        }
        let l = n.createElement('style');
        l.setAttribute(C.PQ, 'true'), (l.textContent = e), r.appendChild(l);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props,
            r = n.document.documentElement;
        r.classList.toggle('disable-forced-colors', !e && 'active' === t), r.classList.toggle('enable-forced-colors', e && 'active' === t);
    }
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, k.r)(t.documentElement)), [v.iN, v.oV])) if (e.comboKeysBindGlobal) for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ('function' == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: r, children: l, windowKey: o, isRefreshEnabled: s, isRefreshChatInputEnabled: c, mouseModeEnabled: d, reducedMotionEnabled: f, fontScaleClass: m, withTitleBar: v, guestWindow: g, clientThemesClassName: E, contentClassName: O, appWrapperClassName: S } = this.props,
            x = (0, Y.getPlatform)(),
            j = a()(m, {
                'mouse-mode': d,
                'reduce-motion': f,
                'full-motion': !f,
                'app-focused': n || r,
                'visual-refresh': s,
                'visual-refresh-chat-input': c
            }),
            C = o === J.$J ? L.Z : P.Z;
        return (0, i.jsx)(u.VK, {
            children: (0, i.jsx)(
                W.w,
                {
                    children: (0, i.jsx)(p.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, i.jsx)(p.vWI, {
                                children: (0, i.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: a()(e, (0, w.Z)(), j, E, S),
                                    children: (0, i.jsx)(p.JcV, {
                                        containerRef: this.rootRef,
                                        children: (0, i.jsx)(y.Z, {
                                            children: (0, i.jsxs)(C, {
                                                children: [
                                                    (0, i.jsx)(N.Co, {}),
                                                    (0, i.jsx)(b.Wu, {
                                                        appContext: q.IlC.POPOUT,
                                                        renderWindow: g,
                                                        children: (0, i.jsx)(Z.m, {
                                                            children: (0, i.jsxs)(M.yP, {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: Q.popout,
                                                                        children: [
                                                                            s &&
                                                                                v &&
                                                                                (0, i.jsx)(I.T, {
                                                                                    windowKey: o,
                                                                                    short: !0
                                                                                }),
                                                                            !s && v && null != x
                                                                                ? (0, i.jsx)(R.Z, {
                                                                                      focused: n,
                                                                                      type: x,
                                                                                      windowKey: o,
                                                                                      macOSFrame: !0
                                                                                  })
                                                                                : null,
                                                                            (0, i.jsx)('div', {
                                                                                className: a()(Q.content, O),
                                                                                children: l
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(p.nKe, {}),
                                                                    (0, i.jsx)(h.Z, {}),
                                                                    (0, i.jsx)(M.Un, {})
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
            $(this, 'rootRef', l.createRef()),
            $(this, '_cleanupWindowActionCreators', void 0),
            $(this, '_combokeys', null),
            $(this, 'beforeUnload', (e) => {
                let t = () => {
                    B.Z.unmountWindow(this.props.windowKey), Y.isPlatformEmbedded && K.ZP.close(this.props.windowKey);
                };
                if (null == this.props.connectedEmbeddedActivity || z.ZP.disableEmbeddedActivityPopOutAlert) t();
                else {
                    if (!Y.isPlatformEmbedded) return;
                    (0, E.R)({ isContextless: this.props.connectedEmbeddedActivity.location.kind === d.X.CONTEXTLESS })
                        ? t()
                        : ((e.returnValue = X.NW.string(X.t['bST/Y2'])),
                          (0, S.Z)(() => {
                              t();
                          }));
                }
            }),
            $(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
$(en, 'defaultProps', { withTitleBar: !0 });
let er = l.forwardRef(function (e, t) {
    let { guestWindow: n, focused: r } = (0, m.cj)([B.Z], () => ({
        guestWindow: B.Z.getWindow(e.windowKey),
        focused: B.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let l = (0, D.Q3)('PopoutWindow'),
        o = (0, D.R6)('PopoutWindow'),
        a = (0, m.e7)([V.Z], () => V.Z.isFocused()),
        { locale: s, theme: u } = (0, m.cj)([U.Z, F.default], () => ({
            locale: F.default.locale,
            theme: U.Z.theme
        })),
        d = (0, m.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: f, appWrapperClassName: h } = (0, _.I)(),
        v = (0, m.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity());
    (0, T.Z)(n, !1);
    let b = (0, A.Z)(n, r),
        { analyticsLocations: y } = (0, j.ZP)(x.Z.POPOUT_WINDOW),
        { clientThemesClassName: E, clientThemesCSS: S } = (0, C.ZP)();
    return null == n
        ? null
        : (0, i.jsx)(p.Sle, {
              children: (0, i.jsx)(j.Gt, {
                  value: y,
                  children: (0, i.jsx)(
                      en,
                      et(ee({ ref: t }, e), {
                          guestWindow: n,
                          focused: r,
                          appFocused: a,
                          locale: s,
                          theme: u,
                          forcedColors: d,
                          useForcedColors: f.useForcedColors,
                          systemForcedColors: f.systemForcedColors,
                          fontScale: f.fontScale,
                          keyboardModeEnabled: f.keyboardModeEnabled,
                          mouseModeEnabled: b,
                          reducedMotionEnabled: f.useReducedMotion,
                          connectedEmbeddedActivity: v,
                          fontScaleClass: f.fontScaleClass,
                          saturation: f.saturation,
                          alwaysShowLinkDecorations: f.alwaysShowLinkDecorations,
                          clientThemesClassName: E,
                          clientThemesCSS: S,
                          appWrapperClassName: h,
                          isRefreshEnabled: l,
                          isRefreshChatInputEnabled: o
                      })
                  )
              })
          });
});
