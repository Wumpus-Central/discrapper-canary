n.d(t, { M: () => s }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954);
let s = {
    title: "Switch",
    stories: [
        {
            id: "baseSwitch",
            name: "BaseSwitch",
            component: function (e) {
                let { disabled: t, hasIcon: n, label: s, description: o, required: l, errorMessage: c } = e,
                    [u, d] = i.useState(!1);
                return (0, r.jsx)(a.Ad5, {
                    label: s,
                    description: o,
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
