n.d(t, {
    e3: () => l,
    gj: () => v,
    pX: () => c,
    yf: () => I,
    yz: () => T,
}),
    n(539854),
    n(388685);
var r = n(688619),
    i = n.n(r),
    a = n(691324),
    o = n(780384),
    s = n(629935);
let l = "custom-theme-background",
    c = "custom-client-theme",
    u = 0.05,
    d = 0.9,
    f = 30,
    _ = 0.7,
    p = 60,
    h = 0.4,
    m = 30,
    g = -0.2,
    E = 30,
    b = 40,
    y = 0.1,
    O = 0.05;
function v(e, t, n, r) {
    let a = e.slice();
    1 === e.length && a.push(e[0]);
    let c = e.map((e) => i()(e).luminance()),
        v = i()(e[c.indexOf(Math.min(...c))]),
        I = i()(e[c.indexOf(Math.max(...c))]),
        T = "linear-gradient(".concat(t, "deg, ").concat(a.join(", "), ")"),
        S = (0, o.wj)(r),
        A = {
            light: i()(I).set("hsl.s", 1).set("hsl.l", d),
            dark: i()(v).set("hsl.s", 1).set("hsl.l", u),
        },
        C = 100 - n,
        N = "\n      --custom-theme-background: "
            .concat(
                T,
                ";\n      ",
                "--custom-background-gradient-chat-opacity-base-light",
                ": 0.95;\n      ",
                "--custom-background-gradient-highest-opacity-base-light",
                ": 1.0;\n      ",
                "--custom-background-gradient-opacity-mix-amount",
                ": ",
            )
            .concat(((f + _ * C) / 100).toFixed(2), ";\n      ", "--custom-theme-border-color-amount", ": 5%;\n      "),
        R = S
            ? "\n      "
                  .concat(s.Yk.THEME_BASE_MIX_AMOUNT, ": ")
                  .concat(p + h * C, "%;\n      ")
                  .concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ": ")
                  .concat(E, "%;\n    ")
            : "\n      "
                  .concat(s.Yk.THEME_BASE_MIX_AMOUNT, ": ")
                  .concat(m + g * n, "%;\n      ")
                  .concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ": ")
                  .concat(b, "%;\n    "),
        P = "\n      "
            .concat(s.Yk.DARK_THEME_BASE_COLOR, ": ")
            .concat(A.dark.css(), ";\n      ")
            .concat(s.Yk.DARK_THEME_BASE_COLOR_HSL, ": ")
            .concat((0, s.dw)(A.dark), ";\n      ")
            .concat(s.Yk.DARK_THEME_TEXT_COLOR, ": ")
            .concat(
                i()(v)
                    .set("hsl.l", ((100 - y * C) / 100).toFixed(2))
                    .css(),
                ";\n    ",
            ),
        D = "\n      "
            .concat(s.Yk.LIGHT_THEME_BASE_COLOR, ": ")
            .concat(A.light.css(), ";\n      ")
            .concat(s.Yk.LIGHT_THEME_BASE_COLOR_HSL, ": ")
            .concat((0, s.dw)(A.light), ";\n      ")
            .concat(s.Yk.LIGHT_THEME_TEXT_COLOR, ": ")
            .concat(
                i()(I)
                    .set("hsl.l", ((O * C) / 100).toFixed(2))
                    .css(),
                ";\n    ",
            );
    return "."
        .concat(l, " {\n      ")
        .concat(N, "\n      ")
        .concat(R, "\n      ")
        .concat(P, "\n      ")
        .concat(D, "\n      }");
}
function I(e, t) {
    let n = a.b[e.colors[0].token].hex,
        r = a.b[e.colors[e.colors.length - 1].token].hex,
        i = (0, s.W4)({
            enabled: !0,
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: (0, o.wj)(e.theme),
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
let T = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), "linear-gradient(".concat(t, "deg, ").concat(n.join(", "), ")");
};
