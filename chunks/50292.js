n.d(i, { default: () => k });
var r = n(627968),
    e = n(158954),
    s = n(397927),
    a = n(793574),
    o = n(688810),
    p = n(532794),
    l = n(780964),
    c = n(840065),
    _ = n(975571),
    u = n(652215),
    b = n(788868),
    d = n(985018);
function k(t) {
    let { onClose: i, multiplier: n, eligibleToReceivePremiumRewards: k, ...v } = t,
        { analyticsLocations: C } = (0, o.Ay)(a.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        R = k
            ? d.intl.format(d.t.NpUfej, { bonusOrbMultiplier: n })
            : d.intl.format(d.t["G5k+lZ"], { bonusOrbMultiplier: n });
    return (0, r.jsx)(s.kpP, {
        ...v,
        onClose: i,
        badge: { type: "beta", variant: "expressive" },
        gradientColor: "nitro-pink",
        title: d.intl.string(d.t.F2MShO),
        subtitle: R,
        graphic: { type: "rive", rive: e.E44, props: { artboard: "Torbs_Multiply" } },
        actions: k
            ? [
                  { text: d.intl.string(d.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: d.intl.string(d.t.hvVgAZ),
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
                      text: d.intl.string(d.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          i(), (0, c.openUserSettings)(l.X.NITRO_PANEL);
                      },
                  },
                  {
                      text: d.intl.string(d.t.pj0XBN),
                      variant: "expressive",
                      icon: s.tvc,
                      onClick: () => {
                          i(), (0, p.A)({ subscriptionTier: b.pe.TIER_2, analyticsLocations: C });
                      },
                  },
              ],
    });
}
