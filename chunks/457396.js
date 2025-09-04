n.d(t, {
    g: () => Y,
    i: () => W,
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
    N = n(963590),
    T = n(767870),
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
    U = n(119850),
    G = n(938736),
    B = n(227140),
    V = n(474936),
    H = n(981631),
    F = n(921944),
    z = n(388032);
let W = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, x.N)(),
            l = (0, P.Ng)(),
            o = (0, y.Vi)(),
            s = (0, U.V)(),
            c = (0, O.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    Y = (e) => {
        let t, n, E;
        var Y,
            K,
            { selected: q, nitroTabButtonRef: X, route: Q, locationState: J } = e,
            $ = (function (e, t) {
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
        let ee = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            et = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            en = (0, O.Qo)(ee, et),
            er = (0, O.M5)(ee, V.p9.TIER_2),
            { enabled: ei, variant: el } = C.p1.useExperiment({ location: "NitroTabButton" }),
            { enabled: ea } = C.pd.useExperiment({ location: "NitroTabButton" }),
            { enabled: eo } = I.b.useConfig({ location: "NitroTabButton" });
        C.VL.useConfig({ location: "NitroTabButton" }), C.CF.useConfig({ location: "NitroTabButton" });
        let es = (0, l.JA)("nitro"),
            ec = (0, x.N)(),
            eu = (0, P.Ng)(),
            ed = (0, j.$)("nitro tab"),
            ep = (0, v.W)(),
            ef = (0, y.Vi)(),
            eh = (0, Z.HI)({ trialOffer: ec }),
            eg = (0, U.V)(),
            em = (0, Z.eW)(),
            eb = S.ZP.useExperiment({ location: "NitroTabButton" }),
            e_ = (0, G.Kn)() && eb.cohort === S.xI.Control,
            eO = eo && null != ed && null != et && et.status === H.O0b.CANCELED,
            { fractionalState: eE, startsAt: ey, endsAt: ev } = (0, d.Z)({ forceFetch: !0 }),
            [eI, eC] = (0, g.bf)(eE !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ey.valueOf(),
                cooldownDurationMs: 0,
            }),
            eS = (0, N.Z)({ location: "NitroTabButton" }),
            eN = (null == ec ? void 0 : ec.trial_id) === V.a7,
            eT = (0, p.YZ)("NitroTabButton"),
            ej = [],
            eP = [];
        (0, f.Kl)() &&
            (ef && ej.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eS && ej.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ep && ej.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eT && ej.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [ex, eA] = (0, g.US)(ej, void 0, !0);
        eO && eP.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eZ, ew] = (0, g.US)(eP, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === q && null != ex && eA(F.L.AUTO_DISMISS);
            }, [eA, q, ex]),
            !W({ selected: q }))
        )
            return null;
        let eL = () => {
            eI === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eC(F.L.TAKE_ACTION),
                _.default.track(H.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: en,
                }),
                null != ex && eA(F.L.USER_DISMISS);
        };
        if (
            (eE === V.a$.NONE ||
                ep ||
                ((E = 7),
                (n = (0, r.jsx)(T.Z, {
                    className: "",
                    startsAt: ey,
                    endsAt: ev,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ef)
        )
            (n = (0, r.jsx)(A.Z, {})), (E = 0);
        else if (eh) {
            let e = (0, Z.$q)();
            (n = (0, r.jsx)(D._y, {
                isTabSelected: q,
                badgeCopy: z.intl.string(z.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == ec ? void 0 : ec.expires_at) : null,
            })),
                (E = 4);
        } else
            ex === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ex === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(D._y, {
                      isTabSelected: q,
                      badgeCopy: z.intl.string(z.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : ep
                  ? ((n = (0, r.jsx)(M.S, { expiresAt: ev })), (E = 4))
                  : null != eg
                    ? ((n = (0, r.jsx)(B.Z, {
                          copy: eg,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != eu
                      ? ((n = (0, r.jsx)(D.GN, {
                            userDiscount: eu,
                            isTabSelected: q,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == ec || eN
                        ? e_
                            ? ((n = (0, r.jsx)(k.l, {
                                  isSelected: q,
                                  onSelect: () =>
                                      (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: F.L.TAKE_ACTION,
                                      }),
                              })),
                              (E = 6))
                            : eO &&
                              ((n = (0, r.jsx)(R.Z, {
                                  isSelected: q,
                                  discountOffer: ed,
                              })),
                              (E = 8))
                        : ((n = (0, r.jsx)(D.$H, {
                              trialOffer: ec,
                              isTabSelected: q,
                          })),
                          (E = 4));
        let eR = z.intl.string(z.t.Ipxkoq);
        er && ea && (eR = z.intl.string(z.t["4gwVVl"])),
            !en &&
                ei &&
                (el === C.Rx.TRY_NITRO && null != ec
                    ? (eR = z.intl.string(z.t["3O6A4e"]))
                    : el === C.Rx.JOIN_NITRO
                      ? (eR = z.intl.string(z.t.brBiOz))
                      : el === C.Rx.GET_NITRO && (eR = z.intl.string(z.t.GayC1t))),
            em &&
                eb.cohort !== S.xI.Control &&
                ((n = (0, r.jsx)(D._y, {
                    isTabSelected: q,
                    badgeCopy: z.intl.string(z.t.RDE0SU),
                    offerExpiresAt: null,
                })),
                (E = 4),
                (eL = () => {
                    _.default.track(H.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: E,
                        has_premium: en,
                    }),
                        (0, Z.ZL)();
                }));
        let eD = (0, r.jsx)(
            c.Qj,
            ((Y = (function (e) {
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
                    selected: q,
                    route: Q,
                    icon: s.SrA,
                    text: eR,
                    locationState: J,
                    onClick: eL,
                },
                $,
                es,
            )),
            (K = K =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(Y, Object.getOwnPropertyDescriptors(K))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(K)).forEach(function (e) {
                      Object.defineProperty(Y, e, Object.getOwnPropertyDescriptor(K, e));
                  }),
            Y),
        );
        return em && eb.cohort === S.xI.Static
            ? (0, r.jsx)(w.X, { children: eD })
            : e_
              ? (0, r.jsx)(k.C, { children: eD })
              : eO && eZ === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E
                ? (0, r.jsx)(L.Z, {
                      targetElementRef: X,
                      discountOffer: ed,
                      premiumSubscription: et,
                      dismissCoachmark: ew,
                      children: eD,
                  })
                : eD;
    };
