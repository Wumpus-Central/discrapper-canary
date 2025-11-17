n.d(t, { i: () => l }), n(781311);
var r = n(54381),
    i = n(49800),
    a = n(481060),
    o = n(383838),
    s = n(512983);
let l = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: t, title: n, body: i, hasButton: s } = e,
                    l = s ? (0, r.jsx)(a.Button, { text: "Action" }) : void 0;
                return (0, r.jsx)(o.To, {
                    type: t,
                    title: n,
                    body: i,
                    button: l,
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
            id: "formtitle",
            name: "FormTitle",
            component: function (e) {
                let { children: t, disabled: n, required: i, errorMessage: a } = e,
                    o = (null == a ? void 0 : a.trim()) === "" ? void 0 : a,
                    l = ["h1", "h2", "h3", "h4", "h5", "legend"];
                return (0, r.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    },
                    children: l.map((e) =>
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
                                    (0, r.jsx)(s.v, {
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
    ],
};
