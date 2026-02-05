n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(252452),
    r = n(628965),
    o = n(513664),
    d = n(768908),
    c = n(790076),
    u = n(523418),
    h = n(857266),
    A = n(652215),
    g = n(985018),
    m = n(461225);
function p() {
    let e = (0, u.b)(),
        t = (0, l.bG)([r.A], () => r.A.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Heading, {
                className: m.R_,
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.URyqtP),
            }),
            (0, i.jsx)(s.VQ0, {
                className: m.$H,
                selectedItem: n,
                onItemSelect: (e) => {
                    a.A.setSection(A.nc_.GAMES, e);
                },
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: e.map((e) =>
                    (0, i.jsxs)(
                        s.VQ0.Item,
                        {
                            className: m.Mf,
                            id: e.id,
                            "aria-label": e.title,
                            children: [
                                (0, i.jsx)(e.icon, { className: m.Ll, color: "currentColor" }),
                                (0, i.jsx)("div", { className: m.cq, children: e.title }),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
            (() => {
                switch (n) {
                    case h.J.OVERLAY:
                        return (0, i.jsx)(c.Ay, {});
                    case h.J.ACTIVITY_PRIVACY:
                        return (0, i.jsx)(o.Ay, {});
                    case h.J.MY_GAMES:
                    default:
                        return (0, i.jsx)(d.Ay, { className: m.rf, showHeader: !1 });
                }
            })(),
        ],
    });
}
