n.d(t, { J: () => o, Z: () => c });
var i = n(64700),
    l = n(17928),
    r = n(803306),
    s = n(287809),
    a = n(851746);
let c = 3;
function o() {
    let e = (0, l.yK)([a.A], () => a.A.getSentUserIds()),
        t = (0, l.yK)([s.default], () => e.map((e) => s.default.getUser(e)).filter((e) => null != e));
    return (
        i.useEffect(() => {
            e.forEach((e) => {
                (0, r.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, l.bG)([a.A], () => a.A.getRefreshAt()),
        }
    );
}
