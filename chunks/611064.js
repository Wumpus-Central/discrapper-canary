n.d(t, {
    R: () => b,
    Z: () => _
});
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(239091),
    s = n(82295),
    c = n(485267),
    u = n(71585),
    d = n(703180),
    p = n(809017),
    h = n(981631),
    f = n(388032),
    m = n(470103),
    g = n(920915);
function b(e) {
    return (null == e ? void 0 : e.id) === p.G;
}
let _ = i.memo(function (e) {
    let t,
        { title: p, onToggleExpand: b, expanded: _, expandedCount: C } = e,
        v = (0, l.e7)([u.Z], () => u.Z.hidden),
        y = i.useCallback((e) => {
            (0, a.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, r.jsx)(e, { closePopout: a.Zy });
            });
        }, []);
    return (0, r.jsxs)(s.Z, {
        className: g.membersGroup,
        children: [
            (0, r.jsx)(o.nn4, {
                children: f.NW.format(f.t.UaqbkZ, {
                    title: p,
                    count: C
                })
            }),
            (0, r.jsxs)(o.P3F, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return v ? (0, c.lY)() : C > 3 ? b() : (0, h.dG4)();
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
                                children: [p, ' \u2014 ', C]
                            }),
                            (0, r.jsx)(d.Z, {})
                        ]
                    }),
                    C <= 3 && !v
                        ? null
                        : ((t = v ? (0, r.jsx)(o.u04, { className: m.toggleExpandIcon }) : _ ? (0, r.jsx)(o.CJ0, { className: m.toggleExpandIcon }) : (0, r.jsx)(o.Fbu, { className: m.toggleExpandIcon })),
                          (0, r.jsx)(o.tEY, {
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
