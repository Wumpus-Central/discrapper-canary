var i = n(90644),
    r = n(61330),
    a = n(960076),
    s = n(666176),
    l = n(823441);
n(47407);
var o = n(487887);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.A)(e) && null != e.party && null != e.party.id
                ? s.HT.id
                : (0, a.A)(e) && null != e.url
                  ? l.K + e.url
                  : null != e.application_id && e.application_id !== o.$W
                    ? e.application_id
                    : (0, r.A)(e)
                      ? "xbox:" + e.name
                      : null;
        },
    },
);
