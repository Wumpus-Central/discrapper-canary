n.d(t, {
    v: () => h,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(63415),
    d = n(661251),
    u = n(737740);
let m = [
        {
            id: "private_browsing_perk",
            name: "Privacy Perk Components",
        },
    ],
    p = {
        private_browsing_perk: c.p,
    },
    h = () => {
        let [e, t] = l.useState("private_browsing_perk"),
            n = l.useMemo(() => p[e], [e]);
        return (0, a.jsxs)("div", {
            className: r()(d.nd, u.kL),
            children: [
                (0, a.jsx)(o.VQ0, {
                    className: u.$H,
                    selectedItem: e,
                    onItemSelect: t,
                    look: "brand",
                    type: "top",
                    orientation: "horizontal",
                    children: m.map((e) =>
                        (0, a.jsx)(
                            o.VQ0.Item,
                            {
                                id: e.id,
                                children: e.name,
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, a.jsx)(s.ArX, {
                    children: (0, a.jsx)("div", {
                        className: u.Qs,
                        children: (0, a.jsx)(n, {}),
                    }),
                }),
            ],
        });
    };
