"use strict";
n.d(t, {
    c9: () => er,
    dN: () => en,
    TQ: () => ei,
    UX: () => ed,
    Lk: () => es,
    lg: () => eo,
    H1: () => J,
    T2: () => el,
    ix: () => X,
    Xf: () => Q,
    _c: () => et,
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
    O = n(24001),
    R = n(192444),
    L = n(104886),
    D = n(302654),
    y = n(347135),
    v = n(46948),
    b = n(971276),
    M = n(18437),
    P = n(590202),
    U = n(971649),
    w = n(183636),
    G = n(927813),
    x = n(710969);
let k = 10 * G.A.Millis.MINUTE;
function F(e, t, n) {
    if (!(0, b.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== w.A.getState()) {
        null != e && (0, N.Fr)(t, e.ttlMillis);
        return;
    }
    if (C.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = D.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, N.N1)(), (0, N.r8)(t, n));
}
var V = n(651892),
    B = n(901406),
    H = n(801365),
    j = n(792620),
    W = n(814793),
    Y = n(753386),
    K = n(175248),
    $ = n(617986),
    z = n(190107),
    q = n(652215),
    Z = n(375708);
function X(e) {
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
            (0, H.ks)(t.config) && !u
                ? (0, K.E)()
                : c
                  ? (0, H.K9)(t.config)
                      ? (0, f.x)()
                      : (0, H.tU)(t.config)
                        ? (0, $.hJ)(t, n, s)
                        : (0, H.HG)(t.config)
                          ? (0, $.cf)(t, n, s)
                          : (0, H.ks)(t.config)
                            ? (0, $.Df)(t, n, s)
                            : (0, $.rx)({ quest: t, sourceQuestContent: s })
                  : (0, K.E)());
    }, [t, _, E, n, i, a, c, u, s]);
}
function Q(e) {
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
let J = (e, t, n) => {
    let { message: r, xboxURL: a } = (0, y.UX)(),
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
function ee(e) {
    return (0, j.vl)(e)
        ? e.config.features.includes(z.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: Z.intl.string(Z.t["+qoymD"]), questContentCTA: P.Cy.START_QUEST }
            : { text: Z.intl.string(Z.t.E4kW5O), questContentCTA: P.Cy.START_QUEST }
        : (0, j.Ov)(e)
          ? { text: Z.intl.string(Z.t.CkUzLd), questContentCTA: P.Cy.START_QUEST }
          : { text: Z.intl.string(Z.t.l7E81v), questContentCTA: P.Cy.ACCEPT_QUEST };
}
function et(e) {
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
        u = X({ quest: t, questContent: i, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: c }),
        _ = (0, y.RR)({ quest: t }),
        E = (0, y.fc)(t),
        A = (0, U.vU)()?.getId(),
        { launchInGameActivity: h } = (0, y.zW)(t),
        I = (0, W.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case y.F3.UNACCEPTED:
                let e = Z.intl.string(Z.t.kUQLMJ),
                    r = P.Cy.ACCEPT_QUEST;
                return (
                    o && ((e = Z.intl.string(Z.t.umdNin)), (r = P.Cy.START_QUEST)),
                    (d || (0, j.vl)(t)) && ({ text: e, questContentCTA: r } = ee(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, j.K$)(t)) {
                                await (0, N.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, $.Fy)(t);
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
                                    ? await (0, $.e0)(t, {
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
            case y.F3.ACCEPTED:
            case y.F3.IN_PROGRESS:
                if (_ && l)
                    return {
                        text: Z.intl.string(Z.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, B.se)(
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
                if ((0, j.K$)(t))
                    return {
                        text: Z.intl.string(Z.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, $.Fy)(t);
                        },
                    };
                if (o)
                    return {
                        text: (0, Y.WM)(E),
                        tooltipText: Z.intl.string(Z.t.hsbwjv),
                        onClick: () =>
                            (0, $.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: P.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (I) {
                    let { text: e } = ee(t);
                    return {
                        text: e,
                        tooltipText: Z.intl.string(Z.t.hsbwjv),
                        onClick: () => {
                            h();
                        },
                    };
                }
                return { text: Z.intl.string(Z.t.cfY4PE), tooltipText: Z.intl.string(Z.t.hsbwjv), onClick: null };
            case y.F3.COMPLETED:
                return { text: Z.intl.string(Z.t.cfY4PE), tooltipText: null, onClick: u };
            case y.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: u,
                    text: (0, H.r7)(t.config) ? Z.intl.string(Z.t.bAGFz3) : Z.intl.string(Z.t.vTgCWx),
                };
        }
    }, [n, o, _, l, u, t, i, a, s, A, E, d, h, c, I]);
}
function en() {
    var e;
    let t,
        n,
        i,
        { enableNewRequestBehavior: a } = D.A.useConfig({ location: "useQuestBarQuest" }),
        s =
            ((e = O.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            (t = (0, r.useRef)(null)),
            (n = (0, o.bG)([C.A], () => C.A.questAdDecisionByPlacement.get(e) ?? null)),
            (i = (0, o.bG)([C.A], () => (n?.questId != null ? (C.A.quests.get(n.questId) ?? null) : null))),
            ((0, r.useEffect)(() => {
                null != t.current && clearInterval(t.current),
                    F(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        F(C.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, k));
                let i = t.current;
                return () => {
                    null != i && clearInterval(i);
                };
            }, [n, e]),
            null == i || (0, x.Ic)(i))
                ? null
                : i),
        l = (0, o.bG)([C.A], () => C.A.getQuestPreviewOverride(O.uF.QUEST_BAR_V2), []),
        d = (0, o.bG)(
            [C.A],
            () => (0, x.t6)(C.A.quests, C.A.questToDeliverForPlacement, O.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return l ?? (a ? s : d);
}
function ei(e) {
    let { quest: t } = e,
        n = (0, b.s)(),
        i = (0, y.LS)(t),
        { premiumSubscription: r } = (0, o.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        a = (0, o.bG)([C.A], () => null != C.A.getQuestPreviewOverride(O.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let s = t.userStatus?.claimedAt != null;
    if (a && !s) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, H.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = null != t.userStatus && (0, x.gO)(t.userStatus, O.uF.QUEST_BAR);
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
function er() {
    let { isQuestBarVisible: e } = ei({ quest: en() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, o.cf)([C.A], () => ({
            lastFetchedCurrentQuests: C.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: C.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let ea = { leading: !0, trailing: !1 };
function es(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, A.I)(
        r.useCallback(() => {
            t && ((0, V.Xm)(n, i), (0, u.P0)((0, _.o)(Z.intl.string(Z.t["+5kSoW"]), E.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        ea,
    );
}
function el() {
    let e = (0, R.Qj)(),
        { search: t } = (0, a.zy)(),
        n = r.useMemo(() => new URLSearchParams(t).getAll(y.L1.AD_CREATIVE_IDS).length > 0, [t]),
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
function eo(e) {
    let [t, n] = r.useState(!0),
        [i, a] = r.useState(!1),
        [s, d] = r.useState(!1),
        c = (0, o.bG)([C.A], () => C.A.isFetchingQuestHomeHero()),
        u = el();
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
                            m.default.track(q.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: z.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                S.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: z.rE.QUEST_HOME_DESKTOP } },
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
function ed(e) {
    let t = el(),
        { isShelfEnabled: n } = (0, y.t9)(t);
    return !n && null != t && (0, W.I0)(t, e);
}
