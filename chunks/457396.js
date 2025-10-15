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
    b = n(172416),
    _ = n(594174),
    O = n(78839),
    E = n(626135),
    v = n(74538),
    y = n(502087),
    I = n(367074),
    C = n(695349),
    S = n(963590),
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
            n = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
            r = (0, a.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
            i = (0, P.N)(),
            l = (0, j.Ng)(),
            o = (0, I.Vi)(),
            s = (0, k.V)(),
            c = (0, v.Qo)(n, r),
            u = (0, a.e7)([y.Z], () => y.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    z = (e) => {
        let t, n, y;
        var z,
            W,
            { selected: Y, nitroTabButtonRef: q, route: K, locationState: Q } = e,
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
        let J = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
            $ = (0, a.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
            ee = (0, v.Qo)(J, $),
            et = (0, v.M5)(J, G.PremiumTypes.TIER_2),
            en = (0, l.JA)("nitro"),
            er = (0, P.N)(),
            ei = (0, j.Ng)(),
            el = (0, N.$)(),
            ea = (0, C.W)(),
            eo = (0, I.Vi)(),
            es = (0, A.HI)({ trialOffer: er }),
            ec = (0, k.V)(),
            eu = (0, A.eW)(),
            ed = (0, M.Kn)(),
            ep = null != el && null != $ && $.status === B.O0b.CANCELED,
            { fractionalState: ef, startsAt: eh, endsAt: eg } = (0, d.Z)({ forceFetch: !0 }),
            [em, eb] = (0, m.bf)(ef !== G.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eh.valueOf(),
                cooldownDurationMs: 0,
            }),
            e_ = (0, S.Z)({ location: "NitroTabButton" }),
            eO = (null == er ? void 0 : er.trial_id) === G.a7,
            eE = (0, p.YZ)("NitroTabButton"),
            ev = (0, b.bg)({ location: "NitroTabButton" }),
            ey = [],
            eI = [];
        (0, h.Kl)() &&
            (eo && ey.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            e_ && ey.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ea && ey.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eE && ey.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE),
            ev && ey.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
        let [eC, eS] = (0, m.US)(ey, void 0, !0);
        ep && eI.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
        let [eT, eN] = (0, m.US)(eI, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === Y && null != eC && eS(H.L.AUTO_DISMISS), !0 === Y && null != eT && eN(H.L.AUTO_DISMISS);
            }, [eS, Y, eC, eN, eT]),
            !F({ selected: Y }))
        )
            return null;
        let ej = () => {
            em === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eb(H.L.TAKE_ACTION),
                E.default.track(B.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: y,
                    has_premium: ee,
                }),
                null != eC && eS(H.L.USER_DISMISS);
        };
        if (
            (ef === G.a$.NONE ||
                ea ||
                ((y = 7),
                (n = (0, r.jsx)(T.Z, {
                    className: "",
                    startsAt: eh,
                    endsAt: eg,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            eo)
        )
            (n = (0, r.jsx)(x.Z, {})), (y = 0);
        else if (es) {
            let e = (0, A.$q)();
            (n = (0, r.jsx)(L._y, {
                isTabSelected: Y,
                badgeCopy: V.intl.string(V.t.OS9KPu),
                offerExpiresAt: !0 === e ? (null == er ? void 0 : er.expires_at) : null,
            })),
                (y = 4);
        } else
            eC === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ||
            eC === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ||
            eC === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(L._y, {
                      isTabSelected: Y,
                      badgeCopy: V.intl.string(V.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (y = 2))
                : ea
                  ? ((n = (0, r.jsx)(D.S, { expiresAt: eg })), (y = 4))
                  : null != ec
                    ? ((n = (0, r.jsx)(U.Z, {
                          copy: ec,
                          showStars: !1,
                      })),
                      (y = 1))
                    : null != ei
                      ? ((n = (0, r.jsx)(L.GN, {
                            userDiscount: ei,
                            isTabSelected: Y,
                            includesAmountOff: !1,
                        })),
                        (y = 3))
                      : null == er || eO
                        ? ed
                            ? ((n = (0, r.jsx)(R.l, {
                                  isSelected: Y,
                                  onSelect: () =>
                                      (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: H.L.TAKE_ACTION,
                                      }),
                              })),
                              (y = 6))
                            : ep &&
                              ((n = (0, r.jsx)(w.Z, {
                                  isSelected: Y,
                                  discountOffer: el,
                              })),
                              (y = 8))
                        : ((n = (0, r.jsx)(L.$H, {
                              trialOffer: er,
                              isTabSelected: Y,
                          })),
                          (y = 4));
        eu &&
            ((n = (0, r.jsx)(L._y, {
                isTabSelected: Y,
                badgeCopy: V.intl.string(V.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (y = 4),
            (ej = () => {
                E.default.track(B.rMx.NITRO_TAB_VISITED, {
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
                    listItemRef: q,
                    selected: Y,
                    route: K,
                    icon: s.SrA,
                    text: (0, r.jsx)(f.Z, { children: et ? V.intl.string(V.t["4gwVVn"]) : V.intl.string(V.t.Ipxkog) }),
                    locationState: Q,
                    onClick: ej,
                },
                X,
                en,
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
        return ed
            ? (0, r.jsx)(R.C, { children: eP })
            : ep && eT === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y
              ? (0, r.jsx)(Z.Z, {
                    targetElementRef: q,
                    discountOffer: el,
                    premiumSubscription: $,
                    dismissCoachmark: eN,
                    children: eP,
                })
              : eP;
    };
