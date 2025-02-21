n.d(t, {
    g: () => F,
    i: () => H
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(91192),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(515753),
    u = n(927359),
    d = n(975298),
    p = n(605236),
    h = n(243778),
    f = n(819640),
    g = n(594174),
    m = n(351402),
    b = n(78839),
    _ = n(626135),
    E = n(74538),
    O = n(502087),
    N = n(695349),
    v = n(650032),
    y = n(767870),
    I = n(351367),
    C = n(787156),
    S = n(104494),
    T = n(639119),
    P = n(655525),
    j = n(314684),
    A = n(52188),
    Z = n(346497),
    x = n(924540),
    L = n(474486),
    w = n(119850),
    R = n(701910),
    D = n(938736),
    k = n(227140),
    M = n(474936),
    U = n(981631),
    G = n(921944),
    W = n(388032),
    V = n(761644);
let B = 'NitroTabButton',
    H = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, o.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            i = (0, T.N)(),
            l = (0, S.Ng)(),
            a = (0, Z.Vi)(),
            s = (0, D.vx)(B),
            c = (0, D.wG)(B),
            u = (0, j.$_)(),
            d = (0, w.V)(),
            p = (0, E.Qo)(n, r),
            h = (0, o.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            f = (0, I.m)({ location: B }),
            m = t || null != i || null != l || a || s || c || null != u || null != d || !0 === f || p,
            _ = null != h ? h : null == n ? void 0 : n.createdAt;
        return m || (null != n && null != _ && Date.now() - _.getTime() > 1209600000);
    },
    F = (e) => {
        let t, n, O, F;
        var z,
            Y,
            { selected: K, route: q, locationState: Q } = e,
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
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['selected', 'route', 'locationState']);
        let J = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            $ = (0, o.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            ee = (0, E.Qo)(J, $),
            et = (0, l.JA)('nitro'),
            en = (0, T.N)(),
            er = (0, S.Ng)(),
            ei = (0, N.W)(),
            el = (0, o.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == en,
            eo = (0, Z.Vi)(),
            ea = (0, j.$_)(),
            es = (0, w.V)(),
            ec = (0, D.Kn)(B),
            eu = (0, D.vx)(B),
            ed = (0, D.wG)(B),
            ep = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
            { fractionalState: eh, startsAt: ef, endsAt: eg } = (0, d.Z)({ forceFetch: !0 }),
            [em, eb] = (0, h.bf)(eh !== M.a$.NONE ? a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ef.valueOf(),
                cooldownDurationMs: 0
            }),
            { enabled: e_ } = v._.useExperiment({ location: B }, { autoTrackExposure: !1 }),
            eE = e_ && (null == en ? void 0 : en.trial_id) === M.a7,
            [eO, eN] = (0, h.US)(ei ? [a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0),
            ev = (0, I.m)({ location: B }),
            ey = (0, p.wE)(a.z.Q1_2025_MARKETING_MOMENT_PROMO_SHEET),
            eI = (0, C.wQ)({ location: B }),
            eC = (0, p.wE)(a.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK),
            eS = () => !0 === ev && !0 === eI && !1 === eC;
        if (
            (i.useEffect(() => {
                !0 === K && eO === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && eN(G.L.AUTO_DISMISS);
            }, [eN, eO, K]),
            !H({ selected: K }))
        )
            return null;
        eh === M.a$.NONE ||
            ei ||
            ((F = 9),
            (O = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: ef,
                endsAt: eg,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0
            }))),
            !0 === ev
                ? (O =
                      !0 === ey
                          ? (0, r.jsx)(L.Du, {})
                          : (0, r.jsx)(k.Z, {
                                copy: W.NW.string(W.t.OS9KPj),
                                showStars: !1
                            }))
                : eu
                  ? ((t = V.referralIncentive), (F = 7))
                  : ed
                    ? ((O = (0, r.jsx)(R.Z, { copy: W.NW.string(W.t.jyYgZ2) })), (F = 8))
                    : eo
                      ? ((O = (0, r.jsx)(P.Z, {})), (F = 0))
                      : null != eO && eO === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                        ? ((O = (0, r.jsx)(k.Z, {
                              copy: W.NW.string(W.t.HwUCnp),
                              showStars: !1
                          })),
                          (F = 4))
                        : null != ea
                          ? ((O = (0, r.jsx)(k.Z, {
                                copy: ea,
                                showStars: !1
                            })),
                            (F = 1))
                          : null != es
                            ? ((O = (0, r.jsx)(k.Z, {
                                  copy: es,
                                  showStars: !1
                              })),
                              (F = 1))
                            : null != er
                              ? ((O = (0, r.jsx)(x.GN, {
                                    userDiscount: er,
                                    isTabSelected: K,
                                    includesAmountOff: !1
                                })),
                                (F = 3))
                              : null == en || eE
                                ? ec
                                    ? ((O = (0, r.jsx)(L.lH, {
                                          isSelected: K,
                                          onSelect: () => (0, p.EW)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: G.L.TAKE_ACTION })
                                      })),
                                      (F = 6))
                                    : el && ((O = (0, r.jsx)(A.k, { entryPoint: A.U.PrivateMessages })), K || (t = V.localizeBadge), (F = 5))
                                : ((O = (0, r.jsx)(x.$H, {
                                      trialOffer: en,
                                      isTabSelected: K
                                  })),
                                  (F = 4));
        let eT = (0, r.jsx)(
            c.Qj,
            ((z = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    selected: K,
                    route: q,
                    icon: s.SrA,
                    text: W.NW.string(W.t.Ipxkoq),
                    locationState: Q,
                    onClick: () => {
                        em === a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eb(G.L.TAKE_ACTION),
                            _.default.track(U.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: F,
                                has_premium: ee
                            }),
                            eu || ed ? ((0, p.EW)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: G.L.TAKE_ACTION }), ed && (0, p.EW)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: G.L.TAKE_ACTION })) : null != eO ? eN(G.L.USER_DISMISS) : !0 === ev && !1 === ey ? (0, p.EW)(a.z.Q1_2025_MARKETING_MOMENT_PROMO_SHEET, { dismissAction: G.L.TAKE_ACTION }) : eS() && (0, p.EW)(a.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: G.L.TAKE_ACTION });
                    }
                },
                X,
                et
            )),
            (Y = Y =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: O
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(Y))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(Y)).forEach(function (e) {
                      Object.defineProperty(z, e, Object.getOwnPropertyDescriptor(Y, e));
                  }),
            z)
        );
        if (!0 === eS()) {
            let e = E.ZP.isPremiumExactly(J, M.p9.TIER_1) ? W.NW.string(W.t.tI65aW) : W.NW.string(W.t.toA0Ly);
            return (0, r.jsx)(L.s, {
                children: () => eT,
                description: e
            });
        }
        return ec ? (0, r.jsx)(L.CI, { children: eT }) : eu && !ep ? (0, r.jsx)(L.A7, { children: () => eT }) : eT;
    };
