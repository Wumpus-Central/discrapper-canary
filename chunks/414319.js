"use strict";
n.d(t, { s: () => s });
var r = n(627968),
    i = n(397927),
    a = n(267475);
let s = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: t } = e;
                return (0, r.jsx)("div", {
                    children: (0, r.jsxs)(i.nVY, {
                        label: "" === t ? void 0 : t,
                        children: [
                            (0, r.jsx)(i.ksK, { label: "First Name" }),
                            (0, r.jsx)(i.ksK, { label: "Last Name" }),
                            (0, r.jsx)(i.ksK, { label: "Address" }),
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
                let { description: t, ...n } = e;
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(i.D0$, {
                        ...n,
                        description: "" === t ? void 0 : t,
                        icon: n.showIcon ? i.XAi : void 0,
                        children: (0, r.jsx)("div", {
                            className: a.q,
                            children: (0, r.jsx)(i.Text, {
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
