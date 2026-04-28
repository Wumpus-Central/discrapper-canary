e.d(n, { PJ: () => l, Se: () => c, Uo: () => d, bg: () => o, oC: () => I }), e(938796), e(284009);
var u = e(665260);
e(67480);
var r = e(927578),
    i = e(652215);
function l(t) {
    return (0, u.Lt)(t, i.d68.APPLICATION_GUILD_SUBSCRIPTION);
}
function o(t) {
    return (0, u.Lt)(t, i.d68.APPLICATION_USER_SUBSCRIPTION);
}
function c(t) {
    return !1 === t.available;
}
function d(t, n) {
    let e = n?.deleted ?? !1,
        u = null != n && c(n);
    return t.status === i.Dmq.CANCELED || e || u;
}
function s(t, n) {
    if (t.type === i.Puh.SUBSCRIPTION) {
        let e = n.getForSKU(t.id);
        if (e.length > 0) {
            let t = e[0];
            return (0, r.y8)(t.id).amount;
        }
    }
    return t.price?.amount ?? 0;
}
function I(t, n, e) {
    return t.slice().sort((t, u) => {
        let r = n.get(t.skuId),
            i = null != r ? s(r, e) : 0,
            l = n.get(u.skuId);
        return i - (null != l ? s(l, e) : 0);
    });
}
