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
    h = n(266454),
    m = n(243778),
    b = n(594174),
    E = n(78839),
    _ = n(431),
    O = n(626135),
    I = n(74538),
    v = n(502087),
    y = n(367074),
    C = n(695349),
    S = n(931118),
    T = n(963590),
    N = n(767870),
    j = n(331972),
    x = n(622909),
    P = n(639119),
    A = n(715130),
    Z = n(260720),
    w = n(498920),
    L = n(655525),
    R = n(244989),
    D = n(675957),
    M = n(93237),
    k = n(484605),
    U = n(961892),
    G = n(924540),
    H = n(467460),
    B = n(474486),
    V = n(63107),
    F = n(497334),
    z = n(119850),
    Y = n(938736),
    W = n(227140),
    K = n(474936),
    q = n(981631),
    Q = n(921944),
    J = n(388032);
let X = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
            r = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            i = (0, P.N)(),
            l = (0, x.N)(),
            a = (0, y.Vi)(),
            s = (0, z.V)(),
            c = (0, I.Qo)(n, r),
            u = (0, o.e7)([v.Z], () => v.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    $ = (e) => {
        let t, n, v;
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
        let eo = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
            es = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            { variant: ec, hasNitroTabBadgeOfferReminder: eu } = (0, S.ZP)("PremiumDiscountEndingNotice"),
            ed = (0, I.Qo)(eo, es),
            ep = (0, I.M5)(eo, K.PremiumTypes.TIER_2),
            ef = (0, l.JA)("nitro"),
            eg = (0, P.N)(),
            eh = (0, x.N)(),
            em = (0, j.$)(),
            eb = (0, C.W)(),
            eE = (0, y.Vi)(),
            e_ = (0, M.HI)({ trialOffer: eg }),
            eO = (0, Z.QL)(),
            eI = (0, z.V)(),
            ev = (0, M.eW)(),
            ey = (0, D._h)(),
            eC = (0, Y.Kn)(),
            eS = _.Z.getAlmostExpiringTrialOffers([K.Si.TIER_2]),
            eT = eu && eS.length > 0 && null != eg && null != eg.expires_at,
            eN = _.Z.getAlmostExpiringDiscountOffers([K.Si.TIER_2]),
            ej = eu && eN.length > 0 && null != eh && null != eh.expires_at,
            ex = null != em && null != es && es.status === q.O0b.CANCELED,
            { fractionalState: eP, startsAt: eA, endsAt: eZ } = (0, f.Z)({ forceFetch: !0 }),
            [ew, eL] = (0, m.bf)(eP !== K.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eA.valueOf(),
                cooldownDurationMs: 0,
            }),
            eR = (0, T.Z)({ location: "NitroTabButton" }),
            eD = (null == eg ? void 0 : eg.trial_id) === K.a7,
            eM = [],
            ek = [];
        (0, g.Kl)() &&
            ((ej || (eT && !eD)) && eM.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            ey && eM.push(s.z.RECURRING_3P_PROMOTION_POPOVER),
            eE && eM.push(s.z.BOGO_2025_NITRO_TAB_BADGE),
            eR && eM.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eb && eM.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eU, eG] = (0, m.US)(eM, void 0, !0);
        ex && ek.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eO && ek.push(s.z.PREMIUM_GROUP_POPOVER);
        let [eH, eB] = (0, m.US)(ek, void 0, !0),
            eV = (0, A.H)(a.I.PREMIUM_TAB),
            eF = (0, A.H)(a.I.PREMIUM_TAB_TOOLTIP),
            [ez, eY] = (0, m.TE)(
                null != eV && "premiumTab" === eV.properties.properties.oneofKind
                    ? s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (et = null == eV ? void 0 : eV.promotionId) ? et : "",
                void 0,
                !0,
            ),
            eW =
                null != eF &&
                "premiumTabTooltip" === eF.properties.properties.oneofKind &&
                ez === s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (i.useEffect(() => {
                !0 === en && null != eU && eG(Q.L.AUTO_DISMISS),
                    !0 === en && null != eH && eB(Q.L.AUTO_DISMISS),
                    !0 === en && null != ez && eY(Q.L.AUTO_DISMISS);
            }, [eG, en, eU, eB, eH, ez, eY]),
            !X({ selected: en }))
        )
            return null;
        let eK = () => {
            ew === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eL(Q.L.TAKE_ACTION),
                O.default.track(q.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: v,
                    has_premium: ed,
                }),
                null != eU && eG(Q.L.USER_DISMISS),
                null != ez && eY(Q.L.USER_DISMISS);
        };
        if (
            (eP === K.a$.NONE ||
                eb ||
                ((v = 7),
                (n = (0, r.jsx)(N.Z, {
                    className: "",
                    startsAt: eA,
                    endsAt: eZ,
                    messageStyle: p.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            null != eV && "premiumTab" === eV.properties.properties.oneofKind)
        )
            (n = (0, r.jsx)(R.Z, {
                componentId: eV.id,
                badgeCopy: eV.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eV.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: ez !== s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (v = 9);
        else if (eE) (n = (0, r.jsx)(L.Z, {})), (v = 0);
        else if (e_) {
            let e = (0, M.$q)();
            (n = (0, r.jsx)(G._y, {
                isTabSelected: en,
                badgeCopy: J.intl.string(J.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == eg ? void 0 : eg.expires_at) : null,
            })),
                (v = 4);
        } else
            eU === s.z.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, r.jsx)(u.Cts, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (v = 4),
                  (eK = () => {
                      O.default.track(q.rMx.NITRO_TAB_VISITED, {
                          badge_decorator: v,
                          has_premium: ed,
                      }),
                          eG(Q.L.USER_DISMISS);
                  }))
                : eU === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(G._y, {
                        isTabSelected: en,
                        badgeCopy: J.intl.string(J.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (v = 2))
                  : eb
                    ? ((n = (0, r.jsx)(F.S, { expiresAt: eZ })), (v = 4))
                    : null != eI
                      ? ((n = (0, r.jsx)(W.Z, {
                            copy: eI,
                            showStars: !1,
                        })),
                        (v = 1))
                      : null != eh
                        ? ((n =
                              ec === S.tE.OFFER_COUNTDOWN && ej
                                  ? (0, r.jsx)(H.a, { discountOffer: eh })
                                  : (0, r.jsx)(G.GN, {
                                        userDiscount: eh,
                                        isTabSelected: en,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: ej,
                                    })),
                          (v = 3))
                        : null == eg || eD
                          ? eC
                              ? ((n = (0, r.jsx)(B.l, {
                                    isSelected: en,
                                    onSelect: () =>
                                        (0, h.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: Q.L.TAKE_ACTION,
                                        }),
                                })),
                                (v = 6))
                              : ex &&
                                ((n = (0, r.jsx)(U.Z, {
                                    isSelected: en,
                                    discountOffer: em,
                                })),
                                (v = 8))
                          : ((n =
                                ec === S.tE.OFFER_COUNTDOWN && eT
                                    ? (0, r.jsx)(H.F, { trialOffer: eg })
                                    : (0, r.jsx)(G.$H, {
                                          trialOffer: eg,
                                          isTabSelected: en,
                                          shouldShowOfferReminder: eT,
                                      })),
                            (v = 4));
        ev &&
            ((n = (0, r.jsx)(G._y, {
                isTabSelected: en,
                badgeCopy: J.intl.string(J.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (v = 4),
            (eK = () => {
                O.default.track(q.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: v,
                    has_premium: ed,
                }),
                    (0, M.ZL)();
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
                    onClick: eK,
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
            ? (0, r.jsx)(B.C, { children: eq })
            : ex && eH === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === v
              ? (0, r.jsx)(k.Z, {
                    targetElementRef: er,
                    discountOffer: em,
                    premiumSubscription: es,
                    dismissCoachmark: eB,
                    children: eq,
                })
              : eO && eH === s.z.PREMIUM_GROUP_POPOVER
                ? (0, r.jsx)(w.x, {
                      targetElementRef: er,
                      dismissPopover: eB,
                      children: eq,
                  })
                : eW
                  ? (0, r.jsx)(V.Z, { children: eq })
                  : eq;
    };
