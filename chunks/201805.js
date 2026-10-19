n.d(e, {
    H1: () => j,
    Lk: () => te,
    T2: () => tn,
    TQ: () => $,
    UX: () => ti,
    Xf: () => Y,
    _c: () => z,
    c9: () => Z,
    gJ: () => J,
    ix: () => G,
    lg: () => tr,
    wo: () => X,
});
var r = n(477900),
    i = n(582128),
    s = n(941143),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(858899),
    d = n(59520),
    C = n(157695),
    f = n(274670),
    A = n(144779),
    E = n(494280);
n(952818);
var T = n(87719),
    _ = n(287809),
    g = n(166403),
    p = n(174459),
    v = n(515718),
    m = n(38405),
    y = n(396813),
    I = n(859703),
    S = n(738822),
    Q = n(104886),
    h = n(77870),
    x = n(291749),
    U = n(971276),
    O = n(18437),
    b = n(590202),
    N = n(971649),
    L = n(773545),
    P = n(651892),
    R = n(710969),
    k = n(620954),
    w = n(801365),
    D = n(792620),
    q = n(814793),
    B = n(753386),
    F = n(175248),
    H = n(617986),
    M = n(190107),
    V = n(652215),
    W = n(105292);
function G(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = t,
        o = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, O.Ut)(),
        E = (0, N.wW)();
    return i.useCallback(() => {
        null != e &&
            ((0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, f.r)({
                      type: A.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: b.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: E(),
                      questContentPosition: r,
                      questContentRowIndex: s,
                  })
                : C({
                      questId: e.id,
                      questContent: n,
                      questContentCTA: b.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, w.ks)(e.config) && !d
                ? (0, F.E)()
                : c
                  ? (0, w.K9)(e.config)
                      ? (0, T.x)()
                      : (0, w.tU)(e.config)
                        ? (0, H.hJ)(e, n, a)
                        : (0, w.HG)(e.config)
                          ? (0, H.cf)(e, n, a)
                          : (0, w.ks)(e.config)
                            ? (0, H.Df)(e, n, a)
                            : (0, H.rx)({ quest: e, sourceQuestContent: a })
                  : (0, F.E)());
    }, [e, C, E, n, r, s, c, d, a]);
}
function Y(t) {
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
let j = (t, e, n) => {
    let { message: i, xboxURL: s } = (0, h.UX)(),
        u = (0, O.Ut)(),
        a = (0, N.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let o = i.getAttribute("href") === s ? b.Cy.HOW_TO_HELP_ARTICLE_XBOX : b.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, f.r)({
                      type: A.F.CLICK_INTERNAL,
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
function K(t) {
    return (0, D.vl)(t)
        ? t.config.features.includes(M.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: W.intl.string(W.t["+qoymD"]), questContentCTA: b.Cy.START_QUEST }
            : { text: W.intl.string(W.t.E4kW5O), questContentCTA: b.Cy.START_QUEST }
        : (0, D.Ov)(t)
          ? { text: W.intl.string(W.t.CkUzLd), questContentCTA: b.Cy.START_QUEST }
          : { text: W.intl.string(W.t.l7E81v), questContentCTA: b.Cy.ACCEPT_QUEST };
}
function z(t) {
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
        d = G({ quest: e, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, h.RR)({ quest: e }),
        f = (0, h.fc)(e),
        A = (0, N.vU)()?.getId(),
        { launchInGameActivity: E } = (0, h.zW)(e),
        T = (0, q.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case h.F3.UNACCEPTED:
                let t = W.intl.string(W.t.kUQLMJ),
                    i = b.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = W.intl.string(W.t.umdNin)), (i = b.Cy.START_QUEST)),
                    (o || (0, D.vl)(e)) && ({ text: t, questContentCTA: i } = K(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, D.K$)(e)) {
                                (await (0, y.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, H.Fy)(e));
                                return;
                            }
                            (a ||
                                T ||
                                (0, y.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, H.e0)(e, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: b.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : T &&
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
            case h.F3.ACCEPTED:
            case h.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: W.intl.string(W.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, k.se)(
                                { quest: e },
                                {
                                    content: r,
                                    ctaContent: b.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, D.K$)(e))
                    return {
                        text: W.intl.string(W.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, H.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, B.WM)(f),
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () =>
                            (0, H.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (T) {
                    let { text: t } = K(e);
                    return {
                        text: t,
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: W.intl.string(W.t.hsbwjv), onClick: null };
            case h.F3.COMPLETED:
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: null, onClick: d };
            case h.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, w.r7)(e.config) ? W.intl.string(W.t.bAGFz3) : W.intl.string(W.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, e, r, s, l, A, f, o, E, c, T]);
}
function X() {
    return ((0, L.kW)(S.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, L.r8)(S.p9.DESKTOP_ACCOUNT_PANEL_AREA, S.uF.QUEST_BAR_V2));
}
function $(t) {
    let { quest: e } = t,
        n = (0, U.s)(),
        r = (0, h.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([g.A], () => ({ premiumSubscription: g.A.getPremiumSubscription() })),
        s = (0, u.bG)([I.A], () => null != I.A.getQuestPreviewOverride(S.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, w.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, R.gO)(e.userStatus, S.uF.QUEST_BAR);
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
function J(t) {
    let { isQuestBarVisible: e } = $({ quest: (0, E.Ys)(t) });
    switch (t.type) {
        case l.p.QUEST:
            return e;
        case l.p.BOUNTY:
        case l.p.NO_FILL:
            return !1;
    }
}
function Z() {
    let t = J(X()),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, u.cf)([I.A, C.A], () => ({
            lastFetchedCurrentQuests: I.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: C.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let tt = { leading: !0, trailing: !1 };
function te(t) {
    let { isShareable: e, questId: n, trackingCtx: r } = t,
        s = (0, N.wW)();
    return (0, d.I)(
        i.useCallback(() => {
            e &&
                ((0, P.Xm)(n, { ...r, impressionId: s() }),
                (0, c.P0)({ text: W.intl.string(W.t["+5kSoW"]), variant: "success" }));
        }, [e, n, r, s]),
        3e3,
        [],
        tt,
    );
}
function tn() {
    let t = (0, u.bG)([C.A], () => C.A.getQuestHomeHero()),
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
        c = (0, u.bG)([C.A], () => C.A.isFetchingQuestHomeHero()),
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
                            (p.default.track(V.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: M.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                m.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: M.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            s(!0));
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, x.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(v.NN));
                } catch (t) {}
            })();
        }, [d]));
    let f = !e && !c && !a && !r && null == t && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: e || c, confirmedEmpty: f };
}
function ti(t) {
    let e = tn(),
        { isShelfEnabled: n } = (0, h.t9)(e);
    return !n && null != e && (0, q.I0)(e, t);
}
