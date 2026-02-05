t.d(s, { A: () => r });
var l = t(64700),
    n = t(311907),
    i = t(857182),
    o = t(560010);
let a = +t(927813).A.Millis.HOUR;
function r(e) {
    let [s, t] = l.useState(!1),
        r = (0, n.bG)([o.A], () => o.A.getFollowerStatsForChannel(e), [e]);
    return (
        l.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !s
                ? (t(!0), i.A.fetchChannelFollowerStats(e))
                : null != r && s && t(!1);
        }, [e, r, s]),
        [r, s]
    );
}
