n.d(t, {
    S: () => s,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954);
let s = {
    title: "TabBar",
    stories: [
        {
            id: "tabbar",
            name: "TabBar",
            component: function (e) {
                let { look: t, type: n, tabCount: s } = e,
                    [o, l] = i.useState("tab1"),
                    c = Array.from(
                        {
                            length: s,
                        },
                        (e, t) => ({
                            id: "tab".concat(t + 1),
                            name: "Tab ".concat(t + 1),
                        }),
                    );
                return (0, r.jsx)(a.VQ0, {
                    type: n,
                    look: t,
                    selectedItem: o,
                    onItemSelect: l,
                    children: c.map((e) =>
                        (0, r.jsx)(
                            a.VQ0.Item,
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
