(a.d(t, { A: () => d }), a(582128), a(17928));
var i = a(429913);
(a(403362), a(311043));
var n = a(569926);
function d(e) {
    let t = (0, i.h)(e),
        a = null != e && null == t,
        d = t?.getCanonicalGameId() ?? null,
        { data: s, isLoading: l } = (0, n.I)(d);
    return { gameId: d, gameRecord: s ?? null, isLoading: a || l };
}
