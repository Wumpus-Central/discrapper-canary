n.d(t, {
    g: () => q,
    i: () => W,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(515753),
    u = n(927359),
    d = n(975298),
    p = n(866419),
    f = n(111028),
    h = n(211644),
    m = n(266454),
    g = n(243778),
    _ = n(172416),
    b = n(594174),
    E = n(78839),
    O = n(431),
    I = n(626135),
    y = n(74538),
    v = n(502087),
    C = n(367074),
    S = n(695349),
    T = n(931118),
    N = n(963590),
    j = n(767870),
    P = n(331972),
    x = n(104494),
    A = n(639119),
    Z = n(655525),
    w = n(93237),
    L = n(484605),
    D = n(961892),
    R = n(924540),
    M = n(467460),
    k = n(474486),
    U = n(497334),
    G = n(119850),
    H = n(938736),
    B = n(227140),
    V = n(474936),
    F = n(981631),
    Y = n(921944),
    z = n(388032);
let W = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            r = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            i = (0, A.N)(),
            l = (0, x.Ng)(),
            s = (0, C.Vi)(),
            o = (0, G.V)(),
            c = (0, y.Qo)(n, r),
            u = (0, a.e7)([v.Z], () => v.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || s || null != o || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    q = (e) => {
        let t, n, v;
        var q,
            K,
            { selected: Q, nitroTabButtonRef: J, route: X, locationState: $ } = e,
            ee = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["selected", "nitroTabButtonRef", "route", "locationState"]);
        let et = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            en = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            { variant: er, hasNitroTabBadgeOfferReminder: ei } = (0, T.ZP)("PremiumDiscountEndingNotice"),
            el = (0, y.Qo)(et, en),
            ea = (0, y.M5)(et, V.PremiumTypes.TIER_2),
            es = (0, l.JA)("nitro"),
            eo = (0, A.N)(),
            ec = (0, x.Ng)(),
            eu = (0, P.$)(),
            ed = (0, S.W)(),
            ep = (0, C.Vi)(),
            ef = (0, w.HI)({ trialOffer: eo }),
            eh = (0, G.V)(),
            em = (0, w.eW)(),
            eg = (0, H.Kn)(),
            e_ = O.Z.getAlmostExpiringTrialOffers([V.Si.TIER_2]),
            eb = ei && e_.length > 0 && null != eo && null != eo.expires_at,
            eE = O.Z.getAlmostExpiringDiscountOffers([V.Si.TIER_2]),
            eO = ei && eE.length > 0 && null != ec && null != ec.expires_at,
            eI = null != eu && null != en && en.status === F.O0b.CANCELED,
            { fractionalState: ey, startsAt: ev, endsAt: eC } = (0, d.Z)({ forceFetch: !0 }),
            [eS, eT] = (0, g.bf)(ey !== V.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ev.valueOf(),
                cooldownDurationMs: 0,
            }),
            eN = (0, N.Z)({ location: "NitroTabButton" }),
            ej = (null == eo ? void 0 : eo.trial_id) === V.a7,
            eP = (0, p.YZ)("NitroTabButton"),
            ex = (0, _.bg)({ location: "NitroTabButton" }),
            eA = [],
            eZ = [];
        (0, h.Kl)() &&
            ((eO || (eb && !ej)) && eA.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            ep && eA.push(s.z.BOGO_2025_NITRO_TAB_BADGE),
            eN && eA.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ed && eA.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eP && eA.push(s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE),
            ex && eA.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [ew, eL] = (0, g.US)(eA, void 0, !0);
        eI && eZ.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eD, eR] = (0, g.US)(eZ, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === Q && null != ew && eL(Y.L.AUTO_DISMISS), !0 === Q && null != eD && eR(Y.L.AUTO_DISMISS);
            }, [eL, Q, ew, eR, eD]),
            !W({ selected: Q }))
        )
            return null;
        let eM = () => {
            eS === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eT(Y.L.TAKE_ACTION),
                I.default.track(F.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: v,
                    has_premium: el,
                }),
                null != ew && eL(Y.L.USER_DISMISS);
        };
        if (
            (ey === V.a$.NONE ||
                ed ||
                ((v = 7),
                (n = (0, r.jsx)(j.Z, {
                    className: "",
                    startsAt: ev,
                    endsAt: eC,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ep)
        )
            (n = (0, r.jsx)(Z.Z, {})), (v = 0);
        else if (ef) {
            let e = (0, w.$q)();
            (n = (0, r.jsx)(R._y, {
                isTabSelected: Q,
                badgeCopy: z.intl.string(z.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == eo ? void 0 : eo.expires_at) : null,
            })),
                (v = 4);
        } else
            ew === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ||
            ew === s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ||
            ew === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(R._y, {
                      isTabSelected: Q,
                      badgeCopy: z.intl.string(z.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (v = 2))
                : ed
                  ? ((n = (0, r.jsx)(U.S, { expiresAt: eC })), (v = 4))
                  : null != eh
                    ? ((n = (0, r.jsx)(B.Z, {
                          copy: eh,
                          showStars: !1,
                      })),
                      (v = 1))
                    : null != ec
                      ? ((n =
                            er === T.tE.OFFER_COUNTDOWN && eO
                                ? (0, r.jsx)(M.a, { discountOffer: ec })
                                : (0, r.jsx)(R.GN, {
                                      userDiscount: ec,
                                      isTabSelected: Q,
                                      includesAmountOff: !1,
                                      shouldShowOfferReminder: eO,
                                  })),
                        (v = 3))
                      : null == eo || ej
                        ? eg
                            ? ((n = (0, r.jsx)(k.l, {
                                  isSelected: Q,
                                  onSelect: () =>
                                      (0, m.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: Y.L.TAKE_ACTION,
                                      }),
                              })),
                              (v = 6))
                            : eI &&
                              ((n = (0, r.jsx)(D.Z, {
                                  isSelected: Q,
                                  discountOffer: eu,
                              })),
                              (v = 8))
                        : ((n =
                              er === T.tE.OFFER_COUNTDOWN && eb
                                  ? (0, r.jsx)(M.F, { trialOffer: eo })
                                  : (0, r.jsx)(R.$H, {
                                        trialOffer: eo,
                                        isTabSelected: Q,
                                        shouldShowOfferReminder: eb,
                                    })),
                          (v = 4));
        em &&
            ((n = (0, r.jsx)(R._y, {
                isTabSelected: Q,
                badgeCopy: z.intl.string(z.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (v = 4),
            (eM = () => {
                I.default.track(F.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: v,
                    has_premium: el,
                }),
                    (0, w.ZL)();
            }));
        let ek = (0, r.jsx)(
            c.Qj,
            ((q = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    listItemRef: J,
                    selected: Q,
                    route: X,
                    icon: o.SrA,
                    text: (0, r.jsx)(f.Z, { children: ea ? z.intl.string(z.t["4gwVVn"]) : z.intl.string(z.t.Ipxkog) }),
                    locationState: $,
                    onClick: eM,
                },
                ee,
                es,
            )),
            (K = K =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(K))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(K)).forEach(function (e) {
                      Object.defineProperty(q, e, Object.getOwnPropertyDescriptor(K, e));
                  }),
            q),
        );
        return eg
            ? (0, r.jsx)(k.C, { children: ek })
            : eI && eD === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === v
              ? (0, r.jsx)(L.Z, {
                    targetElementRef: J,
                    discountOffer: eu,
                    premiumSubscription: en,
                    dismissCoachmark: eR,
                    children: ek,
                })
              : ek;
    };
