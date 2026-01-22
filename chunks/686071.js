n.d(t, { E: () => s }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954);
let s = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: t,
                        optionCount: n,
                        label: s,
                        optionLabel: o,
                        description: l,
                        showIcons: c,
                        withMixedDisabledOptions: u,
                    } = e,
                    [d, f] = i.useState(["option1"]),
                    p = i.useMemo(
                        () =>
                            [
                                {
                                    label: null != o ? "".concat(o, " 1") : "Option 1",
                                    value: "option1",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.mir : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != o ? "".concat(o, " 2") : "Option 2",
                                    value: "option2",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.mir : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != o ? "".concat(o, " 3") : "Option 3",
                                    value: "option3",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.mir : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != o ? "".concat(o, " 4") : "Option 4",
                                    value: "option4",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.mir : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != o ? "".concat(o, " 5") : "Option 5",
                                    value: "option5",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.mir : void 0,
                                    disabled: !u && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, o, l, c, u],
                    ),
                    _ = i.useCallback((e) => {
                        f(e);
                    }, []),
                    h = i.useCallback(() => {
                        f(p.map((e) => e.value));
                    }, [p]),
                    m = i.useCallback(() => {
                        f([]);
                    }, []),
                    g = i.useCallback(() => {
                        p.length > 0 && f([p[0].value]);
                    }, [p]);
                return (0, r.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(a.$QX, {
                            selectedValues: d,
                            label: s,
                            onChange: _,
                            options: p,
                            disabled: t,
                        }),
                        (0, r.jsxs)(a.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", d.length > 0 ? d.join(", ") : "None"],
                        }),
                        (0, r.jsxs)(a.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(a.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: h,
                                    disabled: t || 0 === p.length,
                                }),
                                (0, r.jsx)(a.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: t || 0 === p.length,
                                }),
                                (0, r.jsx)(a.$nd, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: m,
                                    disabled: t,
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
                    defaultValue: "Mana Checkbox Group",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    options: [
                        {
                            label: "1",
                            value: 1,
                        },
                        {
                            label: "2",
                            value: 2,
                        },
                        {
                            label: "3",
                            value: 3,
                        },
                        {
                            label: "4",
                            value: 4,
                        },
                        {
                            label: "5",
                            value: 5,
                        },
                    ],
                    defaultValue: 3,
                },
                optionLabel: {
                    type: "text",
                    label: "Option Label",
                    defaultValue: "Option",
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
                withMixedDisabledOptions: {
                    type: "boolean",
                    label: "Mixed Disabled Options",
                    defaultValue: !1,
                },
            },
        },
    ],
};
