r.d(e, { T: () => s, q: () => u });
var i = r(575593),
    n = r(993408),
    l = r(375708);
function s(t) {
    var e = t.name;
    switch (t.tenantMetadata?.collectibles?.type) {
        case i.R.AVATAR_DECORATION:
            return l.intl.formatToPlainString(l.t.lvBzLi, { product: e });
        case i.R.PROFILE_EFFECT:
            return l.intl.formatToPlainString(l.t.eR7moP, { product: e });
        case i.R.NAMEPLATE:
            return l.intl.formatToPlainString(l.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function u(t) {
    return !(0, n.G0)(t) && t.type !== i.R.EXTERNAL_SKU;
}
