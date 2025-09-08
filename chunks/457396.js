n.d(t, {
    g: () => q,
    i: () => K,
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
    f = n(211644),
    h = n(266454),
    g = n(243778),
    m = n(594174),
    b = n(78839),
    _ = n(626135),
    O = n(74538),
    E = n(502087),
    y = n(367074),
    v = n(695349),
    I = n(219673),
    C = n(532245),
    S = n(870041),
    T = n(963590),
    N = n(767870),
    j = n(331972),
    P = n(104494),
    x = n(639119),
    A = n(655525),
    Z = n(93237),
    w = n(138176),
    L = n(484605),
    R = n(961892),
    D = n(924540),
    k = n(474486),
    M = n(497334),
    U = n(951570),
    G = n(190398),
    B = n(119850),
    V = n(938736),
    H = n(227140),
    F = n(474936),
    z = n(981631),
    W = n(921944),
    Y = n(388032);
let K = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, x.N)(),
            l = (0, P.Ng)(),
            o = (0, y.Vi)(),
            s = (0, B.V)(),
            c = (0, O.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    q = (e) => {
        let t, n, E;
        var q,
            Q,
            { selected: X, nitroTabButtonRef: J, route: $, locationState: ee } = e,
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
        let en = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            er = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            ei = (0, O.Qo)(en, er),
            el = (0, O.M5)(en, F.p9.TIER_2),
            { enabled: ea, variant: eo } = C.p1.useExperiment({ location: "NitroTabButton" }),
            { enabled: es } = C.pd.useExperiment({ location: "NitroTabButton" }),
            { enabled: ec } = I.b.useConfig({ location: "NitroTabButton" });
        C.VL.useConfig({ location: "NitroTabButton" }), C.CF.useConfig({ location: "NitroTabButton" });
        let eu = (0, l.JA)("nitro"),
            ed = (0, x.N)(),
            ep = (0, P.Ng)(),
            ef = (0, j.$)("nitro tab"),
            eh = (0, v.W)(),
            eg = (0, y.Vi)(),
            { isEligible: em } = (0, U.Q1)(),
            eb = (0, Z.HI)({ trialOffer: ed }),
            e_ = (0, B.V)(),
            eO = (0, Z.eW)(),
            eE = S.ZP.useExperiment({ location: "NitroTabButton" }),
            ey = (0, V.Kn)() && eE.cohort === S.xI.Control,
            ev = ec && null != ef && null != er && er.status === z.O0b.CANCELED,
            { fractionalState: eI, startsAt: eC, endsAt: eS } = (0, d.Z)({ forceFetch: !0 }),
            [eT, eN] = (0, g.bf)(eI !== F.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eC.valueOf(),
                cooldownDurationMs: 0,
            }),
            ej = (0, T.Z)({ location: "NitroTabButton" }),
            eP = (null == ed ? void 0 : ed.trial_id) === F.a7,
            ex = (0, p.YZ)("NitroTabButton"),
            eA = [],
            eZ = [];
        (0, f.Kl)() &&
            (em && eA.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE),
            eg && eA.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            ej && eA.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eh && eA.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            ex && eA.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [ew, eL] = (0, g.US)(eA, void 0, !0);
        ev && eZ.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eR, eD] = (0, g.US)(eZ, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === X && null != ew && eL(W.L.AUTO_DISMISS), !0 === X && null != eR && eD(W.L.AUTO_DISMISS);
            }, [eL, X, ew, eD, eR]),
            !K({ selected: X }))
        )
            return null;
        let ek = () => {
            eT === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eN(W.L.TAKE_ACTION),
                _.default.track(z.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: ei,
                }),
                null != ew && eL(W.L.USER_DISMISS);
        };
        if (
            (eI === F.a$.NONE ||
                eh ||
                ((E = 7),
                (n = (0, r.jsx)(N.Z, {
                    className: "",
                    startsAt: eC,
                    endsAt: eS,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            em)
        )
            (n = (0, r.jsx)(G.Z, {})), (E = 9);
        else if (eg) (n = (0, r.jsx)(A.Z, {})), (E = 0);
        else if (eb) {
            let e = (0, Z.$q)();
            (n = (0, r.jsx)(D._y, {
                isTabSelected: X,
                badgeCopy: Y.intl.string(Y.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == ed ? void 0 : ed.expires_at) : null,
            })),
                (E = 4);
        } else
            ew === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ew === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(D._y, {
                      isTabSelected: X,
                      badgeCopy: Y.intl.string(Y.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : eh
                  ? ((n = (0, r.jsx)(M.S, { expiresAt: eS })), (E = 4))
                  : null != e_
                    ? ((n = (0, r.jsx)(H.Z, {
                          copy: e_,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != ep
                      ? ((n = (0, r.jsx)(D.GN, {
                            userDiscount: ep,
                            isTabSelected: X,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == ed || eP
                        ? ey
                            ? ((n = (0, r.jsx)(k.l, {
                                  isSelected: X,
                                  onSelect: () =>
                                      (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: W.L.TAKE_ACTION,
                                      }),
                              })),
                              (E = 6))
                            : ev &&
                              ((n = (0, r.jsx)(R.Z, {
                                  isSelected: X,
                                  discountOffer: ef,
                              })),
                              (E = 8))
                        : ((n = (0, r.jsx)(D.$H, {
                              trialOffer: ed,
                              isTabSelected: X,
                          })),
                          (E = 4));
        let eM = Y.intl.string(Y.t.Ipxkoq);
        el && es && (eM = Y.intl.string(Y.t["4gwVVl"])),
            !ei &&
                ea &&
                (eo === C.Rx.TRY_NITRO && null != ed
                    ? (eM = Y.intl.string(Y.t["3O6A4e"]))
                    : eo === C.Rx.JOIN_NITRO
                      ? (eM = Y.intl.string(Y.t.brBiOz))
                      : eo === C.Rx.GET_NITRO && (eM = Y.intl.string(Y.t.GayC1t))),
            eO &&
                eE.cohort !== S.xI.Control &&
                ((n = (0, r.jsx)(D._y, {
                    isTabSelected: X,
                    badgeCopy: Y.intl.string(Y.t.RDE0SU),
                    offerExpiresAt: null,
                })),
                (E = 4),
                (ek = () => {
                    _.default.track(z.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: E,
                        has_premium: ei,
                    }),
                        (0, Z.ZL)();
                }));
        let eU = (0, r.jsx)(
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
                    selected: X,
                    route: $,
                    icon: s.SrA,
                    text: eM,
                    locationState: ee,
                    onClick: ek,
                },
                et,
                eu,
            )),
            (Q = Q =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(Q))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(Q)).forEach(function (e) {
                      Object.defineProperty(q, e, Object.getOwnPropertyDescriptor(Q, e));
                  }),
            q),
        );
        return eO && eE.cohort === S.xI.Static
            ? (0, r.jsx)(w.X, { children: eU })
            : ey
              ? (0, r.jsx)(k.C, { children: eU })
              : ev && eR === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E
                ? (0, r.jsx)(L.Z, {
                      targetElementRef: J,
                      discountOffer: ef,
                      premiumSubscription: er,
                      dismissCoachmark: eD,
                      children: eU,
                  })
                : eU;
    };
