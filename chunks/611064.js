n.d(t, {
    R: () => b,
    Z: () => _,
});
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(82295),
    c = n(485267),
    d = n(71585),
    u = n(703180),
    p = n(809017),
    h = n(981631),
    f = n(388032),
    g = n(489229),
    m = n(854641);
function b(e) {
    return (null == e ? void 0 : e.id) === p.G;
}
let _ = i.memo(function (e) {
    let t,
        { title: p, onToggleExpand: b, expanded: _, expandedCount: y } = e,
        O = (0, l.e7)([d.Z], () => d.Z.hidden),
        j = i.useCallback((e) => {
            (0, s.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, r.jsx)(e, { closePopout: s.Zy });
            });
        }, []);
    return (0, r.jsxs)(o.Z, {
        className: m.membersGroup,
        children: [
            (0, r.jsx)(a.nn4, {
                children: f.intl.format(f.t.Uaqbke, {
                    title: p,
                    count: y,
                }),
            }),
            (0, r.jsxs)(a.P3F, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return O ? (0, c.lY)() : y > 3 ? b() : (0, h.dG4)();
                },
                onContextMenu: j,
                tag: "span",
                "aria-hidden": !0,
                className: g.headerContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.header,
                        children: [
                            (0, r.jsxs)("span", {
                                children: [p, " \u2014 ", y],
                            }),
                            (0, r.jsx)(u.Z, {}),
                        ],
                    }),
                    y <= 3 && !O
                        ? null
                        : ((t = O
                              ? (0, r.jsx)(a.u04, { className: g.toggleExpandIcon })
                              : _
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
