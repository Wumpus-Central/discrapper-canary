"use strict";
n.d(t, { A: () => c });
var i = n(90644),
    r = n(61330),
    a = n(960076),
    s = n(666176),
    l = n(823441),
    o = n(47407),
    d = n(360469);
function c(e) {
    return (0, i.A)(e) && null != e.party && null != e.party.id
        ? s.HT.id
        : (0, a.A)(e) && null != e.url
          ? l.K + e.url
          : null != e.application_id && e.application_id !== d.$W
            ? e.application_id
            : (0, r.A)(e)
              ? o.W + e.name
              : null;
}
