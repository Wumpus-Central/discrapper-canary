n.d(t, { P: () => et, o: () => en }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    a = n(64700),
    r = n(837381),
    l = n(877624),
    s = n(311907),
    o = n(554146),
    d = n(3026),
    c = n(397927),
    u = n(701363),
    A = n(366999),
    _ = n(531260),
    h = n(771781),
    m = n(826673),
    g = n(932001),
    p = n(337117),
    E = n(320118),
    I = n(976860),
    f = n(909536),
    C = n(287809),
    T = n(166403),
    S = n(954571),
    N = n(927578),
    x = n(683760),
    v = n(40185),
    b = n(851746),
    y = n(881489),
    O = n(331233),
    L = n(113359),
    R = n(288349),
    P = n(920050),
    D = n(553081),
    j = n(131168),
    M = n(422936),
    w = n(234419),
    U = n(549996),
    G = n(881373),
    k = n(612669),
    V = n(603488),
    B = n(282077),
    H = n(385327),
    F = n(727949),
    Y = n(84483),
    W = n(953062),
    K = n(105390),
    q = n(513570),
    z = n(969492),
    $ = n(622037),
    Q = n(788868),
    X = n(652215),
    Z = n(49999),
    J = n(985018);
let ee = new Set([o.M.PREMIUM_WISHLIST_COACHMARK]),
    et = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            i = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            a = (0, w.V)(),
            r = (0, M.O)(),
            l = (0, v.cg)(),
            o = (0, q.H)(),
            d = (0, N.Of)(n, i),
            c = (0, s.bG)([x.A], () => x.A.getCreatedAtOverride()),
            u = t || null != a || null != r || l || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    en = (e) => {
        let t,
            n,
            { selected: x, nitroTabButtonRef: en, route: ei, locationState: ea, ...er } = e,
            el = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            es = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            eo = (0, N.Of)(el, es),
            ed = (0, N.YE)(el, Q.PremiumTypes.TIER_2),
            ec = (0, r.rm)("nitro"),
            eu = (0, w.V)(),
            eA = (0, M.O)(),
            e_ = (0, j.p)(),
            eh = (0, y.ds)(),
            em = (0, v.cg)(),
            eg = (0, F.NF)({ trialOffer: eu }),
            ep = (0, k.bf)(),
            eE = (0, q.H)(),
            { shouldShowBonusOrbsUX: eI, dismissOrbMultiplierTabTooltip: ef, orbMultiplier: eC } = (0, p.p)(),
            eT = (0, F.Tp)(),
            eS = (0, s.bG)([b.A], () => b.A.getReminderStateId()),
            eN = (0, H.c7)(),
            { programReward: ex, isEligible: ev } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eb, orbsRewardAmount: ey } = (0, Y.uX)("NitroTabButton"),
            eO = (0, L.Q)({ location: "nitro_tab_popover" }),
            eL = (0, O.I)({ location: "nitro_tab_popover" }),
            eR = !(0, N.TW)(el),
            eP = eR && ev,
            eD = ex?.last_granted_reward,
            ej = ex?.last_granted_reward_amount,
            eM = (0, h.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ew = ed && ev && null != eD && null != ej && !eM,
            eU = ed && ev && !ew && null != ex,
            eG = null != e_ && null != es && es.status === X.Dmq.CANCELED,
            ek = (0, f.Gh)("NitroTabButton"),
            { marketingEnabled: eV } = (0, G.YS)({ location: "NitroTabButton" }),
            eB = eV && ed,
            eH = eV && eR,
            {
                fractionalState: eF,
                startsAt: eY,
                endsAt: eW,
                currentEntitlementEndsAt: eK,
            } = (0, _.A)({ forceFetch: !0 }),
            [eq, ez] = (0, g.Wl)(eF !== Q.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eY.valueOf(),
                cooldownDurationMs: 0,
            }),
            e$ = eu?.trial_id === Q.Dw,
            eQ = [],
            eX = [];
        (0, h.Tc)() &&
            (eN && eQ.push(o.M.RECURRING_3P_PROMOTION_POPOVER), em && eQ.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eZ, eJ] = (0, g.kn)(eQ, void 0, !0);
        eG && eX.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ep && (eO || eL ? eX.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eX.push(o.M.PREMIUM_GROUP_POPOVER)),
            eP && eX.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eU && eX.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eB && eX.push(o.M.L_3PP_NITRO_TOOLTIP),
            eH && eX.push(o.M.L_3PP_NON_NITRO_POPOVER),
            ek && eX.push(o.M.PREMIUM_WISHLIST_COACHMARK);
        let [e0, e1] = (0, g.kn)(eX, void 0, !0),
            e7 = (0, U.c)(l.C.PREMIUM_TAB),
            e6 = (0, U.c)(l.C.PREMIUM_TAB_TOOLTIP),
            e9 = (0, U.c)(l.C.PREMIUM_TAB_POPOVER),
            [e5, e2] = (0, g.Cc)(
                null != e7 && "premiumTab" === e7.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e7?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e3, e4] = (0, g.Cc)(
                null != e9 && "premiumTabPopover" === e9.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e9?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e8, te] = (0, g.Cc)(ew ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eD ?? "", void 0, !0),
            tt =
                null != e6 &&
                "premiumTabTooltip" === e6.properties.properties.oneofKind &&
                e5 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            tn = eB && e0 === o.M.L_3PP_NITRO_TOOLTIP,
            ti = eH && e0 === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === x &&
                    (null != eZ && eJ(Z.i.AUTO_DISMISS),
                    null == e0 || ee.has(e0) || e1(Z.i.AUTO_DISMISS),
                    null != e5 && e2(Z.i.AUTO_DISMISS),
                    null != e8 && te(Z.i.AUTO_DISMISS),
                    null != e3 && e4(Z.i.AUTO_DISMISS),
                    eI && ef(Z.i.AUTO_DISMISS));
            }, [eJ, x, eZ, e1, e0, e5, e2, e8, te, e3, e4, eI, ef]),
            !et({ selected: x }))
        )
            return null;
        let ta = () => {
            eq === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ez(Z.i.TAKE_ACTION),
                S.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eo }),
                null != eZ && eJ(Z.i.USER_DISMISS),
                null != e5 && e2(Z.i.USER_DISMISS),
                (e0 === o.M.PREMIUM_GROUP_POPOVER || e0 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e1(Z.i.USER_DISMISS),
                e0 === o.M.L_3PP_NITRO_TOOLTIP && e1(Z.i.USER_DISMISS),
                e0 === o.M.L_3PP_NON_NITRO_POPOVER && e1(Z.i.USER_DISMISS),
                eI && ef(Z.i.USER_DISMISS);
        };
        eF === Q.xc.NONE ||
            eh ||
            ((n = 7),
            (t = (0, i.jsx)(R.A, {
                className: "",
                startsAt: eY,
                endsAt: eW,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let tr = e0 === o.M.PREMIUM_GROUP_POPOVER || e0 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            tl = ep && tr;
        if (tl) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e7 && "premiumTab" === e7.properties.properties.oneofKind)
            (t = (0, i.jsx)(B.A, {
                componentId: e7.id,
                badgeCopy: e7.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e7.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e7?.promotionId ?? "").isDismissed,
            })),
                (n = 9);
        else if (em) (t = (0, i.jsx)(V.A, {})), (n = 0);
        else if (eg) {
            let e = (0, F.ZR)();
            (t = (0, i.jsx)(K.MA, {
                isTabSelected: x,
                badgeCopy: J.intl.string(J.t.OS9KPu),
                offerExpiresAt: !0 === e ? eu?.expires_at : null,
            })),
                (n = 4);
        } else
            eZ === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (ta = () => {
                      S.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eo }),
                          eJ(Z.i.USER_DISMISS);
                  }))
                : eh
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: J.intl.string(J.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != eE
                    ? ((t = (0, i.jsx)($.A, { copy: eE, showStars: !1 })), (n = 1))
                    : null != eA
                      ? ((t = (0, i.jsx)(K.fY, { userDiscount: eA, isTabSelected: x, includesAmountOff: !1 })), (n = 3))
                      : null == eu || e$
                        ? eG
                            ? ((t = (0, i.jsx)(W.A, { isSelected: x, discountOffer: e_ })), (n = 8))
                            : (eP && e0 === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eU && e0 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (ew && e8 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : tn
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : ti
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : ek && e0 === o.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eI && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(K.Ag, { trialOffer: eu, isTabSelected: x })), (n = 4));
        eT &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: J.intl.string(J.t.RDE0Sc) }, variant: "expressive" })),
            (ta = () => {
                S.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: eo }), (0, F.ne)(eS);
            }),
            (n = 6));
        let ts = z.L.NONE;
        e3 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (ts = z.L.MARKETING_MOMENT_POPOVER)
            : eG && e0 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (ts = z.L.CHURN_DISCOUNT)
              : tl && !eL
                ? (ts = z.L.PREMIUM_GROUP)
                : tl && eL
                  ? (ts = z.L.PREMIUM_GROUP_TOOLTIP)
                  : eP && e0 === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (ts = z.L.ORBS_UPSELL)
                    : eU && e0 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (ts = z.L.ORBS_INTRO)
                      : ew && e8 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (ts = z.L.ORBS_DROP)
                        : tt
                          ? (ts = z.L.TOOLTIP)
                          : tn
                            ? (ts = z.L.L_PREMIUM_SUB_TOOLTIP)
                            : ti
                              ? (ts = z.L.L_UPSELL)
                              : eh || eu?.trial_id === Q.Tt
                                ? (ts = z.L.REVERSE_TRIAL)
                                : eI && (ts = z.L.ORBS_MULTIPLIER);
        let to = (0, i.jsx)(u.z9, {
            listItemRef: en,
            selected: x,
            route: ei,
            icon: c.tvc,
            showHoverGradient: !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: ed ? J.intl.string(J.t["4gwVVn"]) : J.intl.string(J.t.Ipxkog) }),
            locationState: ea,
            onClick: () => {
                if (tn) {
                    let e = new URLSearchParams({ [D.W]: P.LOGITECH_3PP_CARD_ID }).toString();
                    (0, I.pX)(ei.includes("?") ? `${ei}&${e}` : `${ei}?${e}`);
                }
                ta();
            },
            ...er,
            ...ec,
            children: t,
        });
        return (0, i.jsx)(z.H, {
            popoverType: ts,
            targetElementRef: en,
            churnDiscountOffer: e_,
            premiumSubscription: es,
            receivesUpdatedUpsellPopover: eb,
            orbsRewardAmount: ey,
            orbMultiplier: eC,
            lastGrantedRewardAmount: ej,
            dismissCoachMark: e1,
            dismissOrbsDropPopover: te,
            dismissMarketingPopover: e4,
            fpCurrentEntitlementEndsAt: eK,
            trialOffer: eu,
            children: to,
        });
    };
