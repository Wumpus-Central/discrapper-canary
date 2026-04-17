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
            eE = (0, v.cg)(),
            eI = (0, Y.NF)({ trialOffer: e_ }),
            ef = (0, V.bf)(),
            eC = (0, z.H)(),
            { shouldShowBonusOrbsUX: eT, dismissOrbMultiplierTabTooltip: eN, orbMultiplier: eS } = (0, p.p)(),
            ex = (0, Y.Tp)(),
            ev = (0, s.bG)([b.A], () => b.A.getReminderStateId()),
            eb = (0, F.c7)(),
            { programReward: ey, isEligible: eO } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eL, orbsRewardAmount: eR } = (0, W.uX)("NitroTabButton"),
            eP = (0, R.Q)({ location: "nitro_tab_popover" }),
            eD = (0, L.I)({ location: "nitro_tab_popover" }),
            ej = !(0, S.TW)(ed),
            eM = ej && eO,
            ew = ey?.last_granted_reward,
            eU = ey?.last_granted_reward_amount,
            eG = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ek = eA && eO && null != ew && null != eU && !eG,
            eV = eA && eO && !ek && null != ey,
            eB = null != eg && null != ec && ec.status === Z.Dmq.CANCELED,
            eH = (0, f.Gh)("NitroTabButton"),
            { functionalityEnabled: eF } = (0, k.YS)({ location: "NitroTabButton" }),
            eY = (0, O.l)({ location: "NitroTabButton" }),
            eW = eF && eY && eA,
            eK = eF && eY && ej,
            {
                fractionalState: eq,
                startsAt: ez,
                endsAt: e$,
                currentEntitlementEndsAt: eQ,
            } = (0, h.A)({ forceFetch: !0 }),
            [eX, eZ] = (0, g.Wl)(eq !== X.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ez.valueOf(),
                cooldownDurationMs: 0,
            }),
            eJ = e_?.trial_id === X.Dw,
            e0 = [],
            e1 = [];
        (0, _.Tc)() &&
            (eb && e0.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eE && e0.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [e6, e7] = (0, g.kn)(e0, void 0, !0);
        eB && e1.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ef && (eP || eD ? e1.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : e1.push(o.M.PREMIUM_GROUP_POPOVER)),
            eM && e1.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eV && e1.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eW && e1.push(o.M.L_3PP_NITRO_TOOLTIP),
            eK && e1.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eH && e1.push(o.M.PREMIUM_WISHLIST_COACHMARK);
        let [e9, e5] = (0, g.kn)(e1, void 0, !0),
            e3 = (0, G.c)(r.C.PREMIUM_TAB),
            e2 = (0, G.c)(r.C.PREMIUM_TAB_TOOLTIP),
            e4 = (0, G.c)(r.C.PREMIUM_TAB_POPOVER),
            [e8, te] = (0, g.Cc)(
                null != e3 && "premiumTab" === e3.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e3?.promotionId ?? "",
                void 0,
                !0,
            ),
            [tt, tn] = (0, g.Cc)(
                null != e4 && "premiumTabPopover" === e4.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e4?.promotionId ?? "",
                void 0,
                !0,
            ),
            [ti, tl] = (0, g.Cc)(ek ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ew ?? "", void 0, !0),
            ta =
                null != e2 &&
                "premiumTabTooltip" === e2.properties.properties.oneofKind &&
                e8 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            tr = eW && e9 === o.M.L_3PP_NITRO_TOOLTIP,
            ts = eK && e9 === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (l.useEffect(() => {
                !0 === ei &&
                    (null != e6 && e7(J.i.AUTO_DISMISS),
                    null == e9 || et.has(e9) || e5(J.i.AUTO_DISMISS),
                    null != e8 && te(J.i.AUTO_DISMISS),
                    null != ti && tl(J.i.AUTO_DISMISS),
                    null != tt && tn(J.i.AUTO_DISMISS),
                    eT && eN(J.i.AUTO_DISMISS));
            }, [e7, ei, e6, e5, e9, e8, te, ti, tl, tt, tn, eT, eN]),
            !en({ selected: ei }))
        )
            return null;
        let to = () => {
            eX === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eZ(J.i.TAKE_ACTION),
                N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eu }),
                null != e6 && e7(J.i.USER_DISMISS),
                null != e8 && te(J.i.USER_DISMISS),
                (e9 === o.M.PREMIUM_GROUP_POPOVER || e9 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e5(J.i.USER_DISMISS),
                e9 === o.M.L_3PP_NITRO_TOOLTIP && e5(J.i.USER_DISMISS),
                e9 === o.M.L_3PP_NON_NITRO_POPOVER && e5(J.i.USER_DISMISS),
                eT && eN(J.i.USER_DISMISS);
        };
        eq === X.xc.NONE ||
            ep ||
            ((n = 7),
            (t = (0, i.jsx)(P.A, {
                className: "",
                startsAt: ez,
                endsAt: e$,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let td = e9 === o.M.PREMIUM_GROUP_POPOVER || e9 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            tc = ef && td;
        if (ex)
            (t = (0, i.jsx)(c.Exy, { type: { text: ee.intl.string(ee.t.RDE0Sc) }, variant: "expressive" })),
                (to = () => {
                    N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eu }), (0, Y.ne)(ev);
                }),
                (n = 6);
        else if (tc) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e3 && "premiumTab" === e3.properties.properties.oneofKind) {
            let e = (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e3?.promotionId ?? "").isDismissed;
            (t = (0, i.jsx)(H.A, {
                componentId: e3.id,
                badgeCopy: e3.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e3.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e,
            })),
                (n = 9),
                (es = e3.properties.properties.premiumTab.showHoverGradient),
                e || (x = e3.properties.properties.premiumTab.deeplinkSection);
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
                  (to = () => {
                      N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eu }),
                          e7(J.i.USER_DISMISS);
                  }))
                : ep
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: ee.intl.string(ee.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != eC
                    ? ((t = (0, i.jsx)(Q.A, { copy: eC, showStars: !1 })), (n = 1))
                    : null != em
                      ? ((t = (0, i.jsx)(q.fY, { userDiscount: em, isTabSelected: ei, includesAmountOff: !1 })),
                        (n = 3))
                      : null == e_ || eJ
                        ? eB
                            ? ((t = (0, i.jsx)(K.A, { isSelected: ei, discountOffer: eg })), (n = 8))
                            : (eM && e9 === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eV && e9 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (ek && ti === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : tr
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : ts
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eH && e9 === o.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eT && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(q.Ag, { trialOffer: e_, isTabSelected: ei })), (n = 4));
        let tu = $.L.NONE;
        tt === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (tu = $.L.MARKETING_MOMENT_POPOVER)
            : eB && e9 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (tu = $.L.CHURN_DISCOUNT)
              : tc && !eD
                ? (tu = $.L.PREMIUM_GROUP)
                : tc && eD
                  ? ((tu = $.L.PREMIUM_GROUP_TOOLTIP), (es = !0))
                  : eM && e9 === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (tu = $.L.ORBS_UPSELL)
                    : eV && e9 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (tu = $.L.ORBS_INTRO)
                      : ek && ti === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (tu = $.L.ORBS_DROP)
                        : ta
                          ? (tu = $.L.TOOLTIP)
                          : tr
                            ? (tu = $.L.L_PREMIUM_SUB_TOOLTIP)
                            : ts
                              ? (tu = $.L.L_UPSELL)
                              : ep || e_?.trial_id === X.Tt
                                ? (tu = $.L.REVERSE_TRIAL)
                                : eT && (tu = $.L.ORBS_MULTIPLIER);
        let tA = (0, i.jsx)(u.z9, {
            listItemRef: el,
            selected: ei,
            route: ea,
            icon: c.tvc,
            showHoverGradient: es ?? !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: eA ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog) }),
            locationState: er,
            onClick: () => {
                if (tr) {
                    let e = new URL(ea, window.location.origin);
                    e.searchParams.set(j.WU, D.LOGITECH_3PP_CARD_ID),
                        (0, I.pX)(`${e.pathname}?${e.searchParams.toString()}`);
                } else if (null != x && "" !== x) {
                    let e = new URL(ea, window.location.origin);
                    e.searchParams.set(j.x6, x), (0, I.pX)(`${e.pathname}?${e.searchParams.toString()}`);
                }
                to();
            },
            ...eo,
            ...eh,
            children: t,
        });
        return (0, i.jsx)($.H, {
            popoverType: tu,
            targetElementRef: el,
            churnDiscountOffer: eg,
            premiumSubscription: ec,
            receivesUpdatedUpsellPopover: eL,
            orbsRewardAmount: eR,
            orbMultiplier: eS,
            lastGrantedRewardAmount: eU,
            dismissCoachMark: e5,
            dismissOrbsDropPopover: tl,
            dismissMarketingPopover: tn,
            fpCurrentEntitlementEndsAt: eQ,
            trialOffer: e_,
            children: tA,
        });
    };
