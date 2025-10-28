n.d(t, {
    g: () => K,
    i: () => q,
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
    m = n(211644),
    h = n(266454),
    g = n(243778),
    _ = n(172416),
    b = n(594174),
    E = n(78839),
    O = n(431),
    I = n(626135),
    v = n(74538),
    y = n(502087),
    C = n(367074),
    S = n(695349),
    T = n(931118),
    N = n(963590),
    j = n(767870),
    P = n(331972),
    x = n(104494),
    A = n(639119),
    Z = n(655525),
    w = n(675957),
    L = n(93237),
    R = n(484605),
    D = n(961892),
    M = n(924540),
    k = n(467460),
    U = n(474486),
    G = n(497334),
    B = n(119850),
    H = n(938736),
    V = n(227140),
    F = n(474936),
    z = n(981631),
    Y = n(921944),
    W = n(388032);
let q = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            r = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            i = (0, A.N)(),
            l = (0, x.Ng)(),
            s = (0, C.Vi)(),
            o = (0, B.V)(),
            c = (0, v.Qo)(n, r),
            u = (0, a.e7)([y.Z], () => y.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || s || null != o || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    K = (e) => {
        let t, n, y;
        var K,
            Q,
            { selected: J, nitroTabButtonRef: X, route: $, locationState: ee } = e,
            et = (function (e, t) {
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
        let en = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            er = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            { variant: ei, hasNitroTabBadgeOfferReminder: el } = (0, T.ZP)("PremiumDiscountEndingNotice"),
            ea = (0, v.Qo)(en, er),
            es = (0, v.M5)(en, F.PremiumTypes.TIER_2),
            eo = (0, l.JA)("nitro"),
            ec = (0, A.N)(),
            eu = (0, x.Ng)(),
            ed = (0, P.$)(),
            ep = (0, S.W)(),
            ef = (0, C.Vi)(),
            em = (0, L.HI)({ trialOffer: ec }),
            eh = (0, B.V)(),
            eg = (0, L.eW)(),
            e_ = (0, w._h)(),
            eb = (0, H.Kn)(),
            eE = O.Z.getAlmostExpiringTrialOffers([F.Si.TIER_2]),
            eO = el && eE.length > 0 && null != ec && null != ec.expires_at,
            eI = O.Z.getAlmostExpiringDiscountOffers([F.Si.TIER_2]),
            ev = el && eI.length > 0 && null != eu && null != eu.expires_at,
            ey = null != ed && null != er && er.status === z.O0b.CANCELED,
            { fractionalState: eC, startsAt: eS, endsAt: eT } = (0, d.Z)({ forceFetch: !0 }),
            [eN, ej] = (0, g.bf)(eC !== F.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eS.valueOf(),
                cooldownDurationMs: 0,
            }),
            eP = (0, N.Z)({ location: "NitroTabButton" }),
            ex = (null == ec ? void 0 : ec.trial_id) === F.a7,
            eA = (0, p.YZ)("NitroTabButton"),
            eZ = (0, _.bg)({ location: "NitroTabButton" }),
            ew = [],
            eL = [];
        (0, m.Kl)() &&
            ((ev || (eO && !ex)) && ew.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            e_ && ew.push(s.z.RECURRING_3P_PROMOTION_POPOVER),
            ef && ew.push(s.z.BOGO_2025_NITRO_TAB_BADGE),
            eP && ew.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ep && ew.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eA && ew.push(s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE),
            eZ && ew.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [eR, eD] = (0, g.US)(ew, void 0, !0);
        ey && eL.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eM, ek] = (0, g.US)(eL, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === J && null != eR && eD(Y.L.AUTO_DISMISS), !0 === J && null != eM && ek(Y.L.AUTO_DISMISS);
            }, [eD, J, eR, ek, eM]),
            !q({ selected: J }))
        )
            return null;
        let eU = () => {
            eN === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ej(Y.L.TAKE_ACTION),
                I.default.track(z.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ea,
                }),
                null != eR && eD(Y.L.USER_DISMISS);
        };
        if (
            (eC === F.a$.NONE ||
                ep ||
                ((y = 7),
                (n = (0, r.jsx)(j.Z, {
                    className: "",
                    startsAt: eS,
                    endsAt: eT,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ef)
        )
            (n = (0, r.jsx)(Z.Z, {})), (y = 0);
        else if (em) {
            let e = (0, L.$q)();
            (n = (0, r.jsx)(M._y, {
                isTabSelected: J,
                badgeCopy: W.intl.string(W.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == ec ? void 0 : ec.expires_at) : null,
            })),
                (y = 4);
        } else
            eR === s.z.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, r.jsx)(o.Cts, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (y = 4),
                  (eU = () => {
                      I.default.track(z.rMx.NITRO_TAB_VISITED, {
                          badge_decorator: y,
                          has_premium: ea,
                      }),
                          eD(Y.L.USER_DISMISS);
                  }))
                : eR === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ||
                    eR === s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ||
                    eR === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(M._y, {
                        isTabSelected: J,
                        badgeCopy: W.intl.string(W.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (y = 2))
                  : ep
                    ? ((n = (0, r.jsx)(G.S, { expiresAt: eT })), (y = 4))
                    : null != eh
                      ? ((n = (0, r.jsx)(V.Z, {
                            copy: eh,
                            showStars: !1,
                        })),
                        (y = 1))
                      : null != eu
                        ? ((n =
                              ei === T.tE.OFFER_COUNTDOWN && ev
                                  ? (0, r.jsx)(k.a, { discountOffer: eu })
                                  : (0, r.jsx)(M.GN, {
                                        userDiscount: eu,
                                        isTabSelected: J,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: ev,
                                    })),
                          (y = 3))
                        : null == ec || ex
                          ? eb
                              ? ((n = (0, r.jsx)(U.l, {
                                    isSelected: J,
                                    onSelect: () =>
                                        (0, h.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: Y.L.TAKE_ACTION,
                                        }),
                                })),
                                (y = 6))
                              : ey &&
                                ((n = (0, r.jsx)(D.Z, {
                                    isSelected: J,
                                    discountOffer: ed,
                                })),
                                (y = 8))
                          : ((n =
                                ei === T.tE.OFFER_COUNTDOWN && eO
                                    ? (0, r.jsx)(k.F, { trialOffer: ec })
                                    : (0, r.jsx)(M.$H, {
                                          trialOffer: ec,
                                          isTabSelected: J,
                                          shouldShowOfferReminder: eO,
                                      })),
                            (y = 4));
        eg &&
            ((n = (0, r.jsx)(M._y, {
                isTabSelected: J,
                badgeCopy: W.intl.string(W.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (y = 4),
            (eU = () => {
                I.default.track(z.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ea,
                }),
                    (0, L.ZL)();
            }));
        let eG = (0, r.jsx)(
            c.Qj,
            ((K = (function (e) {
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
                    listItemRef: X,
                    selected: J,
                    route: $,
                    icon: o.SrA,
                    text: (0, r.jsx)(f.Z, { children: es ? W.intl.string(W.t["4gwVVn"]) : W.intl.string(W.t.Ipxkog) }),
                    locationState: ee,
                    onClick: eU,
                },
                et,
                eo,
            )),
            (Q = Q =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(K, Object.getOwnPropertyDescriptors(Q))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(Q)).forEach(function (e) {
                      Object.defineProperty(K, e, Object.getOwnPropertyDescriptor(Q, e));
                  }),
            K),
        );
        return eb
            ? (0, r.jsx)(U.C, { children: eG })
            : ey && eM === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y
              ? (0, r.jsx)(R.Z, {
                    targetElementRef: X,
                    discountOffer: ed,
                    premiumSubscription: er,
                    dismissCoachmark: ek,
                    children: eG,
                })
              : eG;
    };
