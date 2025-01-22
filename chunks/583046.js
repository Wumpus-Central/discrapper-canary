r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(442837),
    a = r(509545),
    o = r(212895),
    s = r(474936),
    l = r(231338);
function u(e) {
    var n, r;
    let { activeSubscription: u, skuIDs: c, paymentSourceId: d, isGift: f } = e;
    c = c.filter((e) => e !== s.Si.NONE);
    let p = (0, i.e7)([a.Z], () => {
            let e = a.Z.getPlanIdsForSkus(c).filter((e) => !f || s.dJ.has(e));
            return e.length > 0 ? a.Z.get(e[0]) : null;
        }),
        h = null == p ? [] : (0, o.DE)(p.id, d, f),
        _ = null !== (r = null !== (n = h.find((e) => e === (null == u ? void 0 : u.currency))) && void 0 !== n ? n : h[0]) && void 0 !== r ? r : l.pK.USD;
    return {
        ...(0, o.gr)(_, null == p ? void 0 : p.id, d, f, c),
        currencies: h
    };
}
