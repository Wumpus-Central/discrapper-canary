n.d(t, { Hu: () => o, S3: () => s, gU: () => a });
var l = n(702841),
    r = n(834252),
    u = n(67480),
    i = n(94420);
function a() {
    let { defaultFetchableSkuIds: e } = (0, r.P5)();
    return (0, l.cf)([u.A], () => {
        let t = {};
        for (let n of e) t[n] = u.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function s() {
    let e = (0, i.t4)((e) => e.selectedSkuId),
        t = a();
    return null != e ? t[e] : void 0;
}
function o() {
    let { defaultFetchableSkuIds: e } = (0, r.P5)();
    return (0, l.bG)([u.A], () => e.every((e) => !u.A.isFetching(e) && null != u.A.get(e)), [e]);
}
