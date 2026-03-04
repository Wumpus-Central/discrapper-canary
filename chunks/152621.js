n.d(t, { A: () => o });
var i = n(417597),
    l = n(760751),
    a = n(486020),
    s = n(885151),
    r = n(985018);
function o(e, t) {
    let { data: n, isLoading: o } = (0, s.k)(e),
        c = (0, i.bG)([l.A], () => l.A.getDetectableGame(e));
    return {
        coverImageUrl:
            null != e
                ? (n?.supplementalData?.coverImageUrl ??
                  a.Ay.getGameAssetURL({ id: e, hash: c?.cover_image_hash, keepAspectRatio: !0 }))
                : void 0,
        gameName: n?.supplementalData?.name ?? n?.name ?? c?.name ?? t ?? r.intl.string(r.t.GIWFlF),
        isLoading: o,
    };
}
