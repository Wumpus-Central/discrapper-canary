n.d(t, { W: () => l }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(921349),
    a = n(619307);
let s = [
        {
            value: "red",
            label: "Red",
        },
        {
            value: "green",
            label: "Green",
        },
        {
            value: "blue",
            label: "Blue",
        },
        {
            value: "yellow",
            label: "Yellow",
        },
        {
            value: "purple",
            label: "Purple",
        },
        {
            value: "orange",
            label: "Orange",
        },
        {
            value: "pink",
            label: "Pink",
        },
        {
            value: "brown",
            label: "Brown",
        },
    ],
    l = {
        title: "Select",
        stories: [
            {
                id: "select",
                name: "Select",
                component: function (e) {
                    let { isDisabled: t, placeholder: n, maxVisibleItems: o } = e,
                        [l, c] = i.useState("blue");
                    return (0, r.jsx)(a.q4, {
                        value: l,
                        onChange: c,
                        options: s,
                        placeholder: n,
                        isDisabled: t,
                        maxVisibleItems: o,
                    });
                },
                controls: {
                    isDisabled: {
                        type: "boolean",
                        label: "Disabled",
                        defaultValue: !1,
                    },
                    placeholder: {
                        type: "text",
                        label: "Placeholder",
                        defaultValue: "Choose a color",
                    },
                    maxVisibleItems: {
                        type: "number",
                        label: "Max Visible Items",
                        defaultValue: 5,
                    },
                },
            },
            {
                id: "searchable-select",
                name: "Searchable Select",
                component: function (e) {
                    let { isDisabled: t, placeholder: n, clearable: a, filter: l } = e,
                        [c, u] = i.useState("blue");
                    return (0, r.jsx)(o.V, {
                        value: c,
                        onChange: u,
                        options: s,
                        placeholder: n,
                        isDisabled: t,
                        clearable: a,
                        filter: l,
                    });
                },
                controls: {
                    isDisabled: {
                        type: "boolean",
                        label: "Disabled",
                        defaultValue: !1,
                    },
                    placeholder: {
                        type: "text",
                        label: "Placeholder",
                        defaultValue: "Search for a color",
                    },
                    clearable: {
                        type: "boolean",
                        label: "Clearable",
                        defaultValue: !0,
                    },
                    filter: {
                        type: "boolean",
                        label: "Filter",
                        defaultValue: !0,
                    },
                },
            },
        ],
    };
