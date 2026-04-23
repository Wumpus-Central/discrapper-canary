"use strict";
n.d(t, { Hf: () => _, Hu: () => f, RR: () => d, S3: () => c, gU: () => u });
var r = n(64700),
    i = n(417597),
    s = n(156312),
    a = n(79387),
    o = n(67480),
    l = n(94420);
function u() {
    let { defaultFetchableSkuIds: e } = (0, s.P5)();
    return (0, i.cf)([o.A], () => {
        let t = {};
        for (let n of e) t[n] = o.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function c() {
    let e = (0, l.t4)((e) => e.selectedSkuId),
        t = u();
    return null != e ? t[e] : void 0;
}
function d() {
    let { defaultFetchableSkuIds: e } = (0, s.P5)();
    return (0, i.cf)([a.A], () => {
        let t = {};
        for (let n of e) t[n] = a.A.getPricesForSku(n) ?? void 0;
        return t;
    }, [e]);
}
function _() {
    let e = (0, l.t4)((e) => e.selectedSkuId),
        { paymentSourceId: t } = (0, s.P5)(),
        n = d();
    return r.useMemo(() => {
        if (null == e) return null;
        let r = n[e];
        return null == r ? null : (r[t ?? a.B] ?? r[a.B]);
    }, [e, t, n]);
}
function f() {
    let { defaultFetchableSkuIds: e } = (0, s.P5)();
    return (0, i.bG)([o.A], () => e.every((e) => !o.A.isFetching(e) && null != o.A.get(e)), [e]);
}
