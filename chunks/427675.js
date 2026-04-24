n.d(t, { Hf: () => A, Hu: () => f, RR: () => d, S3: () => c, gU: () => s });
var l = n(64700),
    r = n(702841),
    u = n(156312),
    i = n(79387),
    a = n(67480),
    o = n(94420);
function s() {
    let { defaultFetchableSkuIds: e } = (0, u.P5)();
    return (0, r.cf)([a.A], () => {
        let t = {};
        for (let n of e) t[n] = a.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function c() {
    let e = (0, o.t4)((e) => e.selectedSkuId),
        t = s();
    return null != e ? t[e] : void 0;
}
function d() {
    let { defaultFetchableSkuIds: e } = (0, u.P5)();
    return (0, r.cf)([i.A], () => {
        let t = {};
        for (let n of e) t[n] = i.A.getPricesForSku(n) ?? void 0;
        return t;
    }, [e]);
}
function A() {
    let e = (0, o.t4)((e) => e.selectedSkuId),
        { paymentSourceId: t } = (0, u.P5)(),
        n = d();
    return l.useMemo(() => {
        if (null == e) return null;
        let l = n[e];
        return null == l ? null : (l[t ?? i.B] ?? l[i.B]);
    }, [e, t, n]);
}
function f() {
    let { defaultFetchableSkuIds: e } = (0, u.P5)();
    return (0, r.bG)([a.A], () => e.every((e) => !a.A.isFetching(e) && null != a.A.get(e)), [e]);
}
