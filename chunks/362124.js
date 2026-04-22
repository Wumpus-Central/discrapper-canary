a.d(l, { h: () => u });
var t = a(627968),
    n = a(64700),
    o = a(885574),
    i = a(331322),
    r = a(834730),
    s = a(821609),
    d = a(150934);
let u = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: l, description: a, disabled: u, labelType: c, showIcons: b } = e,
                    [p, m] = n.useState(!1),
                    h = n.useCallback(() => {
                        m(!0);
                    }, []),
                    x = n.useCallback(() => {
                        m(!1);
                    }, []),
                    g = n.useCallback(() => {
                        m((e) => !e);
                    }, []);
                return (0, t.jsxs)(i.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(d.S, {
                            checked: p,
                            onChange: (e) => m(e),
                            disabled: u,
                            label: l,
                            description: null != a || "" === a ? a : void 0,
                            value: "checkbox-value",
                            labelType: c,
                            leadingIcon: b ? o.m : void 0,
                        }),
                        (0, t.jsxs)(r.E, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", p ? "Checked" : "Unchecked"],
                        }),
                        (0, t.jsxs)(i.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(s.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: h,
                                    disabled: u,
                                }),
                                (0, t.jsx)(s.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: x,
                                    disabled: u,
                                }),
                                (0, t.jsx)(s.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: g,
                                    disabled: u,
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
