r.d(t, { J: () => u, Z: () => n });
var s = r(64700),
    a = r(17928),
    l = r(803306),
    f = r(287809),
    h = r(851746);
let n = 3;
function u() {
    let e = (0, a.yK)([h.A], () => h.A.getSentUserIds()),
        t = (0, a.yK)([f.default], () => e.map((e) => f.default.getUser(e)).filter((e) => null != e));
    return (
        s.useEffect(() => {
            e.forEach((e) => {
                (0, l.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === n,
            refreshAt: (0, a.bG)([h.A], () => h.A.getRefreshAt()),
        }
    );
}
