n.d(t, { Z: () => s });
var r = n(348327),
    i = n.n(r),
    l = n(442837),
    a = n(106301),
    o = n(54332);
function s() {
    let {
            recentStatuses: e,
            currentHangStatus: t,
            customHangStatus: n,
            favoritedStatuses: r,
        } = (0, l.cj)([a.Z], () => ({
            recentStatuses: a.Z.getRecentStatuses(),
            currentHangStatus: a.Z.getCurrentHangStatus(),
            customHangStatus: a.Z.getCustomHangStatus(),
            favoritedStatuses: a.Z.getFavoritedStatuses(),
        })),
        s = 6 - r.length;
    return e
        .filter((e) => {
            let r = (0, o.Z)(e) ? e === t : i()(e, n);
            return !a.Z.isFavorited(e) && !r;
        })
        .slice(0, s);
}
