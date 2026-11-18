var u = e(288106),
    r = e(65238),
    l = e(993408),
    o = e(181170),
    i = e(248180);
function a(n) {
    return n?.rewardConfig?.action?.actionType === u.c$.NON_COMMERCE_ORBS_BACK;
}
function s(n) {
    return (
        null != n &&
        null != (0, r.d3)(n) &&
        n.rewardStatus !== u.GM.CONSUMED &&
        n.rewardStatus !== u.GM.NOT_ELIGIBLE &&
        (a(n) || null != (0, i.S)(n))
    );
}
e.d(
    t,
    {},
    {
        IT: s,
        xG: a,
        yH: function (n, t) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
            return (0, l.aw)(n) && !t.includeBundles
                ? null
                : (t.appliesToAllSkus || t.skuIds?.includes(n.skuId) === !0) && (0, o.us)(t, e) && s(t)
                  ? t
                  : null;
        },
    },
);
