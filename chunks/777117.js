n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(252452),
    o = n(314695),
    l = n(628965),
    c = n(513664),
    u = n(768908),
    d = n(790076),
    f = n(523418),
    p = n(857266),
    _ = n(652215),
    h = n(985018),
    m = n(461225);

function g() {
    let e = (0, f.b)(),
        t = (0, i.bG)([l.A], () => l.A.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id,
        g = (e) => {
            s.A.setSection(_.nc_.GAMES, e);
        },
        E = () => {
            switch (n) {
                case p.J.CLIPS:
                    return (0, r.jsx)(o.A, {});
                case p.J.OVERLAY:
                    return (0, r.jsx)(d.Ay, {});
                case p.J.ACTIVITY_PRIVACY:
                    return (0, r.jsx)(c.Ay, {});
                case p.J.MY_GAMES:
                default:
                    return (0, r.jsx)(u.Ay, {
                        className: m.rf,
                        showHeader: !1,
                    });
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                className: m.R_,
                variant: "heading-xl/semibold",
                children: h.intl.string(h.t.URyqtP),
            }),
            (0, r.jsx)(a.VQ0, {
                className: m.$H,
                selectedItem: n,
                onItemSelect: g,
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: e.map((e) =>
                    (0, r.jsxs)(
                        a.VQ0.Item,
                        {
                            className: m.Mf,
                            id: e.id,
                            "aria-label": e.title,
                            children: [
                                (0, r.jsx)(e.icon, {
                                    className: m.Ll,
                                    color: "currentColor",
                                }),
                                (0, r.jsx)("div", {
                                    className: m.cq,
                                    children: e.title,
                                }),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
            E(),
        ],
    });
}
