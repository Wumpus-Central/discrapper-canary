n.d(t, { P: () => J, o: () => ee }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(837381),
    l = n(877624),
    s = n(311907),
    o = n(554146),
    d = n(3026),
    c = n(397927),
    u = n(701363),
    A = n(366999),
    h = n(531260),
    _ = n(771781),
    m = n(826673),
    p = n(932001),
    g = n(337117),
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
    M = n(422936),
    j = n(234419),
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
    Q = n(652215),
    X = n(49999),
    Z = n(985018);
let J = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            i = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            r = (0, j.V)(),
            a = (0, M.O)(),
            l = (0, v.cg)(),
            o = (0, K.H)(),
            d = (0, S.Of)(n, i),
            c = (0, s.bG)([x.A], () => x.A.getCreatedAtOverride()),
            u = t || null != r || null != a || l || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    ee = (e) => {
        let t,
            n,
            { selected: x, nitroTabButtonRef: ee, route: et, locationState: en, ...ei } = e,
            er = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            ea = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            el = (0, S.Of)(er, ea),
            es = (0, S.YE)(er, $.PremiumTypes.TIER_2),
            eo = (0, a.rm)("nitro"),
            ed = (0, j.V)(),
            ec = (0, M.O)(),
            eu = (0, D.p)(),
            eA = (0, y.ds)(),
            eh = (0, v.cg)(),
            e_ = (0, H.NF)({ trialOffer: ed }),
            em = (0, G.bf)(),
            ep = (0, K.H)(),
            { shouldShowBonusOrbsUX: eg, dismissOrbMultiplierTabTooltip: eE, orbMultiplier: eI } = (0, g.p)(),
            ef = (0, H.Tp)(),
            eC = (0, s.bG)([b.A], () => b.A.getReminderStateId()),
            eT = (0, B.c7)(),
            { programReward: eN, isEligible: eS } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: ex, orbsRewardAmount: ev } = (0, F.uX)("NitroTabButton"),
            eb = (0, O.QG)({ location: "nitro_tab_popover" }),
            ey = eb !== O.xb.CONTROL,
            eO = eb === O.xb.ANNOUNCEMENT_MODAL,
            eL = !(0, S.TW)(er),
            eR = eL && eS,
            eP = eN?.last_granted_reward,
            eD = eN?.last_granted_reward_amount,
            eM = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ej = es && eS && null != eP && null != eD && !eM,
            ew = es && eS && !ej && null != eN,
            eU = null != eu && null != ea && ea.status === Q.Dmq.CANCELED,
            eG = (0, f.Gh)("NitroTabButton"),
            { marketingEnabled: ek } = (0, U.YS)({ location: "NitroTabButton" }),
            eV = ek && es,
            eB = ek && eL,
            {
                fractionalState: eH,
                startsAt: eF,
                endsAt: eY,
                currentEntitlementEndsAt: eW,
            } = (0, h.A)({ forceFetch: !0 }),
            [eK, eq] = (0, p.Wl)(eH !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eF.valueOf(),
                cooldownDurationMs: 0,
            }),
            ez = ed?.trial_id === $.Dw,
            e$ = [],
            eQ = [];
        (0, _.Tc)() &&
            (eT && e$.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eh && e$.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eX, eZ] = (0, p.kn)(e$, void 0, !0);
        eU && eQ.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            em && (ey ? eQ.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eQ.push(o.M.PREMIUM_GROUP_POPOVER)),
            eR && eQ.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ew && eQ.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eV && eQ.push(o.M.L_3PP_NITRO_TOOLTIP),
            eB && eQ.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eG && eQ.push(o.M.WISHLISTING_NITRO_TAB_NEW_BADGE);
        let [eJ, e0] = (0, p.kn)(eQ, void 0, !0),
            e1 = (0, w.c)(l.C.PREMIUM_TAB),
            e7 = (0, w.c)(l.C.PREMIUM_TAB_TOOLTIP),
            e9 = (0, w.c)(l.C.PREMIUM_TAB_POPOVER),
            [e6, e5] = (0, p.Cc)(
                null != e1 && "premiumTab" === e1.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e1?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e2, e3] = (0, p.Cc)(
                null != e9 && "premiumTabPopover" === e9.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e9?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e4, e8] = (0, p.Cc)(ej ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eP ?? "", void 0, !0),
            te =
                null != e7 &&
                "premiumTabTooltip" === e7.properties.properties.oneofKind &&
                e6 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            tt = eV && eJ === o.M.L_3PP_NITRO_TOOLTIP,
            tn = eB && eJ === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (r.useEffect(() => {
                !0 === x &&
                    (null != eX && eZ(X.i.AUTO_DISMISS),
                    null != eJ && e0(X.i.AUTO_DISMISS),
                    null != e6 && e5(X.i.AUTO_DISMISS),
                    null != e4 && e8(X.i.AUTO_DISMISS),
                    null != e2 && e3(X.i.AUTO_DISMISS),
                    eg && eE(X.i.AUTO_DISMISS));
            }, [eZ, x, eX, e0, eJ, e6, e5, e4, e8, e2, e3, eg, eE]),
            !J({ selected: x }))
        )
            return null;
        let ti = () => {
            eK === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eq(X.i.TAKE_ACTION),
                N.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }),
                null != eX && eZ(X.i.USER_DISMISS),
                null != e6 && e5(X.i.USER_DISMISS),
                (eJ === o.M.PREMIUM_GROUP_POPOVER || eJ === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e0(X.i.USER_DISMISS),
                eJ === o.M.L_3PP_NITRO_TOOLTIP && e0(X.i.USER_DISMISS),
                eJ === o.M.L_3PP_NON_NITRO_POPOVER && e0(X.i.USER_DISMISS),
                eJ === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE && e0(X.i.USER_DISMISS),
                eg && eE(X.i.USER_DISMISS);
        };
        eH === $.xc.NONE ||
            eA ||
            ((n = 7),
            (t = (0, i.jsx)(L.A, {
                className: "",
                startsAt: eF,
                endsAt: eY,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let tr = eJ === o.M.PREMIUM_GROUP_POPOVER || eJ === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            ta = em && tr;
        if (ta) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e1 && "premiumTab" === e1.properties.properties.oneofKind)
            (t = (0, i.jsx)(V.A, {
                componentId: e1.id,
                badgeCopy: e1.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e1.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e1?.promotionId ?? "").isDismissed,
            })),
                (n = 9);
        else if (eh) (t = (0, i.jsx)(k.A, {})), (n = 0);
        else if (e_) {
            let e = (0, H.ZR)();
            (t = (0, i.jsx)(W.MA, {
                isTabSelected: x,
                badgeCopy: Z.intl.string(Z.t.OS9KPu),
                offerExpiresAt: !0 === e ? ed?.expires_at : null,
            })),
                (n = 4);
        } else
            eX === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (ti = () => {
                      N.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }),
                          eZ(X.i.USER_DISMISS);
                  }))
                : eA
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != ep
                    ? ((t = (0, i.jsx)(z.A, { copy: ep, showStars: !1 })), (n = 1))
                    : null != ec
                      ? ((t = (0, i.jsx)(W.fY, { userDiscount: ec, isTabSelected: x, includesAmountOff: !1 })), (n = 3))
                      : null == ed || ez
                        ? eU
                            ? ((t = (0, i.jsx)(Y.A, { isSelected: x, discountOffer: eu })), (n = 8))
                            : (eR && eJ === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (ew && eJ === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (ej && e4 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : tt
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : tn
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eG && eJ === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eg && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(W.Ag, { trialOffer: ed, isTabSelected: x })), (n = 4));
        ef &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.RDE0Sc) }, variant: "expressive" })),
            (ti = () => {
                N.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }), (0, H.ne)(eC);
            }),
            (n = 6));
        let tl = q.L.NONE;
        e2 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (tl = q.L.MARKETING_MOMENT_POPOVER)
            : eU && eJ === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (tl = q.L.CHURN_DISCOUNT)
              : ta && !eO
                ? (tl = q.L.PREMIUM_GROUP)
                : ta && eO
                  ? (tl = q.L.PREMIUM_GROUP_TOOLTIP)
                  : eR && eJ === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (tl = q.L.ORBS_UPSELL)
                    : ew && eJ === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (tl = q.L.ORBS_INTRO)
                      : ej && e4 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (tl = q.L.ORBS_DROP)
                        : te
                          ? (tl = q.L.TOOLTIP)
                          : tt
                            ? (tl = q.L.L_PREMIUM_SUB_TOOLTIP)
                            : tn
                              ? (tl = q.L.L_UPSELL)
                              : eA || ed?.trial_id === $.Tt
                                ? (tl = q.L.REVERSE_TRIAL)
                                : eg && (tl = q.L.ORBS_MULTIPLIER);
        let ts = (0, i.jsx)(u.z9, {
            listItemRef: ee,
            selected: x,
            route: et,
            icon: c.tvc,
            showHoverGradient: !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: es ? Z.intl.string(Z.t["4gwVVn"]) : Z.intl.string(Z.t.Ipxkog) }),
            locationState: en,
            onClick: () => {
                if (tt) {
                    let e = new URLSearchParams({ [P.W]: R.LOGITECH_3PP_CARD_ID }).toString();
                    (0, I.pX)(et.includes("?") ? `${et}&${e}` : `${et}?${e}`);
                }
                ti();
            },
            ...ei,
            ...eo,
            children: t,
        });
        return (0, i.jsx)(q.H, {
            popoverType: tl,
            targetElementRef: ee,
            churnDiscountOffer: eu,
            premiumSubscription: ea,
            receivesUpdatedUpsellPopover: ex,
            orbsRewardAmount: ev,
            orbMultiplier: eI,
            lastGrantedRewardAmount: eD,
            dismissCoachMark: e0,
            dismissOrbsDropPopover: e8,
            dismissMarketingPopover: e3,
            fpCurrentEntitlementEndsAt: eW,
            trialOffer: ed,
            children: ts,
        });
    };
