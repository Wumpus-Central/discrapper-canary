n.d(t, {
    R: () => g,
    Z: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(82295),
    c = n(485267),
    u = n(71585),
    d = n(703180),
    f = n(809017),
    p = n(981631),
    _ = n(388032),
    m = n(533212),
    h = n(791486);
function g(e) {
    return (null == e ? void 0 : e.id) === f.G;
}
function E(e) {
    let { title: t, onToggleExpand: f, expanded: g, expandedCount: E } = e,
        b = (0, a.e7)([u.Z], () => u.Z.hidden),
        y = i.useCallback((e) => {
            (0, s.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, r.jsx)(e, { closePopout: s.Zy });
            });
        }, []),
        O = () => {
            let e;
            return E <= 3 && !b
                ? null
                : ((e = b
                      ? (0, r.jsx)(o.u04, { className: m.toggleExpandIcon })
                      : g
                        ? (0, r.jsx)(o.CJ0, { className: m.toggleExpandIcon })
                        : (0, r.jsx)(o.Fbu, { className: m.toggleExpandIcon })),
                  (0, r.jsx)(o.tEY, {
                      children: (0, r.jsx)("div", {
                          tabIndex: 0,
                          className: m.toggleExpandIcon,
                          children: e,
                      }),
                  }));
        };
    return (0, r.jsxs)(l.Z, {
        className: h.membersGroup,
        children: [
            (0, r.jsx)(o.nn4, {
                children: _.intl.format(_.t.Uaqbke, {
                    title: t,
                    count: E,
                }),
            }),
            (0, r.jsxs)(o.P3F, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return b ? (0, c.lY)() : E > 3 ? f() : (0, p.dG4)();
                },
                onContextMenu: y,
                tag: "span",
                "aria-hidden": !0,
                className: m.headerContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.header,
                        children: [
                            (0, r.jsxs)("span", {
                                children: [t, " \u2014 ", E],
                            }),
                            (0, r.jsx)(d.Z, {}),
                        ],
                    }),
                    O(),
                ],
            }),
        ],
    });
}
let b = i.memo(E);
