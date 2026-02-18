n.d(t, { P: () => en, o: () => ei }), n(321073);
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
    m = n(826673),
    p = n(379848),
    g = n(895944),
    E = n(649032),
    I = n(26508),
    f = n(287809),
    C = n(166403),
    T = n(954571),
    N = n(927578),
    S = n(683760),
    x = n(40185),
    v = n(851746),
    y = n(637073),
    b = n(377168),
    O = n(288349),
    L = n(131168),
    R = n(422936),
    P = n(234419),
    j = n(549996),
    D = n(612669),
    M = n(768569),
    w = n(603488),
    U = n(282077),
    G = n(385327),
    k = n(727949),
    V = n(164554),
    B = n(305498),
    H = n(909255),
    F = n(328717),
    Y = n(953062),
    W = n(105390),
    q = n(173522),
    K = n(796878),
    z = n(156393),
    $ = n(513570),
    Q = n(221688),
    X = n(622037),
    Z = n(788868),
    J = n(652215),
    ee = n(49999),
    et = n(985018);
let en = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            i = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            r = (0, P.V)(),
            l = (0, R.O)(),
            a = (0, x.cg)(),
            o = (0, $.H)(),
            d = (0, N.Of)(n, i),
            c = (0, s.bG)([S.A], () => S.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    ei = (e) => {
        let t,
            n,
            S,
            { selected: ei, nitroTabButtonRef: er, route: el, locationState: ea, ...es } = e,
            eo = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            ed = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            ec = (0, N.Of)(eo, ed),
            eu = (0, N.YE)(eo, Z.PremiumTypes.TIER_2),
            eA = (0, l.rm)("nitro"),
            eh = (0, P.V)(),
            e_ = (0, R.O)(),
            em = (0, L.p)(),
            ep = (0, y.d)(),
            eg = (0, x.cg)(),
            eE = (0, k.NF)({ trialOffer: eh }),
            eI = (0, D.bf)(),
            ef = (0, $.H)(),
            eC = (0, k.Tp)(),
            eT = (0, s.bG)([v.A], () => v.A.getReminderStateId()),
            eN = (0, G.c7)(),
            eS = (0, I.DK)(E.W.NITRO, "NitroTabButton"),
            ex = !(0, N.TW)(eo) && eS,
            ev = (0, s.bG)([g.A], () => g.A.getRewardForProgram(E.W.NITRO)),
            ey = ev?.last_granted_reward,
            eb = ev?.last_granted_reward_amount,
            eO = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eL = eu && eS && null != ey && null != eb && !eO,
            eR = eu && eS && !eL && null != ev,
            eP = (0, Q.gr)(),
            ej = null != em && null != ed && ed.status === J.Dmq.CANCELED,
            { fractionalState: eD, startsAt: eM, endsAt: ew } = (0, h.A)({ forceFetch: !0 }),
            [eU, eG] = (0, p.Wl)(eD !== Z.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eM.valueOf(),
                cooldownDurationMs: 0,
            }),
            ek = (0, b.A)({ location: "NitroTabButton" }),
            eV = eh?.trial_id === Z.Dw,
            eB = [],
            eH = [];
        (0, _.Tc)() &&
            (eN && eB.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            eg && eB.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            ek && eB.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            ep && eB.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eF, eY] = (0, p.kn)(eB, void 0, !0);
        ej && eH.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eI && eH.push(o.M.PREMIUM_GROUP_POPOVER),
            ex && eH.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eR && eH.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eW, eq] = (0, p.kn)(eH, void 0, !0),
            eK = (0, j.c)(a.C.PREMIUM_TAB),
            ez = (0, j.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [e$, eQ] = (0, p.Cc)(
                null != eK && "premiumTab" === eK.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eK?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eX, eZ] = (0, p.Cc)(eL ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ey ?? "", void 0, !0),
            eJ =
                null != ez &&
                "premiumTabTooltip" === ez.properties.properties.oneofKind &&
                e$ === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === ei && null != eF && eY(ee.i.AUTO_DISMISS),
                    !0 === ei && null != eW && eq(ee.i.AUTO_DISMISS),
                    !0 === ei && null != e$ && eQ(ee.i.AUTO_DISMISS),
                    !0 === ei && null != eX && eZ(ee.i.AUTO_DISMISS);
            }, [eY, ei, eF, eq, eW, e$, eQ, eX, eZ]),
            !en({ selected: ei }))
        )
            return null;
        let e0 = () => {
            eU === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eG(ee.i.TAKE_ACTION),
                T.default.track(J.HAw.NITRO_TAB_VISITED, { badge_decorator: S, has_premium: ec }),
                null != eF && eY(ee.i.USER_DISMISS),
                null != e$ && eQ(ee.i.USER_DISMISS),
                eW === o.M.PREMIUM_GROUP_POPOVER && eq(ee.i.USER_DISMISS);
        };
        eD === Z.xc.NONE ||
            ep ||
            ((S = 7),
            (n = (0, i.jsx)(O.A, {
                className: "",
                startsAt: eM,
                endsAt: ew,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e1 = eI && eW === o.M.PREMIUM_GROUP_POPOVER;
        if (e1) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (S = 10);
        else if (null != eK && "premiumTab" === eK.properties.properties.oneofKind)
            (n = (0, i.jsx)(U.A, {
                componentId: eK.id,
                badgeCopy: eK.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eK.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: e$ !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (S = 9);
        else if (eg) (n = (0, i.jsx)(w.A, {})), (S = 0);
        else if (eE) {
            let e = (0, k.ZR)();
            (n = (0, i.jsx)(W.MA, {
                isTabSelected: ei,
                badgeCopy: et.intl.string(et.t.OS9KPu),
                offerExpiresAt: !0 === e ? eh?.expires_at : null,
            })),
                (S = 4);
        } else
            eF === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (S = 4),
                  (e0 = () => {
                      T.default.track(J.HAw.NITRO_TAB_VISITED, { badge_decorator: S, has_premium: ec }),
                          eY(ee.i.USER_DISMISS);
                  }))
                : eF === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, i.jsx)(W.MA, {
                        isTabSelected: ei,
                        badgeCopy: et.intl.string(et.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (S = 2))
                  : ep
                    ? ((n = (0, i.jsx)(z.d, { expiresAt: ew })), (S = 4))
                    : null != ef
                      ? ((n = (0, i.jsx)(X.A, { copy: ef, showStars: !1 })), (S = 1))
                      : null != e_
                        ? ((n = (0, i.jsx)(W.fY, { userDiscount: e_, isTabSelected: ei, includesAmountOff: !1 })),
                          (S = 3))
                        : null == eh || eV
                          ? eP
                              ? ((n = (0, i.jsx)(q.F, {
                                    isSelected: ei,
                                    onSelect: () =>
                                        (0, m.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: ee.i.TAKE_ACTION,
                                        }),
                                })),
                                (S = 6))
                              : ej
                                ? ((n = (0, i.jsx)(Y.A, { isSelected: ei, discountOffer: em })), (S = 8))
                                : (ex && eW === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                    (eR && eW === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                  ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (S = 2))
                                  : eL &&
                                    eX === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (S = 2))
                          : ((n = (0, i.jsx)(W.Ag, { trialOffer: eh, isTabSelected: ei })), (S = 4));
        eC &&
            ((n = (0, i.jsx)(W.MA, {
                isTabSelected: ei,
                badgeCopy: et.intl.string(et.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (S = 4),
            (e0 = () => {
                T.default.track(J.HAw.NITRO_TAB_VISITED, { badge_decorator: S, has_premium: ec }), (0, k.ne)(eT);
            }));
        let e7 = (0, i.jsx)(u.z9, {
            listItemRef: er,
            selected: ei,
            route: el,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: eu ? et.intl.string(et.t["4gwVVn"]) : et.intl.string(et.t.Ipxkog) }),
            locationState: ea,
            onClick: e0,
            ...es,
            ...eA,
            className: t,
            children: n,
        });
        return eP
            ? (0, i.jsx)(q.T, { children: e7 })
            : ej && eW === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === S
              ? (0, i.jsx)(F.A, {
                    targetElementRef: er,
                    discountOffer: em,
                    premiumSubscription: ed,
                    dismissCoachmark: eq,
                    children: e7,
                })
              : e1
                ? (0, i.jsx)(M.p, { targetElementRef: er, dismissPopover: eq, children: e7 })
                : ex && eW === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, i.jsx)(H.A, { targetElementRef: er, dismissPopover: eq, children: e7 })
                  : eR && eW === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                    ? (0, i.jsx)(V.A, { targetElementRef: er, dismissPopover: eq, children: e7 })
                    : eL && eX === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                      ? (0, i.jsx)(B.A, {
                            targetElementRef: er,
                            dismissPopover: eZ,
                            lastGrantedRewardAmount: eb,
                            children: e7,
                        })
                      : eJ
                        ? (0, i.jsx)(K.A, { children: e7 })
                        : e7;
    };
