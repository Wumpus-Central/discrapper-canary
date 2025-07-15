r.d(t, { G: () => a });
var n = r(314794),
    l = r(442837),
    i = r(78839),
    o = r(388032);
let a = (e) => {
    let t = (0, l.e7)([i.Z], () => {
        let e = i.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === n.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? o.intl.string(o.t.NbveHB) : null
          }
        : {
              isDisabled: !1,
              disabledReason: null
          };
};
