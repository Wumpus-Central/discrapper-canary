(l.d(t, { FT: () => X, Yc: () => Z, vG: () => $, EA: () => ee }), l(321073));
var a,
    n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    o = l(892227),
    c = l(806163),
    d = l(855986),
    h = l(939249),
    u = l(192308),
    m = l(265872),
    C = l(793574),
    _ = l(688810),
    E = l(923079),
    A = l(757036),
    g = l(369189),
    f = l(622886),
    p = l(287809),
    L = l(166403),
    b = l(129230),
    x = l(403362),
    O = l(124861),
    T = l(318346),
    R = l(362862),
    v = l(672619),
    y = l(923138),
    S = l(12510),
    N = l(673125),
    j = l(328123),
    I = l(587244),
    U =
        (((a = {}).NITRO_UPSELL = "nitro_upsell"),
        (a.SHOP_ORBS = "shop_orbs"),
        (a.BLACK_FRIDAY_RUST = "black_friday_rust"),
        (a.BLACK_FRIDAY_BLOONS = "black_friday_bloons"),
        a);
function B(e) {
    let { userHasPremium: t, orbBalance: l, liveCampaignCards: a = [] } = e;
    return a.length > 0 ? a[0] : t ? (null != l && l >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
var F = l(339204),
    P = l(730916),
    M = l(652215),
    D = l(682901),
    W = l(312653),
    k = l(792996),
    H = l(631502),
    G = l(123576);
let w = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: O.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: O.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: O.x.NONE,
        orbRewardAmount: 100,
    },
];
async function V(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function Y(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = M.tEg,
            liveCampaignCards: o,
        } = e,
        c = B({ userHasPremium: t, orbBalance: a, liveCampaignCards: o });
    return c === U.SHOP_ORBS
        ? (0, n.jsx)(F.xA, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : c === U.NITRO_UPSELL
          ? (0, n.jsx)(F.Wm, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : c === U.BLACK_FRIDAY_RUST
            ? (0, n.jsx)(F.rI, {
                  campaign: j.gO,
                  userHasPremium: t,
                  onClose: l,
                  analyticsPage: s,
                  forceVisible: i,
                  onCloseWallet: r,
              })
            : c === U.BLACK_FRIDAY_BLOONS
              ? (0, n.jsx)(F.rI, {
                    campaign: j.F6,
                    userHasPremium: t,
                    onClose: l,
                    analyticsPage: s,
                    forceVisible: i,
                    onCloseWallet: r,
                })
              : null;
}
function z(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: G.dW, children: t })
        : (0, n.jsx)(h.D, { className: r()(G.dW, G.or), onClick: l, children: t });
}
function K(e, t) {
    return k.intl.formatToPlainString(e ? W.default.p9PPYD : W.default["1JZfaU"], { multiplier: t });
}
function X(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: a,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, n.jsx)(I.eT, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(I.Vv, { text: k.intl.format(W.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return Y({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(I.C9, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: k.intl.format(W.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(z, { text: e }) }),
                      role: "status",
                  }
                : null,
            title: k.intl.string(W.default.H6Ny8N),
            badgeText: k.intl.format(t ? W.default.OHLdjq : W.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: K(t, 1.2),
            challenges: i ? [] : w,
            onClaim: V,
        }),
        orbWalletFooter: (0, n.jsx)(I.oZ, {
            onQuestsClick: () => (0, P.Ww)(),
            onShopClick: () => (0, P.P9)({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function Z(e) {
    return (0, n.jsx)(X, { ...e, hasNoChallenges: !0 });
}
function q() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, f.F)(),
        l = (0, E.A)({ location: "StatefulOrbWalletNitroRewardProgramTag" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, o.default)(new Date(t.next_reward_date), new Date()));
    switch (l) {
        case E.m.DEFAULT:
            return (0, n.jsx)(I.Vv, {
                text: k.intl.format(W.default["04j3XV"], { orbAmount: t.reward_amount, days: a }),
            });
        case E.m.DEPRECATED:
            return (0, n.jsx)(I.B$, { text: k.intl.format(H.default.bkU5si, { orbAmount: t.reward_amount, days: a }) });
        case E.m.DEPRECATED_XBOX:
        case E.m.REMOVED:
        case E.m.REMOVED_XBOX:
            return null;
        default:
            return (0, x.xb)(l);
    }
}
function J() {
    return null != (0, d.bG)([L.A], () => L.A.getPremiumTypeSubscription()) ? (0, n.jsx)(q, {}) : null;
}
function Q(e) {
    let { analyticsPage: t = C.A.ORB_WALLET, analyticsLocations: a = [], onCloseWallet: i = M.tEg } = e,
        { challengesForOrbWallet: r, hasFetchedChallenges: o, refetch: c } = (0, y.z)({ shouldFetch: !0 }),
        h = (0, A.L)(D.PremiumTypes.TIER_2),
        m = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: _, orbChallengesDisplayError: E } = (0, d.cf)([N.Ay], () => ({
            nitroGatedOrbMultiplier: N.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: N.Ay.orbChallengesDisplayError,
        })),
        g = null != m && !m.isClaimed(),
        f = s.useMemo(
            () =>
                null != E
                    ? {
                          type: "warning",
                          message:
                              E.errorType === N.EB.CLAIM_CHALLENGE
                                  ? k.intl.string(W.default.FYb5rH)
                                  : k.intl.format(W.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(z, { text: e, onClick: c }),
                                    }),
                          role: "status",
                      }
                    : g
                      ? { type: "info", message: k.intl.string(k.t.qxk9zo), role: "status" }
                      : null,
            [E, c, g],
        ),
        L = s.useCallback(
            () => (
                (0, T.Y)({ pageType: t, sectionType: C.A.ORB_WALLET, ctaObject: C.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                i("navigation"),
                (0, P.Ks)({ nitroGatedOrbMultiplier: _, userIsPremiumTier2: h })
            ),
            [_, h, t, i],
        ),
        b = s.useMemo(
            () =>
                r.map((e) => {
                    let l = null != e.achievementDefinitionId ? P.nS[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: a },
                        s =
                            null != l
                                ? () => {
                                      ((0, T.Y)({
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
            (0, u.mM)(async () => {
                let { default: e } = await Promise.all([l.e(671464), l.e(112206), l.e(709998), l.e(480388)]).then(
                    l.bind(l, 195759),
                );
                return (t) => {
                    let { onClose: l, ...a } = t;
                    return (0, n.jsx)(e, { ...a, onClose: l, body: k.intl.string(k.t["gP/vPe"]) });
                };
            });
        }, []),
        O = s.useCallback((e) => (g ? (x(), Promise.resolve()) : (0, S.Xz)(e)), [g, x]);
    return (0, n.jsx)(I.C9, {
        title: k.intl.string(W.default.H6Ny8N),
        isLoading: !o,
        inlineNoticeProps: f,
        challenges: b,
        onClaim: O,
        onClickBadge: L,
        badgeText: k.intl.format(h ? W.default.OHLdjq : W.default.WOMrJf, { multiplier: _ }),
        badgeAccessibilityLabel: K(h, _),
    });
}
function $(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: a = C.A.ORB_WALLET,
            onCloseWallet: i = M.tEg,
            isProfilePopout: r,
        } = e,
        { balance: o } = (0, v.W0)(),
        h = (0, R.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: u } = (0, v.rQ)({ disableFetch: !h }),
        m = (0, A.L)(D.PremiumTypes.TIER_2),
        { analyticsLocations: E } = (0, _.Ay)(C.A.ORB_WALLET);
    s.useEffect(() => {
        h && (0, S.eX)();
    }, [h]);
    let f = s.useCallback(() => {
            ((0, T.Y)({ pageType: a, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_SHOP_CTA }),
                (0, P.P9)({ analyticsLocations: E }),
                i("navigation"));
        }, [E, a, i]),
        p = s.useCallback(() => {
            ((0, T.Y)({ pageType: a, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_QUEST_HOME_CTA }),
                (0, P.Ww)(),
                i("navigation"));
        }, [a, i]),
        L = (0, j.OY)(j.gO, h),
        x = (0, j.OY)(j.F6, h),
        y = s.useMemo(() => {
            let e = [];
            return (L && e.push(U.BLACK_FRIDAY_RUST), x && e.push(U.BLACK_FRIDAY_BLOONS), e);
        }, [L, x]),
        F = s.useMemo(() => B({ userHasPremium: m, orbBalance: o, liveCampaignCards: y }), [m, o, y]),
        { challengesForOrbWallet: W, hasFetchedChallenges: k } = (0, d.cf)([N.Ay], () => ({
            challengesForOrbWallet: N.Ay.challengesForOrbWallet,
            hasFetchedChallenges: N.Ay.hasFetchedChallenges,
        })),
        H = s.useRef(!1);
    s.useEffect(() => {
        if (!k || H.current) return;
        let e = W.map((e) => e.achievementIdentifier),
            t = W.filter((e) => e.achievementStatus === O.x.COMPLETED).map((e) => e.achievementIdentifier);
        (b.default.track(M.HAw.ORB_WALLET_VIEWED, {
            location_stack: E,
            location_page: a,
            location_section: C.A.ORB_WALLET,
            location_object: C.A.ORB_WALLET,
            wallet_primary_card_type: F,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (H.current = !0));
    }, [k, W, F, E, a]);
    let { pathname: G } = (0, c.zy)(),
        w = G.startsWith(M.BVt.COLLECTIBLES_SHOP),
        V = (0, g.p)(),
        z = s.useMemo(
            () =>
                r ? { onQuestsClick: p, onShopClick: f } : { onQuestsClick: V ? null : p, onShopClick: w ? null : f },
            [V, w, p, f, r],
        );
    return h
        ? (0, n.jsx)(I.eT, {
              cardRef: t,
              returnRef: l,
              orbBalance: o,
              headerTagsContent: (0, n.jsx)(J, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return Y({
                      userHasPremium: m,
                      onClose: t,
                      orbBalance: o,
                      analyticsPage: a,
                      onCloseWallet: i,
                      liveCampaignCards: y,
                  });
              },
              orbChallengesCard: (0, n.jsx)(Q, { analyticsPage: a, analyticsLocations: E, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(I.oZ, { ...z, totalOrbsRedeemed: u }),
          })
        : null;
}
function ee(e) {
    let { cardRef: t, returnRef: l, targetElementRef: a, shouldShow: i, analyticsPage: r, onCloseWallet: o } = e,
        c = s.useCallback(
            () => (0, n.jsx)($, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: o }),
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
