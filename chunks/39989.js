n.d(t, { C: () => h }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(793030),
    o = n(481060),
    c = n(704088),
    d = n(663618),
    u = n(902012);
let m = [
        {
            id: "private_browsing_perk",
            name: "Privacy Perk Components",
        },
    ],
    p = { private_browsing_perk: c.U },
    h = () => {
        let [e, t] = r.useState("private_browsing_perk"),
            n = r.useMemo(() => p[e], [e]);
        return (0, a.jsxs)("div", {
            className: i()(d.panel, u.container),
            children: [
                (0, a.jsx)(o.njP, {
                    className: u.tabBar,
                    selectedItem: e,
                    onItemSelect: t,
                    look: "brand",
                    type: "top",
                    orientation: "horizontal",
                    children: m.map((e) =>
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
                        className: u.content,
                        children: (0, a.jsx)(n, {}),
                    }),
                }),
            ],
        });
    };
