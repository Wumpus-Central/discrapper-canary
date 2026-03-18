"use strict";
n.d(t, { A: () => a });
var r = n(311907),
    i = n(429913),
    s = n(832163);
function a(e) {
    let t = (0, r.bG)([s.A], () => s.A.getStorefrontDetectableGameAndApplicationIds()),
        n = null != e && t.has(e.id) ? [] : (e?.linkedGames?.map((e) => e.id) ?? []),
        a = (0, i.A)(n);
    if (null == e) return null;
    if (null != e && t.has(e.id)) return e;
    for (let e of a) if (null != e && t.has(e.id)) return e;
    return null;
}
