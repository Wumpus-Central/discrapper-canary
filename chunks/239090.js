t.d(l, { R: () => i }), t(953529), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(793030);
let i = {
    title: "Switch",
    stories: [
        {
            id: "baseSwitch",
            name: "BaseSwitch",
            component: function (e) {
                let {
                        disabled: l,
                        hasIcon: t,
                        label: i,
                        description: r,
                        helperText: s,
                        required: u,
                        errorMessage: d,
                    } = e,
                    [c, b] = n.useState(!1);
                return (0, a.jsx)(o.kcT, {
                    label: i,
                    description: r,
                    helperText: s,
                    required: u,
                    errorMessage: d,
                    hasIcon: t,
                    onChange: b,
                    disabled: l,
                    checked: c,
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
