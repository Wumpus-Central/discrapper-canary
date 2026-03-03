a.d(l, { Q: () => d });
var t = a(627968),
    o = a(64700),
    n = a(18051),
    i = a(158954),
    s = a(922516);
let r = Object.entries(n)
        .filter((e) => {
            let l = e[1];
            return "function" == typeof l && "riveSrc" in l;
        })
        .map((e) => {
            let [l, a] = e;
            return { name: l, Component: a };
        })
        .sort((e, l) => e.name.localeCompare(l.name)),
    d = {
        title: "Rive Animations",
        stories: [
            {
                name: "All Animations",
                id: "rive-all-animations",
                component: function () {
                    let [e, l] = o.useState(!0),
                        a = o.useContext(i.CZY),
                        [n, d] = o.useState(0);
                    return (0, t.jsxs)(i.CZY.Provider, {
                        value: { ...a, reducedMotion: { ...a.reducedMotion, enabled: e } },
                        children: [
                            (0, t.jsx)("div", {
                                className: s.QT,
                                children: (0, t.jsxs)(i.BJc, {
                                    gap: 8,
                                    children: [
                                        (0, t.jsx)(i.dOG, {
                                            onChange: () => l((e) => !e),
                                            label: "Force reduced motion",
                                            checked: e,
                                        }),
                                        (0, t.jsx)(i.$nd, { onClick: () => d((e) => e + 1), text: "Reset animations" }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(
                                "div",
                                {
                                    className: s.Vg,
                                    children: r.map((e) => {
                                        let { name: l, Component: a } = e;
                                        return (0, t.jsxs)(
                                            "div",
                                            {
                                                className: s.Hn,
                                                children: [
                                                    (0, t.jsx)("div", {
                                                        className: s.k$,
                                                        children: (0, t.jsx)(a, {
                                                            style: { width: "100%", height: "100%" },
                                                        }),
                                                    }),
                                                    (0, t.jsx)(i.EYj, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        className: s.Pf,
                                                        children: l,
                                                    }),
                                                ],
                                            },
                                            l,
                                        );
                                    }),
                                },
                                n,
                            ),
                        ],
                    });
                },
            },
        ],
    };
