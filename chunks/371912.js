"use strict";
n.d(t, {
    c9: () => er,
    dN: () => en,
    TQ: () => ei,
    UX: () => eu,
    Lk: () => ea,
    lg: () => el,
    H1: () => J,
    T2: () => eo,
    ix: () => X,
    Xf: () => Q,
    _c: () => et,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968),
    r = n(64700),
    s = n(873263),
    a = n(580929),
    o = n(323889),
    l = n(17928),
    u = n(717421),
    c = n(663417),
    d = n(691540),
    _ = n(857250),
    h = n(97483),
    f = n(59520),
    E = n(274670),
    p = n(144779);
n(952818);
var m = n(87719),
    g = n(287809),
    A = n(166403),
    I = n(174459),
    T = n(515718),
    S = n(38405),
    N = n(340124),
    C = n(859703),
    y = n(24001),
    O = n(192444),
    R = n(104886),
    v = n(302654),
    b = n(347135),
    L = n(46948),
    D = n(971276),
    w = n(18437),
    P = n(590202),
    M = n(971649),
    x = n(183636),
    U = n(927813),
    k = n(710969);
let G = 10 * U.A.Millis.MINUTE;
function V(e, t, n) {
    if (!(0, D.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== x.A.getState()) {
        null != e && (0, N.Fr)(t, e.ttlMillis);
        return;
    }
    if (C.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = v.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, N.N1)(), (0, N.r8)(t, n));
}
var F = n(651892),
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
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: s, sourceQuestContent: a } = e,
        u = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        c = u?.hasVerifiedEmailOrPhone(),
        d = u?.verified,
        _ = (0, w.Ut)(),
        h = (0, M.go)();
    return r.useCallback(() => {
        null != t &&
            ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: p.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: P.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: h,
                      questContentPosition: i,
                      questContentRowIndex: s,
                  })
                : _({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: P.Cy.CLAIM_REWARD,
                      questContentPosition: i,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, H.ks)(t.config) && !d
                ? (0, K.E)()
                : c
                  ? (0, H.K9)(t.config)
                      ? (0, m.x)()
                      : (0, H.tU)(t.config)
                        ? (0, $.hJ)(t, n, a)
                        : (0, H.HG)(t.config)
                          ? (0, $.cf)(t, n, a)
                          : (0, H.ks)(t.config)
                            ? (0, $.Df)(t, n, a)
                            : (0, $.rx)({ quest: t, sourceQuestContent: a })
                  : (0, K.E)());
    }, [t, _, h, n, i, s, c, d, a]);
}
function Q(e) {
    let { useReducedMotion: t, className: n } = e,
        [s, o] = (0, u.z)(() => ({})),
        l = r.useRef(!1),
        d = (0, a.animated)(c.f);
    return {
        render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (l.current = !0),
                o({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => e ?? l.current,
                    immediate: t,
                });
        },
        stopAnimation: () => {
            l.current = !1;
        },
    };
}
let J = (e, t, n) => {
    let { message: r, xboxURL: s } = (0, b.UX)(),
        a = (0, w.Ut)(),
        l = (0, M.go)();
    return (0, i.jsx)("span", {
        onClick: function (i) {
            let r = i.target;
            if (r?.tagName?.toLowerCase() !== "a") return;
            let u = r.getAttribute("href") === s ? P.Cy.HOW_TO_HELP_ARTICLE_XBOX : P.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: p.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: u,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: l,
                  })
                : a({ questId: e, questContent: t, questContentCTA: u, sourceQuestContent: n });
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
            questContentPosition: s,
            questContentRowIndex: a,
            inGiftInventory: o,
            isVideoQuest: l,
            inGameQuest: u,
            sourceQuestContent: c,
        } = e,
        d = X({ quest: t, questContent: i, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        _ = (0, b.RR)({ quest: t }),
        h = (0, b.fc)(t),
        f = (0, M.vU)()?.getId(),
        { launchInGameActivity: E } = (0, b.zW)(t),
        p = (0, W.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case b.F3.UNACCEPTED:
                let e = Z.intl.string(Z.t.kUQLMJ),
                    r = P.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = Z.intl.string(Z.t.umdNin)), (r = P.Cy.START_QUEST)),
                    (u || (0, j.vl)(t)) && ({ text: e, questContentCTA: r } = ee(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, j.K$)(t)) {
                                await (0, N.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, $.Fy)(t);
                                return;
                            }
                            l ||
                                p ||
                                (0, N.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, $.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: P.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : p &&
                                      (await (0, N.Oy)(t.id, {
                                          questContent: i,
                                          questContentCTA: r,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                          sourceQuestContent: c,
                                      }),
                                      E());
                        },
                    }
                );
            case b.F3.ACCEPTED:
            case b.F3.IN_PROGRESS:
                if (_ && o)
                    return {
                        text: Z.intl.string(Z.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, B.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: P.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: f,
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
                if (l)
                    return {
                        text: (0, Y.WM)(h),
                        tooltipText: Z.intl.string(Z.t.hsbwjv),
                        onClick: () =>
                            (0, $.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: P.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (p) {
                    let { text: e } = ee(t);
                    return {
                        text: e,
                        tooltipText: Z.intl.string(Z.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: Z.intl.string(Z.t.cfY4PE), tooltipText: Z.intl.string(Z.t.hsbwjv), onClick: null };
            case b.F3.COMPLETED:
                return { text: Z.intl.string(Z.t.cfY4PE), tooltipText: null, onClick: d };
            case b.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, H.r7)(t.config) ? Z.intl.string(Z.t.bAGFz3) : Z.intl.string(Z.t.vTgCWx),
                };
        }
    }, [n, l, _, o, d, t, i, s, a, f, h, u, E, c, p]);
}
function en() {
    var e;
    let t,
        n,
        i,
        { enableNewRequestBehavior: s } = v.A.useConfig({ location: "useQuestBarQuest" }),
        a =
            ((e = y.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            (t = (0, r.useRef)(null)),
            (n = (0, l.bG)([C.A], () => C.A.questAdDecisionByPlacement.get(e) ?? null)),
            (i = (0, l.bG)([C.A], () => (n?.questId != null ? (C.A.quests.get(n.questId) ?? null) : null))),
            ((0, r.useEffect)(() => {
                null != t.current && clearInterval(t.current),
                    V(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        V(C.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, G));
                let i = t.current;
                return () => {
                    null != i && clearInterval(i);
                };
            }, [n, e]),
            null == i || (0, k.Ic)(i))
                ? null
                : i),
        o = (0, l.bG)([C.A], () => C.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []),
        u = (0, l.bG)(
            [C.A],
            () => (0, k.t6)(C.A.quests, C.A.questToDeliverForPlacement, y.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return o ?? (s ? a : u);
}
function ei(e) {
    let { quest: t } = e,
        n = (0, D.s)(),
        i = (0, b.LS)(t),
        { premiumSubscription: r } = (0, l.cf)([A.A], () => ({ premiumSubscription: A.A.getPremiumSubscription() })),
        s = (0, l.bG)([C.A], () => null != C.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let a = t.userStatus?.claimedAt != null;
    if (s && !a) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, H.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = null != t.userStatus && (0, k.gO)(t.userStatus, y.uF.QUEST_BAR);
    return a
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? o
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function er() {
    let { isQuestBarVisible: e } = ei({ quest: en() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, l.cf)([C.A], () => ({
            lastFetchedCurrentQuests: C.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: C.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let es = { leading: !0, trailing: !1 };
function ea(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, f.I)(
        r.useCallback(() => {
            t && ((0, F.Xm)(n, i), (0, d.P0)((0, _.o)(Z.intl.string(Z.t["+5kSoW"]), h.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        es,
    );
}
function eo() {
    let e = (0, O.Qj)(),
        { search: t } = (0, s.zy)(),
        n = r.useMemo(() => new URLSearchParams(t).getAll(b.L1.AD_CREATIVE_IDS).length > 0, [t]),
        i = (0, l.bG)([C.A], () => C.A.getQuestHomeHero()),
        [a, o] = r.useState(() => Date.now()),
        u = null != i ? Date.parse(i.endsAt) : null,
        c = null != i;
    return (r.useEffect(() => {
        if (!c) return;
        let e = setInterval(() => o(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [c]),
    (e && !n) || null == i || null == u || Number.isNaN(u) || a >= u)
        ? null
        : i;
}
function el(e) {
    let [t, n] = r.useState(!0),
        [i, s] = r.useState(!1),
        [a, u] = r.useState(!1),
        c = (0, l.bG)([C.A], () => C.A.isFetchingQuestHomeHero()),
        d = eo();
    return (
        r.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, N.IV)(e) : await (0, N.Yf)();
                } catch (e) {
                    u(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let e = Error("Hero image is missing");
                        !(function (e) {
                            let { questHomeHero: t, assetId: n, error: i } = e,
                                r = i instanceof Error ? i.message : null;
                            I.default.track(q.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: z.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: o.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                S.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: z.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            s(!0);
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, L.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(T.NN));
                } catch (e) {}
            })();
        }, [d]),
        { questHomeHero: a || i ? null : d, isLoading: t || c }
    );
}
function eu(e) {
    let t = eo(),
        { isShelfEnabled: n } = (0, b.t9)(t);
    return !n && null != t && (0, W.I0)(t, e);
}
