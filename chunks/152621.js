n.d(t, { A: () => c });
var i = n(417597),
    l = n(760751),
    a = n(486020),
    s = n(524799),
    r = n(585958),
    o = n(985018);
function c(e, t) {
    let { coverImageUrl: n, localizedName: c, isFetching: d } = (0, r.n)(e),
        u = (0, i.bG)([l.A], () => l.A.getDetectableGame(e), [e]),
        g = (0, i.bG)([s.A], () => null != e && s.A.canFetch(e), [e]);
    return {
        coverImageUrl:
            null != e ? (n ?? a.Ay.getGameAssetURL({ id: e, hash: u?.cover_image_hash, keepAspectRatio: !0 })) : void 0,
        gameName: c ?? u?.name ?? t ?? o.intl.string(o.t.GIWFlF),
        isLoading: g || d,
    };
}
