s.d(e, { TC: () => a, qq: () => o });
var r = s(575593),
    i = s(993408),
    n = s(772427);
s(872472);
var l = s(985018);
function a(t) {
    var e = t.name;
    switch (t.tenantMetadata?.collectibles?.type) {
        case r.R.AVATAR_DECORATION:
            return l.intl.formatToPlainString(l.t.lvBzLi, { product: e });
        case r.R.PROFILE_EFFECT:
            return l.intl.formatToPlainString(l.t.eR7moP, { product: e });
        case r.R.NAMEPLATE:
            return l.intl.formatToPlainString(l.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function o(t) {
    return (
        !(0, i.G0)(t) &&
        t.type !== r.R.EXTERNAL_SKU &&
        (t.type !== r.R.PROFILE_FRAME || !!(0, n.QW)("isWishlistableCollectiblesProduct"))
    );
}
