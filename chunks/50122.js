n.d(t, { A: () => o });
var r = n(812729),
    l = n.n(r),
    i = n(311907),
    a = n(242919),
    s = n(60821);
function o() {
    let {
            recentStatuses: e,
            currentHangStatus: t,
            customHangStatus: n,
            favoritedStatuses: r,
        } = (0, i.cf)([a.A], () => ({
            recentStatuses: a.A.getRecentStatuses(),
            currentHangStatus: a.A.getCurrentHangStatus(),
            customHangStatus: a.A.getCustomHangStatus(),
            favoritedStatuses: a.A.getFavoritedStatuses(),
        })),
        o = 6 - r.length;
    return e
        .filter((e) => {
            let r = (0, s.A)(e) ? e === t : l()(e, n);
            return !a.A.isFavorited(e) && !r;
        })
        .slice(0, o);
}
