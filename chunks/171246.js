n.d(t, {
    Ej: () => _,
    Jf: () => f,
    KK: () => c,
    KW: () => u,
    OL: () => d,
    bZ: () => l
}),
    n(789020),
    n(230036);
var r = n(512722),
    i = n.n(r);
n(55563);
var o = n(630388),
    a = n(74538),
    s = n(981631);
function l(e) {
    let t = e.items;
    return i()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}
function c(e) {
    return (0, o.yE)(e, s.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function u(e) {
    return (0, o.yE)(e, s.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function d(e) {
    return !1 === e.available;
}
function f(e, t) {
    var n;
    let r = null !== (n = null == t ? void 0 : t.deleted) && void 0 !== n && n,
        i = null != t && d(t);
    return e.status === s.O0b.CANCELED || r || i;
}
function p(e, t) {
    var n, r;
    if (e.type === s.epS.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, a.aS)(e.id).amount;
        }
    }
    return null !== (r = null === (n = e.price) || void 0 === n ? void 0 : n.amount) && void 0 !== r ? r : 0;
}
function _(e, t, n) {
    return e.slice().sort((e, r) => {
        let i = t.get(e.skuId),
            o = null != i ? p(i, n) : 0,
            a = t.get(r.skuId);
        return o - (null != a ? p(a, n) : 0);
    });
}
