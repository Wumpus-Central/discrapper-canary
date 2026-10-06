n.d(e, { T: () => l, q: () => s });
var a = n(575593),
    r = n(993408),
    i = n(375708);
function l(t) {
    var e = t.name;
    switch (t.tenantMetadata?.collectibles?.type) {
        case a.R.AVATAR_DECORATION:
            return i.intl.formatToPlainString(i.t.lvBzLi, { product: e });
        case a.R.PROFILE_EFFECT:
            return i.intl.formatToPlainString(i.t.eR7moP, { product: e });
        case a.R.NAMEPLATE:
            return i.intl.formatToPlainString(i.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function s(t) {
    return !(0, r.G0)(t) && t.type !== a.R.EXTERNAL_SKU;
}
