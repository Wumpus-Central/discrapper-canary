"use strict";
n.d(t, { A: () => s }), n(64700), n(17928);
var i = n(429913);
n(403362), n(311043);
var r = n(569926);
function s(e) {
    let t = (0, i.h)(e),
        n = null != e && null == t,
        s = t?.getCanonicalGameId() ?? null,
        { data: a, isLoading: o } = (0, r.I)(s);
    return { gameId: s, gameRecord: a ?? null, isLoading: n || o };
}
