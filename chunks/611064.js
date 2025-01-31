n.d(t, {
    R: () => _,
    Z: () => C
});
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(239091),
    o = n(82295),
    c = n(485267),
    d = n(71585),
    u = n(703180),
    h = n(809017),
    p = n(981631),
    m = n(388032),
    f = n(623020),
    g = n(973249);
function _(e) {
    return (null == e ? void 0 : e.id) === h.G;
}
let C = l.memo(function (e) {
    let t,
        { title: h, onToggleExpand: _, expanded: C, expandedCount: x } = e,
        v = (0, a.e7)([d.Z], () => d.Z.hidden),
        E = l.useCallback((e) => {
            (0, s.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, i.jsx)(e, { closePopout: s.Zy });
            });
        }, []);
    return (0, i.jsxs)(o.Z, {
        className: g.membersGroup,
        children: [
            (0, i.jsx)(r.nn4, {
                children: m.intl.format(m.t.UaqbkZ, {
                    title: h,
                    count: x
                })
            }),
            (0, i.jsxs)(r.P3F, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return v ? (0, c.lY)() : x > 3 ? _() : (0, p.dG4)();
                },
                onContextMenu: E,
                tag: 'span',
                'aria-hidden': !0,
                className: f.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.header,
                        children: [
                            (0, i.jsxs)('span', {
                                children: [h, ' \u2014 ', x]
                            }),
                            (0, i.jsx)(u.Z, {})
                        ]
                    }),
                    x <= 3 && !v
                        ? null
                        : ((t = v ? (0, i.jsx)(r.u04, { className: f.toggleExpandIcon }) : C ? (0, i.jsx)(r.CJ0, { className: f.toggleExpandIcon }) : (0, i.jsx)(r.Fbu, { className: f.toggleExpandIcon })),
                          (0, i.jsx)(r.tEY, {
                              children: (0, i.jsx)('div', {
                                  tabIndex: 0,
                                  className: f.toggleExpandIcon,
                                  children: t
                              })
                          }))
                ]
            })
        ]
    });
});
