n.d(t, { P: () => et, o: () => en }), n(321073);
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
    N = n(954571),
    T = n(927578),
    S = n(683760),
    x = n(40185),
    v = n(637073),
    b = n(377168),
    y = n(288349),
    L = n(131168),
    O = n(422936),
    R = n(234419),
    P = n(549996),
    j = n(612669),
    D = n(768569),
    w = n(603488),
    M = n(282077),
    U = n(385327),
    G = n(727949),
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
            i = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            r = (0, R.V)(),
            l = (0, O.O)(),
            a = (0, x.cg)(),
            o = (0, K.H)(),
            d = (0, T.Of)(n, i),
            c = (0, s.bG)([S.A], () => S.A.getCreatedAtOverride()),
            u = t || null != r || null != l || a || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    en = (e) => {
        let t,
            n,
            S,
            { selected: en, nitroTabButtonRef: ei, route: er, locationState: el, ...ea } = e,
            es = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            eo = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            ed = (0, T.Of)(es, eo),
            ec = (0, T.YE)(es, X.PremiumTypes.TIER_2),
            eu = (0, l.rm)("nitro"),
            eA = (0, R.V)(),
            eh = (0, O.O)(),
            e_ = (0, L.p)(),
            em = (0, v.d)(),
            ep = (0, x.cg)(),
            eg = (0, G.NF)({ trialOffer: eA }),
            eE = (0, j.bf)(),
            eI = (0, K.H)(),
            ef = (0, G.Tp)(),
            eC = (0, U.c7)(),
            eN = (0, I.DK)(E.W.NITRO, "NitroTabButton"),
            eT = !(0, T.TW)(es) && eN,
            eS = (0, s.bG)([g.A], () => g.A.getRewardForProgram(E.W.NITRO)),
            ex = eS?.last_granted_reward,
            ev = eS?.last_granted_reward_amount,
            eb = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ey = ec && eN && null != ex && null != ev && !eb,
            eL = ec && eN && !ey && null != eS,
            eO = (0, $.gr)(),
            eR = null != e_ && null != eo && eo.status === Z.Dmq.CANCELED,
            { fractionalState: eP, startsAt: ej, endsAt: eD } = (0, h.A)({ forceFetch: !0 }),
            [ew, eM] = (0, p.Wl)(eP !== X.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ej.valueOf(),
                cooldownDurationMs: 0,
            }),
            eU = (0, b.A)({ location: "NitroTabButton" }),
            eG = eA?.trial_id === X.Dw,
            ek = [],
            eV = [];
        (0, _.Tc)() &&
            (eC && ek.push(o.M.RECURRING_3P_PROMOTION_POPOVER),
            ep && ek.push(o.M.BOGO_2025_NITRO_TAB_BADGE),
            eU && ek.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE),
            em && ek.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
        let [eB, eH] = (0, p.kn)(ek, void 0, !0);
        eR && eV.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            eE && eV.push(o.M.PREMIUM_GROUP_POPOVER),
            eT && eV.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eL && eV.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
        let [eF, eY] = (0, p.kn)(eV, void 0, !0),
            eW = (0, P.c)(a.C.PREMIUM_TAB),
            eq = (0, P.c)(a.C.PREMIUM_TAB_TOOLTIP),
            [ez, eK] = (0, p.Cc)(
                null != eW && "premiumTab" === eW.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eW?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e$, eQ] = (0, p.Cc)(ey ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ex ?? "", void 0, !0),
            eX =
                null != eq &&
                "premiumTabTooltip" === eq.properties.properties.oneofKind &&
                ez === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        if (
            (r.useEffect(() => {
                !0 === en && null != eB && eH(J.i.AUTO_DISMISS),
                    !0 === en && null != eF && eY(J.i.AUTO_DISMISS),
                    !0 === en && null != ez && eK(J.i.AUTO_DISMISS),
                    !0 === en && null != e$ && eQ(J.i.AUTO_DISMISS);
            }, [eH, en, eB, eY, eF, ez, eK, e$, eQ]),
            !et({ selected: en }))
        )
            return null;
        let eZ = () => {
            ew === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eM(J.i.TAKE_ACTION),
                N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: S, has_premium: ed }),
                null != eB && eH(J.i.USER_DISMISS),
                null != ez && eK(J.i.USER_DISMISS),
                eF === o.M.PREMIUM_GROUP_POPOVER && eY(J.i.USER_DISMISS);
        };
        eP === X.xc.NONE ||
            em ||
            ((S = 7),
            (n = (0, i.jsx)(y.A, {
                className: "",
                startsAt: ej,
                endsAt: eD,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let eJ = eE && eF === o.M.PREMIUM_GROUP_POPOVER;
        if (eJ) (n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (S = 10);
        else if (null != eW && "premiumTab" === eW.properties.properties.oneofKind)
            (n = (0, i.jsx)(M.A, {
                componentId: eW.id,
                badgeCopy: eW.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eW.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: ez !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            })),
                (S = 9);
        else if (ep) (n = (0, i.jsx)(w.A, {})), (S = 0);
        else if (eg) {
            let e = (0, G.ZR)();
            (n = (0, i.jsx)(Y.MA, {
                isTabSelected: en,
                badgeCopy: ee.intl.string(ee.t.OS9KPu),
                offerExpiresAt: !0 === e ? eA?.expires_at : null,
            })),
                (S = 4);
        } else
            eB === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (S = 4),
                  (eZ = () => {
                      N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: S, has_premium: ed }),
                          eH(J.i.USER_DISMISS);
                  }))
                : eB === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE
                  ? ((n = (0, i.jsx)(Y.MA, {
                        isTabSelected: en,
                        badgeCopy: ee.intl.string(ee.t.y2b7CA),
                        offerExpiresAt: null,
                    })),
                    (S = 2))
                  : em
                    ? ((n = (0, i.jsx)(z.d, { expiresAt: eD })), (S = 4))
                    : null != eI
                      ? ((n = (0, i.jsx)(Q.A, { copy: eI, showStars: !1 })), (S = 1))
                      : null != eh
                        ? ((n = (0, i.jsx)(Y.fY, { userDiscount: eh, isTabSelected: en, includesAmountOff: !1 })),
                          (S = 3))
                        : null == eA || eG
                          ? eO
                              ? ((n = (0, i.jsx)(W.F, {
                                    isSelected: en,
                                    onSelect: () =>
                                        (0, m.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
                                            dismissAction: J.i.TAKE_ACTION,
                                        }),
                                })),
                                (S = 6))
                              : eR
                                ? ((n = (0, i.jsx)(F.A, { isSelected: en, discountOffer: e_ })), (S = 8))
                                : (eT && eF === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                    (eL && eF === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER)
                                  ? ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (S = 2))
                                  : ey &&
                                    e$ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER &&
                                    ((n = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (S = 2))
                          : ((n = (0, i.jsx)(Y.Ag, { trialOffer: eA, isTabSelected: en })), (S = 4));
        ef &&
            ((n = (0, i.jsx)(Y.MA, {
                isTabSelected: en,
                badgeCopy: ee.intl.string(ee.t.RDE0Sc),
                offerExpiresAt: null,
            })),
            (S = 4),
            (eZ = () => {
                N.default.track(Z.HAw.NITRO_TAB_VISITED, { badge_decorator: S, has_premium: ed }), (0, G.ne)();
            }));
        let e0 = (0, i.jsx)(u.z9, {
            listItemRef: ei,
            selected: en,
            route: er,
            icon: c.tvc,
            text: (0, i.jsx)(d.A, { children: ec ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog) }),
            locationState: el,
            onClick: eZ,
            ...ea,
            ...eu,
            className: t,
            children: n,
        });
        return eO
            ? (0, i.jsx)(W.T, { children: e0 })
            : eR && eF === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === S
              ? (0, i.jsx)(H.A, {
                    targetElementRef: ei,
                    discountOffer: e_,
                    premiumSubscription: eo,
                    dismissCoachmark: eY,
                    children: e0,
                })
              : eJ
                ? (0, i.jsx)(D.p, { targetElementRef: ei, dismissPopover: eY, children: e0 })
                : eT && eF === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                  ? (0, i.jsx)(B.A, { targetElementRef: ei, dismissPopover: eY, children: e0 })
                  : eL && eF === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                    ? (0, i.jsx)(k.A, { targetElementRef: ei, dismissPopover: eY, children: e0 })
                    : ey && e$ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                      ? (0, i.jsx)(V.A, {
                            targetElementRef: ei,
                            dismissPopover: eQ,
                            lastGrantedRewardAmount: ev,
                            children: e0,
                        })
                      : eX
                        ? (0, i.jsx)(q.A, { children: e0 })
                        : e0;
    };
