a.d(l, { s: () => s });
var t = a(627968),
    n = a(359778),
    o = a(821609),
    i = a(465430),
    r = a(742158);
let s = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: l, title: a, body: n, hasButton: r } = e,
                    s = r ? (0, t.jsx)(o.$, { text: "Action" }) : void 0;
                return (0, t.jsx)(i.Nz, { "data-migration-pending": !0, type: l, title: a, body: n, button: s });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: n.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: n.Z.Types.PRIMARY },
                        { label: "Danger", value: n.Z.Types.DANGER },
                        { label: "Warning", value: n.Z.Types.WARNING },
                        { label: "Success", value: n.Z.Types.SUCCESS },
                        { label: "Brand", value: n.Z.Types.BRAND },
                        { label: "Custom", value: n.Z.Types.CUSTOM },
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
                let { children: l, disabled: a, required: n, errorMessage: o } = e,
                    i = o?.trim() === "" ? void 0 : o;
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
                                        required: n,
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
