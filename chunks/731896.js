n.d(t, { V: () => f });
var r = n(473749),
    i = n(442837),
    a = n(335131),
    o = n(597688),
    s = n(1870),
    l = n(873626),
    c = n(212161),
    u = n(365943),
    d = n(25251);
let f = (e) => {
    let t = (0, i.e7)([d.Z], () => d.Z.getProfileEffect(e)),
        n = (0, i.e7)([o.Z, s.Z], () => {
            if (null == e) return;
            let t = o.Z.getProduct(e);
            if ((0, c.H)(null == t ? void 0 : t.items[0])) return t.items[0];
            let n = s.Z.getPurchase(e);
            if ((0, c.H)(null == n ? void 0 : n.items[0])) return n.items[0];
        }),
        f = r.useMemo(
            () =>
                null != n
                    ? {
                          skuId: n.skuId,
                          config: n,
                      }
                    : t,
            [n, t],
        ),
        _ = null != e && null == f,
        p = (0, l.F)("useProfileEffectPreset");
    return (
        r.useEffect(() => {
            _ && (p ? (0, a.lW)(e) : (0, u.t)(!0));
        }, [_, e, p]),
        f
    );
};
