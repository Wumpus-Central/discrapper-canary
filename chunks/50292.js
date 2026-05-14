r.d(i, { default: () => E });
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
    _ = r(646917),
    b = r(576761),
    R = r(652215),
    d = r(788868),
    k = r(375708),
    C = r(594387);
function E(t) {
    let { onClose: i, multiplier: r, orbMultiplierEligibility: E, ...O } = t,
        { analyticsLocations: T } = (0, p.Ay)(a.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        g = (0, b.B9)(E),
        L = E === _.M.CREPE,
        U = E === _.M.NITRO || E === _.M.UPSELL,
        v = L ? k.intl.string(C.default.c5usUr) : k.intl.string(k.t.F2MShO),
        A = e.useMemo(
            () =>
                L
                    ? k.intl.format(C.default.UkrcSH, { bonusOrbMultiplier: r })
                    : g
                      ? k.intl.format(k.t.NpUfej, { bonusOrbMultiplier: r })
                      : k.intl.format(k.t["G5k+lZ"], { bonusOrbMultiplier: r }),
            [L, g, r],
        );
    return (0, n.jsx)(s.k, {
        ...O,
        onClose: i,
        gradientColor: U ? "nitro-pink" : "blue",
        title: v,
        subtitle: A,
        graphic: { type: "rive", rive: l.E, props: { artboard: "Torbs_Multiply" } },
        actions: g
            ? [
                  { text: k.intl.string(k.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: k.intl.string(k.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          i(),
                              window.open(
                                  M.A.getArticleURL(R.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
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
                          i(), (0, u.pX)(R.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: k.intl.string(k.t.pj0XBN),
                      variant: "expressive",
                      icon: o.t,
                      onClick: () => {
                          i(), (0, c.A)({ subscriptionTier: d.pe.TIER_2, analyticsLocations: T });
                      },
                  },
              ],
    });
}
