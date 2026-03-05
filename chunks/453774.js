"use strict";
n.d(t, { A: () => s });
var r = n(429913),
    i = n(871123);
function s(e) {
    let t = (0, i.Xg)(e) ? [] : (e?.linkedGames?.map((e) => e.id) ?? []),
        n = (0, r.A)(t);
    if (null == e) return null;
    if ((0, i.Xg)(e)) return e;
    for (let e of n) if (null != e && (0, i.Xg)(e)) return e;
    return null;
}
