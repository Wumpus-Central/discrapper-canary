t.d(l, { A: () => i }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(793030);
let i = {
    title: "TabBar",
    stories: [
        {
            id: "tabbar",
            name: "TabBar",
            component: function (e) {
                let { look: l, type: t, tabCount: i } = e,
                    [r, s] = n.useState("tab1"),
                    u = Array.from({ length: i }, (e, l) => ({
                        id: "tab".concat(l + 1),
                        name: "Tab ".concat(l + 1),
                    }));
                return (0, a.jsx)(o.njP, {
                    type: t,
                    look: l,
                    selectedItem: r,
                    onItemSelect: s,
                    children: u.map((e) =>
                        (0, a.jsx)(
                            o.njP.Item,
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
