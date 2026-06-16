"use strict";
n.d(t, { Hu: () => d, S3: () => c, gU: () => u });
var i = n(64700),
    r = n(702841),
    s = n(67480),
    a = n(211159),
    o = n(788868);
let l = () => {
    let e = (0, a.t4)((e) => e.skuIds);
    return i.useMemo(() => e.filter((e) => !o.oz.includes(e)), [JSON.stringify(e)]);
};
function u() {
    let e = l();
    return (0, r.cf)([s.A], () => {
        let t = {};
        for (let n of e) t[n] = s.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function c() {
    let e = (0, a.t4)((e) => e.selectedSkuId),
        t = u();
    return null != e ? t[e] : void 0;
}
function d() {
    let e = l();
    return (0, r.bG)([s.A], () => e.every((e) => !s.A.isFetching(e) && null != s.A.get(e)), [e]);
}
