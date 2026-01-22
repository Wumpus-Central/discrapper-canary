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
    f = n(531260),
    h = n(771781),
    A = n(826673),
    g = n(379848),
    m = n(895944),
    b = n(649032),
    _ = n(287809),
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
    z = n(965966),
    W = n(173522),
    q = n(796878),
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
            n = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
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
            ep = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
            ef = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            { variant: eh, hasNitroTabBadgeOfferReminder: eA } = (0, N.Ay)("PremiumDiscountEndingNotice"),
            eg = (0, I.Of)(ep, ef),
            em = (0, I.YE)(ep, $.PremiumTypes.TIER_2),
            eb = (0, l.rm)("nitro"),
            e_ = (0, w.V)(),
            eE = (0, P.O)(),
            eO = (0, x.p)(),
            ey = (0, C.d)(),
            eI = (0, S.cg)(),
            ev = (0, G.NF)({
                trialOffer: e_,
            }),
            eS = (0, R.bf)(),
            eC = (0, X.H)(),
            eN = (0, G.Tp)(),
            eT = (0, U.c7)(),
            { isInTreatment: ej } = (0, V.uX)("NitroTabButton"),
            ex = !(0, I.TW)(ep) && ej,
            eP = (0, s.bG)([m.A], () => m.A.getRewardForProgram(b.W.NITRO)),
            ew = null == eP ? void 0 : eP.last_granted_reward,
            eL = em && ej && null != ew,
            eR = (0, Z.gr)(),
            eD = O.A.getAlmostExpiringTrialOffers([$.pe.TIER_2]),
            eM = eA && eD.length > 0 && null != e_ && null != e_.expires_at,
            ek = O.A.getAlmostExpiringDiscountOffers([$.pe.TIER_2]),
            eU = eA && ek.length > 0 && null != eE && null != eE.expires_at,
            eG = null != eO && null != ef && ef.status === ee.Dmq.CANCELED,
            {
                fractionalState: eV,
                startsAt: eB,
                endsAt: eH,
            } = (0, f.A)({
                forceFetch: !0,
            }),
            [eF, eY] = (0, g.Wl)(eV !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eB.valueOf(),
                cooldownDurationMs: 0,
            }),
            eK = (0, T.A)({
                location: "NitroTabButton",
            }),
            ez = (null == e_ ? void 0 : e_.trial_id) === $.Dw,
            eW = [],
            eq = [];
        (0, h.Tc)() &&
            ((eU || (eM && !ez)) && eW.push(o.M.NITRO_TAB_BADGE_OFFER_REMINDER),
            eT && eW.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            eI && eW.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eK && eW.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ey && eW.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eQ, eX] = (0, g.kn)(eW, void 0, !0);
        eG && eq.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eS && eq.push(o.M.PREMIUM_GROUP_POPOVER),
            ex && eq.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER);
        let [eZ, eJ] = (0, g.kn)(eq, void 0, !0),
            e$ = (0, L.c)(a.C.PREMIUM_TAB),
            e0 = (0, L.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [e1, e6] = (0, g.Cc)(
                null != e$ && "premiumTab" === e$.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (t = null == e$ ? void 0 : e$.promotionId) ? t : "",
                void 0,
                !0,
            ),
            [e9, e7] = (0, g.Cc)(eL ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != ew ? ew : "", void 0, !0),
            e8 =
                null != e0 &&
                "premiumTabTooltip" === e0.properties.properties.oneofKind &&
                e1 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (i.useEffect(() => {
                !0 === es && null != eQ && eX(et.i.AUTO_DISMISS),
                    !0 === es && null != eZ && eJ(et.i.AUTO_DISMISS),
                    !0 === es && null != e1 && e6(et.i.AUTO_DISMISS),
                    !0 === es && null != e9 && e7(et.i.AUTO_DISMISS);
            }, [eX, es, eQ, eJ, eZ, e1, e6, e9, e7]),
            !er({
                selected: es,
            }))
        )
            return null;
        let e5 = () => {
            eF === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eY(et.i.TAKE_ACTION),
                y.default.track(ee.HAw.NITRO_TAB_VISITED, {
                    badge_decorator: ea,
                    has_premium: eg,
                }),
                null != eQ && eX(et.i.USER_DISMISS),
                null != e1 && e6(et.i.USER_DISMISS),
                eZ === o.M.PREMIUM_GROUP_POPOVER && eJ(et.i.USER_DISMISS);
        };
        eV === $.xc.NONE ||
            ey ||
            ((ea = 7),
            (el = (0, r.jsx)(j.A, {
                className: "",
                startsAt: eB,
                endsAt: eH,
                messageStyle: p.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e2 = eS && eZ === o.M.PREMIUM_GROUP_POPOVER;
        if (e2)
            (el = (0, r.jsx)(u.Exy, {
                type: "new",
                variant: "expressive",
            })),
                (ea = 10);
        else if (null != e$ && "premiumTab" === e$.properties.properties.oneofKind)
            (el = (0, r.jsx)(k.A, {
                componentId: e$.id,
                badgeCopy: e$.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e$.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e1 !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (ea = 9);
        else if (eI) (el = (0, r.jsx)(M.A, {})), (ea = 0);
        else if (ev) {
            let e = (0, G.ZR)();
            (el = (0, r.jsx)(K.MA, {
                isTabSelected: es,
                badgeCopy: en.intl.string(en.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == e_ ? void 0 : e_.expires_at) : null,
            })),
                (ea = 4);
        } else
            eQ === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((el = (0, r.jsx)(u.Exy, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (ea = 4),
                  (e5 = () => {
                      y.default.track(ee.HAw.NITRO_TAB_VISITED, {
                          badge_decorator: ea,
                          has_premium: eg,
                      }),
                          eX(et.i.USER_DISMISS);
                  }))
                : eQ === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((el = (0, r.jsx)(K.MA, {
                        isTabSelected: es,
                        badgeCopy: en.intl.string(en.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (ea = 2))
                  : ey
                    ? ((el = (0, r.jsx)(Q.d, {
                          expiresAt: eH,
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
                              eh === N.CJ.OFFER_COUNTDOWN && eU
                                  ? (0, r.jsx)(z.D, {
                                        discountOffer: eE,
                                    })
                                  : (0, r.jsx)(K.fY, {
                                        userDiscount: eE,
                                        isTabSelected: es,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: eU,
                                    })),
                          (ea = 3))
                        : null == e_ || ez
                          ? eR
                              ? ((el = (0, r.jsx)(W.F, {
                                    isSelected: es,
                                    onSelect: () =>
                                        (0, A.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: et.i.TAKE_ACTION,
                                        }),
                                })),
                                (ea = 6))
                              : eG
                                ? ((el = (0, r.jsx)(Y.A, {
                                      isSelected: es,
                                      discountOffer: eO,
                                  })),
                                  (ea = 8))
                                : ex && eZ === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                                  ? ((el = (0, r.jsx)(u.Exy, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (ea = 2))
                                  : eL &&
                                    e9 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((el = (0, r.jsx)(u.Exy, {
                                        type: "new",
                                        variant: "expressive",
                                    })),
                                    (ea = 2))
                          : ((el =
                                eh === N.CJ.OFFER_COUNTDOWN && eM
                                    ? (0, r.jsx)(z.s, {
                                          trialOffer: e_,
                                      })
                                    : (0, r.jsx)(K.Ag, {
                                          trialOffer: e_,
                                          isTabSelected: es,
                                          shouldShowOfferReminder: eM,
                                      })),
                            (ea = 4));
        eN &&
            ((el = (0, r.jsx)(K.MA, {
                isTabSelected: es,
                badgeCopy: en.intl.string(en.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (ea = 4),
            (e5 = () => {
                y.default.track(ee.HAw.NITRO_TAB_VISITED, {
                    badge_decorator: ea,
                    has_premium: eg,
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
                        children: em ? en.intl.string(en.t["4gwVVn"]) : en.intl.string(en.t.Ipxkog),
                    }),
                    locationState: eu,
                    onClick: e5,
                },
                ed,
                eb,
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
        return eR
            ? (0, r.jsx)(W.T, {
                  children: e3,
              })
            : eG && eZ === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === ea
              ? (0, r.jsx)(F.A, {
                    targetElementRef: eo,
                    discountOffer: eO,
                    premiumSubscription: ef,
                    dismissCoachmark: eJ,
                    children: e3,
                })
              : e2
                ? (0, r.jsx)(D.p, {
                      targetElementRef: eo,
                      dismissPopover: eJ,
                      children: e3,
                  })
                : ex && eZ === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, r.jsx)(H.A, {
                        targetElementRef: eo,
                        dismissPopover: eJ,
                        children: e3,
                    })
                  : eL && e9 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, r.jsx)(B.A, {
                          targetElementRef: eo,
                          dismissPopover: e7,
                          children: e3,
                      })
                    : e8
                      ? (0, r.jsx)(q.A, {
                            children: e3,
                        })
                      : e3;
    };
