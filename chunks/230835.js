"use strict";
n.d(t, { $Y: () => A, IE: () => m, JB: () => p, eq: () => E, tr: () => T, vC: () => g });
var r = n(64700),
    i = n(311907),
    a = n(582754),
    s = n(973654),
    o = n(544028),
    l = n(253932),
    u = n(467135),
    c = n(823459),
    d = n(74396),
    _ = n(385803),
    f = n(818348),
    p = (function (e) {
        return (e.RESET_BUTTON = "reset_button"), (e.EDITOR_CLOSE = "editor_close"), e;
    })({});
function h(e) {
    return (0, a.Mw)(e) ? f.NJ.DARK : f.NJ.LIGHT;
}
function m(e) {
    let t = l.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in _.ag &&
            _.ag[t.backgroundGradientPresetId].theme !== e;
    (0, s.GQ)(e), n && (0, c.S8)();
}
function g() {
    let [e] = r.useState(() => o.A.theme);
    return r.useCallback(
        (t) => {
            let { resetColors: n, resetGradientAngle: r, resetChassisMixAmount: i, resetBaseTheme: a } = I(t, e);
            u.ko.getState().setAll({ colors: n, gradientAngle: r, chassisMixAmount: i }),
                "reset_button" === t ? m(h(a ?? o.A.theme)) : (0, s.XG)();
            let d = l.eh.getSetting().backgroundGradientPresetId;
            null != d && (0, c.bc)(d);
        },
        [e],
    );
}
function E() {
    let e = h(o.A.theme);
    e !== o.A.theme && m(e);
}
function A(e, t, n) {
    0 === e.length && n([t]), E();
}
function I(e, t) {
    let n = l.eh.getSetting().customUserThemeSettings,
        r = d.A.getSavedCustomTheme(),
        i = "reset_button" === e ? [u.OT] : [],
        a = 0,
        s = u.kJ,
        o = t;
    return (
        n?.colors != null
            ? ((i = n.colors), (a = n.gradientAngle ?? 0), (s = n.baseMix ?? u.kJ))
            : "reset_button" === e &&
              null != r &&
              ((i = r.colors), (a = r.gradient_angle ?? 0), (s = r.base_mix ?? u.kJ), (o = r.base_theme)),
        { resetColors: i, resetGradientAngle: a, resetChassisMixAmount: s, resetBaseTheme: o }
    );
}
function T() {
    let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, u.ko)(),
        a = (0, i.bG)([o.A], () => o.A.theme),
        [s] = r.useState(() => o.A.theme),
        { resetColors: l, resetGradientAngle: c, resetChassisMixAmount: d, resetBaseTheme: _ } = I("reset_button", s);
    return JSON.stringify(e) === JSON.stringify(l) && t === d && n === c && a === _;
}
