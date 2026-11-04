var r = n(575593),
    i = n(623373),
    e = n(792996);
function l(t) {
    if (null == t) return "";
    let a = e.intl.string(e.t.z7y5vF);
    return "baseVariantName" in t && null != t.baseVariantName && t.variantLabel !== a
        ? e.intl.formatToPlainString(e.t.BZN5k2, { baseVariantName: t.baseVariantName, variantLabel: t.variantLabel })
        : t.name;
}
n.d(
    a,
    {},
    {
        Sw: function (t) {
            if (null == t) return "";
            let a = e.intl.string(e.t.z7y5vF);
            return null != t.baseVariantName && t.variantLabel !== a
                ? e.intl.formatToPlainString(e.t.BZN5k2, {
                      baseVariantName: t.baseVariantName,
                      variantLabel: t.variantLabel,
                  })
                : t.name;
        },
        VG: l,
        fw: function (t) {
            let a = l(t);
            return null != t && t.type === r.R.BUNDLE && t.items.length > 0
                ? e.intl.format(e.t.UTc0ny, { count: t.items.length, productName: a })
                : a;
        },
        s7: function (t) {
            let a = l(t);
            switch ((0, i.YW)(t)) {
                case r.R.AVATAR_DECORATION:
                    return e.intl.formatToPlainString(e.t.lvBzLi, { product: a });
                case r.R.PROFILE_EFFECT:
                    return e.intl.formatToPlainString(e.t.eR7moP, { product: a });
                case r.R.NAMEPLATE:
                    return e.intl.formatToPlainString(e.t.YFOwHj, { product: a });
                case r.R.PROFILE_FRAME:
                    return e.intl.formatToPlainString(e.t.vov8LX, { product: a });
                default:
                    return a;
            }
        },
    },
);
