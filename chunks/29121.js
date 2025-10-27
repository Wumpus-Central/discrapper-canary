n.d(t, {
    To: () => s,
    ag: () => l,
    kd: () => o,
    zQ: () => c,
});
var r = n(979554),
    i = n(786040),
    a = n(388032);
let o = (e) => {
        if (null == e) return "";
        let t = a.intl.string(a.t.z7y5vF);
        return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t
            ? a.intl.formatToPlainString(a.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    s = (e) =>
        null == e
            ? ""
            : "baseVariantName" in e && null != e.baseVariantName
              ? e.baseVariantName
              : null != e.variants && e.variants.length > 0
                ? e.variants[0].baseVariantName
                : e.name,
    l = (e) => {
        if (null == e) return "";
        let t = a.intl.string(a.t.z7y5vF);
        return null != e.baseVariantName && e.variantLabel !== t
            ? a.intl.formatToPlainString(a.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    c = (e) => {
        let t = s(e);
        switch ((0, i.rC)(e)) {
            case r.Z.AVATAR_DECORATION:
                return a.intl.formatToPlainString(a.t.lvBzLi, { product: t });
            case r.Z.PROFILE_EFFECT:
                return a.intl.formatToPlainString(a.t.eR7moP, { product: t });
            case r.Z.NAMEPLATE:
                return a.intl.formatToPlainString(a.t.YFOwHj, { product: t });
            default:
                return t;
        }
    };
