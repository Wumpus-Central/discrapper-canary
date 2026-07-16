"use strict";
n.d(t, { T: () => l, q: () => o });
var i = n(575593),
    r = n(993408),
    a = n(772427),
    s = n(375708);
function l(e) {
    var t = e.name;
    switch (e.tenantMetadata?.collectibles?.type) {
        case i.R.AVATAR_DECORATION:
            return s.intl.formatToPlainString(s.t.lvBzLi, { product: t });
        case i.R.PROFILE_EFFECT:
            return s.intl.formatToPlainString(s.t.eR7moP, { product: t });
        case i.R.NAMEPLATE:
            return s.intl.formatToPlainString(s.t.YFOwHj, { product: t });
        default:
            return t;
    }
}
function o(e) {
    return (
        !(0, r.G0)(e) &&
        e.type !== i.R.EXTERNAL_SKU &&
        (e.type !== i.R.PROFILE_FRAME || !!(0, a.QW)("isWishlistableCollectiblesProduct"))
    );
}
