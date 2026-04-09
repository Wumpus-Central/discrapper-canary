r.d(e, { default: () => h }), r(323874), r(14289), r(35956);
var i = r(627968),
    n = r(158954),
    a = r(397927),
    l = r(793574),
    s = r(688810),
    o = r(532794),
    c = r(920050),
    p = r(553081),
    u = r(976860),
    d = r(652215),
    v = r(788868),
    f = r(985018);
function h(t) {
    let { onClose: e, multiplier: r, eligibleToReceivePremiumRewards: h, ..._ } = t,
        { analyticsLocations: C } = (0, s.Ay)(l.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        b = h
            ? f.intl.format(f.t.NpUfej, { bonusOrbMultiplier: r })
            : f.intl.format(f.t["G5k+lZ"], { bonusOrbMultiplier: r });
    return (0, i.jsx)(a.kpP, {
        ..._,
        onClose: e,
        badge: { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: f.intl.string(f.t.F2MShO),
        subtitle: b,
        graphic: { type: "rive", rive: n.E44, props: { artboard: "Torbs_Multiply" } },
        actions: h
            ? [
                  { text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: e },
                  {
                      text: f.intl.string(f.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          let t = d.BVt.NITRO_HOME,
                              r = new URLSearchParams({ [p.W]: c.QUEST_ORB_MULTIPLIER_CARD_ID }).toString();
                          e(), (0, u.pX)(t.includes("?") ? `${t}&${r}` : `${t}?${r}`);
                      },
                  },
              ]
            : [
                  {
                      text: f.intl.string(f.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          e(), (0, u.pX)(d.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: f.intl.string(f.t.pj0XBN),
                      variant: "expressive",
                      icon: a.tvc,
                      onClick: () => {
                          e(), (0, o.A)({ subscriptionTier: v.pe.TIER_2, analyticsLocations: C });
                      },
                  },
              ],
    });
}
