n.d(t, {
    Ng: () => _,
    Wp: () => d,
    kA: () => u
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(846519),
    a = n(594174),
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
        f = (0, i.e7)([a.default], () => (0, l.I5)(a.default.getCurrentUser()));
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new o.V7(),
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
    let n = f(c.hs),
        r = f(c.RU),
        i = f(c.rB),
        o = f(c.ih);
    return null != (t = null != (e = null != n ? n : r) ? e : i) ? t : o;
}
