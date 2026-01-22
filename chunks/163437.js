n.d(t, {
    PJ: () => s,
    Se: () => l,
    Uo: () => c,
    bg: () => o,
    oC: () => d,
}),
    n(938796),
    n(638769),
    n(284009);
var r = n(665260);
n(67480);
var i = n(927578),
    a = n(652215);
function s(e) {
    return (0, r.Lt)(e, a.d68.APPLICATION_GUILD_SUBSCRIPTION);
}
function o(e) {
    return (0, r.Lt)(e, a.d68.APPLICATION_USER_SUBSCRIPTION);
}
function l(e) {
    return !1 === e.available;
}
function c(e, t) {
    var n;
    let r = null != (n = null == t ? void 0 : t.deleted) && n,
        i = null != t && l(t);
    return e.status === a.Dmq.CANCELED || r || i;
}
function u(e, t) {
    var n, r;
    if (e.type === a.Puh.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, i.y8)(e.id).amount;
        }
    }
    return null != (n = null == (r = e.price) ? void 0 : r.amount) ? n : 0;
}
function d(e, t, n) {
    return e.slice().sort((e, r) => {
        let i = t.get(e.skuId),
            a = null != i ? u(i, n) : 0,
            s = t.get(r.skuId);
        return a - (null != s ? u(s, n) : 0);
    });
}
