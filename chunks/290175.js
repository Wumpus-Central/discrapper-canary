r.d(t, { G: () => o });
var n = r(314794),
    a = r(442837),
    l = r(78839),
    i = r(388032);
let o = (e) => {
    let t = (0, a.e7)([l.Z], () => {
        let e = l.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === n.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? i.intl.string(i.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
