n.d(t, {
    Ng: () => _,
    Wp: () => d,
    kA: () => c
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(846519),
    s = n(594174),
    o = n(431),
    l = n(74538),
    u = n(474936);
function c(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function d(e, t) {
    var n;
    return null != e && new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map((e) => u.GP[e].skuId)).has(t);
}
function f(e, t) {
    let n = (0, r.e7)([o.Z], () => o.Z.getUserDiscountOffer(e)),
        [u, d] = i.useState(c(n)),
        f = (0, r.e7)([s.default], () => (0, l.I5)(s.default.getCurrentUser()));
    return (
        i.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.V7(),
                t = () => {
                    let i = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(i, () => {
                            !u && c(n) ? d(!0) : t();
                        });
                };
            return t(), () => e.stop();
        }, [u, n]),
        u || (f && !t) ? null : n
    );
}
function _() {
    var e, t;
    let n = f(u.hs),
        i = f(u.RU),
        r = f(u.rB),
        a = f(u.ih);
    return null !== (t = null !== (e = null != n ? n : i) && void 0 !== e ? e : r) && void 0 !== t ? t : a;
}
