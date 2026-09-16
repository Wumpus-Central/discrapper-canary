n.d(i, { default: () => g });
var r = n(477900),
    e = n(582128),
    l = n(122720),
    o = n(17928),
    s = n(772707),
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
    let { onClose: i, multiplier: n, orbMultiplierEligibility: g, ...E } = t,
        { analyticsLocations: T } = (0, c.Ay)(u.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        f = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion),
        L = (0, b.B9)(g),
        U = g === b.MA.XBOX_GAME_PASS,
        v = g === b.MA.NITRO || g === b.MA.UPSELL,
        I = U ? C.intl.string(O.default.c5usUr) : C.intl.string(C.t.Csf5Ol),
        y = e.useMemo(
            () =>
                U
                    ? C.intl.format(O.default.UkrcSH, { bonusOrbMultiplier: n })
                    : L
                      ? C.intl.format(C.t.NpUfej, { bonusOrbMultiplier: n })
                      : C.intl.format(C.t["G5k+lZ"], { bonusOrbMultiplier: n }),
            [U, L, n],
        );
    return (0, r.jsx)(s.k, {
        ...E,
        onClose: i,
        gradientColor: v ? "nitro-pink" : "blue",
        title: I,
        subtitle: y,
        graphic: { type: "rive", rive: l.E, props: { artboard: "Torbs_Multiply", dataBinding: { reducedMotion: f } } },
        actions: L
            ? [
                  { text: C.intl.string(C.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: C.intl.string(C.t.hvVgAZ),
                      variant: "primary",
                      onClick: function () {
                          (i(),
                              U
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
                          (i(), (0, _.A)({ subscriptionTier: k.pe.TIER_2, analyticsLocations: T }));
                      },
                  },
              ],
    });
}
