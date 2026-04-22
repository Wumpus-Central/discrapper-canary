"use strict";
n.d(t, { Gc: () => l, V9: () => _, dY: () => d, hK: () => u, hm: () => c }), n(321073);
var r = n(310784),
    i = n.n(r),
    s = n(827734),
    a = n(462887),
    o = n(345815);
let l = "custom-theme-background",
    u = "custom-client-theme";
function d(e, t, n, r) {
    let s = e.slice();
    1 === e.length && s.push(e[0]);
    let u = e.map((e) => i()(e).luminance()),
        d = i()(e[u.indexOf(Math.min(...u))]),
        c = i()(e[u.indexOf(Math.max(...u))]),
        _ = `linear-gradient(${t}deg, ${s.join(", ")})`,
        f = (0, a.M)(r),
        E = { light: i()(c).set("hsl.s", 1).set("hsl.l", 0.9), dark: i()(d).set("hsl.s", 1).set("hsl.l", 0.05) },
        h = 100 - n,
        p = `
      --custom-theme-background: ${_};
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((30 + 0.7 * h) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `,
        m = f
            ? `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * h}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
            : `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * n}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `,
        g = `
      ${o.RB.DARK_THEME_BASE_COLOR}: ${E.dark.css()};
      ${o.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(E.dark)};
      ${o.RB.DARK_THEME_TEXT_COLOR}: ${i()(d)
          .set("hsl.l", ((100 - 0.1 * h) / 100).toFixed(2))
          .css()};
    `,
        A = `
      ${o.RB.LIGHT_THEME_BASE_COLOR}: ${E.light.css()};
      ${o.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(E.light)};
      ${o.RB.LIGHT_THEME_TEXT_COLOR}: ${i()(c)
          .set("hsl.l", ((0.05 * h) / 100).toFixed(2))
          .css()};
    `;
    return `.${l} {
      ${p}
      ${m}
      ${g}
      ${A}
      }`;
}
function c(e, t) {
    let n = s.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        r = s.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        i = (0, o.Zk)({ enabled: !0, primaryColor: n, secondaryColor: r, isDarkTheme: (0, a.M)(e.theme) }),
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
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), `linear-gradient(${t}deg, ${n.join(", ")})`;
};
