t.d(l, { s: () => r }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(755721),
    i = t(481060);
let r = {
    title: "Checkbox",
    stories: [
        {
            id: "void-checkbox",
            name: "Checkbox",
            component: function (e) {
                let { disabled: l, readOnly: t, displayOnly: r, type: s, size: u, align: d, shape: c, label: b } = e,
                    [p, y] = n.useState(!1),
                    m = n.useCallback((e, l) => {
                        y(l);
                    }, []),
                    f = n.useCallback(() => {
                        y(!0);
                    }, []),
                    v = n.useCallback(() => {
                        y(!1);
                    }, []),
                    h = n.useCallback(() => {
                        y((e) => !e);
                    }, []);
                return (0, a.jsxs)(i.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, a.jsx)(o.$q, {
                            value: p,
                            onChange: m,
                            disabled: l,
                            readOnly: t,
                            displayOnly: r,
                            type: s,
                            size: u,
                            align: d,
                            shape: c,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: b,
                            }),
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", p ? "Checked" : "Unchecked"],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, a.jsx)(i.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: f,
                                    disabled: l || t,
                                }),
                                (0, a.jsx)(i.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: v,
                                    disabled: l || t,
                                }),
                                (0, a.jsx)(i.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: h,
                                    disabled: l || t,
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
                    defaultValue: "Accept terms and conditions",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                readOnly: {
                    type: "boolean",
                    label: "Read Only",
                    defaultValue: !1,
                },
                displayOnly: {
                    type: "boolean",
                    label: "Display Only",
                    defaultValue: !1,
                },
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: o.M0.DEFAULT,
                    options: [
                        {
                            label: "Default",
                            value: o.M0.DEFAULT,
                        },
                        {
                            label: "Inverted",
                            value: o.M0.INVERTED,
                        },
                        {
                            label: "Ghost",
                            value: o.M0.GHOST,
                        },
                        {
                            label: "Row",
                            value: o.M0.ROW,
                        },
                    ],
                },
                size: {
                    type: "number",
                    label: "Size",
                    defaultValue: 24,
                },
                align: {
                    type: "select",
                    label: "Alignment",
                    defaultValue: o.wb.CENTER,
                    options: [
                        {
                            label: "Center",
                            value: o.wb.CENTER,
                        },
                        {
                            label: "Top",
                            value: o.wb.TOP,
                        },
                    ],
                },
                shape: {
                    type: "select",
                    label: "Shape",
                    defaultValue: o.zV.BOX,
                    options: [
                        {
                            label: "Box",
                            value: o.zV.BOX,
                        },
                        {
                            label: "Small Box",
                            value: o.zV.SMALL_BOX,
                        },
                        {
                            label: "Round",
                            value: o.zV.ROUND,
                        },
                    ],
                },
            },
        },
    ],
};
