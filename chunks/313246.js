"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    s = n(451988);
function a(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
var o = n(287809),
    l = n(354670),
    u = n(927578),
    c = n(788868);
function d(e, t) {
    let n = (0, r.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
        [d, _] = i.useState(a(n)),
        f = (0, r.bG)([o.default], () => (0, u.TW)(o.default.getCurrentUser())),
        h = e === c.q || e === c.EG;
    return (
        i.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new s.Ep(),
                t = () => {
                    let i = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    e?.start(i, () => {
                        !d && a(n) ? _(!0) : t();
                    });
                };
            return t(), () => e.stop();
        }, [d, n]),
        !d && (!f || t || h) ? n : null
    );
}
