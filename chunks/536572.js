r.d(t, { Sw: () => i, VG: () => s, s7: () => o });
var a = r(575593),
    n = r(623373),
    l = r(985018);
let s = (e) => {
        if (null == e) return "";
        let t = l.intl.string(l.t.z7y5vF);
        return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t
            ? l.intl.formatToPlainString(l.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    i = (e) => {
        if (null == e) return "";
        let t = l.intl.string(l.t.z7y5vF);
        return null != e.baseVariantName && e.variantLabel !== t
            ? l.intl.formatToPlainString(l.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    o = (e) => {
        let t = s(e);
        switch ((0, n.YW)(e)) {
            case a.R.AVATAR_DECORATION:
                return l.intl.formatToPlainString(l.t.lvBzLi, { product: t });
            case a.R.PROFILE_EFFECT:
                return l.intl.formatToPlainString(l.t.eR7moP, { product: t });
            case a.R.NAMEPLATE:
                return l.intl.formatToPlainString(l.t.YFOwHj, { product: t });
            case a.R.PROFILE_FRAME:
                return l.intl.formatToPlainString(l.t.vov8LX, { product: t });
            default:
                return t;
        }
    };
