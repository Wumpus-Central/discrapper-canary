n.d(t, { Sw: () => u, VG: () => l, s7: () => o });
var r = n(575593),
    i = n(623373),
    e = n(375708);
function l(a) {
    if (null == a) return "";
    let t = e.intl.string(e.t.z7y5vF);
    return "baseVariantName" in a && null != a.baseVariantName && a.variantLabel !== t
        ? e.intl.formatToPlainString(e.t.BZN5k2, { baseVariantName: a.baseVariantName, variantLabel: a.variantLabel })
        : a.name;
}
function u(a) {
    if (null == a) return "";
    let t = e.intl.string(e.t.z7y5vF);
    return null != a.baseVariantName && a.variantLabel !== t
        ? e.intl.formatToPlainString(e.t.BZN5k2, { baseVariantName: a.baseVariantName, variantLabel: a.variantLabel })
        : a.name;
}
function o(a) {
    let t = l(a);
    switch ((0, i.YW)(a)) {
        case r.R.AVATAR_DECORATION:
            return e.intl.formatToPlainString(e.t.lvBzLi, { product: t });
        case r.R.PROFILE_EFFECT:
            return e.intl.formatToPlainString(e.t.eR7moP, { product: t });
        case r.R.NAMEPLATE:
            return e.intl.formatToPlainString(e.t.YFOwHj, { product: t });
        case r.R.PROFILE_FRAME:
            return e.intl.formatToPlainString(e.t.vov8LX, { product: t });
        default:
            return t;
    }
}
