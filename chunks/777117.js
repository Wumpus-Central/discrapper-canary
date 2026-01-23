n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(252452),
    o = n(628965),
    l = n(513664),
    c = n(768908),
    u = n(790076),
    d = n(523418),
    f = n(857266),
    p = n(652215),
    _ = n(985018),
    h = n(461225);

function m() {
    let e = (0, d.b)(),
        t = (0, i.bG)([o.A], () => o.A.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id,
        m = (e) => {
            s.A.setSection(p.nc_.GAMES, e);
        },
        g = () => {
            switch (n) {
                case f.J.OVERLAY:
                    return (0, r.jsx)(u.Ay, {});
                case f.J.ACTIVITY_PRIVACY:
                    return (0, r.jsx)(l.Ay, {});
                case f.J.MY_GAMES:
                default:
                    return (0, r.jsx)(c.Ay, {
                        className: h.rf,
                        showHeader: !1,
                    });
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                className: h.R_,
                variant: "heading-xl/semibold",
                children: _.intl.string(_.t.URyqtP),
            }),
            (0, r.jsx)(a.VQ0, {
                className: h.$H,
                selectedItem: n,
                onItemSelect: m,
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: e.map((e) =>
                    (0, r.jsxs)(
                        a.VQ0.Item,
                        {
                            className: h.Mf,
                            id: e.id,
                            "aria-label": e.title,
                            children: [
                                (0, r.jsx)(e.icon, {
                                    className: h.Ll,
                                    color: "currentColor",
                                }),
                                (0, r.jsx)("div", {
                                    className: h.cq,
                                    children: e.title,
                                }),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
            g(),
        ],
    });
}
