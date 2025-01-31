n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(113434),
    r = n(497505),
    s = n(37303),
    o = n(683650),
    c = n(461772);
function d(e) {
    let { questId: t } = e,
        { quests: n, isFetchingCurrentQuests: d } = (0, a.J2)({ fetchPolicy: 'cache-or-network' }),
        u = n.find((e) => e.id === t);
    return d
        ? (0, i.jsx)(l.$jN, { className: c.spinner })
        : null == u
          ? (0, i.jsx)(o.o, {})
          : (0, i.jsx)(
                s.Z,
                {
                    quest: u,
                    location: r.jn.QUESTS_EMBED
                },
                u.id
            );
}
