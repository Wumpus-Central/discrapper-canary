r.d(n, {
    Xr: function () {
        return s;
    }
});
var i = r(474936);
function a(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = Object.keys(i.GP).find((r) => {
            let a = i.GP[r];
            return null != a && a.skuId === i.Si.NONE && a.interval === e && a.intervalCount === n;
        });
    return null != r ? r : i.Xh.NONE_MONTH;
}
function o(e) {
    return e.find((e) => {
        let n = i.GP[e.planId];
        return null != n && null != n.premiumType;
    });
}
function s(e, n, r) {
    let s = o(e);
    if (null == s) {
        if (e.length > 0) {
            let a = i.GP[e[0].planId];
            (n = a.interval), (r = a.intervalCount);
        }
        return a(n, r);
    }
    return s.planId;
}
