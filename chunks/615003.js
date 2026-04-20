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
    b = n(40185),
    v = n(851746),
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
            r = (0, b.cg)(),
            [o] = (0, z.H)(),
            d = (0, S.Of)(n, i),
            c = (0, s.bG)([x.A], () => x.A.getCreatedAtOverride()),
            u = t || null != l || null != a || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    ei = (e) => {
        let t,
            n,
            x,
            { selected: ei, nitroTabButtonRef: el, route: ea, locationState: er, showHoverGradient: es, ...eo } = e,
            ed = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            ec = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            eu = (0, S.Of)(ed, ec),
            eA = (0, S.YE)(ed, X.PremiumTypes.TIER_2),
            eh = (0, a.rm)("nitro"),
            e_ = (0, U.V)(),
            em = (0, w.O)(),
            eg = (0, M.p)(),
            ep = (0, y.ds)(),
            eE = (0, b.cg)(),
            eI = (0, Y.NF)({ trialOffer: e_ }),
            ef = (0, V.bf)(),
            [eC, eT] = (0, z.H)(),
            { shouldShowBonusOrbsUX: eN, dismissOrbMultiplierTabTooltip: eS, orbMultiplier: ex } = (0, p.p)(),
            eb = (0, Y.Tp)(),
            ev = (0, s.bG)([v.A], () => v.A.getReminderStateId()),
            ey = (0, F.c7)(),
            { programReward: eO, isEligible: eL } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eR, orbsRewardAmount: eP } = (0, W.uX)("NitroTabButton"),
            eD = (0, R.Q)({ location: "nitro_tab_popover" }),
            ej = (0, L.I)({ location: "nitro_tab_popover" }),
            eM = !(0, S.TW)(ed),
            ew = eM && eL,
            eU = eO?.last_granted_reward,
            eG = eO?.last_granted_reward_amount,
            ek = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eV = eA && eL && null != eU && null != eG && !ek,
            eB = eA && eL && !eV && null != eO,
            eH = null != eg && null != ec && ec.status === Z.Dmq.CANCELED,
            eF = (0, f.Gh)("NitroTabButton"),
            { functionalityEnabled: eY } = (0, k.YS)({ location: "NitroTabButton" }),
            eW = (0, O.l)({ location: "NitroTabButton" }),
            eK = eY && eW && eA,
            eq = eY && eW && eM,
            {
                fractionalState: ez,
                startsAt: e$,
                endsAt: eQ,
                currentEntitlementEndsAt: eX,
            } = (0, h.A)({ forceFetch: !0 }),
            [eZ, eJ] = (0, g.Wl)(ez !== X.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: e$.valueOf(),
                cooldownDurationMs: 0,
            }),
            e0 = e_?.trial_id === X.Dw,
            e1 = [],
            e7 = [];
        (0, _.Tc)() &&
            (ey && e1.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eE && e1.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [e6, e9] = (0, g.kn)(e1, void 0, !0);
        eH && e7.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ef && (eD || ej ? e7.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : e7.push(o.M.PREMIUM_GROUP_POPOVER)),
            ew && e7.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eB && e7.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eK && e7.push(o.M.L_3PP_NITRO_TOOLTIP),
            eq && e7.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eF && e7.push(o.M.PREMIUM_WISHLIST_COACHMARK);
        let [e5, e3] = (0, g.kn)(e7, void 0, !0),
            e2 = (0, G.c)(r.C.PREMIUM_TAB),
            e4 = (0, G.c)(r.C.PREMIUM_TAB_TOOLTIP),
            e8 = (0, G.c)(r.C.PREMIUM_TAB_POPOVER),
            [te, tt] = (0, g.Cc)(
                null != e2 && "premiumTab" === e2.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e2?.promotionId ?? "",
                void 0,
                !0,
            ),
            [tn, ti] = (0, g.Cc)(
                null != e8 && "premiumTabPopover" === e8.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e8?.promotionId ?? "",
                void 0,
                !0,
            ),
            [tl, ta] = (0, g.Cc)(eV ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eU ?? "", void 0, !0),
            tr =
                null != e4 &&
                "premiumTabTooltip" === e4.properties.properties.oneofKind &&
                te === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            ts = eK && e5 === o.M.L_3PP_NITRO_TOOLTIP,
            to = eq && e5 === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (l.useEffect(() => {
                !0 === ei &&
                    (null != e6 && e9(J.i.AUTO_DISMISS),
                    null == e5 || et.has(e5) || e3(J.i.AUTO_DISMISS),
                    null != te && tt(J.i.AUTO_DISMISS),
                    null != tl && ta(J.i.AUTO_DISMISS),
                    null != tn && ti(J.i.AUTO_DISMISS),
                    eN && eS(J.i.AUTO_DISMISS),
                    null != eC && eT(J.i.AUTO_DISMISS));
            }, [e9, ei, e6, e3, e5, te, tt, tl, ta, tn, ti, eN, eS, eC, eT]),
            !en({ selected: ei }))
        )
            return null;
        let td = () => {
            eZ === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eJ(J.i.TAKE_ACTION),
                N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eu }),
                null != e6 && e9(J.i.USER_DISMISS),
                null != te && tt(J.i.USER_DISMISS),
                (e5 === o.M.PREMIUM_GROUP_POPOVER || e5 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e3(J.i.USER_DISMISS),
                e5 === o.M.L_3PP_NITRO_TOOLTIP && e3(J.i.USER_DISMISS),
                e5 === o.M.L_3PP_NON_NITRO_POPOVER && e3(J.i.USER_DISMISS),
                eN && eS(J.i.USER_DISMISS),
                null != eC && eT(J.i.USER_DISMISS);
        };
        ez === X.xc.NONE ||
            ep ||
            ((n = 7),
            (t = (0, i.jsx)(P.A, {
                className: "",
                startsAt: e$,
                endsAt: eQ,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let tc = e5 === o.M.PREMIUM_GROUP_POPOVER || e5 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            tu = ef && tc;
        if (eb)
            (t = (0, i.jsx)(c.Exy, { type: { text: ee.intl.string(ee.t.RDE0Sc) }, variant: "expressive" })),
                (td = () => {
                    N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eu }), (0, Y.ne)(ev);
                }),
                (n = 6);
        else if (tu) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e2 && "premiumTab" === e2.properties.properties.oneofKind) {
            let e = (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e2?.promotionId ?? "").isDismissed;
            (t = (0, i.jsx)(H.A, {
                componentId: e2.id,
                badgeCopy: e2.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e2.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e,
            })),
                (n = 9),
                (es = e2.properties.properties.premiumTab.showHoverGradient),
                e || (x = e2.properties.properties.premiumTab.deeplinkSection);
        } else if (eE) (t = (0, i.jsx)(B.A, {})), (n = 0);
        else if (eI) {
            let e = (0, Y.ZR)();
            (t = (0, i.jsx)(q.MA, {
                isTabSelected: ei,
                badgeCopy: ee.intl.string(ee.t.OS9KPu),
                offerExpiresAt: !0 === e ? e_?.expires_at : null,
            })),
                (n = 4);
        } else
            e6 === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (td = () => {
                      N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eu }),
                          e9(J.i.USER_DISMISS);
                  }))
                : ep
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: ee.intl.string(ee.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != eC
                    ? ((t = (0, i.jsx)(Q.A, { copy: eC, showStars: !1 })), (n = 1))
                    : null != em
                      ? ((t = (0, i.jsx)(q.fY, { userDiscount: em, isTabSelected: ei, includesAmountOff: !1 })),
                        (n = 3))
                      : null == e_ || e0
                        ? eH
                            ? ((t = (0, i.jsx)(K.A, { isSelected: ei, discountOffer: eg })), (n = 8))
                            : (ew && e5 === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eB && e5 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eV && tl === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : ts
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : to
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eF && e5 === o.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eN && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(q.Ag, { trialOffer: e_, isTabSelected: ei })), (n = 4));
        let tA = $.L.NONE;
        tn === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (tA = $.L.MARKETING_MOMENT_POPOVER)
            : eH && e5 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (tA = $.L.CHURN_DISCOUNT)
              : tu && !ej
                ? (tA = $.L.PREMIUM_GROUP)
                : tu && ej
                  ? ((tA = $.L.PREMIUM_GROUP_TOOLTIP), (es = !0))
                  : ew && e5 === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (tA = $.L.ORBS_UPSELL)
                    : eB && e5 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (tA = $.L.ORBS_INTRO)
                      : eV && tl === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (tA = $.L.ORBS_DROP)
                        : tr
                          ? (tA = $.L.TOOLTIP)
                          : ts
                            ? (tA = $.L.L_PREMIUM_SUB_TOOLTIP)
                            : to
                              ? (tA = $.L.L_UPSELL)
                              : ep || e_?.trial_id === X.Tt
                                ? (tA = $.L.REVERSE_TRIAL)
                                : eN && (tA = $.L.ORBS_MULTIPLIER);
        let th = (0, i.jsx)(u.z9, {
            listItemRef: el,
            selected: ei,
            route: ea,
            icon: c.tvc,
            showHoverGradient: es ?? !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: eA ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog) }),
            locationState: er,
            onClick: () => {
                if (ts) {
                    let e = new URL(ea, window.location.origin);
                    e.searchParams.set(j.WU, D.LOGITECH_3PP_CARD_ID),
                        (0, I.pX)(`${e.pathname}?${e.searchParams.toString()}`);
                } else if (null != x && "" !== x) {
                    let e = new URL(ea, window.location.origin);
                    e.searchParams.set(j.x6, x), (0, I.pX)(`${e.pathname}?${e.searchParams.toString()}`);
                }
                td();
            },
            ...eo,
            ...eh,
            children: t,
        });
        return (0, i.jsx)($.H, {
            popoverType: tA,
            targetElementRef: el,
            churnDiscountOffer: eg,
            premiumSubscription: ec,
            receivesUpdatedUpsellPopover: eR,
            orbsRewardAmount: eP,
            orbMultiplier: ex,
            lastGrantedRewardAmount: eG,
            dismissCoachMark: e3,
            dismissOrbsDropPopover: ta,
            dismissMarketingPopover: ti,
            fpCurrentEntitlementEndsAt: eX,
            trialOffer: e_,
            children: th,
        });
    };
