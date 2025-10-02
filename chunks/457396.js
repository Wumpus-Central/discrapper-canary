n.d(t, {
    g: () => z,
    i: () => F,
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
    y = n(502087),
    v = n(367074),
    I = n(695349),
    S = n(219673),
    C = n(963590),
    T = n(767870),
    N = n(331972),
    j = n(104494),
    P = n(639119),
    x = n(655525),
    A = n(93237),
    Z = n(484605),
    w = n(961892),
    L = n(924540),
    R = n(474486),
    D = n(497334),
    k = n(119850),
    M = n(938736),
    U = n(227140),
    G = n(474936),
    B = n(981631),
    H = n(921944),
    V = n(388032);
let F = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            r = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
            i = (0, P.N)(),
            l = (0, j.Ng)(),
            o = (0, v.Vi)(),
            s = (0, k.V)(),
            c = (0, E.Qo)(n, r),
            u = (0, a.e7)([y.Z], () => y.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    z = (e) => {
        let t, n, y;
        var z,
            W,
            { selected: q, nitroTabButtonRef: Y, route: K, locationState: Q } = e,
            X = (function (e, t) {
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
        let J = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
            $ = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
            ee = (0, E.Qo)(J, $),
            et = (0, E.M5)(J, G.p9.TIER_2),
            { enabled: en } = S.b.useConfig({ location: "NitroTabButton" }),
            er = (0, l.JA)("nitro"),
            ei = (0, P.N)(),
            el = (0, j.Ng)(),
            ea = (0, N.$)("nitro tab"),
            eo = (0, I.W)(),
            es = (0, v.Vi)(),
            ec = (0, A.HI)({ trialOffer: ei }),
            eu = (0, k.V)(),
            ed = (0, A.eW)(),
            ep = (0, M.Kn)(),
            ef = en && null != ea && null != $ && $.status === B.O0b.CANCELED,
            { fractionalState: eh, startsAt: eg, endsAt: em } = (0, d.Z)({ forceFetch: !0 }),
            [eb, e_] = (0, m.bf)(eh !== G.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eg.valueOf(),
                cooldownDurationMs: 0,
            }),
            eO = (0, C.Z)({ location: "NitroTabButton" }),
            eE = (null == ei ? void 0 : ei.trial_id) === G.a7,
            ey = (0, p.YZ)("NitroTabButton"),
            ev = [],
            eI = [];
        (0, h.Kl)() &&
            (es && ev.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eO && ev.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eo && ev.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            ey && ev.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [eS, eC] = (0, m.US)(ev, void 0, !0);
        ef && eI.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eT, eN] = (0, m.US)(eI, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === q && null != eS && eC(H.L.AUTO_DISMISS), !0 === q && null != eT && eN(H.L.AUTO_DISMISS);
            }, [eC, q, eS, eN, eT]),
            !F({ selected: q }))
        )
            return null;
        let ej = () => {
            eb === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && e_(H.L.TAKE_ACTION),
                O.default.track(B.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ee,
                }),
                null != eS && eC(H.L.USER_DISMISS);
        };
        if (
            (eh === G.a$.NONE ||
                eo ||
                ((y = 7),
                (n = (0, r.jsx)(T.Z, {
                    className: "",
                    startsAt: eg,
                    endsAt: em,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            es)
        )
            (n = (0, r.jsx)(x.Z, {})), (y = 0);
        else if (ec) {
            let e = (0, A.$q)();
            (n = (0, r.jsx)(L._y, {
                isTabSelected: q,
                badgeCopy: V.intl.string(V.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == ei ? void 0 : ei.expires_at) : null,
            })),
                (y = 4);
        } else
            eS === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eS === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(L._y, {
                      isTabSelected: q,
                      badgeCopy: V.intl.string(V.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (y = 2))
                : eo
                  ? ((n = (0, r.jsx)(D.S, { expiresAt: em })), (y = 4))
                  : null != eu
                    ? ((n = (0, r.jsx)(U.Z, {
                          copy: eu,
                          showStars: !1,
                      })),
                      (y = 1))
                    : null != el
                      ? ((n = (0, r.jsx)(L.GN, {
                            userDiscount: el,
                            isTabSelected: q,
                            includesAmountOff: !1,
                        })),
                        (y = 3))
                      : null == ei || eE
                        ? ep
                            ? ((n = (0, r.jsx)(R.l, {
                                  isSelected: q,
                                  onSelect: () =>
                                      (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: H.L.TAKE_ACTION,
                                      }),
                              })),
                              (y = 6))
                            : ef &&
                              ((n = (0, r.jsx)(w.Z, {
                                  isSelected: q,
                                  discountOffer: ea,
                              })),
                              (y = 8))
                        : ((n = (0, r.jsx)(L.$H, {
                              trialOffer: ei,
                              isTabSelected: q,
                          })),
                          (y = 4));
        ed &&
            ((n = (0, r.jsx)(L._y, {
                isTabSelected: q,
                badgeCopy: V.intl.string(V.t.RDE0SU),
                offerExpiresAt: null,
            })),
            (y = 4),
            (ej = () => {
                O.default.track(B.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ee,
                }),
                    (0, A.ZL)();
            }));
        let eP = (0, r.jsx)(
            c.Qj,
            ((z = (function (e) {
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
                    listItemRef: Y,
                    selected: q,
                    route: K,
                    icon: s.SrA,
                    text: (0, r.jsx)(f.Z, { children: et ? V.intl.string(V.t["4gwVVl"]) : V.intl.string(V.t.Ipxkoq) }),
                    locationState: Q,
                    onClick: ej,
                },
                X,
                er,
            )),
            (W = W =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(W))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(W)).forEach(function (e) {
                      Object.defineProperty(z, e, Object.getOwnPropertyDescriptor(W, e));
                  }),
            z),
        );
        return ep
            ? (0, r.jsx)(R.C, { children: eP })
            : ef && eT === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y
              ? (0, r.jsx)(Z.Z, {
                    targetElementRef: Y,
                    discountOffer: ea,
                    premiumSubscription: $,
                    dismissCoachmark: eN,
                    children: eP,
                })
              : eP;
    };
