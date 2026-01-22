n.d(t, { A: () => c });
var r = n(90644),
    i = n(61330),
    a = n(960076),
    s = n(443795),
    o = n(823441),
    l = n(47407);
function c(e) {
    return (0, i.A)(e)
        ? l.W + e.name
        : (0, r.A)(e) && null != e.party && null != e.party.id
          ? s.HT.id
          : (0, a.A)(e) && null != e.url
            ? o.K + e.url
            : null != e.application_id
              ? e.application_id
              : null;
}
