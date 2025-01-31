n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    r = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(215569),
    c = n(481060),
    d = n(607070),
    u = n(981631),
    h = n(732144);
let m = function (e) {
    let { rows: t, renderRow: n, renderSection: m, hasSearchQuery: p, sectionFilter: g, footer: _ } = e,
        f = (0, s.e7)([d.Z], () => d.Z.keyboardModeEnabled),
        E = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        I = (0, r.ZP)({
            id: 'people',
            isEnabled: f,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        C = g !== u.pJs.ONLINE && g !== u.pJs.ALL,
        v = E || p || C,
        N = l.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : v
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
            [n, m, t, v]
        );
    return (0, i.jsx)(a.bG, {
        navigator: I,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(c.w0Z, {
                    ref: t,
                    className: h.peopleList,
                    ...n,
                    children: [N, _]
                });
            }
        })
    });
};
