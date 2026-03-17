a.d(t, { H: () => x });
var l = a(627968),
    r = a(64700),
    n = a(735438),
    o = a(397927),
    s = a(252561),
    d = a(720462),
    i = a(309587);
let c = [
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
    x = {
        name: "Interactive H Scroll",
        id: "interactive-h-scroll",
        component: () => {
            let [e, t] = r.useState(15),
                [a, x] = r.useState(8),
                [u, h] = r.useState("xl"),
                [m, b] = r.useState(!0),
                p = r.useMemo(
                    () =>
                        [...Array(e)].map((e, t) =>
                            (0, l.jsx)(
                                o.DUT,
                                {
                                    className: i.j,
                                    onClick: () => console.log(t),
                                    children: (0, l.jsxs)(o.BJc, {
                                        direction: "vertical",
                                        justify: "space-between",
                                        align: "center",
                                        children: [
                                            (0, l.jsx)("div", { children: t }),
                                            t % 3 == 0 &&
                                                (0, l.jsx)(o.Button, {
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
                    (0, l.jsx)(d.A, { gap: a, edgeFade: u, hideActionsWhenDisabled: m, children: p }),
                    (0, l.jsx)(s.nB, {}),
                    (0, l.jsxs)(s.MG, {
                        children: [
                            (0, l.jsx)(o.Checkbox, {
                                checked: m,
                                onChange: () => b(!m),
                                label: "Hide Actions When Disabled",
                            }),
                            (0, l.jsx)(o.ksK, {
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
                    (0, l.jsx)(s.MG, {
                        children: (0, l.jsx)(o.l6P, {
                            value: a,
                            options: c,
                            onSelectionChange: x,
                            label: "Children Gap",
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, l.jsx)(s.MG, {
                        children: (0, l.jsx)(o.l6P, {
                            value: u,
                            options: c,
                            onSelectionChange: h,
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
