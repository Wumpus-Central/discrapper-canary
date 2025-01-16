n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(230711),
    l = n(574755),
    o = n(663389),
    c = n(309739),
    d = n(293389),
    u = n(327885),
    m = n(326528),
    g = n(332325),
    h = n(981631),
    p = n(388032),
    x = n(16344);
function f() {
    let e = (0, m.b)(),
        t = (0, r.e7)([o.Z], () => o.Z.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Heading, {
                className: x.heading,
                variant: 'heading-xl/semibold',
                children: p.intl.string(p.t.URyqtL)
            }),
            (0, i.jsx)(s.TabBar, {
                className: x.tabBar,
                selectedItem: n,
                onItemSelect: (e) => {
                    a.Z.setSection(h.oAB.GAMES, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: e.map((e) =>
                    (0, i.jsxs)(
                        s.TabBar.Item,
                        {
                            className: x.tab,
                            id: e.id,
                            'aria-label': e.title,
                            children: [
                                (0, i.jsx)(e.icon, {
                                    className: x.tabIcon,
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)('div', {
                                    className: x.iconTitle,
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
                    case g.Z.CLIPS:
                        return (0, i.jsx)(l.Z, {
                            className: x.body,
                            showHeader: !1
                        });
                    case g.Z.OVERLAY:
                        return (0, i.jsx)(u.Z, {
                            className: x.body,
                            showHeader: !1
                        });
                    case g.Z.ACTIVITY_PRIVACY:
                        return (0, i.jsx)(c.Z, {
                            className: x.body,
                            showHeader: !1
                        });
                    case g.Z.MY_GAMES:
                    default:
                        return (0, i.jsx)(d.Z, {
                            className: x.body,
                            showHeader: !1
                        });
                }
            })()
        ]
    });
}
