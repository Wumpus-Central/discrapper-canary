n.d(t, { A: () => r });
var i = n(417597),
    l = n(760751),
    a = n(885151),
    s = n(985018);
function r(e, t) {
    let { data: n, isLoading: r } = (0, a.k)(e),
        o = (0, i.bG)([l.A], () => l.A.getDetectableGame(e));
    return {
        coverImageUrl: n?.getCoverURL(),
        gameName: n?.name ?? o?.name ?? t ?? s.intl.string(s.t.GIWFlF),
        isLoading: r,
    };
}
