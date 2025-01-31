n.d(t, { Xr: () => s });
var i = n(474936);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Object.keys(i.GP).find((n) => {
            let r = i.GP[n];
            return null != r && r.skuId === i.Si.NONE && r.interval === e && r.intervalCount === t;
        });
    return null != n ? n : i.Xh.NONE_MONTH;
}
function a(e) {
    return e.find((e) => {
        let t = i.GP[e.planId];
        return null != t && null != t.premiumType;
    });
}
function s(e, t, n) {
    let s = a(e);
    if (null == s) {
        if (e.length > 0) {
            let r = i.GP[e[0].planId];
            (t = r.interval), (n = r.intervalCount);
        }
        return r(t, n);
    }
    return s.planId;
}
