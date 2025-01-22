var i = n(200651),
    r = n(192379),
    l = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(215569),
    c = n(481060),
    d = n(607070),
    u = n(981631),
    h = n(732144);
t.Z = function (e) {
    let { rows: t, renderRow: n, renderSection: m, hasSearchQuery: p, sectionFilter: g, footer: f } = e,
        _ = (0, s.e7)([d.Z], () => d.Z.keyboardModeEnabled),
        E = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        I = (0, l.ZP)({
            id: 'people',
            isEnabled: _,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        C = g !== u.pJs.ONLINE && g !== u.pJs.ALL,
        N = E || p || C,
        v = r.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : N
                          ? (0, i.jsxs)(
                                'div',
                                {
                                    children: [m(t), e.map(n)]
                                },
                                t
                            )
                          : (0, i.jsxs)(
                                o.W,
                                {
                                    transitionAppear: !1,
                                    component: 'div',
                                    children: [m(t), e.map(n)]
                                },
                                t
                            )
                ),
            [n, m, t, N]
        );
    return (0, i.jsx)(a.bG, {
        navigator: I,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(c.ScrollerAuto, {
                    ref: t,
                    className: h.peopleList,
                    ...n,
                    children: [v, f]
                });
            }
        })
    });
};
