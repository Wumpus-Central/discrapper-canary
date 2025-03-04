n.d(t, {
    g: () => H,
    i: () => B
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
    v = n(767870),
    y = n(351367),
    I = n(787156),
    C = n(104494),
    S = n(639119),
    T = n(655525),
    P = n(314684),
    j = n(52188),
    A = n(346497),
    Z = n(924540),
    x = n(474486),
    L = n(119850),
    w = n(701910),
    R = n(938736),
    D = n(227140),
    k = n(474936),
    M = n(981631),
    U = n(921944),
    G = n(388032),
    W = n(607359);
let V = 'NitroTabButton',
    B = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, o.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            i = (0, S.N)(),
            l = (0, C.Ng)(),
            a = (0, A.Vi)(),
            s = (0, R.vx)(V),
            c = (0, R.wG)(V),
            u = (0, P.$_)(),
            d = (0, L.V)(),
            p = (0, E.Qo)(n, r),
            h = (0, o.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            f = (0, y.m)({ location: V }),
            m = t || null != i || null != l || a || s || c || null != u || null != d || !0 === f || p,
            _ = null != h ? h : null == n ? void 0 : n.createdAt;
        return m || (null != n && null != _ && Date.now() - _.getTime() > 1209600000);
    },
    H = (e) => {
        let t, n, O, H;
        var F,
            z,
            { selected: Y, route: K, locationState: q } = e,
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
        let Q = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            J = (0, o.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            $ = (0, E.Qo)(Q, J),
            ee = (0, l.JA)('nitro'),
            et = (0, S.N)(),
            en = (0, C.Ng)(),
            er = (0, N.W)(),
            ei = (0, o.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == et,
            el = (0, A.Vi)(),
            eo = (0, P.$_)(),
            ea = (0, L.V)(),
            es = (0, R.Kn)(V),
            ec = (0, R.vx)(V),
            eu = (0, R.wG)(V),
            ed = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
            { fractionalState: ep, startsAt: eh, endsAt: ef } = (0, d.Z)({ forceFetch: !0 }),
            [eg, em] = (0, h.bf)(ep !== k.a$.NONE ? a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eh.valueOf(),
                cooldownDurationMs: 0
            }),
            eb = (null == et ? void 0 : et.trial_id) === k.a7,
            [e_, eE] = (0, h.US)(er ? [a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0),
            eO = (0, y.m)({ location: V }),
            eN = (0, p.wE)(a.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE),
            ev = (0, I.wQ)({ location: V }),
            ey = (0, p.wE)(a.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK);
        if (
            (i.useEffect(() => {
                !0 === Y && e_ === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && eE(U.L.AUTO_DISMISS);
            }, [eE, e_, Y]),
            !B({ selected: Y }))
        )
            return null;
        ep === k.a$.NONE ||
            er ||
            ((H = 9),
            (O = (0, r.jsx)(v.Z, {
                className: '',
                startsAt: eh,
                endsAt: ef,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0
            }))),
            !0 === eO
                ? (O = eN
                      ? (0, r.jsx)(x.Du, {})
                      : (0, r.jsx)(D.Z, {
                            copy: G.NW.string(G.t.OS9KPj),
                            showStars: !1
                        }))
                : ec
                  ? ((t = W.referralIncentive), (H = 7))
                  : eu
                    ? ((O = (0, r.jsx)(w.Z, { copy: G.NW.string(G.t.jyYgZ2) })), (H = 8))
                    : el
                      ? ((O = (0, r.jsx)(T.Z, {})), (H = 0))
                      : null != e_ && e_ === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                        ? ((O = (0, r.jsx)(D.Z, {
                              copy: G.NW.string(G.t.HwUCnp),
                              showStars: !1
                          })),
                          (H = 4))
                        : null != eo
                          ? ((O = (0, r.jsx)(D.Z, {
                                copy: eo,
                                showStars: !1
                            })),
                            (H = 1))
                          : null != ea
                            ? ((O = (0, r.jsx)(D.Z, {
                                  copy: ea,
                                  showStars: !1
                              })),
                              (H = 1))
                            : null != en
                              ? ((O = (0, r.jsx)(Z.GN, {
                                    userDiscount: en,
                                    isTabSelected: Y,
                                    includesAmountOff: !1
                                })),
                                (H = 3))
                              : null == et || eb
                                ? es
                                    ? ((O = (0, r.jsx)(x.lH, {
                                          isSelected: Y,
                                          onSelect: () => (0, p.EW)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: U.L.TAKE_ACTION })
                                      })),
                                      (H = 6))
                                    : ei && ((O = (0, r.jsx)(j.k, { entryPoint: j.U.PrivateMessages })), Y || (t = W.localizeBadge), (H = 5))
                                : ((O = (0, r.jsx)(Z.$H, {
                                      trialOffer: et,
                                      isTabSelected: Y
                                  })),
                                  (H = 4));
        let eI = (0, r.jsx)(
            c.Qj,
            ((F = (function (e) {
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
                    selected: Y,
                    route: K,
                    icon: s.SrA,
                    text: G.NW.string(G.t.Ipxkoq),
                    locationState: q,
                    onClick: () => {
                        eg === a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && em(U.L.TAKE_ACTION),
                            _.default.track(M.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: H,
                                has_premium: $
                            }),
                            ec || eu ? ((0, p.EW)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: U.L.TAKE_ACTION }), eu && (0, p.EW)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: U.L.TAKE_ACTION })) : null != e_ && eE(U.L.USER_DISMISS);
                    }
                },
                X,
                ee
            )),
            (z = z =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: O
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
            F)
        );
        if (!0 == (!0 === eO && !0 === ev && !1 === ey)) {
            let e = E.ZP.isPremiumExactly(Q, k.p9.TIER_1) ? G.NW.string(G.t.tI65aW) : G.NW.string(G.t.toA0Ly);
            return (0, r.jsx)(x.s, {
                children: () => eI,
                description: e
            });
        }
        return es ? (0, r.jsx)(x.CI, { children: eI }) : ec && !ed ? (0, r.jsx)(x.A7, { children: () => eI }) : eI;
    };
