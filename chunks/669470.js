var l = e(288106),
    r = e(65238),
    u = e(993408),
    i = e(181170),
    o = e(248180);
function a(n) {
    return n?.rewardConfig?.action?.actionType === l.c$.NON_COMMERCE_ORBS_BACK;
}
function s(n) {
    return (
        null != n &&
        null != (0, r.d3)(n) &&
        n.rewardStatus !== l.GM.CONSUMED &&
        n.rewardStatus !== l.GM.NOT_ELIGIBLE &&
        (a(n) || null != (0, o.G)(n))
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
            return (0, u.aw)(n) && !t.includeBundles
                ? null
                : (0, r.TX)(t, n.skuId) && (0, i.us)(t, e) && s(t)
                  ? t
                  : null;
        },
    },
);
