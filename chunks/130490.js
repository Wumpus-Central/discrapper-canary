n.d(t, {
    c9: () => en,
    dN: () => Z,
    TQ: () => et,
    UX: () => eu,
    Lk: () => el,
    lg: () => es,
    H1: () => Y,
    T2: () => er,
    f4: () => ee,
    ix: () => z,
    Xf: () => X,
    _c: () => J,
});
var i = n(477900),
    l = n(582128),
    r = n(950372),
    s = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(691540),
    d = n(857250),
    f = n(97483),
    A = n(59520),
    C = n(157695),
    E = n(274670),
    _ = n(144779);
n(952818);
var g = n(87719),
    T = n(287809),
    m = n(166403),
    v = n(174459),
    I = n(515718),
    S = n(38405),
    h = n(396813),
    p = n(859703),
    y = n(738822),
    b = n(104886);
let x = (0, n(945810).mj)({
        name: "2026-08-no-fill-logging",
        kind: "user",
        defaultConfig: { enableNoFill: !1 },
        variations: { 1: { enableNoFill: !1 }, 2: { enableNoFill: !0 } },
    }),
    Q = 221552 == n.j ? x : null;
var k = n(309593),
    N = n(291749),
    R = n(971276),
    F = n(18437),
    P = n(590202),
    U = n(971649),
    O = n(158403),
    L = n(651892),
    D = n(710969),
    q = n(901406),
    w = n(801365),
    H = n(792620),
    M = n(814793),
    B = n(753386),
    V = n(175248),
    j = n(617986),
    G = n(190107),
    K = n(652215),
    W = n(375708);
