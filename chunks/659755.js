n.d(t, { Z: () => a });
var r = n(979554),
    l = n(786040);
let a = (e) => {
    let { skuId: t } = e,
        n = (0, l.LJ)(t);
    if (null == n) return null;
    let a = (0, l.rC)(n);
    return (
        a === r.Z.PROFILE_EFFECT ||
            a === r.Z.AVATAR_DECORATION ||
            a === r.Z.NAMEPLATE ||
            a === r.Z.BUNDLE ||
            r.Z.EXTERNAL_SKU,
        null
    );
};
