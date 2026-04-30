"use strict";
n.d(t, { J: () => u, Z: () => l });
var i = n(64700),
    r = n(17928),
    s = n(803306),
    a = n(287809),
    o = n(851746);
let l = 3;
function u() {
    let e = (0, r.yK)([o.A], () => o.A.getSentUserIds()),
        t = (0, r.yK)([a.default], () => e.map((e) => a.default.getUser(e)).filter((e) => null != e));
    return (
        i.useEffect(() => {
            e.forEach((e) => {
                (0, s.wz)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === l,
            refreshAt: (0, r.bG)([o.A], () => o.A.getRefreshAt()),
        }
    );
}
