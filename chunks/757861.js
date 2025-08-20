n.d(t, { P: () => o });
var r = n(509545),
    i = n(212895),
    a = n(66683);
function o(e, t) {
    var n;
    let { enabled: o } = (0, a.k)({ location: "Subscription Details" }),
        s = r.Z.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
    if (null != s && o) {
        let n = (0, i.DE)(s, null == t ? void 0 : t.id, !1),
            r = n.length > 0 ? n[0] : e.currency;
        if (
            1 === n.length &&
            (null == t ? void 0 : t.id) === e.paymentSourceId &&
            (0, i.tD)(s.id, r, null == t ? void 0 : t.id)
        )
            return !0;
    }
    return !1;
}
