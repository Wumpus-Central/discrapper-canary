n.d(t, { G: () => i });
var r = n(314794),
    l = n(442837),
    a = n(78839),
    o = n(388032);
let i = (e) => {
    let t = (0, l.e7)([a.ZP], () => {
        let e = a.ZP.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? o.NW.string(o.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
