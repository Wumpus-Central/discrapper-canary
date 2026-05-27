i.d(e, { TC: () => a, qq: () => u });
var r = i(575593),
    l = i(993408),
    s = i(772427);
i(872472);
var n = i(375708);
function a(t) {
    var e = t.name;
    switch (t.tenantMetadata?.collectibles?.type) {
        case r.R.AVATAR_DECORATION:
            return n.intl.formatToPlainString(n.t.lvBzLi, { product: e });
        case r.R.PROFILE_EFFECT:
            return n.intl.formatToPlainString(n.t.eR7moP, { product: e });
        case r.R.NAMEPLATE:
            return n.intl.formatToPlainString(n.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function u(t) {
    return (
        !(0, l.G0)(t) &&
        t.type !== r.R.EXTERNAL_SKU &&
        (t.type !== r.R.PROFILE_FRAME || !!(0, s.QW)("isWishlistableCollectiblesProduct"))
    );
}
