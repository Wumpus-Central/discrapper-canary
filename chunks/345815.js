n.d(t, {
    FT: () => u,
    RB: () => a,
    Zk: () => c,
}),
    n(896048);
var r = n(310784),
    i = n.n(r),
    a = (function (e) {
        return (
            (e.THEME_BASE_MIX_AMOUNT = "--custom-theme-base-color-amount"),
            (e.THEME_TEXT_MIX_AMOUNT = "--custom-theme-text-color-amount"),
            (e.THEME_BASE_COLOR = "--custom-theme-base-color"),
            (e.THEME_TEXT_COLOR = "--custom-theme-text-color"),
            (e.THEME_BASE_COLOR_HSL = "--custom-theme-base-color-hsl"),
            (e.LIGHT_THEME_BASE_COLOR = "--custom-theme-base-color-light"),
            (e.LIGHT_THEME_TEXT_COLOR = "--custom-theme-text-color-light"),
            (e.LIGHT_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-light-hsl"),
            (e.DARK_THEME_BASE_COLOR = "--custom-theme-base-color-dark"),
            (e.DARK_THEME_TEXT_COLOR = "--custom-theme-text-color-dark"),
            (e.DARK_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-dark-hsl"),
            e
        );
    })({});
let s = 50,
    o = 38;

function l(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: r } = e,
        a = i()(t),
        s = i()(n),
        [o, l] = a.luminance() > s.luminance() ? [a, s] : [s, a],
        c = l.get("hsl.h");
    (0 === c || Number.isNaN(c)) && (l = o);
    let u = r ? o.set("hsl.s", 1) : l.set("hsl.s", 1),
        d = u.get("hsl.h"),
        f = d >= 200 && d <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15;
    return (
        (u = u.set("hsl.l", f)),
        {
            base: r ? l.set("hsl.s", 1).set("hsl.l", 0.05) : o.set("hsl.s", 1).set("hsl.l", 0.9),
            text: u,
        }
    );
}

function c(e) {
    let { enabled: t, primaryColor: n, secondaryColor: r, baseMixAmount: i = s, textMixAmount: a = o } = e,
        { base: c, text: d } = l({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !0,
        }),
        { base: f, text: p } = l({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !1,
        });
    return {
        "--custom-theme-base-color-amount": "".concat(t ? i : 0, "%"),
        "--custom-theme-text-color-amount": "".concat(t ? a : 0, "%"),
        "--custom-theme-base-color-light-hsl": u(f),
        "--custom-theme-base-color-light": f.css(),
        "--custom-theme-text-color-light": p.css(),
        "--custom-theme-base-color-dark-hsl": u(c),
        "--custom-theme-base-color-dark": c.css(),
        "--custom-theme-text-color-dark": d.css(),
    };
}

function u(e) {
    let [t, n, r] = e.hsl();
    return ""
        .concat(Number.isNaN(t) ? 0 : t, " ")
        .concat(100 * n, "% ")
        .concat(100 * r, "%");
}
