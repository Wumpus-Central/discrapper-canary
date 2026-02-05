"use strict";
n.d(t, { Y: () => u });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(818348);
let l = [
        { id: "strength", label: "Strength", icon: s.XxR },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: s.LU0.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    u = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: t, trailing: n, ...a } = e,
                        [u, c] = i.useState(""),
                        [d, _] = i.useState(l),
                        f = i.useCallback(
                            (e) => {
                                _(d.filter((t) => !e.has(t.id)));
                            },
                            [d],
                        );
                    function p(e) {
                        switch (e) {
                            case "tags":
                                return { type: "tags", label: "Tags", items: d, onRemove: f };
                            case "icon":
                                return { icon: s.XxR, onClick: o.tE, "aria-label": "At" };
                            case "text":
                                return "https://discord.gg/";
                            default:
                                return;
                        }
                    }
                    function h(e) {
                        return "icon" === e ? { icon: s.j96, onClick: o.tE, "aria-label": "At" } : void 0;
                    }
                    return (0, r.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.ksK, {
                                ...a,
                                value: u,
                                onChange: c,
                                leading: p(t),
                                trailing: h(n),
                                maxLength: 500,
                            }),
                            "tags" === t
                                ? (0, r.jsx)(s.Button, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => _(l),
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
                            { label: "Text", value: "text" },
                            { label: "Password", value: "password" },
                            { label: "Email", value: "email" },
                            { label: "Number", value: "number" },
                        ],
                    },
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter some text..." },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    minLength: { label: "Min Length", type: "number", defaultValue: 0 },
                    showCharacterCount: { label: "Show Character Count", type: "boolean", defaultValue: !1 },
                    clearable: { label: "Clearable", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    readOnly: { label: "Read Only", type: "boolean", defaultValue: !1 },
                    leading: {
                        label: "Leading",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Tags", value: "tags" },
                            { label: "Icon", value: "icon" },
                            { label: "Text", value: "text" },
                        ],
                    },
                    trailing: {
                        label: "Trailing",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Icon", value: "icon" },
                        ],
                    },
                },
            },
            {
                name: "SearchBar",
                component: function (e) {
                    let [t, n] = i.useState("");
                    return (0, r.jsx)(s.IWV, {
                        ...e,
                        query: t,
                        onChange: n,
                        onClear: e.clearable ? () => n("") : void 0,
                    });
                },
                id: "search-bar",
                controls: {
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Search..." },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "md",
                        options: [
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                        ],
                    },
                    clearable: { label: "Clearable", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "TextArea",
                id: "text-area",
                component: function (e) {
                    let [t, n] = i.useState("");
                    return (0, r.jsx)(s.fs1, { ...e, value: t, onChange: n });
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter your message..." },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    rows: { label: "Rows", type: "number", defaultValue: 3 },
                    autosize: { label: "Autosize", type: "boolean", defaultValue: !1 },
                    maxLength: { label: "Max Length", type: "number", defaultValue: 1e3 },
                    showCharacterCount: { label: "Show Character Count", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
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
                            required: u,
                            error: c,
                            disabled: d,
                            placeholder: _,
                            value: f = "",
                            readOnly: p,
                            helperText: h,
                            successMessage: m,
                            showCharacterCount: g,
                        } = e,
                        E = {
                            label: t,
                            hideLabel: n,
                            description: i,
                            required: u,
                            value: f,
                            error: c,
                            disabled: d,
                            placeholder: _,
                            readOnly: p,
                            helperText: h,
                            showCharacterCount: g,
                            successMessage: m,
                        };
                    return (0, r.jsxs)(s.BJc, {
                        gap: 24,
                        children: [
                            (0, r.jsxs)(a.nVY, {
                                label: "Text Input",
                                children: [
                                    (0, r.jsx)(s.ksK, { ...E }),
                                    (0, r.jsx)(s.ksK, { ...E, clearable: !0 }),
                                    (0, r.jsx)(s.ksK, {
                                        ...E,
                                        leading: { icon: s.XxR, onClick: o.tE, "aria-label": "At" },
                                    }),
                                    (0, r.jsx)(s.ksK, { ...E, leading: s.XxR }),
                                    (0, r.jsx)(s.ksK, { ...E, leading: "https://discord.gg/" }),
                                    (0, r.jsx)(s.ksK, {
                                        ...E,
                                        trailing: { icon: s.XxR, onClick: o.tE, "aria-label": "At" },
                                    }),
                                    (0, r.jsx)(s.ksK, { ...E, trailing: s.XxR }),
                                    (0, r.jsx)(s.ksK, {
                                        ...E,
                                        leading: { type: "tags", label: "Tags", items: l.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(a.cGx, {}),
                            (0, r.jsxs)(a.nVY, {
                                label: "Search Bar",
                                children: [
                                    (0, r.jsx)(s.IWV, { query: f, onChange: o.tE, disabled: d, placeholder: _ }),
                                    (0, r.jsx)(s.IWV, {
                                        query: f,
                                        onChange: o.tE,
                                        size: "sm",
                                        disabled: d,
                                        placeholder: _,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(a.cGx, {}),
                            (0, r.jsx)(a.nVY, { label: "Text Area", children: (0, r.jsx)(s.fs1, { ...E }) }),
                        ],
                    });
                },
                controls: {
                    value: { label: "Value", type: "text", defaultValue: "" },
                    placeholder: { label: "Placeholder", type: "text", defaultValue: "Enter some text..." },
                    label: { label: "Label", type: "text", defaultValue: "Example Label" },
                    hideLabel: { label: "Hide Label", type: "boolean", defaultValue: !1 },
                    description: { label: "Description", type: "text", defaultValue: "This is an example description" },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    error: { label: "Error Message", type: "text", defaultValue: void 0 },
                    successMessage: { label: "Success Message", type: "text", defaultValue: void 0 },
                    helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
                    showCharacterCount: { label: "Show Character Count", type: "boolean", defaultValue: !1 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    readOnly: { label: "Read Only", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
