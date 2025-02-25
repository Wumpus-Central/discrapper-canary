n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(113434),
    l = n(497505),
    s = n(37303),
    c = n(722334),
    d = n(683650),
    u = n(800669);
function p(e) {
    let { questId: t } = e,
        { quests: n, excludedQuests: p, isFetchingCurrentQuests: m } = (0, o.J2)({ fetchPolicy: 'cache-or-network' }),
        f = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        h = i.useMemo(() => p.find((e) => e.id === t), [t, p]);
    return m
        ? (0, r.jsx)(a.$jN, { className: u.spinner })
        : null != h
          ? (0, r.jsx)(c.W, {})
          : null == f
            ? (0, r.jsx)(d.o, {})
            : (0, r.jsx)(
                  s.Z,
                  {
                      quest: f,
                      location: l.jn.QUESTS_EMBED
                  },
                  f.id
              );
}
