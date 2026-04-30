n.d(t, { A: () => d });
var o = n(64700),
    r = n(17928),
    a = n(451988);
function i(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
var l = n(287809),
    u = n(354670),
    s = n(927578),
    _ = n(788868);
function d(e, t) {
    let n = (0, r.bG)([u.A], () => u.A.getUserDiscountOffer(e)),
        [d, C] = o.useState(i(n)),
        E = (0, r.bG)([l.default], () => (0, s.TW)(l.default.getCurrentUser())),
        p = e === _.q || e === _.EG;
    return (
        o.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.Ep(),
                t = () => {
                    let o = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    e?.start(o, () => {
                        !d && i(n) ? C(!0) : t();
                    });
                };
            return t(), () => e.stop();
        }, [d, n]),
        !d && (!E || t || p) ? n : null
    );
}
