n.d(t, { z: () => h }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
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
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = [
        {
            id: "strength",
            label: "Strength",
            icon: o.lOy,
        },
        {
            id: "wisdom",
            label: "Wisdom",
            icon: {
                type: "role",
                color: o.TVs.unsafe_rawColors.BRAND_500.css,
            },
        },
        {
            id: "charisma",
            label: "Charisma",
        },
        {
            id: "intelligence",
            label: "Intelligence",
        },
        {
            id: "dexterity",
            label: "Dexterity",
        },
        {
            id: "constitution",
            label: "Constitution",
        },
    ],
    h = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    var { leading: t, trailing: n } = e,
                        a = f(e, ["leading", "trailing"]);
                    let [l, u] = i.useState(""),
                        [p, h] = i.useState(_),
                        m = i.useCallback(
                            (e) => {
                                h(p.filter((t) => !e.has(t.id)));
                            },
                            [p],
                        );
                    function g(e) {
                        switch (e) {
                            case "tags":
                                return {
                                    type: "tags",
                                    label: "Tags",
                                    items: p,
                                    onRemove: m,
                                };
                            case "icon":
                                return {
                                    icon: o.lOy,
                                    onClick: s.dG,
                                    "aria-label": "At",
                                };
                            case "text":
                                return "https://discord.gg/";
                            default:
                                return;
                        }
                    }
                    function E(e) {
                        return "icon" === e
                            ? {
                                  icon: o.qJs,
                                  onClick: s.dG,
                                  "aria-label": "At",
                              }
                            : void 0;
                    }
                    return (0, r.jsxs)(o.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(
                                o.oil,
                                d(c({}, a), {
                                    value: l,
                                    onChange: u,
                                    leading: g(t),
                                    trailing: E(n),
                                    maxLength: 500,
                                }),
                            ),
                            "tags" === t
                                ? (0, r.jsx)(o.Button, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => h(_),
                                  })
                                : null,
                        ],
                    });
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
                    label: {
                        label: "Label",
                        type: "text",
                        defaultValue: "Example Label",
                    },
                    hideLabel: {
                        label: "Hide Label",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    description: {
                        label: "Description",
                        type: "text",
                        defaultValue: "This is an example description",
                    },
                    required: {
                        label: "Required",
                        type: "boolean",
                        defaultValue: !1,
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
                        type: "select",
                        defaultValue: "none",
                        options: [
                            {
                                label: "None",
                                value: "none",
                            },
                            {
                                label: "Tags",
                                value: "tags",
                            },
                            {
                                label: "Icon",
                                value: "icon",
                            },
                            {
                                label: "Text",
                                value: "text",
                            },
                        ],
                    },
                    trailing: {
                        label: "Trailing",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            {
                                label: "None",
                                value: "none",
                            },
                            {
                                label: "Icon",
                                value: "icon",
                            },
                        ],
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
                    label: {
                        label: "Label",
                        type: "text",
                        defaultValue: "Example Label",
                    },
                    hideLabel: {
                        label: "Hide Label",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    required: {
                        label: "Required",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    description: {
                        label: "Description",
                        type: "text",
                        defaultValue: "This is an example description",
                    },
                    helperText: {
                        label: "Helper Text",
                        type: "text",
                        defaultValue: void 0,
                    },
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
                        defaultValue: 3,
                    },
                    autosize: {
                        label: "Autosize",
                        type: "boolean",
                        defaultValue: !1,
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
                            label: t,
                            hideLabel: n,
                            description: i,
                            required: l,
                            error: u,
                            disabled: f,
                            placeholder: p,
                            value: h = "",
                            readOnly: m,
                            helperText: g,
                            successMessage: E,
                            showCharacterCount: b,
                        } = e,
                        y = {
                            label: t,
                            hideLabel: n,
                            description: i,
                            required: l,
                            value: h,
                            error: u,
                            disabled: f,
                            placeholder: p,
                            readOnly: m,
                            helperText: g,
                            showCharacterCount: b,
                            successMessage: E,
                        };
                    return (0, r.jsxs)(o.Kqy, {
                        gap: 24,
                        children: [
                            (0, r.jsxs)(a.C3N, {
                                label: "Text Input",
                                children: [
                                    (0, r.jsx)(o.oil, c({}, y)),
                                    (0, r.jsx)(o.oil, d(c({}, y), { clearable: !0 })),
                                    (0, r.jsx)(
                                        o.oil,
                                        d(c({}, y), {
                                            leading: {
                                                icon: o.lOy,
                                                onClick: s.dG,
                                                "aria-label": "At",
                                            },
                                        }),
                                    ),
                                    (0, r.jsx)(o.oil, d(c({}, y), { leading: o.lOy })),
                                    (0, r.jsx)(o.oil, d(c({}, y), { leading: "https://discord.gg/" })),
                                    (0, r.jsx)(
                                        o.oil,
                                        d(c({}, y), {
                                            trailing: {
                                                icon: o.lOy,
                                                onClick: s.dG,
                                                "aria-label": "At",
                                            },
                                        }),
                                    ),
                                    (0, r.jsx)(o.oil, d(c({}, y), { trailing: o.lOy })),
                                    (0, r.jsx)(
                                        o.oil,
                                        d(c({}, y), {
                                            leading: {
                                                type: "tags",
                                                label: "Tags",
                                                items: _.slice(0, 3),
                                            },
                                        }),
                                    ),
                                ],
                            }),
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsxs)(a.C3N, {
                                label: "Search Bar",
                                children: [
                                    (0, r.jsx)(o.E1j, {
                                        query: h,
                                        onChange: s.dG,
                                        disabled: f,
                                        placeholder: p,
                                    }),
                                    (0, r.jsx)(o.E1j, {
                                        query: h,
                                        onChange: s.dG,
                                        size: "sm",
                                        disabled: f,
                                        placeholder: p,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsx)(a.C3N, {
                                label: "Text Area",
                                children: (0, r.jsx)(o.Kx8, c({}, y)),
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
                    label: {
                        label: "Label",
                        type: "text",
                        defaultValue: "Example Label",
                    },
                    hideLabel: {
                        label: "Hide Label",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    description: {
                        label: "Description",
                        type: "text",
                        defaultValue: "This is an example description",
                    },
                    required: {
                        label: "Required",
                        type: "boolean",
                        defaultValue: !1,
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
