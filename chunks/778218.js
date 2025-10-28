t.d(l, { _: () => u }), t(953529), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(657707),
    i = t(793030),
    r = t(159691),
    s = t(481060);
let u = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: t, disabled: u, labelType: d, showIcons: c } = e,
                    [b, p] = n.useState(!1),
                    y = n.useCallback(() => {
                        p(!0);
                    }, []),
                    m = n.useCallback(() => {
                        p(!1);
                    }, []),
                    f = n.useCallback(() => {
                        p((e) => !e);
                    }, []);
                return (0, a.jsxs)(i.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, a.jsx)(s.Checkbox, {
                            checked: b,
                            onChange: (e) => p(e),
                            disabled: u,
                            label: l,
                            description: null != t || "" === t ? t : void 0,
                            value: "checkbox-value",
                            labelType: d,
                            leadingIcon: c ? o.d3s : void 0,
                        }),
                        (0, a.jsxs)(i.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", b ? "Checked" : "Unchecked"],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, a.jsx)(r.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: y,
                                    disabled: u,
                                }),
                                (0, a.jsx)(r.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: m,
                                    disabled: u,
                                }),
                                (0, a.jsx)(r.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: f,
                                    disabled: u,
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
                labelType: {
                    type: "select",
                    label: "Label Type",
                    options: [
                        {
                            label: "Primary",
                            value: "primary",
                        },
                        {
                            label: "Secondary",
                            value: "secondary",
                        },
                    ],
                    defaultValue: "primary",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "",
                },
                showIcons: {
                    type: "boolean",
                    label: "Show Icons",
                    defaultValue: !1,
                },
            },
        },
    ],
};
