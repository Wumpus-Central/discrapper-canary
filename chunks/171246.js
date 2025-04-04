n.d(t, {
    Ej: () => d,
    Jf: () => c,
    KK: () => a,
    KW: () => s,
    OL: () => l
}),
    n(789020),
    n(230036),
    n(512722),
    n(55563);
var r = n(630388),
    i = n(74538),
    o = n(981631);
function a(e) {
    return (0, r.yE)(e, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function s(e) {
    return (0, r.yE)(e, o.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function l(e) {
    return !1 === e.available;
}
function c(e, t) {
    var n;
    let r = null != (n = null == t ? void 0 : t.deleted) && n,
        i = null != t && l(t);
    return e.status === o.O0b.CANCELED || r || i;
}
function u(e, t) {
    var n, r;
    if (e.type === o.epS.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, i.aS)(e.id).amount;
        }
    }
    return null != (r = null == (n = e.price) ? void 0 : n.amount) ? r : 0;
}
function d(e, t, n) {
    return e.slice().sort((e, r) => {
        let i = t.get(e.skuId),
            o = null != i ? u(i, n) : 0,
            a = t.get(r.skuId);
        return o - (null != a ? u(a, n) : 0);
    });
}
