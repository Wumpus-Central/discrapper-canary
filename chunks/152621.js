n.d(t, { A: () => c });
var i = n(417597),
    l = n(760751),
    a = n(486020),
    s = n(524799),
    r = n(585958),
    o = n(985018);
function c(e) {
    let { coverImageUrl: t, localizedName: n, isFetching: c } = (0, r.n)(e),
        d = (0, i.bG)([l.A], () => l.A.getDetectableGame(e)),
        u = (0, i.bG)([s.A], () => s.A.canFetch(e));
    return {
        coverImageUrl: t ?? a.Ay.getGameAssetURL({ id: e, hash: d?.cover_image_hash, keepAspectRatio: !0 }),
        gameName: n ?? d?.name ?? o.intl.string(o.t.GIWFlF),
        isLoading: u || c,
    };
}
