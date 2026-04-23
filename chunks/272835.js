a.d(t, { H: () => p });
var l = a(627968),
    r = a(64700),
    n = a(735438),
    s = a(939249),
    i = a(331322),
    d = a(821609),
    o = a(150934),
    c = a(292666),
    u = a(691885),
    h = a(252561),
    m = a(951707),
    x = a(614822);
let b = [
        { id: "xxs", label: "xxs", value: "xxs" },
        { id: "xs", label: "xs", value: "xs" },
        { id: "sm", label: "sm", value: "sm" },
        { id: "md", label: "md", value: "md" },
        { id: "lg", label: "lg", value: "lg" },
        { id: "xl", label: "xl", value: "xl" },
        { id: "xxl", label: "xxl", value: "xxl" },
        { id: "none", label: "0px", value: 0 },
        { id: "4px", label: "4px", value: 4 },
        { id: "6px", label: "6px", value: 6 },
        { id: "8px", label: "8px", value: 8 },
        { id: "12px", label: "12px", value: 12 },
        { id: "16px", label: "16px", value: 16 },
        { id: "20px", label: "20px", value: 20 },
        { id: "24px", label: "24px", value: 24 },
        { id: "32px", label: "32px", value: 32 },
        { id: "40px", label: "40px", value: 40 },
    ],
    p = {
        name: "Interactive H Scroll",
        id: "interactive-h-scroll",
        component: () => {
            let [e, t] = r.useState(15),
                [a, p] = r.useState(8),
                [g, f] = r.useState("xl"),
                [v, j] = r.useState(!0),
                _ = r.useMemo(
                    () =>
                        [...Array(e)].map((e, t) =>
                            (0, l.jsx)(
                                s.D,
                                {
                                    className: x.j,
                                    onClick: () => console.log(t),
                                    children: (0, l.jsxs)(i.B, {
                                        direction: "vertical",
                                        justify: "space-between",
                                        align: "center",
                                        children: [
                                            (0, l.jsx)("div", { children: t }),
                                            t % 3 == 0 &&
                                                (0, l.jsx)(d.$, {
                                                    onClick: () => console.log(`clicked button ${t}`),
                                                    text: "Click Me",
                                                }),
                                        ],
                                    }),
                                },
                                t,
                            ),
                        ),
                    [e],
                );
            return (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(m.A, { gap: a, edgeFade: g, hideActionsWhenDisabled: v, children: _ }),
                    (0, l.jsx)(h.nB, {}),
                    (0, l.jsxs)(h.MG, {
                        children: [
                            (0, l.jsx)(o.S, { checked: v, onChange: () => j(!v), label: "Hide Actions When Disabled" }),
                            (0, l.jsx)(c.k, {
                                type: "number",
                                min: 0,
                                value: e.toString(),
                                onChange: (e) => {
                                    t((0, n.clamp)(+e, 0, 100));
                                },
                                label: "Children Count",
                            }),
                        ],
                    }),
                    (0, l.jsx)(h.MG, {
                        children: (0, l.jsx)(u.l, {
                            value: a,
                            options: b,
                            onSelectionChange: p,
                            label: "Children Gap",
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, l.jsx)(h.MG, {
                        children: (0, l.jsx)(u.l, {
                            value: g,
                            options: b,
                            onSelectionChange: f,
                            label: "Edge Fade Space",
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                ],
            });
        },
        controls: {},
    };
