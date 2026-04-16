a.d(l, { s: () => i });
var t = a(627968),
    o = a(397927),
    n = a(121830);
let i = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: l } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(o.nVY, {
                        label: "" === l ? void 0 : l,
                        children: [
                            (0, t.jsx)(o.ksK, { label: "First Name" }),
                            (0, t.jsx)(o.ksK, { label: "Last Name" }),
                            (0, t.jsx)(o.ksK, { label: "Address" }),
                        ],
                    }),
                });
            },
            controls: { label: { type: "text", label: "Label", defaultValue: "Billing Address" } },
        },
        {
            name: "Field",
            id: "formcontrol",
            component: function (e) {
                let { description: l, ...a } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsx)(o.D0$, {
                        ...a,
                        description: "" === l ? void 0 : l,
                        icon: a.showIcon ? o.XAi : void 0,
                        children: (0, t.jsx)("div", {
                            className: n.q,
                            children: (0, t.jsx)(o.Text, {
                                color: "text-subtle",
                                variant: "text-md/medium",
                                children: "Field",
                            }),
                        }),
                    }),
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "First Name" },
                description: { type: "text", label: "Description", defaultValue: "This is the first name of the user" },
                helperText: {
                    type: "text",
                    label: "Helper Text",
                    defaultValue: "This is the helper text for the form control",
                },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                layout: {
                    type: "select",
                    label: "Layout",
                    defaultValue: "vertical",
                    options: [
                        { label: "Vertical", value: "vertical" },
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Horizontal (Responsive)", value: "horizontal-responsive" },
                    ],
                },
                badge: {
                    type: "select",
                    label: "Badge",
                    defaultValue: void 0,
                    options: [
                        { label: "None", value: void 0 },
                        { label: "New", value: "new" },
                        { label: "Beta", value: "beta" },
                        { label: "Early Access", value: "early_access" },
                        { label: "Free Trial", value: "free_trial" },
                    ],
                },
                showIcon: { type: "boolean", label: "Show Icon", defaultValue: !1 },
            },
        },
    ],
};
