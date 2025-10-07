n.d(t, {
    g: () => F,
    i: () => V,
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
    b = n(594174),
    _ = n(78839),
    O = n(626135),
    E = n(74538),
    v = n(502087),
    y = n(367074),
    I = n(695349),
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
    H = n(388032);
let V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            r = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
            i = (0, j.N)(),
            l = (0, N.Ng)(),
            o = (0, y.Vi)(),
            s = (0, D.V)(),
            c = (0, E.Qo)(n, r),
            u = (0, a.e7)([v.Z], () => v.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    F = (e) => {
        let t, n, v;
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
        let X = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            J = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
            $ = (0, E.Qo)(X, J),
            ee = (0, E.M5)(X, U.p9.TIER_2),
            et = (0, l.JA)("nitro"),
            en = (0, j.N)(),
            er = (0, N.Ng)(),
            ei = (0, T.$)(),
            el = (0, I.W)(),
            ea = (0, y.Vi)(),
            eo = (0, x.HI)({ trialOffer: en }),
            es = (0, D.V)(),
            ec = (0, x.eW)(),
            eu = (0, k.Kn)(),
            ed = null != ei && null != J && J.status === G.O0b.CANCELED,
            { fractionalState: ep, startsAt: ef, endsAt: eh } = (0, d.Z)({ forceFetch: !0 }),
            [eg, em] = (0, m.bf)(ep !== U.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ef.valueOf(),
                cooldownDurationMs: 0,
            }),
            eb = (0, S.Z)({ location: "NitroTabButton" }),
            e_ = (null == en ? void 0 : en.trial_id) === U.a7,
            eO = (0, p.YZ)("NitroTabButton"),
            eE = [],
            ev = [];
        (0, h.Kl)() &&
            (ea && eE.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eb && eE.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            el && eE.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eO && eE.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [ey, eI] = (0, m.US)(eE, void 0, !0);
        ed && ev.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eS, eC] = (0, m.US)(ev, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === W && null != ey && eI(B.L.AUTO_DISMISS), !0 === W && null != eS && eC(B.L.AUTO_DISMISS);
            }, [eI, W, ey, eC, eS]),
            !V({ selected: W }))
        )
            return null;
        let eT = () => {
            eg === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && em(B.L.TAKE_ACTION),
                O.default.track(G.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: v,
                    has_premium: $,
                }),
                null != ey && eI(B.L.USER_DISMISS);
        };
        if (
            (ep === U.a$.NONE ||
                el ||
                ((v = 7),
                (n = (0, r.jsx)(C.Z, {
                    className: "",
                    startsAt: ef,
                    endsAt: eh,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ea)
        )
            (n = (0, r.jsx)(P.Z, {})), (v = 0);
        else if (eo) {
            let e = (0, x.$q)();
            (n = (0, r.jsx)(w._y, {
                isTabSelected: W,
                badgeCopy: H.intl.string(H.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == en ? void 0 : en.expires_at) : null,
            })),
                (v = 4);
        } else
            ey === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ey === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(w._y, {
                      isTabSelected: W,
                      badgeCopy: H.intl.string(H.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (v = 2))
                : el
                  ? ((n = (0, r.jsx)(R.S, { expiresAt: eh })), (v = 4))
                  : null != es
                    ? ((n = (0, r.jsx)(M.Z, {
                          copy: es,
                          showStars: !1,
                      })),
                      (v = 1))
                    : null != er
                      ? ((n = (0, r.jsx)(w.GN, {
                            userDiscount: er,
                            isTabSelected: W,
                            includesAmountOff: !1,
                        })),
                        (v = 3))
                      : null == en || e_
                        ? eu
                            ? ((n = (0, r.jsx)(L.l, {
                                  isSelected: W,
                                  onSelect: () =>
                                      (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: B.L.TAKE_ACTION,
                                      }),
                              })),
                              (v = 6))
                            : ed &&
                              ((n = (0, r.jsx)(Z.Z, {
                                  isSelected: W,
                                  discountOffer: ei,
                              })),
                              (v = 8))
                        : ((n = (0, r.jsx)(w.$H, {
                              trialOffer: en,
                              isTabSelected: W,
                          })),
                          (v = 4));
        ec &&
            ((n = (0, r.jsx)(w._y, {
                isTabSelected: W,
                badgeCopy: H.intl.string(H.t.RDE0SU),
                offerExpiresAt: null,
            })),
            (v = 4),
            (eT = () => {
                O.default.track(G.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: v,
                    has_premium: $,
                }),
                    (0, x.ZL)();
            }));
        let eN = (0, r.jsx)(
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
                    text: (0, r.jsx)(f.Z, { children: ee ? H.intl.string(H.t["4gwVVl"]) : H.intl.string(H.t.Ipxkoq) }),
                    locationState: K,
                    onClick: eT,
                },
                Q,
                et,
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
        return eu
            ? (0, r.jsx)(L.C, { children: eN })
            : ed && eS === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === v
              ? (0, r.jsx)(A.Z, {
                    targetElementRef: q,
                    discountOffer: ei,
                    premiumSubscription: J,
                    dismissCoachmark: eC,
                    children: eN,
                })
              : eN;
    };
