n.d(t, { P: () => ee, o: () => et }), n(321073), n(323874), n(14289), n(35956);
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
    O = n(113359),
    L = n(288349),
    R = n(920050),
    P = n(553081),
    D = n(131168),
    j = n(422936),
    M = n(234419),
    w = n(549996),
    U = n(881373),
    G = n(612669),
    k = n(603488),
    V = n(282077),
    B = n(385327),
    H = n(727949),
    F = n(84483),
    Y = n(953062),
    W = n(105390),
    K = n(513570),
    q = n(969492),
    z = n(622037),
    $ = n(788868),
    X = n(652215),
    Q = n(49999),
    Z = n(985018);
let J = new Set([o.M.PREMIUM_WISHLIST_COACHMARK]),
    ee = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            i = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            a = (0, M.V)(),
            l = (0, j.O)(),
            r = (0, v.cg)(),
            o = (0, K.H)(),
            d = (0, S.Of)(n, i),
            c = (0, s.bG)([x.A], () => x.A.getCreatedAtOverride()),
            u = t || null != a || null != l || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    et = (e) => {
        let t,
            n,
            { selected: x, nitroTabButtonRef: et, route: en, locationState: ei, ...ea } = e,
            el = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            er = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            es = (0, S.Of)(el, er),
            eo = (0, S.YE)(el, $.PremiumTypes.TIER_2),
            ed = (0, l.rm)("nitro"),
            ec = (0, M.V)(),
            eu = (0, j.O)(),
            eA = (0, D.p)(),
            eh = (0, y.ds)(),
            e_ = (0, v.cg)(),
            em = (0, H.NF)({ trialOffer: ec }),
            eg = (0, G.bf)(),
            ep = (0, K.H)(),
            { shouldShowBonusOrbsUX: eE, dismissOrbMultiplierTabTooltip: eI, orbMultiplier: ef } = (0, p.p)(),
            eC = (0, H.Tp)(),
            eT = (0, s.bG)([b.A], () => b.A.getReminderStateId()),
            eN = (0, B.c7)(),
            { programReward: eS, isEligible: ex } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: ev, orbsRewardAmount: eb } = (0, F.uX)("NitroTabButton"),
            ey = (0, O.QG)({ location: "nitro_tab_popover" }),
            eO = ey !== O.xb.CONTROL,
            eL = ey === O.xb.ANNOUNCEMENT_MODAL,
            eR = !(0, S.TW)(el),
            eP = eR && ex,
            eD = eS?.last_granted_reward,
            ej = eS?.last_granted_reward_amount,
            eM = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ew = eo && ex && null != eD && null != ej && !eM,
            eU = eo && ex && !ew && null != eS,
            eG = null != eA && null != er && er.status === X.Dmq.CANCELED,
            ek = (0, f.Gh)("NitroTabButton"),
            { marketingEnabled: eV } = (0, U.YS)({ location: "NitroTabButton" }),
            eB = eV && eo,
            eH = eV && eR,
            {
                fractionalState: eF,
                startsAt: eY,
                endsAt: eW,
                currentEntitlementEndsAt: eK,
            } = (0, h.A)({ forceFetch: !0 }),
            [eq, ez] = (0, g.Wl)(eF !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eY.valueOf(),
                cooldownDurationMs: 0,
            }),
            e$ = ec?.trial_id === $.Dw,
            eX = [],
            eQ = [];
        (0, _.Tc)() &&
            (eN && eX.push(o.M.RECURRING_3P_PROMOTION_POPOVER), e_ && eX.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eZ, eJ] = (0, g.kn)(eX, void 0, !0);
        eG && eQ.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eg && (eO ? eQ.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eQ.push(o.M.PREMIUM_GROUP_POPOVER)),
            eP && eQ.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eU && eQ.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eB && eQ.push(o.M.L_3PP_NITRO_TOOLTIP),
            eH && eQ.push(o.M.L_3PP_NON_NITRO_POPOVER),
            ek && eQ.push(o.M.PREMIUM_WISHLIST_COACHMARK);
        let [e0, e1] = (0, g.kn)(eQ, void 0, !0),
            e7 = (0, w.c)(r.C.PREMIUM_TAB),
            e9 = (0, w.c)(r.C.PREMIUM_TAB_TOOLTIP),
            e6 = (0, w.c)(r.C.PREMIUM_TAB_POPOVER),
            [e5, e3] = (0, g.Cc)(
                null != e7 && "premiumTab" === e7.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e7?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e2, e8] = (0, g.Cc)(
                null != e6 && "premiumTabPopover" === e6.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e6?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e4, te] = (0, g.Cc)(ew ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eD ?? "", void 0, !0),
            tt =
                null != e9 &&
                "premiumTabTooltip" === e9.properties.properties.oneofKind &&
                e5 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            tn = eB && e0 === o.M.L_3PP_NITRO_TOOLTIP,
            ti = eH && e0 === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === x &&
                    (null != eZ && eJ(Q.i.AUTO_DISMISS),
                    null == e0 || J.has(e0) || e1(Q.i.AUTO_DISMISS),
                    null != e5 && e3(Q.i.AUTO_DISMISS),
                    null != e4 && te(Q.i.AUTO_DISMISS),
                    null != e2 && e8(Q.i.AUTO_DISMISS),
                    eE && eI(Q.i.AUTO_DISMISS));
            }, [eJ, x, eZ, e1, e0, e5, e3, e4, te, e2, e8, eE, eI]),
            !ee({ selected: x }))
        )
            return null;
        let ta = () => {
            eq === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ez(Q.i.TAKE_ACTION),
                N.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: es }),
                null != eZ && eJ(Q.i.USER_DISMISS),
                null != e5 && e3(Q.i.USER_DISMISS),
                (e0 === o.M.PREMIUM_GROUP_POPOVER || e0 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e1(Q.i.USER_DISMISS),
                e0 === o.M.L_3PP_NITRO_TOOLTIP && e1(Q.i.USER_DISMISS),
                e0 === o.M.L_3PP_NON_NITRO_POPOVER && e1(Q.i.USER_DISMISS),
                eE && eI(Q.i.USER_DISMISS);
        };
        eF === $.xc.NONE ||
            eh ||
            ((n = 7),
            (t = (0, i.jsx)(L.A, {
                className: "",
                startsAt: eY,
                endsAt: eW,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let tl = e0 === o.M.PREMIUM_GROUP_POPOVER || e0 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            tr = eg && tl;
        if (tr) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e7 && "premiumTab" === e7.properties.properties.oneofKind)
            (t = (0, i.jsx)(V.A, {
                componentId: e7.id,
                badgeCopy: e7.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e7.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e7?.promotionId ?? "").isDismissed,
            })),
                (n = 9);
        else if (e_) (t = (0, i.jsx)(k.A, {})), (n = 0);
        else if (em) {
            let e = (0, H.ZR)();
            (t = (0, i.jsx)(W.MA, {
                isTabSelected: x,
                badgeCopy: Z.intl.string(Z.t.OS9KPu),
                offerExpiresAt: !0 === e ? ec?.expires_at : null,
            })),
                (n = 4);
        } else
            eZ === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (ta = () => {
                      N.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: es }),
                          eJ(Q.i.USER_DISMISS);
                  }))
                : eh
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != ep
                    ? ((t = (0, i.jsx)(z.A, { copy: ep, showStars: !1 })), (n = 1))
                    : null != eu
                      ? ((t = (0, i.jsx)(W.fY, { userDiscount: eu, isTabSelected: x, includesAmountOff: !1 })), (n = 3))
                      : null == ec || e$
                        ? eG
                            ? ((t = (0, i.jsx)(Y.A, { isSelected: x, discountOffer: eA })), (n = 8))
                            : (eP && e0 === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eU && e0 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (ew && e4 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : tn
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : ti
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : ek && e0 === o.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eE && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(W.Ag, { trialOffer: ec, isTabSelected: x })), (n = 4));
        eC &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.RDE0Sc) }, variant: "expressive" })),
            (ta = () => {
                N.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: es }), (0, H.ne)(eT);
            }),
            (n = 6));
        let ts = q.L.NONE;
        e2 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (ts = q.L.MARKETING_MOMENT_POPOVER)
            : eG && e0 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (ts = q.L.CHURN_DISCOUNT)
              : tr && !eL
                ? (ts = q.L.PREMIUM_GROUP)
                : tr && eL
                  ? (ts = q.L.PREMIUM_GROUP_TOOLTIP)
                  : eP && e0 === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (ts = q.L.ORBS_UPSELL)
                    : eU && e0 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (ts = q.L.ORBS_INTRO)
                      : ew && e4 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (ts = q.L.ORBS_DROP)
                        : tt
                          ? (ts = q.L.TOOLTIP)
                          : tn
                            ? (ts = q.L.L_PREMIUM_SUB_TOOLTIP)
                            : ti
                              ? (ts = q.L.L_UPSELL)
                              : eh || ec?.trial_id === $.Tt
                                ? (ts = q.L.REVERSE_TRIAL)
                                : eE && (ts = q.L.ORBS_MULTIPLIER);
        let to = (0, i.jsx)(u.z9, {
            listItemRef: et,
            selected: x,
            route: en,
            icon: c.tvc,
            showHoverGradient: !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: eo ? Z.intl.string(Z.t["4gwVVn"]) : Z.intl.string(Z.t.Ipxkog) }),
            locationState: ei,
            onClick: () => {
                if (tn) {
                    let e = new URLSearchParams({ [P.W]: R.LOGITECH_3PP_CARD_ID }).toString();
                    (0, I.pX)(en.includes("?") ? `${en}&${e}` : `${en}?${e}`);
                }
                ta();
            },
            ...ea,
            ...ed,
            children: t,
        });
        return (0, i.jsx)(q.H, {
            popoverType: ts,
            targetElementRef: et,
            churnDiscountOffer: eA,
            premiumSubscription: er,
            receivesUpdatedUpsellPopover: ev,
            orbsRewardAmount: eb,
            orbMultiplier: ef,
            lastGrantedRewardAmount: ej,
            dismissCoachMark: e1,
            dismissOrbsDropPopover: te,
            dismissMarketingPopover: e8,
            fpCurrentEntitlementEndsAt: eK,
            trialOffer: ec,
            children: to,
        });
    };
