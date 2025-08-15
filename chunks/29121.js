n.d(t, {
    To: () => a,
    ag: () => o,
    kd: () => i,
});
var r = n(388032);
let i = (e) => {
        if (null == e) return "";
        let t = r.intl.string(r.t.z7y5vL);
        return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t
            ? r.intl.formatToPlainString(r.t.BZN5k5, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    },
    a = (e) =>
        null == e
            ? ""
            : "baseVariantName" in e && null != e.baseVariantName
              ? e.baseVariantName
              : null != e.variants && e.variants.length > 0
                ? e.variants[0].baseVariantName
                : e.name,
    o = (e) => {
        if (null == e) return "";
        let t = r.intl.string(r.t.z7y5vL);
        return null != e.baseVariantName && e.variantLabel !== t
            ? r.intl.formatToPlainString(r.t.BZN5k5, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel,
              })
            : e.name;
    };
