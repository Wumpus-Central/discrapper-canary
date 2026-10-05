n.d(e, {
    c9: () => Z,
    UX: () => ti,
    wo: () => $,
    TQ: () => J,
    Lk: () => te,
    lg: () => tr,
    H1: () => Y,
    T2: () => tn,
    ix: () => j,
    Xf: () => K,
    _c: () => X,
});
var r = n(477900),
    i = n(582128),
    s = n(202091),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(739187),
    d = n(857250),
    C = n(97483),
    f = n(59520),
    A = n(157695),
    E = n(274670),
    _ = n(144779);
n(952818);
var T = n(87719),
    g = n(287809),
    p = n(166403),
    m = n(174459),
    v = n(515718),
    I = n(38405),
    y = n(396813),
    S = n(859703),
    Q = n(738822),
    h = n(104886),
    x = n(866157),
    O = n(291749),
    U = n(971276),
    b = n(18437),
    L = n(590202),
    N = n(971649),
    k = n(773545),
    P = n(651892),
    R = n(710969),
    w = n(901406),
    D = n(801365),
    q = n(792620),
    F = n(814793),
    H = n(753386),
    B = n(175248),
    M = n(617986),
    V = n(190107),
    W = n(652215),
    G = n(375708);
function j(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = t,
        o = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, b.Ut)(),
        f = (0, N.wW)();
    return i.useCallback(() => {
        null != e &&
            ((0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: L.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: f(),
                      questContentPosition: r,
                      questContentRowIndex: s,
                  })
                : C({
                      questId: e.id,
                      questContent: n,
                      questContentCTA: L.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, D.ks)(e.config) && !d
                ? (0, B.E)()
                : c
                  ? (0, D.K9)(e.config)
                      ? (0, T.x)()
                      : (0, D.tU)(e.config)
                        ? (0, M.hJ)(e, n, a)
                        : (0, D.HG)(e.config)
                          ? (0, M.cf)(e, n, a)
                          : (0, D.ks)(e.config)
                            ? (0, M.Df)(e, n, a)
                            : (0, M.rx)({ quest: e, sourceQuestContent: a })
                  : (0, B.E)());
    }, [e, C, f, n, r, s, c, d, a]);
}
function K(t) {
    let { useReducedMotion: e, className: n } = t,
        [l, u] = (0, a.z)(() => ({})),
        c = i.useRef(!1),
        d = (0, s.animated)(o.RefreshIcon);
    return {
        render: () => (0, r.jsx)(d, { className: n, style: e ? void 0 : l, color: "currentColor", size: "xs" }),
        startAnimation: function (t) {
            ((c.current = !0),
                u({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => t ?? c.current,
                    immediate: e,
                }));
        },
        stopAnimation: () => {
            c.current = !1;
        },
    };
}
let Y = (t, e, n) => {
    let { message: i, xboxURL: s } = (0, x.UX)(),
        u = (0, b.Ut)(),
        a = (0, N.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let o = i.getAttribute("href") === s ? L.Cy.HOW_TO_HELP_ARTICLE_XBOX : L.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: t,
                      questContentCTA: o,
                      surfaceId: e,
                      sourceQuestContent: n,
                      impressionId: a(),
                  })
                : u({ questId: t, questContent: e, questContentCTA: o, sourceQuestContent: n });
        },
        children: i,
    });
};
function z(t) {
    return (0, q.vl)(t)
        ? t.config.features.includes(V.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: G.intl.string(G.t["+qoymD"]), questContentCTA: L.Cy.START_QUEST }
            : { text: G.intl.string(G.t.E4kW5O), questContentCTA: L.Cy.START_QUEST }
        : (0, q.Ov)(t)
          ? { text: G.intl.string(G.t.CkUzLd), questContentCTA: L.Cy.START_QUEST }
          : { text: G.intl.string(G.t.l7E81v), questContentCTA: L.Cy.ACCEPT_QUEST };
}
function X(t) {
    let {
            quest: e,
            progressState: n,
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = t,
        d = j({ quest: e, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, x.RR)({ quest: e }),
        f = (0, x.fc)(e),
        A = (0, N.vU)()?.getId(),
        { launchInGameActivity: E } = (0, x.zW)(e),
        _ = (0, F.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case x.F3.UNACCEPTED:
                let t = G.intl.string(G.t.kUQLMJ),
                    i = L.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = G.intl.string(G.t.umdNin)), (i = L.Cy.START_QUEST)),
                    (o || (0, q.vl)(e)) && ({ text: t, questContentCTA: i } = z(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, q.K$)(e)) {
                                (await (0, y.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, M.Fy)(e));
                                return;
                            }
                            (a ||
                                _ ||
                                (0, y.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, M.e0)(e, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: L.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, y.Oy)(e.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      E()));
                        },
                    }
                );
            case x.F3.ACCEPTED:
            case x.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: G.intl.string(G.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, w.se)(
                                { quest: e },
                                {
                                    content: r,
                                    ctaContent: L.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, q.K$)(e))
                    return {
                        text: G.intl.string(G.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, M.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, H.WM)(f),
                        tooltipText: G.intl.string(G.t.hsbwjv),
                        onClick: () =>
                            (0, M.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: L.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: t } = z(e);
                    return {
                        text: t,
                        tooltipText: G.intl.string(G.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: G.intl.string(G.t.cfY4PE), tooltipText: G.intl.string(G.t.hsbwjv), onClick: null };
            case x.F3.COMPLETED:
                return { text: G.intl.string(G.t.cfY4PE), tooltipText: null, onClick: d };
            case x.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, D.r7)(e.config) ? G.intl.string(G.t.bAGFz3) : G.intl.string(G.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, e, r, s, l, A, f, o, E, c, _]);
}
function $() {
    return ((0, k.kW)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, k.r8)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA, Q.uF.QUEST_BAR_V2));
}
function J(t) {
    let { quest: e } = t,
        n = (0, U.s)(),
        r = (0, x.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([p.A], () => ({ premiumSubscription: p.A.getPremiumSubscription() })),
        s = (0, u.bG)([S.A], () => null != S.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, D.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, R.gO)(e.userStatus, Q.uF.QUEST_BAR);
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
    let t = (function (t) {
            let { isQuestBarVisible: e } = J({ quest: t.type === l.p.QUEST ? t.quest : null });
            switch (t.type) {
                case l.p.QUEST:
                    return e;
                case l.p.BOUNTY:
                case l.p.NO_FILL:
                    return !1;
            }
        })($()),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, u.cf)([S.A, A.A], () => ({
            lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let tt = { leading: !0, trailing: !1 };
function te(t) {
    let { isShareable: e, questId: n, trackingCtx: r } = t,
        s = (0, N.wW)();
    return (0, f.I)(
        i.useCallback(() => {
            e &&
                ((0, P.Xm)(n, { ...r, impressionId: s() }),
                (0, c.P)((0, d.o)(G.intl.string(G.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [e, n, r, s]),
        3e3,
        [],
        tt,
    );
}
function tn() {
    let t = (0, u.bG)([A.A], () => A.A.getQuestHomeHero()),
        [e, n] = i.useState(() => Date.now()),
        r = null != t ? Date.parse(t.endsAt) : null,
        s = null != t;
    return (i.useEffect(() => {
        if (!s) return;
        let t = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(t);
    }, [s]),
    null == t || null == r || Number.isNaN(r) || e >= r)
        ? null
        : t;
}
function tr(t) {
    let [e, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([A.A], () => A.A.isFetchingQuestHomeHero()),
        d = tn();
    (i.useEffect(() => {
        !(async function () {
            try {
                null != t ? await (0, y.IV)(t) : await (0, y.Yf)();
            } catch (t) {
                o(!0);
            } finally {
                n(!1);
            }
        })();
    }, [t]),
        i.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let t = Error("Hero image is missing");
                        (!(function (t) {
                            let { questHomeHero: e, assetId: n, error: r } = t,
                                i = r instanceof Error ? r.message : null;
                            (m.default.track(W.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: V.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                I.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: V.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            s(!0));
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, O.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(v.NN));
                } catch (t) {}
            })();
        }, [d]));
    let C = !e && !c && !a && !r && null == t && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: e || c, confirmedEmpty: C };
}
function ti(t) {
    let e = tn(),
        { isShelfEnabled: n } = (0, x.t9)(e);
    return !n && null != e && (0, F.I0)(e, t);
}
