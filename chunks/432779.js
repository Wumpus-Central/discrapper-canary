"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    s = n(451988),
    a = n(287809),
    o = n(354670),
    l = n(927578),
    u = n(788868);
function c(e, t) {
    let n = (0, r.bG)([o.A], () => o.A.getUserDiscountOffer(e)),
        [c, d] = i.useState(n?.hasExpired() ?? !1),
        _ = (0, r.bG)([a.default], () => (0, l.TW)(a.default.getCurrentUser())),
        f = e === u.q || e === u.EG;
    return (
        i.useEffect(() => {
            if (null == n || null == n.expiresAt) return;
            let e = new s.Ep(),
                t = () => {
                    let i = null != n.expiresAt ? n.expiresAt.getTime() - Date.now() : 0;
                    e?.start(i, () => {
                        !c && n.hasExpired() ? d(!0) : t();
                    });
                };
            return t(), () => e.stop();
        }, [c, n]),
        !c && (!_ || t || f) ? n : null
    );
}
