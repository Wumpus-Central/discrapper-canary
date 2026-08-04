"use strict";
n.d(t, { Gc: () => o, V9: () => _, dY: () => c, hK: () => d, hm: () => u }), n(321073);
var i = n(310784),
    r = n.n(i),
    a = n(661531),
    s = n(462887),
    l = n(345815);
let o = "custom-theme-background",
    d = "custom-client-theme";
function c(e, t, n, i) {
    var a, d, c, u, _;
    let E,
        A,
        h,
        I,
        f,
        p,
        T,
        m,
        g = e.slice();
    1 === e.length && g.push(e[0]);
    let { darkestColor: S, lightestColor: N } =
            ((E = (a = e).map((e) => r()(e).luminance())),
            { darkestColor: r()(a[E.indexOf(Math.min(...E))]), lightestColor: r()(a[E.indexOf(Math.max(...E))]) }),
        C = `linear-gradient(${t}deg, ${g.join(", ")})`,
        O =
            ((d = S),
            (c = N),
            (u = n),
            (_ = i),
            (A = (0, s.M)(_)),
            (h = { light: r()(c).set("hsl.s", 1).set("hsl.l", 0.9), dark: r()(d).set("hsl.s", 1).set("hsl.l", 0.05) }),
            (I = 100 - u),
            (f = `
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((30 + 0.7 * I) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `),
            (p = A
                ? `
      ${l.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * I}%;
      ${l.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
                : `
      ${l.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * u}%;
      ${l.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `),
            (T = `
      ${l.RB.DARK_THEME_BASE_COLOR}: ${h.dark.css()};
      ${l.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, l.FT)(h.dark)};
      ${l.RB.DARK_THEME_TEXT_COLOR}: ${r()(d)
          .set("hsl.l", ((100 - 0.1 * I) / 100).toFixed(2))
          .css()};
    `),
            (m = `
      ${l.RB.LIGHT_THEME_BASE_COLOR}: ${h.light.css()};
      ${l.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, l.FT)(h.light)};
      ${l.RB.LIGHT_THEME_TEXT_COLOR}: ${r()(c)
          .set("hsl.l", ((0.05 * I) / 100).toFixed(2))
          .css()};
    `),
            `${f}${p}${T}${m}`);
    return `.${o} {
      --custom-theme-background: ${C};
      ${O}
      }`;
}
function u(e, t) {
    let n = a.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        i = a.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        r = (0, l.Zk)({ enabled: !0, primaryColor: n, secondaryColor: i, isDarkTheme: (0, s.M)(e.theme) }),
        d = `
      ${Object.entries(r)
          .map((e) => {
              let [t, n] = e;
              return `${t}: ${n};`;
          })
          .join("\n")}
    `;
    return `.${o} {
      --custom-theme-background: ${t};
      --custom-theme-primary-color: ${n};
      --custom-theme-secondary-color: ${i};
      ${d}
    }`;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), `linear-gradient(${t}deg, ${n.join(", ")})`;
}
