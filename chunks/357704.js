l.d(t, { K: () => a });
var n = l(64700),
    r = l(311907),
    s = l(4227);
function a(e, t) {
    let l = n.useMemo(() => {
            var l;
            return null != (l = null == e ? void 0 : e.products.filter((e) => e.skuId !== t).map((e) => e.skuId))
                ? l
                : [];
        }, [null == e ? void 0 : e.products, t]),
        a = (0, r.bG)([s.A], () => s.A.getPurchases(l));
    return {
        readyToClaim: n.useMemo(() => a.length === l.length, [a, l]),
        collectibleProductSkuIds: l,
        collectedSkuIds: a,
    };
}
