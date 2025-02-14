n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    r = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(215569),
    d = n(481060),
    c = n(607070),
    u = n(981631),
    h = n(574514);
let m = function (e) {
    let { rows: t, renderRow: n, renderSection: m, hasSearchQuery: p, sectionFilter: g, footer: _ } = e,
        f = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        E = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        I = (0, r.ZP)({
            id: 'people',
            isEnabled: f,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        C = g !== u.pJs.ONLINE && g !== u.pJs.ALL,
        N = E || p || C,
        v = l.useMemo(
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
                return (0, i.jsxs)(d.w0Z, {
                    ref: t,
                    className: h.peopleList,
                    ...n,
                    children: [v, _]
                });
            }
        })
    });
};
