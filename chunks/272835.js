"use strict";
a.d(t, { H: () => b });
var r = a(627968),
    l = a(64700),
    n = a(735438),
    i = a(939249),
    s = a(331322),
    o = a(821609),
    d = a(150934),
    c = a(292666),
    u = a(691885),
    h = a(252561),
    p = a(951707),
    _ = a(614822);
let m = [
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
    b = {
        name: "Interactive H Scroll",
        id: "interactive-h-scroll",
        component: () => {
            let [e, t] = l.useState(15),
                [a, b] = l.useState(8),
                [g, f] = l.useState("xl"),
                [x, v] = l.useState(!0),
                A = l.useMemo(
                    () =>
                        [...Array(e)].map((e, t) =>
                            (0, r.jsx)(
                                i.D,
                                {
                                    className: _.j,
                                    onClick: () => console.log(t),
                                    children: (0, r.jsxs)(s.B, {
                                        direction: "vertical",
                                        justify: "space-between",
                                        align: "center",
                                        children: [
                                            (0, r.jsx)("div", { children: t }),
                                            t % 3 == 0 &&
                                                (0, r.jsx)(o.$, {
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
                    (0, r.jsx)(p.A, { gap: a, edgeFade: g, hideActionsWhenDisabled: x, children: A }),
                    (0, r.jsx)(h.nB, {}),
                    (0, r.jsxs)(h.MG, {
                        children: [
                            (0, r.jsx)(d.S, { checked: x, onChange: () => v(!x), label: "Hide Actions When Disabled" }),
                            (0, r.jsx)(c.k, {
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
                    (0, r.jsx)(h.MG, {
                        children: (0, r.jsx)(u.l, {
                            value: a,
                            options: m,
                            onSelectionChange: b,
                            label: "Children Gap",
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, r.jsx)(h.MG, {
                        children: (0, r.jsx)(u.l, {
                            value: g,
                            options: m,
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
