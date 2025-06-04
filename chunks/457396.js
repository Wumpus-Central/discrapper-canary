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
    y = n(767870),
    I = n(104494),
    v = n(639119),
    C = n(655525),
    S = n(52188),
    N = n(346497),
    T = n(924540),
    P = n(474486),
    j = n(497334),
    A = n(119850),
    Z = n(938736),
    x = n(227140),
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
            l = (0, I.Ng)(),
            o = (0, N.Vi)(),
            s = (0, A.V)(),
            c = (0, _.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    U = (e) => {
        let t, n, E, U;
        var G,
            V,
            { selected: B, route: H, locationState: F } = e,
            z = (function (e, t) {
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
        let W = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            Y = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            K = (0, _.Qo)(W, Y),
            q = (0, l.JA)('nitro'),
            X = (0, v.N)(),
            Q = (0, I.Ng)(),
            J = (0, O.W)(),
            $ = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == X,
            ee = (0, N.Vi)(),
            et = (0, A.V)(),
            en = (0, Z.Kn)('NitroTabButton'),
            { fractionalState: er, startsAt: ei, endsAt: el } = (0, d.Z)({ forceFetch: !0 }),
            [ea, eo] = (0, h.bf)(er !== w.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ei.valueOf(),
                cooldownDurationMs: 0
            }),
            es = (null == X ? void 0 : X.trial_id) === w.a7,
            [ec, eu] = (0, h.US)(J ? [o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2] : [], void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === B && null != ec && eu(R.L.AUTO_DISMISS);
            }, [eu, B, ec]),
            !M({ selected: B }))
        )
            return null;
        er === w.a$.NONE ||
            J ||
            ((U = 7),
            (E = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: ei,
                endsAt: el,
                messageStyle: u.aj.SHORT_TIME,
                upperCase: !0
            }))),
            ee
                ? ((E = (0, r.jsx)(C.Z, {})), (U = 0))
                : J
                  ? ((E = (0, r.jsx)(j.S, { expiresAt: el })), (U = 4))
                  : null != et
                    ? ((E = (0, r.jsx)(x.Z, {
                          copy: et,
                          showStars: !1
                      })),
                      (U = 1))
                    : null != Q
                      ? ((E = (0, r.jsx)(T.GN, {
                            userDiscount: Q,
                            isTabSelected: B,
                            includesAmountOff: !1
                        })),
                        (U = 3))
                      : null == X || es
                        ? en
                            ? ((E = (0, r.jsx)(P.l, {
                                  isSelected: B,
                                  onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: R.L.TAKE_ACTION })
                              })),
                              (U = 6))
                            : $ && ((E = (0, r.jsx)(S.k, { entryPoint: S.U.PrivateMessages })), B || (t = k.localizeBadge), (U = 5))
                        : ((E = (0, r.jsx)(T.$H, {
                              trialOffer: X,
                              isTabSelected: B
                          })),
                          (U = 4));
        let ed = (0, r.jsx)(
            c.Qj,
            ((G = (function (e) {
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
                    selected: B,
                    route: H,
                    icon: s.SrA,
                    text: D.intl.string(D.t.Ipxkoq),
                    locationState: F,
                    onClick: () => {
                        ea === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eo(R.L.TAKE_ACTION),
                            b.default.track(L.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: U,
                                has_premium: K
                            }),
                            null != ec && eu(R.L.USER_DISMISS);
                    }
                },
                z,
                q
            )),
            (V = V =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: E
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(V))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(V)).forEach(function (e) {
                      Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(V, e));
                  }),
            G)
        );
        return en ? (0, r.jsx)(P.C, { children: ed }) : ed;
    };
