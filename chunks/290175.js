n.d(t, { G: () => a });
var r = n(314794),
    i = n(442837),
    o = n(78839),
    l = n(388032);
let a = (e) => {
    let t = (0, i.e7)([o.ZP], () => {
        let e = o.ZP.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? l.NW.string(l.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
