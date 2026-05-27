t.d(i, { A: () => s }), t(64700), t(17928);
var n = t(429913);
t(403362), t(311043);
var l = t(569926);
function s(e) {
    let i = (0, n.h)(e),
        t = null != e && null == i,
        s = i?.getCanonicalGameId() ?? null,
        { data: a, isLoading: r } = (0, l.I)(s);
    return { gameId: s, gameRecord: a ?? null, isLoading: t || r };
}
