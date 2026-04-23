n.d(t, { J: () => o, Z: () => c });
var r = n(64700),
    a = n(311907),
    i = n(803306),
    s = n(287809),
    l = n(851746);
let c = 3;
function o() {
    let e = (0, a.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, a.yK)([s.default], () => e.map((e) => s.default.getUser(e)).filter((e) => null != e));
    return (
        r.useEffect(() => {
            e.forEach((e) => {
                (0, i.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, a.bG)([l.A], () => l.A.getRefreshAt()),
        }
    );
}
