var r = e(288106),
    u = e(65238),
    l = e(993408),
    i = e(181170),
    o = e(248180);
function a(n) {
    return n?.rewardConfig?.action?.actionType === r.c$.NON_COMMERCE_ORBS_BACK;
}
function s(n) {
    return (
        null != n &&
        null != (0, u.d3)(n) &&
        n.rewardStatus !== r.GM.CONSUMED &&
        n.rewardStatus !== r.GM.NOT_ELIGIBLE &&
        (a(n) || null != (0, o.S)(n))
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
                : (t.appliesToAllSkus || t.skuIds?.[n.skuId] != null) && (0, i.us)(t, e) && s(t)
                  ? t
                  : null;
        },
    },
);
