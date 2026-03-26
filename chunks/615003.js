n.d(t, { P: () => q, o: () => z }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(837381),
    r = n(877624),
    s = n(311907),
    o = n(554146),
    d = n(3026),
    c = n(397927),
    u = n(701363),
    A = n(366999),
    h = n(531260),
    _ = n(771781),
    m = n(932001),
    g = n(320118),
    p = n(287809),
    E = n(166403),
    I = n(954571),
    f = n(927578),
    C = n(683760),
    T = n(40185),
    N = n(851746),
    S = n(637073),
    x = n(113359),
    v = n(288349),
    y = n(131168),
    b = n(422936),
    O = n(234419),
    L = n(549996),
    R = n(881373),
    P = n(612669),
    D = n(603488),
    M = n(282077),
    j = n(385327),
    w = n(727949),
    U = n(84483),
    G = n(953062),
    k = n(105390),
    V = n(513570),
    B = n(969492),
    H = n(622037),
    F = n(788868),
    Y = n(652215),
    W = n(49999),
    K = n(985018);
let q = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            a = (0, O.V)(),
            l = (0, b.O)(),
            r = (0, T.cg)(),
            o = (0, V.H)(),
            d = (0, f.Of)(n, i),
            c = (0, s.bG)([C.A], () => C.A.getCreatedAtOverride()),
            u = t || null != a || null != l || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    z = (e) => {
        let t,
            n,
            { selected: C, nitroTabButtonRef: z, route: $, locationState: Q, ...X } = e,
            Z = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            J = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            ee = (0, f.Of)(Z, J),
            et = (0, f.YE)(Z, F.PremiumTypes.TIER_2),
            en = (0, l.rm)("nitro"),
            ei = (0, O.V)(),
            ea = (0, b.O)(),
            el = (0, y.p)(),
            er = (0, S.d)(),
            es = (0, T.cg)(),
            eo = (0, w.NF)({ trialOffer: ei }),
            ed = (0, P.bf)(),
            ec = (0, V.H)(),
            eu = (0, w.Tp)(),
            eA = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            eh = (0, j.c7)(),
            { programReward: e_, isEligible: em } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eg, orbsRewardAmount: ep } = (0, U.uX)("NitroTabButton"),
            eE = (0, x.QG)({ location: "nitro_tab_popover" }),
            eI = eE !== x.xb.CONTROL,
            ef = eE === x.xb.ANNOUNCEMENT_MODAL,
            eC = !(0, f.TW)(Z),
            eT = eC && em,
            eN = e_?.last_granted_reward,
            eS = e_?.last_granted_reward_amount,
            ex = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ev = et && em && null != eN && null != eS && !ex,
            ey = et && em && !ev && null != e_,
            eb = null != el && null != J && J.status === Y.Dmq.CANCELED,
            { marketingEnabled: eO } = (0, R.YS)({ location: "NitroTabButton" }),
            eL = eO && et,
            eR = eO && eC,
            { fractionalState: eP, startsAt: eD, endsAt: eM } = (0, h.A)({ forceFetch: !0 }),
            [ej, ew] = (0, m.Wl)(eP !== F.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eD.valueOf(),
                cooldownDurationMs: 0,
            }),
            eU = ei?.trial_id === F.Dw,
            eG = [],
            ek = [];
        (0, _.Tc)() &&
            (eh && eG.push(o.M.RECURRING_3P_PROMOTION_POPOVER), es && eG.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eV, eB] = (0, m.kn)(eG, void 0, !0);
        eb && ek.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ed && (eI ? ek.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : ek.push(o.M.PREMIUM_GROUP_POPOVER)),
            eT && ek.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ey && ek.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eL && ek.push(o.M.L_3PP_NITRO_TOOLTIP),
            eR && ek.push(o.M.L_3PP_NON_NITRO_POPOVER);
        let [eH, eF] = (0, m.kn)(ek, void 0, !0),
            eY = (0, L.c)(r.C.PREMIUM_TAB),
            eW = (0, L.c)(r.C.PREMIUM_TAB_TOOLTIP),
            eK = (0, L.c)(r.C.PREMIUM_TAB_POPOVER),
            [eq, ez] = (0, m.Cc)(
                null != eY && "premiumTab" === eY.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eY?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e$, eQ] = (0, m.Cc)(
                null != eK && "premiumTabPopover" === eK.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                eK?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eX, eZ] = (0, m.Cc)(ev ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eN ?? "", void 0, !0),
            eJ =
                null != eW &&
                "premiumTabTooltip" === eW.properties.properties.oneofKind &&
                eq === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            e0 = eL && eH === o.M.L_3PP_NITRO_TOOLTIP,
            e1 = eR && eH === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === C &&
                    (null != eV && eB(W.i.AUTO_DISMISS),
                    null != eH && eF(W.i.AUTO_DISMISS),
                    null != eq && ez(W.i.AUTO_DISMISS),
                    null != eX && eZ(W.i.AUTO_DISMISS),
                    null != e$ && eQ(W.i.AUTO_DISMISS));
            }, [eB, C, eV, eF, eH, eq, ez, eX, eZ, e$, eQ]),
            !q({ selected: C }))
        )
            return null;
        let e7 = () => {
            ej === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ew(W.i.TAKE_ACTION),
                I.default.track(Y.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ee }),
                null != eV && eB(W.i.USER_DISMISS),
                null != eq && ez(W.i.USER_DISMISS),
                (eH === o.M.PREMIUM_GROUP_POPOVER || eH === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    eF(W.i.USER_DISMISS),
                eH === o.M.L_3PP_NITRO_TOOLTIP && eF(W.i.USER_DISMISS),
                eH === o.M.L_3PP_NON_NITRO_POPOVER && eF(W.i.USER_DISMISS);
        };
        eP === F.xc.NONE ||
            er ||
            ((n = 7),
            (t = (0, i.jsx)(v.A, {
                className: "",
                startsAt: eD,
                endsAt: eM,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e6 = eH === o.M.PREMIUM_GROUP_POPOVER || eH === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            e9 = ed && e6;
        if (e9) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != eY && "premiumTab" === eY.properties.properties.oneofKind)
            (t = (0, i.jsx)(M.A, {
                componentId: eY.id,
                badgeCopy: eY.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eY.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eq !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (n = 9);
        else if (es) (t = (0, i.jsx)(D.A, {})), (n = 0);
        else if (eo) {
            let e = (0, w.ZR)();
            (t = (0, i.jsx)(k.MA, {
                isTabSelected: C,
                badgeCopy: K.intl.string(K.t.OS9KPu),
                offerExpiresAt: !0 === e ? ei?.expires_at : null,
            })),
                (n = 4);
        } else
            eV === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (e7 = () => {
                      I.default.track(Y.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ee }),
                          eB(W.i.USER_DISMISS);
                  }))
                : er
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: K.intl.string(K.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != ec
                    ? ((t = (0, i.jsx)(H.A, { copy: ec, showStars: !1 })), (n = 1))
                    : null != ea
                      ? ((t = (0, i.jsx)(k.fY, { userDiscount: ea, isTabSelected: C, includesAmountOff: !1 })), (n = 3))
                      : null == ei || eU
                        ? eb
                            ? ((t = (0, i.jsx)(G.A, { isSelected: C, discountOffer: el })), (n = 8))
                            : (eT && eH === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (ey && eH === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (ev && eX === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : e0
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : e1 && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                        : ((t = (0, i.jsx)(k.Ag, { trialOffer: ei, isTabSelected: C })), (n = 4));
        eu &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: K.intl.string(K.t.RDE0Sc) }, variant: "expressive" })),
            (e7 = () => {
                I.default.track(Y.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ee }), (0, w.ne)(eA);
            }),
            (n = 6));
        let e5 = (0, i.jsx)(u.z9, {
                listItemRef: z,
                selected: C,
                route: $,
                icon: c.tvc,
                text: (0, i.jsx)(d.A, { children: et ? K.intl.string(K.t["4gwVVn"]) : K.intl.string(K.t.Ipxkog) }),
                locationState: Q,
                onClick: e7,
                ...X,
                ...en,
                children: t,
            }),
            e2 = B.L.NONE;
        return (
            e$ === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                ? (e2 = B.L.MARKETING_MOMENT_POPOVER)
                : eb && eH === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
                  ? (e2 = B.L.CHURN_DISCOUNT)
                  : e9 && !ef
                    ? (e2 = B.L.PREMIUM_GROUP)
                    : e9 && ef
                      ? (e2 = B.L.PREMIUM_GROUP_TOOLTIP)
                      : eT && eH === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                        ? (e2 = B.L.ORBS_UPSELL)
                        : ey && eH === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                          ? (e2 = B.L.ORBS_INTRO)
                          : ev && eX === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                            ? (e2 = B.L.ORBS_DROP)
                            : eJ
                              ? (e2 = B.L.TOOLTIP)
                              : e0
                                ? (e2 = B.L.L_PREMIUM_SUB_TOOLTIP)
                                : e1
                                  ? (e2 = B.L.L_UPSELL)
                                  : er && (e2 = B.L.REVERSE_TRIAL),
            (0, i.jsx)(B.H, {
                popoverType: e2,
                targetElementRef: z,
                churnDiscountOffer: el,
                premiumSubscription: J,
                receivesUpdatedUpsellPopover: eg,
                orbsRewardAmount: ep,
                lastGrantedRewardAmount: eS,
                dismissCoachMark: eF,
                dismissOrbsDropPopover: eZ,
                dismissMarketingPopover: eQ,
                fpEndsAt: eM,
                children: e5,
            })
        );
    };
