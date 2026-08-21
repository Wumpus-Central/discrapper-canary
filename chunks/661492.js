r.d(e, { T: () => l, q: () => u });
var i = r(575593),
    n = r(993408),
    s = r(375708);
function l(t) {
    var e = t.name;
    switch (t.tenantMetadata?.collectibles?.type) {
        case i.R.AVATAR_DECORATION:
            return s.intl.formatToPlainString(s.t.lvBzLi, { product: e });
        case i.R.PROFILE_EFFECT:
            return s.intl.formatToPlainString(s.t.eR7moP, { product: e });
        case i.R.NAMEPLATE:
            return s.intl.formatToPlainString(s.t.YFOwHj, { product: e });
        default:
            return e;
    }
}
function u(t) {
    return !(0, n.G0)(t) && t.type !== i.R.EXTERNAL_SKU;
}
