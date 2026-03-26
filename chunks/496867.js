"use strict";
n.d(t, { V: () => c });
var r = n(64700),
    i = n(311907),
    s = n(979286),
    a = n(590180),
    o = n(4227),
    l = n(203632),
    u = n(920394);
let c = (e) => {
    let t = (0, i.bG)([u.A], () => u.A.getProfileEffect(e)),
        n = (0, i.bG)([a.A, o.A], () => {
            if (null == e) return;
            let t = a.A.getProduct(e);
            if ((0, l.C)(t?.items[0])) return t.items[0];
            let n = o.A.getPurchase(e);
            if ((0, l.C)(n?.items[0])) return n.items[0];
        }),
        c = r.useMemo(() => (null != n ? { skuId: n.skuId, config: n } : t), [n, t]),
        d = null != e && null == c;
    return (
        r.useEffect(() => {
            d && (0, s.RE)(e);
        }, [d, e]),
        c
    );
};
