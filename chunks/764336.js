"use strict";
n.d(t, {
    c9: () => es,
    dN: () => er,
    TQ: () => ea,
    UX: () => eu,
    Lk: () => eo,
    lg: () => ec,
    H1: () => et,
    T2: () => ed,
    ix: () => J,
    Xf: () => ee,
    _c: () => ei,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968),
    r = n(64700),
    a = n(873263),
    s = n(580929),
    l = n(323889),
    o = n(17928),
    d = n(717421),
    c = n(663417),
    u = n(691540),
    _ = n(857250),
    E = n(97483),
    A = n(59520),
    h = n(274670),
    I = n(144779);
n(952818);
var f = n(87719),
    p = n(287809),
    T = n(166403),
    m = n(174459),
    g = n(515718),
    S = n(38405),
    N = n(340124),
    C = n(859703),
    R = n(24001),
    O = n(192444),
    L = n(104886),
    y = n(302654),
    D = n(574677),
    v = n(46948),
    b = n(971276),
    M = n(18437),
    P = n(590202),
    U = n(971649),
    w = n(183636),
    G = n(927813);
let x = (0, n(945810).mj)({
    name: "2026-07-ad-recheck-interval-experiment",
    kind: "user",
    defaultConfig: { enableFastAdRecheck: !1 },
    variations: {
        1: { enableFastAdRecheck: !1 },
        2: { enableFastAdRecheck: !0 },
        3: { enableFastAdRecheck: !0 },
        4: { enableFastAdRecheck: !0 },
        5: { enableFastAdRecheck: !0 },
    },
});
var k = n(710969);
let F = 10 * G.A.Millis.MINUTE,
    V = 30 * G.A.Millis.SECOND;
function B(e, t, n) {
    if (!(0, b.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== w.A.getState()) {
        null != e && (0, N.Fr)(t, e.ttlMillis);
        return;
    }
    if (C.A.isFetchingQuestToDeliverByPlacement(t) || !C.A.canRefreshAd(t)) return;
    let { enableNewRequestBehavior: i } = y.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, N.N1)(), (0, N.r8)(t, n));
}
var H = n(651892),
    j = n(901406),
    W = n(801365),
    Y = n(792620),
    K = n(814793),
    $ = n(753386),
    z = n(175248),
    q = n(617986),
    Z = n(190107),
    X = n(652215),
    Q = n(375708);
