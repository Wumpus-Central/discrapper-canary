n.d(t, { default: () => h }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(645758),
    a = n(772707),
    l = n(403581),
    s = n(793574),
    c = n(688810),
    o = n(532794),
    d = n(920050),
    u = n(553081),
    p = n(976860),
    _ = n(652215),
    E = n(788868),
    f = n(985018);
function h(e) {
    let { onClose: t, multiplier: n, eligibleToReceivePremiumRewards: h, ...T } = e,
        { analyticsLocations: A } = (0, c.Ay)(s.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        b = h
            ? f.intl.format(f.t.NpUfej, { bonusOrbMultiplier: n })
            : f.intl.format(f.t["G5k+lZ"], { bonusOrbMultiplier: n });
    return (0, r.jsx)(a.k, {
        ...T,
        onClose: t,
        badge: { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: f.intl.string(f.t.F2MShO),
        subtitle: b,
        graphic: { type: "rive", rive: i.E, props: { artboard: "Torbs_Multiply" } },
        actions: h
            ? [
                  { text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: t },
                  {
                      text: f.intl.string(f.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          let e = _.BVt.NITRO_HOME,
                              n = new URLSearchParams({ [u.WU]: d.QUEST_ORB_MULTIPLIER_CARD_ID }).toString();
                          t(), (0, p.pX)(e.includes("?") ? `${e}&${n}` : `${e}?${n}`);
                      },
                  },
              ]
            : [
                  {
                      text: f.intl.string(f.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          t(), (0, p.pX)(_.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: f.intl.string(f.t.pj0XBN),
                      variant: "expressive",
                      icon: l.t,
                      onClick: () => {
                          t(), (0, o.A)({ subscriptionTier: E.pe.TIER_2, analyticsLocations: A });
                      },
                  },
              ],
    });
}