function z(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: r, sourceQuestContent: a } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, F.Ut)(),
        A = (0, U.go)();
    return l.useCallback(() => {
        null != t &&
            ((0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: P.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: A,
                      questContentPosition: i,
                      questContentRowIndex: r,
                  })
                : f({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: P.Cy.CLAIM_REWARD,
                      questContentPosition: i,
                      questContentRowIndex: r,
                      sourceQuestContent: a,
                  }),
            (0, w.ks)(t.config) && !d
                ? (0, V.E)()
                : c
                  ? (0, w.K9)(t.config)
                      ? (0, g.x)()
                      : (0, w.tU)(t.config)
                        ? (0, j.hJ)(t, n, a)
                        : (0, w.HG)(t.config)
                          ? (0, j.cf)(t, n, a)
                          : (0, w.ks)(t.config)
                            ? (0, j.Df)(t, n, a)
                            : (0, j.rx)({ quest: t, sourceQuestContent: a })
                  : (0, V.E)());
    }, [t, f, A, n, i, r, c, d, a]);
}
function X(e) {
    let { useReducedMotion: t, className: n } = e,
        [s, u] = (0, a.z)(() => ({})),
        c = l.useRef(!1),
        d = (0, r.animated)(o.RefreshIcon);
    return {
        render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
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
let Y = (e, t, n) => {
    let { message: l, xboxURL: r } = (0, k.UX)(),
        u = (0, F.Ut)(),
        a = (0, U.go)();
    return (0, i.jsx)("span", {
        onClick: function (i) {
            let l = i.target;
            if (l?.tagName?.toLowerCase() !== "a") return;
            let o = l.getAttribute("href") === r ? P.Cy.HOW_TO_HELP_ARTICLE_XBOX : P.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: o,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: a,
                  })
                : u({ questId: e, questContent: t, questContentCTA: o, sourceQuestContent: n });
        },
        children: l,
    });
};
function $(e) {
    return (0, H.vl)(e)
        ? e.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: W.intl.string(W.t["+qoymD"]), questContentCTA: P.Cy.START_QUEST }
            : { text: W.intl.string(W.t.E4kW5O), questContentCTA: P.Cy.START_QUEST }
        : (0, H.Ov)(e)
          ? { text: W.intl.string(W.t.CkUzLd), questContentCTA: P.Cy.START_QUEST }
          : { text: W.intl.string(W.t.l7E81v), questContentCTA: P.Cy.ACCEPT_QUEST };
}
function J(e) {
    let {
            quest: t,
            progressState: n,
            questContent: i,
            questContentPosition: r,
            questContentRowIndex: s,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = e,
        d = z({ quest: t, questContent: i, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: c }),
        f = (0, k.RR)({ quest: t }),
        A = (0, k.fc)(t),
        C = (0, U.vU)()?.getId(),
        { launchInGameActivity: E } = (0, k.zW)(t),
        _ = (0, M.vA)(t);
    return l.useMemo(() => {
        switch (n) {
            case k.F3.UNACCEPTED:
                let e = W.intl.string(W.t.kUQLMJ),
                    l = P.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = W.intl.string(W.t.umdNin)), (l = P.Cy.START_QUEST)),
                    (o || (0, H.vl)(t)) && ({ text: e, questContentCTA: l } = $(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, H.K$)(t)) {
                                await (0, h.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: l,
                                    questContentPosition: r,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, j.Fy)(t);
                                return;
                            }
                            a ||
                                _ ||
                                (0, h.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: l,
                                    questContentPosition: r,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, j.e0)(t, {
                                          questContent: i,
                                          questContentCTA: l,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: P.Cy.ACCEPT_QUEST,
                                          questContentPosition: r,
                                          questContentRowIndex: s,
                                      })
                                    : _ &&
                                      (await (0, h.Oy)(t.id, {
                                          questContent: i,
                                          questContentCTA: l,
                                          questContentPosition: r,
                                          questContentRowIndex: s,
                                          sourceQuestContent: c,
                                      }),
                                      E());
                        },
                    }
                );
            case k.F3.ACCEPTED:
            case k.F3.IN_PROGRESS:
                if (f && u)
                    return {
                        text: W.intl.string(W.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, q.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: P.Cy.CONNECT_CONSOLE,
                                    position: r,
                                    rowIndex: s,
                                    impressionId: C,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, H.K$)(t))
                    return {
                        text: W.intl.string(W.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, j.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, B.WM)(A),
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () =>
                            (0, j.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: P.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: e } = $(t);
                    return {
                        text: e,
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: W.intl.string(W.t.hsbwjv), onClick: null };
            case k.F3.COMPLETED:
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: null, onClick: d };
            case k.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, w.r7)(t.config) ? W.intl.string(W.t.bAGFz3) : W.intl.string(W.t.vTgCWx),
                };
        }
    }, [n, a, f, u, d, t, i, r, s, C, A, o, E, c, _]);
}
function Z() {
    let e = (0, O.Ay)(y.p9.DESKTOP_ACCOUNT_PANEL_AREA);
    return (0, u.bG)([p.A], () => p.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []) ?? e;
}
function ee() {
    let { enableNoFill: e } = Q.useConfig({ location: "useNoFillAd" }),
        t = (0, u.bG)([C.A], () => C.A.getNoFillForPlacement(y.p9.DESKTOP_ACCOUNT_PANEL_AREA)),
        n = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        [i, r] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == t) return;
            let e = setTimeout(() => r(t.decisionId), Math.max(t.fetchedAt + t.ttlMillis - Date.now(), 0));
            return () => clearTimeout(e);
        }, [t]),
        e && null != t && t.decisionId !== i && (0, R.s)() && !n ? t : null
    );
}
function et(e) {
    let { quest: t } = e,
        n = (0, R.s)(),
        i = (0, k.LS)(t),
        { premiumSubscription: l } = (0, u.cf)([m.A], () => ({ premiumSubscription: m.A.getPremiumSubscription() })),
        r = (0, u.bG)([p.A], () => null != p.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let s = t.userStatus?.claimedAt != null;
    if (r && !s) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, w.K9)(t.config) && l?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, D.gO)(t.userStatus, y.uF.QUEST_BAR);
    return s
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? a
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function en() {
    let { isQuestBarVisible: e } = et({ quest: Z() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([p.A, C.A], () => ({
            lastFetchedCurrentQuests: p.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: C.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let ei = { leading: !0, trailing: !1 };
function el(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, A.I)(
        l.useCallback(() => {
            t && ((0, L.Xm)(n, i), (0, c.P0)((0, d.o)(W.intl.string(W.t["+5kSoW"]), f.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        ei,
    );
}
function er() {
    let e = (0, u.bG)([C.A], () => C.A.getQuestHomeHero()),
        [t, n] = l.useState(() => Date.now()),
        i = null != e ? Date.parse(e.endsAt) : null,
        r = null != e;
    return (l.useEffect(() => {
        if (!r) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [r]),
    null == e || null == i || Number.isNaN(i) || t >= i)
        ? null
        : e;
}
function es(e) {
    let [t, n] = l.useState(!0),
        [i, r] = l.useState(!1),
        [a, o] = l.useState(!1),
        c = (0, u.bG)([C.A], () => C.A.isFetchingQuestHomeHero()),
        d = er();
    l.useEffect(() => {
        !(async function () {
            try {
                null != e ? await (0, h.IV)(e) : await (0, h.Yf)();
            } catch (e) {
                o(!0);
            } finally {
                n(!1);
            }
        })();
    }, [e]),
        l.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let e = Error("Hero image is missing");
                        !(function (e) {
                            let { questHomeHero: t, assetId: n, error: i } = e,
                                l = i instanceof Error ? i.message : null;
                            v.default.track(K.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: G.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: s.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                S.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != l ? `${l}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: G.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            r(!0);
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, N.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(I.NN));
                } catch (e) {}
            })();
        }, [d]);
    let f = !t && !c && !a && !i && null == e && null == d;
    return { questHomeHero: a || i ? null : d, isLoading: t || c, confirmedEmpty: f };
}
function eu(e) {
    let t = er(),
        { isShelfEnabled: n } = (0, k.t9)(t);
    return !n && null != t && (0, M.I0)(t, e);
}
