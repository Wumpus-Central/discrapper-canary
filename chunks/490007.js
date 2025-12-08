n.d(t, { Z: () => x }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(793030),
    o = n(481060),
    c = n(488922),
    d = n(595925),
    u = n(451429),
    m = n(226800);
let p = [
        {
            id: "virtual-currency",
            name: "Virtual Current (Orb) Components",
        },
        {
            id: "nitro",
            name: "Nitro Components",
        },
    ],
    h = {
        "virtual-currency": d.O,
        nitro: c.X,
    };
function x() {
    let [e, t] = l.useState("virtual-currency"),
        n = l.useMemo(() => h[e], [e]);
    return (0, a.jsxs)("div", {
        className: i()(u.panel, m.container),
        children: [
            (0, a.jsx)(o.njP, {
                className: m.tabBar,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: p.map((e) =>
                    (0, a.jsx)(
                        o.njP.Item,
                        {
                            id: e.id,
                            children: e.name,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)(s.w0Z, {
                children: (0, a.jsx)("div", {
                    className: m.content,
                    children: (0, a.jsx)(n, {}),
                }),
            }),
        ],
    });
}
