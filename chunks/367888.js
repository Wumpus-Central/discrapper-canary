"use strict";
n.d(t, { _1: () => i, a9: () => s });
var r = n(788868);
function i(e) {
    return e.find((e) => {
        let t = r.hd[e.planId];
        return null != t && null != t.premiumType;
    });
}
function s(e, t, n) {
    let s = i(e);
    if (null == s) {
        if (e.length > 0) {
            let i = r.hd[e[0].planId];
            (t = i.interval), (n = i.intervalCount);
        }
        return (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return (
                Object.keys(r.hd).find((n) => {
                    let i = r.hd[n];
                    return null != i && i.skuId === r.pe.NONE && i.interval === e && i.intervalCount === t;
                }) ?? r.gD.NONE_MONTH
            );
        })(t, n);
    }
    return s.planId;
}
