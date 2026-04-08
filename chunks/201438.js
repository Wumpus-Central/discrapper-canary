n.d(t, { A: () => r });
var i = n(417597),
    a = n(760751),
    l = n(454908),
    s = n(985018);
function r(e, t) {
    let { data: n, isLoading: r } = (0, l.I)(e),
        o = (0, i.bG)([a.A], () => a.A.getDetectableGame(e));
    return {
        coverImageUrl: n?.getCoverURL(),
        gameName: n?.name ?? o?.name ?? t ?? s.intl.string(s.t.GIWFlF),
        isLoading: r,
    };
}
