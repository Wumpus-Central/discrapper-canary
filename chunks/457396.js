n.d(t, {
    g: () => B,
    i: () => V
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(91192),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    d = n(515753),
    c = n(927359),
    u = n(975298),
    h = n(605236),
    m = n(243778),
    p = n(819640),
    g = n(594174),
    _ = n(351402),
    f = n(78839),
    N = n(626135),
    E = n(74538),
    I = n(502087),
    C = n(695349),
    v = n(650032),
    T = n(767870),
    S = n(104494),
    A = n(639119),
    Z = n(655525),
    b = n(314684),
    x = n(52188),
    L = n(346497),
    y = n(924540),
    O = n(474486),
    P = n(119850),
    R = n(701910),
    j = n(938736),
    D = n(227140),
    w = n(474936),
    M = n(981631),
    k = n(921944),
    U = n(388032),
    G = n(949831);
let W = 'NitroTabButton',
    V = (e) => {
        let { selected: t } = e,
            n = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            i = (0, a.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
            r = (0, A.N)(),
            l = (0, S.Ng)(),
            s = (0, L.Vi)(),
            o = (0, j.vx)(W),
            d = (0, j.wG)(W),
            c = (0, b.$_)(),
            u = (0, P.V)(),
            h = (0, E.Qo)(n, i),
            m = (0, a.e7)([I.Z], () => I.Z.getCreatedAtOverride()),
            p = t || null != r || null != l || s || o || d || null != c || null != u || h,
            _ = null != m ? m : null == n ? void 0 : n.createdAt;
        return p || (null != n && null != _ && Date.now() - _.getTime() > 1209600000);
    },
    B = (e) => {
        let t,
            n,
            I,
            B,
            { selected: H, route: F, locationState: z, ...Y } = e,
            K = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
            q = (0, a.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
            X = (0, E.Qo)(K, q),
            Q = (0, l.JA)('nitro'),
            J = (0, A.N)(),
            $ = (0, S.Ng)(),
            ee = (0, C.W)(),
            et = (0, a.e7)([_.Z], () => _.Z.isLocalizedPromoEnabled) && null == J,
            en = (0, L.Vi)(),
            ei = (0, b.$_)(),
            er = (0, P.V)(),
            el = (0, j.Kn)(W),
            ea = (0, j.vx)(W),
            es = (0, j.wG)(W),
            eo = (0, a.e7)([p.Z], () => p.Z.hasLayers()),
            { fractionalState: ed, startsAt: ec, endsAt: eu } = (0, u.Z)({ forceFetch: !0 }),
            [eh, em] = (0, m.bf)(ed !== w.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ec.valueOf(),
                cooldownDurationMs: 0
            }),
            { enabled: ep } = v._.useExperiment({ location: W }, { autoTrackExposure: !1 }),
            eg = ep && (null == J ? void 0 : J.trial_id) === w.a7,
            [e_, ef] = (0, m.US)(ee ? [s.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2] : [], void 0, !0);
        if (
            (r.useEffect(() => {
                !0 === H && e_ === s.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2 && ef(k.L.AUTO_DISMISS);
            }, [ef, e_, H]),
            !V({ selected: H }))
        )
            return null;
        ed === w.a$.NONE ||
            ee ||
            ((B = 9),
            (I = (0, i.jsx)(T.Z, {
                className: '',
                startsAt: ec,
                endsAt: eu,
                messageStyle: c.a.SHORT_TIME,
                upperCase: !0
            }))),
            ea
                ? ((t = G.referralIncentive), (B = 7))
                : es
                  ? ((I = (0, i.jsx)(R.Z, { copy: U.NW.string(U.t.jyYgZ2) })), (B = 8))
                  : en
                    ? ((I = (0, i.jsx)(Z.Z, {})), (B = 0))
                    : null != e_ && e_ === s.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2
                      ? ((I = (0, i.jsx)(D.Z, {
                            copy: U.NW.string(U.t.HwUCnp),
                            showStars: !1
                        })),
                        (B = 4))
                      : null != ei
                        ? ((I = (0, i.jsx)(D.Z, {
                              copy: ei,
                              showStars: !1
                          })),
                          (B = 1))
                        : null != er
                          ? ((I = (0, i.jsx)(D.Z, {
                                copy: er,
                                showStars: !1
                            })),
                            (B = 1))
                          : null != $
                            ? ((I = (0, i.jsx)(y.GN, {
                                  userDiscount: $,
                                  isTabSelected: H,
                                  includesAmountOff: !1
                              })),
                              (B = 3))
                            : null == J || eg
                              ? el
                                  ? ((I = (0, i.jsx)(O.lH, {
                                        isSelected: H,
                                        onSelect: () => (0, h.EW)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: k.L.TAKE_ACTION })
                                    })),
                                    (B = 6))
                                  : et && ((I = (0, i.jsx)(x.k, { entryPoint: x.U.PrivateMessages })), H || (t = G.localizeBadge), (B = 5))
                              : ((I = (0, i.jsx)(y.$H, {
                                    trialOffer: J,
                                    isTabSelected: H
                                })),
                                (B = 4));
        let eN = (0, i.jsx)(d.Qj, {
            selected: H,
            route: F,
            icon: o.SrA,
            text: U.NW.string(U.t.Ipxkoq),
            locationState: z,
            onClick: () => {
                eh === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && em(k.L.TAKE_ACTION),
                    N.default.track(M.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: B,
                        has_premium: X
                    }),
                    ea || es ? ((0, h.EW)(s.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: k.L.TAKE_ACTION }), es && (0, h.EW)(s.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: k.L.TAKE_ACTION })) : null != e_ && ef(k.L.USER_DISMISS);
            },
            ...Y,
            ...Q,
            className: t,
            avatarWithTextClassName: n,
            children: I
        });
        return el ? (0, i.jsx)(O.CI, { children: eN }) : ea && !eo ? (0, i.jsx)(O.A7, { children: () => eN }) : eN;
    };
