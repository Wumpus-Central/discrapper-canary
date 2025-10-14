n.d(t, { I: () => c }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(793030),
    s = n(159691),
    l = n(709867);
let c = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: t,
                        optionCount: n,
                        label: c,
                        optionLabel: u,
                        description: d,
                        showIcons: f,
                        withMixedDisabledOptions: _,
                    } = e,
                    [p, h] = i.useState(["option1"]),
                    m = i.useMemo(
                        () =>
                            [
                                {
                                    label: null != u ? "".concat(u, " 1") : "Option 1",
                                    value: "option1",
                                    description: null == d || "" === d ? void 0 : d,
                                    leadingIcon: f ? a.d3s : void 0,
                                    disabled: !_ && void 0,
                                },
                                {
                                    label: null != u ? "".concat(u, " 2") : "Option 2",
                                    value: "option2",
                                    description: null == d || "" === d ? void 0 : d,
                                    leadingIcon: f ? a.d3s : void 0,
                                    disabled: !!_ || void 0,
                                },
                                {
                                    label: null != u ? "".concat(u, " 3") : "Option 3",
                                    value: "option3",
                                    description: null == d || "" === d ? void 0 : d,
                                    leadingIcon: f ? a.d3s : void 0,
                                    disabled: !_ && void 0,
                                },
                                {
                                    label: null != u ? "".concat(u, " 4") : "Option 4",
                                    value: "option4",
                                    description: null == d || "" === d ? void 0 : d,
                                    leadingIcon: f ? a.d3s : void 0,
                                    disabled: !!_ || void 0,
                                },
                                {
                                    label: null != u ? "".concat(u, " 5") : "Option 5",
                                    value: "option5",
                                    description: null == d || "" === d ? void 0 : d,
                                    leadingIcon: f ? a.d3s : void 0,
                                    disabled: !_ && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, u, d, f, _],
                    ),
                    g = i.useCallback((e) => {
                        h(e);
                    }, []),
                    E = i.useCallback(() => {
                        h(m.map((e) => e.value));
                    }, [m]),
                    b = i.useCallback(() => {
                        h([]);
                    }, []),
                    y = i.useCallback(() => {
                        m.length > 0 && h([m[0].value]);
                    }, [m]);
                return (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(l.c, {
                            selectedValues: p,
                            label: c,
                            onChange: g,
                            options: m,
                            disabled: t,
                        }),
                        (0, r.jsxs)(o.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", p.length > 0 ? p.join(", ") : "None"],
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: E,
                                    disabled: t || 0 === m.length,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: y,
                                    disabled: t || 0 === m.length,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: b,
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
