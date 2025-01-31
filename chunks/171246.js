n.d(t, {
    Ej: () => p,
    Jf: () => f,
    KK: () => u,
    KW: () => c,
    OL: () => d,
    bZ: () => l
}),
    n(789020);
var i = n(512722),
    r = n.n(i);
n(55563);
var a = n(630388),
    s = n(74538),
    o = n(981631);
function l(e) {
    let t = e.items;
    return r()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}
function u(e) {
    return (0, a.yE)(e, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function c(e) {
    return (0, a.yE)(e, o.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function d(e) {
    return !1 === e.available;
}
function f(e, t) {
    var n;
    let i = null !== (n = null == t ? void 0 : t.deleted) && void 0 !== n && n,
        r = null != t && d(t);
    return e.status === o.O0b.CANCELED || i || r;
}
function _(e, t) {
    var n, i;
    if (e.type === o.epS.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, s.aS)(e.id).amount;
        }
    }
    return null !== (i = null === (n = e.price) || void 0 === n ? void 0 : n.amount) && void 0 !== i ? i : 0;
}
function p(e, t, n) {
    return e.slice().sort((e, i) => {
        let r = t.get(e.skuId),
            a = null != r ? _(r, n) : 0,
            s = t.get(i.skuId);
        return a - (null != s ? _(s, n) : 0);
    });
}
