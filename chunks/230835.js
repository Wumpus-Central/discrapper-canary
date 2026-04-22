"use strict";
l.d(t, { $Y: () => p, IE: () => x, JB: () => g, eq: () => T, tr: () => v, vC: () => E });
var n,
    a = l(64700),
    s = l(311907),
    i = l(462887),
    r = l(973654),
    o = l(544028),
    c = l(253932),
    u = l(467135),
    d = l(823459),
    h = l(74396),
    m = l(385803),
    _ = l(818348),
    g = (((n = {}).RESET_BUTTON = "reset_button"), (n.EDITOR_CLOSE = "editor_close"), n);
function f(e) {
    return (0, i.M)(e) ? _.NJ.DARK : _.NJ.LIGHT;
}
function x(e) {
    let t = c.eh.getSetting(),
        l =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in m.ag &&
            m.ag[t.backgroundGradientPresetId].theme !== e;
    (0, r.GQ)(e), l && (0, d.S8)();
}
function E() {
    let [e] = a.useState(() => o.A.theme);
    return a.useCallback(
        (t) => {
            let { resetColors: l, resetGradientAngle: n, resetChassisMixAmount: a, resetBaseTheme: s } = A(t, e);
            u.ko.getState().setAll({ colors: l, gradientAngle: n, chassisMixAmount: a }),
                "reset_button" === t ? x(f(s ?? o.A.theme)) : (0, r.XG)();
            let i = c.eh.getSetting().backgroundGradientPresetId;
            null != i && (0, d.bc)(i);
        },
        [e],
    );
}
function T() {
    let e = f(o.A.theme);
    e !== o.A.theme && x(e);
}
function p(e, t, l) {
    0 === e.length && l([t]), T();
}
function A(e, t) {
    let l = c.eh.getSetting().customUserThemeSettings,
        n = h.A.getSavedCustomTheme(),
        a = "reset_button" === e ? [u.OT] : [],
        s = 0,
        i = u.kJ,
        r = t;
    return (
        l?.colors != null
            ? ((a = l.colors), (s = l.gradientAngle ?? 0), (i = l.baseMix ?? u.kJ))
            : "reset_button" === e &&
              null != n &&
              ((a = n.colors), (s = n.gradient_angle ?? 0), (i = n.base_mix ?? u.kJ), (r = n.base_theme)),
        { resetColors: a, resetGradientAngle: s, resetChassisMixAmount: i, resetBaseTheme: r }
    );
}
function v() {
    let { colors: e, chassisMixAmount: t, gradientAngle: l } = (0, u.ko)(),
        n = (0, s.bG)([o.A], () => o.A.theme),
        [i] = a.useState(() => o.A.theme),
        { resetColors: r, resetGradientAngle: c, resetChassisMixAmount: d, resetBaseTheme: h } = A("reset_button", i);
    return JSON.stringify(e) === JSON.stringify(r) && t === d && l === c && n === h;
}
