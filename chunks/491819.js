n.d(t, {
    MY: () => o,
    Xr: () => a
});
var r = n(474936);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Object.keys(r.GP).find((n) => {
            let i = r.GP[n];
            return null != i && i.skuId === r.Si.NONE && i.interval === e && i.intervalCount === t;
        });
    return null != n ? n : r.Xh.NONE_MONTH;
}
function o(e) {
    return e.find((e) => {
        let t = r.GP[e.planId];
        return null != t && null != t.premiumType;
    });
}
function a(e, t, n) {
    let a = o(e);
    if (null == a) {
        if (e.length > 0) {
            let i = r.GP[e[0].planId];
            (t = i.interval), (n = i.intervalCount);
        }
        return i(t, n);
    }
    return a.planId;
}
