"use strict";
n.d(t, { A: () => a }), n(582128), n(17928);
var i = n(429913);
n(403362), n(311043);
var r = n(569926);
function a(e) {
    let t = (0, i.h)(e),
        n = null != e && null == t,
        a = t?.getCanonicalGameId() ?? null,
        { data: s, isLoading: l } = (0, r.I)(a);
    return { gameId: a, gameRecord: s ?? null, isLoading: n || l };
}
