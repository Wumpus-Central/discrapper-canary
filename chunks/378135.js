"use strict";
n.d(t, { P: () => u, k: () => c });
var r = n(64700),
    i = n(311907),
    s = n(451988),
    a = n(287809),
    o = n(816733),
    l = n(927578);
function u(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function c(e) {
    let t = (0, i.bG)([o.A], () => o.A.getUserTrialOffer(e)),
        [n, c] = r.useState(u(t)),
        d =
            !(0, i.bG)([a.default], () => (0, l.TW)(a.default.getCurrentUser())) ||
            o.A.canFractionalPremiumUserUseOffer();
    return (
        r.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new s.Ep(),
                    r = () => {
                        let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        e?.start(i, () => {
                            !n && u(t) ? c(!0) : r();
                        });
                    };
                return r(), () => e.stop();
            }
        }, [n, t]),
        !n && d ? t : null
    );
}
