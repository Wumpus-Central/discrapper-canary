n.d(t, { w: () => w }), n(388685), n(539854);
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
    _ = n(803038),
    p = n(950796),
    h = n(392358),
    m = n(591146),
    g = n(377089),
    E = n(877371),
    b = n(314910),
    y = n(928518),
    O = n(823961),
    v = n(819439),
    I = n(706454),
    T = n(210887),
    S = n(451478),
    A = n(998502),
    C = n(264783),
    N = n(892071),
    R = n(388032);
function P(e, t, n, r) {
    let o = i.useContext(f.Z),
        s = i.useCallback(
            () => ({
                i18n: {
                    SPINNER_LOADING_LABEL: R.intl.string(R.t.ZTNur6),
                    BUTTON_LOADING_STARTED_LABEL: R.intl.string(R.t.pfChQk),
                    BUTTON_LOADING_FINISHED_LABEL: R.intl.string(R.t.SVPara),
                    CLOSE_BUTTON_LABEL: R.intl.string(R.t.cpT0Cg),
                    PLAY_BUTTON_LABEL: R.intl.string(R.t.RscU7O),
                    PAUSE_BUTTON_LABEL: R.intl.string(R.t.ZcgDJS),
                    NEW: R.intl.string(R.t.y2b7CA),
                    BETA: R.intl.string(R.t.oW0eUV),
                    EARLY_ACCESS: R.intl.string(R.t.EYxi0t),
                    BILLING_TRIAL_FREE_TRIAL_TEXT: R.intl.string(R.t.IBYG5e),
                },
                theme: e,
                saturation: t,
                defaultLayerContext: b.nz,
                experiments: { enabledExperiments: n },
                trackImpression: o,
                isWindowFocused: () => r,
            }),
            [e, t, n, o, r],
        ),
        [l, c] = i.useState(s);
    return (
        i.useLayoutEffect(() => {
            function e() {
                c(s);
            }
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), R.intl.onLocaleChange(e);
        }, [s]),
        l
    );
}
function w(e) {
    let { windowKey: t, themeOverride: n, children: a } = e,
        o = null != t,
        [f] = i.useState(() => A.ZP.getEnableHardwareAcceleration()),
        {
            locale: b,
            theme: R,
            focused: w,
            currentWindow: D,
            fontScale: x,
            fontScaleClass: L,
            keyboardModeEnabled: j,
            saturation: M,
            desaturateUserColors: k,
            useForcedColors: U,
            systemForcedColors: G,
            useReducedMotion: B,
            alwaysShowLinkDecorations: Z,
            confettiMode: F,
            highContrastMode: V,
        } = (0, l.cj)([I.default, u.Z, T.Z, S.Z, y.Z, O.Z], () => {
            var e;
            return {
                locale: I.default.locale,
                theme: null != n ? n : T.Z.theme,
                focused: o ? y.Z.getWindowFocused(t) : S.Z.isFocused(),
                currentWindow: o && null != (e = y.Z.getWindow(t)) ? e : window,
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
                confettiMode: O.Z.confettiMode,
            };
        }),
        H = d.U.useExperiment({ location: "RootThemeContextProvider" }, { autoTrackExposure: !0 }).enabled,
        Y = (0, h.Z)(D, __OVERLAY__ || w),
        W = 0;
    1 !== M && (W = (0, c.OdO)(W, c.bgu.REDUCE_SATURATION_ENABLED));
    let K = (0, C.A)(),
        z = (0, m.Ml)("RootThemeContextProvider"),
        q = (0, m.CL)("RootThemeContextProvider"),
        X = (0, m.VM)("RootThemeContextProvider"),
        Q = (0, g.U)("RootThemeContextProvider"),
        J = (0, E.A)("RootThemeContextProvider"),
        $ = _.Mc.useExperiment({ location: "RootThemeContextProvider" }).enabled,
        ee = (0, v.$)({ location: "RootThemeContextProvider" }),
        et = (0, p.On)({
            isPopoutWindow: o,
            isSearchDesktopTopLevelEnabled: ee,
        }),
        en = P(
            R,
            M,
            i.useMemo(() => {
                let e = [];
                return (
                    z && e.push("refresh-fast-follow-avatars"),
                    q && e.push("refresh-fast-follow-guild-bg"),
                    X && e.push("refresh-fast-follow-distinct-borders"),
                    Q && e.push("mana-text-inputs"),
                    J && e.push("mana-toggle-inputs"),
                    e
                );
            }, [z, q, X, Q, J]),
            w,
        );
    return (0, r.jsx)(c.kb5, {
        value: en,
        children: (0, r.jsx)(c.wMY, {
            theme: R,
            flags: W,
            saturation: M,
            density: K,
            children: (0, r.jsx)(N.cE, {
                lang: b,
                theme: R,
                density: K,
                focused: w,
                fontScale: x,
                fontScaleClass: L,
                keyboardModeEnabled: j,
                mouseMode: Y,
                saturation: M,
                desaturateUserColors: k,
                useForcedColors: U,
                systemForcedColors: G,
                useReducedMotion: B,
                alwaysShowLinkDecorations: Z,
                hardwareAccelerationEnabled: f,
                highContrastMode: H && V,
                isPopoutWindow: o,
                rootClassName: s()(et, {
                    "confetti-mode": F,
                    "refresh-fast-follow-avatars": z,
                    "refresh-fast-follow-guild-bg": q,
                    "refresh-fast-follow-distinct-borders": X,
                    "client-theme-color-picker": $,
                }),
                children: a,
            }),
        }),
    });
}
