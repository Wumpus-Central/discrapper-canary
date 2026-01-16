n.d(t, {
    g: () => ee,
    i: () => $,
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
    b = n(172416),
    _ = n(594174),
    E = n(78839),
    O = n(431),
    v = n(626135),
    I = n(74538),
    y = n(502087),
    C = n(367074),
    S = n(695349),
    T = n(931118),
    N = n(963590),
    j = n(767870),
    x = n(331972),
    P = n(622909),
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
    F = n(63107),
    z = n(497334),
    Y = n(119850),
    W = n(938736),
    K = n(227140),
    q = n(474936),
    Q = n(981631),
    J = n(921944),
    X = n(388032);
let $ = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            r = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            i = (0, A.N)(),
            l = (0, P.N)(),
            a = (0, C.Vi)(),
            s = (0, Y.V)(),
            c = (0, I.Qo)(n, r),
            u = (0, o.e7)([y.Z], () => y.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    ee = (e) => {
        let t, n, y;
        var ee,
            et,
            en,
            { selected: er, nitroTabButtonRef: ei, route: el, locationState: ea } = e,
            eo = (function (e, t) {
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
        let es = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            ec = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            { variant: eu, hasNitroTabBadgeOfferReminder: ed } = (0, T.ZP)("PremiumDiscountEndingNotice"),
            ep = (0, I.Qo)(es, ec),
            ef = (0, I.M5)(es, q.PremiumTypes.TIER_2),
            eg = (0, l.JA)("nitro"),
            eh = (0, A.N)(),
            em = (0, P.N)(),
            eb = (0, x.$)(),
            e_ = (0, S.W)(),
            eE = (0, C.Vi)(),
            eO = (0, k.HI)({ trialOffer: eh }),
            ev = (0, w.QL)(),
            eI = (0, Y.V)(),
            ey = (0, k.eW)(),
            eC = (0, M._h)(),
            eS = (0, W.Kn)(),
            eT = O.Z.getAlmostExpiringTrialOffers([q.Si.TIER_2]),
            eN = ed && eT.length > 0 && null != eh && null != eh.expires_at,
            ej = O.Z.getAlmostExpiringDiscountOffers([q.Si.TIER_2]),
            ex = ed && ej.length > 0 && null != em && null != em.expires_at,
            eP = null != eb && null != ec && ec.status === Q.O0b.CANCELED,
            { fractionalState: eA, startsAt: eZ, endsAt: ew } = (0, f.Z)({ forceFetch: !0 }),
            [eL, eR] = (0, m.bf)(eA !== q.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eZ.valueOf(),
                cooldownDurationMs: 0,
            }),
            eD = (0, N.Z)({ location: "NitroTabButton" }),
            eM = (null == eh ? void 0 : eh.trial_id) === q.a7,
            ek = (0, b.bg)({ location: "NitroTabButton" }),
            eU = [],
            eG = [];
        (0, g.Kl)() &&
            ((ex || (eN && !eM)) && eU.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            eC && eU.push(s.z.RECURRING_3P_PROMOTION_POPOVER),
            eE && eU.push(s.z.BOGO_2025_NITRO_TAB_BADGE),
            eD && eU.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            e_ && eU.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            ek && eU.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [eH, eB] = (0, m.US)(eU, void 0, !0);
        eP && eG.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), ev && eG.push(s.z.PREMIUM_GROUP_POPOVER);
        let [eV, eF] = (0, m.US)(eG, void 0, !0),
            ez = (0, Z.H)(a.I.PREMIUM_TAB),
            eY = (0, Z.H)(a.I.PREMIUM_TAB_TOOLTIP),
            [eW, eK] = (0, m.TE)(
                null != ez && "premiumTab" === ez.properties.properties.oneofKind
                    ? s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (en = null == ez ? void 0 : ez.promotionId) ? en : "",
                void 0,
                !0,
            ),
            eq =
                null != eY &&
                "premiumTabTooltip" === eY.properties.properties.oneofKind &&
                eW === s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (i.useEffect(() => {
                !0 === er && null != eH && eB(J.L.AUTO_DISMISS),
                    !0 === er && null != eV && eF(J.L.AUTO_DISMISS),
                    !0 === er && null != eW && eK(J.L.AUTO_DISMISS);
            }, [eB, er, eH, eF, eV, eW, eK]),
            !$({ selected: er }))
        )
            return null;
        let eQ = () => {
            eL === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eR(J.L.TAKE_ACTION),
                v.default.track(Q.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ep,
                }),
                null != eH && eB(J.L.USER_DISMISS),
                null != eW && eK(J.L.USER_DISMISS);
        };
        if (
            (eA === q.a$.NONE ||
                e_ ||
                ((y = 7),
                (n = (0, r.jsx)(j.Z, {
                    className: "",
                    startsAt: eZ,
                    endsAt: ew,
                    messageStyle: p.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            null != ez && "premiumTab" === ez.properties.properties.oneofKind)
        )
            (n = (0, r.jsx)(D.Z, {
                componentId: ez.id,
                badgeCopy: ez.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: ez.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eW !== s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (y = 9);
        else if (eE) (n = (0, r.jsx)(R.Z, {})), (y = 0);
        else if (eO) {
            let e = (0, k.$q)();
            (n = (0, r.jsx)(H._y, {
                isTabSelected: er,
                badgeCopy: X.intl.string(X.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == eh ? void 0 : eh.expires_at) : null,
            })),
                (y = 4);
        } else
            eH === s.z.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, r.jsx)(u.Cts, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (y = 4),
                  (eQ = () => {
                      v.default.track(Q.rMx.NITRO_TAB_VISITED, {
                          badge_decorator: y,
                          has_premium: ep,
                      }),
                          eB(J.L.USER_DISMISS);
                  }))
                : eH === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eH === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(H._y, {
                        isTabSelected: er,
                        badgeCopy: X.intl.string(X.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (y = 2))
                  : e_
                    ? ((n = (0, r.jsx)(z.S, { expiresAt: ew })), (y = 4))
                    : null != eI
                      ? ((n = (0, r.jsx)(K.Z, {
                            copy: eI,
                            showStars: !1,
                        })),
                        (y = 1))
                      : null != em
                        ? ((n =
                              eu === T.tE.OFFER_COUNTDOWN && ex
                                  ? (0, r.jsx)(B.a, { discountOffer: em })
                                  : (0, r.jsx)(H.GN, {
                                        userDiscount: em,
                                        isTabSelected: er,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: ex,
                                    })),
                          (y = 3))
                        : null == eh || eM
                          ? eS
                              ? ((n = (0, r.jsx)(V.l, {
                                    isSelected: er,
                                    onSelect: () =>
                                        (0, h.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: J.L.TAKE_ACTION,
                                        }),
                                })),
                                (y = 6))
                              : eP &&
                                ((n = (0, r.jsx)(G.Z, {
                                    isSelected: er,
                                    discountOffer: eb,
                                })),
                                (y = 8))
                          : ((n =
                                eu === T.tE.OFFER_COUNTDOWN && eN
                                    ? (0, r.jsx)(B.F, { trialOffer: eh })
                                    : (0, r.jsx)(H.$H, {
                                          trialOffer: eh,
                                          isTabSelected: er,
                                          shouldShowOfferReminder: eN,
                                      })),
                            (y = 4));
        ey &&
            ((n = (0, r.jsx)(H._y, {
                isTabSelected: er,
                badgeCopy: X.intl.string(X.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (y = 4),
            (eQ = () => {
                v.default.track(Q.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ep,
                }),
                    (0, k.ZL)();
            }));
        let eJ = (0, r.jsx)(
            d.Qj,
            ((ee = (function (e) {
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
                    listItemRef: ei,
                    selected: er,
                    route: el,
                    icon: u.SrA,
                    text: (0, r.jsx)(c.Z, { children: ef ? X.intl.string(X.t["4gwVVn"]) : X.intl.string(X.t.Ipxkog) }),
                    locationState: ea,
                    onClick: eQ,
                },
                eo,
                eg,
            )),
            (et = et =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(et))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(et)).forEach(function (e) {
                      Object.defineProperty(ee, e, Object.getOwnPropertyDescriptor(et, e));
                  }),
            ee),
        );
        return eS
            ? (0, r.jsx)(V.C, { children: eJ })
            : eP && eV === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y
              ? (0, r.jsx)(U.Z, {
                    targetElementRef: ei,
                    discountOffer: eb,
                    premiumSubscription: ec,
                    dismissCoachmark: eF,
                    children: eJ,
                })
              : ev && eV === s.z.PREMIUM_GROUP_POPOVER
                ? (0, r.jsx)(L.x, {
                      targetElementRef: ei,
                      dismissPopover: eF,
                      children: eJ,
                  })
                : eq
                  ? (0, r.jsx)(F.Z, { children: eJ })
                  : eJ;
    };
