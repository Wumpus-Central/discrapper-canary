var r = n(477900),
    e = n(582128),
    l = n(855986),
    o = n(772707),
    s = n(454153),
    a = n(403581),
    p = n(775602),
    u = n(793574),
    c = n(688810),
    d = n(744813),
    _ = n(778705),
    A = n(976860),
    M = n(975571),
    b = n(576761),
    R = n(652215),
    k = n(682901),
    C = n(792996),
    O = n(337091);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { onClose: i, multiplier: n, orbMultiplierEligibility: g, customSubtitle: E, ...T } = t,
                { analyticsLocations: f } = (0, c.Ay)(u.A.QUEST_ORB_MULTIPLIER_INFO_MODAL),
                I = (0, l.bG)([p.Ay], () => p.Ay.useReducedMotion),
                L = (0, b.B9)(g),
                U = g === b.MA.XBOX_GAME_PASS,
                v = g === b.MA.NITRO || g === b.MA.UPSELL,
                h = U ? C.intl.string(O.default.c5usUr) : C.intl.string(C.t.Csf5Ol),
                y = e.useMemo(
                    () =>
                        null != E
                            ? E
                            : U
                              ? C.intl.format(O.default.UkrcSH, { bonusOrbMultiplier: n })
                              : L
                                ? C.intl.format(C.t.NpUfej, { bonusOrbMultiplier: n })
                                : C.intl.format(C.t["G5k+lZ"], { bonusOrbMultiplier: n }),
                    [U, L, n, E],
                );
            return (0, r.jsx)(o.k, {
                ...T,
                onClose: i,
                gradientColor: v ? "nitro-pink" : "blue",
                title: h,
                subtitle: y,
                graphic: {
                    type: "rive",
                    rive: s.E,
                    props: { artboard: "Torbs_Multiply", dataBinding: { reducedMotion: I } },
                },
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
                              icon: a.NitroWheelIcon,
                              onClick: () => {
                                  (i(), (0, _.A)({ subscriptionTier: k.pe.TIER_2, analyticsLocations: f }));
                              },
                          },
                      ],
            });
        },
    },
);
