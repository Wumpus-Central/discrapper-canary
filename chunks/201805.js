n.d(t, {
    H1: () => z,
    Lk: () => et,
    T2: () => en,
    TQ: () => J,
    UX: () => ei,
    Xf: () => W,
    _c: () => Y,
    c9: () => Z,
    dN: () => $,
    ix: () => K,
    lg: () => er,
});
var r = n(477900),
    i = n(582128),
    s = n(296704),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(691540),
    d = n(857250),
    C = n(97483),
    f = n(59520),
    A = n(157695),
    E = n(274670),
    _ = n(144779);
n(952818);
var g = n(87719),
    T = n(287809),
    m = n(166403),
    v = n(174459),
    p = n(515718),
    I = n(38405),
    S = n(396813),
    h = n(859703),
    y = n(738822),
    Q = n(104886),
    b = n(309593),
    x = n(291749),
    k = n(971276),
    R = n(18437),
    U = n(590202),
    L = n(971649),
    N = n(158403),
    O = n(651892),
    P = n(710969),
    F = n(901406),
    q = n(801365),
    D = n(792620),
    w = n(814793),
    H = n(753386),
    B = n(175248),
    M = n(617986),
    V = n(190107),
    j = n(652215),
    G = n(375708);
function K(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, R.Ut)(),
        f = (0, L.go)();
    return i.useCallback(() => {
        null != t &&
            ((0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: U.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: f,
                      questContentPosition: r,
                      questContentRowIndex: s,
                  })
                : C({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: U.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, q.ks)(t.config) && !d
                ? (0, B.E)()
                : c
                  ? (0, q.K9)(t.config)
                      ? (0, g.x)()
                      : (0, q.tU)(t.config)
                        ? (0, M.hJ)(t, n, a)
                        : (0, q.HG)(t.config)
                          ? (0, M.cf)(t, n, a)
                          : (0, q.ks)(t.config)
                            ? (0, M.Df)(t, n, a)
                            : (0, M.rx)({ quest: t, sourceQuestContent: a })
                  : (0, B.E)());
    }, [t, C, f, n, r, s, c, d, a]);
}
function W(e) {
    let { useReducedMotion: t, className: n } = e,
        [l, u] = (0, a.z)(() => ({})),
        c = i.useRef(!1),
        d = (0, s.animated)(o.RefreshIcon);
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
let z = (e, t, n) => {
    let { message: i, xboxURL: s } = (0, b.UX)(),
        u = (0, R.Ut)(),
        a = (0, L.go)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let o = i.getAttribute("href") === s ? U.Cy.HOW_TO_HELP_ARTICLE_XBOX : U.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: o,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: a,
                  })
                : u({ questId: e, questContent: t, questContentCTA: o, sourceQuestContent: n });
        },
        children: i,
    });
};
function X(e) {
    return (0, D.vl)(e)
        ? e.config.features.includes(V.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: G.intl.string(G.t["+qoymD"]), questContentCTA: U.Cy.START_QUEST }
            : { text: G.intl.string(G.t.E4kW5O), questContentCTA: U.Cy.START_QUEST }
        : (0, D.Ov)(e)
          ? { text: G.intl.string(G.t.CkUzLd), questContentCTA: U.Cy.START_QUEST }
          : { text: G.intl.string(G.t.l7E81v), questContentCTA: U.Cy.ACCEPT_QUEST };
}
function Y(e) {
    let {
            quest: t,
            progressState: n,
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = e,
        d = K({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, b.RR)({ quest: t }),
        f = (0, b.fc)(t),
        A = (0, L.vU)()?.getId(),
        { launchInGameActivity: E } = (0, b.zW)(t),
        _ = (0, w.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case b.F3.UNACCEPTED:
                let e = G.intl.string(G.t.kUQLMJ),
                    i = U.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = G.intl.string(G.t.umdNin)), (i = U.Cy.START_QUEST)),
                    (o || (0, D.vl)(t)) && ({ text: e, questContentCTA: i } = X(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, D.K$)(t)) {
                                await (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, M.Fy)(t);
                                return;
                            }
                            a ||
                                _ ||
                                (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, M.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: U.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, S.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      E());
                        },
                    }
                );
            case b.F3.ACCEPTED:
            case b.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: G.intl.string(G.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, F.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: U.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, D.K$)(t))
                    return {
                        text: G.intl.string(G.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, M.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, H.WM)(f),
                        tooltipText: G.intl.string(G.t.hsbwjv),
                        onClick: () =>
                            (0, M.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: U.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: e } = X(t);
                    return {
                        text: e,
                        tooltipText: G.intl.string(G.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: G.intl.string(G.t.cfY4PE), tooltipText: G.intl.string(G.t.hsbwjv), onClick: null };
            case b.F3.COMPLETED:
                return { text: G.intl.string(G.t.cfY4PE), tooltipText: null, onClick: d };
            case b.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, q.r7)(t.config) ? G.intl.string(G.t.bAGFz3) : G.intl.string(G.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, t, r, s, l, A, f, o, E, c, _]);
}
function $() {
    let e = (0, N.Ay)(y.p9.DESKTOP_ACCOUNT_PANEL_AREA);
    return (0, u.bG)([h.A], () => h.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []) ?? e;
}
function J(e) {
    let { quest: t } = e,
        n = (0, k.s)(),
        r = (0, b.LS)(t),
        { premiumSubscription: i } = (0, u.cf)([m.A], () => ({ premiumSubscription: m.A.getPremiumSubscription() })),
        s = (0, u.bG)([h.A], () => null != h.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, q.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, P.gO)(t.userStatus, y.uF.QUEST_BAR);
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
function Z() {
    let { isQuestBarVisible: e } = J({ quest: $() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([h.A, A.A], () => ({
            lastFetchedCurrentQuests: h.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let ee = { leading: !0, trailing: !1 };
function et(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, f.I)(
        i.useCallback(() => {
            t && ((0, O.Xm)(n, r), (0, c.P0)((0, d.o)(G.intl.string(G.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        ee,
    );
}
function en() {
    let e = (0, u.bG)([A.A], () => A.A.getQuestHomeHero()),
        [t, n] = i.useState(() => Date.now()),
        r = null != e ? Date.parse(e.endsAt) : null,
        s = null != e;
    return (i.useEffect(() => {
        if (!s) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [s]),
    null == e || null == r || Number.isNaN(r) || t >= r)
        ? null
        : e;
}
function er(e) {
    let [t, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([A.A], () => A.A.isFetchingQuestHomeHero()),
        d = en();
    i.useEffect(() => {
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
        i.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let e = Error("Hero image is missing");
                        !(function (e) {
                            let { questHomeHero: t, assetId: n, error: r } = e,
                                i = r instanceof Error ? r.message : null;
                            v.default.track(j.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: V.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                I.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: V.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            s(!0);
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, x.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(p.NN));
                } catch (e) {}
            })();
        }, [d]);
    let C = !t && !c && !a && !r && null == e && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: t || c, confirmedEmpty: C };
}
function ei(e) {
    let t = en(),
        { isShelfEnabled: n } = (0, b.t9)(t);
    return !n && null != t && (0, w.I0)(t, e);
}
