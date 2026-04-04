n.d(t, { P: () => Z, o: () => J }), n(321073), n(323874), n(14289), n(35956);
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
    m = n(826673),
    p = n(932001),
    g = n(320118),
    E = n(976860),
    I = n(909536),
    f = n(287809),
    C = n(166403),
    T = n(954571),
    N = n(927578),
    S = n(683760),
    x = n(40185),
    v = n(851746),
    b = n(881489),
    y = n(113359),
    O = n(288349),
    L = n(920050),
    R = n(553081),
    P = n(131168),
    D = n(422936),
    M = n(234419),
    j = n(549996),
    w = n(881373),
    U = n(612669),
    G = n(603488),
    k = n(282077),
    V = n(385327),
    B = n(727949),
    H = n(84483),
    F = n(953062),
    Y = n(105390),
    W = n(513570),
    K = n(969492),
    q = n(622037),
    z = n(788868),
    $ = n(652215),
    Q = n(49999),
    X = n(985018);
let Z = (e) => {
        let { selected: t } = e,
            n = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            i = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            a = (0, M.V)(),
            l = (0, D.O)(),
            r = (0, x.cg)(),
            o = (0, W.H)(),
            d = (0, N.Of)(n, i),
            c = (0, s.bG)([S.A], () => S.A.getCreatedAtOverride()),
            u = t || null != a || null != l || r || null != o || d,
            A = null != c ? c : n?.createdAt;
        return u || (null != n && null != A && Date.now() - A.getTime() > 12096e5);
    },
    J = (e) => {
        let t,
            n,
            { selected: S, nitroTabButtonRef: J, route: ee, locationState: et, ...en } = e,
            ei = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
            ea = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            el = (0, N.Of)(ei, ea),
            er = (0, N.YE)(ei, z.PremiumTypes.TIER_2),
            es = (0, l.rm)("nitro"),
            eo = (0, M.V)(),
            ed = (0, D.O)(),
            ec = (0, P.p)(),
            eu = (0, b.ds)(),
            eA = (0, x.cg)(),
            eh = (0, B.NF)({ trialOffer: eo }),
            e_ = (0, U.bf)(),
            em = (0, W.H)(),
            ep = (0, B.Tp)(),
            eg = (0, s.bG)([v.A], () => v.A.getReminderStateId()),
            eE = (0, V.c7)(),
            { programReward: eI, isEligible: ef } = (0, g.F)({ location: "NitroTabButton" }),
            { receivesUpdatedUpsellPopover: eC, orbsRewardAmount: eT } = (0, H.uX)("NitroTabButton"),
            eN = (0, y.QG)({ location: "nitro_tab_popover" }),
            eS = eN !== y.xb.CONTROL,
            ex = eN === y.xb.ANNOUNCEMENT_MODAL,
            ev = !(0, N.TW)(ei),
            eb = ev && ef,
            ey = eI?.last_granted_reward,
            eO = eI?.last_granted_reward_amount,
            eL = (0, _.mB)(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            eR = er && ef && null != ey && null != eO && !eL,
            eP = er && ef && !eR && null != eI,
            eD = null != ec && null != ea && ea.status === $.Dmq.CANCELED,
            eM = (0, I.Gh)("NitroTabButton"),
            { marketingEnabled: ej } = (0, w.YS)({ location: "NitroTabButton" }),
            ew = ej && er,
            eU = ej && ev,
            { fractionalState: eG, startsAt: ek, endsAt: eV } = (0, h.A)({ forceFetch: !0 }),
            [eB, eH] = (0, p.Wl)(eG !== z.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
                showAfterTimestamp: ek.valueOf(),
                cooldownDurationMs: 0,
            }),
            eF = eo?.trial_id === z.Dw,
            eY = [],
            eW = [];
        (0, _.Tc)() &&
            (eE && eY.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eA && eY.push(o.M.BOGO_2025_NITRO_TAB_BADGE));
        let [eK, eq] = (0, p.kn)(eY, void 0, !0);
        eD && eW.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK),
            e_ && (eS ? eW.push(o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) : eW.push(o.M.PREMIUM_GROUP_POPOVER)),
            eb && eW.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER),
            eP && eW.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER),
            ew && eW.push(o.M.L_3PP_NITRO_TOOLTIP),
            eU && eW.push(o.M.L_3PP_NON_NITRO_POPOVER),
            eM && eW.push(o.M.WISHLISTING_NITRO_TAB_NEW_BADGE);
        let [ez, e$] = (0, p.kn)(eW, void 0, !0),
            eQ = (0, j.c)(r.C.PREMIUM_TAB),
            eX = (0, j.c)(r.C.PREMIUM_TAB_TOOLTIP),
            eZ = (0, j.c)(r.C.PREMIUM_TAB_POPOVER),
            [eJ, e0] = (0, p.Cc)(
                null != eQ && "premiumTab" === eQ.properties.properties.oneofKind
                    ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
                    : null,
                eQ?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e1, e7] = (0, p.Cc)(
                null != eZ && "premiumTabPopover" === eZ.properties.properties.oneofKind
                    ? o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                    : null,
                eZ?.promotionId ?? "",
                void 0,
                !0,
            ),
            [e9, e6] = (0, p.Cc)(eR ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, ey ?? "", void 0, !0),
            e5 =
                null != eX &&
                "premiumTabTooltip" === eX.properties.properties.oneofKind &&
                eJ === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            e2 = ew && ez === o.M.L_3PP_NITRO_TOOLTIP,
            e3 = eU && ez === o.M.L_3PP_NON_NITRO_POPOVER;
        if (
            (a.useEffect(() => {
                !0 === S &&
                    (null != eK && eq(Q.i.AUTO_DISMISS),
                    null != ez && e$(Q.i.AUTO_DISMISS),
                    null != eJ && e0(Q.i.AUTO_DISMISS),
                    null != e9 && e6(Q.i.AUTO_DISMISS),
                    null != e1 && e7(Q.i.AUTO_DISMISS));
            }, [eq, S, eK, e$, ez, eJ, e0, e9, e6, e1, e7]),
            !Z({ selected: S }))
        )
            return null;
        let e4 = () => {
            eB === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eH(Q.i.TAKE_ACTION),
                T.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }),
                null != eK && eq(Q.i.USER_DISMISS),
                null != eJ && e0(Q.i.USER_DISMISS),
                (ez === o.M.PREMIUM_GROUP_POPOVER || ez === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2) &&
                    e$(Q.i.USER_DISMISS),
                ez === o.M.L_3PP_NITRO_TOOLTIP && e$(Q.i.USER_DISMISS),
                ez === o.M.L_3PP_NON_NITRO_POPOVER && e$(Q.i.USER_DISMISS),
                ez === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE && e$(Q.i.USER_DISMISS);
        };
        eG === z.xc.NONE ||
            eu ||
            ((n = 7),
            (t = (0, i.jsx)(O.A, {
                className: "",
                startsAt: ek,
                endsAt: eV,
                messageStyle: A.yE.SHORT_TIME,
                upperCase: !0,
            })));
        let e8 = ez === o.M.PREMIUM_GROUP_POPOVER || ez === o.M.PREMIUM_GROUP_POPOVER_UPSELL_V2,
            te = e_ && e8;
        if (te) (t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 10);
        else if (null != eQ && "premiumTab" === eQ.properties.properties.oneofKind)
            (t = (0, i.jsx)(k.A, {
                componentId: eQ.id,
                badgeCopy: eQ.properties.properties.premiumTab.badgeLabel,
                acknowledgedBadgeCopy: eQ.properties.properties.premiumTab.acknowledgedBadgeLabel,
                isDismissed: (0, m.u$)(o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, eQ?.promotionId ?? "").isDismissed,
            })),
                (n = 9);
        else if (eA) (t = (0, i.jsx)(G.A, {})), (n = 0);
        else if (eh) {
            let e = (0, B.ZR)();
            (t = (0, i.jsx)(Y.MA, {
                isTabSelected: S,
                badgeCopy: X.intl.string(X.t.OS9KPu),
                offerExpiresAt: !0 === e ? eo?.expires_at : null,
            })),
                (n = 4);
        } else
            eK === o.M.RECURRING_3P_PROMOTION_POPOVER
                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })),
                  (n = 4),
                  (e4 = () => {
                      T.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }),
                          eq(Q.i.USER_DISMISS);
                  }))
                : eu
                  ? ((t = (0, i.jsx)(c.Exy, { type: { text: X.intl.string(X.t.raP9dM) }, variant: "expressive" })),
                    (n = 4))
                  : null != em
                    ? ((t = (0, i.jsx)(q.A, { copy: em, showStars: !1 })), (n = 1))
                    : null != ed
                      ? ((t = (0, i.jsx)(Y.fY, { userDiscount: ed, isTabSelected: S, includesAmountOff: !1 })), (n = 3))
                      : null == eo || eF
                        ? eD
                            ? ((t = (0, i.jsx)(F.A, { isSelected: S, discountOffer: ec })), (n = 8))
                            : (eb && ez === o.M.PREMIUM_ORBS_UPSELL_POPOVER) ||
                                (eP && ez === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER) ||
                                (eR && e9 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER)
                              ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 2))
                              : e2
                                ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 11))
                                : e3
                                  ? ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 12))
                                  : eM &&
                                    ez === o.M.WISHLISTING_NITRO_TAB_NEW_BADGE &&
                                    ((t = (0, i.jsx)(c.Exy, { type: "new", variant: "expressive" })), (n = 13))
                        : ((t = (0, i.jsx)(Y.Ag, { trialOffer: eo, isTabSelected: S })), (n = 4));
        ep &&
            ((t = (0, i.jsx)(c.Exy, { type: { text: X.intl.string(X.t.RDE0Sc) }, variant: "expressive" })),
            (e4 = () => {
                T.default.track($.HAw.NITRO_TAB_VISITED, { badge_decorator: n, has_premium: el }), (0, B.ne)(eg);
            }),
            (n = 6));
        let tt = K.L.NONE;
        e1 === o.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
            ? (tt = K.L.MARKETING_MOMENT_POPOVER)
            : eD && ez === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === n
              ? (tt = K.L.CHURN_DISCOUNT)
              : te && !ex
                ? (tt = K.L.PREMIUM_GROUP)
                : te && ex
                  ? (tt = K.L.PREMIUM_GROUP_TOOLTIP)
                  : eb && ez === o.M.PREMIUM_ORBS_UPSELL_POPOVER
                    ? (tt = K.L.ORBS_UPSELL)
                    : eP && ez === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER
                      ? (tt = K.L.ORBS_INTRO)
                      : eR && e9 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER
                        ? (tt = K.L.ORBS_DROP)
                        : e5
                          ? (tt = K.L.TOOLTIP)
                          : e2
                            ? (tt = K.L.L_PREMIUM_SUB_TOOLTIP)
                            : e3
                              ? (tt = K.L.L_UPSELL)
                              : eu && (tt = K.L.REVERSE_TRIAL);
        let tn = (0, i.jsx)(u.z9, {
            listItemRef: J,
            selected: S,
            route: ee,
            icon: c.tvc,
            showHoverGradient: !1,
            nitroHoverGradient: !0,
            text: (0, i.jsx)(d.A, { children: er ? X.intl.string(X.t["4gwVVn"]) : X.intl.string(X.t.Ipxkog) }),
            locationState: et,
            onClick: () => {
                if (e2) {
                    let e = new URLSearchParams({ [R.W]: L.LOGITECH_3PP_CARD_ID }).toString();
                    (0, E.pX)(ee.includes("?") ? `${ee}&${e}` : `${ee}?${e}`);
                }
                e4();
            },
            ...en,
            ...es,
            children: t,
        });
        return (0, i.jsx)(K.H, {
            popoverType: tt,
            targetElementRef: J,
            churnDiscountOffer: ec,
            premiumSubscription: ea,
            receivesUpdatedUpsellPopover: eC,
            orbsRewardAmount: eT,
            lastGrantedRewardAmount: eO,
            dismissCoachMark: e$,
            dismissOrbsDropPopover: e6,
            dismissMarketingPopover: e7,
            fpEndsAt: eV,
            children: tn,
        });
    };
