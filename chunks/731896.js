n.d(t, { V: () => f });
var r = n(647438),
    i = n(442837),
    a = n(335131),
    o = n(597688),
    s = n(1870),
    l = n(873626),
    c = n(212161),
    u = n(365943),
    d = n(25251);
let f = (e) => {
    var t;
    let n = (0, i.e7)([o.Z], () => {
            if (null == e) return;
            let t = o.Z.getProduct(e);
            if ((0, c.H)(null == t ? void 0 : t.items[0]))
                return {
                    id: t.items[0].id,
                    skuId: t.items[0].skuId,
                    config: t.items[0],
                };
        }),
        f = (0, i.e7)([s.Z], () => {
            if (null == e) return;
            let t = s.Z.getPurchase(e);
            if ((0, c.H)(null == t ? void 0 : t.items[0]))
                return {
                    id: t.items[0].id,
                    skuId: t.items[0].skuId,
                    config: t.items[0],
                };
        }),
        _ = (0, i.e7)([d.Z], () => d.Z.getProfileEffect(e)),
        p = null != (t = null != n ? n : f) ? t : _,
        h = null != e && null == p,
        m = (0, l.F)("useProfileEffectPreset");
    return (
        r.useEffect(() => {
            h && (m ? (0, a.lW)(e) : (0, u.t)(!0));
        }, [h, e, m]),
        p
    );
};
