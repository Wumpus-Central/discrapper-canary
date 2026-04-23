"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    s = n(451988),
    a = n(579364),
    o = n(287809),
    l = n(816733),
    u = n(927578),
    c = n(788868);
function d(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
        [d, _] = r.useState((0, a.w)(n)),
        f = (0, i.bG)([o.default], () => (0, u.TW)(o.default.getCurrentUser())),
        p = e === c.q || e === c.EG;
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new s.Ep(),
                t = () => {
                    let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    e?.start(r, () => {
                        !d && (0, a.w)(n) ? _(!0) : t();
                    });
                };
            return t(), () => e.stop();
        }, [d, n]),
        !d && (!f || t || p) ? n : null
    );
}
