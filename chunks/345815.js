"use strict";
n.d(t, { FT: () => u, RB: () => a, Zk: () => l });
var r,
    i = n(310784),
    s = n.n(i),
    a =
        (((r = {}).THEME_BASE_MIX_AMOUNT = "--custom-theme-base-color-amount"),
        (r.THEME_TEXT_MIX_AMOUNT = "--custom-theme-text-color-amount"),
        (r.THEME_BASE_COLOR = "--custom-theme-base-color"),
        (r.THEME_TEXT_COLOR = "--custom-theme-text-color"),
        (r.THEME_BASE_COLOR_HSL = "--custom-theme-base-color-hsl"),
        (r.LIGHT_THEME_BASE_COLOR = "--custom-theme-base-color-light"),
        (r.LIGHT_THEME_TEXT_COLOR = "--custom-theme-text-color-light"),
        (r.LIGHT_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-light-hsl"),
        (r.DARK_THEME_BASE_COLOR = "--custom-theme-base-color-dark"),
        (r.DARK_THEME_TEXT_COLOR = "--custom-theme-text-color-dark"),
        (r.DARK_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-dark-hsl"),
        r);
function o(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: r } = e,
        i = s()(t),
        a = s()(n),
        [o, l] = i.luminance() > a.luminance() ? [i, a] : [a, i],
        u = l.get("hsl.h");
    (0 === u || Number.isNaN(u)) && (l = o);
    let d = r ? o.set("hsl.s", 1) : l.set("hsl.s", 1),
        c = d.get("hsl.h");
    return (
        (d = d.set("hsl.l", c >= 200 && c <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15)),
        { base: r ? l.set("hsl.s", 1).set("hsl.l", 0.05) : o.set("hsl.s", 1).set("hsl.l", 0.9), text: d }
    );
}
function l(e) {
    let { enabled: t, primaryColor: n, secondaryColor: r, baseMixAmount: i = 50, textMixAmount: s = 38 } = e,
        { base: a, text: l } = o({ primaryColor: n, secondaryColor: r, isDarkTheme: !0 }),
        { base: d, text: c } = o({ primaryColor: n, secondaryColor: r, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? i : 0}%`,
        "--custom-theme-text-color-amount": `${t ? s : 0}%`,
        "--custom-theme-base-color-light-hsl": u(d),
        "--custom-theme-base-color-light": d.css(),
        "--custom-theme-text-color-light": c.css(),
        "--custom-theme-base-color-dark-hsl": u(a),
        "--custom-theme-base-color-dark": a.css(),
        "--custom-theme-text-color-dark": l.css(),
    };
}
function u(e) {
    let [t, n, r] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * n}% ${100 * r}%`;
}
