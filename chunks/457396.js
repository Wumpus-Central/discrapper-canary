n.d(t, {
    g: () => H,
    i: () => B
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
    y = n(767870),
    I = n(351367),
    v = n(787156),
    C = n(104494),
    S = n(639119),
    N = n(655525),
    T = n(314684),
    P = n(52188),
    j = n(346497),
    A = n(924540),
    Z = n(474486),
    x = n(497334),
    w = n(119850),
    L = n(938736),
    R = n(227140),
    D = n(474936),
    k = n(981631),
    M = n(921944),
    U = n(388032),
    G = n(419720);
let V = 'NitroTabButton',
    B = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, S.N)(),
            l = (0, C.Ng)(),
            o = (0, j.Vi)(),
            s = (0, T.$_)(),
            c = (0, w.V)(),
            u = (0, _.Qo)(n, r),
            d = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            p = (0, I.m)({ location: V }),
            h = t || null != i || null != l || o || null != s || null != c || !0 === p || u,
            g = null != d ? d : null == n ? void 0 : n.createdAt;
        return h || (null != n && null != g && Date.now() - g.getTime() > 1209600000);
    },
    H = (e) => {
        let t, n, E, H;
        var F,
            z,
            { selected: W, route: Y, locationState: K } = e,
            q = (function (e, t) {
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
        let Q = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            X = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            J = (0, _.Qo)(Q, X),
            $ = (0, l.JA)('nitro'),
            ee = (0, S.N)(),
            et = (0, C.Ng)(),
            en = (0, O.W)(),
            er = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == ee,
            ei = (0, j.Vi)(),
            el = (0, T.$_)(),
            ea = (0, w.V)(),
            eo = (0, L.Kn)(V),
            { fractionalState: es, startsAt: ec, endsAt: eu } = (0, d.Z)({ forceFetch: !0 }),
            [ed, ep] = (0, h.bf)(es !== D.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ec.valueOf(),
                cooldownDurationMs: 0
            }),
            eh = (null == ee ? void 0 : ee.trial_id) === D.a7,
            [ef, eg] = (0, h.US)(en ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0),
            em = (0, I.m)({ location: V }),
            eb = (0, p.wE)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE),
            e_ = (0, v.wQ)({ location: V }),
            eE = (0, p.wE)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK);
        if (
            (i.useEffect(() => {
                !0 === W && ef === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && eg(M.L.AUTO_DISMISS);
            }, [eg, ef, W]),
            !B({ selected: W }))
        )
            return null;
        es === D.a$.NONE ||
            en ||
            ((H = 7),
            (E = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: ec,
                endsAt: eu,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0
            }))),
            !0 === em
                ? (E = eb
                      ? (0, r.jsx)(Z.Du, {})
                      : (0, r.jsx)(R.Z, {
                            copy: U.intl.string(U.t.OS9KPj),
                            showStars: !1
                        }))
                : ei
                  ? ((E = (0, r.jsx)(N.Z, {})), (H = 0))
                  : en
                    ? ((E = (0, r.jsx)(x.S, {
                          expiresAt: eu,
                          isAcknowledged: ef !== o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                      })),
                      (H = 4))
                    : null != el
                      ? ((E = (0, r.jsx)(R.Z, {
                            copy: el,
                            showStars: !1
                        })),
                        (H = 1))
                      : null != ea
                        ? ((E = (0, r.jsx)(R.Z, {
                              copy: ea,
                              showStars: !1
                          })),
                          (H = 1))
                        : null != et
                          ? ((E = (0, r.jsx)(A.GN, {
                                userDiscount: et,
                                isTabSelected: W,
                                includesAmountOff: !1
                            })),
                            (H = 3))
                          : null == ee || eh
                            ? eo
                                ? ((E = (0, r.jsx)(Z.lH, {
                                      isSelected: W,
                                      onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: M.L.TAKE_ACTION })
                                  })),
                                  (H = 6))
                                : er && ((E = (0, r.jsx)(P.k, { entryPoint: P.U.PrivateMessages })), W || (t = G.localizeBadge), (H = 5))
                            : ((E = (0, r.jsx)(A.$H, {
                                  trialOffer: ee,
                                  isTabSelected: W
                              })),
                              (H = 4));
        let eO = (0, r.jsx)(
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
                    selected: W,
                    route: Y,
                    icon: s.SrA,
                    text: U.intl.string(U.t.Ipxkoq),
                    locationState: K,
                    onClick: () => {
                        ed === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ep(M.L.TAKE_ACTION),
                            b.default.track(k.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: H,
                                has_premium: J
                            }),
                            null != ef && eg(M.L.USER_DISMISS);
                    }
                },
                q,
                $
            )),
            (z = z =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: E
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
        if (!0 == (!0 === em && !0 === e_ && !1 === eE)) {
            let e = _.ZP.isPremiumExactly(Q, D.p9.TIER_1) ? U.intl.string(U.t.tI65aW) : U.intl.string(U.t.toA0Ly);
            return (0, r.jsx)(Z.s, {
                children: () => eO,
                description: e
            });
        }
        return eo ? (0, r.jsx)(Z.CI, { children: eO }) : eO;
    };
