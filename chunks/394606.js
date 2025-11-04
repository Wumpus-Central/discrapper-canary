n.d(t, { Z: () => c });
var r = n(399606),
    i = n(669764),
    a = n(210753),
    l = n(77498),
    o = n(388032);
function c(e) {
    var t;
    let { coverImageUrl: n, localizedName: c, isFetching: s } = (0, a.$)(e),
        u = (0, r.e7)([l.Z], () => l.Z.getDetectableGame(e)),
        d = (0, r.e7)([i.Z], () => i.Z.canFetch(e));
    return {
        coverImageUrl: n,
        gameName: null != (t = null != c ? c : null == u ? void 0 : u.name) ? t : o.intl.string(o.t.GIWFlF),
        isLoading: d || s,
    };
}
