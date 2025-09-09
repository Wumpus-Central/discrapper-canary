n.d(t, {
    g: () => Q,
    i: () => q,
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
    B = n(819573),
    V = n(119850),
    H = n(938736),
    F = n(227140),
    z = n(474936),
    W = n(981631),
    Y = n(921944),
    K = n(388032);
let q = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, x.N)(),
            l = (0, P.Ng)(),
            o = (0, y.Vi)(),
            s = (0, V.V)(),
            c = (0, O.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    Q = (e) => {
        let t, n, E;
        var Q,
            X,
            { selected: J, nitroTabButtonRef: $, route: ee, locationState: et } = e,
            en = (function (e, t) {
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
        let er = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            ei = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            el = (0, O.Qo)(er, ei),
            ea = (0, O.M5)(er, z.p9.TIER_2),
            { enabled: eo, variant: es } = C.p1.useExperiment({ location: "NitroTabButton" }),
            { enabled: ec } = C.pd.useExperiment({ location: "NitroTabButton" }),
            { enabled: eu } = I.b.useConfig({ location: "NitroTabButton" });
        C.VL.useConfig({ location: "NitroTabButton" }), C.CF.useConfig({ location: "NitroTabButton" });
        let ed = (0, l.JA)("nitro"),
            ep = (0, x.N)(),
            ef = (0, P.Ng)(),
            eh = (0, j.$)("nitro tab"),
            eg = (0, v.W)(),
            em = (0, y.Vi)(),
            { isEligible: eb, cohort: e_ } = (0, U.Q1)(),
            eO = (0, Z.HI)({ trialOffer: ep }),
            eE = (0, V.V)(),
            ey = (0, Z.eW)(),
            ev = S.ZP.useExperiment({ location: "NitroTabButton" }),
            eI = (0, H.Kn)() && ev.cohort === S.xI.Control,
            eC = eu && null != eh && null != ei && ei.status === W.O0b.CANCELED,
            { fractionalState: eS, startsAt: eT, endsAt: eN } = (0, d.Z)({ forceFetch: !0 }),
            [ej, eP] = (0, g.bf)(eS !== z.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eT.valueOf(),
                cooldownDurationMs: 0,
            }),
            ex = (0, T.Z)({ location: "NitroTabButton" }),
            eA = (null == ep ? void 0 : ep.trial_id) === z.a7,
            eZ = (0, p.YZ)("NitroTabButton"),
            ew = [],
            eL = [];
        (0, f.Kl)() &&
            (eb && ew.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE),
            em && ew.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            ex && ew.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eg && ew.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eZ && ew.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [eR, eD] = (0, g.US)(ew, void 0, !0);
        eC && eL.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eb && eL.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK);
        let [ek, eM] = (0, g.US)(eL, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === J && null != eR && eD(Y.L.AUTO_DISMISS), !0 === J && null != ek && eM(Y.L.AUTO_DISMISS);
            }, [eD, J, eR, eM, ek]),
            !q({ selected: J }))
        )
            return null;
        let eU = () => {
            ej === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eP(Y.L.TAKE_ACTION),
                _.default.track(W.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: el,
                }),
                null != eR && eD(Y.L.USER_DISMISS);
        };
        if (
            (eS === z.a$.NONE ||
                eg ||
                ((E = 7),
                (n = (0, r.jsx)(N.Z, {
                    className: "",
                    startsAt: eT,
                    endsAt: eN,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            eb)
        )
            (n = (0, r.jsx)(G.Z, {})), (E = 9);
        else if (em) (n = (0, r.jsx)(A.Z, {})), (E = 0);
        else if (eO) {
            let e = (0, Z.$q)();
            (n = (0, r.jsx)(D._y, {
                isTabSelected: J,
                badgeCopy: K.intl.string(K.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == ep ? void 0 : ep.expires_at) : null,
            })),
                (E = 4);
        } else
            eR === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eR === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(D._y, {
                      isTabSelected: J,
                      badgeCopy: K.intl.string(K.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : eg
                  ? ((n = (0, r.jsx)(M.S, { expiresAt: eN })), (E = 4))
                  : null != eE
                    ? ((n = (0, r.jsx)(F.Z, {
                          copy: eE,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != ef
                      ? ((n = (0, r.jsx)(D.GN, {
                            userDiscount: ef,
                            isTabSelected: J,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == ep || eA
                        ? eI
                            ? ((n = (0, r.jsx)(k.l, {
                                  isSelected: J,
                                  onSelect: () =>
                                      (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: Y.L.TAKE_ACTION,
                                      }),
                              })),
                              (E = 6))
                            : eC &&
                              ((n = (0, r.jsx)(R.Z, {
                                  isSelected: J,
                                  discountOffer: eh,
                              })),
                              (E = 8))
                        : ((n = (0, r.jsx)(D.$H, {
                              trialOffer: ep,
                              isTabSelected: J,
                          })),
                          (E = 4));
        let eG = K.intl.string(K.t.Ipxkoq);
        ea && ec && (eG = K.intl.string(K.t["4gwVVl"])),
            !el &&
                eo &&
                (es === C.Rx.TRY_NITRO && null != ep
                    ? (eG = K.intl.string(K.t["3O6A4e"]))
                    : es === C.Rx.JOIN_NITRO
                      ? (eG = K.intl.string(K.t.brBiOz))
                      : es === C.Rx.GET_NITRO && (eG = K.intl.string(K.t.GayC1t))),
            ey &&
                ev.cohort !== S.xI.Control &&
                ((n = (0, r.jsx)(D._y, {
                    isTabSelected: J,
                    badgeCopy: K.intl.string(K.t.RDE0SU),
                    offerExpiresAt: null,
                })),
                (E = 4),
                (eU = () => {
                    _.default.track(W.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: E,
                        has_premium: el,
                    }),
                        (0, Z.ZL)();
                }));
        let eB = (0, r.jsx)(
            c.Qj,
            ((Q = (function (e) {
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
                    listItemRef: $,
                    selected: J,
                    route: ee,
                    icon: s.SrA,
                    text: eG,
                    locationState: et,
                    onClick: eU,
                },
                en,
                ed,
            )),
            (X = X =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(X))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(X)).forEach(function (e) {
                      Object.defineProperty(Q, e, Object.getOwnPropertyDescriptor(X, e));
                  }),
            Q),
        );
        return ey && ev.cohort === S.xI.Static
            ? (0, r.jsx)(w.X, { children: eB })
            : eI
              ? (0, r.jsx)(k.C, { children: eB })
              : eC && ek === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E
                ? (0, r.jsx)(L.Z, {
                      targetElementRef: $,
                      discountOffer: eh,
                      premiumSubscription: ei,
                      dismissCoachmark: eM,
                      children: eB,
                  })
                : eb && (0, U.G2)() && ek === o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK && 9 === E
                  ? (0, r.jsx)(B.Z, {
                        targetElementRef: $,
                        dismissCoachmark: eM,
                        cohort: e_,
                        children: eB,
                    })
                  : eB;
    };
