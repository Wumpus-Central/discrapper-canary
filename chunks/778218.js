n.d(t, { _: () => c }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(793030),
    s = n(159691),
    l = n(481060);
let c = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: t, description: n, disabled: c, labelType: u, showIcons: d } = e,
                    [f, _] = i.useState(!1),
                    p = i.useCallback(() => {
                        _(!0);
                    }, []),
                    h = i.useCallback(() => {
                        _(!1);
                    }, []),
                    m = i.useCallback(() => {
                        _((e) => !e);
                    }, []);
                return (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(l.Checkbox, {
                            checked: f,
                            onChange: (e) => _(e),
                            disabled: c,
                            label: t,
                            description: null != n || "" === n ? n : void 0,
                            value: "checkbox-value",
                            labelType: u,
                            leadingIcon: d ? a.d3s : void 0,
                        }),
                        (0, r.jsxs)(o.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", f ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: p,
                                    disabled: c,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: h,
                                    disabled: c,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: m,
                                    disabled: c,
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
