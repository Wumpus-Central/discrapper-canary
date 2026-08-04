n.d(t, {
    c9: () => ei,
    dN: () => er,
    TQ: () => es,
    UX: () => ec,
    Lk: () => eu,
    lg: () => eo,
    H1: () => ee,
    T2: () => ea,
    ix: () => J,
    Xf: () => Z,
    _c: () => en,
});
var r = n(477900),
    s = n(582128),
    i = n(534740),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(691540),
    d = n(857250),
    C = n(97483),
    A = n(59520),
    f = n(274670),
    E = n(144779);
n(952818);
var _ = n(87719),
    g = n(287809),
    T = n(166403),
    m = n(174459),
    v = n(515718),
    h = n(38405),
    S = n(352774),
    p = n(859703),
    I = n(24001),
    b = n(104886),
    y = n(302654),
    Q = n(514547),
    x = n(291749),
    R = n(971276),
    k = n(18437),
    N = n(590202),
    P = n(971649),
    q = n(183636),
    O = n(927813);
let U = (0, n(945810).mj)({
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
    L = 88245 != n.j ? U : null;
var F = n(710969);
let D = 10 * O.A.Millis.MINUTE,
    w = 30 * O.A.Millis.SECOND;
function B(e, t, n) {
    if (!(0, R.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== q.A.getState()) {
        null != e && (0, S.Fr)(t, e.ttlMillis);
        return;
    }
    if (p.A.isFetchingQuestToDeliverByPlacement(t) || !p.A.canRefreshAd(t)) return;
    let { enableNewRequestBehavior: r } = y.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, S.N1)(), (0, S.r8)(t, n));
}
var H = n(651892),
    M = n(901406),
    V = n(801365),
    G = n(792620),
    j = n(814793),
    K = n(753386),
    W = n(175248),
    z = n(617986),
    X = n(190107),
    Y = n(652215),
    $ = n(375708);
function J(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: i, sourceQuestContent: a } = e,
        o = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, k.Ut)(),
        A = (0, P.go)();
    return s.useCallback(() => {
        null != t &&
            ((0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, f.r)({
                      type: E.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: N.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: A,
                      questContentPosition: r,
                      questContentRowIndex: i,
                  })
                : C({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: N.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: i,
                      sourceQuestContent: a,
                  }),
            (0, V.ks)(t.config) && !d
                ? (0, W.E)()
                : c
                  ? (0, V.K9)(t.config)
                      ? (0, _.x)()
                      : (0, V.tU)(t.config)
                        ? (0, z.hJ)(t, n, a)
                        : (0, V.HG)(t.config)
                          ? (0, z.cf)(t, n, a)
                          : (0, V.ks)(t.config)
                            ? (0, z.Df)(t, n, a)
                            : (0, z.rx)({ quest: t, sourceQuestContent: a })
                  : (0, W.E)());
    }, [t, C, A, n, r, i, c, d, a]);
}
function Z(e) {
    let { useReducedMotion: t, className: n } = e,
        [l, u] = (0, a.z)(() => ({})),
        c = s.useRef(!1),
        d = (0, i.animated)(o.f);
    return {
        render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : l, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (c.current = !0),
                u({
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
    let { message: s, xboxURL: i } = (0, Q.UX)(),
        u = (0, k.Ut)(),
        a = (0, P.go)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let s = r.target;
            if (s?.tagName?.toLowerCase() !== "a") return;
            let o = s.getAttribute("href") === i ? N.Cy.HOW_TO_HELP_ARTICLE_XBOX : N.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, f.r)({
                      type: E.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: o,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: a,
                  })
                : u({ questId: e, questContent: t, questContentCTA: o, sourceQuestContent: n });
        },
        children: s,
    });
};
function et(e) {
    return (0, G.vl)(e)
        ? e.config.features.includes(X.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: $.intl.string($.t["+qoymD"]), questContentCTA: N.Cy.START_QUEST }
            : { text: $.intl.string($.t.E4kW5O), questContentCTA: N.Cy.START_QUEST }
        : (0, G.Ov)(e)
          ? { text: $.intl.string($.t.CkUzLd), questContentCTA: N.Cy.START_QUEST }
          : { text: $.intl.string($.t.l7E81v), questContentCTA: N.Cy.ACCEPT_QUEST };
}
function en(e) {
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
        d = J({ quest: t, questContent: r, questContentPosition: i, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, Q.RR)({ quest: t }),
        A = (0, Q.fc)(t),
        f = (0, P.vU)()?.getId(),
        { launchInGameActivity: E } = (0, Q.zW)(t),
        _ = (0, j.vA)(t);
    return s.useMemo(() => {
        switch (n) {
            case Q.F3.UNACCEPTED:
                let e = $.intl.string($.t.kUQLMJ),
                    s = N.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = $.intl.string($.t.umdNin)), (s = N.Cy.START_QUEST)),
                    (o || (0, G.vl)(t)) && ({ text: e, questContentCTA: s } = et(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, G.K$)(t)) {
                                await (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, z.Fy)(t);
                                return;
                            }
                            a ||
                                _ ||
                                (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, z.e0)(t, {
                                          questContent: r,
                                          questContentCTA: s,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: N.Cy.ACCEPT_QUEST,
                                          questContentPosition: i,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, S.Oy)(t.id, {
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
            case Q.F3.ACCEPTED:
            case Q.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: $.intl.string($.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, M.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: N.Cy.CONNECT_CONSOLE,
                                    position: i,
                                    rowIndex: l,
                                    impressionId: f,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, G.K$)(t))
                    return {
                        text: $.intl.string($.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, z.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, K.WM)(A),
                        tooltipText: $.intl.string($.t.hsbwjv),
                        onClick: () =>
                            (0, z.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: N.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: e } = et(t);
                    return {
                        text: e,
                        tooltipText: $.intl.string($.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: $.intl.string($.t.cfY4PE), tooltipText: $.intl.string($.t.hsbwjv), onClick: null };
            case Q.F3.COMPLETED:
                return { text: $.intl.string($.t.cfY4PE), tooltipText: null, onClick: d };
            case Q.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, V.r7)(t.config) ? $.intl.string($.t.bAGFz3) : $.intl.string($.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, t, r, i, l, f, A, o, E, c, _]);
}
function er() {
    let { enableNewRequestBehavior: e } = y.A.useConfig({ location: "useQuestBarQuest" }),
        t = (function (e) {
            let t = (0, s.useRef)(null),
                n = (0, u.bG)([p.A], () => p.A.questAdDecisionByPlacement.get(e) ?? null),
                r = (0, u.bG)([p.A], () => (n?.questId != null ? (p.A.quests.get(n.questId) ?? null) : null)),
                { enableFastAdRecheck: i } = L.useConfig({ location: "useQuestForAdPlacement" });
            return ((0, s.useEffect)(() => {
                null != t.current && clearInterval(t.current);
                let r = i ? w : D;
                B(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        B(p.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, r));
                let s = t.current;
                return () => {
                    null != s && clearInterval(s);
                };
            }, [n, e, i]),
            null == r || (0, F.Ic)(r))
                ? null
                : r;
        })(I.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, u.bG)([p.A], () => p.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []),
        r = (0, u.bG)(
            [p.A],
            () => (0, F.t6)(p.A.quests, p.A.questToDeliverForPlacement, I.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return n ?? (e ? t : r);
}
function es(e) {
    let { quest: t } = e,
        n = (0, R.s)(),
        r = (0, Q.LS)(t),
        { premiumSubscription: s } = (0, u.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        i = (0, u.bG)([p.A], () => null != p.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (i && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, V.K9)(t.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, F.gO)(t.userStatus, I.uF.QUEST_BAR);
    return l
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : r
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? a
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function ei() {
    let { isQuestBarVisible: e } = es({ quest: er() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([p.A], () => ({
            lastFetchedCurrentQuests: p.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: p.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let el = { leading: !0, trailing: !1 };
function eu(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, A.I)(
        s.useCallback(() => {
            t && ((0, H.Xm)(n, r), (0, c.P0)((0, d.o)($.intl.string($.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        el,
    );
}
function ea() {
    let e = (0, u.bG)([p.A], () => p.A.getQuestHomeHero()),
        [t, n] = s.useState(() => Date.now()),
        r = null != e ? Date.parse(e.endsAt) : null,
        i = null != e;
    return (s.useEffect(() => {
        if (!i) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [i]),
    null == e || null == r || Number.isNaN(r) || t >= r)
        ? null
        : e;
}
function eo(e) {
    let [t, n] = s.useState(!0),
        [r, i] = s.useState(!1),
        [a, o] = s.useState(!1),
        c = (0, u.bG)([p.A], () => p.A.isFetchingQuestHomeHero()),
        d = ea();
    s.useEffect(() => {
        !(async function () {
            try {
                null != e ? await (0, S.IV)(e) : await (0, S.Yf)();
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
                            m.default.track(Y.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: X.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                h.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != s ? `${s}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: X.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            i(!0);
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, x.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(v.NN));
                } catch (e) {}
            })();
        }, [d]);
    let C = !t && !c && !a && !r && null == e && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: t || c, confirmedEmpty: C };
}
function ec(e) {
    let t = ea(),
        { isShelfEnabled: n } = (0, Q.t9)(t);
    return !n && null != t && (0, j.I0)(t, e);
}
