a.d(l, { E: () => i });
var t = a(627968),
    o = a(64700),
    n = a(158954);
let i = {
    title: "CheckboxGroup",
    stories: [
        {
            id: "checkboxgroup",
            name: "CheckboxGroup",
            component: function (e) {
                let {
                        disabled: l,
                        optionCount: a,
                        label: i,
                        optionLabel: s,
                        description: r,
                        showIcons: d,
                        withMixedDisabledOptions: u,
                    } = e,
                    [c, b] = o.useState(["option1"]),
                    p = o.useMemo(
                        () =>
                            [
                                {
                                    label: null != s ? `${s} 1` : "Option 1",
                                    value: "option1",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: d ? n.mir : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != s ? `${s} 2` : "Option 2",
                                    value: "option2",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: d ? n.mir : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != s ? `${s} 3` : "Option 3",
                                    value: "option3",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: d ? n.mir : void 0,
                                    disabled: !u && void 0,
                                },
                                {
                                    label: null != s ? `${s} 4` : "Option 4",
                                    value: "option4",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: d ? n.mir : void 0,
                                    disabled: !!u || void 0,
                                },
                                {
                                    label: null != s ? `${s} 5` : "Option 5",
                                    value: "option5",
                                    description: null == r || "" === r ? void 0 : r,
                                    leadingIcon: d ? n.mir : void 0,
                                    disabled: !u && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, a))),
                        [a, s, r, d, u],
                    ),
                    m = o.useCallback((e) => {
                        b(e);
                    }, []),
                    x = o.useCallback(() => {
                        b(p.map((e) => e.value));
                    }, [p]),
                    v = o.useCallback(() => {
                        b([]);
                    }, []),
                    h = o.useCallback(() => {
                        p.length > 0 && b([p[0].value]);
                    }, [p]);
                return (0, t.jsxs)(n.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(n.$QX, { selectedValues: c, label: i, onChange: m, options: p, disabled: l }),
                        (0, t.jsxs)(n.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", c.length > 0 ? c.join(", ") : "None"],
                        }),
                        (0, t.jsxs)(n.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(n.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select All",
                                    onClick: x,
                                    disabled: l || 0 === p.length,
                                }),
                                (0, t.jsx)(n.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: h,
                                    disabled: l || 0 === p.length,
                                }),
                                (0, t.jsx)(n.$nd, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear All",
                                    onClick: v,
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
