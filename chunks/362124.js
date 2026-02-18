a.d(l, { h: () => d });
var t = a(627968),
    o = a(64700),
    n = a(934551),
    i = a(158954),
    s = a(732955),
    r = a(397927);
let d = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: a, disabled: d, labelType: u, showIcons: c } = e,
                    [b, p] = o.useState(!1),
                    m = o.useCallback(() => {
                        p(!0);
                    }, []),
                    x = o.useCallback(() => {
                        p(!1);
                    }, []),
                    v = o.useCallback(() => {
                        p((e) => !e);
                    }, []);
                return (0, t.jsxs)(i.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(r.Checkbox, {
                            checked: b,
                            onChange: (e) => p(e),
                            disabled: d,
                            label: l,
                            description: null != a || "" === a ? a : void 0,
                            value: "checkbox-value",
                            labelType: u,
                            leadingIcon: c ? n.CircleInformationIcon : void 0,
                        }),
                        (0, t.jsxs)(i.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", b ? "Checked" : "Unchecked"],
                        }),
                        (0, t.jsxs)(i.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(s.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: m,
                                    disabled: d,
                                }),
                                (0, t.jsx)(s.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: x,
                                    disabled: d,
                                }),
                                (0, t.jsx)(s.$nd, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: v,
                                    disabled: d,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Accept terms and conditions" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                labelType: {
                    type: "select",
                    label: "Label Type",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                    ],
                    defaultValue: "primary",
                },
                description: { type: "text", label: "Description", defaultValue: "" },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
            },
        },
    ],
};
