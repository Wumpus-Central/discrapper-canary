n.d(i, { default: () => A });
var r = n(627968),
    e = n(64700),
    l = n(122720),
    o = n(772707),
    s = n(403581),
    a = n(793574),
    p = n(688810),
    c = n(235693),
    u = n(532794),
    _ = n(976860),
    b = n(975571),
    C = n(576761),
    M = n(652215),
    R = n(788868),
    d = n(375708),
    k = n(594387);
function A(t) {
    let { onClose: i, multiplier: n, orbMultiplierEligibility: A, ...E } = t,
        { analyticsLocations: O } = (0, p.Ay)(a.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        T = (0, C.B9)(A),
        f = A === C.MA.CREPE,
        g = A === C.MA.NITRO || A === C.MA.UPSELL,
        L = f ? d.intl.string(k.default.c5usUr) : d.intl.string(d.t.Csf5Ol),
        U = e.useMemo(
            () =>
                f
                    ? d.intl.format(k.default.UkrcSH, { bonusOrbMultiplier: n })
                    : T
                      ? d.intl.format(d.t.NpUfej, { bonusOrbMultiplier: n })
                      : d.intl.format(d.t["G5k+lZ"], { bonusOrbMultiplier: n }),
            [f, T, n],
        );
    return (0, r.jsx)(o.k, {
        ...E,
        onClose: i,
        gradientColor: g ? "nitro-pink" : "blue",
        title: L,
        subtitle: U,
        graphic: { type: "rive", rive: l.E, props: { artboard: "Torbs_Multiply" } },
        actions: T
            ? [
                  { text: d.intl.string(d.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: d.intl.string(d.t.hvVgAZ),
                      variant: "primary",
                      onClick: function () {
                          i(),
                              f
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
                      icon: s.t,
                      onClick: () => {
                          i(), (0, u.A)({ subscriptionTier: R.pe.TIER_2, analyticsLocations: O });
                      },
                  },
              ],
    });
}
