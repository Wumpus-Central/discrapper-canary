"use strict";
n.d(t, { A: () => c });
var i = n(90644),
    r = n(61330),
    s = n(960076),
    a = n(666176),
    o = n(823441),
    l = n(47407),
    u = n(360469);
function c(e) {
    return (0, i.A)(e) && null != e.party && null != e.party.id
        ? a.HT.id
        : (0, s.A)(e) && null != e.url
          ? o.K + e.url
          : null != e.application_id && e.application_id !== u.$W
            ? e.application_id
            : (0, r.A)(e)
              ? l.W + e.name
              : null;
}
