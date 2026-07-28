"use strict";
n.d(t, { A: () => c });
var i = n(582128),
    r = n(17928),
    a = n(451988),
    s = n(287809),
    l = n(354670),
    o = n(428262),
    d = n(202541);
function c(e, t) {
    let n = (0, r.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
        [c, u] = i.useState(n?.hasExpired() ?? !1),
        _ = (0, r.bG)([s.default], () => (0, o.TW)(s.default.getCurrentUser())),
        E = e === d.q || e === d.EG;
    return (
        i.useEffect(() => {
            if (!n?.hasAcknowledged()) return;
            let e = new a.Ep();
            return (
                !(function t() {
                    if (!n?.hasAcknowledged()) return;
                    let i = null != n.expiresAt ? n.expiresAt.getTime() - Date.now() : 0;
                    e?.start(i, () => {
                        !c && n.hasExpired() ? u(!0) : t();
                    });
                })(),
                () => e.stop()
            );
        }, [c, n]),
        !c && (!_ || t || E) ? n : null
    );
}
