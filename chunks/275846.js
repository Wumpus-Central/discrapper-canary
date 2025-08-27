n.d(t, { i: () => _ });
var r = n(951288);
n(647438);
var i = n(49800),
    a = n(481060),
    o = n(770102),
    s = n(434333),
    l = n(540863),
    c = n(722187),
    u = n(383838),
    d = n(789164),
    f = n(231338);
let _ = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: t, title: n, body: i, hasButton: o } = e,
                    s = o ? (0, r.jsx)(a.zxk, { text: "Action" }) : void 0;
                return (0, r.jsx)(u.To, {
                    type: t,
                    title: n,
                    body: i,
                    button: s,
                });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: i.Z.Types.DANGER,
                    options: [
                        {
                            label: "Primary",
                            value: i.Z.Types.PRIMARY,
                        },
                        {
                            label: "Danger",
                            value: i.Z.Types.DANGER,
                        },
                        {
                            label: "Warning",
                            value: i.Z.Types.WARNING,
                        },
                        {
                            label: "Success",
                            value: i.Z.Types.SUCCESS,
                        },
                        {
                            label: "Brand",
                            value: i.Z.Types.BRAND,
                        },
                        {
                            label: "Custom",
                            value: i.Z.Types.CUSTOM,
                        },
                    ],
                },
                title: {
                    type: "text",
                    label: "Title",
                    defaultValue: "Important Notice",
                },
                body: {
                    type: "text",
                    label: "Body",
                    defaultValue: "This is an important message that you should pay attention to.",
                },
                hasButton: {
                    type: "boolean",
                    label: "Has Button",
                    defaultValue: !1,
                },
            },
        },
        {
            id: "formitem",
            name: "FormItem",
            component: function (e) {
                let { title: t, hasError: n, disabled: i, required: o, tag: s } = e,
                    c = n ? "This field has an error" : void 0;
                return (0, r.jsx)(l.x, {
                    title: t,
                    error: c,
                    disabled: i,
                    required: o,
                    tag: s,
                    children: (0, r.jsx)(a.oil, { placeholder: "Enter text here..." }),
                });
            },
            controls: {
                title: {
                    type: "text",
                    label: "Title",
                    defaultValue: "Form Field",
                },
                hasError: {
                    type: "boolean",
                    label: "Has Error",
                    defaultValue: !1,
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
                tag: {
                    type: "select",
                    label: "Title Tag",
                    defaultValue: "h5",
                    options: [
                        {
                            label: "H1",
                            value: "h1",
                        },
                        {
                            label: "H2",
                            value: "h2",
                        },
                        {
                            label: "H3",
                            value: "h3",
                        },
                        {
                            label: "H4",
                            value: "h4",
                        },
                        {
                            label: "H5",
                            value: "h5",
                        },
                        {
                            label: "Label",
                            value: "label",
                        },
                        {
                            label: "Legend",
                            value: "legend",
                        },
                    ],
                },
            },
        },
        {
            id: "formlabel",
            name: "FormLabel",
            component: function (e) {
                let { children: t, disabled: n, required: i } = e;
                return (0, r.jsx)(c.l, {
                    disabled: n,
                    required: i,
                    htmlFor: "sample-input",
                    children: t,
                });
            },
            controls: {
                children: {
                    type: "text",
                    label: "Label Text",
                    defaultValue: "Field Label",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
            },
        },
        {
            id: "formdivider",
            name: "FormDivider",
            component: function (e) {
                let {} = e;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: "Content above divider",
                        }),
                        (0, r.jsx)(o.$, {}),
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: "Content below divider",
                        }),
                    ],
                });
            },
            controls: {},
        },
        {
            id: "formsection",
            name: "FormSection",
            component: function (e) {
                let { title: t, disabled: n, tag: i } = e;
                return (0, r.jsxs)(d.h, {
                    title: t,
                    disabled: n,
                    tag: i,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: "This is content within the form section.",
                        }),
                        (0, r.jsx)(a.oil, { placeholder: "Enter text here..." }),
                    ],
                });
            },
            controls: {
                title: {
                    type: "text",
                    label: "Title",
                    defaultValue: "Section Title",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                tag: {
                    type: "select",
                    label: "Title Tag",
                    defaultValue: "h5",
                    options: [
                        {
                            label: "H1",
                            value: "h1",
                        },
                        {
                            label: "H2",
                            value: "h2",
                        },
                        {
                            label: "H3",
                            value: "h3",
                        },
                        {
                            label: "H4",
                            value: "h4",
                        },
                        {
                            label: "H5",
                            value: "h5",
                        },
                        {
                            label: "Label",
                            value: "label",
                        },
                        {
                            label: "Legend",
                            value: "legend",
                        },
                    ],
                },
            },
        },
        {
            id: "formerrorblock",
            name: "FormErrorBlock",
            component: function (e) {
                let { children: t, backgroundColor: n, hasDismiss: i, iconType: o } = e,
                    l = "check" === o ? a.owK : a.Mgn;
                return (0, r.jsx)(s.k, {
                    backgroundColor: n,
                    onDismiss: i ? f.dG : void 0,
                    icon: l,
                    children: t,
                });
            },
            controls: {
                children: {
                    type: "text",
                    label: "Error Message",
                    defaultValue: "This is an error message that needs attention.",
                },
                backgroundColor: {
                    type: "select",
                    label: "Background Color",
                    defaultValue: s.m.RED,
                    options: [
                        {
                            label: "Red",
                            value: s.m.RED,
                        },
                        {
                            label: "Background Tertiary",
                            value: s.m.BACKGROUND_TERTIARY,
                        },
                        {
                            label: "Background Accent",
                            value: s.m.BACKGROUND_ACCENT,
                        },
                    ],
                },
                hasDismiss: {
                    type: "boolean",
                    label: "Has Dismiss Button",
                    defaultValue: !1,
                },
                iconType: {
                    type: "select",
                    label: "Icon Type",
                    defaultValue: "error",
                    options: [
                        {
                            label: "Error",
                            value: "error",
                        },
                        {
                            label: "Check",
                            value: "check",
                        },
                    ],
                },
            },
        },
    ],
};
