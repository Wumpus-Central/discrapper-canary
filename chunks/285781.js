"use strict";
n.d(t, { U: () => s });
var r = n(627968),
    i = n(64700),
    a = n(158954);
let s = {
    title: "VoidSwitch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let [t, n] = i.useState(!1);
                return (0, r.jsx)(a.TOt, { "data-migration-pending": !0, ...e, onChange: n, checked: t });
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
