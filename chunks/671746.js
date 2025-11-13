n.d(t, { Z: () => s });
var i = n(348327),
    r = n.n(i),
    l = n(442837),
    a = n(106301),
    o = n(54332);
function s() {
    let {
            recentStatuses: e,
            currentHangStatus: t,
            customHangStatus: n,
            favoritedStatuses: i,
        } = (0, l.cj)([a.Z], () => ({
            recentStatuses: a.Z.getRecentStatuses(),
            currentHangStatus: a.Z.getCurrentHangStatus(),
            customHangStatus: a.Z.getCustomHangStatus(),
            favoritedStatuses: a.Z.getFavoritedStatuses(),
        })),
        s = 6 - i.length;
    return e
        .filter((e) => {
            let i = (0, o.Z)(e) ? e === t : r()(e, n);
            return !a.Z.isFavorited(e) && !i;
        })
        .slice(0, s);
}
