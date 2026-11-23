(l.d(t, { FT: () => Z, Yc: () => q, vG: () => ee, EA: () => et }), l(321073));
var a,
    n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    o = l(892227),
    c = l(806163),
    d = l(855986),
    u = l(939249),
    h = l(192308),
    m = l(265872),
    C = l(793574),
    _ = l(688810),
    E = l(286348),
    A = l(923079),
    g = l(757036),
    f = l(369189),
    p = l(622886),
    L = l(287809),
    b = l(166403),
    x = l(129230),
    O = l(403362),
    T = l(124861),
    R = l(318346),
    v = l(362862),
    y = l(672619),
    S = l(923138),
    N = l(12510),
    j = l(673125),
    I = l(328123),
    U = l(587244),
    B =
        (((a = {}).NITRO_UPSELL = "nitro_upsell"),
        (a.SHOP_ORBS = "shop_orbs"),
        (a.BLACK_FRIDAY_RUST = "black_friday_rust"),
        (a.BLACK_FRIDAY_BLOONS = "black_friday_bloons"),
        a);
function F(e) {
    let { userHasPremium: t, orbBalance: l, liveCampaignCards: a = [] } = e;
    return a.length > 0 ? a[0] : t ? (null != l && l >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
var P = l(339204),
    M = l(730916),
    D = l(652215),
    W = l(682901),
    k = l(312653),
    H = l(792996),
    w = l(631502),
    G = l(123576);
let V = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: T.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: T.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: T.x.NONE,
        orbRewardAmount: 100,
    },
];
async function Y(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function z(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = D.tEg,
            liveCampaignCards: o,
        } = e,
        c = F({ userHasPremium: t, orbBalance: a, liveCampaignCards: o });
    return c === B.SHOP_ORBS
        ? (0, n.jsx)(P.xA, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : c === B.NITRO_UPSELL
          ? (0, n.jsx)(P.Wm, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : c === B.BLACK_FRIDAY_RUST
            ? (0, n.jsx)(P.rI, {
                  campaign: I.gO,
                  userHasPremium: t,
                  onClose: l,
                  analyticsPage: s,
                  forceVisible: i,
                  onCloseWallet: r,
              })
            : c === B.BLACK_FRIDAY_BLOONS
              ? (0, n.jsx)(P.rI, {
                    campaign: I.F6,
                    userHasPremium: t,
                    onClose: l,
                    analyticsPage: s,
                    forceVisible: i,
                    onCloseWallet: r,
                })
              : null;
}
function K(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: G.dW, children: t })
        : (0, n.jsx)(u.D, { className: r()(G.dW, G.or), onClick: l, children: t });
}
function X(e, t) {
    return H.intl.formatToPlainString(e ? k.default.p9PPYD : k.default["1JZfaU"], { multiplier: t });
}
function Z(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: a,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, n.jsx)(U.eT, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(U.Vv, { text: H.intl.format(k.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return z({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(U.C9, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: H.intl.format(k.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(K, { text: e }) }),
                      role: "status",
                  }
                : null,
            title: H.intl.string(k.default.H6Ny8N),
            badgeText: H.intl.format(t ? k.default.OHLdjq : k.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: X(t, 1.2),
            challenges: i ? [] : V,
            onClaim: Y,
        }),
        orbWalletFooter: (0, n.jsx)(U.oZ, {
            onQuestsClick: () => (0, M.Ww)(),
            onShopClick: () => (0, M.P9)({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function q(e) {
    return (0, n.jsx)(Z, { ...e, hasNoChallenges: !0 });
}
function J() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, p.F)(),
        l = (0, A.A)({ location: "StatefulOrbWalletNitroRewardProgramTag" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, o.default)(new Date(t.next_reward_date), new Date()));
    switch (l) {
        case A.m.DEFAULT:
            return (0, n.jsx)(U.Vv, {
                text: H.intl.format(k.default["04j3XV"], { orbAmount: t.reward_amount, days: a }),
            });
        case A.m.DEPRECATED:
            if ((0, E.Au)(t.next_reward_date)) return null;
            return (0, n.jsx)(U.B$, { text: H.intl.format(w.default.bkU5si, { orbAmount: t.reward_amount, days: a }) });
        case A.m.DEPRECATED_XBOX:
        case A.m.REMOVED:
        case A.m.REMOVED_XBOX:
            return null;
        default:
            return (0, O.xb)(l);
    }
}
function Q() {
    return null != (0, d.bG)([b.A], () => b.A.getPremiumTypeSubscription()) ? (0, n.jsx)(J, {}) : null;
}
function $(e) {
    let { analyticsPage: t = C.A.ORB_WALLET, analyticsLocations: a = [], onCloseWallet: i = D.tEg } = e,
        { challengesForOrbWallet: r, hasFetchedChallenges: o, refetch: c } = (0, S.z)({ shouldFetch: !0 }),
        u = (0, g.L)(W.PremiumTypes.TIER_2),
        m = (0, d.bG)([L.default], () => L.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: _, orbChallengesDisplayError: E } = (0, d.cf)([j.Ay], () => ({
            nitroGatedOrbMultiplier: j.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: j.Ay.orbChallengesDisplayError,
        })),
        A = null != m && !m.isClaimed(),
        f = s.useMemo(
            () =>
                null != E
                    ? {
                          type: "warning",
                          message:
                              E.errorType === j.EB.CLAIM_CHALLENGE
                                  ? H.intl.string(k.default.FYb5rH)
                                  : H.intl.format(k.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(K, { text: e, onClick: c }),
                                    }),
                          role: "status",
                      }
                    : A
                      ? { type: "info", message: H.intl.string(H.t.qxk9zo), role: "status" }
                      : null,
            [E, c, A],
        ),
        p = s.useCallback(
            () => (
                (0, R.Y)({ pageType: t, sectionType: C.A.ORB_WALLET, ctaObject: C.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                i("navigation"),
                (0, M.Ks)({ nitroGatedOrbMultiplier: _, userIsPremiumTier2: u })
            ),
            [_, u, t, i],
        ),
        b = s.useMemo(
            () =>
                r.map((e) => {
                    let l = null != e.achievementDefinitionId ? M.nS[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: a },
                        s =
                            null != l
                                ? () => {
                                      ((0, R.Y)({
                                          pageType: t,
                                          sectionType: C.A.ORB_WALLET,
                                          ctaObject: C.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          l(n),
                                          i("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: s };
                }),
            [r, a, t, i],
        ),
        x = s.useCallback(() => {
            (0, h.mM)(async () => {
                let { default: e } = await Promise.all([l.e(671464), l.e(112206), l.e(709998), l.e(480388)]).then(
                    l.bind(l, 195759),
                );
                return (t) => {
                    let { onClose: l, ...a } = t;
                    return (0, n.jsx)(e, { ...a, onClose: l, body: H.intl.string(H.t["gP/vPe"]) });
                };
            });
        }, []),
        O = s.useCallback((e) => (A ? (x(), Promise.resolve()) : (0, N.Xz)(e)), [A, x]);
    return (0, n.jsx)(U.C9, {
        title: H.intl.string(k.default.H6Ny8N),
        isLoading: !o,
        inlineNoticeProps: f,
        challenges: b,
        onClaim: O,
        onClickBadge: p,
        badgeText: H.intl.format(u ? k.default.OHLdjq : k.default.WOMrJf, { multiplier: _ }),
        badgeAccessibilityLabel: X(u, _),
    });
}
function ee(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: a = C.A.ORB_WALLET,
            onCloseWallet: i = D.tEg,
            isProfilePopout: r,
        } = e,
        { balance: o } = (0, y.W0)(),
        u = (0, v.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: h } = (0, y.rQ)({ disableFetch: !u }),
        m = (0, g.L)(W.PremiumTypes.TIER_2),
        { analyticsLocations: E } = (0, _.Ay)(C.A.ORB_WALLET);
    s.useEffect(() => {
        u && (0, N.eX)();
    }, [u]);
    let A = s.useCallback(() => {
            ((0, R.Y)({ pageType: a, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_SHOP_CTA }),
                (0, M.P9)({ analyticsLocations: E }),
                i("navigation"));
        }, [E, a, i]),
        p = s.useCallback(() => {
            ((0, R.Y)({ pageType: a, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_QUEST_HOME_CTA }),
                (0, M.Ww)(),
                i("navigation"));
        }, [a, i]),
        L = (0, I.OY)(I.gO, u),
        b = (0, I.OY)(I.F6, u),
        O = s.useMemo(() => {
            let e = [];
            return (L && e.push(B.BLACK_FRIDAY_RUST), b && e.push(B.BLACK_FRIDAY_BLOONS), e);
        }, [L, b]),
        S = s.useMemo(() => F({ userHasPremium: m, orbBalance: o, liveCampaignCards: O }), [m, o, O]),
        { challengesForOrbWallet: P, hasFetchedChallenges: k } = (0, d.cf)([j.Ay], () => ({
            challengesForOrbWallet: j.Ay.challengesForOrbWallet,
            hasFetchedChallenges: j.Ay.hasFetchedChallenges,
        })),
        H = s.useRef(!1);
    s.useEffect(() => {
        if (!k || H.current) return;
        let e = P.map((e) => e.achievementIdentifier),
            t = P.filter((e) => e.achievementStatus === T.x.COMPLETED).map((e) => e.achievementIdentifier);
        (x.default.track(D.HAw.ORB_WALLET_VIEWED, {
            location_stack: E,
            location_page: a,
            location_section: C.A.ORB_WALLET,
            location_object: C.A.ORB_WALLET,
            wallet_primary_card_type: S,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (H.current = !0));
    }, [k, P, S, E, a]);
    let { pathname: w } = (0, c.zy)(),
        G = w.startsWith(D.BVt.COLLECTIBLES_SHOP),
        V = (0, f.p)(),
        Y = s.useMemo(
            () =>
                r ? { onQuestsClick: p, onShopClick: A } : { onQuestsClick: V ? null : p, onShopClick: G ? null : A },
            [V, G, p, A, r],
        );
    return u
        ? (0, n.jsx)(U.eT, {
              cardRef: t,
              returnRef: l,
              orbBalance: o,
              headerTagsContent: (0, n.jsx)(Q, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return z({
                      userHasPremium: m,
                      onClose: t,
                      orbBalance: o,
                      analyticsPage: a,
                      onCloseWallet: i,
                      liveCampaignCards: O,
                  });
              },
              orbChallengesCard: (0, n.jsx)($, { analyticsPage: a, analyticsLocations: E, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(U.oZ, { ...Y, totalOrbsRedeemed: h }),
          })
        : null;
}
function et(e) {
    let { cardRef: t, returnRef: l, targetElementRef: a, shouldShow: i, analyticsPage: r, onCloseWallet: o } = e,
        c = s.useCallback(
            () => (0, n.jsx)(ee, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: o }),
            [t, l, r, o],
        ),
        d = s.useCallback(
            (e, t) => {
                "user:escape" === t && null != o && o("direct_close");
            },
            [o],
        );
    return (0, n.jsx)(m.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: c,
        position: "bottom",
        align: "right",
        shouldShow: i,
        onRequestClose: d,
        animation: m.Y.Animation.NONE,
        targetElementRef: a,
        children: () => null,
    });
}
