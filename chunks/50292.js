l.d(t, { default: () => g }), l(323874), l(14289), l(35956);
var n = l(627968),
    r = l(158954),
    i = l(397927),
    s = l(793574),
    u = l(688810),
    a = l(532794),
    c = l(920050),
    o = l(553081),
    d = l(976860),
    p = l(652215),
    m = l(788868),
    f = l(985018);
function g(e) {
    let { onClose: t, multiplier: l, eligibleToReceivePremiumRewards: g, ...A } = e,
        { analyticsLocations: _ } = (0, u.Ay)(s.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        E = g
            ? f.intl.format(f.t.NpUfej, { bonusOrbMultiplier: l })
            : f.intl.format(f.t["G5k+lZ"], { bonusOrbMultiplier: l });
    return (0, n.jsx)(i.kpP, {
        ...A,
        onClose: t,
        badge: { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: f.intl.string(f.t.F2MShO),
        subtitle: E,
        graphic: { type: "rive", rive: r.E44, props: { artboard: "Torbs_Multiply" } },
        actions: g
            ? [
                  { text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: t },
                  {
                      text: f.intl.string(f.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          let e = p.BVt.NITRO_HOME,
                              l = new URLSearchParams({ [o.WU]: c.QUEST_ORB_MULTIPLIER_CARD_ID }).toString();
                          t(), (0, d.pX)(e.includes("?") ? `${e}&${l}` : `${e}?${l}`);
                      },
                  },
              ]
            : [
                  {
                      text: f.intl.string(f.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          t(), (0, d.pX)(p.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: f.intl.string(f.t.pj0XBN),
                      variant: "expressive",
                      icon: i.tvc,
                      onClick: () => {
                          t(), (0, a.A)({ subscriptionTier: m.pe.TIER_2, analyticsLocations: _ });
                      },
                  },
              ],
    });
}
