n.d(t, {
    g: () => U,
    i: () => M
}),
    n(388685);
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
    E = n(502087),
    O = n(695349),
    I = n(767870),
    y = n(104494),
    v = n(639119),
    C = n(655525),
    S = n(52188),
    N = n(346497),
    T = n(924540),
    P = n(474486),
    j = n(497334),
    A = n(119850),
    x = n(938736),
    Z = n(227140),
    w = n(474936),
    L = n(981631),
    R = n(921944),
    D = n(388032),
    k = n(419720);
let M = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, v.N)(),
            l = (0, y.Ng)(),
            o = (0, N.Vi)(),
            s = (0, A.V)(),
            c = (0, _.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    U = (e) => {
        let t, n, E;
        var U,
            G,
            { selected: V, route: B, locationState: H } = e,
            F = (function (e, t) {
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
        let z = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            W = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            Y = (0, _.Qo)(z, W),
            K = (0, l.JA)('nitro'),
            q = (0, v.N)(),
            X = (0, y.Ng)(),
            Q = (0, O.W)(),
            J = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == q,
            $ = (0, N.Vi)(),
            ee = (0, A.V)(),
            et = (0, x.Kn)('NitroTabButton'),
            { fractionalState: en, startsAt: er, endsAt: ei } = (0, d.Z)({ forceFetch: !0 }),
            [el, ea] = (0, h.bf)(en !== w.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: er.valueOf(),
                cooldownDurationMs: 0
            }),
            eo = (null == q ? void 0 : q.trial_id) === w.a7,
            [es, ec] = (0, h.US)(Q ? [o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2] : [], void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === V && null != es && ec(R.L.AUTO_DISMISS);
            }, [ec, V, es]),
            !M({ selected: V }))
        )
            return null;
        en === w.a$.NONE ||
            Q ||
            ((E = 7),
            (n = (0, r.jsx)(I.Z, {
                className: '',
                startsAt: er,
                endsAt: ei,
                messageStyle: u.aj.SHORT_TIME,
                upperCase: !0
            }))),
            $
                ? ((n = (0, r.jsx)(C.Z, {})), (E = 0))
                : Q
                  ? ((n = (0, r.jsx)(j.S, { expiresAt: ei })), (E = 4))
                  : null != ee
                    ? ((n = (0, r.jsx)(Z.Z, {
                          copy: ee,
                          showStars: !1
                      })),
                      (E = 1))
                    : null != X
                      ? ((n = (0, r.jsx)(T.GN, {
                            userDiscount: X,
                            isTabSelected: V,
                            includesAmountOff: !1
                        })),
                        (E = 3))
                      : null == q || eo
                        ? et
                            ? ((n = (0, r.jsx)(P.l, {
                                  isSelected: V,
                                  onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: R.L.TAKE_ACTION })
                              })),
                              (E = 6))
                            : J && ((n = (0, r.jsx)(S.k, { entryPoint: S.U.PrivateMessages })), V || (t = k.localizeBadge), (E = 5))
                        : ((n = (0, r.jsx)(T.$H, {
                              trialOffer: q,
                              isTabSelected: V
                          })),
                          (E = 4));
        let eu = (0, r.jsx)(
            c.Qj,
            ((U = (function (e) {
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
                    selected: V,
                    route: B,
                    icon: s.SrA,
                    text: D.intl.string(D.t.Ipxkoq),
                    locationState: H,
                    onClick: () => {
                        el === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ea(R.L.TAKE_ACTION),
                            b.default.track(L.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: E,
                                has_premium: Y
                            }),
                            null != es && ec(R.L.USER_DISMISS);
                    }
                },
                F,
                K
            )),
            (G = G =
                {
                    className: t,
                    children: n
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(U, Object.getOwnPropertyDescriptors(G))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(G)).forEach(function (e) {
                      Object.defineProperty(U, e, Object.getOwnPropertyDescriptor(G, e));
                  }),
            U)
        );
        return et ? (0, r.jsx)(P.C, { children: eu }) : eu;
    };
