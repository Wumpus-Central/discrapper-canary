n.d(t, {
    Ej: () => d,
    Jf: () => c,
    KK: () => o,
    KW: () => s,
    OL: () => l
}),
    n(997841),
    n(642613),
    n(512722),
    n(55563);
var r = n(630388),
    i = n(74538),
    a = n(981631);
function o(e) {
    return (0, r.yE)(e, a.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function s(e) {
    return (0, r.yE)(e, a.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function l(e) {
    return !1 === e.available;
}
function c(e, t) {
    var n;
    let r = null != (n = null == t ? void 0 : t.deleted) && n,
        i = null != t && l(t);
    return e.status === a.O0b.CANCELED || r || i;
}
function u(e, t) {
    var n, r;
    if (e.type === a.epS.SUBSCRIPTION) {
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
            a = null != i ? u(i, n) : 0,
            o = t.get(r.skuId);
        return a - (null != o ? u(o, n) : 0);
    });
}
