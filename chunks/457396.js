n.d(t, {
    g: () => G,
    i: () => U
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
    I = n(104494),
    v = n(639119),
    C = n(655525),
    S = n(314684),
    N = n(52188),
    T = n(346497),
    P = n(924540),
    j = n(474486),
    A = n(497334),
    Z = n(119850),
    x = n(938736),
    w = n(227140),
    L = n(474936),
    R = n(981631),
    D = n(921944),
    k = n(388032),
    M = n(419720);
let U = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, v.N)(),
            l = (0, I.Ng)(),
            o = (0, T.Vi)(),
            s = (0, S.$_)(),
            c = (0, Z.V)(),
            u = (0, _.Qo)(n, r),
            d = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            p = t || null != i || null != l || o || null != s || null != c || u,
            h = null != d ? d : null == n ? void 0 : n.createdAt;
        return p || (null != n && null != h && Date.now() - h.getTime() > 1209600000);
    },
    G = (e) => {
        let t, n, E, G;
        var V,
            B,
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
            Q = (0, l.JA)('nitro'),
            X = (0, v.N)(),
            J = (0, I.Ng)(),
            $ = (0, O.W)(),
            ee = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == X,
            et = (0, T.Vi)(),
            en = (0, S.$_)(),
            er = (0, Z.V)(),
            ei = (0, x.Kn)('NitroTabButton'),
            { fractionalState: el, startsAt: ea, endsAt: eo } = (0, d.Z)({ forceFetch: !0 }),
            [es, ec] = (0, h.bf)(el !== L.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ea.valueOf(),
                cooldownDurationMs: 0
            }),
            eu = (null == X ? void 0 : X.trial_id) === L.a7,
            [ed, ep] = (0, h.US)($ ? [o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2] : [], void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === H && ed === o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2 && ep(D.L.AUTO_DISMISS);
            }, [ep, ed, H]),
            !U({ selected: H }))
        )
            return null;
        el === L.a$.NONE ||
            $ ||
            ((G = 7),
            (E = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: ea,
                endsAt: eo,
                messageStyle: u.aj.SHORT_TIME,
                upperCase: !0
            }))),
            et
                ? ((E = (0, r.jsx)(C.Z, {})), (G = 0))
                : $
                  ? ((E = (0, r.jsx)(A.S, {
                        expiresAt: eo,
                        isAcknowledged: ed !== o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                    })),
                    (G = 4))
                  : null != en
                    ? ((E = (0, r.jsx)(w.Z, {
                          copy: en,
                          showStars: !1
                      })),
                      (G = 1))
                    : null != er
                      ? ((E = (0, r.jsx)(w.Z, {
                            copy: er,
                            showStars: !1
                        })),
                        (G = 1))
                      : null != J
                        ? ((E = (0, r.jsx)(P.GN, {
                              userDiscount: J,
                              isTabSelected: H,
                              includesAmountOff: !1
                          })),
                          (G = 3))
                        : null == X || eu
                          ? ei
                              ? ((E = (0, r.jsx)(j.l, {
                                    isSelected: H,
                                    onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: D.L.TAKE_ACTION })
                                })),
                                (G = 6))
                              : ee && ((E = (0, r.jsx)(N.k, { entryPoint: N.U.PrivateMessages })), H || (t = M.localizeBadge), (G = 5))
                          : ((E = (0, r.jsx)(P.$H, {
                                trialOffer: X,
                                isTabSelected: H
                            })),
                            (G = 4));
        let eh = (0, r.jsx)(
            c.Qj,
            ((V = (function (e) {
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
                    text: k.intl.string(k.t.Ipxkoq),
                    locationState: z,
                    onClick: () => {
                        es === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ec(D.L.TAKE_ACTION),
                            b.default.track(R.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: G,
                                has_premium: q
                            }),
                            null != ed && ep(D.L.USER_DISMISS);
                    }
                },
                W,
                Q
            )),
            (B = B =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: E
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(V, Object.getOwnPropertyDescriptors(B))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(B)).forEach(function (e) {
                      Object.defineProperty(V, e, Object.getOwnPropertyDescriptor(B, e));
                  }),
            V)
        );
        return ei ? (0, r.jsx)(j.C, { children: eh }) : eh;
    };
