n.d(t, { w: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(338390),
    d = n(803038),
    f = n(392358),
    _ = n(591146),
    p = n(928518),
    h = n(823961),
    m = n(706454),
    g = n(210887),
    E = n(451478),
    b = n(998502),
    y = n(264783),
    O = n(892071);
function v(e) {
    let { windowKey: t, children: n } = e,
        a = null != t,
        [v] = i.useState(() => b.ZP.getEnableHardwareAcceleration()),
        {
            locale: I,
            theme: S,
            focused: T,
            currentWindow: A,
            fontScale: N,
            fontScaleClass: C,
            keyboardModeEnabled: R,
            saturation: P,
            desaturateUserColors: w,
            useForcedColors: D,
            systemForcedColors: L,
            useReducedMotion: x,
            alwaysShowLinkDecorations: k,
            confettiMode: M
        } = (0, s.cj)([m.default, c.Z, g.Z, E.Z, p.Z, h.Z], () => {
            var e;
            return {
                locale: m.default.locale,
                theme: g.Z.theme,
                focused: a ? p.Z.getWindowFocused(t) : E.Z.isFocused(),
                currentWindow: a && null != (e = p.Z.getWindow(t)) ? e : window,
                fontScale: c.Z.fontScale,
                fontScaleClass: c.Z.fontScaleClass,
                keyboardModeEnabled: c.Z.keyboardModeEnabled,
                saturation: c.Z.saturation,
                desaturateUserColors: c.Z.desaturateUserColors,
                useForcedColors: c.Z.useForcedColors,
                systemForcedColors: c.Z.systemForcedColors,
                useReducedMotion: c.Z.useReducedMotion,
                alwaysShowLinkDecorations: c.Z.alwaysShowLinkDecorations,
                confettiMode: h.Z.confettiMode
            };
        }),
        j = (0, f.Z)(A, __OVERLAY__ || T),
        U = 0;
    1 !== P && (U = (0, l.OdO)(U, l.bgu.REDUCE_SATURATION_ENABLED));
    let G = (0, y.A)(),
        B = (0, _.Ml)('RootThemeContextProvider'),
        F = (0, _.CL)('RootThemeContextProvider'),
        V = (0, _.VM)('RootThemeContextProvider'),
        Z = d.M.useExperiment({ location: 'RootThemeContextProvider' }).enabled,
        H = (0, u.Z)('RootThemeContextProvider');
    return (0, r.jsx)(l.wMY, {
        theme: S,
        flags: U,
        saturation: P,
        density: G,
        children: (0, r.jsx)(O.cE, {
            lang: I,
            theme: S,
            density: G,
            focused: T,
            fontScale: N,
            fontScaleClass: C,
            keyboardModeEnabled: R,
            mouseMode: j,
            saturation: P,
            desaturateUserColors: w,
            useForcedColors: D,
            systemForcedColors: L,
            useReducedMotion: x,
            alwaysShowLinkDecorations: k,
            hardwareAccelerationEnabled: v,
            rootClassName: o()({
                'confetti-mode': M,
                'refresh-fast-follow-avatars': B && !H,
                'refresh-fast-follow-guild-bg': F,
                'refresh-fast-follow-distinct-borders': V,
                'client-theme-color-picker': Z,
                'align-chat-input': H
            }),
            children: n
        })
    });
}
