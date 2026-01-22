n.d(t, { I: () => o });
var r = n(334279),
    l = n(311907),
    a = n(166403),
    i = n(985018);
let o = (e) => {
    let t = (0, l.bG)([a.A], () => {
        let e = a.A.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0;
    });
    return e === r.j.PREMIUM_TIER_2_3_DAY
        ? {
              isDisabled: t,
              disabledReason: t ? i.intl.string(i.t.NbveHD) : null,
          }
        : {
              isDisabled: !1,
              disabledReason: null,
          };
};
