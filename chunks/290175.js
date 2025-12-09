n.d(t, { G: () => s });
var a = n(314794),
    r = n(442837),
    i = n(78839),
    l = n(388032);
let s = (e) => {
    let t = (0, r.e7)([i.Z], () => {
        let e = i.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === a.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? l.intl.string(l.t.NbveHD) : null,
          }
        : {
              isDisabled: !1,
              disabledReason: null,
          };
};
