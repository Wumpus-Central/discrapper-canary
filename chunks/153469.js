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
    var s, u, c, d, _;
    let h,
        f,
        p,
        E,
        m,
        g,
        A,
        I,
        T = e.slice();
    1 === e.length && T.push(e[0]);
    let { darkestColor: S, lightestColor: y } =
            ((h = (s = e).map((e) => r()(e).luminance())),
            { darkestColor: r()(s[h.indexOf(Math.min(...h))]), lightestColor: r()(s[h.indexOf(Math.max(...h))]) }),
        C = `linear-gradient(${t}deg, ${T.join(", ")})`,
        N =
            ((u = S),
            (c = y),
            (d = n),
            (_ = i),
            (f = (0, a.M)(_)),
            (p = { light: r()(c).set("hsl.s", 1).set("hsl.l", 0.9), dark: r()(u).set("hsl.s", 1).set("hsl.l", 0.05) }),
            (E = 100 - d),
            (m = `
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((30 + 0.7 * E) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `),
            (g = f
                ? `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * E}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
                : `
      ${o.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * d}%;
      ${o.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `),
            (A = `
      ${o.RB.DARK_THEME_BASE_COLOR}: ${p.dark.css()};
      ${o.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(p.dark)};
      ${o.RB.DARK_THEME_TEXT_COLOR}: ${r()(u)
          .set("hsl.l", ((100 - 0.1 * E) / 100).toFixed(2))
          .css()};
    `),
            (I = `
      ${o.RB.LIGHT_THEME_BASE_COLOR}: ${p.light.css()};
      ${o.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, o.FT)(p.light)};
      ${o.RB.LIGHT_THEME_TEXT_COLOR}: ${r()(c)
          .set("hsl.l", ((0.05 * E) / 100).toFixed(2))
          .css()};
    `),
            `${m}${g}${A}${I}`);
    return `.${l} {
      --custom-theme-background: ${C};
      ${N}
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
