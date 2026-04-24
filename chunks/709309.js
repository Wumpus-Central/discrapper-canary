"use strict";
n.d(t, { A: () => o });
var l = n(64700),
    i = n(569926),
    s = n(655494),
    a = n(657934);
let r = [];
function o(e, t) {
    let n = (0, s.Hz)(e),
        { data: o } = (0, i.I)(n ? t : null);
    return (0, l.useMemo)(() => {
        if (!n || null == o) return r;
        let e = new Set(a.JM),
            t = new Map();
        for (let n of o.thirdPartySkus) {
            let l = n.distributor;
            null != n.id && e.has(l) && !t.has(l) && t.set(l, n.id);
        }
        return a.JM.flatMap((e) => {
            let n = t.get(e),
                l = a.T8[e];
            return null == n || null == l ? [] : [{ ctaConfig: l, skuId: n }];
        });
    }, [n, o]);
}
