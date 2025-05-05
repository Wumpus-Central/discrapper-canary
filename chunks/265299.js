n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(113434),
    o = n(497505),
    s = n(37303),
    c = n(722334),
    u = n(683650),
    d = n(626314);
function p(e) {
    let { questId: t } = e,
        { quests: n, excludedQuests: p, isFetchingCurrentQuests: m } = (0, a.J2)({ fetchPolicy: 'cache-or-network' }),
        f = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        h = i.useMemo(() => p.find((e) => e.id === t), [t, p]);
    return m
        ? (0, r.jsx)(l.$jN, { className: d.spinner })
        : null != h
          ? (0, r.jsx)(c.W, { questId: t })
          : null == f
            ? (0, r.jsx)(u.o, { questId: t })
            : (0, r.jsx)(
                  s.Z,
                  {
                      quest: f,
                      location: o.jn.QUESTS_EMBED
                  },
                  f.id
              );
}
