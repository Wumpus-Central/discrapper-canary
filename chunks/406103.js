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
                        description: u,
                        iconPosition: d,
                        withMixedDisabledOptions: f,
                    } = e,
                    [_, p] = i.useState([]),
                    h = i.useMemo(
                        () =>
                            [
                                {
                                    label: "Option 1",
                                    value: "option1",
                                    description: null != u || "" === u ? u : void 0,
                                    leadingIcon: "leading" === d ? a.d3s : void 0,
                                    disabled: !f && void 0,
                                },
                                {
                                    label: "Option 2",
                                    value: "option2",
                                    description: null != u || "" === u ? u : void 0,
                                    leadingIcon: "leading" === d ? a.d3s : void 0,
                                    disabled: !!f || void 0,
                                },
                                {
                                    label: "Option 3",
                                    value: "option3",
                                    description: null != u || "" === u ? u : void 0,
                                    leadingIcon: "leading" === d ? a.d3s : void 0,
                                    disabled: !f && void 0,
                                },
                                {
                                    label: "Option 4",
                                    value: "option4",
                                    description: null != u || "" === u ? u : void 0,
                                    leadingIcon: "leading" === d ? a.d3s : void 0,
                                    disabled: !!f || void 0,
                                },
                                {
                                    label: "Option 5",
                                    value: "option5",
                                    description: null != u || "" === u ? u : void 0,
                                    leadingIcon: "leading" === d ? a.d3s : void 0,
                                    disabled: !f && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, u, d, f],
                    ),
                    m = i.useCallback((e) => {
                        p(e);
                    }, []),
                    g = i.useCallback(() => {
                        p(h.map((e) => e.value));
                    }, [h]),
                    E = i.useCallback(() => {
                        p([]);
                    }, []),
                    b = i.useCallback(() => {
                        h.length > 0 && p([h[0].value]);
                    }, [h]);
                return (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(l.c, {
                            value: _,
                            label: c,
                            onChange: m,
                            options: h,
                            disabled: t,
                        }),
                        (0, r.jsxs)(o.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", _.length > 0 ? _.join(", ") : "None"],
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: g,
                                    disabled: t || 0 === h.length,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: b,
                                    disabled: t || 0 === h.length,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: E,
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
                    ],
                    defaultValue: "none",
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
