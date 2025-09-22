n.d(t, { w: () => R }), n(388685);
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
    g = n(314910),
    E = n(928518),
    b = n(823961),
    y = n(819439),
    O = n(706454),
    v = n(210887),
    I = n(451478),
    T = n(998502),
    S = n(264783),
    A = n(892071),
    C = n(388032);
function N(e, t) {
    let n = i.useCallback(
            () => ({
                i18n: {
                    SPINNER_LOADING_LABEL: C.intl.string(C.t.ZTNur6),
                    BUTTON_LOADING_STARTED_LABEL: C.intl.string(C.t.pfChQk),
                    BUTTON_LOADING_FINISHED_LABEL: C.intl.string(C.t.SVPara),
                    CLOSE_BUTTON_LABEL: C.intl.string(C.t.cpT0Cg),
                    PLAY_BUTTON_LABEL: C.intl.string(C.t.RscU7O),
                    PAUSE_BUTTON_LABEL: C.intl.string(C.t.ZcgDJS),
                    NEW: C.intl.string(C.t.y2b7CA),
                    BETA: C.intl.string(C.t.oW0eUV),
                    EARLY_ACCESS: C.intl.string(C.t.EYxi0t),
                    BILLING_TRIAL_FREE_TRIAL_TEXT: C.intl.string(C.t.IBYG5e),
                },
                theme: e,
                saturation: t,
                defaultLayerContext: g.nz,
            }),
            [e, t],
        ),
        [r, o] = i.useState(n);
    return (
        i.useLayoutEffect(() => {
            function e() {
                o(n);
            }
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), C.intl.onLocaleChange(e);
        }, [n]),
        r
    );
}
function R(e) {
    let { windowKey: t, themeOverride: n, children: a } = e,
        o = null != t,
        [g] = i.useState(() => T.ZP.getEnableHardwareAcceleration()),
        {
            locale: C,
            theme: R,
            focused: P,
            currentWindow: w,
            fontScale: D,
            fontScaleClass: x,
            keyboardModeEnabled: L,
            saturation: j,
            desaturateUserColors: M,
            useForcedColors: k,
            systemForcedColors: U,
            useReducedMotion: G,
            alwaysShowLinkDecorations: B,
            confettiMode: Z,
            highContrastMode: F,
        } = (0, l.cj)([O.default, u.Z, v.Z, I.Z, E.Z, b.Z], () => {
            var e;
            return {
                locale: O.default.locale,
                theme: null != n ? n : v.Z.theme,
                focused: o ? E.Z.getWindowFocused(t) : I.Z.isFocused(),
                currentWindow: o && null != (e = E.Z.getWindow(t)) ? e : window,
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
                confettiMode: b.Z.confettiMode,
            };
        }),
        V = d.U.useExperiment({ location: "RootThemeContextProvider" }, { autoTrackExposure: !0 }).enabled,
        H = (0, h.Z)(w, __OVERLAY__ || P),
        Y = 0;
    1 !== j && (Y = (0, c.OdO)(Y, c.bgu.REDUCE_SATURATION_ENABLED));
    let W = (0, S.A)(),
        K = (0, m.Ml)("RootThemeContextProvider"),
        z = (0, m.CL)("RootThemeContextProvider"),
        q = (0, m.VM)("RootThemeContextProvider"),
        X = _.Mc.useExperiment({ location: "RootThemeContextProvider" }).enabled,
        Q = (0, f.Z)("RootThemeContextProvider"),
        J = (0, y.$)({ location: "RootThemeContextProvider" }),
        $ = (0, p.On)({
            isPopoutWindow: o,
            isSearchDesktopTopLevelEnabled: J,
        }),
        ee = N(R, j);
    return (0, r.jsx)(c.kb5, {
        value: ee,
        children: (0, r.jsx)(c.wMY, {
            theme: R,
            flags: Y,
            saturation: j,
            density: W,
            children: (0, r.jsx)(A.cE, {
                lang: C,
                theme: R,
                density: W,
                focused: P,
                fontScale: D,
                fontScaleClass: x,
                keyboardModeEnabled: L,
                mouseMode: H,
                saturation: j,
                desaturateUserColors: M,
                useForcedColors: k,
                systemForcedColors: U,
                useReducedMotion: G,
                alwaysShowLinkDecorations: B,
                hardwareAccelerationEnabled: g,
                highContrastMode: V && F,
                isPopoutWindow: o,
                rootClassName: s()($, {
                    "confetti-mode": Z,
                    "refresh-fast-follow-avatars": K && !Q,
                    "refresh-fast-follow-guild-bg": z,
                    "refresh-fast-follow-distinct-borders": q,
                    "client-theme-color-picker": X,
                    "align-chat-input": Q,
                }),
                children: a,
            }),
        }),
    });
}
