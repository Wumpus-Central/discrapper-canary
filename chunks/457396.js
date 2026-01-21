n.d(t, {
    g: () => ei,
    i: () => er,
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
    h = n(266454),
    m = n(243778),
    b = n(468208),
    E = n(165299),
    _ = n(594174),
    O = n(78839),
    I = n(431),
    v = n(626135),
    y = n(74538),
    C = n(502087),
    S = n(367074),
    T = n(695349),
    N = n(931118),
    j = n(963590),
    x = n(767870),
    P = n(331972),
    A = n(622909),
    Z = n(639119),
    w = n(715130),
    L = n(260720),
    R = n(498920),
    D = n(655525),
    M = n(244989),
    k = n(675957),
    U = n(93237),
    G = n(375527),
    H = n(446466),
    B = n(171558),
    V = n(484605),
    F = n(961892),
    z = n(924540),
    Y = n(467460),
    W = n(474486),
    K = n(63107),
    q = n(497334),
    Q = n(119850),
    J = n(938736),
    X = n(227140),
    $ = n(474936),
    ee = n(981631),
    et = n(921944),
    en = n(388032);
let er = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            r = (0, o.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
            i = (0, Z.N)(),
            l = (0, A.N)(),
            a = (0, S.Vi)(),
            s = (0, Q.V)(),
            c = (0, y.Qo)(n, r),
            u = (0, o.e7)([C.Z], () => C.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    ei = (e) => {
        let t, n, C;
        var ei,
            el,
            ea,
            { selected: eo, nitroTabButtonRef: es, route: ec, locationState: eu } = e,
            ed = (function (e, t) {
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
        let ep = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            ef = (0, o.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
            { variant: eg, hasNitroTabBadgeOfferReminder: eh } = (0, N.ZP)("PremiumDiscountEndingNotice"),
            em = (0, y.Qo)(ep, ef),
            eb = (0, y.M5)(ep, $.PremiumTypes.TIER_2),
            eE = (0, l.JA)("nitro"),
            e_ = (0, Z.N)(),
            eO = (0, A.N)(),
            eI = (0, P.$)(),
            ev = (0, T.W)(),
            ey = (0, S.Vi)(),
            eC = (0, U.HI)({ trialOffer: e_ }),
            eS = (0, L.QL)(),
            eT = (0, Q.V)(),
            eN = (0, U.eW)(),
            ej = (0, k._h)(),
            { isInTreatment: ex } = (0, G.er)("NitroTabButton"),
            eP = !(0, y.I5)(ep) && ex,
            eA = (0, o.e7)([b.Z], () => b.Z.getRewardForProgram(E.f.NITRO)),
            eZ = null == eA ? void 0 : eA.last_granted_reward,
            ew = eb && ex && null != eZ,
            eL = (0, J.Kn)(),
            eR = I.Z.getAlmostExpiringTrialOffers([$.Si.TIER_2]),
            eD = eh && eR.length > 0 && null != e_ && null != e_.expires_at,
            eM = I.Z.getAlmostExpiringDiscountOffers([$.Si.TIER_2]),
            ek = eh && eM.length > 0 && null != eO && null != eO.expires_at,
            eU = null != eI && null != ef && ef.status === ee.O0b.CANCELED,
            { fractionalState: eG, startsAt: eH, endsAt: eB } = (0, f.Z)({ forceFetch: !0 }),
            [eV, eF] = (0, m.bf)(eG !== $.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eH.valueOf(),
                cooldownDurationMs: 0,
            }),
            ez = (0, j.Z)({ location: "NitroTabButton" }),
            eY = (null == e_ ? void 0 : e_.trial_id) === $.a7,
            eW = [],
            eK = [];
        (0, g.Kl)() &&
            ((ek || (eD && !eY)) && eW.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            ej && eW.push(s.z.RECURRING_3P_PROMOTION_POPOVER),
            ey && eW.push(s.z.BOGO_2025_NITRO_TAB_BADGE),
            ez && eW.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ev && eW.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eq, eQ] = (0, m.US)(eW, void 0, !0);
        eU && eK.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eS && eK.push(s.z.PREMIUM_GROUP_POPOVER),
            eP && eK.push(s.z.PREMIUM_ORBS_UPSELL_POPOVER);
        let [eJ, eX] = (0, m.US)(eK, void 0, !0),
            e$ = (0, w.H)(a.I.PREMIUM_TAB),
            e0 = (0, w.H)(a.I.PREMIUM_TAB_TOOLTIP),
            [e1, e4] = (0, m.TE)(
                null != e$ && "premiumTab" === e$.properties.properties.oneofKind
                    ? s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (ea = null == e$ ? void 0 : e$.promotionId) ? ea : "",
                void 0,
                !0,
            ),
            [e3, e8] = (0, m.TE)(ew ? s.z.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != eZ ? eZ : "", void 0, !0),
            e5 =
                null != e0 &&
                "premiumTabTooltip" === e0.properties.properties.oneofKind &&
                e1 === s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (i.useEffect(() => {
                !0 === eo && null != eq && eQ(et.L.AUTO_DISMISS),
                    !0 === eo && null != eJ && eX(et.L.AUTO_DISMISS),
                    !0 === eo && null != e1 && e4(et.L.AUTO_DISMISS),
                    !0 === eo && null != e3 && e8(et.L.AUTO_DISMISS);
            }, [eQ, eo, eq, eX, eJ, e1, e4, e3, e8]),
            !er({ selected: eo }))
        )
            return null;
        let e2 = () => {
            eV === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eF(et.L.TAKE_ACTION),
                v.default.track(ee.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: C,
                    has_premium: em,
                }),
                null != eq && eQ(et.L.USER_DISMISS),
                null != e1 && e4(et.L.USER_DISMISS),
                eJ === s.z.PREMIUM_GROUP_POPOVER && eX(et.L.USER_DISMISS);
        };
        eG === $.a$.NONE ||
            ev ||
            ((C = 7),
            (n = (0, r.jsx)(x.Z, {
                className: "",
                startsAt: eH,
                endsAt: eB,
                messageStyle: p.aj.SHORT_TIME,
                upperCase: !0,
            })));
        let e7 = eS && eJ === s.z.PREMIUM_GROUP_POPOVER;
        if (e7)
            (n = (0, r.jsx)(u.Cts, {
                type: "new",
                variant: "expressive",
            })),
                (C = 10);
        else if (null != e$ && "premiumTab" === e$.properties.properties.oneofKind)
            (n = (0, r.jsx)(M.Z, {
                componentId: e$.id,
                badgeCopy: e$.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e$.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e1 !== s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (C = 9);
        else if (ey) (n = (0, r.jsx)(D.Z, {})), (C = 0);
        else if (eC) {
            let e = (0, U.$q)();
            (n = (0, r.jsx)(z._y, {
                isTabSelected: eo,
                badgeCopy: en.intl.string(en.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == e_ ? void 0 : e_.expires_at) : null,
            })),
                (C = 4);
        } else
            eq === s.z.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, r.jsx)(u.Cts, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (C = 4),
                  (e2 = () => {
                      v.default.track(ee.rMx.NITRO_TAB_VISITED, {
                          badge_decorator: C,
                          has_premium: em,
                      }),
                          eQ(et.L.USER_DISMISS);
                  }))
                : eq === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(z._y, {
                        isTabSelected: eo,
                        badgeCopy: en.intl.string(en.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (C = 2))
                  : ev
                    ? ((n = (0, r.jsx)(q.S, { expiresAt: eB })), (C = 4))
                    : null != eT
                      ? ((n = (0, r.jsx)(X.Z, {
                            copy: eT,
                            showStars: !1,
                        })),
                        (C = 1))
                      : null != eO
                        ? ((n =
                              eg === N.tE.OFFER_COUNTDOWN && ek
                                  ? (0, r.jsx)(Y.a, { discountOffer: eO })
                                  : (0, r.jsx)(z.GN, {
                                        userDiscount: eO,
                                        isTabSelected: eo,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: ek,
                                    })),
                          (C = 3))
                        : null == e_ || eY
                          ? eL
                              ? ((n = (0, r.jsx)(W.l, {
                                    isSelected: eo,
                                    onSelect: () =>
                                        (0, h.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: et.L.TAKE_ACTION,
                                        }),
                                })),
                                (C = 6))
                              : eU
                                ? ((n = (0, r.jsx)(F.Z, {
                                      isSelected: eo,
                                      discountOffer: eI,
                                  })),
                                  (C = 8))
                                : eP && eJ === s.z.PREMIUM_ORBS_UPSELL_POPOVER
                                  ? ((n = (0, r.jsx)(u.Cts, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (C = 2))
                                  : ew &&
                                    e3 === s.z.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((n = (0, r.jsx)(u.Cts, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (C = 2))
                          : ((n =
                                eg === N.tE.OFFER_COUNTDOWN && eD
                                    ? (0, r.jsx)(Y.F, { trialOffer: e_ })
                                    : (0, r.jsx)(z.$H, {
                                          trialOffer: e_,
                                          isTabSelected: eo,
                                          shouldShowOfferReminder: eD,
                                      })),
                            (C = 4));
        eN &&
            ((n = (0, r.jsx)(z._y, {
                isTabSelected: eo,
                badgeCopy: en.intl.string(en.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (C = 4),
            (e2 = () => {
                v.default.track(ee.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: C,
                    has_premium: em,
                }),
                    (0, U.ZL)();
            }));
        let e9 = (0, r.jsx)(
            d.Qj,
            ((ei = (function (e) {
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
                    listItemRef: es,
                    selected: eo,
                    route: ec,
                    icon: u.SrA,
                    text: (0, r.jsx)(c.Z, {
                        children: eb ? en.intl.string(en.t["4gwVVn"]) : en.intl.string(en.t.Ipxkog),
                    }),
                    locationState: eu,
                    onClick: e2,
                },
                ed,
                eE,
            )),
            (el = el =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(ei, Object.getOwnPropertyDescriptors(el))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(el)).forEach(function (e) {
                      Object.defineProperty(ei, e, Object.getOwnPropertyDescriptor(el, e));
                  }),
            ei),
        );
        return eL
            ? (0, r.jsx)(W.C, { children: e9 })
            : eU && eJ === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === C
              ? (0, r.jsx)(V.Z, {
                    targetElementRef: es,
                    discountOffer: eI,
                    premiumSubscription: ef,
                    dismissCoachmark: eX,
                    children: e9,
                })
              : e7
                ? (0, r.jsx)(R.x, {
                      targetElementRef: es,
                      dismissPopover: eX,
                      children: e9,
                  })
                : eP && eJ === s.z.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, r.jsx)(B.Z, {
                        targetElementRef: es,
                        dismissPopover: eX,
                        children: e9,
                    })
                  : ew && e3 === s.z.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, r.jsx)(H.Z, {
                          targetElementRef: es,
                          dismissPopover: e8,
                          children: e9,
                      })
                    : e5
                      ? (0, r.jsx)(K.Z, { children: e9 })
                      : e9;
    };
