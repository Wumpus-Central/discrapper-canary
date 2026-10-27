e.d(n, { FE: () => F, ST: () => s, TI: () => c, ty: () => d });
var r = e(17928),
    l = e(918467),
    u = e(288106),
    a = e(223311),
    i = e(65238),
    o = e(652215);
function c() {
    let t = (0, a.A)(o.FYj),
        n = (0, r.bG)([l.A], () => l.A.getFetchState(o.FYj)),
        e = null == n || ("loading" === n && null == t);
    return null == (0, i.XF)(t) || t?.rewardStatus == null
        ? { promotion: null, isFetchingPromotion: e }
        : { promotion: t, isFetchingPromotion: e };
}
function s() {
    return c().promotion;
}
function d(t) {
    let n = s();
    return null == n || (0, i.XF)(n)?.collectionId !== t || (null != n.endsAt && n.endsAt <= new Date()) ? null : n;
}
function F(t) {
    let n = s(),
        e = (0, r.bG)([l.A], () => "loading" === l.A.getFetchState(o.FYj));
    return t
        ? { promotion: e || n?.rewardStatus !== u.GM.EARNED ? null : n, isFetchingPromotion: e }
        : { promotion: null, isFetchingPromotion: !1 };
}
