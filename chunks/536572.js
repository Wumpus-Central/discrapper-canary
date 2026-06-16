"use strict";
n.d(t, { Sw: () => o, VG: () => a, s7: () => l });
var i = n(575593),
    r = n(623373),
    s = n(375708);
let a = (e) => {
        if (null == e) return "";
        let t = s.intl.string(s.t.z7y5vF);
        return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t
            ? s.intl.formatToPlainString(s.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    o = (e) => {
        if (null == e) return "";
        let t = s.intl.string(s.t.z7y5vF);
        return null != e.baseVariantName && e.variantLabel !== t
            ? s.intl.formatToPlainString(s.t.BZN5k2, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    l = (e) => {
        let t = a(e);
        switch ((0, r.YW)(e)) {
            case i.R.AVATAR_DECORATION:
                return s.intl.formatToPlainString(s.t.lvBzLi, { product: t });
            case i.R.PROFILE_EFFECT:
                return s.intl.formatToPlainString(s.t.eR7moP, { product: t });
            case i.R.NAMEPLATE:
                return s.intl.formatToPlainString(s.t.YFOwHj, { product: t });
            case i.R.PROFILE_FRAME:
                return s.intl.formatToPlainString(s.t.vov8LX, { product: t });
            default:
                return t;
        }
    };
