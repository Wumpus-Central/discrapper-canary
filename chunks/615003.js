n.d(t, { P: () => z, o: () => $ }), n(321073);
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
    g = n(320118),
    p = n(287809),
    E = n(166403),
    I = n(954571),
    f = n(927578),
    C = n(683760),
    T = n(40185),
    N = n(851746),
    S = n(637073),
    x = n(113359),
    v = n(288349),
    b = n(131168),
    y = n(422936),
    O = n(234419),
    L = n(549996),
    R = n(881373),
    P = n(612669),
    D = n(603488),
    M = n(282077),
    j = n(385327),
    w = n(727949),
    U = n(84483),
    G = n(953062),
    k = n(105390),
    V = n(156393),
    B = n(513570),
    H = n(969492),
    F = n(622037),
    Y = n(788868),
    W = n(652215),
    K = n(49999),
    q = n(985018);
let z = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            a = (0, O.V)(),
            l = (0, y.O)(),
            r = (0, T.cg)(),
            o = (0, B.H)(),
            d = (0, f.Of)(n, i),
            c = (0, s.bG)([C.A], () => C.A.getCreatedAtOverride()),
            u = t || null != a || null != l || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    $ = (e) => {
        let t,
            n,
            { selected: C, nitroTabButtonRef: $, route: Q, locationState: X, ...Z } = e,
            J = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            ee = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            et = (0, f.Of)(J, ee),
            en = (0, f.YE)(J, Y.PremiumTypes.TIER_2),
            ei = (0, l.rm)("nitro"),
            ea = (0, O.V)(),
            el = (0, y.O)(),
            er = (0, b.p)(),
            es = (0, S.d)(),
            eo = (0, T.cg)(),
            ed = (0, w.NF)({ trialOffer: ea }),
            ec = (0, P.bf)(),
            eu = (0, B.H)(),
            eA = (0, w.Tp)(),
            eh = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            e_ = (0, j.c7)(),
            { programReward: em, isEligible: eg } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: ep, orbsRewardAmount: eE } = (0, U.uX)("NitroTabButton"),
            eI = (0, x.QG)({ location: "nitro_tab_popover" }),
            ef = eI !== x.xb.CONTROL,
            eC = eI === x.xb.ANNOUNCEMENT_MODAL,
            eT = !(0, f.TW)(J),
            eN = eT && eg,
            eS = em?.last_granted_reward,
            ex = em?.last_granted_reward_amount,
            ev = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eb = en && eg && null != eS && null != ex && !ev,
            ey = en && eg && !eb && null != em,
            eO = null != er && null != ee && ee.status === W.Dmq.CANCELED,
            { marketingEnabled: eL } = (0, R.YS)({ location: "NitroTabButton" }),
            eR = eL && en,
            eP = eL && eT,
            { fractionalState: eD, startsAt: eM, endsAt: ej } = (0, h.A)({ forceFetch: !0 }),
            [ew, eU] = (0, m.Wl)(eD !== Y.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eM.valueOf(),
                cooldownDurationMs: 0,
            }),
            eG = ea?.trial_id === Y.Dw,
            ek = [],
            eV = [];
        (0, _.Tc)() &&
            (e_ && ek.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eo && ek.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eB, eH] = (0, m.kn)(ek, void 0, !0);
        eO && eV.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ec && (ef ? eV.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eV.push(o.M.PREMIUM_GROUP_POPOVER)),
            eN && eV.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ey && eV.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eR && eV.push(o.M.L_3PP_NITRO_TOOLTIP),
            eP && eV.push(o.M.L_3PP_NON_NITRO_POPOVER);
        let [eF, eY] = (0, m.kn)(eV, void 0, !0),
            eW = (0, L.c)(r.C.PREMIUM_TAB),
            eK = (0, L.c)(r.C.PREMIUM_TAB_TOOLTIP),
            eq = (0, L.c)(r.C.PREMIUM_TAB_POPOVER),
            [ez, e$] = (0, m.Cc)(
                null != eW && "premiumTab" === eW.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eW?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eQ, eX] = (0, m.Cc)(
                null != eq && "premiumTabPopover" === eq.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                eq?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eZ, eJ] = (0, m.Cc)(eb ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eS ?? "", void 0, !0),
            e0 =
                null != eK &&
                "premiumTabTooltip" === eK.properties.properties.oneofKind &&
                ez === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            e1 = eR && eF === o.M.L_3PP_NITRO_TOOLTIP,
            e7 = eP && eF === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === C &&
                    (null != eB && eH(K.i.AUTO_DISMISS),
                    null != eF && eY(K.i.AUTO_DISMISS),
                    null != ez && e$(K.i.AUTO_DISMISS),
                    null != eZ && eJ(K.i.AUTO_DISMISS),
                    null != eQ && eX(K.i.AUTO_DISMISS));
            }, [eH, C, eB, eY, eF, ez, e$, eZ, eJ, eQ, eX]),
            !z({ selected: C }))
        )
            return null;
        let e6 = () => {
            ew === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eU(K.i.TAKE_ACTION),
                I.default.track(W.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: et }),
                null != eB && eH(K.i.USER_DISMISS),
                null != ez && e$(K.i.USER_DISMISS),
                (eF === o.M.PREMIUM_GROUP_POPOVER || eF === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    eY(K.i.USER_DISMISS),
                eF === o.M.L_3PP_NITRO_TOOLTIP && eY(K.i.USER_DISMISS),
                eF === o.M.L_3PP_NON_NITRO_POPOVER && eY(K.i.USER_DISMISS);
        };
        eD === Y.xc.NONE ||
            es ||
            ((n = 7),
            (t = (0, i.jsx)(v.A, {
                className: "",
                startsAt: eM,
                endsAt: ej,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e9 = eF === o.M.PREMIUM_GROUP_POPOVER || eF === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            e5 = ec && e9;
        if (e5) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != eW && "premiumTab" === eW.properties.properties.oneofKind)
            (t = (0, i.jsx)(M.A, {
                componentId: eW.id,
                badgeCopy: eW.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eW.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: ez !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (n = 9);
        else if (eo) (t = (0, i.jsx)(D.A, {})), (n = 0);
        else if (ed) {
            let e = (0, w.ZR)();
            (t = (0, i.jsx)(k.MA, {
                isTabSelected: C,
                badgeCopy: q.intl.string(q.t.OS9KPu),
                offerExpiresAt: !0 === e ? ea?.expires_at : null,
            })),
                (n = 4);
        } else
            eB === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (e6 = () => {
                      I.default.track(W.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: et }),
                          eH(K.i.USER_DISMISS);
                  }))
                : es
                  ? ((t = (0, i.jsx)(V.d, { expiresAt: ej })), (n = 4))
                  : null != eu
                    ? ((t = (0, i.jsx)(F.A, { copy: eu, showStars: !1 })), (n = 1))
                    : null != el
                      ? ((t = (0, i.jsx)(k.fY, { userDiscount: el, isTabSelected: C, includesAmountOff: !1 })), (n = 3))
                      : null == ea || eG
                        ? eO
                            ? ((t = (0, i.jsx)(G.A, { isSelected: C, discountOffer: er })), (n = 8))
                            : (eN && eF === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (ey && eF === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eb && eZ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : e1
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : e7 && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                        : ((t = (0, i.jsx)(k.Ag, { trialOffer: ea, isTabSelected: C })), (n = 4));
        eA &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: q.intl.string(q.t.RDE0Sc) }, variant: "expressive" })),
            (e6 = () => {
                I.default.track(W.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: et }), (0, w.ne)(eh);
            }),
            (n = 6));
        let e3 = (0, i.jsx)(u.z9, {
                listItemRef: $,
                selected: C,
                route: Q,
                icon: c.tvc,
                text: (0, i.jsx)(d.A, { children: en ? q.intl.string(q.t["4gwVVn"]) : q.intl.string(q.t.Ipxkog) }),
                locationState: X,
                onClick: e6,
                ...Z,
                ...ei,
                children: t,
            }),
            e2 = H.L.NONE;
        return (
            eQ === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                ? (e2 = H.L.MARKETING_MOMENT_POPOVER)
                : eO && eF === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
                  ? (e2 = H.L.CHURN_DISCOUNT)
                  : e5 && !eC
                    ? (e2 = H.L.PREMIUM_GROUP)
                    : e5 && eC
                      ? (e2 = H.L.PREMIUM_GROUP_TOOLTIP)
                      : eN && eF === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                        ? (e2 = H.L.ORBS_UPSELL)
                        : ey && eF === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                          ? (e2 = H.L.ORBS_INTRO)
                          : eb && eZ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                            ? (e2 = H.L.ORBS_DROP)
                            : e0
                              ? (e2 = H.L.TOOLTIP)
                              : e1
                                ? (e2 = H.L.L_PREMIUM_SUB_TOOLTIP)
                                : e7 && (e2 = H.L.L_UPSELL),
            (0, i.jsx)(H.H, {
                popoverType: e2,
                targetElementRef: $,
                churnDiscountOffer: er,
                premiumSubscription: ee,
                receivesUpdatedUpsellPopover: ep,
                orbsRewardAmount: eE,
                lastGrantedRewardAmount: ex,
                dismissCoachMark: eY,
                dismissOrbsDropPopover: eJ,
                dismissMarketingPopover: eX,
                children: e3,
            })
        );
    };
