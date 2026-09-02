n.d(i, { default: () => O });
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
    b = n(532794),
    M = n(976860),
    R = n(975571),
    _ = n(576761),
    A = n(652215),
    C = n(202541),
    k = n(375708),
    E = n(181666);
function O(t) {
    let { onClose: i, multiplier: n, orbMultiplierEligibility: O, ...g } = t,
        { analyticsLocations: T } = (0, c.Ay)(u.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
        f = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion),
        L = (0, _.B9)(O),
        U = O === _.MA.CREPE,
        v = O === _.MA.NITRO || O === _.MA.UPSELL,
        I = U ? k.intl.string(E.default.c5usUr) : k.intl.string(k.t.Csf5Ol),
        y = e.useMemo(
            () =>
                U
                    ? k.intl.format(E.default.UkrcSH, { bonusOrbMultiplier: n })
                    : L
                      ? k.intl.format(k.t.NpUfej, { bonusOrbMultiplier: n })
                      : k.intl.format(k.t["G5k+lZ"], { bonusOrbMultiplier: n }),
            [U, L, n],
        );
    return (0, r.jsx)(s.k, {
        ...g,
        onClose: i,
        gradientColor: v ? "nitro-pink" : "blue",
        title: I,
        subtitle: y,
        graphic: { type: "rive", rive: l.E, props: { artboard: "Torbs_Multiply", dataBinding: { reducedMotion: f } } },
        actions: L
            ? [
                  { text: k.intl.string(k.t.cpT0Cq), variant: "secondary", onClick: i },
                  {
                      text: k.intl.string(k.t.hvVgAZ),
                      variant: "primary",
                      onClick: function () {
                          i(),
                              U
                                  ? (0, d.n)()
                                  : window.open(
                                        R.A.getArticleURL(A.MVz.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE),
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
                          i(), (0, M.pX)(A.BVt.NITRO_HOME);
                      },
                  },
                  {
                      text: k.intl.string(k.t.pj0XBN),
                      variant: "expressive",
                      icon: a.t,
                      onClick: () => {
                          i(), (0, b.A)({ subscriptionTier: C.pe.TIER_2, analyticsLocations: T });
                      },
                  },
              ],
    });
}
