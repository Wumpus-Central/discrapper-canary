r.d(t, { G: () => o });
var n = r(314794),
    i = r(442837),
    l = r(78839),
    a = r(388032);
let o = (e) => {
    let t = (0, i.e7)([l.ZP], () => {
        let e = l.ZP.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === n.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? a.intl.string(a.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
