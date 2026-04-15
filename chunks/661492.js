"use strict";
n.d(t, { TC: () => l, qq: () => u });
var r = n(575593),
    i = n(993408),
    s = n(772427);
n(872472);
var a = n(985018);
function o(e, t) {
    switch (t) {
        case r.R.AVATAR_DECORATION:
            return a.intl.formatToPlainString(a.t.lvBzLi, { product: e });
        case r.R.PROFILE_EFFECT:
            return a.intl.formatToPlainString(a.t.eR7moP, { product: e });
        case r.R.NAMEPLATE:
            return a.intl.formatToPlainString(a.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function l(e) {
    return o(e.name, e.tenantMetadata?.collectibles?.type);
}
function u(e) {
    return (
        !(0, i.G0)(e) &&
        e.type !== r.R.EXTERNAL_SKU &&
        (e.type !== r.R.PROFILE_FRAME || !!(0, s.Q)("isWishlistableCollectiblesProduct"))
    );
}
