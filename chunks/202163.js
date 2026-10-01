(a.d(t, { A: () => s }), a(582128), a(17928));
var i = a(429913);
(a(403362), a(311043));
var n = a(569926);
function s(e) {
    let t = (0, i.h)(e),
        a = null != e && null == t,
        s = t?.getCanonicalGameId() ?? null,
        { data: d, isLoading: l } = (0, n.I)(s);
    return { gameId: s, gameRecord: d ?? null, isLoading: a || l };
}
