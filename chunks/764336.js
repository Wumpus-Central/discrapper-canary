n.d(t, {
    c9: () => eu,
    dN: () => ei,
    TQ: () => el,
    UX: () => eA,
    Lk: () => eo,
    lg: () => ed,
    H1: () => en,
    T2: () => ec,
    ix: () => ee,
    Xf: () => et,
    _c: () => es,
}),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    s = n(64700);
if (88245 != n.j) var i = n(873263);
var l = n(580929),
    u = n(323889),
    a = n(17928),
    o = n(717421),
    c = n(663417),
    d = n(691540),
    A = n(857250),
    C = n(97483),
    f = n(59520),
    E = n(274670),
    _ = n(144779);
n(952818);
var g = n(87719),
    T = n(287809),
    m = n(166403),
    v = n(174459),
    h = n(515718),
    S = n(38405),
    I = n(340124),
    p = n(859703),
    y = n(24001),
    b = n(192444),
    Q = n(104886),
    R = n(302654),
    x = n(574677),
    k = n(46948),
    N = n(971276),
    P = n(18437),
    L = n(590202),
    U = n(971649),
    q = n(183636),
    O = n(927813);
let D = (0, n(945810).mj)({
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
    }),
    F = 88245 != n.j ? D : null;
var w = n(710969);
let B = 10 * O.A.Millis.MINUTE,
    H = 30 * O.A.Millis.SECOND;
function M(e, t, n) {
    if (!(0, N.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== q.A.getState()) {
        null != e && (0, I.Fr)(t, e.ttlMillis);
        return;
    }
    if (p.A.isFetchingQuestToDeliverByPlacement(t) || !p.A.canRefreshAd(t)) return;
    let { enableNewRequestBehavior: r } = R.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, I.N1)(), (0, I.r8)(t, n));
}
var V = n(651892),
    j = n(901406),
    G = n(801365),
    K = n(792620),
    W = n(814793),
    z = n(753386),
    X = n(175248),
    Y = n(617986),
    $ = n(190107),
    J = n(652215),
    Z = n(375708);
