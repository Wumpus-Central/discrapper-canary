n.d(t, {
    g: () => $,
    i: () => X,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    a = n(79766),
    o = n(442837),
    s = n(704215),
    c = n(194983),
    u = n(481060),
    d = n(515753),
    p = n(927359),
    f = n(975298),
    g = n(211644),
    m = n(266454),
    h = n(243778),
    b = n(172416),
    _ = n(594174),
    E = n(78839),
    O = n(431),
    v = n(626135),
    y = n(74538),
    I = n(502087),
    C = n(367074),
    S = n(695349),
    T = n(931118),
    N = n(963590),
    j = n(767870),
    P = n(331972),
    x = n(622909),
    A = n(639119),
    Z = n(715130),
    w = n(260720),
    L = n(498920),
    R = n(655525),
    D = n(244989),
    M = n(675957),
    k = n(93237),
    U = n(484605),
    G = n(961892),
    H = n(924540),
    B = n(467460),
    V = n(474486),
    F = n(497334),
    z = n(119850),
    Y = n(938736),
    W = n(227140),
    q = n(474936),
    K = n(981631),
    Q = n(921944),
    J = n(388032);
let X = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            r = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            i = (0, A.N)(),
            l = (0, x.N)(),
            a = (0, C.Vi)(),
            s = (0, z.V)(),
            c = (0, y.Qo)(n, r),
            u = (0, o.e7)([I.Z], () => I.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    $ = (e) => {
        let t, n, I;
        var $,
            ee,
            et,
            { selected: en, nitroTabButtonRef: er, route: ei, locationState: el } = e,
            ea = (function (e, t) {
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
        let eo = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            es = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            { variant: ec, hasNitroTabBadgeOfferReminder: eu } = (0, T.ZP)("PremiumDiscountEndingNotice"),
            ed = (0, y.Qo)(eo, es),
            ep = (0, y.M5)(eo, q.PremiumTypes.TIER_2),
            ef = (0, l.JA)("nitro"),
            eg = (0, A.N)(),
            em = (0, x.N)(),
            eh = (0, P.$)(),
            eb = (0, S.W)(),
            e_ = (0, C.Vi)(),
            eE = (0, k.HI)({ trialOffer: eg }),
            eO = (0, w.QL)(),
            ev = (0, z.V)(),
            ey = (0, k.eW)(),
            eI = (0, M._h)(),
            eC = (0, Y.Kn)(),
            eS = O.Z.getAlmostExpiringTrialOffers([q.Si.TIER_2]),
            eT = eu && eS.length > 0 && null != eg && null != eg.expires_at,
            eN = O.Z.getAlmostExpiringDiscountOffers([q.Si.TIER_2]),
            ej = eu && eN.length > 0 && null != em && null != em.expires_at,
            eP = null != eh && null != es && es.status === K.O0b.CANCELED,
            { fractionalState: ex, startsAt: eA, endsAt: eZ } = (0, f.Z)({ forceFetch: !0 }),
            [ew, eL] = (0, h.bf)(ex !== q.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eA.valueOf(),
                cooldownDurationMs: 0,
            }),
            eR = (0, N.Z)({ location: "NitroTabButton" }),
            eD = (null == eg ? void 0 : eg.trial_id) === q.a7,
            eM = (0, b.bg)({ location: "NitroTabButton" }),
            ek = [],
            eU = [];
        (0, g.Kl)() &&
            ((ej || (eT && !eD)) && ek.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            eI && ek.push(s.z.RECURRING_3P_PROMOTION_POPOVER),
            e_ && ek.push(s.z.BOGO_2025_NITRO_TAB_BADGE),
            eR && ek.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eb && ek.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eM && ek.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [eG, eH] = (0, h.US)(ek, void 0, !0);
        eP && eU.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eO && eU.push(s.z.PREMIUM_GROUP_POPOVER);
        let [eB, eV] = (0, h.US)(eU, void 0, !0),
            eF = (0, Z.H)(a.I.PREMIUM_TAB),
            [ez, eY] = (0, h.TE)(
                null != eF && "premiumTab" === eF.properties.properties.oneofKind
                    ? s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (et = null == eF ? void 0 : eF.promotionId) ? et : "",
                void 0,
                !0,
            );
        if (
            (i.useEffect(() => {
                !0 === en && null != eG && eH(Q.L.AUTO_DISMISS),
                    !0 === en && null != eB && eV(Q.L.AUTO_DISMISS),
                    !0 === en && null != ez && eY(Q.L.AUTO_DISMISS);
            }, [eH, en, eG, eV, eB, ez, eY]),
            !X({ selected: en }))
        )
            return null;
        let eW = () => {
            ew === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eL(Q.L.TAKE_ACTION),
                v.default.track(K.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: I,
                    has_premium: ed,
                }),
                null != eG && eH(Q.L.USER_DISMISS),
                null != ez && eY(Q.L.USER_DISMISS);
        };
        if (
            (ex === q.a$.NONE ||
                eb ||
                ((I = 7),
                (n = (0, r.jsx)(j.Z, {
                    className: "",
                    startsAt: eA,
                    endsAt: eZ,
                    messageStyle: p.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            null != eF && "premiumTab" === eF.properties.properties.oneofKind)
        )
            (n = (0, r.jsx)(D.Z, {
                componentId: eF.id,
                badgeCopy: eF.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eF.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: ez !== s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (I = 9);
        else if (e_) (n = (0, r.jsx)(R.Z, {})), (I = 0);
        else if (eE) {
            let e = (0, k.$q)();
            (n = (0, r.jsx)(H._y, {
                isTabSelected: en,
                badgeCopy: J.intl.string(J.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == eg ? void 0 : eg.expires_at) : null,
            })),
                (I = 4);
        } else
            eG === s.z.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, r.jsx)(u.Cts, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (I = 4),
                  (eW = () => {
                      v.default.track(K.rMx.NITRO_TAB_VISITED, {
                          badge_decorator: I,
                          has_premium: ed,
                      }),
                          eH(Q.L.USER_DISMISS);
                  }))
                : eG === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eG === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(H._y, {
                        isTabSelected: en,
                        badgeCopy: J.intl.string(J.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (I = 2))
                  : eb
                    ? ((n = (0, r.jsx)(F.S, { expiresAt: eZ })), (I = 4))
                    : null != ev
                      ? ((n = (0, r.jsx)(W.Z, {
                            copy: ev,
                            showStars: !1,
                        })),
                        (I = 1))
                      : null != em
                        ? ((n =
                              ec === T.tE.OFFER_COUNTDOWN && ej
                                  ? (0, r.jsx)(B.a, { discountOffer: em })
                                  : (0, r.jsx)(H.GN, {
                                        userDiscount: em,
                                        isTabSelected: en,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: ej,
                                    })),
                          (I = 3))
                        : null == eg || eD
                          ? eC
                              ? ((n = (0, r.jsx)(V.l, {
                                    isSelected: en,
                                    onSelect: () =>
                                        (0, m.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: Q.L.TAKE_ACTION,
                                        }),
                                })),
                                (I = 6))
                              : eP &&
                                ((n = (0, r.jsx)(G.Z, {
                                    isSelected: en,
                                    discountOffer: eh,
                                })),
                                (I = 8))
                          : ((n =
                                ec === T.tE.OFFER_COUNTDOWN && eT
                                    ? (0, r.jsx)(B.F, { trialOffer: eg })
                                    : (0, r.jsx)(H.$H, {
                                          trialOffer: eg,
                                          isTabSelected: en,
                                          shouldShowOfferReminder: eT,
                                      })),
                            (I = 4));
        ey &&
            ((n = (0, r.jsx)(H._y, {
                isTabSelected: en,
                badgeCopy: J.intl.string(J.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (I = 4),
            (eW = () => {
                v.default.track(K.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: I,
                    has_premium: ed,
                }),
                    (0, k.ZL)();
            }));
        let eq = (0, r.jsx)(
            d.Qj,
            (($ = (function (e) {
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
                    listItemRef: er,
                    selected: en,
                    route: ei,
                    icon: u.SrA,
                    text: (0, r.jsx)(c.Z, { children: ep ? J.intl.string(J.t["4gwVVn"]) : J.intl.string(J.t.Ipxkog) }),
                    locationState: el,
                    onClick: eW,
                },
                ea,
                ef,
            )),
            (ee = ee =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties($, Object.getOwnPropertyDescriptors(ee))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(ee)).forEach(function (e) {
                      Object.defineProperty($, e, Object.getOwnPropertyDescriptor(ee, e));
                  }),
            $),
        );
        return eC
            ? (0, r.jsx)(V.C, { children: eq })
            : eP && eB === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === I
              ? (0, r.jsx)(U.Z, {
                    targetElementRef: er,
                    discountOffer: eh,
                    premiumSubscription: es,
                    dismissCoachmark: eV,
                    children: eq,
                })
              : eO && eB === s.z.PREMIUM_GROUP_POPOVER
                ? (0, r.jsx)(L.x, {
                      targetElementRef: er,
                      dismissPopover: eV,
                      children: eq,
                  })
                : eq;
    };
