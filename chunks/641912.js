n.d(t, { R: () => o }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(437337);
let o = {
    title: "Switch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let { disabled: t } = e,
                    [n, o] = i.useState(!1);
                return (0, r.jsx)(a.r, {
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
