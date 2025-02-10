n.d(t, {
    g: () => B,
    i: () => G
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
    C = n(650032),
    v = n(767870),
    N = n(104494),
    T = n(639119),
    S = n(655525),
    Z = n(314684),
    A = n(52188),
    x = n(346497),
    b = n(924540),
    L = n(474486),
    y = n(119850),
    P = n(701910),
    O = n(938736),
    R = n(227140),
    j = n(474936),
    D = n(981631),
    w = n(921944),
    M = n(388032),
    k = n(892894);
let U = 'NitroTabButton',
    G = (e) => {
        let { selected: t } = e,
            n = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
            i = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            l = (0, T.N)(),
            a = (0, N.Ng)(),
            s = (0, x.Vi)(),
            o = (0, O.vx)(U),
            c = (0, O.wG)(U),
            d = (0, Z.$_)(),
            u = (0, y.V)(),
            h = (0, E.Qo)(n, i),
            m = (0, r.e7)([I.Z], () => I.Z.getCreatedAtOverride()),
            g = t || null != l || null != a || s || o || c || null != d || null != u || h,
            f = null != m ? m : null == n ? void 0 : n.createdAt;
        return g || (null != n && null != f && Date.now() - f.getTime() > 1209600000);
    },
    B = (e) => {
        let t,
            n,
            I,
            B,
            { selected: V, route: H, locationState: F, ...z } = e,
            W = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
            Y = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            K = (0, E.Qo)(W, Y),
            q = (0, l.JA)('nitro'),
            X = (0, T.N)(),
            Q = (0, N.Ng)(),
            J = (0, r.e7)([_.ZP], () => _.ZP.inReverseTrial()),
            $ = (0, r.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == X,
            ee = (0, x.Vi)(),
            et = (0, Z.$_)(),
            en = (0, y.V)(),
            ei = (0, O.Kn)(U),
            el = (0, O.vx)(U),
            er = (0, O.wG)(U),
            ea = (0, r.e7)([m.Z], () => m.Z.hasLayers()),
            { fractionalState: es, startsAt: eo, endsAt: ec } = (0, d.Z)({ forceFetch: !0 }),
            [ed, eu] = (0, h.bf)(es !== j.a$.NONE ? a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eo.valueOf(),
                cooldownDurationMs: 0
            }),
            { enabled: eh } = C._.useExperiment({ location: U }, { autoTrackExposure: !1 }),
            em = eh && (null == X ? void 0 : X.trial_id) === j.a7,
            [ep, eg] = (0, h.US)(J ? [a.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
        if (!G({ selected: V })) return null;
        es !== j.a$.NONE &&
            ((B = 9),
            (I = (0, i.jsx)(v.Z, {
                className: '',
                startsAt: eo,
                endsAt: ec,
                messageStyle: c.a.SHORT_TIME,
                upperCase: !0
            }))),
            el
                ? ((t = k.referralIncentive), (B = 7))
                : er
                  ? ((I = (0, i.jsx)(P.Z, { copy: M.intl.string(M.t.jyYgZ2) })), (B = 8))
                  : ee
                    ? ((I = (0, i.jsx)(S.Z, {})), (B = 0))
                    : null != ep && ep === a.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                      ? ((I = (0, i.jsx)(R.Z, {
                            copy: M.intl.string(M.t.HwUCnp),
                            showStars: !1
                        })),
                        (B = 4))
                      : null != et
                        ? ((I = (0, i.jsx)(R.Z, {
                              copy: et,
                              showStars: !1
                          })),
                          (B = 1))
                        : null != en
                          ? ((I = (0, i.jsx)(R.Z, {
                                copy: en,
                                showStars: !1
                            })),
                            (B = 1))
                          : null != Q
                            ? ((I = (0, i.jsx)(b.GN, {
                                  userDiscount: Q,
                                  isTabSelected: V,
                                  includesAmountOff: !1
                              })),
                              (B = 3))
                            : null == X || em
                              ? ei
                                  ? ((I = (0, i.jsx)(L.lH, {
                                        isSelected: V,
                                        onSelect: () => (0, u.EW)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: w.L.TAKE_ACTION })
                                    })),
                                    (B = 6))
                                  : $ && ((I = (0, i.jsx)(A.k, { entryPoint: A.U.PrivateMessages })), V || (t = k.localizeBadge), (B = 5))
                              : ((I = (0, i.jsx)(b.$H, {
                                    trialOffer: X,
                                    isTabSelected: V
                                })),
                                (B = 4));
        let e_ = (0, i.jsx)(o.Qj, {
            selected: V,
            route: H,
            icon: s.SrA,
            text: M.intl.string(M.t.Ipxkoq),
            locationState: F,
            onClick: () => {
                ed === a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eu(w.L.TAKE_ACTION),
                    f.default.track(D.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: B,
                        has_premium: K
                    }),
                    el || er ? ((0, u.EW)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: w.L.TAKE_ACTION }), er && (0, u.EW)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: w.L.TAKE_ACTION })) : null != ep && eg(w.L.USER_DISMISS);
            },
            ...z,
            ...q,
            className: t,
            avatarWithTextClassName: n,
            children: I
        });
        return ei ? (0, i.jsx)(L.CI, { children: e_ }) : el && !ea ? (0, i.jsx)(L.A7, { children: () => e_ }) : e_;
    };
