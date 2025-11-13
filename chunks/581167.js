n.d(t, { i: () => f }), n(953529);
var r = n(951288),
    i = n(481060),
    a = n(337132);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: t } = e;
                return (0, r.jsx)("div", {
                    children: (0, r.jsxs)(i.C3N, {
                        label: "" === t ? void 0 : t,
                        children: [
                            (0, r.jsx)(i.oil, { label: "First Name" }),
                            (0, r.jsx)(i.oil, { label: "Last Name" }),
                            (0, r.jsx)(i.oil, { label: "Address" }),
                        ],
                    }),
                });
            },
            controls: {
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Billing Address",
                },
            },
        },
        {
            name: "Field",
            id: "formcontrol",
            component: function (e) {
                var { description: t } = e,
                    n = u(e, ["description"]);
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(
                        i.gNt,
                        c(s({}, n), {
                            description: "" === t ? void 0 : t,
                            icon: n.showIcon ? i.mBM : void 0,
                            children: (0, r.jsx)("div", {
                                className: a.placeholder,
                                children: (0, r.jsx)(i.Text, {
                                    color: "text-secondary",
                                    variant: "text-md/medium",
                                    children: "Field",
                                }),
                            }),
                        }),
                    ),
                });
            },
            controls: {
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "First Name",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is the first name of the user",
                },
                helperText: {
                    type: "text",
                    label: "Helper Text",
                    defaultValue: "This is the helper text for the form control",
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
                layout: {
                    type: "select",
                    label: "Layout",
                    defaultValue: "vertical",
                    options: [
                        {
                            label: "Vertical",
                            value: "vertical",
                        },
                        {
                            label: "Horizontal",
                            value: "horizontal",
                        },
                        {
                            label: "Horizontal (Responsive)",
                            value: "horizontal-responsive",
                        },
                    ],
                },
                badge: {
                    type: "select",
                    label: "Badge",
                    defaultValue: void 0,
                    options: [
                        {
                            label: "None",
                            value: void 0,
                        },
                        {
                            label: "New",
                            value: "new",
                        },
                        {
                            label: "Beta",
                            value: "beta",
                        },
                        {
                            label: "Early Access",
                            value: "early_access",
                        },
                        {
                            label: "Free Trial",
                            value: "free_trial",
                        },
                    ],
                },
                showIcon: {
                    type: "boolean",
                    label: "Show Icon",
                    defaultValue: !1,
                },
            },
        },
    ],
};
