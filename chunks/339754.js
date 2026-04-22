a.d(l, { Q: () => p });
var t = a(627968),
    n = a(64700),
    o = a(18051),
    i = a(844222),
    r = a(331322),
    s = a(243721),
    d = a(821609),
    u = a(834730),
    c = a(692327);
let b = Object.entries(o)
        .filter((e) => {
            let l = e[1];
            return "function" == typeof l && "riveSrc" in l;
        })
        .map((e) => {
            let [l, a] = e;
            return { name: l, Component: a };
        })
        .sort((e, l) => e.name.localeCompare(l.name)),
    p = {
        title: "Rive Animations",
        stories: [
            {
                name: "All Animations",
                id: "rive-all-animations",
                component: function () {
                    let [e, l] = n.useState(!0),
                        a = n.useContext(i.C),
                        [o, p] = n.useState(0);
                    return (0, t.jsxs)(i.C.Provider, {
                        value: { ...a, reducedMotion: { ...a.reducedMotion, enabled: e } },
                        children: [
                            (0, t.jsx)("div", {
                                className: c.QT,
                                children: (0, t.jsxs)(r.B, {
                                    gap: 8,
                                    children: [
                                        (0, t.jsx)(s.d, {
                                            onChange: () => l((e) => !e),
                                            label: "Force reduced motion",
                                            checked: e,
                                        }),
                                        (0, t.jsx)(d.$, { onClick: () => p((e) => e + 1), text: "Reset animations" }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(
                                "div",
                                {
                                    className: c.Vg,
                                    children: b.map((e) => {
                                        let { name: l, Component: a } = e;
                                        return (0, t.jsxs)(
                                            "div",
                                            {
                                                className: c.Hn,
                                                children: [
                                                    (0, t.jsx)("div", {
                                                        className: c.k$,
                                                        children: (0, t.jsx)(a, {
                                                            style: { width: "100%", height: "100%" },
                                                        }),
                                                    }),
                                                    (0, t.jsx)(u.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        className: c.Pf,
                                                        children: l,
                                                    }),
                                                ],
                                            },
                                            l,
                                        );
                                    }),
                                },
                                o,
                            ),
                        ],
                    });
                },
            },
        ],
    };
