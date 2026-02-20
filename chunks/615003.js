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
    m = n(379848),
    p = n(895944),
    g = n(649032),
    E = n(26508),
    I = n(287809),
    f = n(166403),
    C = n(954571),
    T = n(927578),
    N = n(683760),
    S = n(40185),
    x = n(851746),
    v = n(637073),
    y = n(377168),
    b = n(288349),
    O = n(131168),
    L = n(422936),
    R = n(234419),
    P = n(549996),
    j = n(612669),
    D = n(768569),
    M = n(603488),
    w = n(282077),
    U = n(385327),
    G = n(727949),
    k = n(164554),
    V = n(305498),
    B = n(909255),
    H = n(328717),
    F = n(953062),
    Y = n(105390),
    W = n(796878),
    q = n(156393),
    z = n(513570),
    K = n(622037),
    $ = n(788868),
    Q = n(652215),
    X = n(49999),
    Z = n(985018);
let J = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
            i = (0, s.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            r = (0, R.V)(),
            l = (0, L.O)(),
            a = (0, S.cg)(),
            o = (0, z.H)(),
            d = (0, T.Of)(n, i),
            c = (0, s.bG)([N.A], () => N.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    ee = (e) => {
        let t,
            n,
            N,
            { selected: ee, nitroTabButtonRef: et, route: en, locationState: ei, ...er } = e,
            el = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
            ea = (0, s.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            es = (0, T.Of)(el, ea),
            eo = (0, T.YE)(el, $.PremiumTypes.TIER_2),
            ed = (0, l.rm)("nitro"),
            ec = (0, R.V)(),
            eu = (0, L.O)(),
            eA = (0, O.p)(),
            eh = (0, v.d)(),
            e_ = (0, S.cg)(),
            em = (0, G.NF)({ trialOffer: ec }),
            ep = (0, j.bf)(),
            eg = (0, z.H)(),
            eE = (0, G.Tp)(),
            eI = (0, s.bG)([x.A], () => x.A.getReminderStateId()),
            ef = (0, U.c7)(),
            eC = (0, E.DK)(g.W.NITRO, "NitroTabButton"),
            eT = !(0, T.TW)(el) && eC,
            eN = (0, s.bG)([p.A], () => p.A.getRewardForProgram(g.W.NITRO)),
            eS = eN?.last_granted_reward,
            ex = eN?.last_granted_reward_amount,
            ev = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ey = eo && eC && null != eS && null != ex && !ev,
            eb = eo && eC && !ey && null != eN,
            eO = null != eA && null != ea && ea.status === Q.Dmq.CANCELED,
            { fractionalState: eL, startsAt: eR, endsAt: eP } = (0, h.A)({ forceFetch: !0 }),
            [ej, eD] = (0, m.Wl)(eL !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eR.valueOf(),
                cooldownDurationMs: 0,
            }),
            eM = (0, y.A)({ location: "NitroTabButton" }),
            ew = ec?.trial_id === $.Dw,
            eU = [],
            eG = [];
        (0, _.Tc)() &&
            (ef && eU.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            e_ && eU.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eM && eU.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            eh && eU.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [ek, eV] = (0, m.kn)(eU, void 0, !0);
        eO && eG.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            ep && eG.push(o.M.PREMIUM_GROUP_POPOVER),
            eT && eG.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eb && eG.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eB, eH] = (0, m.kn)(eG, void 0, !0),
            eF = (0, P.c)(a.C.PREMIUM_TAB),
            eY = (0, P.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [eW, eq] = (0, m.Cc)(
                null != eF && "premiumTab" === eF.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eF?.promotionId ?? "",
                void 0,
                !0,
            ),
            [ez, eK] = (0, m.Cc)(ey ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, eS ?? "", void 0, !0),
            e$ =
                null != eY &&
                "premiumTabTooltip" === eY.properties.properties.oneofKind &&
                eW === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === ee && null != ek && eV(X.i.AUTO_DISMISS),
                    !0 === ee && null != eB && eH(X.i.AUTO_DISMISS),
                    !0 === ee && null != eW && eq(X.i.AUTO_DISMISS),
                    !0 === ee && null != ez && eK(X.i.AUTO_DISMISS);
            }, [eV, ee, ek, eH, eB, eW, eq, ez, eK]),
            !J({ selected: ee }))
        )
            return null;
        let eQ = () => {
            ej === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eD(X.i.TAKE_ACTION),
                C.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: N, has_premium: es }),
                null != ek && eV(X.i.USER_DISMISS),
                null != eW && eq(X.i.USER_DISMISS),
                eB === o.M.PREMIUM_GROUP_POPOVER && eH(X.i.USER_DISMISS);
        };
        eL === $.xc.NONE ||
            eh ||
            ((N = 7),
            (n = (0, i.jsx)(b.A, {
                className: "",
                startsAt: eR,
                endsAt: eP,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eX = ep && eB === o.M.PREMIUM_GROUP_POPOVER;
        if (eX) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (N = 10);
        else if (null != eF && "premiumTab" === eF.properties.properties.oneofKind)
            (n = (0, i.jsx)(w.A, {
                componentId: eF.id,
                badgeCopy: eF.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eF.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eW !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (N = 9);
        else if (e_) (n = (0, i.jsx)(M.A, {})), (N = 0);
        else if (em) {
            let e = (0, G.ZR)();
            (n = (0, i.jsx)(Y.MA, {
                isTabSelected: ee,
                badgeCopy: Z.intl.string(Z.t.OS9KPu),
                offerExpiresAt: !0 === e ? ec?.expires_at : null,
            })),
                (N = 4);
        } else
            ek === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (N = 4),
                  (eQ = () => {
                      C.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: N, has_premium: es }),
                          eV(X.i.USER_DISMISS);
                  }))
                : ek === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, i.jsx)(Y.MA, {
                        isTabSelected: ee,
                        badgeCopy: Z.intl.string(Z.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (N = 2))
                  : eh
                    ? ((n = (0, i.jsx)(q.d, { expiresAt: eP })), (N = 4))
                    : null != eg
                      ? ((n = (0, i.jsx)(K.A, { copy: eg, showStars: !1 })), (N = 1))
                      : null != eu
                        ? ((n = (0, i.jsx)(Y.fY, { userDiscount: eu, isTabSelected: ee, includesAmountOff: !1 })),
                          (N = 3))
                        : null == ec || ew
                          ? eO
                              ? ((n = (0, i.jsx)(F.A, { isSelected: ee, discountOffer: eA })), (N = 8))
                              : (eT && eB === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                  (eb && eB === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (N = 2))
                                : ey &&
                                  ez === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                  ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (N = 2))
                          : ((n = (0, i.jsx)(Y.Ag, { trialOffer: ec, isTabSelected: ee })), (N = 4));
        eE &&
            ((n = (0, i.jsx)(Y.MA, { isTabSelected: ee, badgeCopy: Z.intl.string(Z.t.RDE0Sc), offerExpiresAt: null })),
            (eQ = () => {
                C.default.track(Q.HAw.NITRO_TAB_VISITED, { badge_decorator: N, has_premium: es }), (0, G.ne)(eI);
            }),
            (N = 6));
        let eZ = (0, i.jsx)(u.z9, {
            listItemRef: et,
            selected: ee,
            route: en,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: eo ? Z.intl.string(Z.t["4gwVVn"]) : Z.intl.string(Z.t.Ipxkog) }),
            locationState: ei,
            onClick: eQ,
            ...er,
            ...ed,
            className: t,
            children: n,
        });
        return eO && eB === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === N
            ? (0, i.jsx)(H.A, {
                  targetElementRef: et,
                  discountOffer: eA,
                  premiumSubscription: ea,
                  dismissCoachmark: eH,
                  children: eZ,
              })
            : eX
              ? (0, i.jsx)(D.p, { targetElementRef: et, dismissPopover: eH, children: eZ })
              : eT && eB === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                ? (0, i.jsx)(B.A, { targetElementRef: et, dismissPopover: eH, children: eZ })
                : eb && eB === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                  ? (0, i.jsx)(k.A, { targetElementRef: et, dismissPopover: eH, children: eZ })
                  : ey && ez === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                    ? (0, i.jsx)(V.A, {
                          targetElementRef: et,
                          dismissPopover: eK,
                          lastGrantedRewardAmount: ex,
                          children: eZ,
                      })
                    : e$
                      ? (0, i.jsx)(W.A, { children: eZ })
                      : eZ;
    };
