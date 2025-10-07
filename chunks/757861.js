n.d(t, { P: () => a });
var r = n(509545),
    i = n(212895);
function a(e, t) {
    var n;
    let a = r.Z.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
    if (null != a) {
        let n = (0, i.DE)(a, null == t ? void 0 : t.id, !1),
            r = n.length > 0 ? n[0] : e.currency;
        if (
            1 === n.length &&
            (null == t ? void 0 : t.id) === e.paymentSourceId &&
            (0, i.tD)(a.id, r, null == t ? void 0 : t.id)
        )
            return !0;
    }
    return !1;
}
