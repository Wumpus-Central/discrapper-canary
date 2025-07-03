n.d(t, { G: () => o });
var r = n(314794),
    l = n(442837),
    i = n(78839),
    a = n(388032);
let o = (e) => {
    let t = (0, l.e7)([i.Z], () => {
        let e = i.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? a.intl.string(a.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
