n.d(t, {
    g: function () {
        return F;
    },
    i: function () {
        return H;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651);
n(192379);
var a = n(91192),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(515753),
    u = n(927359),
    h = n(975298),
    m = n(605236),
    p = n(243778),
    g = n(819640),
    f = n(594174),
    _ = n(351402),
    E = n(78839),
    I = n(626135),
    C = n(74538),
    N = n(502087),
    v = n(650032),
    S = n(767870),
    T = n(104494),
    A = n(639119),
    b = n(655525),
    Z = n(314684),
    x = n(52188),
    L = n(346497),
    P = n(924540),
    O = n(474486),
    y = n(976465),
    R = n(701910),
    j = n(938736),
    D = n(227140),
    M = n(474936),
    w = n(981631),
    k = n(921944),
    U = n(388032),
    G = n(398645);
let B = 'NitroTabButton',
    V = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER');
let H = (e) => {
        let { selected: t } = e,
            n = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
            i = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
            r = (0, A.N)(),
            l = (0, T.Ng)(),
            a = (0, L.Vi)(),
            o = (0, j.vx)(B),
            c = (0, j.wG)(B),
            d = (0, Z.$_)(),
            u = (0, y.V6)(),
            h = (0, C.Qo)(n, i),
            m = (0, s.e7)([N.Z], () => N.Z.getCreatedAtOverride()),
            p = t || null != r || null != l || a || o || c || null != d || null != u || h,
            g = null != m ? m : null == n ? void 0 : n.createdAt;
        return (p = p || (null != n && null != g && Date.now() - g.getTime() > V));
    },
    F = (e) => {
        let t,
            n,
            i,
            r,
            { selected: N, route: V, locationState: F, ...z } = e,
            W = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
            Y = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
            K = (0, C.Qo)(W, Y),
            q = (0, a.JA)('nitro'),
            X = (0, A.N)(),
            Q = (0, T.Ng)(),
            J = (0, s.e7)([E.ZP], () => E.ZP.inReverseTrial()),
            $ = (0, s.e7)([_.Z], () => _.Z.isLocalizedPromoEnabled) && null == X,
            ee = (0, L.Vi)(),
            et = (0, Z.$_)(),
            en = (0, y.V6)(),
            ei = (0, j.Kn)(B),
            er = (0, j.vx)(B),
            el = (0, j.wG)(B),
            ea = (0, s.e7)([g.Z], () => g.Z.hasLayers()),
            { fractionalState: es, endsAt: eo, currentEntitlementId: ec } = (0, h.Z)({ forceFetch: !0 }),
            [ed, eu] = (0, p.XR)(es !== M.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, es !== M.a$.NONE ? Number(ec) : 0),
            { enabled: eh } = v._.useExperiment({ location: B }, { autoTrackExposure: !1 }),
            em = eh && (null == X ? void 0 : X.trial_id) === M.a7,
            [ep, eg] = (0, p.US)(J ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
        if (!H({ selected: N })) return null;
        es !== M.a$.NONE &&
            ((r = 9),
            (i = (0, l.jsx)(S.Z, {
                className: '',
                endsAt: eo,
                messageStyle: u.a.SHORT_TIME,
                upperCase: !0,
                currentEntitlementId: ec
            }))),
            er
                ? ((t = G.referralIncentive), (r = 7))
                : el
                  ? ((i = (0, l.jsx)(R.Z, { copy: U.intl.string(U.t.jyYgZ2) })), (r = 8))
                  : ee
                    ? ((i = (0, l.jsx)(b.Z, {})), (r = 0))
                    : null != ep && ep === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                      ? ((i = (0, l.jsx)(D.Z, {
                            copy: U.intl.string(U.t.HwUCnp),
                            showStars: !1
                        })),
                        (r = 4))
                      : null != et
                        ? ((i = (0, l.jsx)(D.Z, {
                              copy: et,
                              showStars: !1
                          })),
                          (r = 1))
                        : null != en
                          ? ((i = (0, l.jsx)(D.Z, {
                                copy: en,
                                showStars: !1
                            })),
                            (r = 1))
                          : null != Q
                            ? ((i = (0, l.jsx)(P.GN, {
                                  userDiscount: Q,
                                  isTabSelected: N,
                                  includesAmountOff: !1
                              })),
                              (r = 3))
                            : null == X || em
                              ? ei
                                  ? ((i = (0, l.jsx)(O.lH, {
                                        isSelected: N,
                                        onSelect: () => (0, m.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                                    })),
                                    (r = 6))
                                  : $ && ((i = (0, l.jsx)(x.k, { entryPoint: x.U.PrivateMessages })), !N && (t = G.localizeBadge), (r = 5))
                              : ((i = (0, l.jsx)(P.$H, {
                                    trialOffer: X,
                                    isTabSelected: N
                                })),
                                (r = 4));
        let ef = (0, l.jsx)(d.Qj, {
            selected: N,
            route: V,
            icon: c.NitroWheelIcon,
            text: U.intl.string(U.t.Ipxkoq),
            locationState: F,
            onClick: () => {
                ed === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eu(k.L.TAKE_ACTION),
                    I.default.track(w.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: r,
                        has_premium: K
                    }),
                    er || el ? ((0, m.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: k.L.TAKE_ACTION }), el && (0, m.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: k.L.TAKE_ACTION })) : null != ep && eg(k.L.USER_DISMISS);
            },
            ...z,
            ...q,
            className: t,
            avatarWithTextClassName: n,
            children: i
        });
        return ei ? (0, l.jsx)(O.CI, { children: ef }) : er && !ea ? (0, l.jsx)(O.A7, { children: () => ef }) : ef;
    };
