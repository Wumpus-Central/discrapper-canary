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
                let {
                        label: t,
                        description: n,
                        disabled: c,
                        displayOnly: u,
                        defaultChecked: d,
                        groupVariant: f,
                        labelType: _,
                        iconPosition: p,
                    } = e,
                    [h, m] = i.useState(d);
                i.useEffect(() => {
                    m(d);
                }, [d]);
                let g = i.useCallback(() => {
                        m(!0);
                    }, []),
                    E = i.useCallback(() => {
                        m(!1);
                    }, []),
                    b = i.useCallback(() => {
                        m((e) => !e);
                    }, []);
                return (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(l.XZJ, {
                            checked: h,
                            onChange: (e) => m(e),
                            disabled: c,
                            displayOnly: u,
                            label: t,
                            description: null != n || "" === n ? n : void 0,
                            value: "checkbox-value",
                            groupVariant: f,
                            labelType: _,
                            leadingIcon: "leading" === p ? a.d3s : void 0,
                            trailingIcon: "trailing" === p ? a.d3s : void 0,
                        }),
                        (0, r.jsxs)(o.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", h ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: g,
                                    disabled: c,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: E,
                                    disabled: c,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: b,
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
                groupVariant: {
                    type: "select",
                    label: "Group Variant",
                    options: [
                        {
                            label: "Single",
                            value: "single",
                        },
                        {
                            label: "Group",
                            value: "group",
                        },
                    ],
                    defaultValue: "single",
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
                iconPosition: {
                    type: "select",
                    label: "Icon Position",
                    options: [
                        {
                            label: "None",
                            value: "none",
                        },
                        {
                            label: "Leading",
                            value: "leading",
                        },
                        {
                            label: "Trailing",
                            value: "trailing",
                        },
                    ],
                    defaultValue: "none",
                },
            },
        },
    ],
};
