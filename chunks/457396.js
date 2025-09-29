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
    I = n(266198),
    S = n(219673),
    C = n(963590),
    T = n(767870),
    N = n(331972),
    P = n(104494),
    j = n(639119),
    x = n(655525),
    A = n(93237),
    Z = n(484605),
    w = n(961892),
    L = n(924540),
    R = n(474486),
    D = n(497334),
    k = n(190398),
    M = n(819573),
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
            i = (0, j.N)(),
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
            { selected: q, nitroTabButtonRef: Q, route: X, locationState: J } = e,
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
            { enabled: ei } = S.b.useConfig({ location: "NitroTabButton" }),
            el = (0, l.JA)("nitro"),
            ea = (0, j.N)(),
            eo = (0, P.Ng)(),
            es = (0, N.$)("nitro tab"),
            ec = (0, v.W)(),
            eu = (0, y.Vi)(),
            { isEligible: ed, cohort: ep } = (0, I.Q1)(),
            ef = (0, A.HI)({ trialOffer: ea }),
            eh = (0, U.V)(),
            eg = (0, A.eW)(),
            em = (0, G.Kn)(),
            eb = ei && null != es && null != et && et.status === H.O0b.CANCELED,
            { fractionalState: e_, startsAt: eO, endsAt: eE } = (0, d.Z)({ forceFetch: !0 }),
            [ey, ev] = (0, g.bf)(e_ !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eO.valueOf(),
                cooldownDurationMs: 0,
            }),
            eI = (0, C.Z)({ location: "NitroTabButton" }),
            eS = (null == ea ? void 0 : ea.trial_id) === V.a7,
            eC = (0, p.YZ)("NitroTabButton"),
            eT = [],
            eN = [];
        (0, f.Kl)() &&
            (ed && eT.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE),
            eu && eT.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eI && eT.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ec && eT.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eC && eT.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [eP, ej] = (0, g.US)(eT, void 0, !0);
        eb && eN.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ed && (0, I.G2)() && eN.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK);
        let [ex, eA] = (0, g.US)(eN, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === q && null != eP && ej(F.L.AUTO_DISMISS), !0 === q && null != ex && eA(F.L.AUTO_DISMISS);
            }, [ej, q, eP, eA, ex]),
            !W({ selected: q }))
        )
            return null;
        let eZ = () => {
            ey === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ev(F.L.TAKE_ACTION),
                _.default.track(H.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: en,
                }),
                null != eP && ej(F.L.USER_DISMISS);
        };
        if (
            (e_ === V.a$.NONE ||
                ec ||
                ((E = 7),
                (n = (0, r.jsx)(T.Z, {
                    className: "",
                    startsAt: eO,
                    endsAt: eE,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ed)
        )
            (n = (0, r.jsx)(k.Z, {})), (E = 9);
        else if (eu) (n = (0, r.jsx)(x.Z, {})), (E = 0);
        else if (ef) {
            let e = (0, A.$q)();
            (n = (0, r.jsx)(L._y, {
                isTabSelected: q,
                badgeCopy: z.intl.string(z.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == ea ? void 0 : ea.expires_at) : null,
            })),
                (E = 4);
        } else
            eP === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eP === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(L._y, {
                      isTabSelected: q,
                      badgeCopy: z.intl.string(z.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : ec
                  ? ((n = (0, r.jsx)(D.S, { expiresAt: eE })), (E = 4))
                  : null != eh
                    ? ((n = (0, r.jsx)(B.Z, {
                          copy: eh,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != eo
                      ? ((n = (0, r.jsx)(L.GN, {
                            userDiscount: eo,
                            isTabSelected: q,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == ea || eS
                        ? em
                            ? ((n = (0, r.jsx)(R.l, {
                                  isSelected: q,
                                  onSelect: () =>
                                      (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: F.L.TAKE_ACTION,
                                      }),
                              })),
                              (E = 6))
                            : eb &&
                              ((n = (0, r.jsx)(w.Z, {
                                  isSelected: q,
                                  discountOffer: es,
                              })),
                              (E = 8))
                        : ((n = (0, r.jsx)(L.$H, {
                              trialOffer: ea,
                              isTabSelected: q,
                          })),
                          (E = 4));
        eg &&
            ((n = (0, r.jsx)(L._y, {
                isTabSelected: q,
                badgeCopy: z.intl.string(z.t.RDE0SU),
                offerExpiresAt: null,
            })),
            (E = 4),
            (eZ = () => {
                _.default.track(H.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: en,
                }),
                    (0, A.ZL)();
            }));
        let ew = (0, r.jsx)(
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
                    listItemRef: Q,
                    selected: q,
                    route: X,
                    icon: s.SrA,
                    text: er ? z.intl.string(z.t["4gwVVl"]) : z.intl.string(z.t.Ipxkoq),
                    locationState: J,
                    onClick: eZ,
                },
                $,
                el,
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
        return em
            ? (0, r.jsx)(R.C, { children: ew })
            : eb && ex === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E
              ? (0, r.jsx)(Z.Z, {
                    targetElementRef: Q,
                    discountOffer: es,
                    premiumSubscription: et,
                    dismissCoachmark: eA,
                    children: ew,
                })
              : ed && (0, I.G2)() && ex === o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK && 9 === E
                ? (0, r.jsx)(M.Z, {
                      targetElementRef: Q,
                      dismissCoachmark: eA,
                      cohort: ep,
                      children: ew,
                  })
                : ew;
    };
