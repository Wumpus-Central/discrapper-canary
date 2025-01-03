var i = n(200651);
n(192379);
var r = n(924826),
    l = n(91192),
    a = n(442837),
    s = n(215569),
    o = n(481060),
    c = n(607070),
    d = n(981631),
    u = n(732144);
t.Z = function (e) {
    let { statusSections: t, renderRow: n, searchQuery: h, sectionFilter: m, useReducedMotion: p, footer: g } = e,
        f = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        _ = (0, r.ZP)({
            id: 'people',
            isEnabled: f,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        E = m !== d.pJs.ONLINE && m !== d.pJs.ALL,
        I = p || '' !== h || E,
        C = t.map((e, t) =>
            I
                ? (0, i.jsx)('div', { children: e.map(n) }, t)
                : (0, i.jsx)(
                      s.W,
                      {
                          transitionAppear: !1,
                          component: 'div',
                          children: e.map(n)
                      },
                      t
                  )
        );
    return (0, i.jsx)(l.bG, {
        navigator: _,
        children: (0, i.jsx)(l.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(o.ScrollerAuto, {
                    ref: t,
                    className: u.peopleList,
                    ...n,
                    children: [C, g]
                });
            }
        })
    });
};
