a.d(l, { E: () => u });
var t = a(627968),
    n = a(64700),
    o = a(885574),
    i = a(331322),
    r = a(167417),
    s = a(834730),
    d = a(821609);
let u = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: l,
                        optionCount: a,
                        label: u,
                        optionLabel: c,
                        description: b,
                        showIcons: p,
                        withMixedDisabledOptions: m,
                    } = e,
                    [h, x] = n.useState(["option1"]),
                    g = n.useMemo(
                        () =>
                            [
                                {
                                    label: null != c ? `${c} 1` : "Option 1",
                                    value: "option1",
                                    description: null == b || "" === b ? void 0 : b,
                                    leadingIcon: p ? o.m : void 0,
                                    disabled: !m && void 0,
                                },
                                {
                                    label: null != c ? `${c} 2` : "Option 2",
                                    value: "option2",
                                    description: null == b || "" === b ? void 0 : b,
                                    leadingIcon: p ? o.m : void 0,
                                    disabled: !!m || void 0,
                                },
                                {
                                    label: null != c ? `${c} 3` : "Option 3",
                                    value: "option3",
                                    description: null == b || "" === b ? void 0 : b,
                                    leadingIcon: p ? o.m : void 0,
                                    disabled: !m && void 0,
                                },
                                {
                                    label: null != c ? `${c} 4` : "Option 4",
                                    value: "option4",
                                    description: null == b || "" === b ? void 0 : b,
                                    leadingIcon: p ? o.m : void 0,
                                    disabled: !!m || void 0,
                                },
                                {
                                    label: null != c ? `${c} 5` : "Option 5",
                                    value: "option5",
                                    description: null == b || "" === b ? void 0 : b,
                                    leadingIcon: p ? o.m : void 0,
                                    disabled: !m && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, c, b, p, m],
                    ),
                    f = n.useCallback((e) => {
                        x(e);
                    }, []),
                    v = n.useCallback(() => {
                        x(g.map((e) => e.value));
                    }, [g]),
                    y = n.useCallback(() => {
                        x([]);
                    }, []),
                    _ = n.useCallback(() => {
                        g.length > 0 && x([g[0].value]);
                    }, [g]);
                return (0, t.jsxs)(i.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(r.$, { selectedValues: h, label: u, onChange: f, options: g, disabled: l }),
                        (0, t.jsxs)(s.E, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", h.length > 0 ? h.join(", ") : "None"],
                        }),
                        (0, t.jsxs)(i.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(d.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: v,
                                    disabled: l || 0 === g.length,
                                }),
                                (0, t.jsx)(d.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: _,
                                    disabled: l || 0 === g.length,
                                }),
                                (0, t.jsx)(d.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: y,
                                    disabled: l,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Mana Checkbox Group" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    options: [
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "5", value: 5 },
                    ],
                    defaultValue: 3,
                },
                optionLabel: { type: "text", label: "Option Label", defaultValue: "Option" },
                description: { type: "text", label: "Description", defaultValue: "" },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
                withMixedDisabledOptions: { type: "boolean", label: "Mixed Disabled Options", defaultValue: !1 },
            },
        },
    ],
};
