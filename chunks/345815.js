r.d(t, { FT: () => c, RB: () => n, Zk: () => a });
var o,
    l = r(310784),
    s = r.n(l),
    n =
        (((o = {}).THEME_BASE_MIX_AMOUNT = "--custom-theme-base-color-amount"),
        (o.THEME_TEXT_MIX_AMOUNT = "--custom-theme-text-color-amount"),
        (o.THEME_BASE_COLOR = "--custom-theme-base-color"),
        (o.THEME_TEXT_COLOR = "--custom-theme-text-color"),
        (o.THEME_BASE_COLOR_HSL = "--custom-theme-base-color-hsl"),
        (o.LIGHT_THEME_BASE_COLOR = "--custom-theme-base-color-light"),
        (o.LIGHT_THEME_TEXT_COLOR = "--custom-theme-text-color-light"),
        (o.LIGHT_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-light-hsl"),
        (o.DARK_THEME_BASE_COLOR = "--custom-theme-base-color-dark"),
        (o.DARK_THEME_TEXT_COLOR = "--custom-theme-text-color-dark"),
        (o.DARK_THEME_BASE_COLOR_HSL = "--custom-theme-base-color-dark-hsl"),
        o);
function i(e) {
    let { primaryColor: t, secondaryColor: r, isDarkTheme: o } = e,
        l = s()(t),
        n = s()(r),
        [i, a] = l.luminance() > n.luminance() ? [l, n] : [n, l],
        c = a.get("hsl.h");
    (0 === c || Number.isNaN(c)) && (a = i);
    let u = o ? i.set("hsl.s", 1) : a.set("hsl.s", 1),
        m = u.get("hsl.h");
    return (
        (u = u.set("hsl.l", m >= 200 && m <= 300 ? (o ? 0.8 : 0.25) : o ? 0.95 : 0.15)),
        { base: o ? a.set("hsl.s", 1).set("hsl.l", 0.05) : i.set("hsl.s", 1).set("hsl.l", 0.9), text: u }
    );
}
function a(e) {
    let { enabled: t, primaryColor: r, secondaryColor: o, baseMixAmount: l = 50, textMixAmount: s = 38 } = e,
        { base: n, text: a } = i({ primaryColor: r, secondaryColor: o, isDarkTheme: !0 }),
        { base: u, text: m } = i({ primaryColor: r, secondaryColor: o, isDarkTheme: !1 });
    return {
        "--custom-theme-base-color-amount": `${t ? l : 0}%`,
        "--custom-theme-text-color-amount": `${t ? s : 0}%`,
        "--custom-theme-base-color-light-hsl": c(u),
        "--custom-theme-base-color-light": u.css(),
        "--custom-theme-text-color-light": m.css(),
        "--custom-theme-base-color-dark-hsl": c(n),
        "--custom-theme-base-color-dark": n.css(),
        "--custom-theme-text-color-dark": a.css(),
    };
}
function c(e) {
    let [t, r, o] = e.hsl();
    return `${Number.isNaN(t) ? 0 : t} ${100 * r}% ${100 * o}%`;
}
