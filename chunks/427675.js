n.d(t, { Hf: () => p, Hu: () => h, RR: () => d, S3: () => c, gU: () => o });
var i = n(64700),
    r = n(702841),
    l = n(156312),
    s = n(79387),
    a = n(67480),
    u = n(94420);
function o() {
    let { defaultFetchableSkuIds: e } = (0, l.P5)();
    return (0, r.cf)([a.A], () => {
        let t = {};
        for (let n of e) t[n] = a.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function c() {
    let e = (0, u.t4)((e) => e.selectedSkuId),
        t = o();
    return null != e ? t[e] : void 0;
}
function d() {
    let { defaultFetchableSkuIds: e } = (0, l.P5)();
    return (0, r.cf)([s.A], () => {
        let t = {};
        for (let n of e) t[n] = s.A.getPricesForSku(n) ?? void 0;
        return t;
    }, [e]);
}
function p() {
    let e = (0, u.t4)((e) => e.selectedSkuId),
        { paymentSourceId: t } = (0, l.P5)(),
        n = d();
    return i.useMemo(() => {
        if (null == e) return null;
        let i = n[e];
        return null == i ? null : (i[t ?? s.B] ?? i[s.B]);
    }, [e, t, n]);
}
function h() {
    let { defaultFetchableSkuIds: e } = (0, l.P5)();
    return (0, r.bG)([a.A], () => e.every((e) => !a.A.isFetching(e) && null != a.A.get(e)), [e]);
}
