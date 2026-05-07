n.d(t, { Hu: () => o, S3: () => s, gU: () => u });
var l = n(702841),
    r = n(49960),
    i = n(67480),
    a = n(94420);
function u() {
    let { defaultFetchableSkuIds: e } = (0, r.P5)();
    return (0, l.cf)([i.A], () => {
        let t = {};
        for (let n of e) t[n] = i.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function s() {
    let e = (0, a.t4)((e) => e.selectedSkuId),
        t = u();
    return null != e ? t[e] : void 0;
}
function o() {
    let { defaultFetchableSkuIds: e } = (0, r.P5)();
    return (0, l.bG)([i.A], () => e.every((e) => !i.A.isFetching(e) && null != i.A.get(e)), [e]);
}
