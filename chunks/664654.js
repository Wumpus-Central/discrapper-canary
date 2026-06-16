a.d(t, { J: () => o, Z: () => c });
var s = a(64700),
    i = a(17928),
    n = a(803306),
    r = a(287809),
    l = a(851746);
let c = 3;
function o() {
    let e = (0, i.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, i.yK)([r.default], () => e.map((e) => r.default.getUser(e)).filter((e) => null != e));
    return (
        s.useEffect(() => {
            e.forEach((e) => {
                (0, n.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, i.bG)([l.A], () => l.A.getRefreshAt()),
        }
    );
}
