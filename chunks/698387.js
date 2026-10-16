(o.d(t, { dY: () => u, Gc: () => i, hm: () => m, V9: () => h, hK: () => c }), o(321073));
var r = o(310784),
    l = o.n(r),
    s = o(661531),
    n = o(462887),
    a = o(345815);
let i = "custom-theme-background",
    c = "custom-client-theme";
function u(e, t, o, r) {
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
    let { darkestColor: R, lightestColor: p } =
            ((d = (s = e).map((e) => l()(e).luminance())),
            { darkestColor: l()(s[d.indexOf(Math.min(...d))]), lightestColor: l()(s[d.indexOf(Math.max(...d))]) }),
        f = `linear-gradient(${t}deg, ${b.join(", ")})`,
        L =
            ((c = R),
            (u = p),
            (m = o),
            (h = r),
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
      ${a.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * T}%;
      ${a.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
                : `
      ${a.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * m}%;
      ${a.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `),
            (O = `
      ${a.RB.DARK_THEME_BASE_COLOR}: ${_.dark.css()};
      ${a.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, a.FT)(_.dark)};
      ${a.RB.DARK_THEME_TEXT_COLOR}: ${l()(c)
          .set("hsl.l", ((100 - 0.1 * T) / 100).toFixed(2))
          .css()};
    `),
            (M = `
      ${a.RB.LIGHT_THEME_BASE_COLOR}: ${_.light.css()};
      ${a.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, a.FT)(_.light)};
      ${a.RB.LIGHT_THEME_TEXT_COLOR}: ${l()(u)
          .set("hsl.l", ((0.05 * T) / 100).toFixed(2))
          .css()};
    `),
            `${A}${g}${O}${M}`);
    return `.${i} {
      --custom-theme-background: ${f};
      --custom-background-gradient-opacity-multiplier: 1;
      ${L}
      }`;
}
function m(e, t) {
    let o,
        r = Number.isFinite((o = e.unsupported_overlayOpacityMultiplier ?? 1)) ? Math.min(1, Math.max(0, o)) : 1,
        l = s.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        c = s.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        u = (0, a.Zk)({ enabled: !0, primaryColor: l, secondaryColor: c, isDarkTheme: (0, n.M)(e.theme) }),
        m = `
      ${Object.entries(u)
          .map((e) => {
              let [t, o] = e;
              return `${t}: ${o};`;
          })
          .join("\n")}
    `;
    return `.${i} {
      --custom-theme-background: ${t};
      --custom-theme-primary-color: ${l};
      --custom-theme-secondary-color: ${c};
      --custom-background-gradient-opacity-multiplier: ${r};
      ${m}
    }`;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = e.slice();
    return (1 === e.length && o.push(e[0]), `linear-gradient(${t}deg, ${o.join(", ")})`);
}
