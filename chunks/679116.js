t.d(e, { s: () => c, L: () => o });
var r = t(278416),
    l = t(403581),
    a = t(604913),
    u = t(65238),
    i = t(518865);
function o(n, e) {
    switch (e?.tenantMetadata?.collectibles?.type) {
        case a.hE.COLLECT_AND_CLAIM:
            let t;
            return null != (t = (0, u.XF)(e)) && null != e.rewardStatus && n.categorySkuId === t.collectionId
                ? e
                : null;
        case a.hE.TARGETED_OFFER:
            return (0, i.PY)(n, e);
        default:
            return null;
    }
}
function c(n) {
    switch (n) {
        case a.cR.TAG:
            return r.TagIcon;
        case a.cR.NITRO:
            return l.t;
        default:
            return null;
    }
}
