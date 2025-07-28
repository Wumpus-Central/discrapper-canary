(n.d(t, {
    g: () => G,
    i: () => U
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
    m = n(78839),
    b = n(626135),
    _ = n(74538),
    O = n(502087),
    E = n(367074),
    y = n(695349),
    v = n(532245),
    I = n(963590),
    C = n(767870),
    S = n(104494),
    N = n(639119),
    T = n(655525),
    P = n(93237),
    j = n(924540),
    A = n(474486),
    Z = n(497334),
    x = n(119850),
    w = n(938736),
    L = n(227140),
    R = n(474936),
    D = n(981631),
    k = n(921944),
    M = n(388032);
let U = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, a.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            i = (0, N.N)(),
            l = (0, S.Ng)(),
            o = (0, E.Vi)(),
            s = (0, x.V)(),
            c = (0, _.Qo)(n, r),
            u = (0, a.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    G = (e) => {
        let t, n, O;
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
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['selected', 'route', 'locationState']);
        let W = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            Y = (0, a.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            K = (0, _.Qo)(W, Y),
            { enabled: q, variant: X } = v.p1.useExperiment({ location: 'NitroTabButton' }),
            { enabled: Q } = v.pd.useExperiment({ location: 'NitroTabButton' });
        (v.VL.useConfig({ location: 'NitroTabButton' }), v.CF.useConfig({ location: 'NitroTabButton' }));
        let J = (0, l.JA)('nitro'),
            $ = (0, N.N)(),
            ee = (0, S.Ng)(),
            et = (0, y.W)(),
            en = (0, E.Vi)(),
            er = (0, P.HI)({ trialOffer: $ }),
            ei = (0, x.V)(),
            el = (0, w.Kn)('NitroTabButton'),
            { fractionalState: ea, startsAt: eo, endsAt: es } = (0, d.Z)({ forceFetch: !0 }),
            [ec, eu] = (0, f.bf)(ea !== R.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eo.valueOf(),
                cooldownDurationMs: 0
            }),
            ed = (0, I.Z)({ location: 'NitroTabButton' }),
            ep = (null == $ ? void 0 : $.trial_id) === R.a7,
            eh = [];
        (0, p.Kl)() && (en && eh.push(o.z.BOGO_2025_NITRO_TAB_BADGE), ed && eh.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), et && eh.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [ef, eg] = (0, f.US)(eh, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === B && null != ef && eg(k.L.AUTO_DISMISS);
            }, [eg, B, ef]),
            !U({ selected: B }))
        )
            return null;
        if (
            (ea === R.a$.NONE ||
                et ||
                ((O = 7),
                (n = (0, r.jsx)(C.Z, {
                    className: '',
                    startsAt: eo,
                    endsAt: es,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0
                }))),
            en)
        )
            ((n = (0, r.jsx)(T.Z, {})), (O = 0));
        else if (er) {
            let e = (0, P.$q)();
            ((n = (0, r.jsx)(j._y, {
                isTabSelected: B,
                badgeCopy: M.intl.string(M.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == $ ? void 0 : $.expires_at) : null
            })),
                (O = 4));
        } else
            ef === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(j._y, {
                      isTabSelected: B,
                      badgeCopy: M.intl.string(M.t.y2b7CA),
                      offerExpiresAt: null
                  })),
                  (O = 2))
                : et
                  ? ((n = (0, r.jsx)(Z.S, { expiresAt: es })), (O = 4))
                  : null != ei
                    ? ((n = (0, r.jsx)(L.Z, {
                          copy: ei,
                          showStars: !1
                      })),
                      (O = 1))
                    : null != ee
                      ? ((n = (0, r.jsx)(j.GN, {
                            userDiscount: ee,
                            isTabSelected: B,
                            includesAmountOff: !1
                        })),
                        (O = 3))
                      : null == $ || ep
                        ? el &&
                          ((n = (0, r.jsx)(A.l, {
                              isSelected: B,
                              onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                          })),
                          (O = 6))
                        : ((n = (0, r.jsx)(j.$H, {
                              trialOffer: $,
                              isTabSelected: B
                          })),
                          (O = 4));
        let em = M.intl.string(M.t.Ipxkoq);
        (K && Q && (em = M.intl.string(M.t['4gwVVl'])), !K && q && (X === v.Rx.TRY_NITRO && null != $ ? (em = M.intl.string(M.t['3O6A4e'])) : X === v.Rx.JOIN_NITRO ? (em = M.intl.string(M.t.brBiOz)) : X === v.Rx.GET_NITRO && (em = M.intl.string(M.t.GayC1t))));
        let eb = (0, r.jsx)(
            c.Qj,
            ((G = (function (e) {
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
                    selected: B,
                    route: H,
                    icon: s.SrA,
                    text: em,
                    locationState: F,
                    onClick: () => {
                        (ec === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eu(k.L.TAKE_ACTION),
                            b.default.track(D.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: O,
                                has_premium: K
                            }),
                            null != ef && eg(k.L.USER_DISMISS));
                    }
                },
                z,
                J
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
        return el ? (0, r.jsx)(A.C, { children: eb }) : eb;
    };
