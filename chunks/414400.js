n.d(t, { _: () => s }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(993365),
    o = n(755721);
let s = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { disabled: t, readOnly: n, type: s, label: l, size: c, align: u } = e,
                    [d, f] = i.useState(!1);
                return (0, r.jsx)(o.$q, {
                    value: d,
                    onChange: (e, t) => f(t),
                    disabled: t,
                    readOnly: n,
                    type: s,
                    size: c,
                    align: u,
                    children: (0, r.jsx)(a.x, {
                        variant: "text-md/medium",
                        children: l,
                    }),
                });
            },
            controls: {
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
                            label: "Row",
                            value: o.M0.ROW,
                        },
                    ],
                },
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Accept terms and conditions",
                },
            },
        },
    ],
};
