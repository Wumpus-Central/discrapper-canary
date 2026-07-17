"use strict";
n.d(t, { P: () => d, k: () => c });
var i = n(64700),
    r = n(17928),
    a = n(451988),
    s = n(287809),
    l = n(354670),
    o = n(428262);
function d(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function c(e) {
    let t = (0, r.bG)([l.A], () => l.A.getUserTrialOffer(e)),
        [n, c] = i.useState(d(t)),
        u =
            !(0, r.bG)([s.default], () => (0, o.TW)(s.default.getCurrentUser())) ||
            l.A.canFractionalPremiumUserUseOffer();
    return (
        i.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new a.Ep();
                return (
                    !(function i() {
                        if (null == t) return;
                        let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        e?.start(r, () => {
                            !n && d(t) ? c(!0) : i();
                        });
                    })(),
                    () => e.stop()
                );
            }
        }, [n, t]),
        !n && u ? t : null
    );
}
