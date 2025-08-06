n.d(t, { z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(377089),
    s = n(231338);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = {
    title: "Input Components",
    stories: [
        {
            name: "TextInput",
            component: function (e) {
                var { leading: t, trailing: n } = e,
                    s = f(e, ["leading", "trailing"]);
                let [l, u] = i.useState(""),
                    _ = (0, a.U)("UserSettingsDesignSystems");
                return (0, r.jsx)(
                    o.oil,
                    d(c({}, s), {
                        value: l,
                        onChange: u,
                        leading: _ && t ? o.qJs : void 0,
                        trailing: _ && n ? o.lOy : void 0,
                        maxLength: 500,
                    }),
                );
            },
            id: "text-input",
            controls: {
                type: {
                    label: "Input Type",
                    type: "select",
                    defaultValue: "text",
                    options: [
                        {
                            label: "Text",
                            value: "text",
                        },
                        {
                            label: "Password",
                            value: "password",
                        },
                        {
                            label: "Email",
                            value: "email",
                        },
                        {
                            label: "Number",
                            value: "number",
                        },
                    ],
                },
                placeholder: {
                    label: "Placeholder",
                    type: "text",
                    defaultValue: "Enter some text...",
                },
                error: {
                    label: "Error Message",
                    type: "text",
                    defaultValue: void 0,
                },
                helperText: {
                    label: "Helper Text",
                    type: "text",
                    defaultValue: void 0,
                },
                minLength: {
                    label: "Min Length",
                    type: "number",
                    defaultValue: 0,
                },
                showCharacterCount: {
                    label: "Show Character Count",
                    type: "boolean",
                    defaultValue: !1,
                },
                clearable: {
                    label: "Clearable",
                    type: "boolean",
                    defaultValue: !1,
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
                readOnly: {
                    label: "Read Only",
                    type: "boolean",
                    defaultValue: !1,
                },
                leading: {
                    label: "Leading",
                    type: "boolean",
                    defaultValue: !1,
                },
                trailing: {
                    label: "Trailing",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "SearchBar",
            component: function (e) {
                let [t, n] = i.useState("");
                return (0, r.jsx)(
                    o.E1j,
                    d(c({}, e), {
                        query: t,
                        onChange: n,
                        onClear: e.clearable ? () => n("") : void 0,
                    }),
                );
            },
            id: "search-bar",
            controls: {
                placeholder: {
                    label: "Placeholder",
                    type: "text",
                    defaultValue: "Search...",
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        {
                            label: "Small",
                            value: "sm",
                        },
                        {
                            label: "Medium",
                            value: "md",
                        },
                    ],
                },
                clearable: {
                    label: "Clearable",
                    type: "boolean",
                    defaultValue: !1,
                },
                isLoading: {
                    label: "Is Loading",
                    type: "boolean",
                    defaultValue: !1,
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "TextArea",
            id: "text-area",
            component: function (e) {
                let [t, n] = i.useState("");
                return (0, r.jsx)(
                    o.Kx8,
                    d(c({}, e), {
                        value: t,
                        onChange: n,
                    }),
                );
            },
            controls: {
                placeholder: {
                    label: "Placeholder",
                    type: "text",
                    defaultValue: "Enter your message...",
                },
                error: {
                    label: "Error Message",
                    type: "text",
                    defaultValue: void 0,
                },
                rows: {
                    label: "Rows",
                    type: "number",
                    defaultValue: 4,
                },
                maxLength: {
                    label: "Max Length",
                    type: "number",
                    defaultValue: 1000,
                },
                showCharacterCount: {
                    label: "Show Character Count",
                    type: "boolean",
                    defaultValue: !1,
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "Input Collection",
            id: "input-collection",
            component: function (e) {
                let {
                        error: t,
                        disabled: n,
                        placeholder: i,
                        value: l = "",
                        readOnly: u,
                        helperText: f,
                        successMessage: _,
                        showCharacterCount: p,
                    } = e,
                    h = (0, a.U)("UserSettingsDesignSystems"),
                    m = {
                        value: l,
                        error: t,
                        disabled: n,
                        placeholder: i,
                        readOnly: u,
                        helperText: f,
                        showCharacterCount: p,
                        successMessage: _,
                    };
                return (0, r.jsxs)(o.Kqy, {
                    children: [
                        (0, r.jsxs)(o.Kqy, {
                            children: [
                                (0, r.jsx)(o.xJW, {
                                    title: "Text Input",
                                    children: (0, r.jsxs)(o.Kqy, {
                                        children: [
                                            (0, r.jsx)(o.oil, c({}, m)),
                                            (0, r.jsx)(o.oil, d(c({}, m), { clearable: !0 })),
                                            h &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(o.xJW, {
                                                            title: "Leading Icons",
                                                            children: (0, r.jsxs)(o.Kqy, {
                                                                children: [
                                                                    (0, r.jsx)(
                                                                        o.oil,
                                                                        d(c({}, m), {
                                                                            leading: {
                                                                                icon: o.lOy,
                                                                                onClick: s.dG,
                                                                                "aria-label": "At",
                                                                            },
                                                                        }),
                                                                    ),
                                                                    (0, r.jsx)(o.oil, d(c({}, m), { leading: o.lOy })),
                                                                    (0, r.jsx)(
                                                                        o.oil,
                                                                        d(c({}, m), { leading: "https://discord.gg/" }),
                                                                    ),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, r.jsx)(o.xJW, {
                                                            title: "Trailing Icons",
                                                            children: (0, r.jsxs)(o.Kqy, {
                                                                children: [
                                                                    (0, r.jsx)(
                                                                        o.oil,
                                                                        d(c({}, m), {
                                                                            trailing: {
                                                                                icon: o.lOy,
                                                                                onClick: s.dG,
                                                                                "aria-label": "At",
                                                                            },
                                                                        }),
                                                                    ),
                                                                    (0, r.jsx)(o.oil, d(c({}, m), { trailing: o.lOy })),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(o.xJW, {
                                    title: "Text Input (Legacy)",
                                    children: (0, r.jsx)(o.GSy, c({}, m)),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.xJW, {
                            title: "Search Bar",
                            children: (0, r.jsxs)(o.Kqy, {
                                children: [
                                    (0, r.jsx)(o.E1j, {
                                        query: l,
                                        onChange: s.dG,
                                        disabled: n,
                                        placeholder: i,
                                    }),
                                    (0, r.jsx)(o.E1j, {
                                        query: l,
                                        onChange: s.dG,
                                        size: "sm",
                                        disabled: n,
                                        placeholder: i,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(o.xJW, {
                            title: "Text Area",
                            children: (0, r.jsx)(o.Kx8, c({}, m)),
                        }),
                    ],
                });
            },
            controls: {
                value: {
                    label: "Value",
                    type: "text",
                    defaultValue: "",
                },
                placeholder: {
                    label: "Placeholder",
                    type: "text",
                    defaultValue: "Enter some text...",
                },
                error: {
                    label: "Error Message",
                    type: "text",
                    defaultValue: void 0,
                },
                successMessage: {
                    label: "Success Message",
                    type: "text",
                    defaultValue: void 0,
                },
                helperText: {
                    label: "Helper Text",
                    type: "text",
                    defaultValue: void 0,
                },
                showCharacterCount: {
                    label: "Show Character Count",
                    type: "boolean",
                    defaultValue: !1,
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
                readOnly: {
                    label: "Read Only",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
    ],
};
