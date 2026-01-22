n.d(t, { h: () => c }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(158954),
    o = n(732955),
    l = n(397927);
let c = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: t, description: n, disabled: c, labelType: u, showIcons: d } = e,
                    [f, p] = i.useState(!1),
                    _ = i.useCallback(() => {
                        p(!0);
                    }, []),
                    h = i.useCallback(() => {
                        p(!1);
                    }, []),
                    m = i.useCallback(() => {
                        p((e) => !e);
                    }, []);
                return (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(l.Checkbox, {
                            checked: f,
                            onChange: (e) => p(e),
                            disabled: c,
                            label: t,
                            description: null != n || "" === n ? n : void 0,
                            value: "checkbox-value",
                            labelType: u,
                            leadingIcon: d ? a.CircleInformationIcon : void 0,
                        }),
                        (0, r.jsxs)(s.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", f ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(s.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(o.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: _,
                                    disabled: c,
                                }),
                                (0, r.jsx)(o.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: h,
                                    disabled: c,
                                }),
                                (0, r.jsx)(o.$nd, {
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
