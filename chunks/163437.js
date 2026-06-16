"use strict";
n.d(t, { PJ: () => a, Se: () => l, Uo: () => u, bg: () => o, oC: () => d }), n(938796), n(284009);
var i = n(665260);
n(67480);
var r = n(428262),
    s = n(652215);
function a(e) {
    return (0, i.Lt)(e, s.d68.APPLICATION_GUILD_SUBSCRIPTION);
}
function o(e) {
    return (0, i.Lt)(e, s.d68.APPLICATION_USER_SUBSCRIPTION);
}
function l(e) {
    return !1 === e.available;
}
function u(e, t) {
    let n = t?.deleted ?? !1,
        i = null != t && l(t);
    return e.status === s.Dmq.CANCELED || n || i;
}
function c(e, t) {
    if (e.type === s.Puh.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, r.y8)(e.id).amount;
        }
    }
    return e.price?.amount ?? 0;
}
function d(e, t, n) {
    return e.slice().sort((e, i) => {
        let r = t.get(e.skuId),
            s = null != r ? c(r, n) : 0,
            a = t.get(i.skuId);
        return s - (null != a ? c(a, n) : 0);
    });
}
