n.d(t, { A: () => o }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(793030);
let o = {
    title: "TabBar",
    stories: [
        {
            id: "tabbar",
            name: "TabBar",
            component: function (e) {
                let { look: t, type: n, tabCount: o } = e,
                    [s, l] = i.useState("tab1"),
                    c = Array.from({ length: o }, (e, t) => ({
                        id: "tab".concat(t + 1),
                        name: "Tab ".concat(t + 1),
                    }));
                return (0, r.jsx)(a.njP, {
                    type: n,
                    look: t,
                    selectedItem: s,
                    onItemSelect: l,
                    children: c.map((e) =>
                        (0, r.jsx)(
                            a.njP.Item,
                            {
                                id: e.id,
                                children: e.name,
                            },
                            e.id,
                        ),
                    ),
                });
            },
            controls: {
                look: {
                    type: "select",
                    label: "Look",
                    defaultValue: "brand",
                    options: [
                        {
                            label: "Brand",
                            value: "brand",
                        },
                        {
                            label: "Grey",
                            value: "grey",
                        },
                        {
                            label: "Custom",
                            value: "custom",
                        },
                    ],
                },
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: "top",
                    options: [
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Side",
                            value: "side",
                        },
                        {
                            label: "Top Pill",
                            value: "top-pill",
                        },
                    ],
                },
                tabCount: {
                    type: "number",
                    label: "Number of Tabs",
                    defaultValue: 3,
                },
            },
        },
    ],
};
