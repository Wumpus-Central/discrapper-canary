n.d(t, {
    g: () => H,
    i: () => V,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(515753),
    u = n(927359),
    d = n(975298),
    p = n(803038),
    f = n(211644),
    h = n(266454),
    g = n(243778),
    m = n(594174),
    b = n(78839),
    _ = n(626135),
    O = n(74538),
    E = n(502087),
    y = n(367074),
    v = n(695349),
    I = n(532245),
    C = n(870041),
    S = n(963590),
    N = n(767870),
    T = n(104494),
    P = n(639119),
    j = n(655525),
    x = n(93237),
    A = n(138176),
    Z = n(924540),
    w = n(474486),
    L = n(497334),
    R = n(119850),
    D = n(938736),
    k = n(227140),
    M = n(474936),
    U = n(981631),
    G = n(921944),
    B = n(388032);
let V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            i = (0, P.N)(),
            l = (0, T.Ng)(),
            o = (0, y.Vi)(),
            s = (0, R.V)(),
            c = (0, O.Qo)(n, r),
            u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()),
            d = t || null != i || null != l || o || null != s || c,
            p = null != u ? u : null == n ? void 0 : n.createdAt;
        return d || (null != n && null != p && Date.now() - p.getTime() > 1209600000);
    },
    H = (e) => {
        let t, n, E;
        var H,
            F,
            { selected: z, nitroTabButtonRef: W, route: Y, locationState: K } = e,
            q = (function (e, t) {
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
        let Q = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            X = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            J = (0, O.Qo)(Q, X),
            { enabled: $, variant: ee } = I.p1.useExperiment({ location: "NitroTabButton" }),
            { enabled: et } = I.pd.useExperiment({ location: "NitroTabButton" });
        I.VL.useConfig({ location: "NitroTabButton" }), I.CF.useConfig({ location: "NitroTabButton" });
        let en = (0, l.JA)("nitro"),
            er = (0, P.N)(),
            ei = (0, T.Ng)(),
            el = (0, v.W)(),
            ea = (0, y.Vi)(),
            eo = (0, x.HI)({ trialOffer: er }),
            es = (0, R.V)(),
            ec = (0, x.eW)(),
            eu = C.ZP.useExperiment({ location: "NitroTabButton" }),
            ed = (0, D.Kn)("NitroTabButton") && eu.cohort === C.xI.Control,
            { fractionalState: ep, startsAt: ef, endsAt: eh } = (0, d.Z)({ forceFetch: !0 }),
            [eg, em] = (0, g.bf)(ep !== M.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ef.valueOf(),
                cooldownDurationMs: 0,
            }),
            eb = (0, S.Z)({ location: "NitroTabButton" }),
            e_ = (null == er ? void 0 : er.trial_id) === M.a7,
            eO = p.Mc.useExperiment({ location: "NitroTabButton" }).v2EditorEnabled,
            eE = [];
        (0, f.Kl)() &&
            (ea && eE.push(o.z.BOGO_2025_NITRO_TAB_BADGE),
            eb && eE.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            el && eE.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2),
            eO && eE.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
        let [ey, ev] = (0, g.US)(eE, void 0, !0);
        if (
            (i.useEffect(() => {
                !0 === z && null != ey && ev(G.L.AUTO_DISMISS);
            }, [ev, z, ey]),
            !V({ selected: z }))
        )
            return null;
        let eI = () => {
            eg === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && em(G.L.TAKE_ACTION),
                _.default.track(U.rMx.NITRO_TAB_VISITED, {
                    badge_decorator: E,
                    has_premium: J,
                }),
                null != ey && ev(G.L.USER_DISMISS);
        };
        if (
            (ep === M.a$.NONE ||
                el ||
                ((E = 7),
                (n = (0, r.jsx)(N.Z, {
                    className: "",
                    startsAt: ef,
                    endsAt: eh,
                    messageStyle: u.aj.SHORT_TIME,
                    upperCase: !0,
                }))),
            ea)
        )
            (n = (0, r.jsx)(j.Z, {})), (E = 0);
        else if (eo) {
            let e = (0, x.$q)();
            (n = (0, r.jsx)(Z._y, {
                isTabSelected: z,
                badgeCopy: B.intl.string(B.t.OS9KPj),
                offerExpiresAt: !0 === e ? (null == er ? void 0 : er.expires_at) : null,
            })),
                (E = 4);
        } else
            ey === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ey === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE
                ? ((n = (0, r.jsx)(Z._y, {
                      isTabSelected: z,
                      badgeCopy: B.intl.string(B.t.y2b7CA),
                      offerExpiresAt: null,
                  })),
                  (E = 2))
                : el
                  ? ((n = (0, r.jsx)(L.S, { expiresAt: eh })), (E = 4))
                  : null != es
                    ? ((n = (0, r.jsx)(k.Z, {
                          copy: es,
                          showStars: !1,
                      })),
                      (E = 1))
                    : null != ei
                      ? ((n = (0, r.jsx)(Z.GN, {
                            userDiscount: ei,
                            isTabSelected: z,
                            includesAmountOff: !1,
                        })),
                        (E = 3))
                      : null == er || e_
                        ? ed &&
                          ((n = (0, r.jsx)(w.l, {
                              isSelected: z,
                              onSelect: () =>
                                  (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: G.L.TAKE_ACTION }),
                          })),
                          (E = 6))
                        : ((n = (0, r.jsx)(Z.$H, {
                              trialOffer: er,
                              isTabSelected: z,
                          })),
                          (E = 4));
        let eC = B.intl.string(B.t.Ipxkoq);
        J && et && (eC = B.intl.string(B.t["4gwVVl"])),
            !J &&
                $ &&
                (ee === I.Rx.TRY_NITRO && null != er
                    ? (eC = B.intl.string(B.t["3O6A4e"]))
                    : ee === I.Rx.JOIN_NITRO
                      ? (eC = B.intl.string(B.t.brBiOz))
                      : ee === I.Rx.GET_NITRO && (eC = B.intl.string(B.t.GayC1t))),
            ec &&
                eu.cohort !== C.xI.Control &&
                ((n = (0, r.jsx)(Z._y, {
                    isTabSelected: z,
                    badgeCopy: B.intl.string(B.t.RDE0SU),
                    offerExpiresAt: null,
                })),
                (E = 4),
                (eI = () => {
                    _.default.track(U.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: E,
                        has_premium: J,
                    }),
                        (0, x.ZL)();
                }));
        let eS = (0, r.jsx)(
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
                    listItemRef: W,
                    selected: z,
                    route: Y,
                    icon: s.SrA,
                    text: eC,
                    locationState: K,
                    onClick: eI,
                },
                q,
                en,
            )),
            (F = F =
                {
                    className: t,
                    children: n,
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
            H),
        );
        return ec && eu.cohort === C.xI.Static
            ? (0, r.jsx)(A.X, { children: eS })
            : ed
              ? (0, r.jsx)(w.C, { children: eS })
              : eS;
    };
