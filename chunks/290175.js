n.d(t, { G: () => a });
var r = n(314794),
    l = n(442837),
    i = n(78839),
    o = n(388032);
let a = (e) => {
    let t = (0, l.e7)([i.Z], () => {
        let e = i.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? o.intl.string(o.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
