n.d(t, {
    P: () => er,
    o: () => ei,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(837381),
    a = n(877624),
    s = n(311907),
    o = n(554146),
    c = n(3026),
    u = n(397927),
    d = n(701363),
    p = n(366999),
    h = n(531260),
    g = n(771781),
    f = n(826673),
    m = n(379848),
    A = n(895944),
    _ = n(649032),
    b = n(287809),
    E = n(166403),
    O = n(816733),
    y = n(954571),
    I = n(927578),
    v = n(683760),
    S = n(40185),
    C = n(637073),
    N = n(804412),
    T = n(377168),
    j = n(288349),
    x = n(131168),
    P = n(422936),
    w = n(234419),
    L = n(549996),
    R = n(612669),
    D = n(768569),
    M = n(603488),
    k = n(282077),
    U = n(385327),
    G = n(727949),
    V = n(84483),
    B = n(305498),
    H = n(909255),
    F = n(328717),
    Y = n(953062),
    K = n(105390),
    W = n(965966),
    q = n(173522),
    z = n(796878),
    Q = n(156393),
    X = n(513570),
    Z = n(221688),
    J = n(622037),
    $ = n(788868),
    ee = n(652215),
    et = n(49999),
    en = n(985018);
let er = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
            r = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            i = (0, w.V)(),
            l = (0, P.O)(),
            a = (0, S.cg)(),
            o = (0, X.H)(),
            c = (0, I.Of)(n, r),
            u = (0, s.bG)([v.A], () => v.A.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != o || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 12096e5);
    },
    ei = (e) => {
        var t, n, v;
        let ei,
            el,
            ea,
            { selected: es, nitroTabButtonRef: eo, route: ec, locationState: eu } = e,
            ed = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["selected", "nitroTabButtonRef", "route", "locationState"]),
            ep = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
            eh = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            { variant: eg, hasNitroTabBadgeOfferReminder: ef } = (0, N.Ay)("PremiumDiscountEndingNotice"),
            em = (0, I.Of)(ep, eh),
            eA = (0, I.YE)(ep, $.PremiumTypes.TIER_2),
            e_ = (0, l.rm)("nitro"),
            eb = (0, w.V)(),
            eE = (0, P.O)(),
            eO = (0, x.p)(),
            ey = (0, C.d)(),
            eI = (0, S.cg)(),
            ev = (0, G.NF)({
                trialOffer: eb,
            }),
            eS = (0, R.bf)(),
            eC = (0, X.H)(),
            eN = (0, G.Tp)(),
            eT = (0, U.c7)(),
            { isInTreatment: ej } = (0, V.uX)("NitroTabButton"),
            ex = !(0, I.TW)(ep) && ej,
            { programReward: eP, hasNecessaryPremiumSubscriptionStatus: ew } = (0, s.cf)([A.A], () => ({
                programReward: A.A.getRewardForProgram(_.W.NITRO),
                hasNecessaryPremiumSubscriptionStatus: A.A.hasNecessaryPremiumSubscriptionStatus(),
            })),
            eL = null == eP ? void 0 : eP.last_granted_reward,
            eR = ew && ej && null != eL,
            eD = (0, Z.gr)(),
            eM = O.A.getAlmostExpiringTrialOffers([$.pe.TIER_2]),
            ek = ef && eM.length > 0 && null != eb && null != eb.expires_at,
            eU = O.A.getAlmostExpiringDiscountOffers([$.pe.TIER_2]),
            eG = ef && eU.length > 0 && null != eE && null != eE.expires_at,
            eV = null != eO && null != eh && eh.status === ee.Dmq.CANCELED,
            {
                fractionalState: eB,
                startsAt: eH,
                endsAt: eF,
            } = (0, h.A)({
                forceFetch: !0,
            }),
            [eY, eK] = (0, m.Wl)(eB !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eH.valueOf(),
                cooldownDurationMs: 0,
            }),
            eW = (0, T.A)({
                location: "NitroTabButton",
            }),
            eq = (null == eb ? void 0 : eb.trial_id) === $.Dw,
            ez = [],
            eQ = [];
        (0, g.Tc)() &&
            ((eG || (ek && !eq)) && ez.push(o.M.NITRO_TAB_BADGE_OFFER_REMINDER),
            eT && ez.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            eI && ez.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eW && ez.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ey && ez.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eX, eZ] = (0, m.kn)(ez, void 0, !0);
        eV && eQ.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eS && eQ.push(o.M.PREMIUM_GROUP_POPOVER),
            ex && eQ.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER);
        let [eJ, e$] = (0, m.kn)(eQ, void 0, !0),
            e0 = (0, L.c)(a.C.PREMIUM_TAB),
            e1 = (0, L.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [e6, e9] = (0, m.Cc)(
                null != e0 && "premiumTab" === e0.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (t = null == e0 ? void 0 : e0.promotionId) ? t : "",
                void 0,
                !0,
            ),
            [e7, e5] = (0, m.Cc)(eR ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != eL ? eL : "", void 0, !0),
            e8 =
                null != e1 &&
                "premiumTabTooltip" === e1.properties.properties.oneofKind &&
                e6 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (i.useEffect(() => {
                !0 === es && null != eX && eZ(et.i.AUTO_DISMISS),
                    !0 === es && null != eJ && e$(et.i.AUTO_DISMISS),
                    !0 === es && null != e6 && e9(et.i.AUTO_DISMISS),
                    !0 === es && null != e7 && e5(et.i.AUTO_DISMISS);
            }, [eZ, es, eX, e$, eJ, e6, e9, e7, e5]),
            !er({
                selected: es,
            }))
        )
            return null;
        let e2 = () => {
            eY === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eK(et.i.TAKE_ACTION),
                y.default.track(ee.HAw.NITRO_TAB_VISITED, {
                    badge_decorator: ea,
                    has_premium: em,
                }),
                null != eX && eZ(et.i.USER_DISMISS),
                null != e6 && e9(et.i.USER_DISMISS),
                eJ === o.M.PREMIUM_GROUP_POPOVER && e$(et.i.USER_DISMISS);
        };
        eB === $.xc.NONE ||
            ey ||
            ((ea = 7),
            (el = (0, r.jsx)(j.A, {
                className: "",
                startsAt: eH,
                endsAt: eF,
                messageStyle: p.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e4 = eS && eJ === o.M.PREMIUM_GROUP_POPOVER;
        if (e4)
            (el = (0, r.jsx)(u.Exy, {
                type: "new",
                variant: "expressive",
            })),
                (ea = 10);
        else if (null != e0 && "premiumTab" === e0.properties.properties.oneofKind)
            (el = (0, r.jsx)(k.A, {
                componentId: e0.id,
                badgeCopy: e0.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e0.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e6 !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (ea = 9);
        else if (eI) (el = (0, r.jsx)(M.A, {})), (ea = 0);
        else if (ev) {
            let e = (0, G.ZR)();
            (el = (0, r.jsx)(K.MA, {
                isTabSelected: es,
                badgeCopy: en.intl.string(en.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == eb ? void 0 : eb.expires_at) : null,
            })),
                (ea = 4);
        } else
            eX === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((el = (0, r.jsx)(u.Exy, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (ea = 4),
                  (e2 = () => {
                      y.default.track(ee.HAw.NITRO_TAB_VISITED, {
                          badge_decorator: ea,
                          has_premium: em,
                      }),
                          eZ(et.i.USER_DISMISS);
                  }))
                : eX === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((el = (0, r.jsx)(K.MA, {
                        isTabSelected: es,
                        badgeCopy: en.intl.string(en.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (ea = 2))
                  : ey
                    ? ((el = (0, r.jsx)(Q.d, {
                          expiresAt: eF,
                      })),
                      (ea = 4))
                    : null != eC
                      ? ((el = (0, r.jsx)(J.A, {
                            copy: eC,
                            showStars: !1,
                        })),
                        (ea = 1))
                      : null != eE
                        ? ((el =
                              eg === N.CJ.OFFER_COUNTDOWN && eG
                                  ? (0, r.jsx)(W.D, {
                                        discountOffer: eE,
                                    })
                                  : (0, r.jsx)(K.fY, {
                                        userDiscount: eE,
                                        isTabSelected: es,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: eG,
                                    })),
                          (ea = 3))
                        : null == eb || eq
                          ? eD
                              ? ((el = (0, r.jsx)(q.F, {
                                    isSelected: es,
                                    onSelect: () =>
                                        (0, f.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: et.i.TAKE_ACTION,
                                        }),
                                })),
                                (ea = 6))
                              : eV
                                ? ((el = (0, r.jsx)(Y.A, {
                                      isSelected: es,
                                      discountOffer: eO,
                                  })),
                                  (ea = 8))
                                : ex && eJ === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                                  ? ((el = (0, r.jsx)(u.Exy, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (ea = 2))
                                  : eR &&
                                    e7 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((el = (0, r.jsx)(u.Exy, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (ea = 2))
                          : ((el =
                                eg === N.CJ.OFFER_COUNTDOWN && ek
                                    ? (0, r.jsx)(W.s, {
                                          trialOffer: eb,
                                      })
                                    : (0, r.jsx)(K.Ag, {
                                          trialOffer: eb,
                                          isTabSelected: es,
                                          shouldShowOfferReminder: ek,
                                      })),
                            (ea = 4));
        eN &&
            ((el = (0, r.jsx)(K.MA, {
                isTabSelected: es,
                badgeCopy: en.intl.string(en.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (ea = 4),
            (e2 = () => {
                y.default.track(ee.HAw.NITRO_TAB_VISITED, {
                    badge_decorator: ea,
                    has_premium: em,
                }),
                    (0, G.ne)();
            }));
        let e3 = (0, r.jsx)(
            d.z9,
            ((n = (function (e) {
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
                    listItemRef: eo,
                    selected: es,
                    route: ec,
                    icon: u.tvc,
                    text: (0, r.jsx)(c.A, {
                        children: eA ? en.intl.string(en.t["4gwVVn"]) : en.intl.string(en.t.Ipxkog),
                    }),
                    locationState: eu,
                    onClick: e2,
                },
                ed,
                e_,
            )),
            (v = v =
                {
                    className: ei,
                    children: el,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(v))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(v)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(v, e));
                  }),
            n),
        );
        return eD
            ? (0, r.jsx)(q.T, {
                  children: e3,
              })
            : eV && eJ === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === ea
              ? (0, r.jsx)(F.A, {
                    targetElementRef: eo,
                    discountOffer: eO,
                    premiumSubscription: eh,
                    dismissCoachmark: e$,
                    children: e3,
                })
              : e4
                ? (0, r.jsx)(D.p, {
                      targetElementRef: eo,
                      dismissPopover: e$,
                      children: e3,
                  })
                : ex && eJ === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, r.jsx)(H.A, {
                        targetElementRef: eo,
                        dismissPopover: e$,
                        children: e3,
                    })
                  : eR && e7 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, r.jsx)(B.A, {
                          targetElementRef: eo,
                          dismissPopover: e5,
                          children: e3,
                      })
                    : e8
                      ? (0, r.jsx)(z.A, {
                            children: e3,
                        })
                      : e3;
    };
