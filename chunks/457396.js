n.d(t, {
    g: () => F,
    i: () => H,
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
    S = n(963590),
    C = n(767870),
    T = n(331972),
    N = n(104494),
    j = n(639119),
    P = n(655525),
    x = n(93237),
    A = n(484605),
    Z = n(961892),
    w = n(924540),
    L = n(474486),
    R = n(497334),
    D = n(119850),
    k = n(938736),
    M = n(227140),
    U = n(474936),
    G = n(981631),
    B = n(921944),
    V = n(388032);
let H = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, j.N)(),
            l = (0, N.Ng)(),
            o = (0, y.Vi)(),
            s = (0, D.V)(),
            c = (0, O.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    F = (e) => {
        let t, n, E;
        var F,
            z,
            { selected: W, nitroTabButtonRef: q, route: Y, locationState: K } = e,
            Q = (function (e, t) {
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
        let X = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            J = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            $ = (0, O.Qo)(X, J),
            ee = (0, O.M5)(X, U.p9.TIER_2),
            { enabled: et } = I.b.useConfig({ location: "NitroTabButton" }),
            en = (0, l.JA)("nitro"),
            er = (0, j.N)(),
            ei = (0, N.Ng)(),
            el = (0, T.$)("nitro tab"),
            ea = (0, v.W)(),
            eo = (0, y.Vi)(),
            es = (0, x.HI)({ trialOffer: er }),
            ec = (0, D.V)(),
            eu = (0, x.eW)(),
            ed = (0, k.Kn)(),
            ep = et && null != el && null != J && J.status === G.O0b.CANCELED,
            { fractionalState: ef, startsAt: eh, endsAt: eg } = (0, d.Z)({ forceFetch: !0 }),
            [em, eb] = (0, g.bf)(ef !== U.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eh.valueOf(),
                cooldownDurationMs: 0,
            }),
            e_ = (0, S.Z)({ location: "NitroTabButton" }),
            eO = (null == er ? void 0 : er.trial_id) === U.a7,
            eE = (0, p.YZ)("NitroTabButton"),
            ey = [],
            ev = [];
        (0, f.Kl)() &&
            (eo && ey.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            e_ && ey.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ea && ey.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eE && ey.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [eI, eS] = (0, g.US)(ey, void 0, !0);
        ep && ev.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eC, eT] = (0, g.US)(ev, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === W && null != eI && eS(B.L.AUTO_DISMISS), !0 === W && null != eC && eT(B.L.AUTO_DISMISS);
            }, [eS, W, eI, eT, eC]),
            !H({ selected: W }))
        )
            return null;
        let eN = () => {
            em === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eb(B.L.TAKE_ACTION),
                _.default.track(G.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: $,
                }),
                null != eI && eS(B.L.USER_DISMISS);
        };
        if (
            (ef === U.a$.NONE ||
                ea ||
                ((E = 7),
                (n = (0, r.jsx)(C.Z, {
                    className: "",
                    startsAt: eh,
                    endsAt: eg,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            eo)
        )
            (n = (0, r.jsx)(P.Z, {})), (E = 0);
        else if (es) {
            let e = (0, x.$q)();
            (n = (0, r.jsx)(w._y, {
                isTabSelected: W,
                badgeCopy: V.intl.string(V.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == er ? void 0 : er.expires_at) : null,
            })),
                (E = 4);
        } else
            eI === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eI === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(w._y, {
                      isTabSelected: W,
                      badgeCopy: V.intl.string(V.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : ea
                  ? ((n = (0, r.jsx)(R.S, { expiresAt: eg })), (E = 4))
                  : null != ec
                    ? ((n = (0, r.jsx)(M.Z, {
                          copy: ec,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != ei
                      ? ((n = (0, r.jsx)(w.GN, {
                            userDiscount: ei,
                            isTabSelected: W,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == er || eO
                        ? ed
                            ? ((n = (0, r.jsx)(L.l, {
                                  isSelected: W,
                                  onSelect: () =>
                                      (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: B.L.TAKE_ACTION,
                                      }),
                              })),
                              (E = 6))
                            : ep &&
                              ((n = (0, r.jsx)(Z.Z, {
                                  isSelected: W,
                                  discountOffer: el,
                              })),
                              (E = 8))
                        : ((n = (0, r.jsx)(w.$H, {
                              trialOffer: er,
                              isTabSelected: W,
                          })),
                          (E = 4));
        eu &&
            ((n = (0, r.jsx)(w._y, {
                isTabSelected: W,
                badgeCopy: V.intl.string(V.t.RDE0SU),
                offerExpiresAt: null,
            })),
            (E = 4),
            (eN = () => {
                _.default.track(G.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: $,
                }),
                    (0, x.ZL)();
            }));
        let ej = (0, r.jsx)(
            c.Qj,
            ((F = (function (e) {
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
                    listItemRef: q,
                    selected: W,
                    route: Y,
                    icon: s.SrA,
                    text: ee ? V.intl.string(V.t["4gwVVl"]) : V.intl.string(V.t.Ipxkoq),
                    locationState: K,
                    onClick: eN,
                },
                Q,
                en,
            )),
            (z = z =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(z))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(z)).forEach(function (e) {
                      Object.defineProperty(F, e, Object.getOwnPropertyDescriptor(z, e));
                  }),
            F),
        );
        return ed
            ? (0, r.jsx)(L.C, { children: ej })
            : ep && eC === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E
              ? (0, r.jsx)(A.Z, {
                    targetElementRef: q,
                    discountOffer: el,
                    premiumSubscription: J,
                    dismissCoachmark: eT,
                    children: ej,
                })
              : ej;
    };
