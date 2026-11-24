var l = e(288106),
    u = e(65238),
    r = e(993408),
    i = e(181170),
    o = e(248180);
function a(n) {
    return n?.rewardConfig?.action?.actionType === l.c$.NON_COMMERCE_ORBS_BACK;
}
function d(n) {
    return (
        null != n &&
        null != (0, u.d3)(n) &&
        n.rewardStatus !== l.GM.CONSUMED &&
        n.rewardStatus !== l.GM.NOT_ELIGIBLE &&
        (a(n) || null != (0, o.G)(n))
    );
}
e.d(
    t,
    {},
    {
        IT: d,
        U2: function (n, t) {
            let e = null;
            for (let l of n ?? []) {
                let n = l.endsAt?.getTime();
                null != n &&
                    null != (0, u.d3)(l) &&
                    !t.has(l.id) &&
                    (e?.endsAt == null || n < e.endsAt.getTime()) &&
                    (e = l);
            }
            return e;
        },
        bY: function (n, t, e) {
            return (
                n?.find((n) => {
                    let l = (0, u.d3)(n);
                    return null != l && l.collectionId === t && (0, i.us)(n, e);
                }) ?? null
            );
        },
        xG: a,
        yH: function (n, t) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
            return (0, r.aw)(n) && !t.includeBundles
                ? null
                : (0, u.TX)(t, n.skuId) && (0, i.us)(t, e) && d(t)
                  ? t
                  : null;
        },
    },
);
