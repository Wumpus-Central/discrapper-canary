n.d(t, { Z: () => l });
var i = n(442837),
    r = n(509545),
    a = n(212895),
    s = n(474936),
    o = n(231338);
function l(e) {
    var t, n;
    let { activeSubscription: l, skuIDs: u, paymentSourceId: c, isGift: d } = e;
    u = u.filter((e) => e !== s.Si.NONE);
    let f = (0, i.e7)([r.Z], () => {
            let e = r.Z.getPlanIdsForSkus(u).filter((e) => !d || s.dJ.has(e));
            return e.length > 0 ? r.Z.get(e[0]) : null;
        }),
        _ = null == f ? [] : (0, a.DE)(f.id, c, d),
        p = null !== (n = null !== (t = _.find((e) => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : _[0]) && void 0 !== n ? n : o.pK.USD;
    return {
        ...(0, a.gr)(p, null == f ? void 0 : f.id, c, d, u),
        currencies: _
    };
}
