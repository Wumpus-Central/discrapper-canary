r.d(t, { ST: () => u, TI: () => o, ty: () => c });
var n = r(17928),
    l = r(918467),
    s = r(223311),
    a = r(65238),
    i = r(652215);
function o() {
    let e = (0, s.A)(i.FYj),
        t = (0, n.bG)([l.A], () => l.A.getFetchState(i.FYj)),
        r = null == t || ("loading" === t && null == e);
    return null == (0, a.XF)(e) || e?.rewardStatus == null
        ? { promotion: null, isFetchingPromotion: r }
        : { promotion: e, isFetchingPromotion: r };
}
function u() {
    return o().promotion;
}
function c(e) {
    let t = u();
    return null == t || (0, a.XF)(t)?.collectionId !== e || (null != t.endsAt && t.endsAt <= new Date()) ? null : t;
}
