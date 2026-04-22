n.d(t, { Sw: () => a, VG: () => s, s7: () => o });
var l = n(575593),
    r = n(623373),
    i = n(985018);
let s = (e) => {
        if (null == e) return "";
        let t = i.intl.string(i.t.z7y5vF);
        return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t
            ? i.intl.formatToPlainString(i.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    a = (e) => {
        if (null == e) return "";
        let t = i.intl.string(i.t.z7y5vF);
        return null != e.baseVariantName && e.variantLabel !== t
            ? i.intl.formatToPlainString(i.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    o = (e) => {
        let t = s(e);
        switch ((0, r.YW)(e)) {
            case l.R.AVATAR_DECORATION:
                return i.intl.formatToPlainString(i.t.lvBzLi, { product: t });
            case l.R.PROFILE_EFFECT:
                return i.intl.formatToPlainString(i.t.eR7moP, { product: t });
            case l.R.NAMEPLATE:
                return i.intl.formatToPlainString(i.t.YFOwHj, { product: t });
            case l.R.PROFILE_FRAME:
                return i.intl.formatToPlainString(i.t.vov8LX, { product: t });
            default:
                return t;
        }
    };
