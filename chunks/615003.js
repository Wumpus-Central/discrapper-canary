n.d(t, { P: () => Z, o: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(837381),
    a = n(877624),
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
    x = n(288349),
    v = n(131168),
    y = n(422936),
    b = n(234419),
    O = n(549996),
    L = n(612669),
    R = n(768569),
    P = n(603488),
    D = n(282077),
    j = n(385327),
    M = n(727949),
    w = n(84483),
    U = n(164554),
    G = n(305498),
    k = n(909255),
    V = n(374079),
    B = n(328717),
    H = n(953062),
    F = n(105390),
    Y = n(796878),
    W = n(156393),
    q = n(513570),
    z = n(622037),
    K = n(788868),
    $ = n(652215),
    Q = n(49999),
    X = n(985018);
let Z = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            r = (0, b.V)(),
            l = (0, y.O)(),
            a = (0, T.cg)(),
            o = (0, q.H)(),
            d = (0, f.Of)(n, i),
            c = (0, s.bG)([C.A], () => C.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    J = (e) => {
        let t,
            n,
            C,
            { selected: J, nitroTabButtonRef: ee, route: et, locationState: en, ...ei } = e,
            er = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            el = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            ea = (0, f.Of)(er, el),
            es = (0, f.YE)(er, K.PremiumTypes.TIER_2),
            eo = (0, l.rm)("nitro"),
            ed = (0, b.V)(),
            ec = (0, y.O)(),
            eu = (0, v.p)(),
            eA = (0, S.d)(),
            eh = (0, T.cg)(),
            e_ = (0, M.NF)({ trialOffer: ed }),
            em = (0, L.bf)(),
            eg = (0, q.H)(),
            ep = (0, M.Tp)(),
            eE = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            eI = (0, j.c7)(),
            { programReward: ef, isEligible: eC } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eT, orbsRewardAmount: eN } = (0, w.uX)("NitroTabButton"),
            eS = !(0, f.TW)(er) && eC,
            ex = ef?.last_granted_reward,
            ev = ef?.last_granted_reward_amount,
            ey = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eb = es && eC && null != ex && null != ev && !ey,
            eO = es && eC && !eb && null != ef,
            eL = null != eu && null != el && el.status === $.Dmq.CANCELED,
            { fractionalState: eR, startsAt: eP, endsAt: eD } = (0, h.A)({ forceFetch: !0 }),
            [ej, eM] = (0, m.Wl)(eR !== K.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eP.valueOf(),
                cooldownDurationMs: 0,
            }),
            ew = ed?.trial_id === K.Dw,
            eU = [],
            eG = [];
        (0, _.Tc)() &&
            (eI && eU.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            eh && eU.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eA && eU.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [ek, eV] = (0, m.kn)(eU, void 0, !0);
        eL && eG.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            em && eG.push(o.M.PREMIUM_GROUP_POPOVER),
            eS && eG.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eO && eG.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eB, eH] = (0, m.kn)(eG, void 0, !0),
            eF = (0, O.c)(a.C.PREMIUM_TAB),
            eY = (0, O.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [eW, eq] = (0, m.Cc)(
                null != eF && "premiumTab" === eF.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eF?.promotionId ?? "",
                void 0,
                !0,
            ),
            [ez, eK] = (0, m.Cc)(eb ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ex ?? "", void 0, !0),
            e$ =
                null != eY &&
                "premiumTabTooltip" === eY.properties.properties.oneofKind &&
                eW === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === J && null != ek && eV(Q.i.AUTO_DISMISS),
                    !0 === J && null != eB && eH(Q.i.AUTO_DISMISS),
                    !0 === J && null != eW && eq(Q.i.AUTO_DISMISS),
                    !0 === J && null != ez && eK(Q.i.AUTO_DISMISS);
            }, [eV, J, ek, eH, eB, eW, eq, ez, eK]),
            !Z({ selected: J }))
        )
            return null;
        let eQ = () => {
            ej === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eM(Q.i.TAKE_ACTION),
                I.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: ea }),
                null != ek && eV(Q.i.USER_DISMISS),
                null != eW && eq(Q.i.USER_DISMISS),
                eB === o.M.PREMIUM_GROUP_POPOVER && eH(Q.i.USER_DISMISS);
        };
        eR === K.xc.NONE ||
            eA ||
            ((C = 7),
            (n = (0, i.jsx)(x.A, {
                className: "",
                startsAt: eP,
                endsAt: eD,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eX = em && eB === o.M.PREMIUM_GROUP_POPOVER;
        if (eX) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 10);
        else if (null != eF && "premiumTab" === eF.properties.properties.oneofKind)
            (n = (0, i.jsx)(D.A, {
                componentId: eF.id,
                badgeCopy: eF.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eF.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eW !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (C = 9);
        else if (eh) (n = (0, i.jsx)(P.A, {})), (C = 0);
        else if (e_) {
            let e = (0, M.ZR)();
            (n = (0, i.jsx)(F.MA, {
                isTabSelected: J,
                badgeCopy: X.intl.string(X.t.OS9KPu),
                offerExpiresAt: !0 === e ? ed?.expires_at : null,
            })),
                (C = 4);
        } else
            ek === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (C = 4),
                  (eQ = () => {
                      I.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: ea }),
                          eV(Q.i.USER_DISMISS);
                  }))
                : eA
                  ? ((n = (0, i.jsx)(W.d, { expiresAt: eD })), (C = 4))
                  : null != eg
                    ? ((n = (0, i.jsx)(z.A, { copy: eg, showStars: !1 })), (C = 1))
                    : null != ec
                      ? ((n = (0, i.jsx)(F.fY, { userDiscount: ec, isTabSelected: J, includesAmountOff: !1 })), (C = 3))
                      : null == ed || ew
                        ? eL
                            ? ((n = (0, i.jsx)(H.A, { isSelected: J, discountOffer: eu })), (C = 8))
                            : (eS && eB === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eO && eB === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                              ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 2))
                              : eb &&
                                ez === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 2))
                        : ((n = (0, i.jsx)(F.Ag, { trialOffer: ed, isTabSelected: J })), (C = 4));
        ep &&
            ((n = (0, i.jsx)(c.Exy, { type: { text: X.intl.string(X.t.RDE0Sc) }, variant: "expressive" })),
            (eQ = () => {
                I.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: ea }), (0, M.ne)(eE);
            }),
            (C = 6));
        let eZ = (0, i.jsx)(u.z9, {
            listItemRef: ee,
            selected: J,
            route: et,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: es ? X.intl.string(X.t["4gwVVn"]) : X.intl.string(X.t.Ipxkog) }),
            locationState: en,
            onClick: eQ,
            ...ei,
            ...eo,
            className: t,
            children: n,
        });
        return eL && eB === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === C
            ? (0, i.jsx)(B.A, {
                  targetElementRef: ee,
                  discountOffer: eu,
                  premiumSubscription: el,
                  dismissCoachmark: eH,
                  children: eZ,
              })
            : eX
              ? (0, i.jsx)(R.p, { targetElementRef: ee, dismissPopover: eH, children: eZ })
              : eS && eB === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                ? eT
                    ? (0, i.jsx)(V.A, { targetElementRef: ee, dismissPopover: eH, numOrbs: eN, children: eZ })
                    : (0, i.jsx)(k.A, { targetElementRef: ee, dismissPopover: eH, children: eZ })
                : eO && eB === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                  ? (0, i.jsx)(U.A, { targetElementRef: ee, dismissPopover: eH, children: eZ })
                  : eb && ez === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, i.jsx)(G.A, {
                          targetElementRef: ee,
                          dismissPopover: eK,
                          lastGrantedRewardAmount: ev,
                          children: eZ,
                      })
                    : e$
                      ? (0, i.jsx)(Y.A, { children: eZ })
                      : eZ;
    };
