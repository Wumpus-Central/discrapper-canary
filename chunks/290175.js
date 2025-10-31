t.d(n, { G: () => o });
var r = t(314794),
    l = t(442837),
    i = t(78839),
    a = t(388032);
let o = (e) => {
    let n = (0, l.e7)([i.Z], () => {
        let e = i.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: n,
              disabledReason: n ? a.intl.string(a.t.NbveHD) : null,
          }
        : {
              isDisabled: !1,
              disabledReason: null,
          };
};
