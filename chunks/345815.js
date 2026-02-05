"use strict";
n.d(t, { FT: () => c, RB: () => a, Zk: () => u });
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
        u = l.get("hsl.h");
    (0 === u || Number.isNaN(u)) && (l = o);
    let c = r ? o.set("hsl.s", 1) : l.set("hsl.s", 1),
        d = c.get("hsl.h"),
        _ = d >= 200 && d <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15;
    return (
        (c = c.set("hsl.l", _)),
        { base: r ? l.set("hsl.s", 1).set("hsl.l", 0.05) : o.set("hsl.s", 1).set("hsl.l", 0.9), text: c }
    );
}
function u(e) {
    let { enabled: t, primaryColor: n, secondaryColor: r, baseMixAmount: i = s, textMixAmount: a = o } = e,
        { base: u, text: d } = l({ primaryColor: n, secondaryColor: r, isDarkTheme: !0 }),
        { base: _, text: f } = l({ primaryColor: n, secondaryColor: r, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? i : 0}%`,
        "--custom-theme-text-color-amount": `${t ? a : 0}%`,
        "--custom-theme-base-color-light-hsl": c(_),
        "--custom-theme-base-color-light": _.css(),
        "--custom-theme-text-color-light": f.css(),
        "--custom-theme-base-color-dark-hsl": c(u),
        "--custom-theme-base-color-dark": u.css(),
        "--custom-theme-text-color-dark": d.css(),
    };
}
function c(e) {
    let [t, n, r] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * n}% ${100 * r}%`;
}
