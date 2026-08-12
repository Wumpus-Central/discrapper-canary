"use strict";
n.d(t, { FT: () => d, RB: () => s, Zk: () => o });
var i,
    r = n(310784),
    a = n.n(r),
    s =
        (((i = {}).THEME_BASE_MIX_AMOUNT = "--custom-theme-base-color-amount"),
        (i.THEME_TEXT_MIX_AMOUNT = "--custom-theme-text-color-amount"),
        (i.THEME_BASE_COLOR = "--custom-theme-base-color"),
        (i.THEME_TEXT_COLOR = "--custom-theme-text-color"),
        (i.THEME_BASE_COLOR_HSL = "--custom-theme-base-color-hsl"),
        (i.LIGHT_THEME_BASE_COLOR = "--custom-theme-base-color-light"),
        (i.LIGHT_THEME_TEXT_COLOR = "--custom-theme-text-color-light"),
        (i.LIGHT_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-light-hsl"),
        (i.DARK_THEME_BASE_COLOR = "--custom-theme-base-color-dark"),
        (i.DARK_THEME_TEXT_COLOR = "--custom-theme-text-color-dark"),
        (i.DARK_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-dark-hsl"),
        i);
function l(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: i } = e,
        r = a()(t),
        s = a()(n),
        [l, o] = r.luminance() > s.luminance() ? [r, s] : [s, r],
        d = o.get("hsl.h");
    (0 === d || Number.isNaN(d)) && (o = l);
    let c = i ? l.set("hsl.s", 1) : o.set("hsl.s", 1),
        u = c.get("hsl.h");
    return (
        (c = c.set("hsl.l", u >= 200 && u <= 300 ? (i ? 0.8 : 0.25) : i ? 0.95 : 0.15)),
        { base: i ? o.set("hsl.s", 1).set("hsl.l", 0.05) : l.set("hsl.s", 1).set("hsl.l", 0.9), text: c }
    );
}
function o(e) {
    let { enabled: t, primaryColor: n, secondaryColor: i, baseMixAmount: r = 50, textMixAmount: a = 38 } = e,
        { base: s, text: o } = l({ primaryColor: n, secondaryColor: i, isDarkTheme: !0 }),
        { base: c, text: u } = l({ primaryColor: n, secondaryColor: i, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? r : 0}%`,
        "--custom-theme-text-color-amount": `${t ? a : 0}%`,
        "--custom-theme-base-color-light-hsl": d(c),
        "--custom-theme-base-color-light": c.css(),
        "--custom-theme-text-color-light": u.css(),
        "--custom-theme-base-color-dark-hsl": d(s),
        "--custom-theme-base-color-dark": s.css(),
        "--custom-theme-text-color-dark": o.css(),
    };
}
function d(e) {
    let [t, n, i] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * n}% ${100 * i}%`;
}
