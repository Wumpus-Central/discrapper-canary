"use strict";
n.d(t, { Gc: () => u, Kl: () => m, PV: () => E, V9: () => g, dY: () => _, hK: () => c, hm: () => p }), n(321073);
var i = n(310784),
    r = n.n(i),
    s = n(661531),
    a = n(462887),
    o = n(476931),
    l = n(345815);
let u = "custom-theme-background",
    c = "custom-client-theme";
function d(e, t) {
    let n = e
        .map((e) => {
            let { color: t, stop: n } = e;
            return `${t} ${n}%`;
        })
        .join(", ");
    return `
      --custom-theme-background: linear-gradient(${t}deg, ${n});`;
}
function _(e, t, n, i) {
    let r = e.slice();
    1 === e.length && r.push(e[0]);
    let { darkestColor: s, lightestColor: a } = h(e),
        o = `linear-gradient(${t}deg, ${r.join(", ")})`,
        l = f(s, a, n, i);
    return `.${u} {
      --custom-theme-background: ${o};
      ${l}
      }`;
}
function h(e) {
    let t = e.map((e) => r()(e).luminance());
    return { darkestColor: r()(e[t.indexOf(Math.min(...t))]), lightestColor: r()(e[t.indexOf(Math.max(...t))]) };
}
function f(e, t, n, i) {
    let s = (0, a.M)(i),
        o = { light: r()(t).set("hsl.s", 1).set("hsl.l", 0.9), dark: r()(e).set("hsl.s", 1).set("hsl.l", 0.05) },
        u = 100 - n,
        c = `
      --custom-background-gradient-chat-opacity-base-light: 0.95;
      --custom-background-gradient-highest-opacity-base-light: 1.0;
      --custom-background-gradient-opacity-mix-amount: ${((30 + 0.7 * u) / 100).toFixed(2)};
      --custom-theme-border-color-amount: 5%;
      `,
        d = s
            ? `
      ${l.RB.THEME_BASE_MIX_AMOUNT}: ${60 + 0.4 * u}%;
      ${l.RB.THEME_TEXT_MIX_AMOUNT}: 30%;
    `
            : `
      ${l.RB.THEME_BASE_MIX_AMOUNT}: ${30 + -0.2 * n}%;
      ${l.RB.THEME_TEXT_MIX_AMOUNT}: 40%;
    `,
        _ = `
      ${l.RB.DARK_THEME_BASE_COLOR}: ${o.dark.css()};
      ${l.RB.DARK_THEME_BASE_COLOR_HSL}: ${(0, l.FT)(o.dark)};
      ${l.RB.DARK_THEME_TEXT_COLOR}: ${r()(e)
          .set("hsl.l", ((100 - 0.1 * u) / 100).toFixed(2))
          .css()};
    `,
        h = `
      ${l.RB.LIGHT_THEME_BASE_COLOR}: ${o.light.css()};
      ${l.RB.LIGHT_THEME_BASE_COLOR_HSL}: ${(0, l.FT)(o.light)};
      ${l.RB.LIGHT_THEME_TEXT_COLOR}: ${r()(t)
          .set("hsl.l", ((0.05 * u) / 100).toFixed(2))
          .css()};
    `;
    return `${c}${d}${_}${h}`;
}
function p(e, t) {
    let n = s.A.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        i = s.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
        r = (0, l.Zk)({ enabled: !0, primaryColor: n, secondaryColor: i, isDarkTheme: (0, a.M)(e.theme) }),
        o = `
      ${Object.entries(r)
          .map((e) => {
              let [t, n] = e;
              return `${t}: ${n};`;
          })
          .join("\n")}
    `;
    return `.${u} {
      --custom-theme-background: ${t};
      --custom-theme-primary-color: ${n};
      --custom-theme-secondary-color: ${i};
      ${o}
    }`;
}
function E(e, t) {
    let n = (0, o.oE)(e, t),
        i = n.colors.map((e) => {
            let { hex: t, stop: n } = e;
            return { color: t, stop: n };
        }),
        r = i[0].color,
        s = i[i.length - 1].color,
        c = (0, l.Zk)({
            enabled: !0,
            primaryColor: r,
            secondaryColor: s,
            isDarkTheme: (0, a.M)(t),
            baseMixAmount: n.baseMix,
        }),
        _ = `
      ${Object.entries(c)
          .map((e) => {
              let [t, n] = e;
              return `${t}: ${n};`;
          })
          .join("\n      ")}`;
    return `.${u} {${d(i, n.angle)}
      --custom-theme-primary-color: ${r};
      --custom-theme-secondary-color: ${s};${_}
    }`;
}
function m(e, t, n, i) {
    let r = (function (e) {
            let t = e[0];
            if (null == t) return [];
            let [n, i] = (0, o.kI)(t);
            return [
                { color: n, stop: 0 },
                { color: i, stop: 100 },
            ];
        })(e),
        { darkestColor: s, lightestColor: a } = h(e),
        l = f(s, a, n, i);
    return `.${u} {${d(r, t)}${l}
    }`;
}
let g = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), `linear-gradient(${t}deg, ${n.join(", ")})`;
};
