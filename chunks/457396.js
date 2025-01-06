n.d(t, {
    g: function () {
        return et;
    },
    i: function () {
        return ee;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(704215),
    h = n(780384),
    m = n(481060),
    p = n(515753),
    g = n(410030),
    f = n(607070),
    _ = n(927359),
    E = n(975298),
    I = n(605236),
    C = n(243778),
    N = n(819640),
    v = n(594174),
    S = n(351402),
    T = n(78839),
    b = n(626135),
    A = n(74538),
    Z = n(502087),
    x = n(769415),
    L = n(650032),
    P = n(767870),
    O = n(104494),
    y = n(639119),
    R = n(655525),
    j = n(314684),
    D = n(52188),
    M = n(346497),
    w = n(924540),
    k = n(474486),
    U = n(976465),
    G = n(701910),
    B = n(938736),
    V = n(227140),
    H = n(474936),
    F = n(981631),
    z = n(921944),
    W = n(388032),
    Y = n(398645),
    K = n(693988),
    q = n(155357),
    X = n(513885),
    Q = n(547970);
let J = 'NitroTabButton',
    $ = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let ee = (e) => {
        let { selected: t } = e,
            n = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
            i = (0, d.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
            r = (0, y.N)(),
            l = (0, O.Ng)(),
            a = (0, M.Vi)(),
            s = (0, B.vx)(J),
            o = (0, B.wG)(J),
            c = (0, j.$_)(),
            u = (0, U.V6)(),
            h = (0, A.Qo)(n, i),
            m = (0, d.e7)([Z.Z], () => Z.Z.getCreatedAtOverride()),
            p = t || null != r || null != l || a || s || o || null != c || null != u || h,
            g = null != m ? m : null == n ? void 0 : n.createdAt;
        return (p = p || (null != n && null != g && Date.now() - g.getTime() > $));
    },
    et = (e) => {
        let t,
            n,
            i,
            r,
            { selected: s, route: Z, locationState: $, ...et } = e,
            en = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
            ei = (0, d.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
            er = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
            el = (0, h.ap)((0, g.ZP)()),
            [ea, es] = a.useState(!1),
            eo = (0, A.Qo)(en, ei),
            ec = (0, c.JA)('nitro'),
            ed = (0, y.N)(),
            eu = (0, O.Ng)(),
            eh = (0, d.e7)([T.ZP], () => T.ZP.inReverseTrial()),
            em = (null == ed ? void 0 : ed.trial_id) === H.jz,
            ep = (0, d.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) && null == ed,
            eg = (0, M.Vi)(),
            ef = (0, j.$_)(),
            e_ = (0, U.V6)(),
            eE = (0, B.Kn)(J),
            eI = (0, B.vx)(J),
            eC = (0, B.wG)(J),
            eN = (0, d.e7)([N.Z], () => N.Z.hasLayers()),
            { fractionalState: ev, endsAt: eS, currentEntitlementId: eT } = (0, E.Z)({ forceFetch: !0 }),
            [eb, eA] = (0, C.XR)(ev !== H.a$.NONE ? u.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, ev !== H.a$.NONE ? Number(eT) : 0),
            { enabled: eZ } = L._.useExperiment({ location: J }, { autoTrackExposure: !1 }),
            { enabled: ex } = x.Z.useExperiment(
                { location: J },
                {
                    autoTrackExposure: em,
                    disable: !em
                }
            ),
            eL = eZ && (null == ed ? void 0 : ed.trial_id) === H.a7,
            [eP, eO] = (0, C.US)(eh ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
        if (!ee({ selected: s })) return null;
        if (
            (ev !== H.a$.NONE &&
                ((r = 9),
                (i = (0, l.jsx)(P.Z, {
                    className: '',
                    endsAt: eS,
                    messageStyle: _.a.SHORT_TIME,
                    upperCase: !0,
                    currentEntitlementId: eT
                }))),
            em)
        ) {
            var ey, eR, ej;
            (n = Y.trialForAllButton),
                (r = 10),
                (i = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(k.dX, {
                            isSelected: s,
                            trialOffer: ed,
                            q4MarketingEnabled: ex
                        }),
                        ex &&
                            (0, l.jsx)('div', {
                                className: Y.tabBackground,
                                children: (0, l.jsx)('img', {
                                    className: o()(Y.tabBackgroundImage, { [Y.tabBackgroundImageHovered]: ea }),
                                    src: ((ey = er), (eR = el), (ej = ea), eR ? (ey || !ej ? Q.Z : X.Z) : ey || !ej ? q.Z : K.Z),
                                    alt: ''
                                })
                            })
                    ]
                }));
        } else
            eI
                ? ((t = Y.referralIncentive), (r = 7))
                : eC
                  ? ((i = (0, l.jsx)(G.Z, { copy: W.intl.string(W.t.jyYgZ2) })), (r = 8))
                  : eg
                    ? ((i = (0, l.jsx)(R.Z, {})), (r = 0))
                    : null != eP && eP === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                      ? ((i = (0, l.jsx)(V.Z, {
                            copy: W.intl.string(W.t.HwUCnp),
                            showStars: !1
                        })),
                        (r = 4))
                      : null != ef
                        ? ((i = (0, l.jsx)(V.Z, {
                              copy: ef,
                              showStars: !1
                          })),
                          (r = 1))
                        : null != e_
                          ? ((i = (0, l.jsx)(V.Z, {
                                copy: e_,
                                showStars: !1
                            })),
                            (r = 1))
                          : null != eu
                            ? ((i = (0, l.jsx)(w.GN, {
                                  userDiscount: eu,
                                  isTabSelected: s,
                                  includesAmountOff: !1
                              })),
                              (r = 3))
                            : null == ed || eL
                              ? eE
                                  ? ((i = (0, l.jsx)(k.lH, {
                                        isSelected: s,
                                        onSelect: () => (0, I.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: z.L.TAKE_ACTION })
                                    })),
                                    (r = 6))
                                  : ep && ((i = (0, l.jsx)(D.k, { entryPoint: D.U.PrivateMessages })), !s && (t = Y.localizeBadge), (r = 5))
                              : ((i = (0, l.jsx)(w.$H, {
                                    trialOffer: ed,
                                    isTabSelected: s
                                })),
                                (r = 4));
        let eD = (0, l.jsx)(p.Qj, {
            selected: s,
            route: Z,
            icon: m.NitroWheelIcon,
            text: W.intl.string(W.t.Ipxkoq),
            locationState: $,
            onClick: () => {
                eb === u.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eA(z.L.TAKE_ACTION),
                    b.default.track(F.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: r,
                        has_premium: eo
                    }),
                    eI || eC ? ((0, I.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: z.L.TAKE_ACTION }), eC && (0, I.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: z.L.TAKE_ACTION })) : null != eP && eO(z.L.USER_DISMISS);
            },
            onMouseEnter: () => {
                es(!0);
            },
            onMouseLeave: () => {
                es(!1);
            },
            ...et,
            ...ec,
            className: t,
            avatarWithTextClassName: n,
            children: i
        });
        return em && ex
            ? (0, l.jsx)(k.CI, {
                  variant: k.j$.TRIAL_FOR_ALL,
                  trialOffer: ed,
                  children: eD
              })
            : eE
              ? (0, l.jsx)(k.CI, {
                    variant: k.j$.REFERRAL_PROGRAM,
                    children: eD
                })
              : eI && !eN
                ? (0, l.jsx)(k.A7, { children: () => eD })
                : eD;
    };
