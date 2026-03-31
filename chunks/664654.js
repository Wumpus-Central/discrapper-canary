"use strict";
s.d(t, { J: () => c, Z: () => u });
var r = s(64700),
    i = s(311907),
    n = s(803306),
    a = s(287809),
    l = s(851746);
let u = 3;
function c() {
    let e = (0, i.yK)([l.A], () => l.A.getSentUserIds()),
        t = (0, i.yK)([a.default], () => e.map((e) => a.default.getUser(e)).filter((e) => null != e));
    return (
        r.useEffect(() => {
            e.forEach((e) => {
                (0, n.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === u,
            refreshAt: (0, i.bG)([l.A], () => l.A.getRefreshAt()),
        }
    );
}
