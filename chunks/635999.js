n.d(t, { Z: () => d }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(846519),
    o = n(86376),
    s = n(594174),
    l = n(431),
    c = n(74538),
    u = n(474936);
function d(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.getUserDiscountOffer(e)),
        [d, f] = r.useState((0, o.k)(n)),
        _ = (0, i.e7)([s.default], () => (0, c.I5)(s.default.getCurrentUser())),
        p = e === u.dT || e === u.dB;
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.V7(),
                t = () => {
                    let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(r, () => {
                            !d && (0, o.k)(n) ? f(!0) : t();
                        });
                };
            return t(), () => e.stop();
        }, [d, n]),
        !d && (!_ || t || p) ? n : null
    );
}
