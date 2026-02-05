"use strict";
n.d(t, { E: () => s });
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
                        showIcons: u,
                        withMixedDisabledOptions: c,
                    } = e,
                    [d, _] = i.useState(["option1"]),
                    f = i.useMemo(
                        () =>
                            [
                                {
                                    label: null != o ? `${o} 1` : "Option 1",
                                    value: "option1",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: u ? a.mir : void 0,
                                    disabled: !c && void 0,
                                },
                                {
                                    label: null != o ? `${o} 2` : "Option 2",
                                    value: "option2",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: u ? a.mir : void 0,
                                    disabled: !!c || void 0,
                                },
                                {
                                    label: null != o ? `${o} 3` : "Option 3",
                                    value: "option3",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: u ? a.mir : void 0,
                                    disabled: !c && void 0,
                                },
                                {
                                    label: null != o ? `${o} 4` : "Option 4",
                                    value: "option4",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: u ? a.mir : void 0,
                                    disabled: !!c || void 0,
                                },
                                {
                                    label: null != o ? `${o} 5` : "Option 5",
                                    value: "option5",
                                    description: null == l || "" === l ? void 0 : l,
                                    leadingIcon: u ? a.mir : void 0,
                                    disabled: !c && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, o, l, u, c],
                    ),
                    p = i.useCallback((e) => {
                        _(e);
                    }, []),
                    h = i.useCallback(() => {
                        _(f.map((e) => e.value));
                    }, [f]),
                    m = i.useCallback(() => {
                        _([]);
                    }, []),
                    g = i.useCallback(() => {
                        f.length > 0 && _([f[0].value]);
                    }, [f]);
                return (0, r.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(a.$QX, { selectedValues: d, label: s, onChange: p, options: f, disabled: t }),
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
                                    disabled: t || 0 === f.length,
                                }),
                                (0, r.jsx)(a.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: t || 0 === f.length,
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
