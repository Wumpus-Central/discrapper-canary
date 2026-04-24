"use strict";
n.d(t, { PJ: () => s, Se: () => o, Uo: () => c, bg: () => l, oC: () => u }), n(938796), n(284009);
var i = n(665260);
n(67480);
var r = n(927578),
    a = n(652215);
function s(e) {
    return (0, i.Lt)(e, a.d68.APPLICATION_GUILD_SUBSCRIPTION);
}
function l(e) {
    return (0, i.Lt)(e, a.d68.APPLICATION_USER_SUBSCRIPTION);
}
function o(e) {
    return !1 === e.available;
}
function c(e, t) {
    let n = t?.deleted ?? !1,
        i = null != t && o(t);
    return e.status === a.Dmq.CANCELED || n || i;
}
function d(e, t) {
    if (e.type === a.Puh.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, r.y8)(e.id).amount;
        }
    }
    return e.price?.amount ?? 0;
}
function u(e, t, n) {
    return e.slice().sort((e, i) => {
        let r = t.get(e.skuId),
            a = null != r ? d(r, n) : 0,
            s = t.get(i.skuId);
        return a - (null != s ? d(s, n) : 0);
    });
}
