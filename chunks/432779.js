n.d(t, { A: () => d }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(579364),
    o = n(287809),
    l = n(816733),
    c = n(927578),
    u = n(788868);
function d(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
        [d, f] = r.useState((0, s.w)(n)),
        p = (0, i.bG)([o.default], () => (0, c.TW)(o.default.getCurrentUser())),
        _ = e === u.q || e === u.EG;
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.Ep(),
                t = () => {
                    let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(r, () => {
                            !d && (0, s.w)(n) ? f(!0) : t();
                        });
                };
            return t(), () => e.stop();
        }, [d, n]),
        !d && (!p || t || _) ? n : null
    );
}
