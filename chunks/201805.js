"use strict";
n.d(t, {
    H1: () => $,
    Lk: () => ee,
    T2: () => et,
    TQ: () => X,
    UX: () => ei,
    Xf: () => K,
    _c: () => q,
    c9: () => Q,
    dN: () => Z,
    ix: () => Y,
    lg: () => en,
});
var i = n(477900),
    r = n(582128),
    a = n(682577),
    s = n(323889),
    l = n(17928),
    o = n(717421),
    d = n(663417),
    c = n(691540),
    u = n(857250),
    _ = n(97483),
    E = n(59520),
    A = n(274670),
    h = n(144779);
n(952818);
var I = n(87719),
    f = n(287809),
    p = n(166403),
    T = n(174459),
    m = n(515718),
    g = n(38405),
    S = n(352774),
    N = n(859703),
    C = n(24001),
    O = n(104886),
    R = n(514547),
    L = n(291749),
    D = n(971276),
    y = n(18437),
    v = n(590202),
    b = n(971649),
    M = n(158403),
    P = n(651892),
    U = n(710969),
    w = n(901406),
    G = n(801365),
    x = n(792620),
    k = n(814793),
    F = n(753386),
    V = n(175248),
    B = n(617986),
    H = n(190107),
    j = n(652215),
    W = n(375708);
