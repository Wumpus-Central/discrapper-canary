n.d(e, { T: () => l, q: () => s });
var a = n(575593),
    i = n(993408),
    r = n(375708);
function l(t) {
    var e = t.name;
    switch (t.tenantMetadata?.collectibles?.type) {
        case a.R.AVATAR_DECORATION:
            return r.intl.formatToPlainString(r.t.lvBzLi, { product: e });
        case a.R.PROFILE_EFFECT:
            return r.intl.formatToPlainString(r.t.eR7moP, { product: e });
        case a.R.NAMEPLATE:
            return r.intl.formatToPlainString(r.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function s(t) {
    return !(0, i.G0)(t) && t.type !== a.R.EXTERNAL_SKU;
}
