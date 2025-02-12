n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(230711),
    a = n(574755),
    o = n(663389),
    c = n(309739),
    d = n(293389),
    u = n(327885),
    h = n(326528),
    m = n(332325),
    g = n(981631),
    x = n(388032),
    _ = n(195252);
function p() {
    let e = (0, h.b)(),
        t = (0, s.e7)([o.Z], () => o.Z.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6q, {
                className: _.heading,
                variant: 'heading-xl/semibold',
                children: x.intl.string(x.t.URyqtL)
            }),
            (0, i.jsx)(l.njP, {
                className: _.tabBar,
                selectedItem: n,
                onItemSelect: (e) => {
                    r.Z.setSection(g.oAB.GAMES, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: e.map((e) =>
                    (0, i.jsxs)(
                        l.njP.Item,
                        {
                            className: _.tab,
                            id: e.id,
                            'aria-label': e.title,
                            children: [
                                (0, i.jsx)(e.icon, {
                                    className: _.tabIcon,
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)('div', {
                                    className: _.iconTitle,
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
                    case m.Z.CLIPS:
                        return (0, i.jsx)(a.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                    case m.Z.OVERLAY:
                        return (0, i.jsx)(u.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                    case m.Z.ACTIVITY_PRIVACY:
                        return (0, i.jsx)(c.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                    case m.Z.MY_GAMES:
                    default:
                        return (0, i.jsx)(d.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                }
            })()
        ]
    });
}
