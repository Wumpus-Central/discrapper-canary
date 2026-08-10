"use strict";
n.d(t, {
    c9: () => ea,
    dN: () => ei,
    TQ: () => er,
    UX: () => ec,
    Lk: () => el,
    lg: () => ed,
    H1: () => ee,
    T2: () => eo,
    ix: () => Q,
    Xf: () => J,
    _c: () => en,
});
var i = n(477900),
    r = n(582128),
    a = n(682577),
    s = n(323889),
    l = n(17928),
    o = n(717421),
    d = n(663417),
    c = n(691540),
    u = n(857250),
    _ = n(97483),
    E = n(59520),
    A = n(274670),
    h = n(144779);
n(952818);
var I = n(87719),
    f = n(287809),
    p = n(166403),
    T = n(174459),
    m = n(515718),
    g = n(38405),
    S = n(352774),
    N = n(859703),
    C = n(24001),
    O = n(104886),
    R = n(302654),
    L = n(514547),
    D = n(291749),
    y = n(971276),
    v = n(18437),
    b = n(590202),
    M = n(971649),
    P = n(183636),
    U = n(927813);
let w = (0, n(945810).mj)({
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
var G = n(710969);
let x = 10 * U.A.Millis.MINUTE,
    k = 30 * U.A.Millis.SECOND;
function F(e, t, n) {
    if (!(0, y.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== P.A.getState()) {
        null != e && (0, S.Fr)(t, e.ttlMillis);
        return;
    }
    if (N.A.isFetchingQuestToDeliverByPlacement(t) || !N.A.canRefreshAd(t)) return;
    let { enableNewRequestBehavior: i } = R.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, S.N1)(), (0, S.r8)(t, n));
}
function V(e) {
    return (0, l.bG)([N.A], () => N.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
var B = n(651892),
    H = n(901406),
    j = n(801365),
    W = n(792620),
    Y = n(814793),
    K = n(753386),
    $ = n(175248),
    z = n(617986),
    q = n(190107),
    Z = n(652215),
    X = n(375708);
function Q(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: a, sourceQuestContent: o } = e,
        d = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        c = d?.hasVerifiedEmailOrPhone(),
        u = d?.verified,
        _ = (0, v.Ut)(),
        E = (0, M.go)();
    return r.useCallback(() => {
        null != t &&
            ((0, O.E5)(O.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, A.r)({
                      type: h.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: b.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: o,
                      impressionId: E,
                      questContentPosition: i,
                      questContentRowIndex: a,
                  })
                : _({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: b.Cy.CLAIM_REWARD,
                      questContentPosition: i,
                      questContentRowIndex: a,
                      sourceQuestContent: o,
                  }),
            (0, j.ks)(t.config) && !u
                ? (0, $.E)()
                : c
                  ? (0, j.K9)(t.config)
                      ? (0, I.x)()
                      : (0, j.tU)(t.config)
                        ? (0, z.hJ)(t, n, o)
                        : (0, j.HG)(t.config)
                          ? (0, z.cf)(t, n, o)
                          : (0, j.ks)(t.config)
                            ? (0, z.Df)(t, n, o)
                            : (0, z.rx)({ quest: t, sourceQuestContent: o })
                  : (0, $.E)());
    }, [t, _, E, n, i, a, c, u, o]);
}
function J(e) {
    let { useReducedMotion: t, className: n } = e,
        [s, l] = (0, o.z)(() => ({})),
        c = r.useRef(!1),
        u = (0, a.animated)(d.f);
    return {
        render: () => (0, i.jsx)(u, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (c.current = !0),
                l({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => e ?? c.current,
                    immediate: t,
                });
        },
        stopAnimation: () => {
            c.current = !1;
        },
    };
}
let ee = (e, t, n) => {
    let { message: r, xboxURL: a } = (0, L.UX)(),
        l = (0, v.Ut)(),
        o = (0, M.go)();
    return (0, i.jsx)("span", {
        onClick: function (i) {
            let r = i.target;
            if (r?.tagName?.toLowerCase() !== "a") return;
            let d = r.getAttribute("href") === a ? b.Cy.HOW_TO_HELP_ARTICLE_XBOX : b.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, O.E5)(O.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, A.r)({
                      type: h.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: d,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: o,
                  })
                : l({ questId: e, questContent: t, questContentCTA: d, sourceQuestContent: n });
        },
        children: r,
    });
};
function et(e) {
    return (0, W.vl)(e)
        ? e.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: X.intl.string(X.t["+qoymD"]), questContentCTA: b.Cy.START_QUEST }
            : { text: X.intl.string(X.t.E4kW5O), questContentCTA: b.Cy.START_QUEST }
        : (0, W.Ov)(e)
          ? { text: X.intl.string(X.t.CkUzLd), questContentCTA: b.Cy.START_QUEST }
          : { text: X.intl.string(X.t.l7E81v), questContentCTA: b.Cy.ACCEPT_QUEST };
}
function en(e) {
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
        u = Q({ quest: t, questContent: i, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: c }),
        _ = (0, L.RR)({ quest: t }),
        E = (0, L.fc)(t),
        A = (0, M.vU)()?.getId(),
        { launchInGameActivity: h } = (0, L.zW)(t),
        I = (0, Y.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case L.F3.UNACCEPTED:
                let e = X.intl.string(X.t.kUQLMJ),
                    r = b.Cy.ACCEPT_QUEST;
                return (
                    o && ((e = X.intl.string(X.t.umdNin)), (r = b.Cy.START_QUEST)),
                    (d || (0, W.vl)(t)) && ({ text: e, questContentCTA: r } = et(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, W.K$)(t)) {
                                await (0, S.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, z.Fy)(t);
                                return;
                            }
                            o ||
                                I ||
                                (0, S.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                o
                                    ? await (0, z.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: b.Cy.ACCEPT_QUEST,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                      })
                                    : I &&
                                      (await (0, S.Oy)(t.id, {
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
            case L.F3.ACCEPTED:
            case L.F3.IN_PROGRESS:
                if (_ && l)
                    return {
                        text: X.intl.string(X.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, H.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: b.Cy.CONNECT_CONSOLE,
                                    position: a,
                                    rowIndex: s,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, W.K$)(t))
                    return {
                        text: X.intl.string(X.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, z.Fy)(t);
                        },
                    };
                if (o)
                    return {
                        text: (0, K.WM)(E),
                        tooltipText: X.intl.string(X.t.hsbwjv),
                        onClick: () =>
                            (0, z.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (I) {
                    let { text: e } = et(t);
                    return {
                        text: e,
                        tooltipText: X.intl.string(X.t.hsbwjv),
                        onClick: () => {
                            h();
                        },
                    };
                }
                return { text: X.intl.string(X.t.cfY4PE), tooltipText: X.intl.string(X.t.hsbwjv), onClick: null };
            case L.F3.COMPLETED:
                return { text: X.intl.string(X.t.cfY4PE), tooltipText: null, onClick: u };
            case L.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: u,
                    text: (0, j.r7)(t.config) ? X.intl.string(X.t.bAGFz3) : X.intl.string(X.t.vTgCWx),
                };
        }
    }, [n, o, _, l, u, t, i, a, s, A, E, d, h, c, I]);
}
function ei() {
    var e;
    let t,
        n,
        { enableNewRequestBehavior: i } = R.A.useConfig({ location: "useQuestBarQuest" }),
        a =
            (!(function (e) {
                let t = (0, r.useRef)(null),
                    n = V(e),
                    { enableFastAdRecheck: i } = w.useConfig({ location: "useQuestForAdPlacement" });
                (0, r.useEffect)(() => {
                    null != t.current && clearInterval(t.current);
                    let r = i ? k : x;
                    F(n, e, "questBar-open"),
                        (t.current = setInterval(() => {
                            F(N.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                        }, r));
                    let a = t.current;
                    return () => {
                        null != a && clearInterval(a);
                    };
                }, [n, e, i]);
            })((e = C.p9.DESKTOP_ACCOUNT_PANEL_AREA)),
            (t = V(e)),
            null == (n = (0, l.bG)([N.A], () => (t?.questId != null ? (N.A.quests.get(t.questId) ?? null) : null))) ||
            (0, G.Ic)(n)
                ? null
                : n),
        s = (0, l.bG)([N.A], () => N.A.getQuestPreviewOverride(C.uF.QUEST_BAR_V2), []),
        o = (0, l.bG)(
            [N.A],
            () => (0, G.t6)(N.A.quests, N.A.questToDeliverForPlacement, C.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return s ?? (i ? a : o);
}
function er(e) {
    let { quest: t } = e,
        n = (0, y.s)(),
        i = (0, L.LS)(t),
        { premiumSubscription: r } = (0, l.cf)([p.A], () => ({ premiumSubscription: p.A.getPremiumSubscription() })),
        a = (0, l.bG)([N.A], () => null != N.A.getQuestPreviewOverride(C.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let s = t.userStatus?.claimedAt != null;
    if (a && !s) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, j.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = null != t.userStatus && (0, G.gO)(t.userStatus, C.uF.QUEST_BAR);
    return s
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? o
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function ea() {
    let { isQuestBarVisible: e } = er({ quest: ei() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, l.cf)([N.A], () => ({
            lastFetchedCurrentQuests: N.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: N.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let es = { leading: !0, trailing: !1 };
function el(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, E.I)(
        r.useCallback(() => {
            t && ((0, B.Xm)(n, i), (0, c.P0)((0, u.o)(X.intl.string(X.t["+5kSoW"]), _.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        es,
    );
}
function eo() {
    let e = (0, l.bG)([N.A], () => N.A.getQuestHomeHero()),
        [t, n] = r.useState(() => Date.now()),
        i = null != e ? Date.parse(e.endsAt) : null,
        a = null != e;
    return (r.useEffect(() => {
        if (!a) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [a]),
    null == e || null == i || Number.isNaN(i) || t >= i)
        ? null
        : e;
}
function ed(e) {
    let [t, n] = r.useState(!0),
        [i, a] = r.useState(!1),
        [o, d] = r.useState(!1),
        c = (0, l.bG)([N.A], () => N.A.isFetchingQuestHomeHero()),
        u = eo();
    r.useEffect(() => {
        !(async function () {
            try {
                null != e ? await (0, S.IV)(e) : await (0, S.Yf)();
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
                            T.default.track(Z.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: q.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: s.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                g.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: q.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: u, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            a(!0);
                        return;
                    }
                    let e = [null != u.heroVideo ? (0, D.WV)(u.heroVideo) : null, u.heroImage, u.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(m.NN));
                } catch (e) {}
            })();
        }, [u]);
    let _ = !t && !c && !o && !i && null == e && null == u;
    return { questHomeHero: o || i ? null : u, isLoading: t || c, confirmedEmpty: _ };
}
function ec(e) {
    let t = eo(),
        { isShelfEnabled: n } = (0, L.t9)(t);
    return !n && null != t && (0, Y.I0)(t, e);
}
