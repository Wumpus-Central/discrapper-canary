a.d(l, { s: () => s });
var t = a(627968),
    o = a(359778),
    n = a(821609),
    i = a(465430),
    r = a(742158);
let s = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: l, title: a, body: o, hasButton: r } = e,
                    s = r ? (0, t.jsx)(n.$, { text: "Action" }) : void 0;
                return (0, t.jsx)(i.Nz, { "data-migration-pending": !0, type: l, title: a, body: o, button: s });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: o.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: o.Z.Types.PRIMARY },
                        { label: "Danger", value: o.Z.Types.DANGER },
                        { label: "Warning", value: o.Z.Types.WARNING },
                        { label: "Success", value: o.Z.Types.SUCCESS },
                        { label: "Brand", value: o.Z.Types.BRAND },
                        { label: "Custom", value: o.Z.Types.CUSTOM },
                    ],
                },
                title: { type: "text", label: "Title", defaultValue: "Important Notice" },
                body: {
                    type: "text",
                    label: "Body",
                    defaultValue: "This is an important message that you should pay attention to.",
                },
                hasButton: { type: "boolean", label: "Has Button", defaultValue: !1 },
            },
        },
        {
            id: "formtitle",
            name: "FormTitle",
            component: function (e) {
                let { children: l, disabled: a, required: o, errorMessage: n } = e,
                    i = n?.trim() === "" ? void 0 : n;
                return (0, t.jsx)("div", {
                    style: { display: "flex", flexDirection: "column", gap: "16px" },
                    children: ["h1", "h2", "h3", "h4", "h5", "legend"].map((e) =>
                        (0, t.jsxs)(
                            "div",
                            {
                                style: { display: "flex", alignItems: "center", gap: "8px" },
                                children: [
                                    (0, t.jsxs)("code", {
                                        style: { minWidth: "60px", fontSize: "12px", color: "#666" },
                                        children: [e, ":"],
                                    }),
                                    (0, t.jsx)(r.z, {
                                        "data-migration-pending": !0,
                                        tag: e,
                                        disabled: a,
                                        required: o,
                                        error: i,
                                        errorId: null != i ? `error-id-${e}` : void 0,
                                        children: l,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                });
            },
            controls: {
                children: { type: "text", label: "Title Text", defaultValue: "Form Title" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
            },
        },
    ],
};
