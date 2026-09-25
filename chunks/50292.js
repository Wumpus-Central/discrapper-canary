n.d(i, { default: () => g });
var r = n(477900),
    e = n(582128),
    l = n(17928),
    o = n(772707),
    s = n(122720),
    a = n(403581),
    p = n(775602),
    u = n(793574),
    c = n(688810),
    d = n(479785),
    _ = n(75678),
    A = n(976860),
    M = n(975571),
    b = n(576761),
    R = n(652215),
    k = n(202541),
    C = n(375708),
    O = n(181666);
function g(t) {
    let { onClose: i, multiplier: n, orbMultiplierEligibility: g, customSubtitle: E, ...T } = t,
        { analyticsLocations: f } = (0, c.Ay)(u.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        L = (0, l.bG)([p.Ay], () => p.Ay.useReducedMotion),
        U = (0, b.B9)(g),
        v = g === b.MA.XBOX_GAME_PASS,
        I = g === b.MA.NITRO || g === b.MA.UPSELL,
        y = v ? C.intl.string(O.default.c5usUr) : C.intl.string(C.t.Csf5Ol),
        B = e.useMemo(
            () =>
                null != E
                    ? E
                    : v
                      ? C.intl.format(O.default.UkrcSH, { bonusOrbMultiplier: n })
                      : U
                        ? C.intl.format(C.t.NpUfej, { bonusOrbMultiplier: n })
                        : C.intl.format(C.t["G5k+lZ"], { bonusOrbMultiplier: n }),
            [v, U, n, E],
        );
    return (0, r.jsx)(o.k, {
        ...T,
        onClose: i,
        gradientColor: I ? "nitro-pink" : "blue",
        title: y,
        subtitle: B,
        graphic: { type: "rive", rive: s.E, props: { artboard: "Torbs_Multiply", dataBinding: { reducedMotion: L } } },
        actions: U
            ? [
                  { text: C.intl.string(C.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: C.intl.string(C.t.hvVgAZ),
                      variant: "primary",
                      onClick: function () {
                          (i(),
                              v
                                  ? (0, d.n)()
                                  : window.open(
                                        M.A.getArticleURL(R.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
                                        "_blank",
                                    ));
                      },
                  },
              ]
            : [
                  {
                      text: C.intl.string(C.t.PcTCB7),
                      variant: "secondary",
                      onClick: () => {
                          (i(), (0, A.pX)(R.BVt.NITRO_HOME));
                      },
                  },
                  {
                      text: C.intl.string(C.t.pj0XBN),
                      variant: "expressive",
                      icon: a.t,
                      onClick: () => {
                          (i(), (0, _.A)({ subscriptionTier: k.pe.TIER_2, analyticsLocations: f }));
                      },
                  },
              ],
    });
}
