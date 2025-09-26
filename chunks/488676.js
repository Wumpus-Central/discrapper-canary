n.d(t, { t: () => f }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(30717),
    o = n(895070),
    s = n(632140),
    l = n(966649),
    c = n(793030),
    u = n(538534),
    d = n(159691);
let f = {
    title: "RadioGroup",
    stories: [
        {
            id: "radiogroup",
            name: "RadioGroup",
            component: function (e) {
                let {
                        disabled: t,
                        optionCount: n,
                        label: f,
                        description: _,
                        helperText: p,
                        required: h,
                        withDescriptions: m,
                        withIcons: g,
                    } = e,
                    [E, b] = i.useState(),
                    y = i.useMemo(() => {
                        let e = [s.x, o.A, a.d, l.U];
                        return [
                            {
                                name: "Option 1",
                                value: "option1",
                                desc: m ? "This is the first option with some descriptive text" : null,
                                icon: g ? e[0] : void 0,
                            },
                            {
                                name: "Option 2",
                                value: "option2",
                                desc: m ? "This is the second option with different content" : null,
                                icon: g ? e[1] : void 0,
                            },
                            {
                                name: "Option 3",
                                value: "option3",
                                desc: m ? "This is the third option for comparison" : null,
                                icon: g ? e[2] : void 0,
                            },
                            {
                                name: "Option 4",
                                value: "option4",
                                desc: m ? "This is the fourth and final option" : null,
                                icon: g ? e[3] : void 0,
                            },
                            {
                                name: "Option 5",
                                value: "option5",
                                desc: m ? "This is the fifth option" : null,
                                icon: g ? e[4] : void 0,
                            },
                        ].slice(0, Math.max(1, Math.min(5, n)));
                    }, [n, m, g]),
                    O = i.useCallback((e) => {
                        b(e);
                    }, []),
                    v = i.useCallback(() => {
                        y.length > 0 && b(y[0].value);
                    }, [y]),
                    I = i.useCallback(() => {
                        y.length > 0 && b(y[y.length - 1].value);
                    }, [y]),
                    T = i.useCallback(() => {
                        b(void 0);
                    }, []);
                return (0, r.jsxs)(c.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(u.E, {
                            value: E,
                            label: f,
                            description: _,
                            helperText: p,
                            required: h,
                            onChange: O,
                            options: y,
                            disabled: t,
                        }),
                        (0, r.jsxs)(c.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", "string" == typeof E && "" !== E ? E : "None"],
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(d.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: v,
                                    disabled: t || 0 === y.length,
                                }),
                                (0, r.jsx)(d.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select Last",
                                    onClick: I,
                                    disabled: t || 0 === y.length,
                                }),
                                (0, r.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear",
                                    onClick: T,
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
                    defaultValue: "Radio Group",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description for the radio group",
                },
                helperText: {
                    type: "text",
                    label: "Helper Text",
                    defaultValue: "This is a helper text for the radio group",
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                optionCount: {
                    type: "number",
                    label: "Number of Options (max 5)",
                    defaultValue: 3,
                },
                withDescriptions: {
                    type: "boolean",
                    label: "Show Descriptions",
                    defaultValue: !0,
                },
                withIcons: {
                    type: "boolean",
                    label: "Show Icons",
                    defaultValue: !1,
                },
            },
        },
    ],
};
