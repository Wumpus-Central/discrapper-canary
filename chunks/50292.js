n.d(i, { default: () => R });
var r = n(627968),
    e = n(122720),
    l = n(772707),
    o = n(403581),
    s = n(793574),
    a = n(688810),
    p = n(532794),
    c = n(976860),
    _ = n(975571),
    u = n(652215),
    k = n(788868),
    C = n(375708);
function R(t) {
    let { onClose: i, multiplier: n, eligibleToReceivePremiumRewards: R, ...b } = t,
        { analyticsLocations: d } = (0, a.Ay)(s.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        M = R
            ? C.intl.format(C.t.NpUfej, { bonusOrbMultiplier: n })
            : C.intl.format(C.t["G5k+lZ"], { bonusOrbMultiplier: n });
    return (0, r.jsx)(l.k, {
        ...b,
        onClose: i,
        gradientColor: "nitro-pink",
        title: C.intl.string(C.t.F2MShO),
        subtitle: M,
        graphic: { type: "rive", rive: e.E, props: { artboard: "Torbs_Multiply" } },
        actions: R
            ? [
                  { text: C.intl.string(C.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: C.intl.string(C.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          i(),
                              window.open(
                                  _.A.getArticleURL(u.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
                                  "_blank",
                              );
                      },
                  },
              ]
            : [
                  {
                      text: C.intl.string(C.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          i(), (0, c.pX)(u.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: C.intl.string(C.t.pj0XBN),
                      variant: "expressive",
                      icon: o.t,
                      onClick: () => {
                          i(), (0, p.A)({ subscriptionTier: k.pe.TIER_2, analyticsLocations: d });
                      },
                  },
              ],
    });
}
