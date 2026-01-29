n.d(t, {
    u: () => a,
});
var r = n(788868),
    i = n(985018);
let a = (e) => {
    let { skuId: t } = e,
        n = i.intl.string(i.t.q9EGps);
    return null == t
        ? {
              title: n,
              gradientColor: void 0,
          }
        : t === r.pe.TIER_0 || t === r.pe.TIER_1
          ? {
                title: n,
                gradientColor: "nitro-green",
            }
          : t === r.pe.TIER_2
            ? {
                  title: n,
                  gradientColor: "nitro-pink",
              }
            : {
                  title: n,
              };
};
