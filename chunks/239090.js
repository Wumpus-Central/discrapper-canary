n.d(t, { R: () => o }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(793030);
let o = {
    title: "Switch",
    stories: [
        {
            id: "baseSwitch",
            name: "BaseSwitch",
            component: function (e) {
                let {
                        disabled: t,
                        hasIcon: n,
                        label: o,
                        description: s,
                        helperText: l,
                        required: c,
                        errorMessage: u,
                    } = e,
                    [d, f] = i.useState(!1);
                return (0, r.jsx)(a.kcT, {
                    label: o,
                    description: s,
                    helperText: l,
                    required: c,
                    errorMessage: u,
                    hasIcon: n,
                    onChange: f,
                    disabled: t,
                    checked: d,
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
                helperText: {
                    type: "text",
                    label: "Helper Text",
                    defaultValue: "",
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
