a.d(l, { P: () => et, o: () => es }), a(321073), a(323874), a(14289), a(35956);
var t = a(627968),
    s = a(64700),
    i = a(837381),
    n = a(877624),
    c = a(311907),
    h = a(554146),
    r = a(3026),
    o = a(508770),
    d = a(403581),
    v = a(701363),
    g = a(366999),
    p = a(531260),
    m = a(771781),
    f = a(826673),
    w = a(932001),
    x = a(337117),
    u = a(320118),
    A = a(976860),
    I = a(909536),
    M = a(287809),
    Z = a(166403),
    _ = a(954571),
    E = a(927578),
    j = a(683760),
    C = a(40185),
    T = a(851746),
    N = a(881489),
    R = a(871239),
    V = a(331233),
    y = a(113359),
    H = a(288349),
    O = a(920050),
    L = a(553081),
    B = a(131168),
    S = a(422936),
    F = a(234419),
    U = a(549996),
    P = a(881373),
    b = a(612669),
    D = a(603488),
    k = a(282077),
    J = a(385327),
    G = a(727949),
    W = a(84483),
    q = a(953062),
    z = a(105390),
    K = a(513570),
    X = a(969492),
    Q = a(622037),
    Y = a(788868),
    $ = a(652215),
    ee = a(49999),
    el = a(985018);
