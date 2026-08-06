n.d(t, {
    c9: () => el,
    dN: () => es,
    TQ: () => ei,
    UX: () => ed,
    Lk: () => ea,
    lg: () => ec,
    H1: () => et,
    T2: () => eo,
    ix: () => Z,
    Xf: () => ee,
    _c: () => er,
});
var r = n(477900),
    s = n(582128),
    i = n(682577),
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
function H(e) {
    return (0, u.bG)([p.A], () => p.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
var M = n(651892),
    V = n(901406),
    G = n(801365),
    j = n(792620),
    K = n(814793),
    W = n(753386),
    z = n(175248),
    X = n(617986),
    Y = n(190107),
    $ = n(652215),
    J = n(375708);
function Z(e) {
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
            (0, G.ks)(t.config) && !d
                ? (0, z.E)()
                : c
                  ? (0, G.K9)(t.config)
                      ? (0, _.x)()
                      : (0, G.tU)(t.config)
                        ? (0, X.hJ)(t, n, a)
                        : (0, G.HG)(t.config)
                          ? (0, X.cf)(t, n, a)
                          : (0, G.ks)(t.config)
                            ? (0, X.Df)(t, n, a)
                            : (0, X.rx)({ quest: t, sourceQuestContent: a })
                  : (0, z.E)());
    }, [t, C, A, n, r, i, c, d, a]);
}
function ee(e) {
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
let et = (e, t, n) => {
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
function en(e) {
    return (0, j.vl)(e)
        ? e.config.features.includes(Y.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: J.intl.string(J.t["+qoymD"]), questContentCTA: N.Cy.START_QUEST }
            : { text: J.intl.string(J.t.E4kW5O), questContentCTA: N.Cy.START_QUEST }
        : (0, j.Ov)(e)
          ? { text: J.intl.string(J.t.CkUzLd), questContentCTA: N.Cy.START_QUEST }
          : { text: J.intl.string(J.t.l7E81v), questContentCTA: N.Cy.ACCEPT_QUEST };
}
function er(e) {
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
        d = Z({ quest: t, questContent: r, questContentPosition: i, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, Q.RR)({ quest: t }),
        A = (0, Q.fc)(t),
        f = (0, P.vU)()?.getId(),
        { launchInGameActivity: E } = (0, Q.zW)(t),
        _ = (0, K.vA)(t);
    return s.useMemo(() => {
        switch (n) {
            case Q.F3.UNACCEPTED:
                let e = J.intl.string(J.t.kUQLMJ),
                    s = N.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = J.intl.string(J.t.umdNin)), (s = N.Cy.START_QUEST)),
                    (o || (0, j.vl)(t)) && ({ text: e, questContentCTA: s } = en(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, j.K$)(t)) {
                                await (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, X.Fy)(t);
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
                                    ? await (0, X.e0)(t, {
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
                        text: J.intl.string(J.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, V.se)(
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
                if ((0, j.K$)(t))
                    return {
                        text: J.intl.string(J.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, X.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, W.WM)(A),
                        tooltipText: J.intl.string(J.t.hsbwjv),
                        onClick: () =>
                            (0, X.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: N.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: e } = en(t);
                    return {
                        text: e,
                        tooltipText: J.intl.string(J.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: J.intl.string(J.t.cfY4PE), tooltipText: J.intl.string(J.t.hsbwjv), onClick: null };
            case Q.F3.COMPLETED:
                return { text: J.intl.string(J.t.cfY4PE), tooltipText: null, onClick: d };
            case Q.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, G.r7)(t.config) ? J.intl.string(J.t.bAGFz3) : J.intl.string(J.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, t, r, i, l, f, A, o, E, c, _]);
}
function es() {
    var e;
    let t,
        n,
        { enableNewRequestBehavior: r } = y.A.useConfig({ location: "useQuestBarQuest" }),
        i =
            (!(function (e) {
                let t = (0, s.useRef)(null),
                    n = H(e),
                    { enableFastAdRecheck: r } = L.useConfig({ location: "useQuestForAdPlacement" });
                (0, s.useEffect)(() => {
                    null != t.current && clearInterval(t.current);
                    let s = r ? w : D;
                    B(n, e, "questBar-open"),
                        (t.current = setInterval(() => {
                            B(p.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                        }, s));
                    let i = t.current;
                    return () => {
                        null != i && clearInterval(i);
                    };
                }, [n, e, r]);
            })((e = I.p9.DESKTOP_ACCOUNT_PANEL_AREA)),
            (t = H(e)),
            null == (n = (0, u.bG)([p.A], () => (t?.questId != null ? (p.A.quests.get(t.questId) ?? null) : null))) ||
            (0, F.Ic)(n)
                ? null
                : n),
        l = (0, u.bG)([p.A], () => p.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []),
        a = (0, u.bG)(
            [p.A],
            () => (0, F.t6)(p.A.quests, p.A.questToDeliverForPlacement, I.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return l ?? (r ? i : a);
}
function ei(e) {
    let { quest: t } = e,
        n = (0, R.s)(),
        r = (0, Q.LS)(t),
        { premiumSubscription: s } = (0, u.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        i = (0, u.bG)([p.A], () => null != p.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (i && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, G.K9)(t.config) && s?.isPurchasedExternally)
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
function el() {
    let { isQuestBarVisible: e } = ei({ quest: es() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([p.A], () => ({
            lastFetchedCurrentQuests: p.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: p.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let eu = { leading: !0, trailing: !1 };
function ea(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, A.I)(
        s.useCallback(() => {
            t && ((0, M.Xm)(n, r), (0, c.P0)((0, d.o)(J.intl.string(J.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        eu,
    );
}
function eo() {
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
function ec(e) {
    let [t, n] = s.useState(!0),
        [r, i] = s.useState(!1),
        [a, o] = s.useState(!1),
        c = (0, u.bG)([p.A], () => p.A.isFetchingQuestHomeHero()),
        d = eo();
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
                            m.default.track($.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: Y.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                h.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != s ? `${s}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: Y.rE.QUEST_HOME_DESKTOP } },
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
function ed(e) {
    let t = eo(),
        { isShelfEnabled: n } = (0, Q.t9)(t);
    return !n && null != t && (0, K.I0)(t, e);
}
