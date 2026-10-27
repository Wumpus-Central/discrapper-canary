(l.d(a, { A: () => i }), l(582128), l(17928));
var n = l(429913);
(l(403362), l(311043));
var t = l(454908);
function i(e) {
    let a = (0, n.h)(e),
        l = null != e && null == a,
        i = a?.getCanonicalGameId() ?? null,
        { data: r, isLoading: s } = (0, t.I)(i);
    return { gameId: i, gameRecord: r ?? null, isLoading: l || s };
}
