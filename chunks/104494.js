n.d(t, {
    Ng: () => _,
    Wp: () => d,
    kA: () => u,
    qm: () => f,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(846519),
    o = n(594174),
    s = n(431),
    l = n(74538),
    c = n(474936);
function u(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function d(e, t) {
    var n;
    return null != e && new Set(null == (n = e.discount) ? void 0 : n.plan_ids.map((e) => c.GP[e].skuId)).has(t);
}
function f(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getUserDiscountOffer(e)),
        [d, f] = r.useState(u(n)),
        _ = (0, i.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser())),
        p = e === c.dT || e === c.dB;
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.V7(),
                t = () => {
                    let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(r, () => {
                            !d && u(n) ? f(!0) : t();
                        });
                };
            return t(), () => e.stop();
        }, [d, n]),
        !d && (!_ || t || p) ? n : null
    );
}
function _() {
    var e, t, n;
    let r = s.Z.canFractionalPremiumUserUseOffer(),
        i = f(c.hs, r),
        a = f(c.RU, r),
        o = f(c.rB, r),
        l = f(c.ih, r),
        u = f(c.u6, r);
    return null != (n = null != (t = null != (e = null != u ? u : i) ? e : a) ? t : o) ? n : l;
}
