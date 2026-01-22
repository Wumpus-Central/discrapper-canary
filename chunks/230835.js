n.d(t, {
    $Y: () => b,
    IE: () => m,
    JB: () => _,
    eq: () => E,
    tr: () => O,
    vC: () => g,
}),
    n(896048),
    n(457529);
var r = n(64700),
    i = n(311907),
    a = n(582754),
    s = n(973654),
    o = n(544028),
    l = n(253932),
    c = n(467135),
    u = n(823459),
    d = n(74396),
    f = n(385803),
    p = n(818348),
    _ = (function (e) {
        return (e.RESET_BUTTON = "reset_button"), (e.EDITOR_CLOSE = "editor_close"), e;
    })({});

function h(e) {
    return (0, a.Mw)(e) ? p.NJ.DARK : p.NJ.LIGHT;
}

function m(e) {
    let t = l.eh.getSetting(),
        n =
            null != t.backgroundGradientPresetId &&
            t.backgroundGradientPresetId in f.ag &&
            f.ag[t.backgroundGradientPresetId].theme !== e;
    (0, s.GQ)(e), n && (0, u.S8)();
}

function g() {
    let [e] = r.useState(() => o.A.theme);
    return r.useCallback(
        (t) => {
            let { resetColors: n, resetGradientAngle: r, resetChassisMixAmount: i, resetBaseTheme: a } = y(t, e);
            c.ko.getState().setAll({
                colors: n,
                gradientAngle: r,
                chassisMixAmount: i,
            }),
                "reset_button" === t ? m(h(null != a ? a : o.A.theme)) : (0, s.XG)();
            let d = l.eh.getSetting().backgroundGradientPresetId;
            null != d && (0, u.bc)(d);
        },
        [e],
    );
}

function E() {
    let e = h(o.A.theme);
    e !== o.A.theme && m(e);
}

function b(e, t, n) {
    0 === e.length && n([t]), E();
}

function y(e, t) {
    var n, r, i, a;
    let s = l.eh.getSetting().customUserThemeSettings,
        o = d.A.getSavedCustomTheme(),
        u = "reset_button" === e ? [c.OT] : [],
        f = 0,
        p = c.kJ,
        _ = t;
    return (
        (null == s ? void 0 : s.colors) != null
            ? ((u = s.colors), (f = null != (n = s.gradientAngle) ? n : 0), (p = null != (r = s.baseMix) ? r : c.kJ))
            : "reset_button" === e &&
              null != o &&
              ((u = o.colors),
              (f = null != (i = o.gradient_angle) ? i : 0),
              (p = null != (a = o.base_mix) ? a : c.kJ),
              (_ = o.base_theme)),
        {
            resetColors: u,
            resetGradientAngle: f,
            resetChassisMixAmount: p,
            resetBaseTheme: _,
        }
    );
}

function O() {
    let { colors: e, chassisMixAmount: t, gradientAngle: n } = (0, c.ko)(),
        a = (0, i.bG)([o.A], () => o.A.theme),
        [s] = r.useState(() => o.A.theme),
        { resetColors: l, resetGradientAngle: u, resetChassisMixAmount: d, resetBaseTheme: f } = y("reset_button", s);
    return JSON.stringify(e) === JSON.stringify(l) && t === d && n === u && a === f;
}
