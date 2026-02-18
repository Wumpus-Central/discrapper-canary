a.d(l, { C: () => r });
var t = a(627968),
    o = a(64700),
    n = a(934551),
    i = a(158954),
    s = a(732955);
let r = {
    title: "RadioGroup",
    stories: [
        {
            id: "radiogroup",
            name: "RadioGroup",
            component: function (e) {
                let {
                        disabled: l,
                        optionCount: a,
                        label: r,
                        optionLabel: d,
                        description: u,
                        showIcons: c,
                        withMixedDisabledOptions: b,
                    } = e,
                    [p, m] = o.useState("option1"),
                    x = o.useMemo(
                        () =>
                            [
                                {
                                    name: null != d ? `${d} 1` : "Option 1",
                                    value: "option1",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: c ? n.CircleInformationIcon : void 0,
                                    disabled: !b && void 0,
                                },
                                {
                                    name: null != d ? `${d} 2` : "Option 2",
                                    value: "option2",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: c ? n.CircleInformationIcon : void 0,
                                    disabled: !!b || void 0,
                                },
                                {
                                    name: null != d ? `${d} 3` : "Option 3",
                                    value: "option3",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: c ? n.CircleInformationIcon : void 0,
                                    disabled: !b && void 0,
                                },
                                {
                                    name: null != d ? `${d} 4` : "Option 4",
                                    value: "option4",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: c ? n.CircleInformationIcon : void 0,
                                    disabled: !!b || void 0,
                                },
                                {
                                    name: null != d ? `${d} 5` : "Option 5",
                                    value: "option5",
                                    desc: null == u || "" === u ? void 0 : u,
                                    leadingIcon: c ? n.CircleInformationIcon : void 0,
                                    disabled: !b && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, d, u, c, b],
                    ),
                    v = o.useCallback((e) => {
                        m(e);
                    }, []),
                    h = o.useCallback(() => {
                        x.length > 0 && m(x[0].value);
                    }, [x]),
                    y = o.useCallback(() => {
                        x.length > 0 && m(x[x.length - 1].value);
                    }, [x]),
                    f = o.useCallback(() => {
                        m(void 0);
                    }, []);
                return (0, t.jsxs)(i.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(s.z6M, { value: p, label: r, onChange: v, options: x, disabled: l }),
                        (0, t.jsxs)(i.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", "string" == typeof p && "" !== p ? p : "None"],
                        }),
                        (0, t.jsxs)(i.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(s.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: h,
                                    disabled: l || 0 === x.length,
                                }),
                                (0, t.jsx)(s.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select Last",
                                    onClick: y,
                                    disabled: l || 0 === x.length,
                                }),
                                (0, t.jsx)(s.$nd, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear",
                                    onClick: f,
                                    disabled: l,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Mana Radio Group" },
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
