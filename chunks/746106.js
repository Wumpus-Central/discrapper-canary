n.d(t, { w: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(392358),
    d = n(591146),
    f = n(928518),
    _ = n(823961),
    p = n(706454),
    h = n(210887),
    m = n(451478),
    g = n(998502),
    E = n(264783),
    b = n(892071);
function y(e) {
    let { windowKey: t, children: n } = e,
        o = null != t,
        [y] = i.useState(() => g.ZP.getEnableHardwareAcceleration()),
        {
            locale: O,
            theme: v,
            focused: I,
            currentWindow: S,
            fontScale: T,
            fontScaleClass: A,
            keyboardModeEnabled: N,
            saturation: C,
            desaturateUserColors: R,
            useForcedColors: P,
            systemForcedColors: w,
            useReducedMotion: D,
            alwaysShowLinkDecorations: L,
            confettiMode: x
        } = (0, s.cj)([p.default, c.Z, h.Z, m.Z, f.Z, _.Z], () => {
            var e;
            return {
                locale: p.default.locale,
                theme: h.Z.theme,
                focused: o ? f.Z.getWindowFocused(t) : m.Z.isFocused(),
                currentWindow: o && null != (e = f.Z.getWindow(t)) ? e : window,
                fontScale: c.Z.fontScale,
                fontScaleClass: c.Z.fontScaleClass,
                keyboardModeEnabled: c.Z.keyboardModeEnabled,
                saturation: c.Z.saturation,
                desaturateUserColors: c.Z.desaturateUserColors,
                useForcedColors: c.Z.useForcedColors,
                systemForcedColors: c.Z.systemForcedColors,
                useReducedMotion: c.Z.useReducedMotion,
                alwaysShowLinkDecorations: c.Z.alwaysShowLinkDecorations,
                confettiMode: _.Z.confettiMode
            };
        }),
        M = (0, u.Z)(S, __OVERLAY__ || I),
        k = 0;
    1 !== C && (k = (0, l.OdO)(k, l.bgu.REDUCE_SATURATION_ENABLED));
    let j = (0, E.A)(),
        U = (0, d.Ml)('RootThemeContextProvider'),
        G = (0, d.CL)('RootThemeContextProvider'),
        B = (0, d.VM)('RootThemeContextProvider');
    return (0, r.jsx)(l.wMY, {
        theme: v,
        flags: k,
        saturation: C,
        density: j,
        children: (0, r.jsx)(b.cE, {
            lang: O,
            theme: v,
            density: j,
            focused: I,
            fontScale: T,
            fontScaleClass: A,
            keyboardModeEnabled: N,
            mouseMode: M,
            saturation: C,
            desaturateUserColors: R,
            useForcedColors: P,
            systemForcedColors: w,
            useReducedMotion: D,
            alwaysShowLinkDecorations: L,
            hardwareAccelerationEnabled: y,
            rootClassName: a()({
                'confetti-mode': x,
                'refresh-fast-follow-avatars': U,
                'refresh-fast-follow-guild-bg': G,
                'refresh-fast-follow-distinct-borders': B
            }),
            children: n
        })
    });
}
