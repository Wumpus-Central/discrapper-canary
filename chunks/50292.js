r.d(i, { default: () => v });
var n = r(627968),
    e = r(122720),
    a = r(772707),
    l = r(403581),
    o = r(793574),
    s = r(688810),
    p = r(31502),
    c = r(532794),
    u = r(976860),
    _ = r(975571),
    b = r(652215),
    d = r(788868),
    k = r(375708);
function v(t) {
    let { onClose: i, multiplier: r, eligibleToReceivePremiumRewards: v, ...C } = t,
        { analyticsLocations: M } = (0, s.Ay)(o.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        R = (0, p.l)("QuestOrbMultiplierInfoModal"),
        O = v
            ? k.intl.format(k.t.NpUfej, { bonusOrbMultiplier: r })
            : k.intl.format(k.t["G5k+lZ"], { bonusOrbMultiplier: r });
    return (0, n.jsx)(a.k, {
        ...C,
        onClose: i,
        badge: R ? void 0 : { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: k.intl.string(k.t.F2MShO),
        subtitle: O,
        graphic: { type: "rive", rive: e.E, props: { artboard: "Torbs_Multiply" } },
        actions: v
            ? [
                  { text: k.intl.string(k.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: k.intl.string(k.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          i(),
                              window.open(
                                  _.A.getArticleURL(b.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
                                  "_blank",
                              );
                      },
                  },
              ]
            : [
                  {
                      text: k.intl.string(k.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          i(), (0, u.pX)(b.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: k.intl.string(k.t.pj0XBN),
                      variant: "expressive",
                      icon: l.t,
                      onClick: () => {
                          i(), (0, c.A)({ subscriptionTier: d.pe.TIER_2, analyticsLocations: M });
                      },
                  },
              ],
    });
}
