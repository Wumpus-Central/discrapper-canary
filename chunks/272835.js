"use strict";
n.d(t, { H: () => d });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(397927),
    o = n(252561),
    l = n(720462),
    u = n(309587);
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
    d = {
        name: "Interactive H Scroll",
        id: "interactive-h-scroll",
        component: () => {
            let [e, t] = i.useState(15),
                [n, d] = i.useState(8),
                [_, f] = i.useState("xl"),
                [p, h] = i.useState(!0),
                m = i.useMemo(
                    () =>
                        [...Array(e)].map((e, t) =>
                            (0, r.jsx)(
                                s.DUT,
                                {
                                    className: u.j,
                                    onClick: () => console.log(t),
                                    children: (0, r.jsxs)(s.BJc, {
                                        direction: "vertical",
                                        justify: "space-between",
                                        align: "center",
                                        children: [
                                            (0, r.jsx)("div", { children: t }),
                                            t % 3 == 0 &&
                                                (0, r.jsx)(s.Button, {
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
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.A, { gap: n, edgeFade: _, hideActionsWhenDisabled: p, children: m }),
                    (0, r.jsx)(o.nB, {}),
                    (0, r.jsxs)(o.MG, {
                        children: [
                            (0, r.jsx)(s.Checkbox, {
                                checked: p,
                                onChange: () => h(!p),
                                label: "Hide Actions When Disabled",
                            }),
                            (0, r.jsx)(s.ksK, {
                                type: "number",
                                min: 0,
                                value: e.toString(),
                                onChange: (e) => {
                                    t((0, a.clamp)(+e, 0, 100));
                                },
                                label: "Children Count",
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.MG, {
                        children: (0, r.jsx)(s.l6P, {
                            value: n,
                            options: c,
                            onSelectionChange: d,
                            label: "Children Gap",
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, r.jsx)(o.MG, {
                        children: (0, r.jsx)(s.l6P, {
                            value: _,
                            options: c,
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
