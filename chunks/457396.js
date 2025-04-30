n.d(t, {
    g: () => B,
    i: () => V
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
    I = n(351367),
    v = n(104494),
    C = n(639119),
    S = n(655525),
    N = n(314684),
    T = n(52188),
    P = n(346497),
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
let G = 'NitroTabButton',
    V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            r = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            i = (0, C.N)(),
            l = (0, v.Ng)(),
            o = (0, P.Vi)(),
            s = (0, N.$_)(),
            c = (0, x.V)(),
            u = (0, _.Qo)(n, r),
            d = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            p = (0, I.m)({ location: G }),
            h = t || null != i || null != l || o || null != s || null != c || !0 === p || u,
            g = null != d ? d : null == n ? void 0 : n.createdAt;
        return h || (null != n && null != g && Date.now() - g.getTime() > 1209600000);
    },
    B = (e) => {
        let t, n, E, I;
        var B,
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
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['selected', 'route', 'locationState']);
        let K = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            q = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
            Q = (0, _.Qo)(K, q),
            X = (0, l.JA)('nitro'),
            J = (0, C.N)(),
            $ = (0, v.Ng)(),
            ee = (0, O.W)(),
            et = (0, a.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == J,
            en = (0, P.Vi)(),
            er = (0, N.$_)(),
            ei = (0, x.V)(),
            el = (0, w.Kn)(G),
            { fractionalState: ea, startsAt: eo, endsAt: es } = (0, d.Z)({ forceFetch: !0 }),
            [ec, eu] = (0, h.bf)(ea !== R.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eo.valueOf(),
                cooldownDurationMs: 0
            }),
            ed = (null == J ? void 0 : J.trial_id) === R.a7,
            [ep, eh] = (0, h.US)(ee ? [o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2] : [], void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === F && ep === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && eh(k.L.AUTO_DISMISS);
            }, [eh, ep, F]),
            !V({ selected: F }))
        )
            return null;
        ea === R.a$.NONE ||
            ee ||
            ((I = 7),
            (E = (0, r.jsx)(y.Z, {
                className: '',
                startsAt: eo,
                endsAt: es,
                messageStyle: u.aj.SHORT_TIME,
                upperCase: !0
            }))),
            en
                ? ((E = (0, r.jsx)(S.Z, {})), (I = 0))
                : ee
                  ? ((E = (0, r.jsx)(Z.S, {
                        expiresAt: es,
                        isAcknowledged: ep !== o.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                    })),
                    (I = 4))
                  : null != er
                    ? ((E = (0, r.jsx)(L.Z, {
                          copy: er,
                          showStars: !1
                      })),
                      (I = 1))
                    : null != ei
                      ? ((E = (0, r.jsx)(L.Z, {
                            copy: ei,
                            showStars: !1
                        })),
                        (I = 1))
                      : null != $
                        ? ((E = (0, r.jsx)(j.GN, {
                              userDiscount: $,
                              isTabSelected: F,
                              includesAmountOff: !1
                          })),
                          (I = 3))
                        : null == J || ed
                          ? el
                              ? ((E = (0, r.jsx)(A.l, {
                                    isSelected: F,
                                    onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                                })),
                                (I = 6))
                              : et && ((E = (0, r.jsx)(T.k, { entryPoint: T.U.PrivateMessages })), F || (t = U.localizeBadge), (I = 5))
                          : ((E = (0, r.jsx)(j.$H, {
                                trialOffer: J,
                                isTabSelected: F
                            })),
                            (I = 4));
        let ef = (0, r.jsx)(
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
                    selected: F,
                    route: z,
                    icon: s.SrA,
                    text: M.intl.string(M.t.Ipxkoq),
                    locationState: W,
                    onClick: () => {
                        ec === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eu(k.L.TAKE_ACTION),
                            b.default.track(D.rMx.NITRO_TAB_VISITED, {
                                badge_decorator: I,
                                has_premium: Q
                            }),
                            null != ep && eh(k.L.USER_DISMISS);
                    }
                },
                Y,
                X
            )),
            (H = H =
                {
                    className: t,
                    avatarWithTextClassName: n,
                    children: E
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(H))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(H)).forEach(function (e) {
                      Object.defineProperty(B, e, Object.getOwnPropertyDescriptor(H, e));
                  }),
            B)
        );
        return el ? (0, r.jsx)(A.C, { children: ef }) : ef;
    };
