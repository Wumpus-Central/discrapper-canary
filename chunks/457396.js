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
    I = n(266198),
    C = n(219673),
    S = n(870041),
    T = n(963590),
    N = n(767870),
    P = n(331972),
    j = n(104494),
    x = n(639119),
    A = n(655525),
    Z = n(93237),
    w = n(138176),
    L = n(484605),
    R = n(961892),
    D = n(924540),
    k = n(474486),
    M = n(497334),
    U = n(190398),
    G = n(819573),
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
            l = (0, j.Ng)(),
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
            { enabled: ea } = C.b.useConfig({ location: "NitroTabButton" }),
            eo = (0, l.JA)("nitro"),
            es = (0, x.N)(),
            ec = (0, j.Ng)(),
            eu = (0, P.$)("nitro tab"),
            ed = (0, v.W)(),
            ep = (0, y.Vi)(),
            { isEligible: ef, cohort: eh } = (0, I.Q1)(),
            eg = (0, Z.HI)({ trialOffer: es }),
            em = (0, B.V)(),
            eb = (0, Z.eW)(),
            e_ = S.ZP.useExperiment({ location: "NitroTabButton" }),
            eO = (0, V.Kn)() && e_.cohort === S.xI.Control,
            eE = ea && null != eu && null != er && er.status === z.O0b.CANCELED,
            { fractionalState: ey, startsAt: ev, endsAt: eI } = (0, d.Z)({ forceFetch: !0 }),
            [eC, eS] = (0, g.bf)(ey !== F.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ev.valueOf(),
                cooldownDurationMs: 0,
            }),
            eT = (0, T.Z)({ location: "NitroTabButton" }),
            eN = (null == es ? void 0 : es.trial_id) === F.a7,
            eP = (0, p.YZ)("NitroTabButton"),
            ej = [],
            ex = [];
        (0, f.Kl)() &&
            (ef && ej.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE),
            ep && ej.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eT && ej.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ed && ej.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eP && ej.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [eA, eZ] = (0, g.US)(ej, void 0, !0);
        eE && ex.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ef && (0, I.G2)() && ex.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK);
        let [ew, eL] = (0, g.US)(ex, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === X && null != eA && eZ(W.L.AUTO_DISMISS), !0 === X && null != ew && eL(W.L.AUTO_DISMISS);
            }, [eZ, X, eA, eL, ew]),
            !K({ selected: X }))
        )
            return null;
        let eR = () => {
            eC === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eS(W.L.TAKE_ACTION),
                _.default.track(z.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: ei,
                }),
                null != eA && eZ(W.L.USER_DISMISS);
        };
        if (
            (ey === F.a$.NONE ||
                ed ||
                ((E = 7),
                (n = (0, r.jsx)(N.Z, {
                    className: "",
                    startsAt: ev,
                    endsAt: eI,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ef)
        )
            (n = (0, r.jsx)(U.Z, {})), (E = 9);
        else if (ep) (n = (0, r.jsx)(A.Z, {})), (E = 0);
        else if (eg) {
            let e = (0, Z.$q)();
            (n = (0, r.jsx)(D._y, {
                isTabSelected: X,
                badgeCopy: Y.intl.string(Y.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == es ? void 0 : es.expires_at) : null,
            })),
                (E = 4);
        } else
            eA === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eA === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(D._y, {
                      isTabSelected: X,
                      badgeCopy: Y.intl.string(Y.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : ed
                  ? ((n = (0, r.jsx)(M.S, { expiresAt: eI })), (E = 4))
                  : null != em
                    ? ((n = (0, r.jsx)(H.Z, {
                          copy: em,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != ec
                      ? ((n = (0, r.jsx)(D.GN, {
                            userDiscount: ec,
                            isTabSelected: X,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == es || eN
                        ? eO
                            ? ((n = (0, r.jsx)(k.l, {
                                  isSelected: X,
                                  onSelect: () =>
                                      (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                          dismissAction: W.L.TAKE_ACTION,
                                      }),
                              })),
                              (E = 6))
                            : eE &&
                              ((n = (0, r.jsx)(R.Z, {
                                  isSelected: X,
                                  discountOffer: eu,
                              })),
                              (E = 8))
                        : ((n = (0, r.jsx)(D.$H, {
                              trialOffer: es,
                              isTabSelected: X,
                          })),
                          (E = 4));
        eb &&
            e_.cohort !== S.xI.Control &&
            ((n = (0, r.jsx)(D._y, {
                isTabSelected: X,
                badgeCopy: Y.intl.string(Y.t.RDE0SU),
                offerExpiresAt: null,
            })),
            (E = 4),
            (eR = () => {
                _.default.track(z.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: ei,
                }),
                    (0, Z.ZL)();
            }));
        let eD = (0, r.jsx)(
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
                    text: el ? Y.intl.string(Y.t["4gwVVl"]) : Y.intl.string(Y.t.Ipxkoq),
                    locationState: ee,
                    onClick: eR,
                },
                et,
                eo,
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
        return eb && e_.cohort === S.xI.Static
            ? (0, r.jsx)(w.X, { children: eD })
            : eO
              ? (0, r.jsx)(k.C, { children: eD })
              : eE && ew === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E
                ? (0, r.jsx)(L.Z, {
                      targetElementRef: J,
                      discountOffer: eu,
                      premiumSubscription: er,
                      dismissCoachmark: eL,
                      children: eD,
                  })
                : ef && (0, I.G2)() && ew === o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK && 9 === E
                  ? (0, r.jsx)(G.Z, {
                        targetElementRef: J,
                        dismissCoachmark: eL,
                        cohort: eh,
                        children: eD,
                    })
                  : eD;
    };
