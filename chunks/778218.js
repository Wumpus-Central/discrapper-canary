n.d(t, { _: () => l }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(178940),
    s = n(159691);
let l = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: t, disabled: n, displayOnly: l, defaultChecked: c } = e,
                    [u, d] = i.useState(c),
                    f = i.useCallback(() => {
                        d(!0);
                    }, []),
                    _ = i.useCallback(() => {
                        d(!1);
                    }, []),
                    p = i.useCallback(() => {
                        d((e) => !e);
                    }, []);
                return (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(o.X, {
                            value: u,
                            onChange: (e, t) => d(t),
                            disabled: n,
                            displayOnly: l,
                            label: t,
                        }),
                        (0, r.jsxs)(a.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", u ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(a.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: f,
                                    disabled: n,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: _,
                                    disabled: n,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: p,
                                    disabled: n,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Accept terms and conditions",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                displayOnly: {
                    type: "boolean",
                    label: "Display Only",
                    defaultValue: !1,
                },
                defaultChecked: {
                    type: "boolean",
                    label: "Default Checked",
                    defaultValue: !1,
                },
            },
        },
    ],
};
