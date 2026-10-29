(r.d(t, { dY: () => u, Gc: () => a, hm: () => m, V9: () => h, hK: () => c }), r(321073));
var o = r(310784),
    l = r.n(o),
    s = r(661531),
    n = r(462887),
    i = r(345815);
let a = "custom-theme-background",
    c = "custom-client-theme";
function u(e, t, r, o) {
    var s, c, u, m, h;
    let d,
        E,
        _,
        T,
        A,
        g,
        O,
        M,
        b = e.slice();
    1 === e.length && b.push(e[0]);
    let { darkestColor: f, lightestColor: R } =
            ((d = (s = e).map((e) => l()(e).luminance())),
            { darkestColor: l()(s[d.indexOf(Math.min(...d))]), lightestColor: l()(s[d.indexOf(Math.max(...d))]) }),
        p = `linear-gradient(${t}deg, ${b.join(", ")})`,
        L =
            ((c = f),
            (u = R),
            (m = r),
            (h = o),
            (E = (0, n.M)(h)),
            (_ = { light: l()(u).set("hsl.s", 1).set("hsl.l", 0.9), dark: l()(c).set("hsl.s", 1).set("hsl.l", 0.05) }),
            (T = 100 - m),
            (A = `
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((30 + 0.7 * T) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `),
            (g = E
                ? `
      ${i.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * T}%;
      ${i.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
                : `
      ${i.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * m}%;
      ${i.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `),
            (O = `
      ${i.RB.DARK_THEME_BASE_COLOR}: ${_.dark.css()};
      ${i.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, i.FT)(_.dark)};
      ${i.RB.DARK_THEME_TEXT_COLOR}: ${l()(c)
          .set("hsl.l", ((100 - 0.1 * T) / 100).toFixed(2))
          .css()};
    `),
            (M = `
      ${i.RB.LIGHT_THEME_BASE_COLOR}: ${_.light.css()};
      ${i.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, i.FT)(_.light)};
      ${i.RB.LIGHT_THEME_TEXT_COLOR}: ${l()(u)
          .set("hsl.l", ((0.05 * T) / 100).toFixed(2))
          .css()};
    `),
            `${A}${g}${O}${M}`);
    return `.${a} {
      --custom-theme-background: ${p};
      --custom-background-gradient-opacity-multiplier: 1;
      ${L}
      }`;
}
function m(e, t) {
    let r,
        o = Number.isFinite((r = e.unsupported_overlayOpacityMultiplier ?? 1)) ? Math.min(1, Math.max(0, r)) : 1,
        l = s.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        c = s.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        u = (0, i.Zk)({ enabled: !0, primaryColor: l, secondaryColor: c, isDarkTheme: (0, n.M)(e.theme) }),
        m = `
      ${Object.entries(u)
          .map((e) => {
              let [t, r] = e;
              return `${t}: ${r};`;
          })
          .join("\n")}
    `;
    return `.${a} {
      --custom-theme-background: ${t};
      --custom-theme-primary-color: ${l};
      --custom-theme-secondary-color: ${c};
      --custom-background-gradient-opacity-multiplier: ${o};
      ${m}
    }`;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = e.slice();
    return (1 === e.length && r.push(e[0]), `linear-gradient(${t}deg, ${r.join(", ")})`);
}
