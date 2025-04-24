n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(230711),
    a = n(574755),
    o = n(663389),
    c = n(309739),
    d = n(293389),
    u = n(327885),
    m = n(326528),
    p = n(332325),
    g = n(981631),
    h = n(388032),
    f = n(881328);
function b() {
    let e = (0, m.b)(),
        t = (0, r.e7)([o.Z], () => o.Z.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.X6q, {
                className: f.heading,
                variant: 'heading-xl/semibold',
                children: h.intl.string(h.t.URyqtL)
            }),
            (0, i.jsx)(s.njP, {
                className: f.tabBar,
                selectedItem: n,
                onItemSelect: (e) => {
                    l.Z.setSection(g.oAB.GAMES, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: e.map((e) =>
                    (0, i.jsxs)(
                        s.njP.Item,
                        {
                            className: f.tab,
                            id: e.id,
                            'aria-label': e.title,
                            children: [
                                (0, i.jsx)(e.icon, {
                                    className: f.tabIcon,
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)('div', {
                                    className: f.iconTitle,
                                    children: e.title
                                })
                            ]
                        },
                        e.id
                    )
                )
            }),
            (() => {
                switch (n) {
                    case p.Z.CLIPS:
                        return (0, i.jsx)(a.Z, {
                            className: f.body,
                            showHeader: !1
                        });
                    case p.Z.OVERLAY:
                        return (0, i.jsx)(u.Z, {
                            className: f.body,
                            showHeader: !1
                        });
                    case p.Z.ACTIVITY_PRIVACY:
                        return (0, i.jsx)(c.Z, {
                            className: f.body,
                            showHeader: !1
                        });
                    case p.Z.MY_GAMES:
                    default:
                        return (0, i.jsx)(d.Z, {
                            className: f.body,
                            showHeader: !1
                        });
                }
            })()
        ]
    });
}
