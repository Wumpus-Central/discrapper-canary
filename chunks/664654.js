i.d(t, { J: () => d, Z: () => c });
var s = i(64700),
    a = i(17928),
    n = i(803306),
    r = i(287809),
    l = i(851746);
let c = 3;
function d() {
    let e = (0, a.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, a.yK)([r.default], () => e.map((e) => r.default.getUser(e)).filter((e) => null != e));
    return (
        s.useEffect(() => {
            e.forEach((e) => {
                (0, n.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, a.bG)([l.A], () => l.A.getRefreshAt()),
        }
    );
}
