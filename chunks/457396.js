n.d(t, {
    g: () => G,
    i: () => U
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
    E = n(502087),
    O = n(367074),
    y = n(695349),
    I = n(963590),
    v = n(767870),
    C = n(104494),
    S = n(639119),
    N = n(655525),
    T = n(52188),
    P = n(924540),
    j = n(474486),
    A = n(497334),
    Z = n(119850),
    x = n(938736),
    L = n(227140),
    w = n(474936),
    R = n(981631),
    D = n(921944),
    k = n(388032),
    M = n(419720);
let U = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, S.N)(),
            l = (0, C.Ng)(),
            o = (0, O.Vi)(),
            s = (0, Z.V)(),
            c = (0, _.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    G = (e) => {
        let t, n, E;
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
            Q = (0, S.N)(),
            X = (0, C.Ng)(),
            J = (0, y.W)(),
            $ = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == Q,
            ee = (0, O.Vi)(),
            et = (0, Z.V)(),
            en = (0, x.Kn)('NitroTabButton'),
            { fractionalState: er, startsAt: ei, endsAt: el } = (0, d.Z)({ forceFetch: !0 }),
            [ea, eo] = (0, h.bf)(er !== w.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ei.valueOf(),
                cooldownDurationMs: 0
            }),
            es = (0, I.Z)({ location: 'NitroTabButton' }),
            ec = (null == Q ? void 0 : Q.trial_id) === w.a7,
            eu = [];
        es && eu.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), J && eu.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2);
        let [ed, ep] = (0, h.US)(eu, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === B && null != ed && ep(D.L.AUTO_DISMISS);
            }, [ep, B, ed]),
            !U({ selected: B }))
        )
            return null;
        er === w.a$.NONE ||
            J ||
            ((E = 7),
            (n = (0, r.jsx)(v.Z, {
                className: '',
                startsAt: ei,
                endsAt: el,
                messageStyle: u.aj.SHORT_TIME,
                upperCase: !0
            }))),
            ee
                ? ((n = (0, r.jsx)(N.Z, {})), (E = 0))
                : ed === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, r.jsx)(P._y, {
                        isTabSelected: B,
                        badgeCopy: k.intl.string(k.t.y2b7CA),
                        offerExpiresAt: null
                    })),
                    (E = 2))
                  : J
                    ? ((n = (0, r.jsx)(A.S, { expiresAt: el })), (E = 4))
                    : null != et
                      ? ((n = (0, r.jsx)(L.Z, {
                            copy: et,
                            showStars: !1
                        })),
                        (E = 1))
                      : null != X
                        ? ((n = (0, r.jsx)(P.GN, {
                              userDiscount: X,
                              isTabSelected: B,
                              includesAmountOff: !1
                          })),
                          (E = 3))
                        : null == Q || ec
                          ? en
                              ? ((n = (0, r.jsx)(j.l, {
                                    isSelected: B,
                                    onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: D.L.TAKE_ACTION })
                                })),
                                (E = 6))
                              : $ && ((n = (0, r.jsx)(T.k, { entryPoint: T.U.PrivateMessages })), B || (t = M.localizeBadge), (E = 5))
                          : ((n = (0, r.jsx)(P.$H, {
                                trialOffer: Q,
                                isTabSelected: B
                            })),
                            (E = 4));
        let eh = (0, r.jsx)(
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
                    text: k.intl.string(k.t.Ipxkoq),
                    locationState: F,
                    onClick: () => {
                        ea === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eo(D.L.TAKE_ACTION),
                            b.default.track(R.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: E,
                                has_premium: K
                            }),
                            null != ed && ep(D.L.USER_DISMISS);
                    }
                },
                z,
                q
            )),
            (V = V =
                {
                    className: t,
                    children: n
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
        return en ? (0, r.jsx)(j.C, { children: eh }) : eh;
    };
