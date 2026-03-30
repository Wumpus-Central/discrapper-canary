n.d(t, { P: () => Q, o: () => X }), n(321073), n(323874), n(14289), n(35956);
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
    p = n(976860),
    E = n(287809),
    I = n(166403),
    f = n(954571),
    C = n(927578),
    T = n(683760),
    N = n(40185),
    S = n(851746),
    x = n(881489),
    v = n(113359),
    y = n(288349),
    b = n(920050),
    O = n(553081),
    L = n(131168),
    R = n(422936),
    P = n(234419),
    D = n(549996),
    M = n(881373),
    j = n(612669),
    w = n(603488),
    U = n(282077),
    G = n(385327),
    k = n(727949),
    V = n(84483),
    B = n(953062),
    H = n(105390),
    F = n(513570),
    Y = n(969492),
    W = n(622037),
    K = n(788868),
    q = n(652215),
    z = n(49999),
    $ = n(985018);
let Q = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
            i = (0, s.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            a = (0, P.V)(),
            l = (0, R.O)(),
            r = (0, N.cg)(),
            o = (0, F.H)(),
            d = (0, C.Of)(n, i),
            c = (0, s.bG)([T.A], () => T.A.getCreatedAtOverride()),
            u = t || null != a || null != l || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    X = (e) => {
        let t,
            n,
            { selected: T, nitroTabButtonRef: X, route: Z, locationState: J, ...ee } = e,
            et = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
            en = (0, s.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            ei = (0, C.Of)(et, en),
            ea = (0, C.YE)(et, K.PremiumTypes.TIER_2),
            el = (0, l.rm)("nitro"),
            er = (0, P.V)(),
            es = (0, R.O)(),
            eo = (0, L.p)(),
            ed = (0, x.ds)(),
            ec = (0, N.cg)(),
            eu = (0, k.NF)({ trialOffer: er }),
            eA = (0, j.bf)(),
            eh = (0, F.H)(),
            e_ = (0, k.Tp)(),
            em = (0, s.bG)([S.A], () => S.A.getReminderStateId()),
            eg = (0, G.c7)(),
            { programReward: ep, isEligible: eE } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eI, orbsRewardAmount: ef } = (0, V.uX)("NitroTabButton"),
            eC = (0, v.QG)({ location: "nitro_tab_popover" }),
            eT = eC !== v.xb.CONTROL,
            eN = eC === v.xb.ANNOUNCEMENT_MODAL,
            eS = !(0, C.TW)(et),
            ex = eS && eE,
            ev = ep?.last_granted_reward,
            ey = ep?.last_granted_reward_amount,
            eb = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eO = ea && eE && null != ev && null != ey && !eb,
            eL = ea && eE && !eO && null != ep,
            eR = null != eo && null != en && en.status === q.Dmq.CANCELED,
            { marketingEnabled: eP } = (0, M.YS)({ location: "NitroTabButton" }),
            eD = eP && ea,
            eM = eP && eS,
            { fractionalState: ej, startsAt: ew, endsAt: eU } = (0, h.A)({ forceFetch: !0 }),
            [eG, ek] = (0, m.Wl)(ej !== K.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ew.valueOf(),
                cooldownDurationMs: 0,
            }),
            eV = er?.trial_id === K.Dw,
            eB = [],
            eH = [];
        (0, _.Tc)() &&
            (eg && eB.push(o.M.RECURRING_3P_PROMOTION_POPOVER), ec && eB.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eF, eY] = (0, m.kn)(eB, void 0, !0);
        eR && eH.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eA && (eT ? eH.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eH.push(o.M.PREMIUM_GROUP_POPOVER)),
            ex && eH.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eL && eH.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eD && eH.push(o.M.L_3PP_NITRO_TOOLTIP),
            eM && eH.push(o.M.L_3PP_NON_NITRO_POPOVER);
        let [eW, eK] = (0, m.kn)(eH, void 0, !0),
            eq = (0, D.c)(r.C.PREMIUM_TAB),
            ez = (0, D.c)(r.C.PREMIUM_TAB_TOOLTIP),
            e$ = (0, D.c)(r.C.PREMIUM_TAB_POPOVER),
            [eQ, eX] = (0, m.Cc)(
                null != eq && "premiumTab" === eq.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eq?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eZ, eJ] = (0, m.Cc)(
                null != e$ && "premiumTabPopover" === e$.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                e$?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e0, e1] = (0, m.Cc)(eO ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ev ?? "", void 0, !0),
            e7 =
                null != ez &&
                "premiumTabTooltip" === ez.properties.properties.oneofKind &&
                eQ === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            e6 = eD && eW === o.M.L_3PP_NITRO_TOOLTIP,
            e9 = eM && eW === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === T &&
                    (null != eF && eY(z.i.AUTO_DISMISS),
                    null != eW && eK(z.i.AUTO_DISMISS),
                    null != eQ && eX(z.i.AUTO_DISMISS),
                    null != e0 && e1(z.i.AUTO_DISMISS),
                    null != eZ && eJ(z.i.AUTO_DISMISS));
            }, [eY, T, eF, eK, eW, eQ, eX, e0, e1, eZ, eJ]),
            !Q({ selected: T }))
        )
            return null;
        let e5 = () => {
            eG === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ek(z.i.TAKE_ACTION),
                f.default.track(q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ei }),
                null != eF && eY(z.i.USER_DISMISS),
                null != eQ && eX(z.i.USER_DISMISS),
                (eW === o.M.PREMIUM_GROUP_POPOVER || eW === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    eK(z.i.USER_DISMISS),
                eW === o.M.L_3PP_NITRO_TOOLTIP && eK(z.i.USER_DISMISS),
                eW === o.M.L_3PP_NON_NITRO_POPOVER && eK(z.i.USER_DISMISS);
        };
        ej === K.xc.NONE ||
            ed ||
            ((n = 7),
            (t = (0, i.jsx)(y.A, {
                className: "",
                startsAt: ew,
                endsAt: eU,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e2 = eW === o.M.PREMIUM_GROUP_POPOVER || eW === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            e3 = eA && e2;
        if (e3) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != eq && "premiumTab" === eq.properties.properties.oneofKind)
            (t = (0, i.jsx)(U.A, {
                componentId: eq.id,
                badgeCopy: eq.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eq.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eQ !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (n = 9);
        else if (ec) (t = (0, i.jsx)(w.A, {})), (n = 0);
        else if (eu) {
            let e = (0, k.ZR)();
            (t = (0, i.jsx)(H.MA, {
                isTabSelected: T,
                badgeCopy: $.intl.string($.t.OS9KPu),
                offerExpiresAt: !0 === e ? er?.expires_at : null,
            })),
                (n = 4);
        } else
            eF === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (e5 = () => {
                      f.default.track(q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ei }),
                          eY(z.i.USER_DISMISS);
                  }))
                : ed
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: $.intl.string($.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != eh
                    ? ((t = (0, i.jsx)(W.A, { copy: eh, showStars: !1 })), (n = 1))
                    : null != es
                      ? ((t = (0, i.jsx)(H.fY, { userDiscount: es, isTabSelected: T, includesAmountOff: !1 })), (n = 3))
                      : null == er || eV
                        ? eR
                            ? ((t = (0, i.jsx)(B.A, { isSelected: T, discountOffer: eo })), (n = 8))
                            : (ex && eW === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eL && eW === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eO && e0 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : e6
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : e9 && ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                        : ((t = (0, i.jsx)(H.Ag, { trialOffer: er, isTabSelected: T })), (n = 4));
        e_ &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: $.intl.string($.t.RDE0Sc) }, variant: "expressive" })),
            (e5 = () => {
                f.default.track(q.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: ei }), (0, k.ne)(em);
            }),
            (n = 6));
        let e4 = Y.L.NONE;
        eZ === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (e4 = Y.L.MARKETING_MOMENT_POPOVER)
            : eR && eW === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (e4 = Y.L.CHURN_DISCOUNT)
              : e3 && !eN
                ? (e4 = Y.L.PREMIUM_GROUP)
                : e3 && eN
                  ? (e4 = Y.L.PREMIUM_GROUP_TOOLTIP)
                  : ex && eW === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (e4 = Y.L.ORBS_UPSELL)
                    : eL && eW === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (e4 = Y.L.ORBS_INTRO)
                      : eO && e0 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (e4 = Y.L.ORBS_DROP)
                        : e7
                          ? (e4 = Y.L.TOOLTIP)
                          : e6
                            ? (e4 = Y.L.L_PREMIUM_SUB_TOOLTIP)
                            : e9
                              ? (e4 = Y.L.L_UPSELL)
                              : ed && (e4 = Y.L.REVERSE_TRIAL);
        let e8 = (0, i.jsx)(u.z9, {
            listItemRef: X,
            selected: T,
            route: Z,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: ea ? $.intl.string($.t["4gwVVn"]) : $.intl.string($.t.Ipxkog) }),
            locationState: J,
            onClick: () => {
                if (e6) {
                    let e = new URLSearchParams({ [O.W]: b.LOGITECH_3PP_CARD_ID }).toString();
                    (0, p.pX)(Z.includes("?") ? `${Z}&${e}` : `${Z}?${e}`);
                }
                e5();
            },
            ...ee,
            ...el,
            children: t,
        });
        return (0, i.jsx)(Y.H, {
            popoverType: e4,
            targetElementRef: X,
            churnDiscountOffer: eo,
            premiumSubscription: en,
            receivesUpdatedUpsellPopover: eI,
            orbsRewardAmount: ef,
            lastGrantedRewardAmount: ey,
            dismissCoachMark: eK,
            dismissOrbsDropPopover: e1,
            dismissMarketingPopover: eJ,
            fpEndsAt: eU,
            children: e8,
        });
    };
