n.d(t, { w: () => P }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(631562),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(299363),
    f = n(338390),
    _ = n(803038),
    p = n(950796),
    h = n(392358),
    m = n(591146),
    g = n(377089),
    E = n(314910),
    b = n(928518),
    y = n(823961),
    O = n(819439),
    v = n(706454),
    I = n(210887),
    T = n(451478),
    S = n(998502),
    A = n(264783),
    C = n(892071),
    N = n(388032);
function R(e, t, n) {
    let r = i.useCallback(
            () => ({
                i18n: {
                    SPINNER_LOADING_LABEL: N.intl.string(N.t.ZTNur6),
                    BUTTON_LOADING_STARTED_LABEL: N.intl.string(N.t.pfChQk),
                    BUTTON_LOADING_FINISHED_LABEL: N.intl.string(N.t.SVPara),
                    CLOSE_BUTTON_LABEL: N.intl.string(N.t.cpT0Cg),
                    PLAY_BUTTON_LABEL: N.intl.string(N.t.RscU7O),
                    PAUSE_BUTTON_LABEL: N.intl.string(N.t.ZcgDJS),
                    NEW: N.intl.string(N.t.y2b7CA),
                    BETA: N.intl.string(N.t.oW0eUV),
                    EARLY_ACCESS: N.intl.string(N.t.EYxi0t),
                    BILLING_TRIAL_FREE_TRIAL_TEXT: N.intl.string(N.t.IBYG5e),
                },
                theme: e,
                saturation: t,
                defaultLayerContext: E.nz,
                experiments: { enabledExperiments: n },
            }),
            [e, t, n],
        ),
        [o, s] = i.useState(r);
    return (
        i.useLayoutEffect(() => {
            function e() {
                s(r);
            }
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), N.intl.onLocaleChange(e);
        }, [r]),
        o
    );
}
function P(e) {
    let { windowKey: t, themeOverride: n, children: a } = e,
        o = null != t,
        [E] = i.useState(() => S.ZP.getEnableHardwareAcceleration()),
        {
            locale: N,
            theme: P,
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
        } = (0, l.cj)([v.default, u.Z, I.Z, T.Z, b.Z, y.Z], () => {
            var e;
            return {
                locale: v.default.locale,
                theme: null != n ? n : I.Z.theme,
                focused: o ? b.Z.getWindowFocused(t) : T.Z.isFocused(),
                currentWindow: o && null != (e = b.Z.getWindow(t)) ? e : window,
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
                confettiMode: y.Z.confettiMode,
            };
        }),
        H = d.U.useExperiment({ location: "RootThemeContextProvider" }, { autoTrackExposure: !0 }).enabled,
        Y = (0, h.Z)(D, __OVERLAY__ || w),
        W = 0;
    1 !== M && (W = (0, c.OdO)(W, c.bgu.REDUCE_SATURATION_ENABLED));
    let K = (0, A.A)(),
        z = (0, m.Ml)("RootThemeContextProvider"),
        q = (0, m.CL)("RootThemeContextProvider"),
        X = (0, m.VM)("RootThemeContextProvider"),
        Q = (0, g.U)("RootThemeContextProvider"),
        J = _.Mc.useExperiment({ location: "RootThemeContextProvider" }).enabled,
        $ = (0, f.Z)("RootThemeContextProvider"),
        ee = (0, O.$)({ location: "RootThemeContextProvider" }),
        et = (0, p.On)({
            isPopoutWindow: o,
            isSearchDesktopTopLevelEnabled: ee,
        }),
        en = R(
            P,
            M,
            i.useMemo(() => {
                let e = [];
                return (
                    z && e.push("refresh-fast-follow-avatars"),
                    q && e.push("refresh-fast-follow-guild-bg"),
                    X && e.push("refresh-fast-follow-distinct-borders"),
                    Q && e.push("mana-text-inputs"),
                    e
                );
            }, [z, q, X, Q]),
        );
    return (0, r.jsx)(c.kb5, {
        value: en,
        children: (0, r.jsx)(c.wMY, {
            theme: P,
            flags: W,
            saturation: M,
            density: K,
            children: (0, r.jsx)(C.cE, {
                lang: N,
                theme: P,
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
                hardwareAccelerationEnabled: E,
                highContrastMode: H && V,
                isPopoutWindow: o,
                rootClassName: s()(et, {
                    "confetti-mode": F,
                    "refresh-fast-follow-avatars": z && !$,
                    "refresh-fast-follow-guild-bg": q,
                    "refresh-fast-follow-distinct-borders": X,
                    "client-theme-color-picker": J,
                    "align-chat-input": $,
                }),
                children: a,
            }),
        }),
    });
}
