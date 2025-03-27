n.d(t, { w: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(392358),
    d = n(540059),
    f = n(928518),
    _ = n(823961),
    p = n(706454),
    h = n(210887),
    m = n(451478),
    g = n(998502),
    E = n(264783),
    b = n(892071);
function v(e) {
    let { windowKey: t, children: n } = e,
        o = null != t,
        v = (0, d.Q3)('RootThemeContextProvider'),
        y = (0, d.R6)('RootThemeContextProvider'),
        [O] = i.useState(() => g.ZP.getEnableHardwareAcceleration()),
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
            alwaysShowLinkDecorations: M,
            confettiMode: k
        } = (0, s.cj)([p.default, c.Z, h.Z, m.Z, f.Z, _.Z], () => {
            var e;
            return {
                locale: p.default.locale,
                theme: h.Z.theme,
                focused: o ? f.Z.getWindowFocused(t) : m.Z.isFocused(),
                currentWindow: o && null !== (e = f.Z.getWindow(t)) && void 0 !== e ? e : window,
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
        j = (0, u.Z)(A, __OVERLAY__ || T),
        U = 0;
    1 !== P && (U = (0, l.OdO)(U, l.bgu.REDUCE_SATURATION_ENABLED));
    let G = (0, E.A)();
    return (0, r.jsx)(l.wMY, {
        theme: S,
        flags: U,
        saturation: P,
        density: G,
        children: (0, r.jsx)(b.cE, {
            isRefreshEnabled: v,
            isRefreshChatInputEnabled: y,
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
            alwaysShowLinkDecorations: M,
            hardwareAccelerationEnabled: O,
            rootClassName: a()({ 'confetti-mode': k }),
            children: n
        })
    });
}
