n.d(t, { P: () => X, o: () => Z }), n(321073), n(323874), n(14289), n(35956);
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
    p = n(320118),
    g = n(976860),
    E = n(909536),
    I = n(287809),
    f = n(166403),
    C = n(954571),
    T = n(927578),
    N = n(683760),
    S = n(40185),
    x = n(851746),
    v = n(881489),
    b = n(113359),
    y = n(288349),
    O = n(920050),
    L = n(553081),
    R = n(131168),
    P = n(422936),
    D = n(234419),
    M = n(549996),
    j = n(881373),
    w = n(612669),
    U = n(603488),
    G = n(282077),
    k = n(385327),
    V = n(727949),
    B = n(84483),
    H = n(953062),
    F = n(105390),
    Y = n(513570),
    W = n(969492),
    K = n(622037),
    q = n(788868),
    z = n(652215),
    $ = n(49999),
    Q = n(985018);
let X = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
            i = (0, s.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            a = (0, D.V)(),
            l = (0, P.O)(),
            r = (0, S.cg)(),
            o = (0, Y.H)(),
            d = (0, T.Of)(n, i),
            c = (0, s.bG)([N.A], () => N.A.getCreatedAtOverride()),
            u = t || null != a || null != l || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    Z = (e) => {
        let t,
            n,
            { selected: N, nitroTabButtonRef: Z, route: J, locationState: ee, ...et } = e,
            en = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
            ei = (0, s.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            ea = (0, T.Of)(en, ei),
            el = (0, T.YE)(en, q.PremiumTypes.TIER_2),
            er = (0, l.rm)("nitro"),
            es = (0, D.V)(),
            eo = (0, P.O)(),
            ed = (0, R.p)(),
            ec = (0, v.ds)(),
            eu = (0, S.cg)(),
            eA = (0, V.NF)({ trialOffer: es }),
            eh = (0, w.bf)(),
            e_ = (0, Y.H)(),
            em = (0, V.Tp)(),
            ep = (0, s.bG)([x.A], () => x.A.getReminderStateId()),
            eg = (0, k.c7)(),
            { programReward: eE, isEligible: eI } = (0, p.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: ef, orbsRewardAmount: eC } = (0, B.uX)("NitroTabButton"),
            eT = (0, b.QG)({ location: "nitro_tab_popover" }),
            eN = eT !== b.xb.CONTROL,
            eS = eT === b.xb.ANNOUNCEMENT_MODAL,
            ex = !(0, T.TW)(en),
            ev = ex && eI,
            eb = eE?.last_granted_reward,
            ey = eE?.last_granted_reward_amount,
            eO = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eL = el && eI && null != eb && null != ey && !eO,
            eR = el && eI && !eL && null != eE,
            eP = null != ed && null != ei && ei.status === z.Dmq.CANCELED,
            eD = (0, E.Gh)("NitroTabButton"),
            { marketingEnabled: eM } = (0, j.YS)({ location: "NitroTabButton" }),
            ej = eM && el,
            ew = eM && ex,
            { fractionalState: eU, startsAt: eG, endsAt: ek } = (0, h.A)({ forceFetch: !0 }),
            [eV, eB] = (0, m.Wl)(eU !== q.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eG.valueOf(),
                cooldownDurationMs: 0,
            }),
            eH = es?.trial_id === q.Dw,
            eF = [],
            eY = [];
        (0, _.Tc)() &&
            (eg && eF.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eu && eF.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eW, eK] = (0, m.kn)(eF, void 0, !0);
        eP && eY.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eh && (eN ? eY.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eY.push(o.M.PREMIUM_GROUP_POPOVER)),
            ev && eY.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eR && eY.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ej && eY.push(o.M.L_3PP_NITRO_TOOLTIP),
            ew && eY.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eD && eY.push(o.M.WISHLISTING_NITRO_TAB_NEW_BADGE);
        let [eq, ez] = (0, m.kn)(eY, void 0, !0),
            e$ = (0, M.c)(r.C.PREMIUM_TAB),
            eQ = (0, M.c)(r.C.PREMIUM_TAB_TOOLTIP),
            eX = (0, M.c)(r.C.PREMIUM_TAB_POPOVER),
            [eZ, eJ] = (0, m.Cc)(
                null != e$ && "premiumTab" === e$.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e$?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e0, e1] = (0, m.Cc)(
                null != eX && "premiumTabPopover" === eX.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                eX?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e7, e6] = (0, m.Cc)(eL ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eb ?? "", void 0, !0),
            e9 =
                null != eQ &&
                "premiumTabTooltip" === eQ.properties.properties.oneofKind &&
                eZ === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            e5 = ej && eq === o.M.L_3PP_NITRO_TOOLTIP,
            e2 = ew && eq === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === N &&
                    (null != eW && eK($.i.AUTO_DISMISS),
                    null != eq && ez($.i.AUTO_DISMISS),
                    null != eZ && eJ($.i.AUTO_DISMISS),
                    null != e7 && e6($.i.AUTO_DISMISS),
                    null != e0 && e1($.i.AUTO_DISMISS));
            }, [eK, N, eW, ez, eq, eZ, eJ, e7, e6, e0, e1]),
            !X({ selected: N }))
        )
            return null;
        let e3 = () => {
            eV === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eB($.i.TAKE_ACTION),
                C.default.track(z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ea }),
                null != eW && eK($.i.USER_DISMISS),
                null != eZ && eJ($.i.USER_DISMISS),
                (eq === o.M.PREMIUM_GROUP_POPOVER || eq === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    ez($.i.USER_DISMISS),
                eq === o.M.L_3PP_NITRO_TOOLTIP && ez($.i.USER_DISMISS),
                eq === o.M.L_3PP_NON_NITRO_POPOVER && ez($.i.USER_DISMISS),
                eq === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE && ez($.i.USER_DISMISS);
        };
        eU === q.xc.NONE ||
            ec ||
            ((n = 7),
            (t = (0, i.jsx)(y.A, {
                className: "",
                startsAt: eG,
                endsAt: ek,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e4 = eq === o.M.PREMIUM_GROUP_POPOVER || eq === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            e8 = eh && e4;
        if (e8) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e$ && "premiumTab" === e$.properties.properties.oneofKind)
            (t = (0, i.jsx)(G.A, {
                componentId: e$.id,
                badgeCopy: e$.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e$.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eZ !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (n = 9);
        else if (eu) (t = (0, i.jsx)(U.A, {})), (n = 0);
        else if (eA) {
            let e = (0, V.ZR)();
            (t = (0, i.jsx)(F.MA, {
                isTabSelected: N,
                badgeCopy: Q.intl.string(Q.t.OS9KPu),
                offerExpiresAt: !0 === e ? es?.expires_at : null,
            })),
                (n = 4);
        } else
            eW === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (e3 = () => {
                      C.default.track(z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ea }),
                          eK($.i.USER_DISMISS);
                  }))
                : ec
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: Q.intl.string(Q.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != e_
                    ? ((t = (0, i.jsx)(K.A, { copy: e_, showStars: !1 })), (n = 1))
                    : null != eo
                      ? ((t = (0, i.jsx)(F.fY, { userDiscount: eo, isTabSelected: N, includesAmountOff: !1 })), (n = 3))
                      : null == es || eH
                        ? eP
                            ? ((t = (0, i.jsx)(H.A, { isSelected: N, discountOffer: ed })), (n = 8))
                            : (ev && eq === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eR && eq === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eL && e7 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : e5
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : e2
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eD &&
                                    eq === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE &&
                                    ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                        : ((t = (0, i.jsx)(F.Ag, { trialOffer: es, isTabSelected: N })), (n = 4));
        em &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: Q.intl.string(Q.t.RDE0Sc) }, variant: "expressive" })),
            (e3 = () => {
                C.default.track(z.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ea }), (0, V.ne)(ep);
            }),
            (n = 6));
        let te = W.L.NONE;
        e0 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (te = W.L.MARKETING_MOMENT_POPOVER)
            : eP && eq === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (te = W.L.CHURN_DISCOUNT)
              : e8 && !eS
                ? (te = W.L.PREMIUM_GROUP)
                : e8 && eS
                  ? (te = W.L.PREMIUM_GROUP_TOOLTIP)
                  : ev && eq === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (te = W.L.ORBS_UPSELL)
                    : eR && eq === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (te = W.L.ORBS_INTRO)
                      : eL && e7 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (te = W.L.ORBS_DROP)
                        : e9
                          ? (te = W.L.TOOLTIP)
                          : e5
                            ? (te = W.L.L_PREMIUM_SUB_TOOLTIP)
                            : e2
                              ? (te = W.L.L_UPSELL)
                              : ec && (te = W.L.REVERSE_TRIAL);
        let tt = (0, i.jsx)(u.z9, {
            listItemRef: Z,
            selected: N,
            route: J,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: el ? Q.intl.string(Q.t["4gwVVn"]) : Q.intl.string(Q.t.Ipxkog) }),
            locationState: ee,
            onClick: () => {
                if (e5) {
                    let e = new URLSearchParams({ [L.W]: O.LOGITECH_3PP_CARD_ID }).toString();
                    (0, g.pX)(J.includes("?") ? `${J}&${e}` : `${J}?${e}`);
                }
                e3();
            },
            ...et,
            ...er,
            children: t,
        });
        return (0, i.jsx)(W.H, {
            popoverType: te,
            targetElementRef: Z,
            churnDiscountOffer: ed,
            premiumSubscription: ei,
            receivesUpdatedUpsellPopover: ef,
            orbsRewardAmount: eC,
            lastGrantedRewardAmount: ey,
            dismissCoachMark: ez,
            dismissOrbsDropPopover: e6,
            dismissMarketingPopover: e1,
            fpEndsAt: ek,
            children: tt,
        });
    };
