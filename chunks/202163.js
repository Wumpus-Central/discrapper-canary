"use strict";
n.d(t, { A: () => s }), n(582128), n(17928);
var l = n(429913);
n(403362), n(311043);
var i = n(569926);
function s(e) {
    let t = (0, l.h)(e),
        n = null != e && null == t,
        s = t?.getCanonicalGameId() ?? null,
        { data: r, isLoading: a } = (0, i.I)(s);
    return { gameId: s, gameRecord: r ?? null, isLoading: n || a };
}
