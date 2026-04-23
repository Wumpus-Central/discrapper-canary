l.d(t, { $Y: () => A, IE: () => E, JB: () => x, eq: () => T, tr: () => C, vC: () => f });
var a,
    n = l(64700),
    s = l(311907),
    r = l(462887),
    i = l(973654),
    o = l(544028),
    c = l(253932),
    d = l(467135),
    u = l(823459),
    h = l(74396),
    m = l(385803),
    _ = l(818348),
    x = (((a = {}).RESET_BUTTON = "reset_button"), (a.EDITOR_CLOSE = "editor_close"), a);
function g(e) {
    return (0, r.M)(e) ? _.NJ.DARK : _.NJ.LIGHT;
}
function E(e) {
    let t = c.eh.getSetting(),
        l =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in m.ag &&
            m.ag[t.backgroundGradientPresetId].theme !== e;
    (0, i.GQ)(e), l && (0, u.S8)();
}
function f() {
    let [e] = n.useState(() => o.A.theme);
    return n.useCallback(
        (t) => {
            let { resetColors: l, resetGradientAngle: a, resetChassisMixAmount: n, resetBaseTheme: s } = p(t, e);
            d.ko.getState().setAll({ colors: l, gradientAngle: a, chassisMixAmount: n }),
                "reset_button" === t ? E(g(s ?? o.A.theme)) : (0, i.XG)();
            let r = c.eh.getSetting().backgroundGradientPresetId;
            null != r && (0, u.bc)(r);
        },
        [e],
    );
}
function T() {
    let e = g(o.A.theme);
    e !== o.A.theme && E(e);
}
function A(e, t, l) {
    0 === e.length && l([t]), T();
}
function p(e, t) {
    let l = c.eh.getSetting().customUserThemeSettings,
        a = h.A.getSavedCustomTheme(),
        n = "reset_button" === e ? [d.OT] : [],
        s = 0,
        r = d.kJ,
        i = t;
    return (
        l?.colors != null
            ? ((n = l.colors), (s = l.gradientAngle ?? 0), (r = l.baseMix ?? d.kJ))
            : "reset_button" === e &&
              null != a &&
              ((n = a.colors), (s = a.gradient_angle ?? 0), (r = a.base_mix ?? d.kJ), (i = a.base_theme)),
        { resetColors: n, resetGradientAngle: s, resetChassisMixAmount: r, resetBaseTheme: i }
    );
}
function C() {
    let { colors: e, chassisMixAmount: t, gradientAngle: l } = (0, d.ko)(),
        a = (0, s.bG)([o.A], () => o.A.theme),
        [r] = n.useState(() => o.A.theme),
        { resetColors: i, resetGradientAngle: c, resetChassisMixAmount: u, resetBaseTheme: h } = p("reset_button", r);
    return JSON.stringify(e) === JSON.stringify(i) && t === u && l === c && a === h;
}
