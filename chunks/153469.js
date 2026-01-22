n.d(t, {
    Gc: () => l,
    V9: () => S,
    dY: () => A,
    hK: () => c,
    hm: () => v,
}),
    n(321073),
    n(896048);
var r = n(310784),
    i = n.n(r),
    a = n(827734),
    s = n(582754),
    o = n(345815);
let l = "custom-theme-background",
    c = "custom-client-theme",
    u = 0.05,
    d = 0.9,
    f = 30,
    p = 0.7,
    _ = 60,
    h = 0.4,
    m = 30,
    g = -0.2,
    E = 30,
    b = 40,
    y = 0.1,
    O = 0.05;

function A(e, t, n, r) {
    let a = e.slice();
    1 === e.length && a.push(e[0]);
    let c = e.map((e) => i()(e).luminance()),
        A = i()(e[c.indexOf(Math.min(...c))]),
        v = i()(e[c.indexOf(Math.max(...c))]),
        S = "linear-gradient(".concat(t, "deg, ").concat(a.join(", "), ")"),
        I = (0, s.Mw)(r),
        T = {
            light: i()(v).set("hsl.s", 1).set("hsl.l", d),
            dark: i()(A).set("hsl.s", 1).set("hsl.l", u),
        },
        C = 100 - n,
        N = "\n      --custom-theme-background: "
            .concat(
                S,
                ";\n      ",
                "--custom-background-gradient-chat-opacity-base-light",
                ": 0.95;\n      ",
                "--custom-background-gradient-highest-opacity-base-light",
                ": 1.0;\n      ",
                "--custom-background-gradient-opacity-mix-amount",
                ": ",
            )
            .concat(((f + p * C) / 100).toFixed(2), ";\n      ", "--custom-theme-border-color-amount", ": 5%;\n      "),
        R = I
            ? "\n      "
                  .concat(o.RB.THEME_BASE_MIX_AMOUNT, ": ")
                  .concat(_ + h * C, "%;\n      ")
                  .concat(o.RB.THEME_TEXT_MIX_AMOUNT, ": ")
                  .concat(E, "%;\n    ")
            : "\n      "
                  .concat(o.RB.THEME_BASE_MIX_AMOUNT, ": ")
                  .concat(m + g * n, "%;\n      ")
                  .concat(o.RB.THEME_TEXT_MIX_AMOUNT, ": ")
                  .concat(b, "%;\n    "),
        w = "\n      "
            .concat(o.RB.DARK_THEME_BASE_COLOR, ": ")
            .concat(T.dark.css(), ";\n      ")
            .concat(o.RB.DARK_THEME_BASE_COLOR_HSL, ": ")
            .concat((0, o.FT)(T.dark), ";\n      ")
            .concat(o.RB.DARK_THEME_TEXT_COLOR, ": ")
            .concat(
                i()(A)
                    .set("hsl.l", ((100 - y * C) / 100).toFixed(2))
                    .css(),
                ";\n    ",
            ),
        P = "\n      "
            .concat(o.RB.LIGHT_THEME_BASE_COLOR, ": ")
            .concat(T.light.css(), ";\n      ")
            .concat(o.RB.LIGHT_THEME_BASE_COLOR_HSL, ": ")
            .concat((0, o.FT)(T.light), ";\n      ")
            .concat(o.RB.LIGHT_THEME_TEXT_COLOR, ": ")
            .concat(
                i()(v)
                    .set("hsl.l", ((O * C) / 100).toFixed(2))
                    .css(),
                ";\n    ",
            );
    return "."
        .concat(l, " {\n      ")
        .concat(N, "\n      ")
        .concat(R, "\n      ")
        .concat(w, "\n      ")
        .concat(P, "\n      }");
}

function v(e, t) {
    let n = a.A.unsafe_rawColors[e.colors[0].token]
            .resolve({
                saturation: 1,
            })
            .hex(),
        r = a.A.unsafe_rawColors[e.colors[e.colors.length - 1].token]
            .resolve({
                saturation: 1,
            })
            .hex(),
        i = (0, o.Zk)({
            enabled: !0,
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: (0, s.Mw)(e.theme),
        }),
        c = "\n      ".concat(
            Object.entries(i)
                .map((e) => {
                    let [t, n] = e;
                    return "".concat(t, ": ").concat(n, ";");
                })
                .join("\n"),
            "\n    ",
        );
    return "."
        .concat(l, " {\n      ", "--custom-theme-background", ": ")
        .concat(t, ";\n      ", "--custom-theme-primary-color", ": ")
        .concat(n, ";\n      ", "--custom-theme-secondary-color", ": ")
        .concat(r, ";\n      ")
        .concat(c, "\n    }");
}
let S = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), "linear-gradient(".concat(t, "deg, ").concat(n.join(", "), ")");
};
