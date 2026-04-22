a.d(l, { Y: () => g });
var t = a(627968),
    n = a(64700),
    o = a(270003),
    i = a(404778),
    r = a(935063),
    s = a(827734),
    d = a(307301),
    u = a(331322),
    c = a(292666),
    b = a(821609),
    p = a(892547),
    m = a(260598),
    h = a(818348);
let x = [
        { id: "strength", label: "Strength", icon: r.X },
        { id: "wisdom", label: "Wisdom", icon: { type: "role", color: s.A.unsafe_rawColors.BRAND_500.css } },
        { id: "charisma", label: "Charisma" },
        { id: "intelligence", label: "Intelligence" },
        { id: "dexterity", label: "Dexterity" },
        { id: "constitution", label: "Constitution" },
    ],
    g = {
        title: "Input Components",
        stories: [
            {
                name: "TextInput",
                component: function (e) {
                    let { leading: l, trailing: a, ...o } = e,
                        [i, s] = n.useState(""),
                        [p, m] = n.useState(x),
                        g = n.useCallback(
                            (e) => {
                                m(p.filter((l) => !e.has(l.id)));
                            },
                            [p],
                        );
                    return (0, t.jsxs)(u.B, {
                        gap: 16,
                        children: [
                            (0, t.jsx)(c.k, {
                                ...o,
                                value: i,
                                onChange: s,
                                leading: (function (e) {
                                    switch (e) {
                                        case "tags":
                                            return { type: "tags", label: "Tags", items: p, onRemove: g };
                                        case "icon":
                                            return { icon: r.X, onClick: h.tE, "aria-label": "At" };
                                        case "text":
                                            return "https://discord.gg/";
                                        default:
                                            return;
                                    }
                                })(l),
                                trailing: "icon" === a ? { icon: d.j, onClick: h.tE, "aria-label": "At" } : void 0,
                                maxLength: 500,
                            }),
                            "tags" === l
                                ? (0, t.jsx)(b.$, {
                                      text: "Reset Tags",
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => m(x),
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
                    let [l, a] = n.useState("");
                    return (0, t.jsx)(p.I, {
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
                    let [l, a] = n.useState("");
                    return (0, t.jsx)(m.f, { ...e, value: l, onChange: a });
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
                            description: n,
                            required: s,
                            error: d,
                            disabled: b,
                            placeholder: g,
                            value: f = "",
                            readOnly: v,
                            helperText: y,
                            successMessage: _,
                            showCharacterCount: C,
                        } = e,
                        j = {
                            label: l,
                            hideLabel: a,
                            description: n,
                            required: s,
                            value: f,
                            error: d,
                            disabled: b,
                            placeholder: g,
                            readOnly: v,
                            helperText: y,
                            showCharacterCount: C,
                            successMessage: _,
                        };
                    return (0, t.jsxs)(u.B, {
                        gap: 24,
                        children: [
                            (0, t.jsxs)(o.n, {
                                label: "Text Input",
                                children: [
                                    (0, t.jsx)(c.k, { ...j }),
                                    (0, t.jsx)(c.k, { ...j, clearable: !0 }),
                                    (0, t.jsx)(c.k, {
                                        ...j,
                                        leading: { icon: r.X, onClick: h.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(c.k, { ...j, leading: r.X }),
                                    (0, t.jsx)(c.k, { ...j, leading: "https://discord.gg/" }),
                                    (0, t.jsx)(c.k, {
                                        ...j,
                                        trailing: { icon: r.X, onClick: h.tE, "aria-label": "At" },
                                    }),
                                    (0, t.jsx)(c.k, { ...j, trailing: r.X }),
                                    (0, t.jsx)(c.k, {
                                        ...j,
                                        leading: { type: "tags", label: "Tags", items: x.slice(0, 3) },
                                    }),
                                ],
                            }),
                            (0, t.jsx)(i.c, {}),
                            (0, t.jsxs)(o.n, {
                                label: "Search Bar",
                                children: [
                                    (0, t.jsx)(p.I, { query: f, onChange: h.tE, disabled: b, placeholder: g }),
                                    (0, t.jsx)(p.I, {
                                        query: f,
                                        onChange: h.tE,
                                        size: "sm",
                                        disabled: b,
                                        placeholder: g,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(i.c, {}),
                            (0, t.jsx)(o.n, { label: "Text Area", children: (0, t.jsx)(m.f, { ...j }) }),
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
