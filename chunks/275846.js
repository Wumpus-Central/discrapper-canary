n.d(t, { i: () => f }), n(781311);
var r = n(951288);
n(647438);
var i = n(49800),
    a = n(481060),
    o = n(434333),
    s = n(540863),
    l = n(383838),
    c = n(512983),
    u = n(231338);
let d = {
        id: "formnotice",
        name: "FormNotice",
        component: function (e) {
            let { type: t, title: n, body: i, hasButton: o } = e,
                s = o ? (0, r.jsx)(a.zxk, { text: "Action" }) : void 0;
            return (0, r.jsx)(l.To, {
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
    f = {
        title: "Form Components",
        stories: [
            d,
            {
                id: "formitem",
                name: "FormItem",
                component: function (e) {
                    let { title: t, errorMessage: n, disabled: i, required: o, tag: l } = e,
                        c = (null == n ? void 0 : n.trim()) === "" ? void 0 : n;
                    return (0, r.jsx)(s.x, {
                        title: t,
                        error: c,
                        disabled: i,
                        required: o,
                        tag: l,
                        children: (0, r.jsx)(a.oil, { placeholder: "Enter text here..." }),
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
                                        (0, r.jsx)(c.v, {
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
                id: "formerrorblock",
                name: "FormErrorBlock",
                component: function (e) {
                    let { children: t, backgroundColor: n, hasDismiss: i, iconType: s } = e,
                        l = "check" === s ? a.owK : a.Mgn;
                    return (0, r.jsx)(o.k, {
                        backgroundColor: n,
                        onDismiss: i ? u.dG : void 0,
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
                        defaultValue: o.m.RED,
                        options: [
                            {
                                label: "Red",
                                value: o.m.RED,
                            },
                            {
                                label: "Background Tertiary",
                                value: o.m.BACKGROUND_TERTIARY,
                            },
                            {
                                label: "Background Accent",
                                value: o.m.BACKGROUND_ACCENT,
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
