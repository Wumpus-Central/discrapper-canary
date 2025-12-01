n.d(t, { V: () => u });
var r = n(473749),
    i = n(442837),
    a = n(335131),
    o = n(597688),
    s = n(1870),
    l = n(212161),
    c = n(25251);
let u = (e) => {
    let t = (0, i.e7)([c.Z], () => c.Z.getProfileEffect(e)),
        n = (0, i.e7)([o.Z, s.Z], () => {
            if (null == e) return;
            let t = o.Z.getProduct(e);
            if ((0, l.H)(null == t ? void 0 : t.items[0])) return t.items[0];
            let n = s.Z.getPurchase(e);
            if ((0, l.H)(null == n ? void 0 : n.items[0])) return n.items[0];
        }),
        u = r.useMemo(
            () =>
                null != n
                    ? {
                          skuId: n.skuId,
                          config: n,
                      }
                    : t,
            [n, t],
        ),
        d = null != e && null == u;
    return (
        r.useEffect(() => {
            d && (0, a.lW)(e);
        }, [d, e]),
        u
    );
};
