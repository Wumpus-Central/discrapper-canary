n.d(t, { J: () => o, Z: () => c });
var i = n(64700),
    a = n(17928),
    s = n(803306),
    r = n(287809),
    l = n(851746);
let c = 3;
function o() {
    let e = (0, a.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, a.yK)([r.default], () => e.map((e) => r.default.getUser(e)).filter((e) => null != e));
    return (
        i.useEffect(() => {
            e.forEach((e) => {
                (0, s.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, a.bG)([l.A], () => l.A.getRefreshAt()),
        }
    );
}
