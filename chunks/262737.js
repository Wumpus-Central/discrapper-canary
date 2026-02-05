"use strict";
n.d(t, { V: () => c });
var r = n(64700),
    i = n(311907),
    a = n(979286),
    s = n(590180),
    o = n(4227),
    l = n(203632),
    u = n(259248);
let c = (e) => {
    let t = (0, i.bG)([u.A], () => u.A.getProfileEffect(e)),
        n = (0, i.bG)([s.A, o.A], () => {
            if (null == e) return;
            let t = s.A.getProduct(e);
            if ((0, l.C)(t?.items[0])) return t.items[0];
            let n = o.A.getPurchase(e);
            if ((0, l.C)(n?.items[0])) return n.items[0];
        }),
        c = r.useMemo(() => (null != n ? { skuId: n.skuId, config: n } : t), [n, t]),
        d = null != e && null == c;
    return (
        r.useEffect(() => {
            d && (0, a.RE)(e);
        }, [d, e]),
        c
    );
};
