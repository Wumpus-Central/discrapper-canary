n.d(t, { ST: () => u, TI: () => i, ty: () => c });
var r = n(17928),
    l = n(918467),
    s = n(223311),
    a = n(65238),
    o = n(652215);
function i() {
    let e = (0, s.A)(o.FYj),
        t = (0, r.bG)([l.A], () => l.A.getFetchState(o.FYj)),
        n = null == t || ("loading" === t && null == e);
    return null == (0, a.XF)(e) || e?.rewardStatus == null
        ? { promotion: null, isFetchingPromotion: n }
        : { promotion: e, isFetchingPromotion: n };
}
function u() {
    return i().promotion;
}
function c(e) {
    let t = u();
    return null == t || (0, a.XF)(t)?.collectionId !== e || (null != t.endsAt && t.endsAt <= new Date()) ? null : t;
}
