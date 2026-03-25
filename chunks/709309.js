"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(885151),
    s = n(655494),
    a = n(657934);
let o = [];
function l(e, t) {
    let n = (0, s.Hz)(e),
        { data: l } = (0, i.k)(n ? t : null);
    return (0, r.useMemo)(() => {
        if (!n || null == l) return o;
        let e = new Set(a.JM),
            t = new Map();
        for (let n of l.thirdPartySkus) {
            let r = n.distributor;
            null != n.id && e.has(r) && !t.has(r) && t.set(r, n.id);
        }
        return a.JM.flatMap((e) => {
            let n = t.get(e),
                r = a.T8[e];
            return null == n || null == r ? [] : [{ ctaConfig: r, skuId: n }];
        });
    }, [n, l]);
}
