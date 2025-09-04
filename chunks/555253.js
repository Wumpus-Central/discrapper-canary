n.d(t, { a: () => o }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(497039);
let o = {
    title: "VoidSwitch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let { disabled: t } = e,
                    [n, o] = i.useState(!1);
                return (0, r.jsx)(a.T, {
                    onChange: o,
                    disabled: t,
                    checked: n,
                });
            },
            controls: {
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
            },
        },
    ],
};
