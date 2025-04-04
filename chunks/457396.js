n.d(t, {
    g: () => V,
    i: () => W
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(91192),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(515753),
    u = n(927359),
    d = n(975298),
    p = n(605236),
    h = n(243778),
    f = n(594174),
    g = n(351402),
    m = n(78839),
    b = n(626135),
    _ = n(74538),
    E = n(502087),
    O = n(695349),
    N = n(767870),
    y = n(351367),
    I = n(787156),
    v = n(104494),
    C = n(639119),
    S = n(655525),
    T = n(314684),
    P = n(52188),
    j = n(346497),
    A = n(924540),
    Z = n(474486),
    x = n(119850),
    w = n(938736),
    L = n(227140),
    R = n(474936),
    D = n(981631),
    k = n(921944),
    M = n(388032),
    U = n(419720);
let G = 'NitroTabButton',
    W = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, C.N)(),
            l = (0, v.Ng)(),
            o = (0, j.Vi)(),
            s = (0, T.$_)(),
            c = (0, x.V)(),
            u = (0, _.Qo)(n, r),
            d = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            p = (0, y.m)({ location: G }),
            h = t || null != i || null != l || o || null != s || null != c || !0 === p || u,
            g = null != d ? d : null == n ? void 0 : n.createdAt;
        return h || (null != n && null != g && Date.now() - g.getTime() > 1209600000);
    },
    V = (e) => {
        let t, n, E, V;
        var B,
            H,
            { selected: F, route: z, locationState: Y } = e,
            K = (function (e, t) {
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
        let q = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            Q = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            X = (0, _.Qo)(q, Q),
            J = (0, l.JA)('nitro'),
            $ = (0, C.N)(),
            ee = (0, v.Ng)(),
            et = (0, O.W)(),
            en = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == $,
            er = (0, j.Vi)(),
            ei = (0, T.$_)(),
            el = (0, x.V)(),
            ea = (0, w.Kn)(G),
            { fractionalState: eo, startsAt: es, endsAt: ec } = (0, d.Z)({ forceFetch: !0 }),
            [eu, ed] = (0, h.bf)(eo !== R.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: es.valueOf(),
                cooldownDurationMs: 0
            }),
            ep = (null == $ ? void 0 : $.trial_id) === R.a7,
            [eh, ef] = (0, h.US)(et ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0),
            eg = (0, y.m)({ location: G }),
            em = (0, p.wE)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE),
            eb = (0, I.wQ)({ location: G }),
            e_ = (0, p.wE)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK);
        if (
            (i.useEffect(() => {
                !0 === F && eh === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && ef(k.L.AUTO_DISMISS);
            }, [ef, eh, F]),
            !W({ selected: F }))
        )
            return null;
        eo === R.a$.NONE ||
            et ||
            ((V = 7),
            (E = (0, r.jsx)(N.Z, {
                className: '',
                startsAt: es,
                endsAt: ec,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0
            }))),
            !0 === eg
                ? (E = em
                      ? (0, r.jsx)(Z.Du, {})
                      : (0, r.jsx)(L.Z, {
                            copy: M.NW.string(M.t.OS9KPj),
                            showStars: !1
                        }))
                : er
                  ? ((E = (0, r.jsx)(S.Z, {})), (V = 0))
                  : null != eh && eh === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                    ? ((E = (0, r.jsx)(L.Z, {
                          copy: M.NW.string(M.t.HwUCnp),
                          showStars: !1
                      })),
                      (V = 4))
                    : null != ei
                      ? ((E = (0, r.jsx)(L.Z, {
                            copy: ei,
                            showStars: !1
                        })),
                        (V = 1))
                      : null != el
                        ? ((E = (0, r.jsx)(L.Z, {
                              copy: el,
                              showStars: !1
                          })),
                          (V = 1))
                        : null != ee
                          ? ((E = (0, r.jsx)(A.GN, {
                                userDiscount: ee,
                                isTabSelected: F,
                                includesAmountOff: !1
                            })),
                            (V = 3))
                          : null == $ || ep
                            ? ea
                                ? ((E = (0, r.jsx)(Z.lH, {
                                      isSelected: F,
                                      onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                                  })),
                                  (V = 6))
                                : en && ((E = (0, r.jsx)(P.k, { entryPoint: P.U.PrivateMessages })), F || (t = U.localizeBadge), (V = 5))
                            : ((E = (0, r.jsx)(A.$H, {
                                  trialOffer: $,
                                  isTabSelected: F
                              })),
                              (V = 4));
        let eE = (0, r.jsx)(
            c.Qj,
            ((B = (function (e) {
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
                    selected: F,
                    route: z,
                    icon: s.SrA,
                    text: M.NW.string(M.t.Ipxkoq),
                    locationState: Y,
                    onClick: () => {
                        eu === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ed(k.L.TAKE_ACTION),
                            b.default.track(D.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: V,
                                has_premium: X
                            }),
                            null != eh && ef(k.L.USER_DISMISS);
                    }
                },
                K,
                J
            )),
            (H = H =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: E
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(H))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(H)).forEach(function (e) {
                      Object.defineProperty(B, e, Object.getOwnPropertyDescriptor(H, e));
                  }),
            B)
        );
        if (!0 == (!0 === eg && !0 === eb && !1 === e_)) {
            let e = _.ZP.isPremiumExactly(q, R.p9.TIER_1) ? M.NW.string(M.t.tI65aW) : M.NW.string(M.t.toA0Ly);
            return (0, r.jsx)(Z.s, {
                children: () => eE,
                description: e
            });
        }
        return ea ? (0, r.jsx)(Z.CI, { children: eE }) : eE;
    };
