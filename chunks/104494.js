r.d(n, {
    Ng: function () {
        return _;
    },
    Wp: function () {
        return p;
    },
    kA: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(846519),
    l = r(594174),
    u = r(431),
    c = r(74538),
    d = r(474936);
function f(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function p(e, n) {
    var r;
    return null != e && new Set(null === (r = e.discount) || void 0 === r ? void 0 : r.plan_ids.map((e) => d.GP[e].skuId)).has(n);
}
function h(e, n) {
    let r = (0, o.e7)([u.Z], () => u.Z.getUserDiscountOffer(e)),
        [i, d] = a.useState(f(r)),
        p = (0, o.e7)([l.default], () => (0, c.I5)(l.default.getCurrentUser()));
    return (
        a.useEffect(() => {
            if (null == r || null == r.expires_at) return;
            let e = new s.V7(),
                n = () => {
                    let a = null != r.expires_at ? Date.parse(r.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(a, () => {
                            !i && f(r) ? d(!0) : n();
                        });
                };
            return n(), () => e.stop();
        }, [i, r]),
        i || (p && !n) ? null : r
    );
}
function _() {
    var e, n;
    let r = h(d.hs),
        i = h(d.RU),
        a = h(d.rB),
        o = h(d.ih);
    return null !== (n = null !== (e = null != r ? r : i) && void 0 !== e ? e : a) && void 0 !== n ? n : o;
}
