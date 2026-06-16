"use strict";
n.d(t, { TC: () => o, qq: () => l });
var i = n(575593),
    r = n(993408),
    s = n(772427);
n(872472);
var a = n(375708);
function o(e) {
    var t = e.name;
    switch (e.tenantMetadata?.collectibles?.type) {
        case i.R.AVATAR_DECORATION:
            return a.intl.formatToPlainString(a.t.lvBzLi, { product: t });
        case i.R.PROFILE_EFFECT:
            return a.intl.formatToPlainString(a.t.eR7moP, { product: t });
        case i.R.NAMEPLATE:
            return a.intl.formatToPlainString(a.t.YFOwHj, { product: t });
        default:
            return t;
    }
}
function l(e) {
    return (
        !(0, r.G0)(e) &&
        e.type !== i.R.EXTERNAL_SKU &&
        (e.type !== i.R.PROFILE_FRAME || !!(0, s.QW)("isWishlistableCollectiblesProduct"))
    );
}
