n.d(t, { Z: () => s });
var r = n(399606),
    i = n(669764),
    l = n(210753),
    a = n(404577),
    o = n(768581),
    c = n(388032);
function s(e) {
    var t;
    let { coverImageUrl: n, localizedName: s, isFetching: u } = (0, l.$)(e),
        d = (0, r.e7)([a.Z], () => a.Z.getDetectableGame(e)),
        f = (0, r.e7)([i.Z], () => i.Z.canFetch(e));
    return {
        coverImageUrl:
            null != n
                ? n
                : o.ZP.getGameAssetURL({
                      id: e,
                      hash: null == d ? void 0 : d.cover_image_hash,
                      keepAspectRatio: !0,
                  }),
        gameName: null != (t = null != s ? s : null == d ? void 0 : d.name) ? t : c.intl.string(c.t.GIWFlF),
        isLoading: f || u,
    };
}
