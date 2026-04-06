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
            { fractionalState: eH, startsAt: eF, endsAt: eY } = (0, h.A)({ forceFetch: !0 }),
            [eW, eK] = (0, p.Wl)(eH !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eF.valueOf(),
                cooldownDurationMs: 0,
            }),
            eq = ed?.trial_id === $.Dw,
            ez = [],
            e$ = [];
        (0, _.Tc)() &&
            (eT && ez.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eh && ez.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eQ, eX] = (0, p.kn)(ez, void 0, !0);
        eU && e$.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            em && (ey ? e$.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : e$.push(o.M.PREMIUM_GROUP_POPOVER)),
            eR && e$.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ew && e$.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eV && e$.push(o.M.L_3PP_NITRO_TOOLTIP),
            eB && e$.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eG && e$.push(o.M.WISHLISTING_NITRO_TAB_NEW_BADGE);
        let [eZ, eJ] = (0, p.kn)(e$, void 0, !0),
            e0 = (0, w.c)(l.C.PREMIUM_TAB),
            e1 = (0, w.c)(l.C.PREMIUM_TAB_TOOLTIP),
            e7 = (0, w.c)(l.C.PREMIUM_TAB_POPOVER),
            [e9, e6] = (0, p.Cc)(
                null != e0 && "premiumTab" === e0.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e0?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e5, e2] = (0, p.Cc)(
                null != e7 && "premiumTabPopover" === e7.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e7?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e3, e4] = (0, p.Cc)(ej ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eP ?? "", void 0, !0),
            e8 =
                null != e1 &&
                "premiumTabTooltip" === e1.properties.properties.oneofKind &&
                e9 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            te = eV && eZ === o.M.L_3PP_NITRO_TOOLTIP,
            tt = eB && eZ === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (r.useEffect(() => {
                !0 === x &&
                    (null != eQ && eX(X.i.AUTO_DISMISS),
                    null != eZ && eJ(X.i.AUTO_DISMISS),
                    null != e9 && e6(X.i.AUTO_DISMISS),
                    null != e3 && e4(X.i.AUTO_DISMISS),
                    null != e5 && e2(X.i.AUTO_DISMISS),
                    eg && eE(X.i.AUTO_DISMISS));
            }, [eX, x, eQ, eJ, eZ, e9, e6, e3, e4, e5, e2, eg, eE]),
            !J({ selected: x }))
        )
            return null;
        let tn = () => {
            eW === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eK(X.i.TAKE_ACTION),
                N.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }),
                null != eQ && eX(X.i.USER_DISMISS),
                null != e9 && e6(X.i.USER_DISMISS),
                (eZ === o.M.PREMIUM_GROUP_POPOVER || eZ === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    eJ(X.i.USER_DISMISS),
                eZ === o.M.L_3PP_NITRO_TOOLTIP && eJ(X.i.USER_DISMISS),
                eZ === o.M.L_3PP_NON_NITRO_POPOVER && eJ(X.i.USER_DISMISS),
                eZ === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE && eJ(X.i.USER_DISMISS),
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
        let ti = eZ === o.M.PREMIUM_GROUP_POPOVER || eZ === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            tr = em && ti;
        if (tr) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e0 && "premiumTab" === e0.properties.properties.oneofKind)
            (t = (0, i.jsx)(V.A, {
                componentId: e0.id,
                badgeCopy: e0.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e0.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e0?.promotionId ?? "").isDismissed,
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
            eQ === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (tn = () => {
                      N.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }),
                          eX(X.i.USER_DISMISS);
                  }))
                : eA
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != ep
                    ? ((t = (0, i.jsx)(z.A, { copy: ep, showStars: !1 })), (n = 1))
                    : null != ec
                      ? ((t = (0, i.jsx)(W.fY, { userDiscount: ec, isTabSelected: x, includesAmountOff: !1 })), (n = 3))
                      : null == ed || eq
                        ? eU
                            ? ((t = (0, i.jsx)(Y.A, { isSelected: x, discountOffer: eu })), (n = 8))
                            : (eR && eZ === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (ew && eZ === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (ej && e3 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : te
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : tt
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eG && eZ === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : eg && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(W.Ag, { trialOffer: ed, isTabSelected: x })), (n = 4));
        ef &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.RDE0Sc) }, variant: "expressive" })),
            (tn = () => {
                N.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }), (0, H.ne)(eC);
            }),
            (n = 6));
        let ta = q.L.NONE;
        e5 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (ta = q.L.MARKETING_MOMENT_POPOVER)
            : eU && eZ === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (ta = q.L.CHURN_DISCOUNT)
              : tr && !eO
                ? (ta = q.L.PREMIUM_GROUP)
                : tr && eO
                  ? (ta = q.L.PREMIUM_GROUP_TOOLTIP)
                  : eR && eZ === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (ta = q.L.ORBS_UPSELL)
                    : ew && eZ === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (ta = q.L.ORBS_INTRO)
                      : ej && e3 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (ta = q.L.ORBS_DROP)
                        : e8
                          ? (ta = q.L.TOOLTIP)
                          : te
                            ? (ta = q.L.L_PREMIUM_SUB_TOOLTIP)
                            : tt
                              ? (ta = q.L.L_UPSELL)
                              : eA
                                ? (ta = q.L.REVERSE_TRIAL)
                                : eg && (ta = q.L.ORBS_MULTIPLIER);
        let tl = (0, i.jsx)(u.z9, {
            listItemRef: ee,
            selected: x,
            route: et,
            icon: c.tvc,
            showHoverGradient: !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: es ? Z.intl.string(Z.t["4gwVVn"]) : Z.intl.string(Z.t.Ipxkog) }),
            locationState: en,
            onClick: () => {
                if (te) {
                    let e = new URLSearchParams({ [P.W]: R.LOGITECH_3PP_CARD_ID }).toString();
                    (0, I.pX)(et.includes("?") ? `${et}&${e}` : `${et}?${e}`);
                }
                tn();
            },
            ...ei,
            ...eo,
            children: t,
        });
        return (0, i.jsx)(q.H, {
            popoverType: ta,
            targetElementRef: ee,
            churnDiscountOffer: eu,
            premiumSubscription: ea,
            receivesUpdatedUpsellPopover: ex,
            orbsRewardAmount: ev,
            orbMultiplier: eI,
            lastGrantedRewardAmount: eD,
            dismissCoachMark: eJ,
            dismissOrbsDropPopover: e4,
            dismissMarketingPopover: e2,
            fpEndsAt: eY,
            children: tl,
        });
    };
