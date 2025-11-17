n.d(t, { R: () => o }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030);
let o = {
    title: "Switch",
    stories: [
        {
            id: "baseSwitch",
            name: "BaseSwitch",
            component: function (e) {
                let { disabled: t, hasIcon: n, label: o, description: s, required: l, errorMessage: c } = e,
                    [u, d] = i.useState(!1);
                return (0, r.jsx)(a.kcT, {
                    label: o,
                    description: s,
                    required: l,
                    errorMessage: c,
                    hasIcon: n,
                    onChange: d,
                    disabled: t,
                    checked: u,
                });
            },
            controls: {
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Always underline links",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue:
                        "Make links to websites, help articles, and other pages stand out more by underlining them.",
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
                errorMessage: {
                    type: "text",
                    label: "Error Message",
                    defaultValue: "",
                },
                hasIcon: {
                    type: "boolean",
                    label: "Has Icon",
                    defaultValue: !1,
                },
            },
        },
    ],
};
