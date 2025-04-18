n.d(t, { G: () => o });
var r = n(314794),
    l = n(442837),
    a = n(78839),
    i = n(388032);
let o = (e) => {
    let t = (0, l.e7)([a.ZP], () => {
        let e = a.ZP.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? i.NW.string(i.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
