n.d(t, {
    R: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
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
function C(e) {
    return (null == e ? void 0 : e.id) === h.G;
}
t.Z = l.memo(function (e) {
    let t,
        { title: h, onToggleExpand: C, expanded: x, expandedCount: v } = e,
        _ = (0, r.e7)([d.Z], () => d.Z.hidden),
        I = l.useCallback((e) => {
            (0, s.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, i.jsx)(e, { closePopout: s.Zy });
            });
        }, []);
    return (0, i.jsxs)(o.Z, {
        className: g.membersGroup,
        children: [
            (0, i.jsx)(a.HiddenVisually, {
                children: m.intl.format(m.t.UaqbkZ, {
                    title: h,
                    count: v
                })
            }),
            (0, i.jsxs)(a.Clickable, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return _ ? (0, c.lY)() : v > 3 ? C() : (0, p.dG4)();
                },
                onContextMenu: I,
                tag: 'span',
                'aria-hidden': !0,
                className: f.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.header,
                        children: [
                            (0, i.jsxs)('span', {
                                children: [h, ' \u2014 ', v]
                            }),
                            (0, i.jsx)(u.default, {})
                        ]
                    }),
                    v <= 3 && !_
                        ? null
                        : ((t = _ ? (0, i.jsx)(a.ChevronSmallUpIcon, { className: f.toggleExpandIcon }) : x ? (0, i.jsx)(a.ChevronSmallDownIcon, { className: f.toggleExpandIcon }) : (0, i.jsx)(a.ChevronSmallRightIcon, { className: f.toggleExpandIcon })),
                          (0, i.jsx)(a.FocusRing, {
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
