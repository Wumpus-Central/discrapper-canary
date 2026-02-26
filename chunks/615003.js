n.d(t, { P: () => X, o: () => Z }), n(321073);
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
    m = n(379848),
    p = n(320118),
    g = n(287809),
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
    U = n(164554),
    G = n(305498),
    k = n(909255),
    V = n(328717),
    B = n(953062),
    H = n(105390),
    F = n(796878),
    Y = n(156393),
    q = n(513570),
    W = n(622037),
    K = n(788868),
    z = n(652215),
    $ = n(49999),
    Q = n(985018);
let X = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
            i = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            r = (0, O.V)(),
            l = (0, b.O)(),
            a = (0, T.cg)(),
            o = (0, q.H)(),
            d = (0, f.Of)(n, i),
            c = (0, s.bG)([C.A], () => C.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    Z = (e) => {
        let t,
            n,
            C,
            { selected: Z, nitroTabButtonRef: J, route: ee, locationState: et, ...en } = e,
            ei = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
            er = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            el = (0, f.Of)(ei, er),
            ea = (0, f.YE)(ei, K.PremiumTypes.TIER_2),
            es = (0, l.rm)("nitro"),
            eo = (0, O.V)(),
            ed = (0, b.O)(),
            ec = (0, y.p)(),
            eu = (0, S.d)(),
            eA = (0, T.cg)(),
            eh = (0, w.NF)({ trialOffer: eo }),
            e_ = (0, R.bf)(),
            em = (0, q.H)(),
            ep = (0, w.Tp)(),
            eg = (0, s.bG)([N.A], () => N.A.getReminderStateId()),
            eE = (0, M.c7)(),
            { programReward: eI, isEligible: ef } = (0, p.F)({ location: "NitroTabButton" }),
            eC = !(0, f.TW)(ei) && ef,
            eT = eI?.last_granted_reward,
            eN = eI?.last_granted_reward_amount,
            eS = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ex = ea && ef && null != eT && null != eN && !eS,
            ev = ea && ef && !ex && null != eI,
            ey = null != ec && null != er && er.status === z.Dmq.CANCELED,
            { fractionalState: eb, startsAt: eO, endsAt: eL } = (0, h.A)({ forceFetch: !0 }),
            [eR, eP] = (0, m.Wl)(eb !== K.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eO.valueOf(),
                cooldownDurationMs: 0,
            }),
            ej = (0, x.A)({ location: "NitroTabButton" }),
            eD = eo?.trial_id === K.Dw,
            eM = [],
            ew = [];
        (0, _.Tc)() &&
            (eE && eM.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            eA && eM.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            ej && eM.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eu && eM.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eU, eG] = (0, m.kn)(eM, void 0, !0);
        ey && ew.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            e_ && ew.push(o.M.PREMIUM_GROUP_POPOVER),
            eC && ew.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ev && ew.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [ek, eV] = (0, m.kn)(ew, void 0, !0),
            eB = (0, L.c)(a.C.PREMIUM_TAB),
            eH = (0, L.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [eF, eY] = (0, m.Cc)(
                null != eB && "premiumTab" === eB.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eB?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eq, eW] = (0, m.Cc)(ex ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eT ?? "", void 0, !0),
            eK =
                null != eH &&
                "premiumTabTooltip" === eH.properties.properties.oneofKind &&
                eF === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === Z && null != eU && eG($.i.AUTO_DISMISS),
                    !0 === Z && null != ek && eV($.i.AUTO_DISMISS),
                    !0 === Z && null != eF && eY($.i.AUTO_DISMISS),
                    !0 === Z && null != eq && eW($.i.AUTO_DISMISS);
            }, [eG, Z, eU, eV, ek, eF, eY, eq, eW]),
            !X({ selected: Z }))
        )
            return null;
        let ez = () => {
            eR === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eP($.i.TAKE_ACTION),
                I.default.track(z.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: el }),
                null != eU && eG($.i.USER_DISMISS),
                null != eF && eY($.i.USER_DISMISS),
                ek === o.M.PREMIUM_GROUP_POPOVER && eV($.i.USER_DISMISS);
        };
        eb === K.xc.NONE ||
            eu ||
            ((C = 7),
            (n = (0, i.jsx)(v.A, {
                className: "",
                startsAt: eO,
                endsAt: eL,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e$ = e_ && ek === o.M.PREMIUM_GROUP_POPOVER;
        if (e$) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 10);
        else if (null != eB && "premiumTab" === eB.properties.properties.oneofKind)
            (n = (0, i.jsx)(D.A, {
                componentId: eB.id,
                badgeCopy: eB.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eB.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eF !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (C = 9);
        else if (eA) (n = (0, i.jsx)(j.A, {})), (C = 0);
        else if (eh) {
            let e = (0, w.ZR)();
            (n = (0, i.jsx)(H.MA, {
                isTabSelected: Z,
                badgeCopy: Q.intl.string(Q.t.OS9KPu),
                offerExpiresAt: !0 === e ? eo?.expires_at : null,
            })),
                (C = 4);
        } else
            eU === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (C = 4),
                  (ez = () => {
                      I.default.track(z.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: el }),
                          eG($.i.USER_DISMISS);
                  }))
                : eU === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, i.jsx)(H.MA, {
                        isTabSelected: Z,
                        badgeCopy: Q.intl.string(Q.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (C = 2))
                  : eu
                    ? ((n = (0, i.jsx)(Y.d, { expiresAt: eL })), (C = 4))
                    : null != em
                      ? ((n = (0, i.jsx)(W.A, { copy: em, showStars: !1 })), (C = 1))
                      : null != ed
                        ? ((n = (0, i.jsx)(H.fY, { userDiscount: ed, isTabSelected: Z, includesAmountOff: !1 })),
                          (C = 3))
                        : null == eo || eD
                          ? ey
                              ? ((n = (0, i.jsx)(B.A, { isSelected: Z, discountOffer: ec })), (C = 8))
                              : (eC && ek === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                  (ev && ek === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 2))
                                : ex &&
                                  eq === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                  ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (C = 2))
                          : ((n = (0, i.jsx)(H.Ag, { trialOffer: eo, isTabSelected: Z })), (C = 4));
        ep &&
            ((n = (0, i.jsx)(H.MA, { isTabSelected: Z, badgeCopy: Q.intl.string(Q.t.RDE0Sc), offerExpiresAt: null })),
            (ez = () => {
                I.default.track(z.HAw.NITRO_TAB_VISITED, { badge_decorator: C, has_premium: el }), (0, w.ne)(eg);
            }),
            (C = 6));
        let eQ = (0, i.jsx)(u.z9, {
            listItemRef: J,
            selected: Z,
            route: ee,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: ea ? Q.intl.string(Q.t["4gwVVn"]) : Q.intl.string(Q.t.Ipxkog) }),
            locationState: et,
            onClick: ez,
            ...en,
            ...es,
            className: t,
            children: n,
        });
        return ey && ek === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === C
            ? (0, i.jsx)(V.A, {
                  targetElementRef: J,
                  discountOffer: ec,
                  premiumSubscription: er,
                  dismissCoachmark: eV,
                  children: eQ,
              })
            : e$
              ? (0, i.jsx)(P.p, { targetElementRef: J, dismissPopover: eV, children: eQ })
              : eC && ek === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                ? (0, i.jsx)(k.A, { targetElementRef: J, dismissPopover: eV, children: eQ })
                : ev && ek === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                  ? (0, i.jsx)(U.A, { targetElementRef: J, dismissPopover: eV, children: eQ })
                  : ex && eq === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, i.jsx)(G.A, {
                          targetElementRef: J,
                          dismissPopover: eW,
                          lastGrantedRewardAmount: eN,
                          children: eQ,
                      })
                    : eK
                      ? (0, i.jsx)(F.A, { children: eQ })
                      : eQ;
    };