function Y(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: a, sourceQuestContent: o } = e,
        d = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        c = d?.hasVerifiedEmailOrPhone(),
        u = d?.verified,
        _ = (0, y.Ut)(),
        E = (0, b.go)();
    return r.useCallback(() => {
        null != t &&
            ((0, O.E5)(O.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, A.r)({
                      type: h.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: v.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: o,
                      impressionId: E,
                      questContentPosition: i,
                      questContentRowIndex: a,
                  })
                : _({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: v.Cy.CLAIM_REWARD,
                      questContentPosition: i,
                      questContentRowIndex: a,
                      sourceQuestContent: o,
                  }),
            (0, G.ks)(t.config) && !u
                ? (0, V.E)()
                : c
                  ? (0, G.K9)(t.config)
                      ? (0, I.x)()
                      : (0, G.tU)(t.config)
                        ? (0, B.hJ)(t, n, o)
                        : (0, G.HG)(t.config)
                          ? (0, B.cf)(t, n, o)
                          : (0, G.ks)(t.config)
                            ? (0, B.Df)(t, n, o)
                            : (0, B.rx)({ quest: t, sourceQuestContent: o })
                  : (0, V.E)());
    }, [t, _, E, n, i, a, c, u, o]);
}
function K(e) {
    let { useReducedMotion: t, className: n } = e,
        [s, l] = (0, o.z)(() => ({})),
        c = r.useRef(!1),
        u = (0, a.animated)(d.f);
    return {
        render: () => (0, i.jsx)(u, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (c.current = !0),
                l({
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
let $ = (e, t, n) => {
    let { message: r, xboxURL: a } = (0, R.UX)(),
        l = (0, y.Ut)(),
        o = (0, b.go)();
    return (0, i.jsx)("span", {
        onClick: function (i) {
            let r = i.target;
            if (r?.tagName?.toLowerCase() !== "a") return;
            let d = r.getAttribute("href") === a ? v.Cy.HOW_TO_HELP_ARTICLE_XBOX : v.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, O.E5)(O.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, A.r)({
                      type: h.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: d,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: o,
                  })
                : l({ questId: e, questContent: t, questContentCTA: d, sourceQuestContent: n });
        },
        children: r,
    });
};
function z(e) {
    return (0, x.vl)(e)
        ? e.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: W.intl.string(W.t["+qoymD"]), questContentCTA: v.Cy.START_QUEST }
            : { text: W.intl.string(W.t.E4kW5O), questContentCTA: v.Cy.START_QUEST }
        : (0, x.Ov)(e)
          ? { text: W.intl.string(W.t.CkUzLd), questContentCTA: v.Cy.START_QUEST }
          : { text: W.intl.string(W.t.l7E81v), questContentCTA: v.Cy.ACCEPT_QUEST };
}
function q(e) {
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
        u = Y({ quest: t, questContent: i, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: c }),
        _ = (0, R.RR)({ quest: t }),
        E = (0, R.fc)(t),
        A = (0, b.vU)()?.getId(),
        { launchInGameActivity: h } = (0, R.zW)(t),
        I = (0, k.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case R.F3.UNACCEPTED:
                let e = W.intl.string(W.t.kUQLMJ),
                    r = v.Cy.ACCEPT_QUEST;
                return (
                    o && ((e = W.intl.string(W.t.umdNin)), (r = v.Cy.START_QUEST)),
                    (d || (0, x.vl)(t)) && ({ text: e, questContentCTA: r } = z(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, x.K$)(t)) {
                                await (0, S.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, B.Fy)(t);
                                return;
                            }
                            o ||
                                I ||
                                (0, S.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                o
                                    ? await (0, B.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: v.Cy.ACCEPT_QUEST,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                      })
                                    : I &&
                                      (await (0, S.Oy)(t.id, {
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
            case R.F3.ACCEPTED:
            case R.F3.IN_PROGRESS:
                if (_ && l)
                    return {
                        text: W.intl.string(W.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, w.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: v.Cy.CONNECT_CONSOLE,
                                    position: a,
                                    rowIndex: s,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, x.K$)(t))
                    return {
                        text: W.intl.string(W.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, B.Fy)(t);
                        },
                    };
                if (o)
                    return {
                        text: (0, F.WM)(E),
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () =>
                            (0, B.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: v.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (I) {
                    let { text: e } = z(t);
                    return {
                        text: e,
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () => {
                            h();
                        },
                    };
                }
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: W.intl.string(W.t.hsbwjv), onClick: null };
            case R.F3.COMPLETED:
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: null, onClick: u };
            case R.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: u,
                    text: (0, G.r7)(t.config) ? W.intl.string(W.t.bAGFz3) : W.intl.string(W.t.vTgCWx),
                };
        }
    }, [n, o, _, l, u, t, i, a, s, A, E, d, h, c, I]);
}
function Z() {
    let e = (0, M.Ay)(C.p9.DESKTOP_ACCOUNT_PANEL_AREA);
    return (0, l.bG)([N.A], () => N.A.getQuestPreviewOverride(C.uF.QUEST_BAR_V2), []) ?? e;
}
function X(e) {
    let { quest: t } = e,
        n = (0, D.s)(),
        i = (0, R.LS)(t),
        { premiumSubscription: r } = (0, l.cf)([p.A], () => ({ premiumSubscription: p.A.getPremiumSubscription() })),
        a = (0, l.bG)([N.A], () => null != N.A.getQuestPreviewOverride(C.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let s = t.userStatus?.claimedAt != null;
    if (a && !s) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, G.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = null != t.userStatus && (0, U.gO)(t.userStatus, C.uF.QUEST_BAR);
    return s
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? o
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function Q() {
    let { isQuestBarVisible: e } = X({ quest: Z() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, l.cf)([N.A], () => ({
            lastFetchedCurrentQuests: N.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: N.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let J = { leading: !0, trailing: !1 };
function ee(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, E.I)(
        r.useCallback(() => {
            t && ((0, P.Xm)(n, i), (0, c.P0)((0, u.o)(W.intl.string(W.t["+5kSoW"]), _.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        J,
    );
}
function et() {
    let e = (0, l.bG)([N.A], () => N.A.getQuestHomeHero()),
        [t, n] = r.useState(() => Date.now()),
        i = null != e ? Date.parse(e.endsAt) : null,
        a = null != e;
    return (r.useEffect(() => {
        if (!a) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [a]),
    null == e || null == i || Number.isNaN(i) || t >= i)
        ? null
        : e;
}
function en(e) {
    let [t, n] = r.useState(!0),
        [i, a] = r.useState(!1),
        [o, d] = r.useState(!1),
        c = (0, l.bG)([N.A], () => N.A.isFetchingQuestHomeHero()),
        u = et();
    r.useEffect(() => {
        !(async function () {
            try {
                null != e ? await (0, S.IV)(e) : await (0, S.Yf)();
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
                            T.default.track(j.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: H.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: s.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                g.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: H.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: u, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            a(!0);
                        return;
                    }
                    let e = [null != u.heroVideo ? (0, L.WV)(u.heroVideo) : null, u.heroImage, u.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(m.NN));
                } catch (e) {}
            })();
        }, [u]);
    let _ = !t && !c && !o && !i && null == e && null == u;
    return { questHomeHero: o || i ? null : u, isLoading: t || c, confirmedEmpty: _ };
}
function ei(e) {
    let t = et(),
        { isShelfEnabled: n } = (0, R.t9)(t);
    return !n && null != t && (0, k.I0)(t, e);
}
