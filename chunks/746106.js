n.d(t, { w: () => D }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(631562),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(299363),
    f = n(793903),
    _ = n(338390),
    p = n(803038),
    h = n(950796),
    m = n(392358),
    g = n(591146),
    E = n(377089),
    b = n(877371),
    y = n(314910),
    O = n(928518),
    v = n(823961),
    I = n(819439),
    T = n(706454),
    S = n(210887),
    A = n(451478),
    C = n(998502),
    N = n(264783),
    R = n(892071),
    P = n(388032);
function w(e, t, n) {
    let r = i.useContext(f.Z),
        o = i.useCallback(
            () => ({
                i18n: {
                    SPINNER_LOADING_LABEL: P.intl.string(P.t.ZTNur6),
                    BUTTON_LOADING_STARTED_LABEL: P.intl.string(P.t.pfChQk),
                    BUTTON_LOADING_FINISHED_LABEL: P.intl.string(P.t.SVPara),
                    CLOSE_BUTTON_LABEL: P.intl.string(P.t.cpT0Cg),
                    PLAY_BUTTON_LABEL: P.intl.string(P.t.RscU7O),
                    PAUSE_BUTTON_LABEL: P.intl.string(P.t.ZcgDJS),
                    NEW: P.intl.string(P.t.y2b7CA),
                    BETA: P.intl.string(P.t.oW0eUV),
                    EARLY_ACCESS: P.intl.string(P.t.EYxi0t),
                    BILLING_TRIAL_FREE_TRIAL_TEXT: P.intl.string(P.t.IBYG5e),
                },
                theme: e,
                saturation: t,
                defaultLayerContext: y.nz,
                experiments: { enabledExperiments: n },
                trackImpression: r,
            }),
            [e, t, n, r],
        ),
        [s, l] = i.useState(o);
    return (
        i.useLayoutEffect(() => {
            function e() {
                l(o);
            }
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e);
        }, [o]),
        s
    );
}
function D(e) {
    let { windowKey: t, themeOverride: n, children: a } = e,
        o = null != t,
        [f] = i.useState(() => C.ZP.getEnableHardwareAcceleration()),
        {
            locale: y,
            theme: P,
            focused: D,
            currentWindow: x,
            fontScale: L,
            fontScaleClass: j,
            keyboardModeEnabled: M,
            saturation: k,
            desaturateUserColors: U,
            useForcedColors: G,
            systemForcedColors: B,
            useReducedMotion: Z,
            alwaysShowLinkDecorations: F,
            confettiMode: V,
            highContrastMode: H,
        } = (0, l.cj)([T.default, u.Z, S.Z, A.Z, O.Z, v.Z], () => {
            var e;
            return {
                locale: T.default.locale,
                theme: null != n ? n : S.Z.theme,
                focused: o ? O.Z.getWindowFocused(t) : A.Z.isFocused(),
                currentWindow: o && null != (e = O.Z.getWindow(t)) ? e : window,
                fontScale: u.Z.fontScale,
                fontScaleClass: u.Z.fontScaleClass,
                keyboardModeEnabled: u.Z.keyboardModeEnabled,
                saturation: u.Z.saturation,
                desaturateUserColors: u.Z.desaturateUserColors,
                useForcedColors: u.Z.useForcedColors,
                systemForcedColors: u.Z.systemForcedColors,
                useReducedMotion: u.Z.useReducedMotion,
                alwaysShowLinkDecorations: u.Z.alwaysShowLinkDecorations,
                highContrastMode: u.Z.isHighContrastModeEnabled,
                confettiMode: v.Z.confettiMode,
            };
        }),
        Y = d.U.useExperiment({ location: "RootThemeContextProvider" }, { autoTrackExposure: !0 }).enabled,
        W = (0, m.Z)(x, __OVERLAY__ || D),
        K = 0;
    1 !== k && (K = (0, c.OdO)(K, c.bgu.REDUCE_SATURATION_ENABLED));
    let z = (0, N.A)(),
        q = (0, g.Ml)("RootThemeContextProvider"),
        X = (0, g.CL)("RootThemeContextProvider"),
        Q = (0, g.VM)("RootThemeContextProvider"),
        J = (0, E.U)("RootThemeContextProvider"),
        $ = (0, b.A)("RootThemeContextProvider"),
        ee = p.Mc.useExperiment({ location: "RootThemeContextProvider" }).enabled,
        et = (0, _.Z)("RootThemeContextProvider"),
        en = (0, I.$)({ location: "RootThemeContextProvider" }),
        er = (0, h.On)({
            isPopoutWindow: o,
            isSearchDesktopTopLevelEnabled: en,
        }),
        ei = w(
            P,
            k,
            i.useMemo(() => {
                let e = [];
                return (
                    q && e.push("refresh-fast-follow-avatars"),
                    X && e.push("refresh-fast-follow-guild-bg"),
                    Q && e.push("refresh-fast-follow-distinct-borders"),
                    J && e.push("mana-text-inputs"),
                    $ && e.push("mana-toggle-inputs"),
                    e
                );
            }, [q, X, Q, J, $]),
        );
    return (0, r.jsx)(c.kb5, {
        value: ei,
        children: (0, r.jsx)(c.wMY, {
            theme: P,
            flags: K,
            saturation: k,
            density: z,
            children: (0, r.jsx)(R.cE, {
                lang: y,
                theme: P,
                density: z,
                focused: D,
                fontScale: L,
                fontScaleClass: j,
                keyboardModeEnabled: M,
                mouseMode: W,
                saturation: k,
                desaturateUserColors: U,
                useForcedColors: G,
                systemForcedColors: B,
                useReducedMotion: Z,
                alwaysShowLinkDecorations: F,
                hardwareAccelerationEnabled: f,
                highContrastMode: Y && H,
                isPopoutWindow: o,
                rootClassName: s()(er, {
                    "confetti-mode": V,
                    "refresh-fast-follow-avatars": q && !et,
                    "refresh-fast-follow-guild-bg": X,
                    "refresh-fast-follow-distinct-borders": Q,
                    "client-theme-color-picker": ee,
                    "align-chat-input": et,
                }),
                children: a,
            }),
        }),
    });
}
