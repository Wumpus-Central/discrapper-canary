r.d(i, { default: () => k });
var n = r(627968),
    e = r(158954),
    s = r(397927),
    a = r(793574),
    p = r(688810),
    o = r(532794),
    l = r(976860),
    c = r(780964),
    u = r(858897),
    b = r(652215),
    v = r(788868),
    d = r(985018);
function k(t) {
    let { onClose: i, multiplier: r, eligibleToReceivePremiumRewards: k, ...g } = t,
        { analyticsLocations: C } = (0, p.Ay)(a.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        _ = k
            ? d.intl.format(d.t.NpUfej, { bonusOrbMultiplier: r })
            : d.intl.format(d.t["G5k+lZ"], { bonusOrbMultiplier: r });
    return (0, n.jsx)(s.kpP, {
        ...g,
        onClose: i,
        badge: { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: d.intl.string(d.t.F2MShO),
        subtitle: _,
        graphic: { type: "rive", rive: e.E44, props: { artboard: "Torbs_Multiply" } },
        actions: k
            ? [
                  { text: d.intl.string(d.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: d.intl.string(d.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          i(), (0, l.pX)(b.BVt.NITRO_HOME);
                      },
                  },
              ]
            : [
                  {
                      text: d.intl.string(d.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          i(), (0, u.openUserSettings)(c.X.NITRO_PANEL);
                      },
                  },
                  {
                      text: d.intl.string(d.t.pj0XBN),
                      variant: "expressive",
                      icon: s.tvc,
                      onClick: () => {
                          i(), (0, o.A)({ subscriptionTier: v.pe.TIER_2, analyticsLocations: C });
                      },
                  },
              ],
    });
}
