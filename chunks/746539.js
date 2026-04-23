a.d(l, { M: () => i });
var t = a(627968),
    o = a(64700),
    n = a(243721);
let i = {
    title: "Switch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let { disabled: l, hasIcon: a, label: i, description: r, required: s, errorMessage: d } = e,
                    [u, c] = o.useState(!1);
                return (0, t.jsx)(n.d, {
                    label: i,
                    description: r,
                    required: s,
                    errorMessage: d,
                    hasIcon: a,
                    onChange: c,
                    disabled: l,
                    checked: u,
                });
            },
            controls: {
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                label: { type: "text", label: "Label", defaultValue: "Always underline links" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue:
                        "Make links to websites, help articles, and other pages stand out more by underlining them.",
                },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                hasIcon: { type: "boolean", label: "Has Icon", defaultValue: !1 },
            },
        },
    ],
};
