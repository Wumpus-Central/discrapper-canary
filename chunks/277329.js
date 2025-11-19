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
    _ = n(332325),
    p = n(981631),
    h = n(388032),
    m = n(830260);
function g() {
    let e = (0, f.b)(),
        t = (0, i.e7)([l.Z], () => l.Z.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id,
        g = (e) => {
            o.Z.setSection(p.oAB.GAMES, e);
        },
        E = () => {
            switch (n) {
                case _.Z.CLIPS:
                    return (0, r.jsx)(s.Z, {});
                case _.Z.OVERLAY:
                    return (0, r.jsx)(d.Z, {
                        className: m.body,
                        showHeader: !1,
                    });
                case _.Z.ACTIVITY_PRIVACY:
                    return (0, r.jsx)(c.Z, {});
                case _.Z.MY_GAMES:
                default:
                    return (0, r.jsx)(u.Z, {
                        className: m.body,
                        showHeader: !1,
                    });
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                className: m.heading,
                variant: "heading-xl/semibold",
                children: h.intl.string(h.t.URyqtP),
            }),
            (0, r.jsx)(a.njP, {
                className: m.tabBar,
                selectedItem: n,
                onItemSelect: g,
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: e.map((e) =>
                    (0, r.jsxs)(
                        a.njP.Item,
                        {
                            className: m.tab,
                            id: e.id,
                            "aria-label": e.title,
                            children: [
                                (0, r.jsx)(e.icon, {
                                    className: m.tabIcon,
                                    color: "currentColor",
                                }),
                                (0, r.jsx)("div", {
                                    className: m.iconTitle,
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
