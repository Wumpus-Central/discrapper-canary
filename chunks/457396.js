n.d(t, {
    g: () => q,
    i: () => Y,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(515753),
    u = n(927359),
    d = n(975298),
    p = n(866419),
    f = n(111028),
    h = n(211644),
    g = n(266454),
    m = n(243778),
    b = n(172416),
    _ = n(594174),
    E = n(78839),
    O = n(431),
    v = n(626135),
    y = n(74538),
    I = n(502087),
    C = n(367074),
    S = n(695349),
    N = n(931118),
    T = n(963590),
    P = n(767870),
    j = n(331972),
    x = n(104494),
    A = n(639119),
    Z = n(655525),
    w = n(93237),
    L = n(484605),
    R = n(961892),
    D = n(924540),
    M = n(467460),
    k = n(474486),
    U = n(497334),
    G = n(119850),
    B = n(938736),
    H = n(227140),
    V = n(474936),
    F = n(981631),
    z = n(921944),
    W = n(388032);
let Y = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
            r = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            i = (0, A.N)(),
            l = (0, x.Ng)(),
            o = (0, C.Vi)(),
            s = (0, G.V)(),
            c = (0, y.Qo)(n, r),
            u = (0, a.e7)([I.Z], () => I.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    q = (e) => {
        let t, n, I;
        var q,
            K,
            { selected: Q, nitroTabButtonRef: X, route: J, locationState: $ } = e,
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
        let et = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
            en = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
            { variant: er } = (0, N.ZP)("PremiumDiscountEndingNotice"),
            ei = (0, y.Qo)(et, en),
            el = (0, y.M5)(et, V.PremiumTypes.TIER_2),
            ea = (0, l.JA)("nitro"),
            eo = (0, A.N)(),
            es = (0, x.Ng)(),
            ec = (0, j.$)(),
            eu = (0, S.W)(),
            ed = (0, C.Vi)(),
            ep = (0, w.HI)({ trialOffer: eo }),
            ef = (0, G.V)(),
            eh = (0, w.eW)(),
            eg = (0, B.Kn)(),
            em = O.Z.getAlmostExpiringTrialOffers([V.Si.TIER_2]).length > 0 && null != eo && null != eo.expires_at,
            eb = O.Z.getAlmostExpiringDiscountOffers([V.Si.TIER_2]).length > 0 && null != es && null != es.expires_at,
            e_ = null != ec && null != en && en.status === F.O0b.CANCELED,
            { fractionalState: eE, startsAt: eO, endsAt: ev } = (0, d.Z)({ forceFetch: !0 }),
            [ey, eI] = (0, m.bf)(eE !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eO.valueOf(),
                cooldownDurationMs: 0,
            }),
            eC = (0, T.Z)({ location: "NitroTabButton" }),
            eS = (null == eo ? void 0 : eo.trial_id) === V.a7,
            eN = (0, p.YZ)("NitroTabButton"),
            eT = (0, b.bg)({ location: "NitroTabButton" }),
            eP = [],
            ej = [];
        (0, h.Kl)() &&
            (ed && eP.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eC && eP.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eu && eP.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eN && eP.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE),
            eT && eP.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [ex, eA] = (0, m.US)(eP, void 0, !0);
        e_ && ej.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eZ, ew] = (0, m.US)(ej, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === Q && null != ex && eA(z.L.AUTO_DISMISS), !0 === Q && null != eZ && ew(z.L.AUTO_DISMISS);
            }, [eA, Q, ex, ew, eZ]),
            !Y({ selected: Q }))
        )
            return null;
        let eL = () => {
            ey === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eI(z.L.TAKE_ACTION),
                v.default.track(F.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: I,
                    has_premium: ei,
                }),
                null != ex && eA(z.L.USER_DISMISS);
        };
        if (
            (eE === V.a$.NONE ||
                eu ||
                ((I = 7),
                (n = (0, r.jsx)(P.Z, {
                    className: "",
                    startsAt: eO,
                    endsAt: ev,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ed)
        )
            (n = (0, r.jsx)(Z.Z, {})), (I = 0);
        else if (ep) {
            let e = (0, w.$q)();
            (n = (0, r.jsx)(D._y, {
                isTabSelected: Q,
                badgeCopy: W.intl.string(W.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == eo ? void 0 : eo.expires_at) : null,
            })),
                (I = 4);
        } else
            ex === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ||
            ex === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ||
            ex === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(D._y, {
                      isTabSelected: Q,
                      badgeCopy: W.intl.string(W.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (I = 2))
                : eu
                  ? ((n = (0, r.jsx)(U.S, { expiresAt: ev })), (I = 4))
                  : null != ef
                    ? ((n = (0, r.jsx)(H.Z, {
                          copy: ef,
                          showStars: !1,
                      })),
                      (I = 1))
                    : null != es
                      ? ((n =
                            er === N.tE.OFFER_COUNTDOWN && eb
                                ? (0, r.jsx)(M.a, { discountOffer: es })
                                : (0, r.jsx)(D.GN, {
                                      userDiscount: es,
                                      isTabSelected: Q,
                                      includesAmountOff: !1,
                                  })),
                        (I = 3))
                      : null == eo || eS
                        ? eg
                            ? ((n = (0, r.jsx)(k.l, {
                                  isSelected: Q,
                                  onSelect: () =>
                                      (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: z.L.TAKE_ACTION,
                                      }),
                              })),
                              (I = 6))
                            : e_ &&
                              ((n = (0, r.jsx)(R.Z, {
                                  isSelected: Q,
                                  discountOffer: ec,
                              })),
                              (I = 8))
                        : ((n =
                              er === N.tE.OFFER_COUNTDOWN && em
                                  ? (0, r.jsx)(M.F, { trialOffer: eo })
                                  : (0, r.jsx)(D.$H, {
                                        trialOffer: eo,
                                        isTabSelected: Q,
                                    })),
                          (I = 4));
        eh &&
            ((n = (0, r.jsx)(D._y, {
                isTabSelected: Q,
                badgeCopy: W.intl.string(W.t.RDE0SU),
                offerExpiresAt: null,
            })),
            (I = 4),
            (eL = () => {
                v.default.track(F.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: I,
                    has_premium: ei,
                }),
                    (0, w.ZL)();
            }));
        let eR = (0, r.jsx)(
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
                    listItemRef: X,
                    selected: Q,
                    route: J,
                    icon: s.SrA,
                    text: (0, r.jsx)(f.Z, { children: el ? W.intl.string(W.t["4gwVVl"]) : W.intl.string(W.t.Ipxkoq) }),
                    locationState: $,
                    onClick: eL,
                },
                ee,
                ea,
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
            ? (0, r.jsx)(k.C, { children: eR })
            : e_ && eZ === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === I
              ? (0, r.jsx)(L.Z, {
                    targetElementRef: X,
                    discountOffer: ec,
                    premiumSubscription: en,
                    dismissCoachmark: ew,
                    children: eR,
                })
              : eR;
    };
