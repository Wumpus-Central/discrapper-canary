"use strict";
n.d(t, { Gc: () => l, V9: () => _, dY: () => c, hK: () => u, hm: () => d }), n(321073);
var i = n(310784),
    r = n.n(i),
    s = n(661531),
    a = n(462887),
    o = n(345815);
let l = "custom-theme-background",
    u = "custom-client-theme";
function c(e, t, n, i) {
    let s = e.slice();
    1 === e.length && s.push(e[0]);
    let u = e.map((e) => r()(e).luminance()),
        c = r()(e[u.indexOf(Math.min(...u))]),
        d = r()(e[u.indexOf(Math.max(...u))]),
        _ = `linear-gradient(${t}deg, ${s.join(", ")})`,
        h = (0, a.M)(i),
        f = { light: r()(d).set("hsl.s", 1).set("hsl.l", 0.9), dark: r()(c).set("hsl.s", 1).set("hsl.l", 0.05) },
        p = 100 - n,
        E = `
      --custom-theme-background: ${_};
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((30 + 0.7 * p) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `,
        m = h
            ? `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * p}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
            : `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * n}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `,
        g = `
      ${o.RB.DARK_THEME_BASE_COLOR}: ${f.dark.css()};
      ${o.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(f.dark)};
      ${o.RB.DARK_THEME_TEXT_COLOR}: ${r()(c)
          .set("hsl.l", ((100 - 0.1 * p) / 100).toFixed(2))
          .css()};
    `,
        A = `
      ${o.RB.LIGHT_THEME_BASE_COLOR}: ${f.light.css()};
      ${o.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(f.light)};
      ${o.RB.LIGHT_THEME_TEXT_COLOR}: ${r()(d)
          .set("hsl.l", ((0.05 * p) / 100).toFixed(2))
          .css()};
    `;
    return `.${l} {
      ${E}
      ${m}
      ${g}
      ${A}
      }`;
}
function d(e, t) {
    let n = s.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        i = s.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        r = (0, o.Zk)({ enabled: !0, primaryColor: n, secondaryColor: i, isDarkTheme: (0, a.M)(e.theme) }),
        u = `
      ${Object.entries(r)
          .map((e) => {
              let [t, n] = e;
              return `${t}: ${n};`;
          })
          .join("\n")}
    `;
    return `.${l} {
      --custom-theme-background: ${t};
      --custom-theme-primary-color: ${n};
      --custom-theme-secondary-color: ${i};
      ${u}
    }`;
}
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), `linear-gradient(${t}deg, ${n.join(", ")})`;
};
