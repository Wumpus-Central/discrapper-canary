n.d(e, {
    c9: () => ts,
    dN: () => tn,
    TQ: () => tr,
    UX: () => to,
    Lk: () => tl,
    lg: () => ta,
    H1: () => Z,
    T2: () => tu,
    ix: () => $,
    Xf: () => J,
    _c: () => te,
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
    C = n(857250),
    f = n(97483),
    A = n(59520),
    E = n(274670),
    _ = n(144779);
n(952818);
var g = n(87719),
    T = n(287809),
    m = n(166403),
    v = n(174459),
    S = n(515718),
    I = n(38405),
    p = n(340124),
    y = n(859703),
    Q = n(24001),
    h = n(192444),
    b = n(104886),
    x = n(302654),
    R = n(347135),
    L = n(46948),
    N = n(971276),
    P = n(18437),
    U = n(590202),
    q = n(971649),
    O = n(183636),
    k = n(927813),
    D = n(710969);
let w = 10 * k.A.Millis.MINUTE;
function B(t, e, n) {
    if (!(0, N.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now())) return;
    if ("focused" !== O.A.getState()) {
        null != t && (0, p.Fr)(e, t.ttlMillis);
        return;
    }
    if (y.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let { enableNewRequestBehavior: r } = x.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, p.N1)(), (0, p.r8)(e, n));
}
var F = n(651892),
    H = n(901406),
    M = n(801365),
    V = n(792620),
    G = n(814793),
    j = n(753386),
    K = n(175248),
    W = n(617986),
    z = n(190107),
    X = n(652215),
    Y = n(375708);
function $(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: i, sourceQuestContent: l } = t,
        o = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, P.Ut)(),
        f = (0, q.go)();
    return s.useCallback(() => {
        null != e &&
            ((0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: U.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: l,
                      impressionId: f,
                      questContentPosition: r,
                      questContentRowIndex: i,
                  })
                : C({
                      questId: e.id,
                      questContent: n,
                      questContentCTA: U.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: i,
                      sourceQuestContent: l,
                  }),
            (0, M.ks)(e.config) && !d
                ? (0, K.E)()
                : c
                  ? (0, M.K9)(e.config)
                      ? (0, g.x)()
                      : (0, M.tU)(e.config)
                        ? (0, W.hJ)(e, n, l)
                        : (0, M.HG)(e.config)
                          ? (0, W.cf)(e, n, l)
                          : (0, M.ks)(e.config)
                            ? (0, W.Df)(e, n, l)
                            : (0, W.rx)({ quest: e, sourceQuestContent: l })
                  : (0, K.E)());
    }, [e, C, f, n, r, i, c, d, l]);
}
function J(t) {
    let { useReducedMotion: e, className: n } = t,
        [i, u] = (0, o.z)(() => ({})),
        a = s.useRef(!1),
        d = (0, l.animated)(c.f);
    return {
        render: () => (0, r.jsx)(d, { className: n, style: e ? void 0 : i, color: "currentColor", size: "xs" }),
        startAnimation: function (t) {
            (a.current = !0),
                u({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => t ?? a.current,
                    immediate: e,
                });
        },
        stopAnimation: () => {
            a.current = !1;
        },
    };
}
let Z = (t, e, n) => {
    let { message: s, xboxURL: i } = (0, R.UX)(),
        l = (0, P.Ut)(),
        a = (0, q.go)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let s = r.target;
            if (s?.tagName?.toLowerCase() !== "a") return;
            let o = s.getAttribute("href") === i ? U.Cy.HOW_TO_HELP_ARTICLE_XBOX : U.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: t,
                      questContentCTA: o,
                      surfaceId: e,
                      sourceQuestContent: n,
                      impressionId: a,
                  })
                : l({ questId: t, questContent: e, questContentCTA: o, sourceQuestContent: n });
        },
        children: s,
    });
};
function tt(t) {
    return (0, V.vl)(t)
        ? t.config.features.includes(z.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: Y.intl.string(Y.t["+qoymD"]), questContentCTA: U.Cy.START_QUEST }
            : { text: Y.intl.string(Y.t.E4kW5O), questContentCTA: U.Cy.START_QUEST }
        : (0, V.Ov)(t)
          ? { text: Y.intl.string(Y.t.CkUzLd), questContentCTA: U.Cy.START_QUEST }
          : { text: Y.intl.string(Y.t.l7E81v), questContentCTA: U.Cy.ACCEPT_QUEST };
}
function te(t) {
    let {
            quest: e,
            progressState: n,
            questContent: r,
            questContentPosition: i,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = t,
        d = $({ quest: e, questContent: r, questContentPosition: i, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, R.RR)({ quest: e }),
        f = (0, R.fc)(e),
        A = (0, q.vU)()?.getId(),
        { launchInGameActivity: E } = (0, R.zW)(e),
        _ = (0, G.vA)(e);
    return s.useMemo(() => {
        switch (n) {
            case R.F3.UNACCEPTED:
                let t = Y.intl.string(Y.t.kUQLMJ),
                    s = U.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = Y.intl.string(Y.t.umdNin)), (s = U.Cy.START_QUEST)),
                    (o || (0, V.vl)(e)) && ({ text: t, questContentCTA: s } = tt(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, V.K$)(e)) {
                                await (0, p.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, W.Fy)(e);
                                return;
                            }
                            a ||
                                _ ||
                                (0, p.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: i,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, W.e0)(e, {
                                          questContent: r,
                                          questContentCTA: s,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: U.Cy.ACCEPT_QUEST,
                                          questContentPosition: i,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, p.Oy)(e.id, {
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
            case R.F3.ACCEPTED:
            case R.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: Y.intl.string(Y.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, H.se)(
                                { quest: e },
                                {
                                    content: r,
                                    ctaContent: U.Cy.CONNECT_CONSOLE,
                                    position: i,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, V.K$)(e))
                    return {
                        text: Y.intl.string(Y.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, W.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, j.WM)(f),
                        tooltipText: Y.intl.string(Y.t.hsbwjv),
                        onClick: () =>
                            (0, W.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: U.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: t } = tt(e);
                    return {
                        text: t,
                        tooltipText: Y.intl.string(Y.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: Y.intl.string(Y.t.cfY4PE), tooltipText: Y.intl.string(Y.t.hsbwjv), onClick: null };
            case R.F3.COMPLETED:
                return { text: Y.intl.string(Y.t.cfY4PE), tooltipText: null, onClick: d };
            case R.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, M.r7)(e.config) ? Y.intl.string(Y.t.bAGFz3) : Y.intl.string(Y.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, e, r, i, l, A, f, o, E, c, _]);
}
function tn() {
    var t;
    let e,
        n,
        r,
        { enableNewRequestBehavior: i } = x.A.useConfig({ location: "useQuestBarQuest" }),
        l =
            ((t = Q.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            (e = (0, s.useRef)(null)),
            (n = (0, a.bG)([y.A], () => y.A.questAdDecisionByPlacement.get(t) ?? null)),
            (r = (0, a.bG)([y.A], () => (n?.questId != null ? (y.A.quests.get(n.questId) ?? null) : null))),
            ((0, s.useEffect)(() => {
                null != e.current && clearInterval(e.current),
                    B(n, t, "questBar-open"),
                    (e.current = setInterval(() => {
                        B(y.A.questAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
                    }, w));
                let r = e.current;
                return () => {
                    null != r && clearInterval(r);
                };
            }, [n, t]),
            null == r || (0, D.Ic)(r))
                ? null
                : r),
        u = (0, a.bG)([y.A], () => y.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []),
        o = (0, a.bG)(
            [y.A],
            () => (0, D.t6)(y.A.quests, y.A.questToDeliverForPlacement, Q.p9.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return u ?? (i ? l : o);
}
function tr(t) {
    let { quest: e } = t,
        n = (0, N.s)(),
        r = (0, R.LS)(e),
        { premiumSubscription: s } = (0, a.cf)([m.A], () => ({ premiumSubscription: m.A.getPremiumSubscription() })),
        i = (0, a.bG)([y.A], () => null != y.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (i && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, M.K9)(e.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = null != e.userStatus && (0, D.gO)(e.userStatus, Q.uF.QUEST_BAR);
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
function ts() {
    let { isQuestBarVisible: t } = tr({ quest: tn() }),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, a.cf)([y.A], () => ({
            lastFetchedCurrentQuests: y.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: y.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let ti = { leading: !0, trailing: !1 };
function tl(t) {
    let { isShareable: e, questId: n, trackingCtx: r } = t;
    return (0, A.I)(
        s.useCallback(() => {
            e && ((0, F.Xm)(n, r), (0, d.P0)((0, C.o)(Y.intl.string(Y.t["+5kSoW"]), f.Ck.SUCCESS)));
        }, [e, n, r]),
        3e3,
        [],
        ti,
    );
}
function tu() {
    let t = (0, h.Qj)(),
        { search: e } = (0, i.zy)(),
        n = s.useMemo(() => new URLSearchParams(e).getAll(R.L1.AD_CREATIVE_IDS).length > 0, [e]),
        r = (0, a.bG)([y.A], () => y.A.getQuestHomeHero()),
        [l, u] = s.useState(() => Date.now()),
        o = null != r ? Date.parse(r.endsAt) : null,
        c = null != r;
    return (s.useEffect(() => {
        if (!c) return;
        let t = setInterval(() => u(Date.now()), 3e4);
        return () => clearInterval(t);
    }, [c]),
    (t && !n) || null == r || null == o || Number.isNaN(o) || l >= o)
        ? null
        : r;
}
function ta(t) {
    let [e, n] = s.useState(!0),
        [r, i] = s.useState(!1),
        [l, o] = s.useState(!1),
        c = (0, a.bG)([y.A], () => y.A.isFetchingQuestHomeHero()),
        d = tu();
    return (
        s.useEffect(() => {
            !(async function () {
                try {
                    null != t ? await (0, p.IV)(t) : await (0, p.Yf)();
                } catch (t) {
                    o(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [t]),
        s.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let t = Error("Hero image is missing");
                        !(function (t) {
                            let { questHomeHero: e, assetId: n, error: r } = t,
                                s = r instanceof Error ? r.message : null;
                            v.default.track(X.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: z.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: u.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                I.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != s ? `${s}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: z.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            i(!0);
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, L.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(S.NN));
                } catch (t) {}
            })();
        }, [d]),
        { questHomeHero: l || r ? null : d, isLoading: e || c }
    );
}
function to(t) {
    let e = tu(),
        { isShelfEnabled: n } = (0, R.t9)(e);
    return !n && null != e && (0, G.I0)(e, t);
}
