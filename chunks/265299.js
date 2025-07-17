n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(113434),
    o = n(497505),
    s = n(918701),
    c = n(37303),
    u = n(722334),
    d = n(683650),
    p = n(626314);
function m(e) {
    let { questId: t } = e,
        { quests: n, excludedQuests: m, isFetchingCurrentQuests: f } = (0, a.J2)({ fetchPolicy: 'cache-or-network' }),
        g = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        h = i.useMemo(() => m.find((e) => e.id === t), [t, m]);
    return f
        ? (0, r.jsx)(l.$jN, { className: p.spinner })
        : null != h
          ? (0, r.jsx)(u.W, { questId: t })
          : null == g
            ? (0, r.jsx)(d.o, {
                  questId: t,
                  reason: d.X.NOT_FOUND
              })
            : (0, s.HJ)(g)
              ? (0, r.jsx)(d.o, {
                    questId: t,
                    reason: d.X.MOBILE_ONLY
                })
              : (0, r.jsx)(
                    c.Z,
                    {
                        quest: g,
                        location: o.jn.QUESTS_EMBED,
                        sourceQuestContent: o.jn.QUESTS_EMBED
                    },
                    g.id
                );
}
