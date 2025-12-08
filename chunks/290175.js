n.d(t, { G: () => s });
var a = n(314794),
    l = n(442837),
    r = n(78839),
    i = n(388032);
let s = (e) => {
    let t = (0, l.e7)([r.Z], () => {
        let e = r.Z.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === a.a.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? i.intl.string(i.t.NbveHD) : null,
          }
        : {
              isDisabled: !1,
              disabledReason: null,
          };
};
