"use strict";
n.d(t, { FT: () => u, RB: () => a, Zk: () => l });
var i,
    r = n(310784),
    s = n.n(r),
    a =
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
function o(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: i } = e,
        r = s()(t),
        a = s()(n),
        [o, l] = r.luminance() > a.luminance() ? [r, a] : [a, r],
        u = l.get("hsl.h");
    (0 === u || Number.isNaN(u)) && (l = o);
    let c = i ? o.set("hsl.s", 1) : l.set("hsl.s", 1),
        d = c.get("hsl.h");
    return (
        (c = c.set("hsl.l", d >= 200 && d <= 300 ? (i ? 0.8 : 0.25) : i ? 0.95 : 0.15)),
        { base: i ? l.set("hsl.s", 1).set("hsl.l", 0.05) : o.set("hsl.s", 1).set("hsl.l", 0.9), text: c }
    );
}
function l(e) {
    let { enabled: t, primaryColor: n, secondaryColor: i, baseMixAmount: r = 50, textMixAmount: s = 38 } = e,
        { base: a, text: l } = o({ primaryColor: n, secondaryColor: i, isDarkTheme: !0 }),
        { base: c, text: d } = o({ primaryColor: n, secondaryColor: i, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? r : 0}%`,
        "--custom-theme-text-color-amount": `${t ? s : 0}%`,
        "--custom-theme-base-color-light-hsl": u(c),
        "--custom-theme-base-color-light": c.css(),
        "--custom-theme-text-color-light": d.css(),
        "--custom-theme-base-color-dark-hsl": u(a),
        "--custom-theme-base-color-dark": a.css(),
        "--custom-theme-text-color-dark": l.css(),
    };
}
function u(e) {
    let [t, n, i] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * n}% ${100 * i}%`;
}
