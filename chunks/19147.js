"use strict";
n.d(t, { S: () => f });
var r = n(627968),
    i = n(64700),
    a = n(540637),
    s = n(978617),
    o = n(158954),
    l = n(389723),
    u = n(783878),
    c = n(379649);
let d = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo" },
        { label: "Panda", value: "panda", id: "panda" },
        { label: "Snake", value: "snake", id: "snake", disabled: !0 },
    ],
    _ = [
        {
            label: "Aardvark",
            value: "aardvark",
            id: "aardvark",
            leading: o.N$i,
            trailing: { type: "badge", badgeType: "new" },
        },
        { label: "Cat", value: "cat", id: "cat", leading: o.N$i, trailing: "20m" },
        { label: "Dog", value: "dog", id: "dog", leading: o.N$i },
        { label: "Kangaroo", value: "kangaroo", id: "kangaroo", leading: { type: "image", src: c } },
        { label: "Panda", value: "panda", id: "panda", leading: { type: "avatar", src: c } },
        { label: "Snake", value: "snake", id: "snake", leading: o.N$i, disabled: !0 },
    ],
    f = {
        title: "Select",
        stories: [
            {
                id: "select",
                name: "Select",
                component: function (e) {
                    let { selectionMode: t, withLeadingAndTrailing: n, ...a } = e,
                        [o, l] = i.useState(void 0),
                        [u, c] = i.useState([]),
                        d = p(n, a.asyncOptions);
                    return "single" === t
                        ? (0, r.jsx)(s.l6, { ...a, selectionMode: t, options: d, onSelectionChange: l, value: o })
                        : (0, r.jsx)(s.l6, { ...a, selectionMode: t, options: d, onSelectionChange: c, value: u });
                },
                controls: {
                    selectionMode: {
                        label: "SelectionType",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    asyncOptions: { label: "Async loaded options", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                    clearable: { type: "boolean", label: "Clearable", defaultValue: !1 },
                    fullWidth: { type: "boolean", label: "Full width", defaultValue: !1 },
                    closeOnSelect: { type: "boolean", label: "Close on select", defaultValue: !1 },
                    shouldFocusWrap: { type: "boolean", label: "Should listbox focus wrap", defaultValue: !1 },
                    wrapTags: { type: "boolean", label: "Wrap tags", defaultValue: !1 },
                    maxOptionsVisible: { type: "number", label: "Max options visible", defaultValue: 5 },
                    label: { type: "text", label: "Label", defaultValue: "Sort by" },
                    hideLabel: { type: "boolean", label: "Hide Label", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: void 0 },
                    description: { type: "text", label: "Description", defaultValue: "This is an example description" },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    successMessage: { type: "text", label: "Success Message", defaultValue: "" },
                    layout: {
                        type: "select",
                        label: "Layout",
                        defaultValue: "vertical",
                        options: [
                            { label: "Vertical", value: "vertical" },
                            { label: "Horizontal", value: "horizontal" },
                            { label: "Horizontal (Responsive)", value: "horizontal-responsive" },
                        ],
                    },
                },
            },
            {
                id: "searchable-select",
                name: "SearchableSelect",
                component: function (e) {
                    let { selectionMode: t, withLeadingAndTrailing: n, asyncOptions: a, ...s } = e,
                        [o, l] = i.useState(void 0),
                        [c, d] = i.useState([]),
                        _ = p(n, a);
                    return "single" === t
                        ? (0, r.jsx)(u.Z, { ...s, selectionMode: t, onSelectionChange: l, value: o, options: _ })
                        : (0, r.jsx)(u.Z, { ...s, selectionMode: t, onSelectionChange: d, value: c, options: _ });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    asyncOptions: { label: "Async loaded options", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    clearable: { type: "boolean", label: "Clearable", defaultValue: !1 },
                    closeOnSelect: { type: "boolean", label: "Close on select", defaultValue: !1 },
                    shouldFocusWrap: { type: "boolean", label: "Should listbox focus wrap", defaultValue: !1 },
                    wrapTags: { type: "boolean", label: "Wrap tags", defaultValue: !1 },
                    maxOptionsVisible: { type: "number", label: "Max options visible", defaultValue: 5 },
                    label: { type: "text", label: "Label", defaultValue: "Sort by" },
                    hideLabel: { type: "boolean", label: "Hide Label", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: void 0 },
                    description: { type: "text", label: "Description", defaultValue: "This is an example description" },
                    helperText: {
                        type: "text",
                        label: "Helper Text",
                        defaultValue:
                            "This is an example of helper text, which can be used to provide additional information about the field.",
                    },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    successMessage: { type: "text", label: "Success Message", defaultValue: "" },
                },
            },
            {
                id: "combobox",
                name: "ComboBox",
                component: function (e) {
                    let {
                            selectionMode: t,
                            label: n,
                            hideLabel: a,
                            description: s,
                            helperText: o,
                            errorMessage: u,
                            successMessage: c,
                            wrapTags: d,
                            withLeadingAndTrailing: _,
                            placeholder: f,
                            ...h
                        } = e,
                        { required: m, disabled: g } = h,
                        E = p(_, h.asyncOptions),
                        [A, I] = i.useState(null);
                    return (0, r.jsxs)(l.iS, {
                        selectionMode: t,
                        onSelectionChange: I,
                        options: E,
                        value: A,
                        ...h,
                        children: [
                            (0, r.jsx)(l.a3, {
                                label: n,
                                hideLabel: a,
                                placeholder: f,
                                required: m,
                                disabled: g,
                                description: s,
                                helperText: o,
                                errorMessage: u,
                                successMessage: c,
                                wrapTags: d,
                            }),
                            (0, r.jsx)(l.X2, {}),
                        ],
                    });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    asyncOptions: { label: "Async loaded options", type: "boolean", defaultValue: !1 },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    clearable: { type: "boolean", label: "Clearable", defaultValue: !1 },
                    closeOnSelect: { type: "boolean", label: "Close on select", defaultValue: !1 },
                    shouldFocusWrap: { type: "boolean", label: "Should listbox focus wrap", defaultValue: !1 },
                    wrapTags: { type: "boolean", label: "Wrap tags", defaultValue: !1 },
                    label: { type: "text", label: "Label", defaultValue: "Sort by" },
                    hideLabel: { type: "boolean", label: "Hide Label", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: void 0 },
                    description: { type: "text", label: "Description", defaultValue: "This is an example description" },
                    helperText: {
                        type: "text",
                        label: "Helper Text",
                        defaultValue:
                            "This is an example of helper text, which can be used to provide additional information about the field.",
                    },
                    errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                    successMessage: { type: "text", label: "Success Message", defaultValue: "" },
                },
            },
            {
                id: "listbox",
                name: "ListBox",
                component: function (e) {
                    let { selectionMode: t, required: n, shouldFocusWrap: s, withLeadingAndTrailing: o } = e,
                        [l, u] = i.useState(null);
                    return (0, r.jsx)(a.q, {
                        selectionMode: t,
                        required: n,
                        shouldFocusWrap: s,
                        items: o ? _ : d,
                        onSelectionChange: u,
                        selectedItems: l,
                    });
                },
                controls: {
                    selectionMode: {
                        label: "Selection Mode",
                        type: "select",
                        options: [
                            { label: "Single", value: "single" },
                            { label: "Multiple", value: "multiple" },
                        ],
                        defaultValue: "single",
                    },
                    withLeadingAndTrailing: {
                        label: "Show leading and trailing content",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    required: { label: "Required", type: "boolean", defaultValue: !1 },
                    shouldFocusWrap: { label: "Should focus wrap", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
function p(e, t) {
    let n = i.useRef(null);
    return i.useMemo(() => {
        let r = e ? _ : d;
        return t
            ? (e) =>
                  new Promise(
                      null != n.current ? (e) => e(n.current) : (e) => setTimeout(() => ((n.current = r), e(r)), 1e3),
                  )
            : r;
    }, [e, t]);
}
