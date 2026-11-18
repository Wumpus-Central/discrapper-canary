n.d(t, { L0: () => c, fP: () => m, g5: () => d });
var l = n(604913),
    i = n(306396),
    r = n(288106),
    a = n(65238),
    s = n(181170),
    o = n(669470),
    u = n(518865);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null != n) return n;
    switch (t?.tenantMetadata?.collectibles?.type) {
        case l.hE.COLLECT_AND_CLAIM:
            return (0, i.av)(e, t);
        case l.hE.TARGETED_OFFER:
            return (0, u.PY)(e, t);
        case l.hE.COLLECTION_SALE:
            return (function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                return null != (0, a.NN)(t) &&
                    t.rewardStatus === r.GM.EARNED &&
                    (0, s.us)(t, n) &&
                    t.skuIds?.includes(e.skuId) === !0
                    ? t
                    : null;
            })(e, t);
        case l.hE.COLLECTION_SEQUENCED_OFFER:
            return (0, o.yH)(e, t);
        default:
            return null;
    }
}
function d(e, t) {
    let n = t?.rewardConfig?.discount?.id;
    return null != n && e?.getDiscountIdIfExists() === String(n);
}
function m(e) {
    return e?.rewardConfig?.discount?.fiatEnabled === !0;
}
