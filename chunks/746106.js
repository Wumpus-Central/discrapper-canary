(n.d(t, { w: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(299363),
    d = n(338390),
    _ = n(803038),
    f = n(392358),
    p = n(591146),
    h = n(928518),
    m = n(823961),
    g = n(706454),
    E = n(210887),
    b = n(451478),
    y = n(998502),
    O = n(264783),
    v = n(892071);
function I(e) {
    let { windowKey: t, children: n } = e,
        a = null != t,
        [I] = i.useState(() => y.ZP.getEnableHardwareAcceleration()),
        {
            locale: T,
            theme: S,
            focused: A,
            currentWindow: N,
            fontScale: C,
            fontScaleClass: R,
            keyboardModeEnabled: P,
            saturation: w,
            desaturateUserColors: D,
            useForcedColors: L,
            systemForcedColors: x,
            useReducedMotion: M,
            alwaysShowLinkDecorations: k,
            confettiMode: j,
            highContrastMode: U
        } = (0, s.cj)([g.default, c.Z, E.Z, b.Z, h.Z, m.Z], () => {
            var e;
            return {
                locale: g.default.locale,
                theme: E.Z.theme,
                focused: a ? h.Z.getWindowFocused(t) : b.Z.isFocused(),
                currentWindow: a && null != (e = h.Z.getWindow(t)) ? e : window,
                fontScale: c.Z.fontScale,
                fontScaleClass: c.Z.fontScaleClass,
                keyboardModeEnabled: c.Z.keyboardModeEnabled,
                saturation: c.Z.saturation,
                desaturateUserColors: c.Z.desaturateUserColors,
                useForcedColors: c.Z.useForcedColors,
                systemForcedColors: c.Z.systemForcedColors,
                useReducedMotion: c.Z.useReducedMotion,
                alwaysShowLinkDecorations: c.Z.alwaysShowLinkDecorations,
                highContrastMode: c.Z.isHighContrastModeEnabled,
                confettiMode: m.Z.confettiMode
            };
        }),
        G = u.U.useExperiment({ location: 'RootThemeContextProvider' }, { autoTrackExposure: !0 }).enabled,
        B = (0, f.Z)(N, __OVERLAY__ || A),
        V = 0;
    1 !== w && (V = (0, l.OdO)(V, l.bgu.REDUCE_SATURATION_ENABLED));
    let F = (0, O.A)(),
        Z = (0, p.Ml)('RootThemeContextProvider'),
        H = (0, p.CL)('RootThemeContextProvider'),
        Y = (0, p.VM)('RootThemeContextProvider'),
        W = _.M.useExperiment({ location: 'RootThemeContextProvider' }).enabled,
        K = (0, d.Z)('RootThemeContextProvider');
    return (0, r.jsx)(l.wMY, {
        theme: S,
        flags: V,
        saturation: w,
        density: F,
        children: (0, r.jsx)(v.cE, {
            lang: T,
            theme: S,
            density: F,
            focused: A,
            fontScale: C,
            fontScaleClass: R,
            keyboardModeEnabled: P,
            mouseMode: B,
            saturation: w,
            desaturateUserColors: D,
            useForcedColors: L,
            systemForcedColors: x,
            useReducedMotion: M,
            alwaysShowLinkDecorations: k,
            hardwareAccelerationEnabled: I,
            highContrastMode: G && U,
            rootClassName: o()({
                'confetti-mode': j,
                'refresh-fast-follow-avatars': Z && !K,
                'refresh-fast-follow-guild-bg': H,
                'refresh-fast-follow-distinct-borders': Y,
                'client-theme-color-picker': W,
                'align-chat-input': K
            }),
            children: n
        })
    });
}