function ee(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: i, sourceQuestContent: l } = e,
        o = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        A = (0, P.Ut)(),
        C = (0, U.go)();
    return s.useCallback(() => {
        null != t &&
            ((0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: L.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: l,
                      impressionId: C,
                      questContentPosition: r,
                      questContentRowIndex: i,
                  })
                : A({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: L.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: i,
                      sourceQuestContent: l,
                  }),
            (0, G.ks)(t.config) && !d
                ? (0, X.E)()
                : c
                  ? (0, G.K9)(t.config)
                      ? (0, g.x)()
                      : (0, G.tU)(t.config)
                        ? (0, Y.hJ)(t, n, l)
                        : (0, G.HG)(t.config)
                          ? (0, Y.cf)(t, n, l)
                          : (0, G.ks)(t.config)
                            ? (0, Y.Df)(t, n, l)
                            : (0, Y.rx)({ quest: t, sourceQuestContent: l })
                  : (0, X.E)());
    }, [t, A, C, n, r, i, c, d, l]);
}
function et(e) {
    let { useReducedMotion: t, className: n } = e,
        [i, u] = (0, o.z)(() => ({})),
        a = s.useRef(!1),
        d = (0, l.animated)(c.f);
    return {
        render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : i, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (a.current = !0),
                u({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => e ?? a.current,
                    immediate: t,
                });
        },
        stopAnimation: () => {
            a.current = !1;
        },
    };
}
let en = (e, t, n) => {
    let { message: s, xboxURL: i } = (0, x.UX)(),
        l = (0, P.Ut)(),
        a = (0, U.go)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let s = r.target;
            if (s?.tagName?.toLowerCase() !== "a") return;
            let o = s.getAttribute("href") === i ? L.Cy.HOW_TO_HELP_ARTICLE_XBOX : L.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: o,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: a,
                  })
                : l({ questId: e, questContent: t, questContentCTA: o, sourceQuestContent: n });
        },
        children: s,
    });
};
function er(e) {
    return (0, K.vl)(e)
        ? e.config.features.includes($.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: Z.intl.string(Z.t["+qoymD"]), questContentCTA: L.Cy.START_QUEST }
            : { text: Z.intl.string(Z.t.E4kW5O), questContentCTA: L.Cy.START_QUEST }
        : (0, K.Ov)(e)
          ? { text: Z.intl.string(Z.t.CkUzLd), questContentCTA: L.Cy.START_QUEST }
          : { text: Z.intl.string(Z.t.l7E81v), questContentCTA: L.Cy.ACCEPT_QUEST };
}
function es(e) {
    let {
            quest: t,
            progressState: n,
            questContent: r,
            questContentPosition: i,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = e,
        d = ee({ quest: t, questContent: r, questContentPosition: i, questContentRowIndex: l, sourceQuestContent: c }),
        A = (0, x.RR)({ quest: t }),
        C = (0, x.fc)(t),
        f = (0, U.vU)()?.getId(),
        { launchInGameActivity: E } = (0, x.zW)(t),
        _ = (0, W.vA)(t);
    return s.useMemo(() => {
        switch (n) {
            case x.F3.UNACCEPTED:
                let e = Z.intl.string(Z.t.kUQLMJ),
                    s = L.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = Z.intl.string(Z.t.umdNin)), (s = L.Cy.START_QUEST)),
                    (o || (0, K.vl)(t)) && ({ text: e, questContentCTA: s } = er(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, K.K$)(t)) {
                                await (0, I.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, Y.Fy)(t);
                                return;
                            }
                            a ||
                                _ ||
                                (0, I.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, Y.e0)(t, {
                                          questContent: r,
                                          questContentCTA: s,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: L.Cy.ACCEPT_QUEST,
                                          questContentPosition: i,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, I.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: s,
                                          questContentPosition: i,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      E());
                        },
                    }
                );
            case x.F3.ACCEPTED:
            case x.F3.IN_PROGRESS:
                if (A && u)
                    return {
                        text: Z.intl.string(Z.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, j.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: L.Cy.CONNECT_CONSOLE,
                                    position: i,
                                    rowIndex: l,
                                    impressionId: f,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, K.K$)(t))
                    return {
                        text: Z.intl.string(Z.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, Y.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, z.WM)(C),
                        tooltipText: Z.intl.string(Z.t.hsbwjv),
                        onClick: () =>
                            (0, Y.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: L.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: e } = er(t);
                    return {
                        text: e,
                        tooltipText: Z.intl.string(Z.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: Z.intl.string(Z.t.cfY4PE), tooltipText: Z.intl.string(Z.t.hsbwjv), onClick: null };
            case x.F3.COMPLETED:
                return { text: Z.intl.string(Z.t.cfY4PE), tooltipText: null, onClick: d };
            case x.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, G.r7)(t.config) ? Z.intl.string(Z.t.bAGFz3) : Z.intl.string(Z.t.vTgCWx),
                };
        }
    }, [n, a, A, u, d, t, r, i, l, f, C, o, E, c, _]);
}
function ei() {
    let { enableNewRequestBehavior: e } = R.A.useConfig({ location: "useQuestBarQuest" }),
        t = (function (e) {
            let t = (0, s.useRef)(null),
                n = (0, a.bG)([p.A], () => p.A.questAdDecisionByPlacement.get(e) ?? null),
                r = (0, a.bG)([p.A], () => (n?.questId != null ? (p.A.quests.get(n.questId) ?? null) : null)),
                { enableFastAdRecheck: i } = F.useConfig({ location: "useQuestForAdPlacement" });
            return ((0, s.useEffect)(() => {
                null != t.current && clearInterval(t.current);
                let r = i ? H : B;
                M(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        M(p.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, r));
                let s = t.current;
                return () => {
                    null != s && clearInterval(s);
                };
            }, [n, e, i]),
            null == r || (0, w.Ic)(r))
                ? null
                : r;
        })(y.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, a.bG)([p.A], () => p.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []),
        r = (0, a.bG)(
            [p.A],
            () => (0, w.t6)(p.A.quests, p.A.questToDeliverForPlacement, y.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return n ?? (e ? t : r);
}
function el(e) {
    let { quest: t } = e,
        n = (0, N.s)(),
        r = (0, x.LS)(t),
        { premiumSubscription: s } = (0, a.cf)([m.A], () => ({ premiumSubscription: m.A.getPremiumSubscription() })),
        i = (0, a.bG)([p.A], () => null != p.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (i && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, G.K9)(t.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = null != t.userStatus && (0, w.gO)(t.userStatus, y.uF.QUEST_BAR);
    return l
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : r
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? u
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function eu() {
    let { isQuestBarVisible: e } = el({ quest: ei() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, a.cf)([p.A], () => ({
            lastFetchedCurrentQuests: p.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: p.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let ea = { leading: !0, trailing: !1 };
function eo(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, f.I)(
        s.useCallback(() => {
            t && ((0, V.Xm)(n, r), (0, d.P0)((0, A.o)(Z.intl.string(Z.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        ea,
    );
}
function ec() {
    let e = (0, b.Qj)(),
        { search: t } = (0, i.zy)(),
        n = s.useMemo(() => new URLSearchParams(t).getAll(x.L1.AD_CREATIVE_IDS).length > 0, [t]),
        r = (0, a.bG)([p.A], () => p.A.getQuestHomeHero()),
        [l, u] = s.useState(() => Date.now()),
        o = null != r ? Date.parse(r.endsAt) : null,
        c = null != r;
    return (s.useEffect(() => {
        if (!c) return;
        let e = setInterval(() => u(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [c]),
    (e && !n) || null == r || null == o || Number.isNaN(o) || l >= o)
        ? null
        : r;
}
function ed(e) {
    let [t, n] = s.useState(!0),
        [r, i] = s.useState(!1),
        [l, o] = s.useState(!1),
        c = (0, a.bG)([p.A], () => p.A.isFetchingQuestHomeHero()),
        d = ec();
    return (
        s.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, I.IV)(e) : await (0, I.Yf)();
                } catch (e) {
                    o(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        s.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let e = Error("Hero image is missing");
                        !(function (e) {
                            let { questHomeHero: t, assetId: n, error: r } = e,
                                s = r instanceof Error ? r.message : null;
                            v.default.track(J.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: $.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: u.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                S.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != s ? `${s}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: $.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            i(!0);
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, k.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(h.NN));
                } catch (e) {}
            })();
        }, [d]),
        { questHomeHero: l || r ? null : d, isLoading: t || c }
    );
}
function eA(e) {
    let t = ec(),
        { isShelfEnabled: n } = (0, x.t9)(t);
    return !n && null != t && (0, W.I0)(t, e);
}
