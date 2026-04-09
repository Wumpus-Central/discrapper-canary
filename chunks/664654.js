s.d(t, { J: () => o, Z: () => c });
var i = s(64700),
    a = s(311907),
    n = s(803306),
    l = s(287809),
    r = s(851746);
let c = 3;
function o() {
    let e = (0, a.yK)([r.A], () => r.A.getSentUserIds()),
        t = (0, a.yK)([l.default], () => e.map((e) => l.default.getUser(e)).filter((e) => null != e));
    return (
        i.useEffect(() => {
            e.forEach((e) => {
                (0, n.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, a.bG)([r.A], () => r.A.getRefreshAt()),
        }
    );
}
