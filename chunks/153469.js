"use strict";
n.d(t, { Gc: () => l, V9: () => v, dY: () => y, hK: () => u, hm: () => S }), n(321073);
var r = n(310784),
    i = n.n(r),
    a = n(827734),
    s = n(582754),
    o = n(345815);
let l = "custom-theme-background",
    u = "custom-client-theme",
    c = 0.05,
    d = 0.9,
    _ = 30,
    f = 0.7,
    p = 60,
    h = 0.4,
    m = 30,
    g = -0.2,
    E = 30,
    A = 40,
    I = 0.1,
    T = 0.05;
function y(e, t, n, r) {
    let a = e.slice();
    1 === e.length && a.push(e[0]);
    let u = e.map((e) => i()(e).luminance()),
        y = i()(e[u.indexOf(Math.min(...u))]),
        S = i()(e[u.indexOf(Math.max(...u))]),
        v = `linear-gradient(${t}deg, ${a.join(", ")})`,
        C = (0, s.Mw)(r),
        b = { light: i()(S).set("hsl.s", 1).set("hsl.l", d), dark: i()(y).set("hsl.s", 1).set("hsl.l", c) },
        N = 100 - n,
        R = `
      --custom-theme-background: ${v};
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((_ + f * N) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `,
        O = C
            ? `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${p + h * N}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: ${E}%;
    `
            : `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${m + g * n}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: ${A}%;
    `,
        D = `
      ${o.RB.DARK_THEME_BASE_COLOR}: ${b.dark.css()};
      ${o.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(b.dark)};
      ${o.RB.DARK_THEME_TEXT_COLOR}: ${i()(y)
          .set("hsl.l", ((100 - I * N) / 100).toFixed(2))
          .css()};
    `,
        L = `
      ${o.RB.LIGHT_THEME_BASE_COLOR}: ${b.light.css()};
      ${o.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(b.light)};
      ${o.RB.LIGHT_THEME_TEXT_COLOR}: ${i()(S)
          .set("hsl.l", ((T * N) / 100).toFixed(2))
          .css()};
    `;
    return `.${l} {
      ${R}
      ${O}
      ${D}
      ${L}
      }`;
}
function S(e, t) {
    let n = a.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        r = a.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        i = (0, o.Zk)({ enabled: !0, primaryColor: n, secondaryColor: r, isDarkTheme: (0, s.Mw)(e.theme) }),
        u = `
      ${Object.entries(i)
          .map((e) => {
              let [t, n] = e;
              return `${t}: ${n};`;
          })
          .join("\n")}
    `;
    return `.${l} {
      --custom-theme-background: ${t};
      --custom-theme-primary-color: ${n};
      --custom-theme-secondary-color: ${r};
      ${u}
    }`;
}
let v = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), `linear-gradient(${t}deg, ${n.join(", ")})`;
};