let ea = new Set([h.M.PREMIUM_WISHLIST_COACHMARK]),
    et = (e) => {
        let { selected: l } = e,
            a = (0, c.bG)([M.default], () => M.default.getCurrentUser()),
            t = (0, c.bG)([Z.A], () => Z.A.getPremiumTypeSubscription()),
            s = (0, F.V)(),
            i = (0, S.O)(),
            n = (0, C.cg)(),
            [h] = (0, K.H)(),
            r = (0, E.Of)(a, t),
            o = (0, c.bG)([j.A], () => j.A.getCreatedAtOverride()),
            d = l || null != s || null != i || n || null != h || r,
            v = null != o ? o : a?.createdAt;
        return d || (null != a && null != v && Date.now() - v.getTime() > 12096e5);
    },
    es = (e) => {
        let l,
            a,
            j,
            { selected: es, nitroTabButtonRef: ei, route: en, locationState: ec, showHoverGradient: eh, ...er } = e,
            eo = (0, c.bG)([M.default], () => M.default.getCurrentUser()),
            ed = (0, c.bG)([Z.A], () => Z.A.getPremiumTypeSubscription()),
            ev = (0, E.Of)(eo, ed),
            eg = (0, E.YE)(eo, Y.PremiumTypes.TIER_2),
            ep = (0, i.rm)("nitro"),
            em = (0, F.V)(),
            ef = (0, S.O)(),
            ew = (0, B.p)(),
            ex = (0, N.ds)(),
            eu = (0, C.cg)(),
            eA = (0, G.NF)({ trialOffer: em }),
            eI = (0, b.bf)(),
            [eM, eZ] = (0, K.H)(),
            { shouldShowBonusOrbsUX: e_, dismissOrbMultiplierTabTooltip: eE, orbMultiplier: ej } = (0, x.p)(),
            eC = (0, G.Tp)(),
            eT = (0, c.bG)([T.A], () => T.A.getReminderStateId()),
            eN = (0, J.c7)(),
            { programReward: eR, isEligible: eV } = (0, u.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: ey, orbsRewardAmount: eH } = (0, W.uX)("NitroTabButton"),
            eO = (0, y.Q)({ location: "nitro_tab_popover" }),
            eL = (0, V.I)({ location: "nitro_tab_popover" }),
            eB = !(0, E.TW)(eo),
            eS = eB && eV,
            eF = eR?.last_granted_reward,
            eU = eR?.last_granted_reward_amount,
            eP = (0, m.mB)(h.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eb = eg && eV && null != eF && null != eU && !eP,
            eD = eg && eV && !eb && null != eR,
            ek = null != ew && null != ed && ed.status === $.Dmq.CANCELED,
            eJ = (0, I.Gh)("NitroTabButton"),
            { functionalityEnabled: eG } = (0, P.YS)({ location: "NitroTabButton" }),
            eW = (0, R.l)({ location: "NitroTabButton" }),
            eq = eG && eW && eg,
            ez = eG && eW && eB,
            {
                fractionalState: eK,
                startsAt: eX,
                endsAt: eQ,
                currentEntitlementEndsAt: eY,
            } = (0, p.A)({ forceFetch: !0 }),
            [e$, e0] = (0, w.Wl)(eK !== Y.xc.NONE ? h.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eX.valueOf(),
                cooldownDurationMs: 0,
            }),
            e1 = em?.trial_id === Y.Dw,
            e2 = [],
            e3 = [];
        (0, m.Tc)() &&
            (eN && e2.push(h.M.RECURRING_3P_PROMOTION_POPOVER), eu && e2.push(h.M.BOGO_2025_NITRO_TAB_BADGE));
        let [e4, e5] = (0, w.kn)(e2, void 0, !0);
        ek && e3.push(h.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eI && (eO || eL ? e3.push(h.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : e3.push(h.M.PREMIUM_GROUP_POPOVER)),
            eS && e3.push(h.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eD && e3.push(h.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eq && e3.push(h.M.L_3PP_NITRO_TOOLTIP),
            ez && e3.push(h.M.L_3PP_NON_NITRO_POPOVER),
            eJ && e3.push(h.M.PREMIUM_WISHLIST_COACHMARK);
        let [e6, e7] = (0, w.kn)(e3, void 0, !0),
            e8 = (0, U.c)(n.C.PREMIUM_TAB),
            e9 = (0, U.c)(n.C.PREMIUM_TAB_TOOLTIP),
            le = (0, U.c)(n.C.PREMIUM_TAB_POPOVER),
            [ll, la] = (0, w.Cc)(
                null != e8 && "premiumTab" === e8.properties.properties.oneofKind
                    ? h.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e8?.promotionId ?? "",
                void 0,
                !0,
            ),
            [lt, ls] = (0, w.Cc)(
                null != le && "premiumTabPopover" === le.properties.properties.oneofKind
                    ? h.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                le?.promotionId ?? "",
                void 0,
                !0,
            ),
            [li, ln] = (0, w.Cc)(eb ? h.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eF ?? "", void 0, !0),
            lc =
                null != e9 &&
                "premiumTabTooltip" === e9.properties.properties.oneofKind &&
                ll === h.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            lh = eq && e6 === h.M.L_3PP_NITRO_TOOLTIP,
            lr = ez && e6 === h.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (s.useEffect(() => {
                !0 === es &&
                    (null != e4 && e5(ee.i.AUTO_DISMISS),
                    null == e6 || ea.has(e6) || e7(ee.i.AUTO_DISMISS),
                    null != ll && la(ee.i.AUTO_DISMISS),
                    null != li && ln(ee.i.AUTO_DISMISS),
                    null != lt && ls(ee.i.AUTO_DISMISS),
                    e_ && eE(ee.i.AUTO_DISMISS),
                    null != eM && eZ(ee.i.AUTO_DISMISS));
            }, [e5, es, e4, e7, e6, ll, la, li, ln, lt, ls, e_, eE, eM, eZ]),
            !et({ selected: es }))
        )
            return null;
        let lo = () => {
            e$ === h.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && e0(ee.i.TAKE_ACTION),
                _.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: a, has_premium: ev }),
                null != e4 && e5(ee.i.USER_DISMISS),
                null != ll && la(ee.i.USER_DISMISS),
                (e6 === h.M.PREMIUM_GROUP_POPOVER || e6 === h.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e7(ee.i.USER_DISMISS),
                e6 === h.M.L_3PP_NITRO_TOOLTIP && e7(ee.i.USER_DISMISS),
                e6 === h.M.L_3PP_NON_NITRO_POPOVER && e7(ee.i.USER_DISMISS),
                e_ && eE(ee.i.USER_DISMISS),
                null != eM && eZ(ee.i.USER_DISMISS);
        };
        eK === Y.xc.NONE ||
            ex ||
            ((a = 7),
            (l = (0, t.jsx)(H.A, {
                className: "",
                startsAt: eX,
                endsAt: eQ,
                messageStyle: g.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let ld = e6 === h.M.PREMIUM_GROUP_POPOVER || e6 === h.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            lv = eI && ld;
        if (eC)
            (l = (0, t.jsx)(o.E, { type: { text: el.intl.string(el.t.RDE0Sc) }, variant: "expressive" })),
                (lo = () => {
                    _.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: a, has_premium: ev }), (0, G.ne)(eT);
                }),
                (a = 6);
        else if (lv) (l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })), (a = 10);
        else if (null != e8 && "premiumTab" === e8.properties.properties.oneofKind) {
            let e = (0, f.u$)(h.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e8?.promotionId ?? "").isDismissed;
            (l = (0, t.jsx)(k.A, {
                componentId: e8.id,
                badgeCopy: e8.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e8.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e,
            })),
                (a = 9),
                (eh = e8.properties.properties.premiumTab.showHoverGradient),
                e || (j = e8.properties.properties.premiumTab.deeplinkSection);
        } else if (eu) (l = (0, t.jsx)(D.A, {})), (a = 0);
        else if (eA) {
            let e = (0, G.ZR)();
            (l = (0, t.jsx)(z.MA, {
                isTabSelected: es,
                badgeCopy: el.intl.string(el.t.OS9KPu),
                offerExpiresAt: !0 === e ? em?.expires_at : null,
            })),
                (a = 4);
        } else
            e4 === h.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })),
                  (a = 4),
                  (lo = () => {
                      _.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: a, has_premium: ev }),
                          e5(ee.i.USER_DISMISS);
                  }))
                : ex
                  ? ((l = (0, t.jsx)(o.E, { type: { text: el.intl.string(el.t.raP9dM) }, variant: "expressive" })),
                    (a = 4))
                  : null != eM
                    ? ((l = (0, t.jsx)(Q.A, { copy: eM, showStars: !1 })), (a = 1))
                    : null != ef
                      ? ((l = (0, t.jsx)(z.fY, { userDiscount: ef, isTabSelected: es, includesAmountOff: !1 })),
                        (a = 3))
                      : null == em || e1
                        ? ek
                            ? ((l = (0, t.jsx)(q.A, { isSelected: es, discountOffer: ew })), (a = 8))
                            : (eS && e6 === h.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eD && e6 === h.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eb && li === h.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })), (a = 2))
                              : lh
                                ? ((l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })), (a = 11))
                                : lr
                                  ? ((l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })), (a = 12))
                                  : eJ && e6 === h.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })), (a = 13))
                                    : e_ && ((l = (0, t.jsx)(o.E, { type: "new", variant: "expressive" })), (a = 14))
                        : ((l = (0, t.jsx)(z.Ag, { trialOffer: em, isTabSelected: es })), (a = 4));
        let lg = X.L.NONE;
        lt === h.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (lg = X.L.MARKETING_MOMENT_POPOVER)
            : ek && e6 === h.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === a
              ? (lg = X.L.CHURN_DISCOUNT)
              : lv && !eL
                ? (lg = X.L.PREMIUM_GROUP)
                : lv && eL
                  ? ((lg = X.L.PREMIUM_GROUP_TOOLTIP), (eh = !0))
                  : eS && e6 === h.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (lg = X.L.ORBS_UPSELL)
                    : eD && e6 === h.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (lg = X.L.ORBS_INTRO)
                      : eb && li === h.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (lg = X.L.ORBS_DROP)
                        : lc
                          ? (lg = X.L.TOOLTIP)
                          : lh
                            ? (lg = X.L.L_PREMIUM_SUB_TOOLTIP)
                            : lr
                              ? (lg = X.L.L_UPSELL)
                              : ex || em?.trial_id === Y.Tt
                                ? (lg = X.L.REVERSE_TRIAL)
                                : e_ && (lg = X.L.ORBS_MULTIPLIER);
        let lp = (0, t.jsx)(v.z9, {
            listItemRef: ei,
            selected: es,
            route: en,
            icon: d.t,
            showHoverGradient: eh ?? !1,
            nitroHoverGradient: !0,
            text: (0, t.jsx)(r.A, { children: eg ? el.intl.string(el.t["4gwVVn"]) : el.intl.string(el.t.Ipxkog) }),
            locationState: ec,
            onClick: () => {
                if (lh) {
                    let e = new URL(en, window.location.origin);
                    e.searchParams.set(L.WU, O.LOGITECH_3PP_CARD_ID),
                        (0, A.pX)(`${e.pathname}?${e.searchParams.toString()}`);
                } else if (null != j && "" !== j) {
                    let e = new URL(en, window.location.origin);
                    e.searchParams.set(L.x6, j), (0, A.pX)(`${e.pathname}?${e.searchParams.toString()}`);
                }
                lo();
            },
            ...er,
            ...ep,
            children: l,
        });
        return (0, t.jsx)(X.H, {
            popoverType: lg,
            targetElementRef: ei,
            churnDiscountOffer: ew,
            premiumSubscription: ed,
            receivesUpdatedUpsellPopover: ey,
            orbsRewardAmount: eH,
            orbMultiplier: ej,
            lastGrantedRewardAmount: eU,
            dismissCoachMark: e7,
            dismissOrbsDropPopover: ln,
            dismissMarketingPopover: ls,
            fpCurrentEntitlementEndsAt: eY,
            trialOffer: em,
            children: lp,
        });
    };
