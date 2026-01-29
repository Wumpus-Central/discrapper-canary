n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n(397927),
    s = n(408238),
    l = n(252561),
    c = n(907931);
let u = [
        {
            id: "xxs",
            label: "xxs",
            value: "xxs",
        },
        {
            id: "xs",
            label: "xs",
            value: "xs",
        },
        {
            id: "sm",
            label: "sm",
            value: "sm",
        },
        {
            id: "md",
            label: "md",
            value: "md",
        },
        {
            id: "lg",
            label: "lg",
            value: "lg",
        },
        {
            id: "xl",
            label: "xl",
            value: "xl",
        },
        {
            id: "xxl",
            label: "xxl",
            value: "xxl",
        },
        {
            id: "none",
            label: "0px",
            value: 0,
        },
        {
            id: "4px",
            label: "4px",
            value: 4,
        },
        {
            id: "6px",
            label: "6px",
            value: 6,
        },
        {
            id: "8px",
            label: "8px",
            value: 8,
        },
        {
            id: "12px",
            label: "12px",
            value: 12,
        },
        {
            id: "16px",
            label: "16px",
            value: 16,
        },
        {
            id: "20px",
            label: "20px",
            value: 20,
        },
        {
            id: "24px",
            label: "24px",
            value: 24,
        },
        {
            id: "32px",
            label: "32px",
            value: 32,
        },
        {
            id: "40px",
            label: "40px",
            value: 40,
        },
    ],
    d = () => {
        let [e, t] = i.useState(15),
            [n, d] = i.useState(8),
            [f, p] = i.useState("xl"),
            [_, h] = i.useState(!0),
            m = i.useMemo(
                () =>
                    [...Array(e)].map((e, t) =>
                        (0, r.jsx)(
                            o.DUT,
                            {
                                className: c.j,
                                onClick: () => console.log(t),
                                children: (0, r.jsxs)(o.BJc, {
                                    direction: "vertical",
                                    justify: "space-between",
                                    align: "center",
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: t,
                                        }),
                                        t % 3 == 0 &&
                                            (0, r.jsx)(o.Button, {
                                                onClick: () => console.log("clicked button ".concat(t)),
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
                (0, r.jsx)(s.A, {
                    gap: n,
                    edgeFade: f,
                    hideActionsWhenDisabled: _,
                    children: m,
                }),
                (0, r.jsx)(l.nB, {}),
                (0, r.jsxs)(l.MG, {
                    children: [
                        (0, r.jsx)(o.Checkbox, {
                            checked: _,
                            onChange: () => h(!_),
                            label: "Hide Actions When Disabled",
                        }),
                        (0, r.jsx)(o.ksK, {
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
                (0, r.jsx)(l.MG, {
                    children: (0, r.jsx)(o.l6P, {
                        value: n,
                        options: u,
                        onSelectionChange: d,
                        label: "Children Gap",
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
                (0, r.jsx)(l.MG, {
                    children: (0, r.jsx)(o.l6P, {
                        value: f,
                        options: u,
                        onSelectionChange: p,
                        label: "Edge Fade Space",
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            ],
        });
    };
