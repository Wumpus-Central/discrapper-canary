n.d(t, { t: () => l }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(793030),
    s = n(159691);
let l = {
    title: "RadioGroup",
    stories: [
        {
            id: "radiogroup",
            name: "RadioGroup",
            component: function (e) {
                let {
                        disabled: t,
                        optionCount: n,
                        label: l,
                        optionLabel: c,
                        description: u,
                        showIcons: d,
                        withMixedDisabledOptions: f,
                    } = e,
                    [_, p] = i.useState("option1"),
                    h = i.useMemo(
                        () =>
                            [
                                {
                                    name: null != c ? "".concat(c, " 1") : "Option 1",
                                    value: "option1",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: d ? a.d3s : void 0,
                                    disabled: !f && void 0,
                                },
                                {
                                    name: null != c ? "".concat(c, " 2") : "Option 2",
                                    value: "option2",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: d ? a.d3s : void 0,
                                    disabled: !!f || void 0,
                                },
                                {
                                    name: null != c ? "".concat(c, " 3") : "Option 3",
                                    value: "option3",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: d ? a.d3s : void 0,
                                    disabled: !f && void 0,
                                },
                                {
                                    name: null != c ? "".concat(c, " 4") : "Option 4",
                                    value: "option4",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: d ? a.d3s : void 0,
                                    disabled: !!f || void 0,
                                },
                                {
                                    name: null != c ? "".concat(c, " 5") : "Option 5",
                                    value: "option5",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: d ? a.d3s : void 0,
                                    disabled: !f && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, c, u, d, f],
                    ),
                    m = i.useCallback((e) => {
                        p(e);
                    }, []),
                    g = i.useCallback(() => {
                        h.length > 0 && p(h[0].value);
                    }, [h]),
                    E = i.useCallback(() => {
                        h.length > 0 && p(h[h.length - 1].value);
                    }, [h]),
                    b = i.useCallback(() => {
                        p(void 0);
                    }, []);
                return (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(s.Eep, {
                            value: _,
                            label: l,
                            onChange: m,
                            options: h,
                            disabled: t,
                        }),
                        (0, r.jsxs)(o.xvT, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", "string" == typeof _ && "" !== _ ? _ : "None"],
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: t || 0 === h.length,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select Last",
                                    onClick: E,
                                    disabled: t || 0 === h.length,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear",
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
                    defaultValue: "Mana Radio Group",
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
