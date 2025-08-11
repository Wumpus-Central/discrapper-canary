n.d(t, { P: () => a });
var i = n(509545),
    r = n(212895),
    s = n(66683);
function a(e, t) {
    var n;
    let { enabled: a } = (0, s.k)({ location: "Subscription Details" }),
        l = i.Z.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
    if (null != l && a) {
        let n = (0, r.DE)(l, null == t ? void 0 : t.id, !1),
            i = n.length > 0 ? n[0] : e.currency;
        if (
            1 === n.length &&
            (null == t ? void 0 : t.id) === e.paymentSourceId &&
            (0, r.tD)(l.id, i, null == t ? void 0 : t.id)
        )
            return !0;
    }
    return !1;
}
