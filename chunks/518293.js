n.d(e, {
    c9: () => $,
    UX: () => tn,
    wo: () => z,
    TQ: () => X,
    Lk: () => Z,
    lg: () => te,
    H1: () => j,
    T2: () => tt,
    ix: () => W,
    Xf: () => G,
    _c: () => Y,
});
var r = n(477900),
    i = n(582128),
    s = n(202091),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(858899),
    d = n(59520),
    C = n(157695),
    f = n(274670),
    A = n(144779);
n(952818);
var E = n(87719),
    _ = n(287809),
    T = n(166403),
    g = n(174459),
    p = n(515718),
    m = n(38405),
    v = n(396813),
    I = n(859703),
    y = n(738822),
    S = n(104886),
    Q = n(77870),
    h = n(291749),
    x = n(971276),
    O = n(18437),
    b = n(590202),
    L = n(971649),
    U = n(773545),
    N = n(651892),
    P = n(710969),
    R = n(620954),
    k = n(801365),
    w = n(792620),
    D = n(814793),
    q = n(753386),
    F = n(175248),
    H = n(617986),
    B = n(190107),
    M = n(652215),
    V = n(660183);
function W(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = t,
        o = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, O.Ut)(),
        T = (0, L.wW)();
    return i.useCallback(() => {
        null != e &&
            ((0, S.E5)(S.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, f.r)({
                      type: A.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: b.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: T(),
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
            (0, k.ks)(e.config) && !d
                ? (0, F.E)()
                : c
                  ? (0, k.K9)(e.config)
                      ? (0, E.x)()
                      : (0, k.tU)(e.config)
                        ? (0, H.hJ)(e, n, a)
                        : (0, k.HG)(e.config)
                          ? (0, H.cf)(e, n, a)
                          : (0, k.ks)(e.config)
                            ? (0, H.Df)(e, n, a)
                            : (0, H.rx)({ quest: e, sourceQuestContent: a })
                  : (0, F.E)());
    }, [e, C, T, n, r, s, c, d, a]);
}
function G(t) {
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
    let { message: i, xboxURL: s } = (0, Q.UX)(),
        u = (0, O.Ut)(),
        a = (0, L.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let o = i.getAttribute("href") === s ? b.Cy.HOW_TO_HELP_ARTICLE_XBOX : b.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, S.E5)(S.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
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
    return (0, w.vl)(t)
        ? t.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: V.intl.string(V.t["+qoymD"]), questContentCTA: b.Cy.START_QUEST }
            : { text: V.intl.string(V.t.E4kW5O), questContentCTA: b.Cy.START_QUEST }
        : (0, w.Ov)(t)
          ? { text: V.intl.string(V.t.CkUzLd), questContentCTA: b.Cy.START_QUEST }
          : { text: V.intl.string(V.t.l7E81v), questContentCTA: b.Cy.ACCEPT_QUEST };
}
function Y(t) {
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
        d = W({ quest: e, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, Q.RR)({ quest: e }),
        f = (0, Q.fc)(e),
        A = (0, L.vU)()?.getId(),
        { launchInGameActivity: E } = (0, Q.zW)(e),
        _ = (0, D.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case Q.F3.UNACCEPTED:
                let t = V.intl.string(V.t.kUQLMJ),
                    i = b.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = V.intl.string(V.t.umdNin)), (i = b.Cy.START_QUEST)),
                    (o || (0, w.vl)(e)) && ({ text: t, questContentCTA: i } = K(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, w.K$)(e)) {
                                (await (0, v.Oy)(e.id, {
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
                                _ ||
                                (0, v.Oy)(e.id, {
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
                                    : _ &&
                                      (await (0, v.Oy)(e.id, {
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
            case Q.F3.ACCEPTED:
            case Q.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: V.intl.string(V.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, R.se)(
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
                if ((0, w.K$)(e))
                    return {
                        text: V.intl.string(V.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, H.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, q.WM)(f),
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () =>
                            (0, H.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: t } = K(e);
                    return {
                        text: t,
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: V.intl.string(V.t.hsbwjv), onClick: null };
            case Q.F3.COMPLETED:
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: null, onClick: d };
            case Q.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, k.r7)(e.config) ? V.intl.string(V.t.bAGFz3) : V.intl.string(V.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, e, r, s, l, A, f, o, E, c, _]);
}
function z() {
    return ((0, U.kW)(y.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, U.r8)(y.p9.DESKTOP_ACCOUNT_PANEL_AREA, y.uF.QUEST_BAR_V2));
}
function X(t) {
    let { quest: e } = t,
        n = (0, x.s)(),
        r = (0, Q.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        s = (0, u.bG)([I.A], () => null != I.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, k.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, P.gO)(e.userStatus, y.uF.QUEST_BAR);
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
function $() {
    let t = (function (t) {
            let { isQuestBarVisible: e } = X({ quest: t.type === l.p.QUEST ? t.quest : null });
            switch (t.type) {
                case l.p.QUEST:
                    return e;
                case l.p.BOUNTY:
                case l.p.NO_FILL:
                    return !1;
            }
        })(z()),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, u.cf)([I.A, C.A], () => ({
            lastFetchedCurrentQuests: I.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: C.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let J = { leading: !0, trailing: !1 };
function Z(t) {
    let { isShareable: e, questId: n, trackingCtx: r } = t,
        s = (0, L.wW)();
    return (0, d.I)(
        i.useCallback(() => {
            e &&
                ((0, N.Xm)(n, { ...r, impressionId: s() }),
                (0, c.P0)({ text: V.intl.string(V.t["+5kSoW"]), variant: "success" }));
        }, [e, n, r, s]),
        3e3,
        [],
        J,
    );
}
function tt() {
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
function te(t) {
    let [e, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([C.A], () => C.A.isFetchingQuestHomeHero()),
        d = tt();
    (i.useEffect(() => {
        !(async function () {
            try {
                null != t ? await (0, v.IV)(t) : await (0, v.Yf)();
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
                            (g.default.track(M.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: B.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                m.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: B.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            s(!0));
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, h.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(p.NN));
                } catch (t) {}
            })();
        }, [d]));
    let f = !e && !c && !a && !r && null == t && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: e || c, confirmedEmpty: f };
}
function tn(t) {
    let e = tt(),
        { isShelfEnabled: n } = (0, Q.t9)(e);
    return !n && null != e && (0, D.I0)(e, t);
}
