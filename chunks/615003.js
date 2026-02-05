n.d(t, { P: () => et, o: () => en }), n(321073);
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
    p = n(379848),
    g = n(895944),
    E = n(649032),
    f = n(287809),
    I = n(166403),
    C = n(954571),
    N = n(927578),
    T = n(683760),
    S = n(40185),
    x = n(637073),
    v = n(377168),
    b = n(288349),
    y = n(131168),
    L = n(422936),
    O = n(234419),
    R = n(549996),
    P = n(612669),
    j = n(768569),
    D = n(603488),
    w = n(282077),
    M = n(385327),
    U = n(727949),
    G = n(84483),
    k = n(164554),
    V = n(305498),
    B = n(909255),
    H = n(328717),
    F = n(953062),
    Y = n(105390),
    W = n(173522),
    q = n(796878),
    z = n(156393),
    K = n(513570),
    $ = n(221688),
    Q = n(622037),
    X = n(788868),
    Z = n(652215),
    J = n(49999),
    ee = n(985018);
let et = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            i = (0, s.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            r = (0, O.V)(),
            a = (0, L.O)(),
            l = (0, S.cg)(),
            o = (0, K.H)(),
            d = (0, N.Of)(n, i),
            c = (0, s.bG)([T.A], () => T.A.getCreatedAtOverride()),
            u = t || null != r || null != a || l || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    en = (e) => {
        let t,
            n,
            T,
            { selected: en, nitroTabButtonRef: ei, route: er, locationState: ea, ...el } = e,
            es = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            eo = (0, s.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            ed = (0, N.Of)(es, eo),
            ec = (0, N.YE)(es, X.PremiumTypes.TIER_2),
            eu = (0, a.rm)("nitro"),
            eA = (0, O.V)(),
            eh = (0, L.O)(),
            e_ = (0, y.p)(),
            em = (0, x.d)(),
            ep = (0, S.cg)(),
            eg = (0, U.NF)({ trialOffer: eA }),
            eE = (0, P.bf)(),
            ef = (0, K.H)(),
            eI = (0, U.Tp)(),
            eC = (0, M.c7)(),
            { isInTreatment: eN } = (0, G.uX)("NitroTabButton"),
            eT = !(0, N.TW)(es) && eN,
            eS = (0, s.bG)([g.A], () => g.A.getRewardForProgram(E.W.NITRO)),
            ex = eS?.last_granted_reward,
            ev = eS?.last_granted_reward_amount,
            eb = ec && eN && null != ex && null != ev,
            ey = ec && eN && !eb && null != eS,
            eL = (0, $.gr)(),
            eO = null != e_ && null != eo && eo.status === Z.Dmq.CANCELED,
            { fractionalState: eR, startsAt: eP, endsAt: ej } = (0, h.A)({ forceFetch: !0 }),
            [eD, ew] = (0, p.Wl)(eR !== X.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: eP.valueOf(),
                cooldownDurationMs: 0,
            }),
            eM = (0, v.A)({ location: "NitroTabButton" }),
            eU = eA?.trial_id === X.Dw,
            eG = [],
            ek = [];
        (0, _.Tc)() &&
            (eC && eG.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            ep && eG.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eM && eG.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            em && eG.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eV, eB] = (0, p.kn)(eG, void 0, !0);
        eO && ek.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eE && ek.push(o.M.PREMIUM_GROUP_POPOVER),
            eT && ek.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            ey && ek.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eH, eF] = (0, p.kn)(ek, void 0, !0),
            eY = (0, R.c)(l.C.PREMIUM_TAB),
            eW = (0, R.c)(l.C.PREMIUM_TAB_TOOLTIP),
            [eq, ez] = (0, p.Cc)(
                null != eY && "premiumTab" === eY.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eY?.promotionId ?? "",
                void 0,
                !0,
            ),
            [eK, e$] = (0, p.Cc)(eb ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ex ?? "", void 0, !0),
            eQ =
                null != eW &&
                "premiumTabTooltip" === eW.properties.properties.oneofKind &&
                eq === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === en && null != eV && eB(J.i.AUTO_DISMISS),
                    !0 === en && null != eH && eF(J.i.AUTO_DISMISS),
                    !0 === en && null != eq && ez(J.i.AUTO_DISMISS),
                    !0 === en && null != eK && e$(J.i.AUTO_DISMISS);
            }, [eB, en, eV, eF, eH, eq, ez, eK, e$]),
            !et({ selected: en }))
        )
            return null;
        let eX = () => {
            eD === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ew(J.i.TAKE_ACTION),
                C.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: T, has_premium: ed }),
                null != eV && eB(J.i.USER_DISMISS),
                null != eq && ez(J.i.USER_DISMISS),
                eH === o.M.PREMIUM_GROUP_POPOVER && eF(J.i.USER_DISMISS);
        };
        eR === X.xc.NONE ||
            em ||
            ((T = 7),
            (n = (0, i.jsx)(b.A, {
                className: "",
                startsAt: eP,
                endsAt: ej,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eZ = eE && eH === o.M.PREMIUM_GROUP_POPOVER;
        if (eZ) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (T = 10);
        else if (null != eY && "premiumTab" === eY.properties.properties.oneofKind)
            (n = (0, i.jsx)(w.A, {
                componentId: eY.id,
                badgeCopy: eY.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eY.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: eq !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (T = 9);
        else if (ep) (n = (0, i.jsx)(D.A, {})), (T = 0);
        else if (eg) {
            let e = (0, U.ZR)();
            (n = (0, i.jsx)(Y.MA, {
                isTabSelected: en,
                badgeCopy: ee.intl.string(ee.t.OS9KPu),
                offerExpiresAt: !0 === e ? eA?.expires_at : null,
            })),
                (T = 4);
        } else
            eV === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (T = 4),
                  (eX = () => {
                      C.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: T, has_premium: ed }),
                          eB(J.i.USER_DISMISS);
                  }))
                : eV === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, i.jsx)(Y.MA, {
                        isTabSelected: en,
                        badgeCopy: ee.intl.string(ee.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (T = 2))
                  : em
                    ? ((n = (0, i.jsx)(z.d, { expiresAt: ej })), (T = 4))
                    : null != ef
                      ? ((n = (0, i.jsx)(Q.A, { copy: ef, showStars: !1 })), (T = 1))
                      : null != eh
                        ? ((n = (0, i.jsx)(Y.fY, { userDiscount: eh, isTabSelected: en, includesAmountOff: !1 })),
                          (T = 3))
                        : null == eA || eU
                          ? eL
                              ? ((n = (0, i.jsx)(W.F, {
                                    isSelected: en,
                                    onSelect: () =>
                                        (0, m.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: J.i.TAKE_ACTION,
                                        }),
                                })),
                                (T = 6))
                              : eO
                                ? ((n = (0, i.jsx)(F.A, { isSelected: en, discountOffer: e_ })), (T = 8))
                                : (eT && eH === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                    (ey && eH === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                  ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (T = 2))
                                  : eb &&
                                    eK === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (T = 2))
                          : ((n = (0, i.jsx)(Y.Ag, { trialOffer: eA, isTabSelected: en })), (T = 4));
        eI &&
            ((n = (0, i.jsx)(Y.MA, {
                isTabSelected: en,
                badgeCopy: ee.intl.string(ee.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (T = 4),
            (eX = () => {
                C.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: T, has_premium: ed }), (0, U.ne)();
            }));
        let eJ = (0, i.jsx)(u.z9, {
            listItemRef: ei,
            selected: en,
            route: er,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: ec ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog) }),
            locationState: ea,
            onClick: eX,
            ...el,
            ...eu,
            className: t,
            children: n,
        });
        return eL
            ? (0, i.jsx)(W.T, { children: eJ })
            : eO && eH === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === T
              ? (0, i.jsx)(H.A, {
                    targetElementRef: ei,
                    discountOffer: e_,
                    premiumSubscription: eo,
                    dismissCoachmark: eF,
                    children: eJ,
                })
              : eZ
                ? (0, i.jsx)(j.p, { targetElementRef: ei, dismissPopover: eF, children: eJ })
                : eT && eH === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, i.jsx)(B.A, { targetElementRef: ei, dismissPopover: eF, children: eJ })
                  : ey && eH === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                    ? (0, i.jsx)(k.A, { targetElementRef: ei, dismissPopover: eF, children: eJ })
                    : eb && eK === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                      ? (0, i.jsx)(V.A, {
                            targetElementRef: ei,
                            dismissPopover: e$,
                            lastGrantedRewardAmount: ev,
                            children: eJ,
                        })
                      : eQ
                        ? (0, i.jsx)(q.A, { children: eJ })
                        : eJ;
    };
