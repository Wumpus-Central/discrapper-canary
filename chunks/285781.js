a.d(l, { U: () => i });
var t = a(627968),
    o = a(64700),
    n = a(395515);
let i = {
    title: "VoidSwitch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let [l, a] = o.useState(!1);
                return (0, t.jsx)(n.T, { "data-migration-pending": !0, ...e, onChange: a, checked: l });
            },
            controls: {
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                label: { type: "text", label: "Label", defaultValue: "Switch Label" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is the description for the switch",
                },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
            },
        },
    ],
};
