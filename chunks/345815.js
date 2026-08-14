o.d(t, { FT: () => i, RB: () => n, Zk: () => c });
var r,
    l = o(310784),
    s = o.n(l),
    n =
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
function a(e) {
    let { primaryColor: t, secondaryColor: o, isDarkTheme: r } = e,
        l = s()(t),
        n = s()(o),
        [a, c] = l.luminance() > n.luminance() ? [l, n] : [n, l],
        i = c.get("hsl.h");
    (0 === i || Number.isNaN(i)) && (c = a);
    let u = r ? a.set("hsl.s", 1) : c.set("hsl.s", 1),
        m = u.get("hsl.h");
    return (
        (u = u.set("hsl.l", m >= 200 && m <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15)),
        { base: r ? c.set("hsl.s", 1).set("hsl.l", 0.05) : a.set("hsl.s", 1).set("hsl.l", 0.9), text: u }
    );
}
function c(e) {
    let { enabled: t, primaryColor: o, secondaryColor: r, baseMixAmount: l = 50, textMixAmount: s = 38 } = e,
        { base: n, text: c } = a({ primaryColor: o, secondaryColor: r, isDarkTheme: !0 }),
        { base: u, text: m } = a({ primaryColor: o, secondaryColor: r, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? l : 0}%`,
        "--custom-theme-text-color-amount": `${t ? s : 0}%`,
        "--custom-theme-base-color-light-hsl": i(u),
        "--custom-theme-base-color-light": u.css(),
        "--custom-theme-text-color-light": m.css(),
        "--custom-theme-base-color-dark-hsl": i(n),
        "--custom-theme-base-color-dark": n.css(),
        "--custom-theme-text-color-dark": c.css(),
    };
}
function i(e) {
    let [t, o, r] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * o}% ${100 * r}%`;
}
