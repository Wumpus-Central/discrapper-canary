n.d(t, { J: () => o, Z: () => c });
var a = n(64700),
    i = n(17928),
    r = n(803306),
    s = n(287809),
    l = n(851746);
let c = 3;
function o() {
    let e = (0, i.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, i.yK)([s.default], () => e.map((e) => s.default.getUser(e)).filter((e) => null != e));
    return (
        a.useEffect(() => {
            e.forEach((e) => {
                (0, r.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, i.bG)([l.A], () => l.A.getRefreshAt()),
        }
    );
}
