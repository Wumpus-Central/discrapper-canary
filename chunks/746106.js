n.d(t, { w: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(392358),
    d = n(591146),
    f = n(540059),
    _ = n(928518),
    p = n(823961),
    h = n(706454),
    m = n(210887),
    g = n(451478),
    E = n(998502),
    b = n(264783),
    y = n(892071);
function v(e) {
    let { windowKey: t, children: n } = e,
        o = null != t,
        v = (0, f.Q3)('RootThemeContextProvider'),
        O = (0, f.R6)('RootThemeContextProvider'),
        [I] = i.useState(() => E.ZP.getEnableHardwareAcceleration()),
        {
            locale: S,
            theme: T,
            focused: N,
            currentWindow: A,
            fontScale: C,
            fontScaleClass: R,
            keyboardModeEnabled: P,
            saturation: w,
            desaturateUserColors: D,
            useForcedColors: L,
            systemForcedColors: x,
            useReducedMotion: M,
            alwaysShowLinkDecorations: k,
            confettiMode: j
        } = (0, s.cj)([h.default, c.Z, m.Z, g.Z, _.Z, p.Z], () => {
            var e;
            return {
                locale: h.default.locale,
                theme: m.Z.theme,
                focused: o ? _.Z.getWindowFocused(t) : g.Z.isFocused(),
                currentWindow: o && null != (e = _.Z.getWindow(t)) ? e : window,
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
        U = (0, u.Z)(A, __OVERLAY__ || N),
        G = 0;
    1 !== w && (G = (0, l.OdO)(G, l.bgu.REDUCE_SATURATION_ENABLED));
    let B = (0, b.A)(),
        F = (0, d.M)('RootThemeContextProvider'),
        V = (0, d.C)('RootThemeContextProvider');
    return (0, r.jsx)(l.wMY, {
        theme: T,
        flags: G,
        saturation: w,
        density: B,
        children: (0, r.jsx)(y.cE, {
            isRefreshEnabled: v,
            isRefreshChatInputEnabled: O,
            lang: S,
            theme: T,
            density: B,
            focused: N,
            fontScale: C,
            fontScaleClass: R,
            keyboardModeEnabled: P,
            mouseMode: U,
            saturation: w,
            desaturateUserColors: D,
            useForcedColors: L,
            systemForcedColors: x,
            useReducedMotion: M,
            alwaysShowLinkDecorations: k,
            hardwareAccelerationEnabled: I,
            rootClassName: a()({
                'confetti-mode': j,
                'refresh-fast-follow-avatars': F,
                'refresh-fast-follow-guild-bg': V
            }),
            children: n
        })
    });
}
