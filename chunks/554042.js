n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(153867),
    d = n(918222),
    f = n(607070),
    _ = n(304761),
    p = n(865427),
    h = n(358085),
    m = n(210887),
    g = n(981631),
    E = n(388032),
    b = n(461059);
let y = [
    {
        label: "Latin alphabet",
        value: "aBcDeFgHiJkLmNoPqRsTuVwXyZ",
    },
    {
        label: "Latin pangram",
        value: "The quick brown fox jumps over the lazy dog",
    },
    {
        label: "Greek alphabet",
        value: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ",
    },
    {
        label: "Greek pangram",
        value: "ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ",
    },
    {
        label: "Cyrillic alphabet",
        value: "АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ",
    },
    {
        label: "Cyrillic pangram",
        value: "В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!",
    },
    {
        label: "Custom",
        value: "custom",
    },
];
function O() {
    let [e, t] = i.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: a } = (0, s.cj)([m.Z, f.Z], () => ({
            theme: m.Z.theme,
            platformZoom: f.Z.zoom,
        })),
        [O, v] = i.useState("upright"),
        I = ["normal", "medium", "semibold", "bold", "extrabold"],
        T = [10, 12, 14, 15, 16, 18, 20, 24],
        S = new Map([
            ["normal", 400],
            ["medium", 500],
            ["semibold", 600],
            ["bold", 700],
            ["extrabold", 800],
        ]);
    i.useEffect(() => {
        h.isPlatformEmbedded ||
            window.addEventListener("resize", () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let A = h.isPlatformEmbedded ? n : e,
        C = (0, s.e7)([_.C], () => {
            var e, t;
            return (0, p.fD)()
                ? null == (t = _.C.getCurrentBuildOverride()) || null == (e = t.overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        [N, R] = (0, d.R)("playground-overrideText", null),
        [P, w] = (0, d.R)("playground-defaultText", y[0].value),
        D = i.useCallback(
            (e) => {
                let t = y.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                "" === e || null == e ? (w(y[0].value), R(null)) : null != t ? w(t.value) : (w("custom"), R(e));
            },
            [R, w],
        );
    return (0, r.jsx)("div", {
        style: {
            "--playground-font-family": "mono" === O ? "gg mono" : "gg sans",
            "--playground-font-style": "italic" === O ? "italic" : "normal",
        },
        children: (0, r.jsxs)(c.hjN, {
            tag: c.RB0.H1,
            children: [
                (0, r.jsxs)("div", {
                    className: b.toolbar,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    tag: "div",
                                    variant: "heading-lg/bold",
                                    style: { display: "inline-block" },
                                    children: ["Zoom: ", A, "%"],
                                }),
                                null != C
                                    ? (0, r.jsxs)(c.Text, {
                                          tag: "div",
                                          variant: "heading-lg/bold",
                                          style: {
                                              display: "inline-block",
                                              marginLeft: "1em",
                                          },
                                          color: "header-secondary",
                                          children: ["(", C.id, ")"],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(c.q4e, {
                            className: b.select,
                            options: y,
                            onChange: (e) => D(e),
                            value: P,
                        }),
                        (0, r.jsx)("div", {
                            className: b.input,
                            children: (0, r.jsx)(c.oil, {
                                placeholder: "Enter custom input...",
                                value: null != N ? N : "",
                                onChange: D,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.toolbar,
                    children: [
                        (0, r.jsx)(l.Gu, {
                            withTransparentBackground: !0,
                            className: b.theme,
                            orientation: "horizontal",
                            options: [
                                {
                                    name: E.intl.string(E.t.b8Cei4),
                                    value: g.BRd.DARK,
                                },
                                {
                                    name: E.intl.string(E.t.K2sFfn),
                                    value: g.BRd.LIGHT,
                                },
                            ],
                            onChange: (e) => {
                                (0, u.ZI)({ theme: e.value });
                            },
                            value: a,
                        }),
                        (0, r.jsx)(l.Gu, {
                            withTransparentBackground: !0,
                            className: b.theme,
                            orientation: "horizontal",
                            options: [
                                {
                                    name: "Upright",
                                    value: "upright",
                                },
                                {
                                    name: "Italic",
                                    value: "italic",
                                },
                                {
                                    name: "Mono",
                                    value: "mono",
                                },
                            ],
                            onChange: (e) => {
                                v(e.value);
                            },
                            value: O,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.textGrid,
                    children: [
                        (0, r.jsx)("div", {}),
                        I.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: b.columnHeading,
                                    children: (0, r.jsx)(c.X6q, {
                                        variant: "eyebrow",
                                        children: e,
                                    }),
                                },
                                e,
                            ),
                        ),
                        T.map((e) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: b.fontSize,
                                                children: [
                                                    (0, r.jsxs)(c.X6q, {
                                                        variant: "eyebrow",
                                                        children: [e, "px"],
                                                    }),
                                                    100 !== A
                                                        ? (0, r.jsxs)(c.X6q, {
                                                              variant: "eyebrow",
                                                              color: "text-muted",
                                                              children: ["(", (e * A) / 100, ")"],
                                                          })
                                                        : null,
                                                ],
                                            },
                                            e,
                                        ),
                                        I.map((t) => {
                                            var n;
                                            let i = null != (n = "custom" === P ? N : P) ? n : "";
                                            return (0, r.jsx)(
                                                "div",
                                                {
                                                    className: b.textSample,
                                                    children: (0, r.jsxs)("div", {
                                                        title: "".concat(e, "px at ").concat(t),
                                                        className: o()(b.text, { [b.breakAnywhere]: !i.includes(" ") }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: S.get(t),
                                                        },
                                                        children: [
                                                            (0, r.jsx)("p", { children: i }),
                                                            (0, r.jsx)("p", {
                                                                style: { textTransform: "lowercase" },
                                                                children: i,
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                style: { textTransform: "uppercase" },
                                                                children: i,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                "".concat(e, "-").concat(t),
                                            );
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                    ],
                }),
            ],
        }),
    });
}
