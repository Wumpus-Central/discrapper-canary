"use strict";
n.d(t, { P: () => u, k: () => c });
var i = n(64700),
    r = n(17928),
    s = n(451988),
    a = n(287809),
    o = n(354670),
    l = n(428262);
function u(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function c(e) {
    let t = (0, r.bG)([o.A], () => o.A.getUserTrialOffer(e)),
        [n, c] = i.useState(u(t)),
        d =
            !(0, r.bG)([a.default], () => (0, l.TW)(a.default.getCurrentUser())) ||
            o.A.canFractionalPremiumUserUseOffer();
    return (
        i.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new s.Ep(),
                    i = () => {
                        let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        e?.start(r, () => {
                            !n && u(t) ? c(!0) : i();
                        });
                    };
                return i(), () => e.stop();
            }
        }, [n, t]),
        !n && d ? t : null
    );
}
