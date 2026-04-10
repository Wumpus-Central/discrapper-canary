"use strict";
n.d(t, { TC: () => u, qq: () => d, x2: () => c });
var r = n(575593),
    i = n(993408),
    s = n(772427),
    a = n(872472),
    o = n(985018);
function l(e, t) {
    switch (t) {
        case r.R.AVATAR_DECORATION:
            return o.intl.formatToPlainString(o.t.lvBzLi, { product: e });
        case r.R.PROFILE_EFFECT:
            return o.intl.formatToPlainString(o.t.eR7moP, { product: e });
        case r.R.NAMEPLATE:
            return o.intl.formatToPlainString(o.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function u(e) {
    return l(e.name, e.tenantMetadata?.collectibles?.type);
}
function c(e) {
    let t = (0, a.L)(e) ? e.collectiblesItem?.type : void 0;
    return l(e.skuName, t);
}
function d(e) {
    return (
        !(0, i.G0)(e) &&
        e.type !== r.R.EXTERNAL_SKU &&
        (e.type !== r.R.PROFILE_FRAME || !!(0, s.Q)("isWishlistableCollectiblesProduct"))
    );
}
