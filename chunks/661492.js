"use strict";
n.d(t, { TC: () => o, qq: () => l });
var r = n(575593),
    i = n(993408),
    s = n(772427);
n(872472);
var a = n(985018);
function o(e) {
    var t = e.name;
    switch (e.tenantMetadata?.collectibles?.type) {
        case r.R.AVATAR_DECORATION:
            return a.intl.formatToPlainString(a.t.lvBzLi, { product: t });
        case r.R.PROFILE_EFFECT:
            return a.intl.formatToPlainString(a.t.eR7moP, { product: t });
        case r.R.NAMEPLATE:
            return a.intl.formatToPlainString(a.t.YFOwHj, { product: t });
        default:
            return t;
    }
}
function l(e) {
    return (
        !(0, i.G0)(e) &&
        e.type !== r.R.EXTERNAL_SKU &&
        (e.type !== r.R.PROFILE_FRAME || !!(0, s.QW)("isWishlistableCollectiblesProduct"))
    );
}
