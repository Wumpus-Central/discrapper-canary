n.d(t, {
    R: () => b,
    Z: () => _
});
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(82295),
    c = n(485267),
    u = n(71585),
    d = n(703180),
    p = n(809017),
    h = n(981631),
    f = n(388032),
    m = n(747231),
    g = n(39985);
function b(e) {
    return (null == e ? void 0 : e.id) === p.G;
}
let _ = i.memo(function (e) {
    let t,
        { title: p, onToggleExpand: b, expanded: _, expandedCount: x } = e,
        C = (0, l.e7)([u.Z], () => u.Z.hidden),
        y = i.useCallback((e) => {
            (0, o.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, r.jsx)(e, { closePopout: o.Zy });
            });
        }, []);
    return (0, r.jsxs)(s.Z, {
        className: g.membersGroup,
        children: [
            (0, r.jsx)(a.nn4, {
                children: f.intl.format(f.t.UaqbkZ, {
                    title: p,
                    count: x
                })
            }),
            (0, r.jsxs)(a.P3F, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return C ? (0, c.lY)() : x > 3 ? b() : (0, h.dG4)();
                },
                onContextMenu: y,
                tag: 'span',
                'aria-hidden': !0,
                className: m.headerContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.header,
                        children: [
                            (0, r.jsxs)('span', {
                                children: [p, ' \u2014 ', x]
                            }),
                            (0, r.jsx)(d.Z, {})
                        ]
                    }),
                    x <= 3 && !C
                        ? null
                        : ((t = C ? (0, r.jsx)(a.u04, { className: m.toggleExpandIcon }) : _ ? (0, r.jsx)(a.CJ0, { className: m.toggleExpandIcon }) : (0, r.jsx)(a.Fbu, { className: m.toggleExpandIcon })),
                          (0, r.jsx)(a.tEY, {
                              children: (0, r.jsx)('div', {
                                  tabIndex: 0,
                                  className: m.toggleExpandIcon,
                                  children: t
                              })
                          }))
                ]
            })
        ]
    });
});
