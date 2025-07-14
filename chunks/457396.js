(n.d(t, {
    g: () => H,
    i: () => V
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
    E = n(74538),
    O = n(502087),
    y = n(367074),
    I = n(695349),
    v = n(532245),
    C = n(963590),
    S = n(767870),
    N = n(104494),
    T = n(639119),
    P = n(655525),
    j = n(93237),
    A = n(52188),
    Z = n(924540),
    x = n(474486),
    w = n(497334),
    L = n(119850),
    R = n(938736),
    D = n(227140),
    k = n(474936),
    M = n(981631),
    U = n(921944),
    G = n(388032),
    B = n(419720);
let V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, T.N)(),
            l = (0, N.Ng)(),
            o = (0, y.Vi)(),
            s = (0, L.V)(),
            c = (0, E.Qo)(n, r),
            u = (0, a.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    H = (e) => {
        let t, n, O;
        var H,
            F,
            { selected: z, route: W, locationState: Y } = e,
            K = (function (e, t) {
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
        let q = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            Q = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            X = (0, E.Qo)(q, Q),
            { enabled: J, variant: $ } = v.p1.useExperiment({ location: 'NitroTabButton' }),
            { enabled: ee } = v.pd.useExperiment({ location: 'NitroTabButton' });
        (v.VL.useConfig({ location: 'NitroTabButton' }), v.CF.useConfig({ location: 'NitroTabButton' }));
        let et = (0, l.JA)('nitro'),
            en = (0, T.N)(),
            er = (0, N.Ng)(),
            ei = (0, I.W)(),
            el = (0, a.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == en,
            ea = (0, y.Vi)(),
            eo = (0, j.HI)({ trialOffer: en }),
            es = (0, L.V)(),
            ec = (0, R.Kn)('NitroTabButton'),
            { fractionalState: eu, startsAt: ed, endsAt: ep } = (0, d.Z)({ forceFetch: !0 }),
            [eh, ef] = (0, f.bf)(eu !== k.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ed.valueOf(),
                cooldownDurationMs: 0
            }),
            eg = (0, C.Z)({ location: 'NitroTabButton' }),
            em = (null == en ? void 0 : en.trial_id) === k.a7,
            eb = [];
        (0, p.Kl)() && (ea && eb.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eg && eb.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ei && eb.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [e_, eE] = (0, f.US)(eb, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === z && null != e_ && eE(U.L.AUTO_DISMISS);
            }, [eE, z, e_]),
            !V({ selected: z }))
        )
            return null;
        if (
            (eu === k.a$.NONE ||
                ei ||
                ((O = 7),
                (n = (0, r.jsx)(S.Z, {
                    className: '',
                    startsAt: ed,
                    endsAt: ep,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0
                }))),
            ea)
        )
            ((n = (0, r.jsx)(P.Z, {})), (O = 0));
        else if (eo) {
            let e = (0, j.$q)();
            ((n = (0, r.jsx)(Z._y, {
                isTabSelected: z,
                badgeCopy: G.intl.string(G.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == en ? void 0 : en.expires_at) : null
            })),
                (O = 4));
        } else
            e_ === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(Z._y, {
                      isTabSelected: z,
                      badgeCopy: G.intl.string(G.t.y2b7CA),
                      offerExpiresAt: null
                  })),
                  (O = 2))
                : ei
                  ? ((n = (0, r.jsx)(w.S, { expiresAt: ep })), (O = 4))
                  : null != es
                    ? ((n = (0, r.jsx)(D.Z, {
                          copy: es,
                          showStars: !1
                      })),
                      (O = 1))
                    : null != er
                      ? ((n = (0, r.jsx)(Z.GN, {
                            userDiscount: er,
                            isTabSelected: z,
                            includesAmountOff: !1
                        })),
                        (O = 3))
                      : null == en || em
                        ? ec
                            ? ((n = (0, r.jsx)(x.l, {
                                  isSelected: z,
                                  onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: U.L.TAKE_ACTION })
                              })),
                              (O = 6))
                            : el && ((n = (0, r.jsx)(A.k, { entryPoint: A.U.PrivateMessages })), z || (t = B.localizeBadge), (O = 5))
                        : ((n = (0, r.jsx)(Z.$H, {
                              trialOffer: en,
                              isTabSelected: z
                          })),
                          (O = 4));
        let eO = G.intl.string(G.t.Ipxkoq);
        (X && ee && (eO = G.intl.string(G.t['4gwVVl'])), !X && J && ($ === v.Rx.TRY_NITRO && null != en ? (eO = G.intl.string(G.t['3O6A4e'])) : $ === v.Rx.JOIN_NITRO ? (eO = G.intl.string(G.t.brBiOz)) : $ === v.Rx.GET_NITRO && (eO = G.intl.string(G.t.GayC1t))));
        let ey = (0, r.jsx)(
            c.Qj,
            ((H = (function (e) {
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
                    selected: z,
                    route: W,
                    icon: s.SrA,
                    text: eO,
                    locationState: Y,
                    onClick: () => {
                        (eh === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ef(U.L.TAKE_ACTION),
                            _.default.track(M.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: O,
                                has_premium: X
                            }),
                            null != e_ && eE(U.L.USER_DISMISS));
                    }
                },
                K,
                et
            )),
            (F = F =
                {
                    className: t,
                    children: n
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
        return ec ? (0, r.jsx)(x.C, { children: ey }) : ey;
    };
