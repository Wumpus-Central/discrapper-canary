t.d(l, { A: () => a }), t(896048);
var n = t(64700),
    s = t(311907),
    o = t(857182),
    i = t(560010);
let r = +t(927813).A.Millis.HOUR;
function a(e) {
    let [l, t] = n.useState(!1),
        a = (0, s.bG)([i.A], () => i.A.getFollowerStatsForChannel(e), [e]);
    return (
        n.useEffect(() => {
            (null == a || Date.now() - a.lastFetched > r) && !l
                ? (t(!0), o.A.fetchChannelFollowerStats(e))
                : null != a && l && t(!1);
        }, [e, a, l]),
        [a, l]
    );
}
