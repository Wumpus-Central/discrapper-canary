n.d(t, { s: () => s }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(755721),
    o = n(481060);
let s = {
    title: "Checkbox",
    stories: [
        {
            id: "void-checkbox",
            name: "Checkbox",
            component: function (e) {
                let { disabled: t, readOnly: n, displayOnly: s, type: l, size: c, align: u, shape: d, label: f } = e,
                    [p, _] = i.useState(!1),
                    m = i.useCallback((e, t) => {
                        _(t);
                    }, []),
                    h = i.useCallback(() => {
                        _(!0);
                    }, []),
                    g = i.useCallback(() => {
                        _(!1);
                    }, []),
                    E = i.useCallback(() => {
                        _((e) => !e);
                    }, []);
                return (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(a.$q, {
                            value: p,
                            onChange: m,
                            disabled: t,
                            readOnly: n,
                            displayOnly: s,
                            type: l,
                            size: c,
                            align: u,
                            shape: d,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: f,
                            }),
                        }),
                        (0, r.jsxs)(o.Text, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", p ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: h,
                                    disabled: t || n,
                                }),
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: g,
                                    disabled: t || n,
                                }),
                                (0, r.jsx)(o.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: E,
                                    disabled: t || n,
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
                    defaultValue: a.M0.DEFAULT,
                    options: [
                        {
                            label: "Default",
                            value: a.M0.DEFAULT,
                        },
                        {
                            label: "Inverted",
                            value: a.M0.INVERTED,
                        },
                        {
                            label: "Ghost",
                            value: a.M0.GHOST,
                        },
                        {
                            label: "Row",
                            value: a.M0.ROW,
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
                    defaultValue: a.wb.CENTER,
                    options: [
                        {
                            label: "Center",
                            value: a.wb.CENTER,
                        },
                        {
                            label: "Top",
                            value: a.wb.TOP,
                        },
                    ],
                },
                shape: {
                    type: "select",
                    label: "Shape",
                    defaultValue: a.zV.BOX,
                    options: [
                        {
                            label: "Box",
                            value: a.zV.BOX,
                        },
                        {
                            label: "Small Box",
                            value: a.zV.SMALL_BOX,
                        },
                        {
                            label: "Round",
                            value: a.zV.ROUND,
                        },
                    ],
                },
            },
        },
    ],
};
