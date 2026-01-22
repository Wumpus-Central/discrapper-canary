n.d(t, { V: () => u });
var r = n(64700),
    i = n(311907),
    a = n(979286),
    s = n(590180),
    o = n(4227),
    l = n(203632),
    c = n(259248);
let u = (e) => {
    let t = (0, i.bG)([c.A], () => c.A.getProfileEffect(e)),
        n = (0, i.bG)([s.A, o.A], () => {
            if (null == e) return;
            let t = s.A.getProduct(e);
            if ((0, l.C)(null == t ? void 0 : t.items[0])) return t.items[0];
            let n = o.A.getPurchase(e);
            if ((0, l.C)(null == n ? void 0 : n.items[0])) return n.items[0];
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
            d && (0, a.RE)(e);
        }, [d, e]),
        u
    );
};
