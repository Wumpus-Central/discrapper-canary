"use strict";
n.d(t, { V: () => u });
var r = n(64700),
    i = n(311907),
    s = n(979286),
    a = n(590180),
    o = n(4227),
    l = n(203632);
let u = (e) => {
    let t = (0, i.bG)([a.A, o.A], () => {
            if (null == e) return;
            let t = a.A.getProduct(e);
            if ((0, l.C)(t?.items[0])) return t.items[0];
            let n = o.A.getPurchase(e);
            if ((0, l.C)(n?.items[0])) return n.items[0];
        }),
        n = r.useMemo(() => (null != t ? { skuId: t.skuId, config: t } : void 0), [t]),
        u = null != e && null == n;
    return (
        r.useEffect(() => {
            u && (0, s.RE)(e);
        }, [u, e]),
        n
    );
};
