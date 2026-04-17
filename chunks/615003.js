n.d(t, { P: () => en, o: () => ei }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    a = n(837381),
    r = n(877624),
    s = n(311907),
    o = n(554146),
    d = n(3026),
    c = n(397927),
    u = n(701363),
    A = n(366999),
    h = n(531260),
    _ = n(771781),
    m = n(826673),
    g = n(932001),
    p = n(337117),
    E = n(320118),
    I = n(976860),
    f = n(909536),
    C = n(287809),
    T = n(166403),
    N = n(954571),
    S = n(927578),
    x = n(683760),
    v = n(40185),
    b = n(851746),
    y = n(881489),
    O = n(871239),
    L = n(331233),
    R = n(113359),
    P = n(288349),
    D = n(920050),
    j = n(553081),
    M = n(131168),
    w = n(422936),
    U = n(234419),
    G = n(549996),
    k = n(881373),
    V = n(612669),
    B = n(603488),
    H = n(282077),
    F = n(385327),
    Y = n(727949),
    W = n(84483),
    K = n(953062),
    q = n(105390),
    z = n(513570),
    $ = n(969492),
    Q = n(622037),
    X = n(788868),
    Z = n(652215),
    J = n(49999),
    ee = n(985018);
let et = new Set([o.M.PREMIUM_WISHLIST_COACHMARK]),
    en = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            i = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            l = (0, U.V)(),
            a = (0, w.O)(),
            r = (0, v.cg)(),
            o = (0, z.H)(),
            d = (0, S.Of)(n, i),
            c = (0, s.bG)([x.A], () => x.A.getCreatedAtOverride()),
            u = t || null != l || null != a || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    ei = (e) => {
        let t,
            n,
            { selected: x, nitroTabButtonRef: ei, route: el, locationState: ea, showHoverGradient: er, ...es } = e,
            eo = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            ed = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            ec = (0, S.Of)(eo, ed),
            eu = (0, S.YE)(eo, X.PremiumTypes.TIER_2),
            eA = (0, a.rm)("nitro"),
            eh = (0, U.V)(),
            e_ = (0, w.O)(),
            em = (0, M.p)(),
            eg = (0, y.ds)(),
            ep = (0, v.cg)(),
            eE = (0, Y.NF)({ trialOffer: eh }),
            eI = (0, V.bf)(),
            ef = (0, z.H)(),
            { shouldShowBonusOrbsUX: eC, dismissOrbMultiplierTabTooltip: eT, orbMultiplier: eN } = (0, p.p)(),
            eS = (0, Y.Tp)(),
            ex = (0, s.bG)([b.A], () => b.A.getReminderStateId()),
            ev = (0, F.c7)(),
            { programReward: eb, isEligible: ey } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eO, orbsRewardAmount: eL } = (0, W.uX)("NitroTabButton"),
            eR = (0, R.Q)({ location: "nitro_tab_popover" }),
            eP = (0, L.I)({ location: "nitro_tab_popover" }),
            eD = !(0, S.TW)(eo),
            ej = eD && ey,
            eM = eb?.last_granted_reward,
            ew = eb?.last_granted_reward_amount,
            eU = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eG = eu && ey && null != eM && null != ew && !eU,
            ek = eu && ey && !eG && null != eb,
            eV = null != em && null != ed && ed.status === Z.Dmq.CANCELED,
            eB = (0, f.Gh)("NitroTabButton"),
            { functionalityEnabled: eH } = (0, k.YS)({ location: "NitroTabButton" }),
            eF = (0, O.l)({ location: "NitroTabButton" }),
            eY = eH && eF && eu,
            eW = eH && eF && eD,
            {
                fractionalState: eK,
                startsAt: eq,
                endsAt: ez,
                currentEntitlementEndsAt: e$,
            } = (0, h.A)({ forceFetch: !0 }),
            [eQ, eX] = (0, g.Wl)(eK !== X.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eq.valueOf(),
                cooldownDurationMs: 0,
            }),
            eZ = eh?.trial_id === X.Dw,
            eJ = [],
            e0 = [];
        (0, _.Tc)() &&
            (ev && eJ.push(o.M.RECURRING_3P_PROMOTION_POPOVER), ep && eJ.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [e1, e7] = (0, g.kn)(eJ, void 0, !0);
        eV && e0.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eI && (eR || eP ? e0.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : e0.push(o.M.PREMIUM_GROUP_POPOVER)),
            ej && e0.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ek && e0.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eY && e0.push(o.M.L_3PP_NITRO_TOOLTIP),
            eW && e0.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eB && e0.push(o.M.PREMIUM_WISHLIST_COACHMARK);
        let [e6, e9] = (0, g.kn)(e0, void 0, !0),
            e5 = (0, G.c)(r.C.PREMIUM_TAB),
            e3 = (0, G.c)(r.C.PREMIUM_TAB_TOOLTIP),
            e2 = (0, G.c)(r.C.PREMIUM_TAB_POPOVER),
            [e4, e8] = (0, g.Cc)(
                null != e5 && "premiumTab" === e5.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e5?.promotionId ?? "",
                void 0,
                !0,
            ),
            [te, tt] = (0, g.Cc)(
                null != e2 && "premiumTabPopover" === e2.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e2?.promotionId ?? "",
                void 0,
                !0,
            ),
            [tn, ti] = (0, g.Cc)(eG ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eM ?? "", void 0, !0),
            tl =
                null != e3 &&
                "premiumTabTooltip" === e3.properties.properties.oneofKind &&
                e4 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            ta = eY && e6 === o.M.L_3PP_NITRO_TOOLTIP,
            tr = eW && e6 === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (l.useEffect(() => {
                !0 === x &&
                    (null != e1 && e7(J.i.AUTO_DISMISS),
                    null == e6 || et.has(e6) || e9(J.i.AUTO_DISMISS),
                    null != e4 && e8(J.i.AUTO_DISMISS),
                    null != tn && ti(J.i.AUTO_DISMISS),
                    null != te && tt(J.i.AUTO_DISMISS),
                    eC && eT(J.i.AUTO_DISMISS));
            }, [e7, x, e1, e9, e6, e4, e8, tn, ti, te, tt, eC, eT]),
            !en({ selected: x }))
        )
            return null;
        let ts = () => {
            eQ === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eX(J.i.TAKE_ACTION),
                N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ec }),
                null != e1 && e7(J.i.USER_DISMISS),
                null != e4 && e8(J.i.USER_DISMISS),
                (e6 === o.M.PREMIUM_GROUP_POPOVER || e6 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e9(J.i.USER_DISMISS),
                e6 === o.M.L_3PP_NITRO_TOOLTIP && e9(J.i.USER_DISMISS),
                e6 === o.M.L_3PP_NON_NITRO_POPOVER && e9(J.i.USER_DISMISS),
                eC && eT(J.i.USER_DISMISS);
        };
        eK === X.xc.NONE ||
            eg ||
            ((n = 7),
            (t = (0, i.jsx)(P.A, {
                className: "",
                startsAt: eq,
                endsAt: ez,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let to = e6 === o.M.PREMIUM_GROUP_POPOVER || e6 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            td = eI && to;
        if (eS)
            (t = (0, i.jsx)(c.Exy, { type: { text: ee.intl.string(ee.t.RDE0Sc) }, variant: "expressive" })),
                (ts = () => {
                    N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ec }), (0, Y.ne)(ex);
                }),
                (n = 6);
        else if (td) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e5 && "premiumTab" === e5.properties.properties.oneofKind)
            (t = (0, i.jsx)(H.A, {
                componentId: e5.id,
                badgeCopy: e5.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e5.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e5?.promotionId ?? "").isDismissed,
            })),
                (n = 9),
                (er = e5.properties.properties.premiumTab.showHoverGradient);
        else if (ep) (t = (0, i.jsx)(B.A, {})), (n = 0);
        else if (eE) {
            let e = (0, Y.ZR)();
            (t = (0, i.jsx)(q.MA, {
                isTabSelected: x,
                badgeCopy: ee.intl.string(ee.t.OS9KPu),
                offerExpiresAt: !0 === e ? eh?.expires_at : null,
            })),
                (n = 4);
        } else
            e1 === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (ts = () => {
                      N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ec }),
                          e7(J.i.USER_DISMISS);
                  }))
                : eg
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: ee.intl.string(ee.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != ef
                    ? ((t = (0, i.jsx)(Q.A, { copy: ef, showStars: !1 })), (n = 1))
                    : null != e_
                      ? ((t = (0, i.jsx)(q.fY, { userDiscount: e_, isTabSelected: x, includesAmountOff: !1 })), (n = 3))
                      : null == eh || eZ
                        ? eV
                            ? ((t = (0, i.jsx)(K.A, { isSelected: x, discountOffer: em })), (n = 8))
                            : (ej && e6 === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (ek && e6 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eG && tn === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : ta
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : tr
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eB && e6 === o.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eC && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(q.Ag, { trialOffer: eh, isTabSelected: x })), (n = 4));
        let tc = $.L.NONE;
        te === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (tc = $.L.MARKETING_MOMENT_POPOVER)
            : eV && e6 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (tc = $.L.CHURN_DISCOUNT)
              : td && !eP
                ? (tc = $.L.PREMIUM_GROUP)
                : td && eP
                  ? ((tc = $.L.PREMIUM_GROUP_TOOLTIP), (er = !0))
                  : ej && e6 === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (tc = $.L.ORBS_UPSELL)
                    : ek && e6 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (tc = $.L.ORBS_INTRO)
                      : eG && tn === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (tc = $.L.ORBS_DROP)
                        : tl
                          ? (tc = $.L.TOOLTIP)
                          : ta
                            ? (tc = $.L.L_PREMIUM_SUB_TOOLTIP)
                            : tr
                              ? (tc = $.L.L_UPSELL)
                              : eg || eh?.trial_id === X.Tt
                                ? (tc = $.L.REVERSE_TRIAL)
                                : eC && (tc = $.L.ORBS_MULTIPLIER);
        let tu = (0, i.jsx)(u.z9, {
            listItemRef: ei,
            selected: x,
            route: el,
            icon: c.tvc,
            showHoverGradient: er ?? !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: eu ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog) }),
            locationState: ea,
            onClick: () => {
                if (ta) {
                    let e = new URLSearchParams({ [j.WU]: D.LOGITECH_3PP_CARD_ID }).toString();
                    (0, I.pX)(el.includes("?") ? `${el}&${e}` : `${el}?${e}`);
                }
                ts();
            },
            ...es,
            ...eA,
            children: t,
        });
        return (0, i.jsx)($.H, {
            popoverType: tc,
            targetElementRef: ei,
            churnDiscountOffer: em,
            premiumSubscription: ed,
            receivesUpdatedUpsellPopover: eO,
            orbsRewardAmount: eL,
            orbMultiplier: eN,
            lastGrantedRewardAmount: ew,
            dismissCoachMark: e9,
            dismissOrbsDropPopover: ti,
            dismissMarketingPopover: tt,
            fpCurrentEntitlementEndsAt: e$,
            trialOffer: eh,
            children: tu,
        });
    };
