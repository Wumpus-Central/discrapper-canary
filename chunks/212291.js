"use strict";
n.d(t, { s: () => l });
var r = n(627968),
    i = n(359778),
    a = n(397927),
    s = n(465430),
    o = n(742158);
let l = {
    title: "Form Components",
    stories: [
        {
            id: "formnotice",
            name: "FormNotice",
            component: function (e) {
                let { type: t, title: n, body: i, hasButton: o } = e,
                    l = o ? (0, r.jsx)(a.Button, { text: "Action" }) : void 0;
                return (0, r.jsx)(s.Nz, { "data-migration-pending": !0, type: t, title: n, body: i, button: l });
            },
            controls: {
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: i.Z.Types.DANGER,
                    options: [
                        { label: "Primary", value: i.Z.Types.PRIMARY },
                        { label: "Danger", value: i.Z.Types.DANGER },
                        { label: "Warning", value: i.Z.Types.WARNING },
                        { label: "Success", value: i.Z.Types.SUCCESS },
                        { label: "Brand", value: i.Z.Types.BRAND },
                        { label: "Custom", value: i.Z.Types.CUSTOM },
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
                let { children: t, disabled: n, required: i, errorMessage: a } = e,
                    s = a?.trim() === "" ? void 0 : a,
                    l = ["h1", "h2", "h3", "h4", "h5", "legend"];
                return (0, r.jsx)("div", {
                    style: { display: "flex", flexDirection: "column", gap: "16px" },
                    children: l.map((e) =>
                        (0, r.jsxs)(
                            "div",
                            {
                                style: { display: "flex", alignItems: "center", gap: "8px" },
                                children: [
                                    (0, r.jsxs)("code", {
                                        style: { minWidth: "60px", fontSize: "12px", color: "#666" },
                                        children: [e, ":"],
                                    }),
                                    (0, r.jsx)(o.z, {
                                        "data-migration-pending": !0,
                                        tag: e,
                                        disabled: n,
                                        required: i,
                                        error: s,
                                        errorId: null != s ? `error-id-${e}` : void 0,
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
                children: { type: "text", label: "Title Text", defaultValue: "Form Title" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
            },
        },
    ],
};
