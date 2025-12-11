n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(230711),
    s = n(574755),
    l = n(663389),
    c = n(309739),
    u = n(293389),
    d = n(327885),
    f = n(326528),
    p = n(332325),
    _ = n(981631),
    m = n(388032),
    h = n(103554);
function g() {
    let e = (0, f.b)(),
        t = (0, i.e7)([l.Z], () => l.Z.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id,
        g = (e) => {
            o.Z.setSection(_.oAB.GAMES, e);
        },
        E = () => {
            switch (n) {
                case p.Z.CLIPS:
                    return (0, r.jsx)(s.Z, {});
                case p.Z.OVERLAY:
                    return (0, r.jsx)(d.Z, {
                        className: h.body,
                        showHeader: !1,
                    });
                case p.Z.ACTIVITY_PRIVACY:
                    return (0, r.jsx)(c.ZP, {});
                case p.Z.MY_GAMES:
                default:
                    return (0, r.jsx)(u.Z, {
                        className: h.body,
                        showHeader: !1,
                    });
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                className: h.heading,
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t.URyqtP),
            }),
            (0, r.jsx)(a.njP, {
                className: h.tabBar,
                selectedItem: n,
                onItemSelect: g,
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: e.map((e) =>
                    (0, r.jsxs)(
                        a.njP.Item,
                        {
                            className: h.tab,
                            id: e.id,
                            "aria-label": e.title,
                            children: [
                                (0, r.jsx)(e.icon, {
                                    className: h.tabIcon,
                                    color: "currentColor",
                                }),
                                (0, r.jsx)("div", {
                                    className: h.iconTitle,
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
