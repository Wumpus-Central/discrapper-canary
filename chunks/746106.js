n.d(t, { w: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(392358),
    u = n(540059),
    d = n(928518),
    f = n(823961),
    _ = n(706454),
    p = n(210887),
    h = n(451478),
    m = n(264783),
    g = n(892071);
function E(e) {
    let { windowKey: t, children: n } = e,
        i = null != t,
        E = (0, u.Q3)('RootThemeContextProvider'),
        b = (0, u.R6)('RootThemeContextProvider'),
        {
            locale: v,
            theme: y,
            focused: O,
            currentWindow: I,
            fontScale: S,
            fontScaleClass: T,
            keyboardModeEnabled: N,
            saturation: A,
            desaturateUserColors: C,
            useForcedColors: R,
            systemForcedColors: P,
            useReducedMotion: w,
            alwaysShowLinkDecorations: D,
            confettiMode: L
        } = (0, a.cj)([_.default, l.Z, p.Z, h.Z, d.Z, f.Z], () => {
            var e;
            return {
                locale: _.default.locale,
                theme: p.Z.theme,
                focused: i ? d.Z.getWindowFocused(t) : h.Z.isFocused(),
                currentWindow: i && null !== (e = d.Z.getWindow(t)) && void 0 !== e ? e : window,
                fontScale: l.Z.fontScale,
                fontScaleClass: l.Z.fontScaleClass,
                keyboardModeEnabled: l.Z.keyboardModeEnabled,
                saturation: l.Z.saturation,
                desaturateUserColors: l.Z.desaturateUserColors,
                useForcedColors: l.Z.useForcedColors,
                systemForcedColors: l.Z.systemForcedColors,
                useReducedMotion: l.Z.useReducedMotion,
                alwaysShowLinkDecorations: l.Z.alwaysShowLinkDecorations,
                confettiMode: f.Z.confettiMode
            };
        }),
        x = (0, c.Z)(I, __OVERLAY__ || O),
        M = 0;
    1 !== A && (M = (0, s.OdO)(M, s.bgu.REDUCE_SATURATION_ENABLED));
    let k = (0, m.A)();
    return (0, r.jsx)(s.wMY, {
        theme: y,
        flags: M,
        saturation: A,
        density: k,
        children: (0, r.jsx)(g.cE, {
            isRefreshEnabled: E,
            isRefreshChatInputEnabled: b,
            lang: v,
            theme: y,
            density: k,
            focused: O,
            fontScale: S,
            fontScaleClass: T,
            keyboardModeEnabled: N,
            mouseMode: x,
            saturation: A,
            desaturateUserColors: C,
            useForcedColors: R,
            systemForcedColors: P,
            useReducedMotion: w,
            alwaysShowLinkDecorations: D,
            rootClassName: o()({ 'confetti-mode': L }),
            children: n
        })
    });
}
