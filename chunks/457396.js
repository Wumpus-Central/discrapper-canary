n.d(t, {
    g: () => X,
    i: () => J,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    a = n(79766),
    s = n(442837),
    o = n(704215),
    c = n(194983),
    u = n(481060),
    d = n(515753),
    p = n(927359),
    f = n(975298),
    h = n(866419),
    g = n(211644),
    m = n(266454),
    _ = n(243778),
    b = n(172416),
    E = n(594174),
    O = n(78839),
    y = n(431),
    v = n(626135),
    I = n(74538),
    C = n(502087),
    S = n(367074),
    T = n(695349),
    N = n(931118),
    j = n(963590),
    P = n(767870),
    x = n(331972),
    A = n(622909),
    Z = n(639119),
    w = n(715130),
    L = n(655525),
    R = n(244989),
    D = n(675957),
    M = n(93237),
    k = n(484605),
    U = n(961892),
    G = n(924540),
    B = n(467460),
    H = n(474486),
    V = n(497334),
    F = n(119850),
    z = n(938736),
    Y = n(227140),
    W = n(474936),
    q = n(981631),
    K = n(921944),
    Q = n(388032);
let J = (e) => {
        let { selected: t } = e,
            n = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
            r = (0, s.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
            i = (0, Z.N)(),
            l = (0, A.N)(),
            a = (0, S.Vi)(),
            o = (0, F.V)(),
            c = (0, I.Qo)(n, r),
            u = (0, s.e7)([C.Z], () => C.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || a || null != o || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    X = (e) => {
        let t, n, C;
        var X,
            $,
            ee,
            { selected: et, nitroTabButtonRef: en, route: er, locationState: ei } = e,
            el = (function (e, t) {
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
        let ea = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
            es = (0, s.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
            { variant: eo, hasNitroTabBadgeOfferReminder: ec } = (0, N.ZP)("PremiumDiscountEndingNotice"),
            eu = (0, I.Qo)(ea, es),
            ed = (0, I.M5)(ea, W.PremiumTypes.TIER_2),
            ep = (0, l.JA)("nitro"),
            ef = (0, Z.N)(),
            eh = (0, A.N)(),
            eg = (0, x.$)(),
            em = (0, T.W)(),
            e_ = (0, S.Vi)(),
            eb = (0, M.HI)({ trialOffer: ef }),
            eE = (0, F.V)(),
            eO = (0, M.eW)(),
            ey = (0, D._h)(),
            ev = (0, z.Kn)(),
            eI = y.Z.getAlmostExpiringTrialOffers([W.Si.TIER_2]),
            eC = ec && eI.length > 0 && null != ef && null != ef.expires_at,
            eS = y.Z.getAlmostExpiringDiscountOffers([W.Si.TIER_2]),
            eT = ec && eS.length > 0 && null != eh && null != eh.expires_at,
            eN = null != eg && null != es && es.status === q.O0b.CANCELED,
            { fractionalState: ej, startsAt: eP, endsAt: ex } = (0, f.Z)({ forceFetch: !0 }),
            [eA, eZ] = (0, _.bf)(ej !== W.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eP.valueOf(),
                cooldownDurationMs: 0,
            }),
            ew = (0, j.Z)({ location: "NitroTabButton" }),
            eL = (null == ef ? void 0 : ef.trial_id) === W.a7,
            eR = (0, h.YZ)("NitroTabButton"),
            eD = (0, b.bg)({ location: "NitroTabButton" }),
            eM = [],
            ek = [];
        (0, g.Kl)() &&
            ((eT || (eC && !eL)) && eM.push(o.z.NITRO_TAB_BADGE_OFFER_REMINDER),
            ey && eM.push(o.z.RECURRING_3P_PROMOTION_POPOVER),
            e_ && eM.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            ew && eM.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            em && eM.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eR && eM.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE),
            eD && eM.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [eU, eG] = (0, _.US)(eM, void 0, !0);
        eN && ek.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eB, eH] = (0, _.US)(ek, void 0, !0),
            eV = (0, w.H)(a.I.PREMIUM_TAB),
            [eF, ez] = (0, _.TE)(
                null != eV && "premiumTab" === eV.properties.properties.oneofKind
                    ? o.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                null != (ee = null == eV ? void 0 : eV.id) ? ee : "",
                void 0,
                !0,
            );
        if (
            (i.useEffect(() => {
                !0 === et && null != eU && eG(K.L.AUTO_DISMISS),
                    !0 === et && null != eB && eH(K.L.AUTO_DISMISS),
                    !0 === et && null != eF && ez(K.L.AUTO_DISMISS);
            }, [eG, et, eU, eH, eB, eF, ez]),
            !J({ selected: et }))
        )
            return null;
        let eY = () => {
            eA === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eZ(K.L.TAKE_ACTION),
                v.default.track(q.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: C,
                    has_premium: eu,
                }),
                null != eU && eG(K.L.USER_DISMISS),
                null != eF && ez(K.L.USER_DISMISS);
        };
        if (
            (ej === W.a$.NONE ||
                em ||
                ((C = 7),
                (n = (0, r.jsx)(P.Z, {
                    className: "",
                    startsAt: eP,
                    endsAt: ex,
                    messageStyle: p.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            null != eV && "premiumTab" === eV.properties.properties.oneofKind)
        )
            (n = (0, r.jsx)(R.Z, {
                componentId: eV.id,
                badgeCopy: eV.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eV.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eF !== o.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (C = 9);
        else if (e_) (n = (0, r.jsx)(L.Z, {})), (C = 0);
        else if (eb) {
            let e = (0, M.$q)();
            (n = (0, r.jsx)(G._y, {
                isTabSelected: et,
                badgeCopy: Q.intl.string(Q.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == ef ? void 0 : ef.expires_at) : null,
            })),
                (C = 4);
        } else
            eU === o.z.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, r.jsx)(u.Cts, {
                      type: "new",
                      variant: "expressive",
                  })),
                  (C = 4),
                  (eY = () => {
                      v.default.track(q.rMx.NITRO_TAB_VISITED, {
                          badge_decorator: C,
                          has_premium: eu,
                      }),
                          eG(K.L.USER_DISMISS);
                  }))
                : eU === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ||
                    eU === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ||
                    eU === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(G._y, {
                        isTabSelected: et,
                        badgeCopy: Q.intl.string(Q.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (C = 2))
                  : em
                    ? ((n = (0, r.jsx)(V.S, { expiresAt: ex })), (C = 4))
                    : null != eE
                      ? ((n = (0, r.jsx)(Y.Z, {
                            copy: eE,
                            showStars: !1,
                        })),
                        (C = 1))
                      : null != eh
                        ? ((n =
                              eo === N.tE.OFFER_COUNTDOWN && eT
                                  ? (0, r.jsx)(B.a, { discountOffer: eh })
                                  : (0, r.jsx)(G.GN, {
                                        userDiscount: eh,
                                        isTabSelected: et,
                                        includesAmountOff: !1,
                                        shouldShowOfferReminder: eT,
                                    })),
                          (C = 3))
                        : null == ef || eL
                          ? ev
                              ? ((n = (0, r.jsx)(H.l, {
                                    isSelected: et,
                                    onSelect: () =>
                                        (0, m.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: K.L.TAKE_ACTION,
                                        }),
                                })),
                                (C = 6))
                              : eN &&
                                ((n = (0, r.jsx)(U.Z, {
                                    isSelected: et,
                                    discountOffer: eg,
                                })),
                                (C = 8))
                          : ((n =
                                eo === N.tE.OFFER_COUNTDOWN && eC
                                    ? (0, r.jsx)(B.F, { trialOffer: ef })
                                    : (0, r.jsx)(G.$H, {
                                          trialOffer: ef,
                                          isTabSelected: et,
                                          shouldShowOfferReminder: eC,
                                      })),
                            (C = 4));
        eO &&
            ((n = (0, r.jsx)(G._y, {
                isTabSelected: et,
                badgeCopy: Q.intl.string(Q.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (C = 4),
            (eY = () => {
                v.default.track(q.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: C,
                    has_premium: eu,
                }),
                    (0, M.ZL)();
            }));
        let eW = (0, r.jsx)(
            d.Qj,
            ((X = (function (e) {
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
                    listItemRef: en,
                    selected: et,
                    route: er,
                    icon: u.SrA,
                    text: (0, r.jsx)(c.Z, { children: ed ? Q.intl.string(Q.t["4gwVVn"]) : Q.intl.string(Q.t.Ipxkog) }),
                    locationState: ei,
                    onClick: eY,
                },
                el,
                ep,
            )),
            ($ = $ =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(X, Object.getOwnPropertyDescriptors($))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object($)).forEach(function (e) {
                      Object.defineProperty(X, e, Object.getOwnPropertyDescriptor($, e));
                  }),
            X),
        );
        return ev
            ? (0, r.jsx)(H.C, { children: eW })
            : eN && eB === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === C
              ? (0, r.jsx)(k.Z, {
                    targetElementRef: en,
                    discountOffer: eg,
                    premiumSubscription: es,
                    dismissCoachmark: eH,
                    children: eW,
                })
              : eW;
    };
