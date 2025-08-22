n.d(t, { G: () => s });
var r = n(314794),
    i = n(442837),
    a = n(78839),
    o = n(388032);
let s = (e) => {
    let t = (0, i.e7)([a.Z], () => {
        let e = a.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? o.intl.string(o.t.NbveHB) : null,
          }
        : {
              isDisabled: !1,
              disabledReason: null,
          };
};
