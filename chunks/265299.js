n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(113434),
    a = n(497505),
    o = n(37303),
    s = n(683650),
    c = n(461772);
function u(e) {
    let { questId: t } = e,
        { quests: n, isFetchingCurrentQuests: u } = (0, l.J2)({ fetchPolicy: 'cache-or-network' }),
        d = n.find((e) => e.id === t);
    return u
        ? (0, i.jsx)(r.Spinner, { className: c.spinner })
        : null == d
          ? (0, i.jsx)(s.o, {})
          : (0, i.jsx)(
                o.Z,
                {
                    quest: d,
                    location: a.jn.QUESTS_EMBED
                },
                d.id
            );
}
