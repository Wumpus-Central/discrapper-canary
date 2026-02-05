n.d(t, { J: () => d, Z: () => o });
var i = n(64700),
    l = n(311907),
    a = n(803306),
    r = n(287809),
    s = n(851746);
let o = 3;
function d() {
    let e = (0, l.yK)([s.A], () => s.A.getSentUserIds()),
        t = (0, l.yK)([r.default], () => e.map((e) => r.default.getUser(e)).filter((e) => null != e));
    return (
        i.useEffect(() => {
            e.forEach((e) => {
                (0, a.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === o,
            refreshAt: (0, l.bG)([s.A], () => s.A.getRefreshAt()),
        }
    );
}
