n.d(t, { Z: () => i });
var r = n(979554),
    l = n(786040);
let i = (e) => {
    let { skuId: t } = e,
        n = (0, l.LJ)(t);
    if (null == n) return null;
    let i = (0, l.rC)(n);
    return (
        i === r.Z.PROFILE_EFFECT ||
            i === r.Z.AVATAR_DECORATION ||
            i === r.Z.NAMEPLATE ||
            i === r.Z.BUNDLE ||
            r.Z.EXTERNAL_SKU,
        null
    );
};
