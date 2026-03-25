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
    b = n(131168),
    y = n(422936),
    O = n(234419),
    L = n(549996),
    R = n(612669),
    P = n(603488),
    D = n(282077),
    M = n(385327),
    j = n(727949),
    w = n(84483),
    U = n(953062),
    G = n(105390),
    k = n(156393),
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
            l = (0, y.O)(),
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
            ea = (0, y.O)(),
            el = (0, b.p)(),
            er = (0, S.d)(),
            es = (0, T.cg)(),
            eo = (0, j.NF)({ trialOffer: ei }),
            ed = (0, R.bf)(),
            ec = (0, V.H)(),
            eu = (0, j.Tp)(),
            eA = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            eh = (0, M.c7)(),
            { programReward: e_, isEligible: em } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eg, orbsRewardAmount: ep } = (0, w.uX)("NitroTabButton"),
            eE = (0, x.QG)({ location: "nitro_tab_popover" }),
            eI = eE !== x.xb.CONTROL,
            ef = eE === x.xb.ANNOUNCEMENT_MODAL,
            eC = !(0, f.TW)(Z) && em,
            eT = e_?.last_granted_reward,
            eN = e_?.last_granted_reward_amount,
            eS = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ex = et && em && null != eT && null != eN && !eS,
            ev = et && em && !ex && null != e_,
            eb = null != el && null != J && J.status === Y.Dmq.CANCELED,
            { fractionalState: ey, startsAt: eO, endsAt: eL } = (0, h.A)({ forceFetch: !0 }),
            [eR, eP] = (0, m.Wl)(ey !== F.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eO.valueOf(),
                cooldownDurationMs: 0,
            }),
            eD = ei?.trial_id === F.Dw,
            eM = [],
            ej = [];
        (0, _.Tc)() &&
            (eh && eM.push(o.M.RECURRING_3P_PROMOTION_POPOVER), es && eM.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [ew, eU] = (0, m.kn)(eM, void 0, !0);
        eb && ej.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ed && (eI ? ej.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : ej.push(o.M.PREMIUM_GROUP_POPOVER)),
            eC && ej.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ev && ej.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eG, ek] = (0, m.kn)(ej, void 0, !0),
            eV = (0, L.c)(r.C.PREMIUM_TAB),
            eB = (0, L.c)(r.C.PREMIUM_TAB_TOOLTIP),
            eH = (0, L.c)(r.C.PREMIUM_TAB_POPOVER),
            [eF, eY] = (0, m.Cc)(
                null != eV && "premiumTab" === eV.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eV?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eW, eK] = (0, m.Cc)(
                null != eH && "premiumTabPopover" === eH.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                eH?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eq, ez] = (0, m.Cc)(ex ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eT ?? "", void 0, !0),
            e$ =
                null != eB &&
                "premiumTabTooltip" === eB.properties.properties.oneofKind &&
                eF === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (a.useEffect(() => {
                !0 === C &&
                    (null != ew && eU(W.i.AUTO_DISMISS),
                    null != eG && ek(W.i.AUTO_DISMISS),
                    null != eF && eY(W.i.AUTO_DISMISS),
                    null != eq && ez(W.i.AUTO_DISMISS),
                    null != eW && eK(W.i.AUTO_DISMISS));
            }, [eU, C, ew, ek, eG, eF, eY, eq, ez, eW, eK]),
            !q({ selected: C }))
        )
            return null;
        let eQ = () => {
            eR === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eP(W.i.TAKE_ACTION),
                I.default.track(Y.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ee }),
                null != ew && eU(W.i.USER_DISMISS),
                null != eF && eY(W.i.USER_DISMISS),
                (eG === o.M.PREMIUM_GROUP_POPOVER || eG === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    ek(W.i.USER_DISMISS);
        };
        ey === F.xc.NONE ||
            er ||
            ((n = 7),
            (t = (0, i.jsx)(v.A, {
                className: "",
                startsAt: eO,
                endsAt: eL,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eX = eG === o.M.PREMIUM_GROUP_POPOVER || eG === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            eZ = ed && eX;
        if (eZ) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != eV && "premiumTab" === eV.properties.properties.oneofKind)
            (t = (0, i.jsx)(D.A, {
                componentId: eV.id,
                badgeCopy: eV.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eV.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eF !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (n = 9);
        else if (es) (t = (0, i.jsx)(P.A, {})), (n = 0);
        else if (eo) {
            let e = (0, j.ZR)();
            (t = (0, i.jsx)(G.MA, {
                isTabSelected: C,
                badgeCopy: K.intl.string(K.t.OS9KPu),
                offerExpiresAt: !0 === e ? ei?.expires_at : null,
            })),
                (n = 4);
        } else
            ew === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (eQ = () => {
                      I.default.track(Y.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ee }),
                          eU(W.i.USER_DISMISS);
                  }))
                : er
                  ? ((t = (0, i.jsx)(k.d, { expiresAt: eL })), (n = 4))
                  : null != ec
                    ? ((t = (0, i.jsx)(H.A, { copy: ec, showStars: !1 })), (n = 1))
                    : null != ea
                      ? ((t = (0, i.jsx)(G.fY, { userDiscount: ea, isTabSelected: C, includesAmountOff: !1 })), (n = 3))
                      : null == ei || eD
                        ? eb
                            ? ((t = (0, i.jsx)(U.A, { isSelected: C, discountOffer: el })), (n = 8))
                            : (eC && eG === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (ev && eG === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : ex &&
                                eq === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                        : ((t = (0, i.jsx)(G.Ag, { trialOffer: ei, isTabSelected: C })), (n = 4));
        eu &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: K.intl.string(K.t.RDE0Sc) }, variant: "expressive" })),
            (eQ = () => {
                I.default.track(Y.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ee }), (0, j.ne)(eA);
            }),
            (n = 6));
        let eJ = (0, i.jsx)(u.z9, {
                listItemRef: z,
                selected: C,
                route: $,
                icon: c.tvc,
                text: (0, i.jsx)(d.A, { children: et ? K.intl.string(K.t["4gwVVn"]) : K.intl.string(K.t.Ipxkog) }),
                locationState: Q,
                onClick: eQ,
                ...X,
                ...en,
                children: t,
            }),
            e0 = B.L.NONE;
        return (
            eW === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                ? (e0 = B.L.MARKETING_MOMENT_POPOVER)
                : eb && eG === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
                  ? (e0 = B.L.CHURN_DISCOUNT)
                  : eZ && !ef
                    ? (e0 = B.L.PREMIUM_GROUP)
                    : eZ && ef
                      ? (e0 = B.L.PREMIUM_GROUP_TOOLTIP)
                      : eC && eG === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                        ? (e0 = B.L.ORBS_UPSELL)
                        : ev && eG === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                          ? (e0 = B.L.ORBS_INTRO)
                          : ex && eq === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                            ? (e0 = B.L.ORBS_DROP)
                            : e$ && (e0 = B.L.TOOLTIP),
            (0, i.jsx)(B.H, {
                popoverType: e0,
                targetElementRef: z,
                churnDiscountOffer: el,
                premiumSubscription: J,
                receivesUpdatedUpsellPopover: eg,
                orbsRewardAmount: ep,
                lastGrantedRewardAmount: eN,
                dismissCoachMark: ek,
                dismissOrbsDropPopover: ez,
                dismissMarketingPopover: eK,
                children: eJ,
            })
        );
    };
