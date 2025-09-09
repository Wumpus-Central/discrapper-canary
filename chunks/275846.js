n.d(t, { i: () => m }), n(781311), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(49800),
    o = n(481060),
    s = n(770102),
    l = n(434333),
    c = n(540863),
    u = n(383838),
    d = n(789164),
    f = n(471141),
    _ = n(512983),
    p = n(231338);
let h = {
        id: "formnotice",
        name: "FormNotice",
        component: function (e) {
            let { type: t, title: n, body: i, hasButton: a } = e,
                s = a ? (0, r.jsx)(o.zxk, { text: "Action" }) : void 0;
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
                defaultValue: a.Z.Types.DANGER,
                options: [
                    {
                        label: "Primary",
                        value: a.Z.Types.PRIMARY,
                    },
                    {
                        label: "Danger",
                        value: a.Z.Types.DANGER,
                    },
                    {
                        label: "Warning",
                        value: a.Z.Types.WARNING,
                    },
                    {
                        label: "Success",
                        value: a.Z.Types.SUCCESS,
                    },
                    {
                        label: "Brand",
                        value: a.Z.Types.BRAND,
                    },
                    {
                        label: "Custom",
                        value: a.Z.Types.CUSTOM,
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
    m = {
        title: "Form Components",
        stories: [
            h,
            {
                id: "formitem",
                name: "FormItem",
                component: function (e) {
                    let { title: t, errorMessage: n, disabled: i, required: a, tag: s } = e,
                        l = (null == n ? void 0 : n.trim()) === "" ? void 0 : n;
                    return (0, r.jsx)(c.x, {
                        title: t,
                        error: l,
                        disabled: i,
                        required: a,
                        tag: s,
                        children: (0, r.jsx)(o.oil, { placeholder: "Enter text here..." }),
                    });
                },
                controls: {
                    title: {
                        type: "text",
                        label: "Title",
                        defaultValue: "Form Field",
                    },
                    errorMessage: {
                        type: "text",
                        label: "Error Message",
                        defaultValue: "",
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
                id: "formtitle",
                name: "FormTitle",
                component: function (e) {
                    let { children: t, disabled: n, required: i, errorMessage: a } = e,
                        o = (null == a ? void 0 : a.trim()) === "" ? void 0 : a,
                        s = ["h1", "h2", "h3", "h4", "h5", "legend"];
                    return (0, r.jsx)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        },
                        children: s.map((e) =>
                            (0, r.jsxs)(
                                "div",
                                {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    },
                                    children: [
                                        (0, r.jsxs)("code", {
                                            style: {
                                                minWidth: "60px",
                                                fontSize: "12px",
                                                color: "#666",
                                            },
                                            children: [e, ":"],
                                        }),
                                        (0, r.jsx)(_.v, {
                                            tag: e,
                                            disabled: n,
                                            required: i,
                                            error: o,
                                            errorId: null != o ? "error-id-".concat(e) : void 0,
                                            children: t,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                    });
                },
                controls: {
                    children: {
                        type: "text",
                        label: "Title Text",
                        defaultValue: "Form Title",
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
                    errorMessage: {
                        type: "text",
                        label: "Error Message",
                        defaultValue: "",
                    },
                },
            },
            {
                id: "formswitch",
                name: "FormSwitch",
                component: function (e) {
                    let { children: t, disabled: n, hideBorder: a, note: o, disabledText: s, tooltipNote: l } = e,
                        [c, u] = i.useState(!1),
                        d = (e) => {
                            u(e);
                        };
                    return (0, r.jsx)(f.j, {
                        value: c,
                        disabled: n,
                        hideBorder: a,
                        onChange: d,
                        note: (null == o ? void 0 : o.trim()) === "" ? void 0 : o,
                        disabledText: "" === s.trim() ? void 0 : s,
                        tooltipNote: "" === l.trim() ? void 0 : l,
                        children: t,
                    });
                },
                controls: {
                    children: {
                        type: "text",
                        label: "Label Text",
                        defaultValue: "Enable this feature",
                    },
                    disabled: {
                        type: "boolean",
                        label: "Disabled",
                        defaultValue: !1,
                    },
                    hideBorder: {
                        type: "boolean",
                        label: "Hide Border",
                        defaultValue: !1,
                    },
                    note: {
                        type: "text",
                        label: "Note",
                        defaultValue: "",
                    },
                    disabledText: {
                        type: "text",
                        label: "Disabled Text",
                        defaultValue: "",
                    },
                    tooltipNote: {
                        type: "text",
                        label: "Tooltip Note",
                        defaultValue: "",
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
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: "Content above divider",
                            }),
                            (0, r.jsx)(s.$, {}),
                            (0, r.jsx)(o.Text, {
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
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: "This is content within the form section.",
                            }),
                            (0, r.jsx)(o.oil, { placeholder: "Enter text here..." }),
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
                                label: "H5",
                                value: "h5",
                            },
                        ],
                    },
                },
            },
            {
                id: "formerrorblock",
                name: "FormErrorBlock",
                component: function (e) {
                    let { children: t, backgroundColor: n, hasDismiss: i, iconType: a } = e,
                        s = "check" === a ? o.owK : o.Mgn;
                    return (0, r.jsx)(l.k, {
                        backgroundColor: n,
                        onDismiss: i ? p.dG : void 0,
                        icon: s,
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
                        defaultValue: l.m.RED,
                        options: [
                            {
                                label: "Red",
                                value: l.m.RED,
                            },
                            {
                                label: "Background Tertiary",
                                value: l.m.BACKGROUND_TERTIARY,
                            },
                            {
                                label: "Background Accent",
                                value: l.m.BACKGROUND_ACCENT,
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
