n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(153867),
    u = n(918222),
    d = n(607070),
    f = n(304761),
    _ = n(865427),
    p = n(358085),
    h = n(210887),
    m = n(981631),
    g = n(388032),
    E = n(461059);
let b = [
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
function y() {
    let [e, t] = i.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: a } = (0, s.cj)([h.Z, d.Z], () => ({
            theme: h.Z.theme,
            platformZoom: d.Z.zoom,
        })),
        [y, O] = i.useState("upright"),
        v = ["normal", "medium", "semibold", "bold", "extrabold"],
        I = [10, 12, 14, 15, 16, 18, 20, 24],
        T = new Map([
            ["normal", 400],
            ["medium", 500],
            ["semibold", 600],
            ["bold", 700],
            ["extrabold", 800],
        ]);
    i.useEffect(() => {
        p.isPlatformEmbedded ||
            window.addEventListener("resize", () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let S = p.isPlatformEmbedded ? n : e,
        A = (0, s.e7)([f.C], () => {
            var e, t;
            return (0, _.fD)()
                ? null == (t = f.C.getCurrentBuildOverride()) || null == (e = t.overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        [C, N] = (0, u.R)("playground-overrideText", null),
        [R, P] = (0, u.R)("playground-defaultText", b[0].value),
        w = i.useCallback(
            (e) => {
                let t = b.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                "" === e || null == e ? (P(b[0].value), N(null)) : null != t ? P(t.value) : (P("custom"), N(e));
            },
            [N, P],
        );
    return (0, r.jsx)("div", {
        style: {
            "--playground-font-family": "mono" === y ? "gg mono" : "gg sans",
            "--playground-font-style": "italic" === y ? "italic" : "normal",
        },
        children: (0, r.jsxs)(l.hjN, {
            tag: l.RB0.H1,
            children: [
                (0, r.jsxs)("div", {
                    className: E.toolbar,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsxs)(l.Text, {
                                    tag: "div",
                                    variant: "heading-lg/bold",
                                    style: { display: "inline-block" },
                                    children: ["Zoom: ", S, "%"],
                                }),
                                null != A
                                    ? (0, r.jsxs)(l.Text, {
                                          tag: "div",
                                          variant: "heading-lg/bold",
                                          style: {
                                              display: "inline-block",
                                              marginLeft: "1em",
                                          },
                                          color: "header-secondary",
                                          children: ["(", A.id, ")"],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(l.xJW, {
                            children: (0, r.jsx)(l.q4e, {
                                className: E.select,
                                options: b,
                                onChange: (e) => w(e),
                                value: R,
                            }),
                        }),
                        (0, r.jsx)(l.xJW, {
                            children: (0, r.jsx)("div", {
                                className: E.input,
                                children: (0, r.jsx)(l.oil, {
                                    placeholder: "Enter custom input...",
                                    value: null != C ? C : "",
                                    onChange: w,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: E.toolbar,
                    children: [
                        (0, r.jsx)(l.xJW, {
                            children: (0, r.jsx)(l.FXm, {
                                withTransparentBackground: !0,
                                className: E.theme,
                                orientation: "horizontal",
                                options: [
                                    {
                                        name: g.intl.string(g.t.b8Cei4),
                                        value: m.BRd.DARK,
                                    },
                                    {
                                        name: g.intl.string(g.t.K2sFfn),
                                        value: m.BRd.LIGHT,
                                    },
                                ],
                                onChange: (e) => {
                                    (0, c.ZI)({ theme: e.value });
                                },
                                value: a,
                            }),
                        }),
                        (0, r.jsx)(l.xJW, {
                            children: (0, r.jsx)(l.FXm, {
                                withTransparentBackground: !0,
                                className: E.theme,
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
                                    O(e.value);
                                },
                                value: y,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: E.textGrid,
                    children: [
                        (0, r.jsx)("div", {}),
                        v.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: E.columnHeading,
                                    children: (0, r.jsx)(l.X6q, {
                                        variant: "eyebrow",
                                        children: e,
                                    }),
                                },
                                e,
                            ),
                        ),
                        I.map((e) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: E.fontSize,
                                                children: [
                                                    (0, r.jsxs)(l.X6q, {
                                                        variant: "eyebrow",
                                                        children: [e, "px"],
                                                    }),
                                                    100 !== S
                                                        ? (0, r.jsxs)(l.X6q, {
                                                              variant: "eyebrow",
                                                              color: "text-muted",
                                                              children: ["(", (e * S) / 100, ")"],
                                                          })
                                                        : null,
                                                ],
                                            },
                                            e,
                                        ),
                                        v.map((t) => {
                                            var n;
                                            let i = null != (n = "custom" === R ? C : R) ? n : "";
                                            return (0, r.jsx)(
                                                "div",
                                                {
                                                    className: E.textSample,
                                                    children: (0, r.jsxs)("div", {
                                                        title: "".concat(e, "px at ").concat(t),
                                                        className: o()(E.text, { [E.breakAnywhere]: !i.includes(" ") }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: T.get(t),
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
