o.d(t, { FT: () => i, RB: () => n, Zk: () => c });
var l,
    r = o(310784),
    s = o.n(r),
    n =
        (((l = {}).THEME_BASE_MIX_AMOUNT = "--custom-theme-base-color-amount"),
        (l.THEME_TEXT_MIX_AMOUNT = "--custom-theme-text-color-amount"),
        (l.THEME_BASE_COLOR = "--custom-theme-base-color"),
        (l.THEME_TEXT_COLOR = "--custom-theme-text-color"),
        (l.THEME_BASE_COLOR_HSL = "--custom-theme-base-color-hsl"),
        (l.LIGHT_THEME_BASE_COLOR = "--custom-theme-base-color-light"),
        (l.LIGHT_THEME_TEXT_COLOR = "--custom-theme-text-color-light"),
        (l.LIGHT_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-light-hsl"),
        (l.DARK_THEME_BASE_COLOR = "--custom-theme-base-color-dark"),
        (l.DARK_THEME_TEXT_COLOR = "--custom-theme-text-color-dark"),
        (l.DARK_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-dark-hsl"),
        l);
function a(e) {
    let { primaryColor: t, secondaryColor: o, isDarkTheme: l } = e,
        r = s()(t),
        n = s()(o),
        [a, c] = r.luminance() > n.luminance() ? [r, n] : [n, r],
        i = c.get("hsl.h");
    (0 === i || Number.isNaN(i)) && (c = a);
    let u = l ? a.set("hsl.s", 1) : c.set("hsl.s", 1),
        m = u.get("hsl.h");
    return (
        (u = u.set("hsl.l", m >= 200 && m <= 300 ? (l ? 0.8 : 0.25) : l ? 0.95 : 0.15)),
        { base: l ? c.set("hsl.s", 1).set("hsl.l", 0.05) : a.set("hsl.s", 1).set("hsl.l", 0.9), text: u }
    );
}
function c(e) {
    let { enabled: t, primaryColor: o, secondaryColor: l, baseMixAmount: r = 50, textMixAmount: s = 38 } = e,
        { base: n, text: c } = a({ primaryColor: o, secondaryColor: l, isDarkTheme: !0 }),
        { base: u, text: m } = a({ primaryColor: o, secondaryColor: l, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? r : 0}%`,
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
    let [t, o, l] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * o}% ${100 * l}%`;
}
