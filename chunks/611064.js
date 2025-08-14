n.d(t, {
    R: () => b,
    Z: () => y,
});
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(82295),
    c = n(485267),
    u = n(71585),
    d = n(703180),
    h = n(809017),
    p = n(981631),
    f = n(388032),
    g = n(532406),
    m = n(32482);
function b(e) {
    return (null == e ? void 0 : e.id) === h.G;
}
let y = i.memo(function (e) {
    let t,
        { title: h, onToggleExpand: b, expanded: y, expandedCount: x } = e,
        j = (0, l.e7)([u.Z], () => u.Z.hidden),
        _ = i.useCallback((e) => {
            (0, s.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, r.jsx)(e, { closePopout: s.Zy });
            });
        }, []);
    return (0, r.jsxs)(o.Z, {
        className: m.membersGroup,
        children: [
            (0, r.jsx)(a.nn4, {
                children: f.intl.format(f.t.UaqbkZ, {
                    title: h,
                    count: x,
                }),
            }),
            (0, r.jsxs)(a.P3F, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return j ? (0, c.lY)() : x > 3 ? b() : (0, p.dG4)();
                },
                onContextMenu: _,
                tag: "span",
                "aria-hidden": !0,
                className: g.headerContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.header,
                        children: [
                            (0, r.jsxs)("span", {
                                children: [h, " \u2014 ", x],
                            }),
                            (0, r.jsx)(d.Z, {}),
                        ],
                    }),
                    x <= 3 && !j
                        ? null
                        : ((t = j
                              ? (0, r.jsx)(a.u04, { className: g.toggleExpandIcon })
                              : y
                                ? (0, r.jsx)(a.CJ0, { className: g.toggleExpandIcon })
                                : (0, r.jsx)(a.Fbu, { className: g.toggleExpandIcon })),
                          (0, r.jsx)(a.tEY, {
                              children: (0, r.jsx)("div", {
                                  tabIndex: 0,
                                  className: g.toggleExpandIcon,
                                  children: t,
                              }),
                          })),
                ],
            }),
        ],
    });
});
