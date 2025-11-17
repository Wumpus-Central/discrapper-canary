n.d(t, { I: () => o }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030);
let o = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: t,
                        optionCount: n,
                        label: o,
                        optionLabel: s,
                        description: l,
                        showIcons: c,
                        withMixedDisabledOptions: u,
                    } = e,
                    [d, f] = i.useState(["option1"]),
                    _ = i.useMemo(
                        () =>
                            [
                                {
                                    label: null != s ? "".concat(s, " 1") : "Option 1",
                                    value: "option1",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.d3s : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != s ? "".concat(s, " 2") : "Option 2",
                                    value: "option2",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.d3s : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != s ? "".concat(s, " 3") : "Option 3",
                                    value: "option3",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.d3s : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != s ? "".concat(s, " 4") : "Option 4",
                                    value: "option4",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.d3s : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != s ? "".concat(s, " 5") : "Option 5",
                                    value: "option5",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: c ? a.d3s : void 0,
                                    disabled: !u && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, s, l, c, u],
                    ),
                    p = i.useCallback((e) => {
                        f(e);
                    }, []),
                    h = i.useCallback(() => {
                        f(_.map((e) => e.value));
                    }, [_]),
                    m = i.useCallback(() => {
                        f([]);
                    }, []),
                    g = i.useCallback(() => {
                        _.length > 0 && f([_[0].value]);
                    }, [_]);
                return (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(a.cOn, {
                            selectedValues: d,
                            label: o,
                            onChange: p,
                            options: _,
                            disabled: t,
                        }),
                        (0, r.jsxs)(a.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", d.length > 0 ? d.join(", ") : "None"],
                        }),
                        (0, r.jsxs)(a.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(a.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: h,
                                    disabled: t || 0 === _.length,
                                }),
                                (0, r.jsx)(a.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: t || 0 === _.length,
                                }),
                                (0, r.jsx)(a.zxk, {
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
