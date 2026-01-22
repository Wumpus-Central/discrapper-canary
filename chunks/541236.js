n.d(t, {
    Y: () => h,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(818348);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = [
        {
            id: "strength",
            label: "Strength",
            icon: s.XxR,
        },
        {
            id: "wisdom",
            label: "Wisdom",
            icon: {
                type: "role",
                color: s.LU0.unsafe_rawColors.BRAND_500.css,
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
                    let { leading: t, trailing: n } = e,
                        a = f(e, ["leading", "trailing"]),
                        [l, u] = i.useState(""),
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
                                    icon: s.XxR,
                                    onClick: o.tE,
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
                                  icon: s.j96,
                                  onClick: o.tE,
                                  "aria-label": "At",
                              }
                            : void 0;
                    }
                    return (0, r.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(
                                s.ksK,
                                d(c({}, a), {
                                    value: l,
                                    onChange: u,
                                    leading: g(t),
                                    trailing: E(n),
                                    maxLength: 500,
                                }),
                            ),
                            "tags" === t
                                ? (0, r.jsx)(s.Button, {
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
                        s.IWV,
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
                        s.fs1,
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
                        defaultValue: 1e3,
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
                    return (0, r.jsxs)(s.BJc, {
                        gap: 24,
                        children: [
                            (0, r.jsxs)(a.nVY, {
                                label: "Text Input",
                                children: [
                                    (0, r.jsx)(s.ksK, c({}, y)),
                                    (0, r.jsx)(
                                        s.ksK,
                                        d(c({}, y), {
                                            clearable: !0,
                                        }),
                                    ),
                                    (0, r.jsx)(
                                        s.ksK,
                                        d(c({}, y), {
                                            leading: {
                                                icon: s.XxR,
                                                onClick: o.tE,
                                                "aria-label": "At",
                                            },
                                        }),
                                    ),
                                    (0, r.jsx)(
                                        s.ksK,
                                        d(c({}, y), {
                                            leading: s.XxR,
                                        }),
                                    ),
                                    (0, r.jsx)(
                                        s.ksK,
                                        d(c({}, y), {
                                            leading: "https://discord.gg/",
                                        }),
                                    ),
                                    (0, r.jsx)(
                                        s.ksK,
                                        d(c({}, y), {
                                            trailing: {
                                                icon: s.XxR,
                                                onClick: o.tE,
                                                "aria-label": "At",
                                            },
                                        }),
                                    ),
                                    (0, r.jsx)(
                                        s.ksK,
                                        d(c({}, y), {
                                            trailing: s.XxR,
                                        }),
                                    ),
                                    (0, r.jsx)(
                                        s.ksK,
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
                            (0, r.jsx)(a.cGx, {}),
                            (0, r.jsxs)(a.nVY, {
                                label: "Search Bar",
                                children: [
                                    (0, r.jsx)(s.IWV, {
                                        query: h,
                                        onChange: o.tE,
                                        disabled: f,
                                        placeholder: p,
                                    }),
                                    (0, r.jsx)(s.IWV, {
                                        query: h,
                                        onChange: o.tE,
                                        size: "sm",
                                        disabled: f,
                                        placeholder: p,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(a.cGx, {}),
                            (0, r.jsx)(a.nVY, {
                                label: "Text Area",
                                children: (0, r.jsx)(s.fs1, c({}, y)),
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
