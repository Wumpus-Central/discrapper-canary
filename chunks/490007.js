n.d(t, { Z: () => f }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(793030),
    s = n(481060),
    c = n(488922),
    d = n(191767),
    u = n(595925),
    m = n(451429),
    p = n(226800);
let h = [
        {
            id: "virtual-currency",
            name: "Virtual Current (Orb) Components",
        },
        {
            id: "payment",
            name: "Payment Components",
        },
        {
            id: "nitro",
            name: "Nitro Components",
        },
    ],
    x = {
        "virtual-currency": u.O,
        payment: d.f,
        nitro: c.X,
    };
function f() {
    let [e, t] = r.useState("virtual-currency"),
        n = r.useMemo(() => x[e], [e]);
    return (0, a.jsxs)("div", {
        className: l()(m.panel, p.container),
        children: [
            (0, a.jsx)(s.njP, {
                className: p.tabBar,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: h.map((e) =>
                    (0, a.jsx)(
                        s.njP.Item,
                        {
                            id: e.id,
                            children: e.name,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)(o.w0Z, {
                children: (0, a.jsx)("div", {
                    className: p.content,
                    children: (0, a.jsx)(n, {}),
                }),
            }),
        ],
    });
}
