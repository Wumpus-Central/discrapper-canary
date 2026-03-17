n.d(t, { P: () => q, o: () => z }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(837381),
    a = n(877624),
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
    x = n(288349),
    v = n(131168),
    y = n(422936),
    b = n(234419),
    O = n(549996),
    L = n(612669),
    R = n(603488),
    P = n(282077),
    D = n(385327),
    j = n(727949),
    M = n(84483),
    w = n(953062),
    U = n(105390),
    G = n(156393),
    k = n(513570),
    V = n(969492),
    B = n(622037),
    H = n(788868),
    F = n(652215),
    Y = n(49999),
    W = n(985018);
let q = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            r = (0, b.V)(),
            l = (0, y.O)(),
            a = (0, T.cg)(),
            o = (0, k.H)(),
            d = (0, f.Of)(n, i),
            c = (0, s.bG)([C.A], () => C.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    z = (e) => {
        let t,
            n,
            { selected: C, nitroTabButtonRef: z, route: K, locationState: $, ...Q } = e,
            X = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            Z = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            J = (0, f.Of)(X, Z),
            ee = (0, f.YE)(X, H.PremiumTypes.TIER_2),
            et = (0, l.rm)("nitro"),
            en = (0, b.V)(),
            ei = (0, y.O)(),
            er = (0, v.p)(),
            el = (0, S.d)(),
            ea = (0, T.cg)(),
            es = (0, j.NF)({ trialOffer: en }),
            eo = (0, L.bf)(),
            ed = (0, k.H)(),
            ec = (0, j.Tp)(),
            eu = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            eA = (0, D.c7)(),
            { programReward: eh, isEligible: e_ } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: em, orbsRewardAmount: eg } = (0, M.uX)("NitroTabButton"),
            ep = !(0, f.TW)(X) && e_,
            eE = eh?.last_granted_reward,
            eI = eh?.last_granted_reward_amount,
            ef = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eC = ee && e_ && null != eE && null != eI && !ef,
            eT = ee && e_ && !eC && null != eh,
            eN = null != er && null != Z && Z.status === F.Dmq.CANCELED,
            { fractionalState: eS, startsAt: ex, endsAt: ev } = (0, h.A)({ forceFetch: !0 }),
            [ey, eb] = (0, m.Wl)(eS !== H.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ex.valueOf(),
                cooldownDurationMs: 0,
            }),
            eO = en?.trial_id === H.Dw,
            eL = [],
            eR = [];
        (0, _.Tc)() &&
            (eA && eL.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            ea && eL.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            el && eL.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eP, eD] = (0, m.kn)(eL, void 0, !0);
        eN && eR.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eo && eR.push(o.M.PREMIUM_GROUP_POPOVER),
            ep && eR.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eT && eR.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [ej, eM] = (0, m.kn)(eR, void 0, !0),
            ew = (0, O.c)(a.C.PREMIUM_TAB),
            eU = (0, O.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [eG, ek] = (0, m.Cc)(
                null != ew && "premiumTab" === ew.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                ew?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eV, eB] = (0, m.Cc)(eC ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eE ?? "", void 0, !0),
            eH =
                null != eU &&
                "premiumTabTooltip" === eU.properties.properties.oneofKind &&
                eG === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === C && null != eP && eD(Y.i.AUTO_DISMISS),
                    !0 === C && null != ej && eM(Y.i.AUTO_DISMISS),
                    !0 === C && null != eG && ek(Y.i.AUTO_DISMISS),
                    !0 === C && null != eV && eB(Y.i.AUTO_DISMISS);
            }, [eD, C, eP, eM, ej, eG, ek, eV, eB]),
            !q({ selected: C }))
        )
            return null;
        let eF = () => {
            ey === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eb(Y.i.TAKE_ACTION),
                I.default.track(F.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: J }),
                null != eP && eD(Y.i.USER_DISMISS),
                null != eG && ek(Y.i.USER_DISMISS),
                ej === o.M.PREMIUM_GROUP_POPOVER && eM(Y.i.USER_DISMISS);
        };
        eS === H.xc.NONE ||
            el ||
            ((n = 7),
            (t = (0, i.jsx)(x.A, {
                className: "",
                startsAt: ex,
                endsAt: ev,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eY = eo && ej === o.M.PREMIUM_GROUP_POPOVER;
        if (eY) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != ew && "premiumTab" === ew.properties.properties.oneofKind)
            (t = (0, i.jsx)(P.A, {
                componentId: ew.id,
                badgeCopy: ew.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: ew.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eG !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (n = 9);
        else if (ea) (t = (0, i.jsx)(R.A, {})), (n = 0);
        else if (es) {
            let e = (0, j.ZR)();
            (t = (0, i.jsx)(U.MA, {
                isTabSelected: C,
                badgeCopy: W.intl.string(W.t.OS9KPu),
                offerExpiresAt: !0 === e ? en?.expires_at : null,
            })),
                (n = 4);
        } else
            eP === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (eF = () => {
                      I.default.track(F.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: J }),
                          eD(Y.i.USER_DISMISS);
                  }))
                : el
                  ? ((t = (0, i.jsx)(G.d, { expiresAt: ev })), (n = 4))
                  : null != ed
                    ? ((t = (0, i.jsx)(B.A, { copy: ed, showStars: !1 })), (n = 1))
                    : null != ei
                      ? ((t = (0, i.jsx)(U.fY, { userDiscount: ei, isTabSelected: C, includesAmountOff: !1 })), (n = 3))
                      : null == en || eO
                        ? eN
                            ? ((t = (0, i.jsx)(w.A, { isSelected: C, discountOffer: er })), (n = 8))
                            : (ep && ej === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eT && ej === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : eC &&
                                eV === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                        : ((t = (0, i.jsx)(U.Ag, { trialOffer: en, isTabSelected: C })), (n = 4));
        ec &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: W.intl.string(W.t.RDE0Sc) }, variant: "expressive" })),
            (eF = () => {
                I.default.track(F.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: J }), (0, j.ne)(eu);
            }),
            (n = 6));
        let eW = (0, i.jsx)(u.z9, {
                listItemRef: z,
                selected: C,
                route: K,
                icon: c.tvc,
                text: (0, i.jsx)(d.A, { children: ee ? W.intl.string(W.t["4gwVVn"]) : W.intl.string(W.t.Ipxkog) }),
                locationState: $,
                onClick: eF,
                ...Q,
                ...et,
                children: t,
            }),
            eq = V.L.NONE;
        return (
            eN && ej === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
                ? (eq = V.L.CHURN_DISCOUNT)
                : eY
                  ? (eq = V.L.PREMIUM_GROUP)
                  : ep && ej === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (eq = V.L.ORBS_UPSELL)
                    : eT && ej === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (eq = V.L.ORBS_INTRO)
                      : eC && eV === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (eq = V.L.ORBS_DROP)
                        : eH && (eq = V.L.TOOLTIP),
            (0, i.jsx)(V.H, {
                popoverType: eq,
                targetElementRef: z,
                churnDiscountOffer: er,
                premiumSubscription: Z,
                receivesUpdatedUpsellPopover: em,
                orbsRewardAmount: eg,
                lastGrantedRewardAmount: eI,
                dismissCoachMark: eM,
                dismissOrbsDropPopover: eB,
                children: eW,
            })
        );
    };
