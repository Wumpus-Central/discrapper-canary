n.d(t, { T: () => s, q: () => r });
var a = n(575593),
    i = n(993408),
    l = n(375708);
function s(e) {
    var t = e.name;
    switch (e.tenantMetadata?.collectibles?.type) {
        case a.R.AVATAR_DECORATION:
            return l.intl.formatToPlainString(l.t.lvBzLi, { product: t });
        case a.R.PROFILE_EFFECT:
            return l.intl.formatToPlainString(l.t.eR7moP, { product: t });
        case a.R.NAMEPLATE:
            return l.intl.formatToPlainString(l.t.YFOwHj, { product: t });
        default:
            return t;
    }
}
function r(e) {
    return !(0, i.G0)(e) && e.type !== a.R.EXTERNAL_SKU;
}
