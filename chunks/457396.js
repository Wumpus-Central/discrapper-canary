n.d(t, {
    g: () => V,
    i: () => B
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(91192),
    r = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(515753),
    c = n(927359),
    d = n(975298),
    u = n(605236),
    h = n(243778),
    m = n(819640),
    p = n(594174),
    g = n(351402),
    _ = n(78839),
    f = n(626135),
    E = n(74538),
    I = n(502087),
    C = n(695349),
    N = n(650032),
    v = n(767870),
    T = n(104494),
    S = n(639119),
    A = n(655525),
    b = n(314684),
    Z = n(52188),
    x = n(346497),
    L = n(924540),
    y = n(474486),
    P = n(119850),
    O = n(701910),
    R = n(938736),
    j = n(227140),
    D = n(474936),
    w = n(981631),
    k = n(921944),
    M = n(388032),
    U = n(949831);
let G = 'NitroTabButton',
    B = (e) => {
        let { selected: t } = e,
            n = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
            i = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            l = (0, S.N)(),
            a = (0, T.Ng)(),
            s = (0, x.Vi)(),
            o = (0, R.vx)(G),
            c = (0, R.wG)(G),
            d = (0, b.$_)(),
            u = (0, P.V)(),
            h = (0, E.Qo)(n, i),
            m = (0, r.e7)([I.Z], () => I.Z.getCreatedAtOverride()),
            g = t || null != l || null != a || s || o || c || null != d || null != u || h,
            f = null != m ? m : null == n ? void 0 : n.createdAt;
        return g || (null != n && null != f && Date.now() - f.getTime() > 1209600000);
    },
    V = (e) => {
        let t,
            n,
            I,
            V,
            { selected: H, route: F, locationState: z, ...W } = e,
            Y = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
            K = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            q = (0, E.Qo)(Y, K),
            X = (0, l.JA)('nitro'),
            Q = (0, S.N)(),
            J = (0, T.Ng)(),
            $ = (0, C.W)(),
            ee = (0, r.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == Q,
            et = (0, x.Vi)(),
            en = (0, b.$_)(),
            ei = (0, P.V)(),
            el = (0, R.Kn)(G),
            er = (0, R.vx)(G),
            ea = (0, R.wG)(G),
            es = (0, r.e7)([m.Z], () => m.Z.hasLayers()),
            { fractionalState: eo, startsAt: ec, endsAt: ed } = (0, d.Z)({ forceFetch: !0 }),
            [eu, eh] = (0, h.bf)(eo !== D.a$.NONE ? a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ec.valueOf(),
                cooldownDurationMs: 0
            }),
            { enabled: em } = N._.useExperiment({ location: G }, { autoTrackExposure: !1 }),
            ep = em && (null == Q ? void 0 : Q.trial_id) === D.a7,
            [eg, e_] = (0, h.US)($ ? [a.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
        if (!B({ selected: H })) return null;
        eo === D.a$.NONE ||
            $ ||
            ((V = 9),
            (I = (0, i.jsx)(v.Z, {
                className: '',
                startsAt: ec,
                endsAt: ed,
                messageStyle: c.a.SHORT_TIME,
                upperCase: !0
            }))),
            er
                ? ((t = U.referralIncentive), (V = 7))
                : ea
                  ? ((I = (0, i.jsx)(O.Z, { copy: M.intl.string(M.t.jyYgZ2) })), (V = 8))
                  : et
                    ? ((I = (0, i.jsx)(A.Z, {})), (V = 0))
                    : null != eg && eg === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                      ? ((I = (0, i.jsx)(j.Z, {
                            copy: M.intl.string(M.t.HwUCnp),
                            showStars: !1
                        })),
                        (V = 4))
                      : null != en
                        ? ((I = (0, i.jsx)(j.Z, {
                              copy: en,
                              showStars: !1
                          })),
                          (V = 1))
                        : null != ei
                          ? ((I = (0, i.jsx)(j.Z, {
                                copy: ei,
                                showStars: !1
                            })),
                            (V = 1))
                          : null != J
                            ? ((I = (0, i.jsx)(L.GN, {
                                  userDiscount: J,
                                  isTabSelected: H,
                                  includesAmountOff: !1
                              })),
                              (V = 3))
                            : null == Q || ep
                              ? el
                                  ? ((I = (0, i.jsx)(y.lH, {
                                        isSelected: H,
                                        onSelect: () => (0, u.EW)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                                    })),
                                    (V = 6))
                                  : ee && ((I = (0, i.jsx)(Z.k, { entryPoint: Z.U.PrivateMessages })), H || (t = U.localizeBadge), (V = 5))
                              : ((I = (0, i.jsx)(L.$H, {
                                    trialOffer: Q,
                                    isTabSelected: H
                                })),
                                (V = 4));
        let ef = (0, i.jsx)(o.Qj, {
            selected: H,
            route: F,
            icon: s.SrA,
            text: M.intl.string(M.t.Ipxkoq),
            locationState: z,
            onClick: () => {
                eu === a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eh(k.L.TAKE_ACTION),
                    f.default.track(w.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: V,
                        has_premium: q
                    }),
                    er || ea ? ((0, u.EW)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: k.L.TAKE_ACTION }), ea && (0, u.EW)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: k.L.TAKE_ACTION })) : null != eg && e_(k.L.USER_DISMISS);
            },
            ...W,
            ...X,
            className: t,
            avatarWithTextClassName: n,
            children: I
        });
        return el ? (0, i.jsx)(y.CI, { children: ef }) : er && !es ? (0, i.jsx)(y.A7, { children: () => ef }) : ef;
    };
