n.d(t, {
    Ng: () => _,
    Wp: () => d,
    kA: () => u
}),
    n(388685);
var r = n(73800),
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
        [c, d] = r.useState(u(n)),
        f = (0, i.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser()));
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.V7(),
                t = () => {
                    let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(r, () => {
                            !c && u(n) ? d(!0) : t();
                        });
                };
            return t(), () => e.stop();
        }, [c, n]),
        c || (f && !t) ? null : n
    );
}
function _() {
    var e, t;
    let n = s.Z.canFractionalPremiumUserUseOffer(),
        r = f(c.hs, n),
        i = f(c.RU, n),
        a = f(c.rB, n),
        o = f(c.ih, n);
    return null != (t = null != (e = null != r ? r : i) ? e : a) ? t : o;
}
