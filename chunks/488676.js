n.d(t, { t: () => f }), n(388685);
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
                let { disabled: t, optionCount: n, label: f, withDescriptions: _, withIcons: p } = e,
                    [h, m] = i.useState(),
                    g = i.useMemo(() => {
                        let e = [s.x, o.A, a.d, l.U];
                        return [
                            {
                                name: "Option 1",
                                value: "option1",
                                desc: _ ? "This is the first option with some descriptive text" : null,
                                icon: p ? e[0] : void 0,
                            },
                            {
                                name: "Option 2",
                                value: "option2",
                                desc: _ ? "This is the second option with different content" : null,
                                icon: p ? e[1] : void 0,
                            },
                            {
                                name: "Option 3",
                                value: "option3",
                                desc: _ ? "This is the third option for comparison" : null,
                                icon: p ? e[2] : void 0,
                            },
                            {
                                name: "Option 4",
                                value: "option4",
                                desc: _ ? "This is the fourth and final option" : null,
                                icon: p ? e[3] : void 0,
                            },
                            {
                                name: "Option 5",
                                value: "option5",
                                desc: _ ? "This is the fifth option" : null,
                                icon: p ? e[4] : void 0,
                            },
                        ].slice(0, Math.max(1, Math.min(5, n)));
                    }, [n, _, p]),
                    E = i.useCallback((e) => {
                        m(e);
                    }, []),
                    b = i.useCallback(() => {
                        g.length > 0 && m(g[0].value);
                    }, [g]),
                    y = i.useCallback(() => {
                        g.length > 0 && m(g[g.length - 1].value);
                    }, [g]),
                    O = i.useCallback(() => {
                        m(void 0);
                    }, []);
                return (0, r.jsxs)(c.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(u.E, {
                            value: h,
                            label: f,
                            onChange: E,
                            options: g,
                            disabled: t,
                        }),
                        (0, r.jsxs)(c.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", "string" == typeof h && "" !== h ? h : "None"],
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(d.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: b,
                                    disabled: t || 0 === g.length,
                                }),
                                (0, r.jsx)(d.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select Last",
                                    onClick: y,
                                    disabled: t || 0 === g.length,
                                }),
                                (0, r.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear",
                                    onClick: O,
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
