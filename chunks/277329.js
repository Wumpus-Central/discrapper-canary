n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(230711),
    a = n(574755),
    o = n(663389),
    c = n(309739),
    d = n(293389),
    u = n(327885),
    m = n(326528),
    h = n(332325),
    g = n(981631),
    x = n(388032),
    _ = n(842762);
function p() {
    let e = (0, m.b)(),
        t = (0, s.e7)([o.Z], () => o.Z.getSubsection()),
        n = null != t && e.some((e) => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.X6q, {
                className: _.heading,
                variant: 'heading-xl/semibold',
                children: x.intl.string(x.t.URyqtL)
            }),
            (0, i.jsx)(r.njP, {
                className: _.tabBar,
                selectedItem: n,
                onItemSelect: (e) => {
                    l.Z.setSection(g.oAB.GAMES, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: e.map((e) =>
                    (0, i.jsxs)(
                        r.njP.Item,
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
                    case h.Z.CLIPS:
                        return (0, i.jsx)(a.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                    case h.Z.OVERLAY:
                        return (0, i.jsx)(u.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                    case h.Z.ACTIVITY_PRIVACY:
                        return (0, i.jsx)(c.Z, {
                            className: _.body,
                            showHeader: !1
                        });
                    case h.Z.MY_GAMES:
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
