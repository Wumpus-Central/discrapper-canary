n.d(t, {
    J: () => c,
    Z: () => l,
});
var r = n(64700),
    i = n(311907),
    a = n(803306),
    s = n(287809),
    o = n(851746);
let l = 3;
function c() {
    let e = (0, i.yK)([o.A], () => o.A.getSentUserIds()),
        t = (0, i.yK)([s.default], () => e.map((e) => s.default.getUser(e)).filter((e) => null != e));
    return (
        r.useEffect(() => {
            e.forEach((e) => {
                (0, a.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === l,
            refreshAt: (0, i.bG)([o.A], () => o.A.getRefreshAt()),
        }
    );
}
