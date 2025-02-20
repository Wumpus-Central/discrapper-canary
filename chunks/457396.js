n.d(t, {
    g: () => B,
    i: () => V
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
    I = n(104494),
    C = n(639119),
    S = n(655525),
    T = n(314684),
    P = n(52188),
    j = n(346497),
    A = n(924540),
    Z = n(474486),
    x = n(119850),
    L = n(701910),
    w = n(938736),
    R = n(227140),
    D = n(474936),
    k = n(981631),
    M = n(921944),
    U = n(388032),
    G = n(761644);
let W = 'NitroTabButton',
    V = (e) => {
        let { selected: t } = e,
            n = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, o.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            i = (0, C.N)(),
            l = (0, I.Ng)(),
            a = (0, j.Vi)(),
            s = (0, w.vx)(W),
            c = (0, w.wG)(W),
            u = (0, T.$_)(),
            d = (0, x.V)(),
            p = (0, E.Qo)(n, r),
            h = (0, o.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            f = t || null != i || null != l || a || s || c || null != u || null != d || p,
            m = null != h ? h : null == n ? void 0 : n.createdAt;
        return f || (null != n && null != m && Date.now() - m.getTime() > 1209600000);
    },
    B = (e) => {
        let t, n, O, B;
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
        let X = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            Q = (0, o.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            J = (0, E.Qo)(X, Q),
            $ = (0, l.JA)('nitro'),
            ee = (0, C.N)(),
            et = (0, I.Ng)(),
            en = (0, N.W)(),
            er = (0, o.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == ee,
            ei = (0, j.Vi)(),
            el = (0, T.$_)(),
            eo = (0, x.V)(),
            ea = (0, w.Kn)(W),
            es = (0, w.vx)(W),
            ec = (0, w.wG)(W),
            eu = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
            { fractionalState: ed, startsAt: ep, endsAt: eh } = (0, d.Z)({ forceFetch: !0 }),
            [ef, eg] = (0, h.bf)(ed !== D.a$.NONE ? a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ep.valueOf(),
                cooldownDurationMs: 0
            }),
            { enabled: em } = v._.useExperiment({ location: W }, { autoTrackExposure: !1 }),
            eb = em && (null == ee ? void 0 : ee.trial_id) === D.a7,
            [e_, eE] = (0, h.US)(en ? [a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === z && e_ === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && eE(M.L.AUTO_DISMISS);
            }, [eE, e_, z]),
            !V({ selected: z }))
        )
            return null;
        ed === D.a$.NONE ||
            en ||
            ((B = 9),
            (O = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: ep,
                endsAt: eh,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0
            }))),
            es
                ? ((t = G.referralIncentive), (B = 7))
                : ec
                  ? ((O = (0, r.jsx)(L.Z, { copy: U.NW.string(U.t.jyYgZ2) })), (B = 8))
                  : ei
                    ? ((O = (0, r.jsx)(S.Z, {})), (B = 0))
                    : null != e_ && e_ === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                      ? ((O = (0, r.jsx)(R.Z, {
                            copy: U.NW.string(U.t.HwUCnp),
                            showStars: !1
                        })),
                        (B = 4))
                      : null != el
                        ? ((O = (0, r.jsx)(R.Z, {
                              copy: el,
                              showStars: !1
                          })),
                          (B = 1))
                        : null != eo
                          ? ((O = (0, r.jsx)(R.Z, {
                                copy: eo,
                                showStars: !1
                            })),
                            (B = 1))
                          : null != et
                            ? ((O = (0, r.jsx)(A.GN, {
                                  userDiscount: et,
                                  isTabSelected: z,
                                  includesAmountOff: !1
                              })),
                              (B = 3))
                            : null == ee || eb
                              ? ea
                                  ? ((O = (0, r.jsx)(Z.lH, {
                                        isSelected: z,
                                        onSelect: () => (0, p.EW)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: M.L.TAKE_ACTION })
                                    })),
                                    (B = 6))
                                  : er && ((O = (0, r.jsx)(P.k, { entryPoint: P.U.PrivateMessages })), z || (t = G.localizeBadge), (B = 5))
                              : ((O = (0, r.jsx)(A.$H, {
                                    trialOffer: ee,
                                    isTabSelected: z
                                })),
                                (B = 4));
        let eO = (0, r.jsx)(
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
                        ef === a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eg(M.L.TAKE_ACTION),
                            _.default.track(k.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: B,
                                has_premium: J
                            }),
                            es || ec ? ((0, p.EW)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: M.L.TAKE_ACTION }), ec && (0, p.EW)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: M.L.TAKE_ACTION })) : null != e_ && eE(M.L.USER_DISMISS);
                    }
                },
                q,
                $
            )),
            (F = F =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: O
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
        return ea ? (0, r.jsx)(Z.CI, { children: eO }) : es && !eu ? (0, r.jsx)(Z.A7, { children: () => eO }) : eO;
    };
