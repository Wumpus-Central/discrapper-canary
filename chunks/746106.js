n.d(t, { w: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(803038),
    d = n(392358),
    f = n(591146),
    _ = n(928518),
    p = n(823961),
    h = n(706454),
    m = n(210887),
    g = n(451478),
    E = n(998502),
    b = n(264783),
    y = n(892071);
function O(e) {
    let { windowKey: t, children: n } = e,
        a = null != t,
        [O] = i.useState(() => E.ZP.getEnableHardwareAcceleration()),
        {
            locale: v,
            theme: I,
            focused: S,
            currentWindow: T,
            fontScale: A,
            fontScaleClass: N,
            keyboardModeEnabled: C,
            saturation: P,
            desaturateUserColors: R,
            useForcedColors: w,
            systemForcedColors: D,
            useReducedMotion: L,
            alwaysShowLinkDecorations: x,
            confettiMode: k
        } = (0, s.cj)([h.default, c.Z, m.Z, g.Z, _.Z, p.Z], () => {
            var e;
            return {
                locale: h.default.locale,
                theme: m.Z.theme,
                focused: a ? _.Z.getWindowFocused(t) : g.Z.isFocused(),
                currentWindow: a && null != (e = _.Z.getWindow(t)) ? e : window,
                fontScale: c.Z.fontScale,
                fontScaleClass: c.Z.fontScaleClass,
                keyboardModeEnabled: c.Z.keyboardModeEnabled,
                saturation: c.Z.saturation,
                desaturateUserColors: c.Z.desaturateUserColors,
                useForcedColors: c.Z.useForcedColors,
                systemForcedColors: c.Z.systemForcedColors,
                useReducedMotion: c.Z.useReducedMotion,
                alwaysShowLinkDecorations: c.Z.alwaysShowLinkDecorations,
                confettiMode: p.Z.confettiMode
            };
        }),
        M = (0, d.Z)(T, __OVERLAY__ || S),
        j = 0;
    1 !== P && (j = (0, l.OdO)(j, l.bgu.REDUCE_SATURATION_ENABLED));
    let U = (0, b.A)(),
        G = (0, f.Ml)('RootThemeContextProvider'),
        B = (0, f.CL)('RootThemeContextProvider'),
        F = (0, f.VM)('RootThemeContextProvider'),
        V = u.M.useExperiment({ location: 'RootThemeContextProvider' }).enabled;
    return (0, r.jsx)(l.wMY, {
        theme: I,
        flags: j,
        saturation: P,
        density: U,
        children: (0, r.jsx)(y.cE, {
            lang: v,
            theme: I,
            density: U,
            focused: S,
            fontScale: A,
            fontScaleClass: N,
            keyboardModeEnabled: C,
            mouseMode: M,
            saturation: P,
            desaturateUserColors: R,
            useForcedColors: w,
            systemForcedColors: D,
            useReducedMotion: L,
            alwaysShowLinkDecorations: x,
            hardwareAccelerationEnabled: O,
            rootClassName: o()({
                'confetti-mode': k,
                'refresh-fast-follow-avatars': G,
                'refresh-fast-follow-guild-bg': B,
                'refresh-fast-follow-distinct-borders': F,
                'client-theme-color-picker': V
            }),
            children: n
        })
    });
}
