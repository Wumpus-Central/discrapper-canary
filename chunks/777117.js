n.d(t, {
    A: () => p,
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(252452),
    a = n(628965),
    o = n(513664),
    c = n(768908),
    d = n(790076),
    u = n(523418),
    g = n(857266),
    h = n(652215),
    x = n(985018),
    A = n(461225);

function p() {
    let e = (0, u.b)(),
        t = (0, s.bG)([a.A], () => a.A.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                className: A.R_,
                variant: "heading-xl/semibold",
                children: x.intl.string(x.t.URyqtP),
            }),
            (0, i.jsx)(l.VQ0, {
                className: A.$H,
                selectedItem: n,
                onItemSelect: (e) => {
                    r.A.setSection(h.nc_.GAMES, e);
                },
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: e.map((e) =>
                    (0, i.jsxs)(
                        l.VQ0.Item,
                        {
                            className: A.Mf,
                            id: e.id,
                            "aria-label": e.title,
                            children: [
                                (0, i.jsx)(e.icon, {
                                    className: A.Ll,
                                    color: "currentColor",
                                }),
                                (0, i.jsx)("div", {
                                    className: A.cq,
                                    children: e.title,
                                }),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
            (() => {
                switch (n) {
                    case g.J.OVERLAY:
                        return (0, i.jsx)(d.Ay, {});
                    case g.J.ACTIVITY_PRIVACY:
                        return (0, i.jsx)(o.Ay, {});
                    case g.J.MY_GAMES:
                    default:
                        return (0, i.jsx)(c.Ay, {
                            className: A.rf,
                            showHeader: !1,
                        });
                }
            })(),
        ],
    });
}
