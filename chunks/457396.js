n.d(t, {
    g: () => B,
    i: () => V
}),
    n(47120);
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
    N = n(781320),
    y = n(767870),
    I = n(351367),
    v = n(787156),
    C = n(104494),
    S = n(639119),
    T = n(655525),
    P = n(314684),
    j = n(52188),
    A = n(346497),
    Z = n(924540),
    x = n(474486),
    L = n(119850),
    w = n(938736),
    R = n(227140),
    D = n(474936),
    k = n(981631),
    M = n(921944),
    U = n(388032),
    G = n(419720);
let W = 'NitroTabButton',
    V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, S.N)(),
            l = (0, C.Ng)(),
            o = (0, A.Vi)(),
            s = (0, P.$_)(),
            c = (0, L.V)(),
            u = (0, _.Qo)(n, r),
            d = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            p = (0, I.m)({ location: W }),
            h = t || null != i || null != l || o || null != s || null != c || !0 === p || u,
            g = null != d ? d : null == n ? void 0 : n.createdAt;
        return h || (null != n && null != g && Date.now() - g.getTime() > 1209600000);
    },
    B = (e) => {
        let t, n, E, B;
        var H,
            F,
            { selected: z, route: Y, locationState: K } = e,
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
            ei = (0, A.Vi)(),
            el = (0, P.$_)(),
            ea = (0, L.V)(),
            eo = (0, w.Kn)(W),
            { fractionalState: es, startsAt: ec, endsAt: eu } = (0, d.Z)({ forceFetch: !0 }),
            [ed, ep] = (0, h.bf)(es !== D.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ec.valueOf(),
                cooldownDurationMs: 0
            }),
            eh = (null == ee ? void 0 : ee.trial_id) === D.a7,
            [ef, eg] = (0, h.US)(en ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0),
            em = (0, I.m)({ location: W }),
            eb = (0, p.wE)(o.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE),
            e_ = (0, v.wQ)({ location: W }),
            eE = (0, p.wE)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK),
            eO = (0, N.r)({ location: W }).enabled,
            eN = (0, p.wE)(o.z.PERMADECOS_NITRO_TAB_NEW_BADGE);
        if (
            (i.useEffect(() => {
                !0 === z && ef === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && eg(M.L.AUTO_DISMISS);
            }, [eg, ef, z]),
            !V({ selected: z }))
        )
            return null;
        es === D.a$.NONE ||
            en ||
            ((B = 7),
            (E = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: ec,
                endsAt: eu,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0
            }))),
            !0 === em
                ? (E = eb
                      ? (0, r.jsx)(x.Du, {})
                      : (0, r.jsx)(R.Z, {
                            copy: U.NW.string(U.t.OS9KPj),
                            showStars: !1
                        }))
                : ei
                  ? ((E = (0, r.jsx)(T.Z, {})), (B = 0))
                  : null != ef && ef === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                    ? ((E = (0, r.jsx)(R.Z, {
                          copy: U.NW.string(U.t.HwUCnp),
                          showStars: !1
                      })),
                      (B = 4))
                    : null != el
                      ? ((E = (0, r.jsx)(R.Z, {
                            copy: el,
                            showStars: !1
                        })),
                        (B = 1))
                      : null != ea
                        ? ((E = (0, r.jsx)(R.Z, {
                              copy: ea,
                              showStars: !1
                          })),
                          (B = 1))
                        : null != et
                          ? ((E = (0, r.jsx)(Z.GN, {
                                userDiscount: et,
                                isTabSelected: z,
                                includesAmountOff: !1
                            })),
                            (B = 3))
                          : null == ee || eh
                            ? eo
                                ? ((E = (0, r.jsx)(x.lH, {
                                      isSelected: z,
                                      onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: M.L.TAKE_ACTION })
                                  })),
                                  (B = 6))
                                : er
                                  ? ((E = (0, r.jsx)(j.k, { entryPoint: j.U.PrivateMessages })), z || (t = G.localizeBadge), (B = 5))
                                  : eO &&
                                    !eN &&
                                    (E = (0, r.jsx)(R.Z, {
                                        copy: U.NW.string(U.t.y2b7CA),
                                        showStars: !1
                                    }))
                            : ((E = (0, r.jsx)(Z.$H, {
                                  trialOffer: ee,
                                  isTabSelected: z
                              })),
                              (B = 4));
        let ey = (0, r.jsx)(
            c.Qj,
            ((H = (function (e) {
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
                    selected: z,
                    route: Y,
                    icon: s.SrA,
                    text: U.NW.string(U.t.Ipxkoq),
                    locationState: K,
                    onClick: () => {
                        ed === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ep(M.L.TAKE_ACTION),
                            b.default.track(k.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: B,
                                has_premium: J
                            }),
                            null != ef && eg(M.L.USER_DISMISS);
                    }
                },
                q,
                $
            )),
            (F = F =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: E
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(F))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(F)).forEach(function (e) {
                      Object.defineProperty(H, e, Object.getOwnPropertyDescriptor(F, e));
                  }),
            H)
        );
        if (!0 == (!0 === em && !0 === e_ && !1 === eE)) {
            let e = _.ZP.isPremiumExactly(Q, D.p9.TIER_1) ? U.NW.string(U.t.tI65aW) : U.NW.string(U.t.toA0Ly);
            return (0, r.jsx)(x.s, {
                children: () => ey,
                description: e
            });
        }
        return eo ? (0, r.jsx)(x.CI, { children: ey }) : ey;
    };
