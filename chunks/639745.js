n.d(t, {
    e3: () => l,
    gj: () => v,
    pX: () => c,
    yf: () => S,
    yz: () => I,
}),
    n(539854),
    n(388685);
var r = n(688619),
    i = n.n(r),
    a = n(692547),
    o = n(780384),
    s = n(629935);
let l = "custom-theme-background",
    c = "custom-client-theme",
    u = 0.05,
    d = 0.9,
    f = 30,
    p = 0.7,
    _ = 60,
    m = 0.4,
    h = 30,
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
        S = i()(e[c.indexOf(Math.max(...c))]),
        I = "linear-gradient(".concat(t, "deg, ").concat(a.join(", "), ")"),
        T = (0, o.wj)(r),
        C = {
            light: i()(S).set("hsl.s", 1).set("hsl.l", d),
            dark: i()(v).set("hsl.s", 1).set("hsl.l", u),
        },
        A = 100 - n,
        N = "\n      --custom-theme-background: "
            .concat(
                I,
                ";\n      ",
                "--custom-background-gradient-chat-opacity-base-light",
                ": 0.95;\n      ",
                "--custom-background-gradient-highest-opacity-base-light",
                ": 1.0;\n      ",
                "--custom-background-gradient-opacity-mix-amount",
                ": ",
            )
            .concat(((f + p * A) / 100).toFixed(2), ";\n      ", "--custom-theme-border-color-amount", ": 5%;\n      "),
        P = T
            ? "\n      "
                  .concat(s.Yk.THEME_BASE_MIX_AMOUNT, ": ")
                  .concat(_ + m * A, "%;\n      ")
                  .concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ": ")
                  .concat(E, "%;\n    ")
            : "\n      "
                  .concat(s.Yk.THEME_BASE_MIX_AMOUNT, ": ")
                  .concat(h + g * n, "%;\n      ")
                  .concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ": ")
                  .concat(b, "%;\n    "),
        R = "\n      "
            .concat(s.Yk.DARK_THEME_BASE_COLOR, ": ")
            .concat(C.dark.css(), ";\n      ")
            .concat(s.Yk.DARK_THEME_BASE_COLOR_HSL, ": ")
            .concat((0, s.dw)(C.dark), ";\n      ")
            .concat(s.Yk.DARK_THEME_TEXT_COLOR, ": ")
            .concat(
                i()(v)
                    .set("hsl.l", ((100 - y * A) / 100).toFixed(2))
                    .css(),
                ";\n    ",
            ),
        w = "\n      "
            .concat(s.Yk.LIGHT_THEME_BASE_COLOR, ": ")
            .concat(C.light.css(), ";\n      ")
            .concat(s.Yk.LIGHT_THEME_BASE_COLOR_HSL, ": ")
            .concat((0, s.dw)(C.light), ";\n      ")
            .concat(s.Yk.LIGHT_THEME_TEXT_COLOR, ": ")
            .concat(
                i()(S)
                    .set("hsl.l", ((O * A) / 100).toFixed(2))
                    .css(),
                ";\n    ",
            );
    return "."
        .concat(l, " {\n      ")
        .concat(N, "\n      ")
        .concat(P, "\n      ")
        .concat(R, "\n      ")
        .concat(w, "\n      }");
}
function S(e, t) {
    let n = a.Z.unsafe_rawColors[e.colors[0].token].resolve({ saturation: 1 }).hex(),
        r = a.Z.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({ saturation: 1 }).hex(),
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
let I = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.slice();
    return 1 === e.length && n.push(e[0]), "linear-gradient(".concat(t, "deg, ").concat(n.join(", "), ")");
};
