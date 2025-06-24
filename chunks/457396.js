n.d(t, {
    g: () => B,
    i: () => G
}),
    n(388685),
    n(539854);
var r = n(255367),
    i = n(73800),
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
    O = n(502087),
    E = n(367074),
    y = n(695349),
    I = n(963590),
    v = n(767870),
    C = n(104494),
    S = n(639119),
    N = n(655525),
    T = n(93237),
    P = n(52188),
    j = n(924540),
    A = n(474486),
    Z = n(497334),
    x = n(119850),
    w = n(938736),
    L = n(227140),
    R = n(474936),
    D = n(981631),
    k = n(921944),
    M = n(388032),
    U = n(419720);
let G = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, S.N)(),
            l = (0, C.Ng)(),
            o = (0, E.Vi)(),
            s = (0, x.V)(),
            c = (0, _.Qo)(n, r),
            u = (0, a.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    B = (e) => {
        let t, n, O;
        var B,
            V,
            { selected: H, route: F, locationState: z } = e,
            W = (function (e, t) {
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
        let Y = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            K = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            q = (0, _.Qo)(Y, K),
            X = (0, l.JA)('nitro'),
            Q = (0, S.N)(),
            J = (0, C.Ng)(),
            $ = (0, y.W)(),
            ee = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == Q,
            et = (0, E.Vi)(),
            en = (0, T.HI)({ trialOffer: Q }),
            er = (0, x.V)(),
            ei = (0, w.Kn)('NitroTabButton'),
            { fractionalState: el, startsAt: ea, endsAt: eo } = (0, d.Z)({ forceFetch: !0 }),
            [es, ec] = (0, h.bf)(el !== R.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ea.valueOf(),
                cooldownDurationMs: 0
            }),
            eu = (0, I.Z)({ location: 'NitroTabButton' }),
            ed = (null == Q ? void 0 : Q.trial_id) === R.a7,
            ep = [];
        eu && ep.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), $ && ep.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), et && ep.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
        let [eh, ef] = (0, h.US)(ep, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === H && null != eh && ef(k.L.AUTO_DISMISS);
            }, [ef, H, eh]),
            !G({ selected: H }))
        )
            return null;
        if (
            (el === R.a$.NONE ||
                $ ||
                ((O = 7),
                (n = (0, r.jsx)(v.Z, {
                    className: '',
                    startsAt: ea,
                    endsAt: eo,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0
                }))),
            et)
        )
            (n = (0, r.jsx)(N.Z, {})), (O = 0);
        else if (en) {
            let e = (0, T.$q)();
            (n = (0, r.jsx)(j._y, {
                isTabSelected: H,
                badgeCopy: M.intl.string(M.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == Q ? void 0 : Q.expires_at) : null
            })),
                (O = 4);
        } else
            eh === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(j._y, {
                      isTabSelected: H,
                      badgeCopy: M.intl.string(M.t.y2b7CA),
                      offerExpiresAt: null
                  })),
                  (O = 2))
                : $
                  ? ((n = (0, r.jsx)(Z.S, { expiresAt: eo })), (O = 4))
                  : null != er
                    ? ((n = (0, r.jsx)(L.Z, {
                          copy: er,
                          showStars: !1
                      })),
                      (O = 1))
                    : null != J
                      ? ((n = (0, r.jsx)(j.GN, {
                            userDiscount: J,
                            isTabSelected: H,
                            includesAmountOff: !1
                        })),
                        (O = 3))
                      : null == Q || ed
                        ? ei
                            ? ((n = (0, r.jsx)(A.l, {
                                  isSelected: H,
                                  onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                              })),
                              (O = 6))
                            : ee && ((n = (0, r.jsx)(P.k, { entryPoint: P.U.PrivateMessages })), H || (t = U.localizeBadge), (O = 5))
                        : ((n = (0, r.jsx)(j.$H, {
                              trialOffer: Q,
                              isTabSelected: H
                          })),
                          (O = 4));
        let eg = (0, r.jsx)(
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
                    selected: H,
                    route: F,
                    icon: s.SrA,
                    text: M.intl.string(M.t.Ipxkoq),
                    locationState: z,
                    onClick: () => {
                        es === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ec(k.L.TAKE_ACTION),
                            b.default.track(D.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: O,
                                has_premium: q
                            }),
                            null != eh && ef(k.L.USER_DISMISS);
                    }
                },
                W,
                X
            )),
            (V = V =
                {
                    className: t,
                    children: n
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(V))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(V)).forEach(function (e) {
                      Object.defineProperty(B, e, Object.getOwnPropertyDescriptor(V, e));
                  }),
            B)
        );
        return ei ? (0, r.jsx)(A.C, { children: eg }) : eg;
    };
