n.d(t, {
    a: () => _,
    r: () => f
});
var r,
    a = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(410030),
    u = n(984370),
    p = n(822857),
    m = n(594174),
    h = n(744695),
    g = n(296026),
    f = (((r = {}).DEFAULT = 'DEFAULT'), (r.SEARCH = 'SEARCH'), r);
function _(e) {
    let { selectedTabId: t, handleTransition: n, tabs: r, state: l = 'DEFAULT', onAvailableWidthChange: f, icon: _, children: b } = e,
        x = (0, d.ZP)(),
        v = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        C = (null == v ? void 0 : v.isStaff()) || (null == v ? void 0 : v.isStaffPersonal()),
        { enabled: j } = (0, p.WX)({ location: 'global_discovery_header_bar' });
    return (0, a.jsx)(c.f6W, {
        theme: x,
        children: (e) =>
            (0, a.jsxs)(u.Z, {
                className: s()(e, g.headerBar),
                innerClassname: j ? g.headerBarInner : void 0,
                toolbar: C ? (0, a.jsx)(i.Fragment, {}) : null,
                children: [
                    'DEFAULT' === l &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(_, {
                                    color: 'currentColor',
                                    size: 'md'
                                }),
                                (0, a.jsx)(h.Z, {
                                    tabs: r,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    onAvailableWidthChange: f
                                })
                            ]
                        }),
                    (0, a.jsx)('div', {
                        className: s()(g.headerBarContent, { [g.headerBarSearchContent]: 'SEARCH' === l }),
                        children: b
                    })
                ]
            })
    });
}
