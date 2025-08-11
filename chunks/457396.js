n.d(t, {
    g: () => H,
    i: () => V,
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
    I = n(870041),
    C = n(963590),
    S = n(767870),
    N = n(104494),
    T = n(639119),
    P = n(655525),
    j = n(93237),
    x = n(138176),
    A = n(924540),
    Z = n(474486),
    w = n(497334),
    L = n(119850),
    R = n(938736),
    D = n(227140),
    k = n(474936),
    M = n(981631),
    U = n(921944),
    G = n(388032);
let V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            r = (0, a.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            i = (0, T.N)(),
            l = (0, N.Ng)(),
            o = (0, E.Vi)(),
            s = (0, L.V)(),
            c = (0, _.Qo)(n, r),
            u = (0, a.e7)([O.Z], () => O.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    H = (e) => {
        let t, n, O;
        var H,
            B,
            { selected: F, nitroTabButtonRef: z, route: W, locationState: Y } = e,
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
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["selected", "nitroTabButtonRef", "route", "locationState"]);
        let q = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            X = (0, a.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            Q = (0, _.Qo)(q, X),
            { enabled: J, variant: $ } = v.p1.useExperiment({ location: "NitroTabButton" }),
            { enabled: ee } = v.pd.useExperiment({ location: "NitroTabButton" });
        v.VL.useConfig({ location: "NitroTabButton" }), v.CF.useConfig({ location: "NitroTabButton" });
        let et = (0, l.JA)("nitro"),
            en = (0, T.N)(),
            er = (0, N.Ng)(),
            ei = (0, y.W)(),
            el = (0, E.Vi)(),
            ea = (0, j.HI)({ trialOffer: en }),
            eo = (0, L.V)(),
            es = (0, j.eW)(),
            ec = I.ZP.useExperiment({ location: "NitroTabButton" }),
            eu = (0, R.Kn)("NitroTabButton") && ec.cohort === I.xI.Control,
            { fractionalState: ed, startsAt: ep, endsAt: eh } = (0, d.Z)({ forceFetch: !0 }),
            [ef, eg] = (0, f.bf)(ed !== k.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ep.valueOf(),
                cooldownDurationMs: 0,
            }),
            em = (0, C.Z)({ location: "NitroTabButton" }),
            eb = (null == en ? void 0 : en.trial_id) === k.a7,
            e_ = [];
        (0, p.Kl)() &&
            (el && e_.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            em && e_.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ei && e_.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eO, eE] = (0, f.US)(e_, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === F && null != eO && eE(U.L.AUTO_DISMISS);
            }, [eE, F, eO]),
            !V({ selected: F }))
        )
            return null;
        let ey = () => {
            ef === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eg(U.L.TAKE_ACTION),
                b.default.track(M.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: O,
                    has_premium: Q,
                }),
                null != eO && eE(U.L.USER_DISMISS);
        };
        if (
            (ed === k.a$.NONE ||
                ei ||
                ((O = 7),
                (n = (0, r.jsx)(S.Z, {
                    className: "",
                    startsAt: ep,
                    endsAt: eh,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            el)
        )
            (n = (0, r.jsx)(P.Z, {})), (O = 0);
        else if (ea) {
            let e = (0, j.$q)();
            (n = (0, r.jsx)(A._y, {
                isTabSelected: F,
                badgeCopy: G.intl.string(G.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == en ? void 0 : en.expires_at) : null,
            })),
                (O = 4);
        } else
            eO === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(A._y, {
                      isTabSelected: F,
                      badgeCopy: G.intl.string(G.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (O = 2))
                : ei
                  ? ((n = (0, r.jsx)(w.S, { expiresAt: eh })), (O = 4))
                  : null != eo
                    ? ((n = (0, r.jsx)(D.Z, {
                          copy: eo,
                          showStars: !1,
                      })),
                      (O = 1))
                    : null != er
                      ? ((n = (0, r.jsx)(A.GN, {
                            userDiscount: er,
                            isTabSelected: F,
                            includesAmountOff: !1,
                        })),
                        (O = 3))
                      : null == en || eb
                        ? eu &&
                          ((n = (0, r.jsx)(Z.l, {
                              isSelected: F,
                              onSelect: () =>
                                  (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: U.L.TAKE_ACTION }),
                          })),
                          (O = 6))
                        : ((n = (0, r.jsx)(A.$H, {
                              trialOffer: en,
                              isTabSelected: F,
                          })),
                          (O = 4));
        let ev = G.intl.string(G.t.Ipxkoq);
        Q && ee && (ev = G.intl.string(G.t["4gwVVl"])),
            !Q &&
                J &&
                ($ === v.Rx.TRY_NITRO && null != en
                    ? (ev = G.intl.string(G.t["3O6A4e"]))
                    : $ === v.Rx.JOIN_NITRO
                      ? (ev = G.intl.string(G.t.brBiOz))
                      : $ === v.Rx.GET_NITRO && (ev = G.intl.string(G.t.GayC1t))),
            es &&
                ec.cohort !== I.xI.Control &&
                ((n = (0, r.jsx)(A._y, {
                    isTabSelected: F,
                    badgeCopy: G.intl.string(G.t.RDE0SU),
                    offerExpiresAt: null,
                })),
                (O = 4),
                (ey = () => {
                    b.default.track(M.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: O,
                        has_premium: Q,
                    }),
                        (0, j.ZL)();
                }));
        let eI = (0, r.jsx)(
            c.Qj,
            ((H = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    listItemRef: z,
                    selected: F,
                    route: W,
                    icon: s.SrA,
                    text: ev,
                    locationState: Y,
                    onClick: ey,
                },
                K,
                et,
            )),
            (B = B =
                {
                    className: t,
                    children: n,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(B))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(B)).forEach(function (e) {
                      Object.defineProperty(H, e, Object.getOwnPropertyDescriptor(B, e));
                  }),
            H),
        );
        return es && ec.cohort === I.xI.Static
            ? (0, r.jsx)(x.X, { children: eI })
            : eu
              ? (0, r.jsx)(Z.C, { children: eI })
              : eI;
    };
