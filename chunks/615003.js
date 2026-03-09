n.d(t, { P: () => J, o: () => ee }), n(321073);
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
    x = n(377168),
    v = n(288349),
    y = n(131168),
    b = n(422936),
    O = n(234419),
    L = n(549996),
    R = n(612669),
    P = n(768569),
    j = n(603488),
    D = n(282077),
    M = n(385327),
    w = n(727949),
    U = n(84483),
    G = n(164554),
    k = n(305498),
    V = n(909255),
    B = n(374079),
    H = n(328717),
    F = n(953062),
    Y = n(105390),
    W = n(796878),
    q = n(156393),
    K = n(513570),
    z = n(622037),
    $ = n(788868),
    Q = n(652215),
    X = n(49999),
    Z = n(985018);
let J = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            r = (0, O.V)(),
            l = (0, b.O)(),
            a = (0, T.cg)(),
            o = (0, K.H)(),
            d = (0, f.Of)(n, i),
            c = (0, s.bG)([C.A], () => C.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    ee = (e) => {
        let t,
            n,
            C,
            { selected: ee, nitroTabButtonRef: et, route: en, locationState: ei, ...er } = e,
            el = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            ea = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            es = (0, f.Of)(el, ea),
            eo = (0, f.YE)(el, $.PremiumTypes.TIER_2),
            ed = (0, l.rm)("nitro"),
            ec = (0, O.V)(),
            eu = (0, b.O)(),
            eA = (0, y.p)(),
            eh = (0, S.d)(),
            e_ = (0, T.cg)(),
            em = (0, w.NF)({ trialOffer: ec }),
            eg = (0, R.bf)(),
            ep = (0, K.H)(),
            eE = (0, w.Tp)(),
            eI = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            ef = (0, M.c7)(),
            { programReward: eC, isEligible: eT } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eN, orbsRewardAmount: eS } = (0, U.uX)("NitroTabButton"),
            ex = !(0, f.TW)(el) && eT,
            ev = eC?.last_granted_reward,
            ey = eC?.last_granted_reward_amount,
            eb = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eO = eo && eT && null != ev && null != ey && !eb,
            eL = eo && eT && !eO && null != eC,
            eR = null != eA && null != ea && ea.status === Q.Dmq.CANCELED,
            { fractionalState: eP, startsAt: ej, endsAt: eD } = (0, h.A)({ forceFetch: !0 }),
            [eM, ew] = (0, m.Wl)(eP !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ej.valueOf(),
                cooldownDurationMs: 0,
            }),
            eU = (0, x.A)({ location: "NitroTabButton" }),
            eG = ec?.trial_id === $.Dw,
            ek = [],
            eV = [];
        (0, _.Tc)() &&
            (ef && ek.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            e_ && ek.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eU && ek.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eh && ek.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eB, eH] = (0, m.kn)(ek, void 0, !0);
        eR && eV.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eg && eV.push(o.M.PREMIUM_GROUP_POPOVER),
            ex && eV.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eL && eV.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eF, eY] = (0, m.kn)(eV, void 0, !0),
            eW = (0, L.c)(a.C.PREMIUM_TAB),
            eq = (0, L.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [eK, ez] = (0, m.Cc)(
                null != eW && "premiumTab" === eW.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eW?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e$, eQ] = (0, m.Cc)(eO ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ev ?? "", void 0, !0),
            eX =
                null != eq &&
                "premiumTabTooltip" === eq.properties.properties.oneofKind &&
                eK === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === ee && null != eB && eH(X.i.AUTO_DISMISS),
                    !0 === ee && null != eF && eY(X.i.AUTO_DISMISS),
                    !0 === ee && null != eK && ez(X.i.AUTO_DISMISS),
                    !0 === ee && null != e$ && eQ(X.i.AUTO_DISMISS);
            }, [eH, ee, eB, eY, eF, eK, ez, e$, eQ]),
            !J({ selected: ee }))
        )
            return null;
        let eZ = () => {
            eM === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ew(X.i.TAKE_ACTION),
                I.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: es }),
                null != eB && eH(X.i.USER_DISMISS),
                null != eK && ez(X.i.USER_DISMISS),
                eF === o.M.PREMIUM_GROUP_POPOVER && eY(X.i.USER_DISMISS);
        };
        eP === $.xc.NONE ||
            eh ||
            ((C = 7),
            (n = (0, i.jsx)(v.A, {
                className: "",
                startsAt: ej,
                endsAt: eD,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eJ = eg && eF === o.M.PREMIUM_GROUP_POPOVER;
        if (eJ) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 10);
        else if (null != eW && "premiumTab" === eW.properties.properties.oneofKind)
            (n = (0, i.jsx)(D.A, {
                componentId: eW.id,
                badgeCopy: eW.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eW.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eK !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (C = 9);
        else if (e_) (n = (0, i.jsx)(j.A, {})), (C = 0);
        else if (em) {
            let e = (0, w.ZR)();
            (n = (0, i.jsx)(Y.MA, {
                isTabSelected: ee,
                badgeCopy: Z.intl.string(Z.t.OS9KPu),
                offerExpiresAt: !0 === e ? ec?.expires_at : null,
            })),
                (C = 4);
        } else
            eB === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (C = 4),
                  (eZ = () => {
                      I.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: es }),
                          eH(X.i.USER_DISMISS);
                  }))
                : eB === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, i.jsx)(Y.MA, {
                        isTabSelected: ee,
                        badgeCopy: Z.intl.string(Z.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (C = 2))
                  : eh
                    ? ((n = (0, i.jsx)(q.d, { expiresAt: eD })), (C = 4))
                    : null != ep
                      ? ((n = (0, i.jsx)(z.A, { copy: ep, showStars: !1 })), (C = 1))
                      : null != eu
                        ? ((n = (0, i.jsx)(Y.fY, { userDiscount: eu, isTabSelected: ee, includesAmountOff: !1 })),
                          (C = 3))
                        : null == ec || eG
                          ? eR
                              ? ((n = (0, i.jsx)(F.A, { isSelected: ee, discountOffer: eA })), (C = 8))
                              : (ex && eF === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                  (eL && eF === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 2))
                                : eO &&
                                  e$ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                  ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 2))
                          : ((n = (0, i.jsx)(Y.Ag, { trialOffer: ec, isTabSelected: ee })), (C = 4));
        eE &&
            ((n = (0, i.jsx)(c.Exy, { type: { text: Z.intl.string(Z.t.RDE0Sc) }, variant: "expressive" })),
            (eZ = () => {
                I.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: es }), (0, w.ne)(eI);
            }),
            (C = 6));
        let e0 = (0, i.jsx)(u.z9, {
            listItemRef: et,
            selected: ee,
            route: en,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: eo ? Z.intl.string(Z.t["4gwVVn"]) : Z.intl.string(Z.t.Ipxkog) }),
            locationState: ei,
            onClick: eZ,
            ...er,
            ...ed,
            className: t,
            children: n,
        });
        return eR && eF === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === C
            ? (0, i.jsx)(H.A, {
                  targetElementRef: et,
                  discountOffer: eA,
                  premiumSubscription: ea,
                  dismissCoachmark: eY,
                  children: e0,
              })
            : eJ
              ? (0, i.jsx)(P.p, { targetElementRef: et, dismissPopover: eY, children: e0 })
              : ex && eF === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                ? eN
                    ? (0, i.jsx)(B.A, { targetElementRef: et, dismissPopover: eY, numOrbs: eS, children: e0 })
                    : (0, i.jsx)(V.A, { targetElementRef: et, dismissPopover: eY, children: e0 })
                : eL && eF === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                  ? (0, i.jsx)(G.A, { targetElementRef: et, dismissPopover: eY, children: e0 })
                  : eO && e$ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, i.jsx)(k.A, {
                          targetElementRef: et,
                          dismissPopover: eQ,
                          lastGrantedRewardAmount: ey,
                          children: e0,
                      })
                    : eX
                      ? (0, i.jsx)(W.A, { children: e0 })
                      : e0;
    };