function J(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: a, sourceQuestContent: s } = e,
        d = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        c = d?.hasVerifiedEmailOrPhone(),
        u = d?.verified,
        _ = (0, M.Ut)(),
        E = (0, U.go)();
    return r.useCallback(() => {
        null != t &&
            ((0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, h.r)({
                      type: I.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: P.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: s,
                      impressionId: E,
                      questContentPosition: i,
                      questContentRowIndex: a,
                  })
                : _({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: P.Cy.CLAIM_REWARD,
                      questContentPosition: i,
                      questContentRowIndex: a,
                      sourceQuestContent: s,
                  }),
            (0, W.ks)(t.config) && !u
                ? (0, z.E)()
                : c
                  ? (0, W.K9)(t.config)
                      ? (0, f.x)()
                      : (0, W.tU)(t.config)
                        ? (0, q.hJ)(t, n, s)
                        : (0, W.HG)(t.config)
                          ? (0, q.cf)(t, n, s)
                          : (0, W.ks)(t.config)
                            ? (0, q.Df)(t, n, s)
                            : (0, q.rx)({ quest: t, sourceQuestContent: s })
                  : (0, z.E)());
    }, [t, _, E, n, i, a, c, u, s]);
}
function ee(e) {
    let { useReducedMotion: t, className: n } = e,
        [a, l] = (0, d.z)(() => ({})),
        o = r.useRef(!1),
        u = (0, s.animated)(c.f);
    return {
        render: () => (0, i.jsx)(u, { className: n, style: t ? void 0 : a, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (o.current = !0),
                l({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => e ?? o.current,
                    immediate: t,
                });
        },
        stopAnimation: () => {
            o.current = !1;
        },
    };
}
let et = (e, t, n) => {
    let { message: r, xboxURL: a } = (0, D.UX)(),
        s = (0, M.Ut)(),
        o = (0, U.go)();
    return (0, i.jsx)("span", {
        onClick: function (i) {
            let r = i.target;
            if (r?.tagName?.toLowerCase() !== "a") return;
            let d = r.getAttribute("href") === a ? P.Cy.HOW_TO_HELP_ARTICLE_XBOX : P.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, h.r)({
                      type: I.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: d,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: o,
                  })
                : s({ questId: e, questContent: t, questContentCTA: d, sourceQuestContent: n });
        },
        children: r,
    });
};
function en(e) {
    return (0, Y.vl)(e)
        ? e.config.features.includes(Z.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: Q.intl.string(Q.t["+qoymD"]), questContentCTA: P.Cy.START_QUEST }
            : { text: Q.intl.string(Q.t.E4kW5O), questContentCTA: P.Cy.START_QUEST }
        : (0, Y.Ov)(e)
          ? { text: Q.intl.string(Q.t.CkUzLd), questContentCTA: P.Cy.START_QUEST }
          : { text: Q.intl.string(Q.t.l7E81v), questContentCTA: P.Cy.ACCEPT_QUEST };
}
function ei(e) {
    let {
            quest: t,
            progressState: n,
            questContent: i,
            questContentPosition: a,
            questContentRowIndex: s,
            inGiftInventory: l,
            isVideoQuest: o,
            inGameQuest: d,
            sourceQuestContent: c,
        } = e,
        u = J({ quest: t, questContent: i, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: c }),
        _ = (0, D.RR)({ quest: t }),
        E = (0, D.fc)(t),
        A = (0, U.vU)()?.getId(),
        { launchInGameActivity: h } = (0, D.zW)(t),
        I = (0, K.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case D.F3.UNACCEPTED:
                let e = Q.intl.string(Q.t.kUQLMJ),
                    r = P.Cy.ACCEPT_QUEST;
                return (
                    o && ((e = Q.intl.string(Q.t.umdNin)), (r = P.Cy.START_QUEST)),
                    (d || (0, Y.vl)(t)) && ({ text: e, questContentCTA: r } = en(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, Y.K$)(t)) {
                                await (0, N.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, q.Fy)(t);
                                return;
                            }
                            o ||
                                I ||
                                (0, N.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                o
                                    ? await (0, q.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: P.Cy.ACCEPT_QUEST,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                      })
                                    : I &&
                                      (await (0, N.Oy)(t.id, {
                                          questContent: i,
                                          questContentCTA: r,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                          sourceQuestContent: c,
                                      }),
                                      h());
                        },
                    }
                );
            case D.F3.ACCEPTED:
            case D.F3.IN_PROGRESS:
                if (_ && l)
                    return {
                        text: Q.intl.string(Q.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, j.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: P.Cy.CONNECT_CONSOLE,
                                    position: a,
                                    rowIndex: s,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, Y.K$)(t))
                    return {
                        text: Q.intl.string(Q.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, q.Fy)(t);
                        },
                    };
                if (o)
                    return {
                        text: (0, $.WM)(E),
                        tooltipText: Q.intl.string(Q.t.hsbwjv),
                        onClick: () =>
                            (0, q.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: P.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (I) {
                    let { text: e } = en(t);
                    return {
                        text: e,
                        tooltipText: Q.intl.string(Q.t.hsbwjv),
                        onClick: () => {
                            h();
                        },
                    };
                }
                return { text: Q.intl.string(Q.t.cfY4PE), tooltipText: Q.intl.string(Q.t.hsbwjv), onClick: null };
            case D.F3.COMPLETED:
                return { text: Q.intl.string(Q.t.cfY4PE), tooltipText: null, onClick: u };
            case D.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: u,
                    text: (0, W.r7)(t.config) ? Q.intl.string(Q.t.bAGFz3) : Q.intl.string(Q.t.vTgCWx),
                };
        }
    }, [n, o, _, l, u, t, i, a, s, A, E, d, h, c, I]);
}
function er() {
    let { enableNewRequestBehavior: e } = y.A.useConfig({ location: "useQuestBarQuest" }),
        t = (function (e) {
            let t = (0, r.useRef)(null),
                n = (0, o.bG)([C.A], () => C.A.questAdDecisionByPlacement.get(e) ?? null),
                i = (0, o.bG)([C.A], () => (n?.questId != null ? (C.A.quests.get(n.questId) ?? null) : null)),
                { enableFastAdRecheck: a } = x.useConfig({ location: "useQuestForAdPlacement" });
            return ((0, r.useEffect)(() => {
                null != t.current && clearInterval(t.current);
                let i = a ? V : F;
                B(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        B(C.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, i));
                let r = t.current;
                return () => {
                    null != r && clearInterval(r);
                };
            }, [n, e, a]),
            null == i || (0, k.Ic)(i))
                ? null
                : i;
        })(R.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.bG)([C.A], () => C.A.getQuestPreviewOverride(R.uF.QUEST_BAR_V2), []),
        i = (0, o.bG)(
            [C.A],
            () => (0, k.t6)(C.A.quests, C.A.questToDeliverForPlacement, R.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return n ?? (e ? t : i);
}
function ea(e) {
    let { quest: t } = e,
        n = (0, b.s)(),
        i = (0, D.LS)(t),
        { premiumSubscription: r } = (0, o.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        a = (0, o.bG)([C.A], () => null != C.A.getQuestPreviewOverride(R.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let s = t.userStatus?.claimedAt != null;
    if (a && !s) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, W.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = null != t.userStatus && (0, k.gO)(t.userStatus, R.uF.QUEST_BAR);
    return s
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? l
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function es() {
    let { isQuestBarVisible: e } = ea({ quest: er() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, o.cf)([C.A], () => ({
            lastFetchedCurrentQuests: C.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: C.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let el = { leading: !0, trailing: !1 };
function eo(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, A.I)(
        r.useCallback(() => {
            t && ((0, H.Xm)(n, i), (0, u.P0)((0, _.o)(Q.intl.string(Q.t["+5kSoW"]), E.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        el,
    );
}
function ed() {
    let e = (0, O.Qj)(),
        { search: t } = (0, a.zy)(),
        n = r.useMemo(() => new URLSearchParams(t).getAll(D.L1.AD_CREATIVE_IDS).length > 0, [t]),
        i = (0, o.bG)([C.A], () => C.A.getQuestHomeHero()),
        [s, l] = r.useState(() => Date.now()),
        d = null != i ? Date.parse(i.endsAt) : null,
        c = null != i;
    return (r.useEffect(() => {
        if (!c) return;
        let e = setInterval(() => l(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [c]),
    (e && !n) || null == i || null == d || Number.isNaN(d) || s >= d)
        ? null
        : i;
}
function ec(e) {
    let [t, n] = r.useState(!0),
        [i, a] = r.useState(!1),
        [s, d] = r.useState(!1),
        c = (0, o.bG)([C.A], () => C.A.isFetchingQuestHomeHero()),
        u = ed();
    return (
        r.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, N.IV)(e) : await (0, N.Yf)();
                } catch (e) {
                    d(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == u) return;
                    if (null == u.heroImage) {
                        let e = Error("Hero image is missing");
                        !(function (e) {
                            let { questHomeHero: t, assetId: n, error: i } = e,
                                r = i instanceof Error ? i.message : null;
                            m.default.track(X.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: Z.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                S.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: Z.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: u, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            a(!0);
                        return;
                    }
                    let e = [null != u.heroVideo ? (0, v.WV)(u.heroVideo) : null, u.heroImage, u.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(g.NN));
                } catch (e) {}
            })();
        }, [u]),
        { questHomeHero: s || i ? null : u, isLoading: t || c }
    );
}
function eu(e) {
    let t = ed(),
        { isShelfEnabled: n } = (0, D.t9)(t);
    return !n && null != t && (0, K.I0)(t, e);
}
