a.d(l, { Y: () => d });
var t = a(627968),
    o = a(64700),
    n = a(158954),
    i = a(397927),
    s = a(818348);
let r = [
        { id: "strength", label: "Strength", icon: i.XxR },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: i.LU0.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    d = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: l, trailing: a, ...n } = e,
                        [d, u] = o.useState(""),
                        [c, b] = o.useState(r),
                        p = o.useCallback(
                            (e) => {
                                b(c.filter((l) => !e.has(l.id)));
                            },
                            [c],
                        );
                    return (0, t.jsxs)(i.BJc, {
                        gap: 16,
                        children: [
                            (0, t.jsx)(i.ksK, {
                                ...n,
                                value: d,
                                onChange: u,
                                leading: (function (e) {
                                    switch (e) {
                                        case "tags":
                                            return { type: "tags", label: "Tags", items: c, onRemove: p };
                                        case "icon":
                                            return { icon: i.XxR, onClick: s.tE, "aria-label": "At" };
                                        case "text":
                                            return "https://discord.gg/";
                                        default:
                                            return;
                                    }
                                })(l),
                                trailing: "icon" === a ? { icon: i.j96, onClick: s.tE, "aria-label": "At" } : void 0,
                                maxLength: 500,
                            }),
                            "tags" === l
                                ? (0, t.jsx)(i.Button, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => b(r),
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
                    let [l, a] = o.useState("");
                    return (0, t.jsx)(i.IWV, {
                        ...e,
                        query: l,
                        onChange: a,
                        onClear: e.clearable ? () => a("") : void 0,
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
                    let [l, a] = o.useState("");
                    return (0, t.jsx)(i.fs1, { ...e, value: l, onChange: a });
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
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: d,
                            error: u,
                            disabled: c,
                            placeholder: b,
                            value: p = "",
                            readOnly: m,
                            helperText: x,
                            successMessage: v,
                            showCharacterCount: h,
                        } = e,
                        y = {
                            label: l,
                            hideLabel: a,
                            description: o,
                            required: d,
                            value: p,
                            error: u,
                            disabled: c,
                            placeholder: b,
                            readOnly: m,
                            helperText: x,
                            showCharacterCount: h,
                            successMessage: v,
                        };
                    return (0, t.jsxs)(i.BJc, {
                        gap: 24,
                        children: [
                            (0, t.jsxs)(n.nVY, {
                                label: "Text Input",
                                children: [
                                    (0, t.jsx)(i.ksK, { ...y }),
                                    (0, t.jsx)(i.ksK, { ...y, clearable: !0 }),
                                    (0, t.jsx)(i.ksK, {
                                        ...y,
                                        leading: { icon: i.XxR, onClick: s.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(i.ksK, { ...y, leading: i.XxR }),
                                    (0, t.jsx)(i.ksK, { ...y, leading: "https://discord.gg/" }),
                                    (0, t.jsx)(i.ksK, {
                                        ...y,
                                        trailing: { icon: i.XxR, onClick: s.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(i.ksK, { ...y, trailing: i.XxR }),
                                    (0, t.jsx)(i.ksK, {
                                        ...y,
                                        leading: { type: "tags", label: "Tags", items: r.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, t.jsx)(n.cGx, {}),
                            (0, t.jsxs)(n.nVY, {
                                label: "Search Bar",
                                children: [
                                    (0, t.jsx)(i.IWV, { query: p, onChange: s.tE, disabled: c, placeholder: b }),
                                    (0, t.jsx)(i.IWV, {
                                        query: p,
                                        onChange: s.tE,
                                        size: "sm",
                                        disabled: c,
                                        placeholder: b,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(n.cGx, {}),
                            (0, t.jsx)(n.nVY, { label: "Text Area", children: (0, t.jsx)(i.fs1, { ...y }) }),
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
