n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(113434),
    o = n(497505),
    l = n(37303),
    s = n(683650),
    c = n(800669);
function d(e) {
    let { questId: t } = e,
        { quests: n, isFetchingCurrentQuests: d } = (0, a.J2)({ fetchPolicy: 'cache-or-network' }),
        u = n.find((e) => e.id === t);
    return d
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : null == u
          ? (0, r.jsx)(s.o, {})
          : (0, r.jsx)(
                l.Z,
                {
                    quest: u,
                    location: o.jn.QUESTS_EMBED
                },
                u.id
            );
}
