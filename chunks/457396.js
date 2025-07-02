(n.d(t, {
    g: () => V,
    i: () => B
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(91192),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(515753),
    u = n(927359),
    d = n(975298),
    p = n(211644),
    h = n(266454),
    f = n(243778),
    g = n(594174),
    m = n(351402),
    b = n(78839),
    _ = n(626135),
    O = n(74538),
    E = n(502087),
    y = n(367074),
    I = n(695349),
    v = n(963590),
    C = n(767870),
    S = n(104494),
    N = n(639119),
    T = n(655525),
    P = n(93237),
    j = n(52188),
    A = n(924540),
    Z = n(474486),
    x = n(497334),
    L = n(119850),
    w = n(938736),
    R = n(227140),
    D = n(474936),
    k = n(981631),
    M = n(921944),
    U = n(388032),
    G = n(419720);
let B = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, N.N)(),
            l = (0, S.Ng)(),
            o = (0, y.Vi)(),
            s = (0, L.V)(),
            c = (0, O.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    V = (e) => {
        let t, n, E;
        var V,
            H,
            { selected: F, route: z, locationState: W } = e,
            Y = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['selected', 'route', 'locationState']);
        let K = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            q = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            X = (0, O.Qo)(K, q),
            Q = (0, l.JA)('nitro'),
            J = (0, N.N)(),
            $ = (0, S.Ng)(),
            ee = (0, I.W)(),
            et = (0, a.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == J,
            en = (0, y.Vi)(),
            er = (0, P.HI)({ trialOffer: J }),
            ei = (0, L.V)(),
            el = (0, w.Kn)('NitroTabButton'),
            { fractionalState: ea, startsAt: eo, endsAt: es } = (0, d.Z)({ forceFetch: !0 }),
            [ec, eu] = (0, f.bf)(ea !== D.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eo.valueOf(),
                cooldownDurationMs: 0
            }),
            ed = (0, v.Z)({ location: 'NitroTabButton' }),
            ep = (null == J ? void 0 : J.trial_id) === D.a7,
            eh = [];
        (0, p.Kl)() && (en && eh.push(o.z.BOGO_2025_NITRO_TAB_BADGE), ed && eh.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ee && eh.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [ef, eg] = (0, f.US)(eh, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === F && null != ef && eg(M.L.AUTO_DISMISS);
            }, [eg, F, ef]),
            !B({ selected: F }))
        )
            return null;
        if (
            (ea === D.a$.NONE ||
                ee ||
                ((E = 7),
                (n = (0, r.jsx)(C.Z, {
                    className: '',
                    startsAt: eo,
                    endsAt: es,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0
                }))),
            en)
        )
            ((n = (0, r.jsx)(T.Z, {})), (E = 0));
        else if (er) {
            let e = (0, P.$q)();
            ((n = (0, r.jsx)(A._y, {
                isTabSelected: F,
                badgeCopy: U.intl.string(U.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == J ? void 0 : J.expires_at) : null
            })),
                (E = 4));
        } else
            ef === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(A._y, {
                      isTabSelected: F,
                      badgeCopy: U.intl.string(U.t.y2b7CA),
                      offerExpiresAt: null
                  })),
                  (E = 2))
                : ee
                  ? ((n = (0, r.jsx)(x.S, { expiresAt: es })), (E = 4))
                  : null != ei
                    ? ((n = (0, r.jsx)(R.Z, {
                          copy: ei,
                          showStars: !1
                      })),
                      (E = 1))
                    : null != $
                      ? ((n = (0, r.jsx)(A.GN, {
                            userDiscount: $,
                            isTabSelected: F,
                            includesAmountOff: !1
                        })),
                        (E = 3))
                      : null == J || ep
                        ? el
                            ? ((n = (0, r.jsx)(Z.l, {
                                  isSelected: F,
                                  onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: M.L.TAKE_ACTION })
                              })),
                              (E = 6))
                            : et && ((n = (0, r.jsx)(j.k, { entryPoint: j.U.PrivateMessages })), F || (t = G.localizeBadge), (E = 5))
                        : ((n = (0, r.jsx)(A.$H, {
                              trialOffer: J,
                              isTabSelected: F
                          })),
                          (E = 4));
        let em = (0, r.jsx)(
            c.Qj,
            ((V = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {
                    selected: F,
                    route: z,
                    icon: s.SrA,
                    text: U.intl.string(U.t.Ipxkoq),
                    locationState: W,
                    onClick: () => {
                        (ec === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eu(M.L.TAKE_ACTION),
                            _.default.track(k.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: E,
                                has_premium: X
                            }),
                            null != ef && eg(M.L.USER_DISMISS));
                    }
                },
                Y,
                Q
            )),
            (H = H =
                {
                    className: t,
                    children: n
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(V, Object.getOwnPropertyDescriptors(H))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(H)).forEach(function (e) {
                      Object.defineProperty(V, e, Object.getOwnPropertyDescriptor(H, e));
                  }),
            V)
        );
        return el ? (0, r.jsx)(Z.C, { children: em }) : em;
    };
