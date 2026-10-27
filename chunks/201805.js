n.d(e, {
    H1: () => Y,
    Lk: () => tt,
    T2: () => te,
    TQ: () => X,
    UX: () => tr,
    Xf: () => W,
    _c: () => K,
    c9: () => J,
    gJ: () => $,
    ix: () => G,
    lg: () => tn,
    wo: () => z,
});
var r = n(477900),
    i = n(582128),
    s = n(399513),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(858899),
    d = n(59520),
    f = n(157695),
    A = n(507395),
    C = n(144779),
    E = n(494280);
n(952818);
var T = n(87719),
    g = n(287809),
    _ = n(166403),
    p = n(174459),
    m = n(515718),
    v = n(38405),
    y = n(265704),
    S = n(427495),
    I = n(859703),
    Q = n(738822),
    x = n(77870),
    b = n(291749),
    h = n(971276),
    O = n(590202),
    L = n(971649),
    U = n(773545),
    N = n(651892),
    P = n(710969),
    k = n(620954),
    w = n(801365),
    R = n(792620),
    D = n(814793),
    B = n(753386),
    F = n(175248),
    H = n(617986),
    q = n(190107),
    M = n(652215),
    V = n(105292);
function G(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = t,
        o = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, L.wW)();
    return i.useCallback(() => {
        null != e &&
            ((0, A.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: e.id,
                questContentCTA: O.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: a,
                impressionId: f(),
                questContentPosition: r,
                questContentRowIndex: s,
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
    }, [e, f, n, r, s, c, d, a]);
}
function W(t) {
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
        u = (0, L.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let a = i.getAttribute("href") === s ? O.Cy.HOW_TO_HELP_ARTICLE_XBOX : O.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, A.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: t,
                questContentCTA: a,
                surfaceId: e,
                sourceQuestContent: n,
                impressionId: u(),
            });
        },
        children: i,
    });
};
function j(t) {
    return (0, R.vl)(t)
        ? t.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: V.intl.string(V.t["+qoymD"]), questContentCTA: O.Cy.START_QUEST }
            : { text: V.intl.string(V.t.E4kW5O), questContentCTA: O.Cy.START_QUEST }
        : (0, R.Ov)(t)
          ? { text: V.intl.string(V.t.CkUzLd), questContentCTA: O.Cy.START_QUEST }
          : { text: V.intl.string(V.t.l7E81v), questContentCTA: O.Cy.ACCEPT_QUEST };
}
function K(t) {
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
        f = (0, x.RR)({ quest: e }),
        A = (0, x.fc)(e),
        C = (0, L.vU)()?.getId(),
        { launchInGameActivity: E } = (0, x.zW)(e),
        T = (0, D.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case x.F3.UNACCEPTED:
                let t = V.intl.string(V.t.kUQLMJ),
                    i = O.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = V.intl.string(V.t.umdNin)), (i = O.Cy.START_QUEST)),
                    (o || (0, R.vl)(e)) && ({ text: t, questContentCTA: i } = j(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, R.K$)(e)) {
                                (await (0, S.Oy)(e.id, {
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
                                (0, S.Oy)(e.id, {
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
                                          sourceQuestContentCTA: O.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : T &&
                                      (await (0, S.Oy)(e.id, {
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
                if (f && u)
                    return {
                        text: V.intl.string(V.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, k.se)(
                                { quest: e },
                                {
                                    content: r,
                                    ctaContent: O.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: C,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, R.K$)(e))
                    return {
                        text: V.intl.string(V.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, H.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, B.WM)(A),
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () =>
                            (0, H.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: O.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (T) {
                    let { text: t } = j(e);
                    return {
                        text: t,
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: V.intl.string(V.t.hsbwjv), onClick: null };
            case x.F3.COMPLETED:
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: null, onClick: d };
            case x.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, w.r7)(e.config) ? V.intl.string(V.t.bAGFz3) : V.intl.string(V.t.vTgCWx),
                };
        }
    }, [n, a, f, u, d, e, r, s, l, C, A, o, E, c, T]);
}
function z() {
    return ((0, U.kW)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, U.r8)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA, Q.uF.QUEST_BAR_V2));
}
function X(t) {
    let { quest: e } = t,
        n = (0, h.s)(),
        r = (0, x.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([_.A], () => ({ premiumSubscription: _.A.getPremiumSubscription() })),
        s = (0, u.bG)([I.A], () => null != I.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, w.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, P.gO)(e.userStatus, Q.uF.QUEST_BAR);
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
function $(t) {
    let { isQuestBarVisible: e } = X({ quest: (0, E.Ys)(t) }),
        n = (0, E.nN)(t),
        r = (0, u.bG)([I.A], () => null != n && I.A.isAdContentDismissed(n), [n]),
        i = (0, u.bG)([y.A], () => t.type === l.p.BOUNTY && y.A.isBountyCompleted(t.bounty.id), [t]);
    switch (t.type) {
        case l.p.QUEST:
            return e;
        case l.p.BOUNTY:
            return (0, h.s)() && !r && !i;
        case l.p.PLAYABLE:
        case l.p.NO_FILL:
            return !1;
    }
}
function J() {
    let t = $(z()),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, u.cf)([I.A, f.A], () => ({
            lastFetchedCurrentQuests: I.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let Z = { leading: !0, trailing: !1 };
function tt(t) {
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
        Z,
    );
}
function te() {
    let t = (0, u.bG)([f.A], () => f.A.getQuestHomeHero()),
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
function tn(t) {
    let [e, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([f.A], () => f.A.isFetchingQuestHomeHero()),
        d = te();
    (i.useEffect(() => {
        !(async function () {
            try {
                null != t ? await (0, S.IV)(t) : await (0, S.Yf)();
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
                            (p.default.track(M.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: q.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                v.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: q.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            s(!0));
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, b.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(m.NN));
                } catch (t) {}
            })();
        }, [d]));
    let A = !e && !c && !a && !r && null == t && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: e || c, confirmedEmpty: A };
}
function tr(t) {
    let e = te(),
        { isShelfEnabled: n } = (0, x.t9)(e);
    return !n && null != e && (0, D.I0)(e, t);
}
