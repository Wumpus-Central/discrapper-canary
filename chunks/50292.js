r.d(i, { default: () => k }), r(323874), r(14289), r(35956);
var n = r(627968),
    e = r(122720),
    a = r(772707),
    s = r(403581),
    l = r(793574),
    o = r(688810),
    p = r(31502),
    c = r(532794),
    u = r(920050),
    d = r(553081),
    _ = r(976860),
    b = r(652215),
    v = r(788868),
    O = r(985018);
function k(t) {
    let { onClose: i, multiplier: r, eligibleToReceivePremiumRewards: k, ...C } = t,
        { analyticsLocations: M } = (0, o.Ay)(l.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        T = (0, p.l)("QuestOrbMultiplierInfoModal"),
        g = k
            ? O.intl.format(O.t.NpUfej, { bonusOrbMultiplier: r })
            : O.intl.format(O.t["G5k+lZ"], { bonusOrbMultiplier: r });
    return (0, n.jsx)(a.k, {
        ...C,
        onClose: i,
        badge: T ? void 0 : { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: O.intl.string(O.t.F2MShO),
        subtitle: g,
        graphic: { type: "rive", rive: e.E, props: { artboard: "Torbs_Multiply" } },
        actions: k
            ? [
                  { text: O.intl.string(O.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: O.intl.string(O.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          let t = b.BVt.NITRO_HOME,
                              r = new URLSearchParams({ [d.WU]: u.QUEST_ORB_MULTIPLIER_CARD_ID }).toString();
                          i(), (0, _.pX)(t.includes("?") ? `${t}&${r}` : `${t}?${r}`);
                      },
                  },
              ]
            : [
                  {
                      text: O.intl.string(O.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          i(), (0, _.pX)(b.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: O.intl.string(O.t.pj0XBN),
                      variant: "expressive",
                      icon: s.t,
                      onClick: () => {
                          i(), (0, c.A)({ subscriptionTier: v.pe.TIER_2, analyticsLocations: M });
                      },
                  },
              ],
    });
}
