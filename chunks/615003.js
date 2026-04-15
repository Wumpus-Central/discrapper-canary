n.d(t, { P: () => et, o: () => en }), n(321073), n(323874), n(14289), n(35956);
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
            l = (0, w.V)(),
            a = (0, M.O)(),
            r = (0, v.cg)(),
            o = (0, q.H)(),
            d = (0, S.Of)(n, i),
            c = (0, s.bG)([x.A], () => x.A.getCreatedAtOverride()),
            u = t || null != l || null != a || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    en = (e) => {
        let t,
            n,
            { selected: x, nitroTabButtonRef: en, route: ei, locationState: el, showHoverGradient: ea, ...er } = e,
            es = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
            eo = (0, s.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            ed = (0, S.Of)(es, eo),
            ec = (0, S.YE)(es, Q.PremiumTypes.TIER_2),
            eu = (0, a.rm)("nitro"),
            eA = (0, w.V)(),
            eh = (0, M.O)(),
            e_ = (0, j.p)(),
            em = (0, y.ds)(),
            eg = (0, v.cg)(),
            ep = (0, F.NF)({ trialOffer: eA }),
            eE = (0, k.bf)(),
            eI = (0, q.H)(),
            { shouldShowBonusOrbsUX: ef, dismissOrbMultiplierTabTooltip: eC, orbMultiplier: eT } = (0, p.p)(),
            eN = (0, F.Tp)(),
            eS = (0, s.bG)([b.A], () => b.A.getReminderStateId()),
            ex = (0, H.c7)(),
            { programReward: ev, isEligible: eb } = (0, E.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: ey, orbsRewardAmount: eO } = (0, Y.uX)("NitroTabButton"),
            eL = (0, L.Q)({ location: "nitro_tab_popover" }),
            eR = (0, O.I)({ location: "nitro_tab_popover" }),
            eP = !(0, S.TW)(es),
            eD = eP && eb,
            ej = ev?.last_granted_reward,
            eM = ev?.last_granted_reward_amount,
            ew = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eU = ec && eb && null != ej && null != eM && !ew,
            eG = ec && eb && !eU && null != ev,
            ek = null != e_ && null != eo && eo.status === X.Dmq.CANCELED,
            eV = (0, f.Gh)("NitroTabButton"),
            { marketingEnabled: eB } = (0, G.YS)({ location: "NitroTabButton" }),
            eH = eB && ec,
            eF = eB && eP,
            {
                fractionalState: eY,
                startsAt: eW,
                endsAt: eK,
                currentEntitlementEndsAt: eq,
            } = (0, h.A)({ forceFetch: !0 }),
            [ez, e$] = (0, g.Wl)(eY !== Q.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eW.valueOf(),
                cooldownDurationMs: 0,
            }),
            eQ = eA?.trial_id === Q.Dw,
            eX = [],
            eZ = [];
        (0, _.Tc)() &&
            (ex && eX.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eg && eX.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eJ, e0] = (0, g.kn)(eX, void 0, !0);
        ek && eZ.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eE && (eL || eR ? eZ.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eZ.push(o.M.PREMIUM_GROUP_POPOVER)),
            eD && eZ.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eG && eZ.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eH && eZ.push(o.M.L_3PP_NITRO_TOOLTIP),
            eF && eZ.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eV && eZ.push(o.M.PREMIUM_WISHLIST_COACHMARK);
        let [e1, e7] = (0, g.kn)(eZ, void 0, !0),
            e9 = (0, U.c)(r.C.PREMIUM_TAB),
            e6 = (0, U.c)(r.C.PREMIUM_TAB_TOOLTIP),
            e5 = (0, U.c)(r.C.PREMIUM_TAB_POPOVER),
            [e2, e3] = (0, g.Cc)(
                null != e9 && "premiumTab" === e9.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                e9?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e4, e8] = (0, g.Cc)(
                null != e5 && "premiumTabPopover" === e5.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e5?.promotionId ?? "",
                void 0,
                !0,
            ),
            [te, tt] = (0, g.Cc)(eU ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ej ?? "", void 0, !0),
            tn =
                null != e6 &&
                "premiumTabTooltip" === e6.properties.properties.oneofKind &&
                e2 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            ti = eH && e1 === o.M.L_3PP_NITRO_TOOLTIP,
            tl = eF && e1 === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (l.useEffect(() => {
                !0 === x &&
                    (null != eJ && e0(Z.i.AUTO_DISMISS),
                    null == e1 || ee.has(e1) || e7(Z.i.AUTO_DISMISS),
                    null != e2 && e3(Z.i.AUTO_DISMISS),
                    null != te && tt(Z.i.AUTO_DISMISS),
                    null != e4 && e8(Z.i.AUTO_DISMISS),
                    ef && eC(Z.i.AUTO_DISMISS));
            }, [e0, x, eJ, e7, e1, e2, e3, te, tt, e4, e8, ef, eC]),
            !et({ selected: x }))
        )
            return null;
        let ta = () => {
            ez === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && e$(Z.i.TAKE_ACTION),
                N.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ed }),
                null != eJ && e0(Z.i.USER_DISMISS),
                null != e2 && e3(Z.i.USER_DISMISS),
                (e1 === o.M.PREMIUM_GROUP_POPOVER || e1 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e7(Z.i.USER_DISMISS),
                e1 === o.M.L_3PP_NITRO_TOOLTIP && e7(Z.i.USER_DISMISS),
                e1 === o.M.L_3PP_NON_NITRO_POPOVER && e7(Z.i.USER_DISMISS),
                ef && eC(Z.i.USER_DISMISS);
        };
        eY === Q.xc.NONE ||
            em ||
            ((n = 7),
            (t = (0, i.jsx)(R.A, {
                className: "",
                startsAt: eW,
                endsAt: eK,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let tr = e1 === o.M.PREMIUM_GROUP_POPOVER || e1 === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            ts = eE && tr;
        if (ts) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != e9 && "premiumTab" === e9.properties.properties.oneofKind)
            (t = (0, i.jsx)(B.A, {
                componentId: e9.id,
                badgeCopy: e9.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: e9.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, e9?.promotionId ?? "").isDismissed,
            })),
                (n = 9);
        else if (eg) (t = (0, i.jsx)(V.A, {})), (n = 0);
        else if (ep) {
            let e = (0, F.ZR)();
            (t = (0, i.jsx)(K.MA, {
                isTabSelected: x,
                badgeCopy: J.intl.string(J.t.OS9KPu),
                offerExpiresAt: !0 === e ? eA?.expires_at : null,
            })),
                (n = 4);
        } else
            eJ === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (ta = () => {
                      N.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ed }),
                          e0(Z.i.USER_DISMISS);
                  }))
                : em
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: J.intl.string(J.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != eI
                    ? ((t = (0, i.jsx)($.A, { copy: eI, showStars: !1 })), (n = 1))
                    : null != eh
                      ? ((t = (0, i.jsx)(K.fY, { userDiscount: eh, isTabSelected: x, includesAmountOff: !1 })), (n = 3))
                      : null == eA || eQ
                        ? ek
                            ? ((t = (0, i.jsx)(W.A, { isSelected: x, discountOffer: e_ })), (n = 8))
                            : (eD && e1 === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eG && e1 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eU && te === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : ti
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : tl
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eV && e1 === o.M.PREMIUM_WISHLIST_COACHMARK
                                    ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                                    : ef && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 14))
                        : ((t = (0, i.jsx)(K.Ag, { trialOffer: eA, isTabSelected: x })), (n = 4));
        eN &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: J.intl.string(J.t.RDE0Sc) }, variant: "expressive" })),
            (ta = () => {
                N.default.track(X.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ed }), (0, F.ne)(eS);
            }),
            (n = 6));
        let to = z.L.NONE;
        e4 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (to = z.L.MARKETING_MOMENT_POPOVER)
            : ek && e1 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (to = z.L.CHURN_DISCOUNT)
              : ts && !eR
                ? (to = z.L.PREMIUM_GROUP)
                : ts && eR
                  ? ((to = z.L.PREMIUM_GROUP_TOOLTIP), (ea = !0))
                  : eD && e1 === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (to = z.L.ORBS_UPSELL)
                    : eG && e1 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (to = z.L.ORBS_INTRO)
                      : eU && te === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (to = z.L.ORBS_DROP)
                        : tn
                          ? (to = z.L.TOOLTIP)
                          : ti
                            ? (to = z.L.L_PREMIUM_SUB_TOOLTIP)
                            : tl
                              ? (to = z.L.L_UPSELL)
                              : em || eA?.trial_id === Q.Tt
                                ? (to = z.L.REVERSE_TRIAL)
                                : ef && (to = z.L.ORBS_MULTIPLIER);
        let td = (0, i.jsx)(u.z9, {
            listItemRef: en,
            selected: x,
            route: ei,
            icon: c.tvc,
            showHoverGradient: ea ?? !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: ec ? J.intl.string(J.t["4gwVVn"]) : J.intl.string(J.t.Ipxkog) }),
            locationState: el,
            onClick: () => {
                if (ti) {
                    let e = new URLSearchParams({ [D.W]: P.LOGITECH_3PP_CARD_ID }).toString();
                    (0, I.pX)(ei.includes("?") ? `${ei}&${e}` : `${ei}?${e}`);
                }
                ta();
            },
            ...er,
            ...eu,
            children: t,
        });
        return (0, i.jsx)(z.H, {
            popoverType: to,
            targetElementRef: en,
            churnDiscountOffer: e_,
            premiumSubscription: eo,
            receivesUpdatedUpsellPopover: ey,
            orbsRewardAmount: eO,
            orbMultiplier: eT,
            lastGrantedRewardAmount: eM,
            dismissCoachMark: e7,
            dismissOrbsDropPopover: tt,
            dismissMarketingPopover: e8,
            fpCurrentEntitlementEndsAt: eq,
            trialOffer: eA,
            children: td,
        });
    };
