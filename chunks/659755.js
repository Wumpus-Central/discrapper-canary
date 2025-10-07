n.d(t, { Z: () => s });
var r = n(979554),
    l = n(786040);
let s = (e) => {
    let { skuId: t } = e,
        n = (0, l.LJ)(t);
    if (null == n) return null;
    let s = (0, l.rC)(n);
    return (
        s === r.Z.PROFILE_EFFECT ||
            s === r.Z.AVATAR_DECORATION ||
            s === r.Z.NAMEPLATE ||
            s === r.Z.BUNDLE ||
            r.Z.EXTERNAL_SKU,
        null
    );
};
