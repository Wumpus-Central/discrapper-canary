n.d(t, { W: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(921349),
    o = n(619307),
    s = n(748585);
let l = [
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
];
function c(e) {
    let { isDisabled: t, placeholder: n, look: o, clearable: s, filter: c } = e,
        [u, d] = i.useState("blue");
    return (0, r.jsx)(a.V, {
        value: u,
        onChange: d,
        options: l,
        placeholder: n,
        isDisabled: t,
        look: o,
        clearable: s,
        filter: c,
    });
}
let u = {
    title: "Select",
    stories: [
        {
            id: "select",
            name: "Select",
            component: function (e) {
                let { isDisabled: t, placeholder: n, look: a, maxVisibleItems: s } = e,
                    [c, u] = i.useState("blue");
                return (0, r.jsx)(o.q4, {
                    value: c,
                    onChange: u,
                    options: l,
                    placeholder: n,
                    isDisabled: t,
                    look: a,
                    maxVisibleItems: s,
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
                look: {
                    type: "select",
                    label: "Look",
                    defaultValue: s.q.FILLED,
                    options: [
                        {
                            label: "Filled",
                            value: s.q.FILLED,
                        },
                        {
                            label: "Custom",
                            value: s.q.CUSTOM,
                        },
                    ],
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
            component: c,
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
                look: {
                    type: "select",
                    label: "Look",
                    defaultValue: s.q.FILLED,
                    options: [
                        {
                            label: "Filled",
                            value: s.q.FILLED,
                        },
                        {
                            label: "Custom",
                            value: s.q.CUSTOM,
                        },
                    ],
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
