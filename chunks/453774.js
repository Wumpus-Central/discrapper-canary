"use strict";
n.d(t, { A: () => s });
var r = n(429913),
    i = n(871123),
    a = n(916023);
function s(e, t) {
    let n = (0, i.Xg)(e) ? [] : (e?.linkedGames?.map((e) => e.id) ?? []),
        s = (0, r.A)(n);
    if (!(0, a.kt)({ location: t }) || null == e) return null;
    if ((0, i.Xg)(e)) return e;
    for (let e of s) if (null != e && (0, i.Xg)(e)) return e;
    return null;
}
