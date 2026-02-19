"use strict";
n.d(t, { A: () => o });
var i = n(812729),
    s = n.n(i),
    l = n(311907),
    r = n(242919),
    a = n(60821);
function o() {
    let {
            recentStatuses: e,
            currentHangStatus: t,
            customHangStatus: n,
            favoritedStatuses: i,
        } = (0, l.cf)([r.A], () => ({
            recentStatuses: r.A.getRecentStatuses(),
            currentHangStatus: r.A.getCurrentHangStatus(),
            customHangStatus: r.A.getCustomHangStatus(),
            favoritedStatuses: r.A.getFavoritedStatuses(),
        })),
        o = 6 - i.length;
    return e
        .filter((e) => {
            let i = (0, a.A)(e) ? e === t : s()(e, n);
            return !r.A.isFavorited(e) && !i;
        })
        .slice(0, o);
}
