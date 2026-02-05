n.d(t, { v: () => x });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(158954),
    o = n(397927),
    d = n(63415),
    c = n(661251),
    u = n(737740);
let m = [{ id: "private_browsing_perk", name: "Privacy Perk Components" }],
    h = { private_browsing_perk: d.p },
    x = () => {
        let [e, t] = s.useState("private_browsing_perk"),
            n = s.useMemo(() => h[e], [e]);
        return (0, a.jsxs)("div", {
            className: l()(c.nd, u.kL),
            children: [
                (0, a.jsx)(o.VQ0, {
                    className: u.$H,
                    selectedItem: e,
                    onItemSelect: t,
                    look: "brand",
                    type: "top",
                    orientation: "horizontal",
                    children: m.map((e) => (0, a.jsx)(o.VQ0.Item, { id: e.id, children: e.name }, e.id)),
                }),
                (0, a.jsx)(r.ArX, { children: (0, a.jsx)("div", { className: u.Qs, children: (0, a.jsx)(n, {}) }) }),
            ],
        });
    };
