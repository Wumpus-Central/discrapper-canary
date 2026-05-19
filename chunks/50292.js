r.d(i, { default: () => A });
var n = r(627968),
    e = r(64700),
    l = r(122720),
    s = r(772707),
    o = r(403581),
    a = r(793574),
    p = r(688810),
    c = r(235693),
    u = r(532794),
    _ = r(976860),
    b = r(975571),
    C = r(576761),
    M = r(652215),
    R = r(788868),
    d = r(375708),
    k = r(594387);
function A(t) {
    let { onClose: i, multiplier: r, orbMultiplierEligibility: A, ...E } = t,
        { analyticsLocations: O } = (0, p.Ay)(a.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        T = (0, C.B9)(A),
        g = A === C.MA.CREPE,
        L = A === C.MA.NITRO || A === C.MA.UPSELL,
        U = g ? d.intl.string(k.default.c5usUr) : d.intl.string(d.t.Csf5Ol),
        f = e.useMemo(
            () =>
                g
                    ? d.intl.format(k.default.UkrcSH, { bonusOrbMultiplier: r })
                    : T
                      ? d.intl.format(d.t.NpUfej, { bonusOrbMultiplier: r })
                      : d.intl.format(d.t["G5k+lZ"], { bonusOrbMultiplier: r }),
            [g, T, r],
        );
    return (0, n.jsx)(s.k, {
        ...E,
        onClose: i,
        gradientColor: L ? "nitro-pink" : "blue",
        title: U,
        subtitle: f,
        graphic: { type: "rive", rive: l.E, props: { artboard: "Torbs_Multiply" } },
        actions: T
            ? [
                  { text: d.intl.string(d.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: d.intl.string(d.t.hvVgAZ),
                      variant: "primary",
                      onClick: () => {
                          i(),
                              g
                                  ? (0, c.o)()
                                  : window.open(
                                        b.A.getArticleURL(M.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
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
                          i(), (0, _.pX)(M.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: d.intl.string(d.t.pj0XBN),
                      variant: "expressive",
                      icon: o.t,
                      onClick: () => {
                          i(), (0, u.A)({ subscriptionTier: R.pe.TIER_2, analyticsLocations: O });
                      },
                  },
              ],
    });
}
