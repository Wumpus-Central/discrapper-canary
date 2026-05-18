r.d(i, { default: () => C });
var n = r(627968),
    e = r(64700),
    l = r(122720),
    s = r(772707),
    o = r(403581),
    a = r(793574),
    p = r(688810),
    c = r(532794),
    u = r(976860),
    M = r(975571),
    _ = r(576761),
    b = r(652215),
    R = r(788868),
    d = r(375708),
    k = r(594387);
function C(t) {
    let { onClose: i, multiplier: r, orbMultiplierEligibility: C, ...A } = t,
        { analyticsLocations: E } = (0, p.Ay)(a.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        O = (0, _.B9)(C),
        T = C === _.MA.CREPE,
        g = C === _.MA.NITRO || C === _.MA.UPSELL,
        L = T ? d.intl.string(k.default.c5usUr) : d.intl.string(d.t.F2MShO),
        U = e.useMemo(
            () =>
                T
                    ? d.intl.format(k.default.UkrcSH, { bonusOrbMultiplier: r })
                    : O
                      ? d.intl.format(d.t.NpUfej, { bonusOrbMultiplier: r })
                      : d.intl.format(d.t["G5k+lZ"], { bonusOrbMultiplier: r }),
            [T, O, r],
        );
    return (0, n.jsx)(s.k, {
        ...A,
        onClose: i,
        gradientColor: g ? "nitro-pink" : "blue",
        title: L,
        subtitle: U,
        graphic: { type: "rive", rive: l.E, props: { artboard: "Torbs_Multiply" } },
        actions: O
            ? [
                  { text: d.intl.string(d.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: d.intl.string(d.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          i(),
                              window.open(
                                  M.A.getArticleURL(b.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
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
                          i(), (0, u.pX)(b.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: d.intl.string(d.t.pj0XBN),
                      variant: "expressive",
                      icon: o.t,
                      onClick: () => {
                          i(), (0, c.A)({ subscriptionTier: R.pe.TIER_2, analyticsLocations: E });
                      },
                  },
              ],
    });
}
