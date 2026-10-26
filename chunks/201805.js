n.d(e, {
    H1: () => W,
    Lk: () => tt,
    T2: () => te,
    TQ: () => X,
    UX: () => tr,
    Xf: () => Y,
    _c: () => K,
    c9: () => J,
    gJ: () => $,
    ix: () => G,
    lg: () => tn,
    wo: () => z,
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
    f = n(157695),
    C = n(507395),
    A = n(144779),
    T = n(494280);
n(952818);
var E = n(87719),
    p = n(287809),
    g = n(166403),
    _ = n(174459),
    y = n(515718),
    m = n(38405),
    v = n(265704),
    S = n(396813),
    I = n(859703),
    Q = n(738822),
    h = n(77870),
    O = n(291749),
    b = n(971276),
    x = n(590202),
    U = n(971649),
    N = n(773545),
    L = n(651892),
    w = n(710969),
    P = n(620954),
    k = n(801365),
    R = n(792620),
    B = n(814793),
    D = n(753386),
    q = n(175248),
    F = n(617986),
    H = n(190107),
    M = n(652215),
    V = n(105292);
function G(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = t,
        o = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, U.wW)();
    return i.useCallback(() => {
        null != e &&
            ((0, C.r)({
                type: A.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: e.id,
                questContentCTA: x.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: a,
                impressionId: f(),
                questContentPosition: r,
                questContentRowIndex: s,
            }),
            (0, k.ks)(e.config) && !d
                ? (0, q.E)()
                : c
                  ? (0, k.K9)(e.config)
                      ? (0, E.x)()
                      : (0, k.tU)(e.config)
                        ? (0, F.hJ)(e, n, a)
                        : (0, k.HG)(e.config)
                          ? (0, F.cf)(e, n, a)
                          : (0, k.ks)(e.config)
                            ? (0, F.Df)(e, n, a)
                            : (0, F.rx)({ quest: e, sourceQuestContent: a })
                  : (0, q.E)());
    }, [e, f, n, r, s, c, d, a]);
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
let W = (t, e, n) => {
    let { message: i, xboxURL: s } = (0, h.UX)(),
        u = (0, U.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let a = i.getAttribute("href") === s ? x.Cy.HOW_TO_HELP_ARTICLE_XBOX : x.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, C.r)({
                type: A.F.CLICK_INTERNAL,
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
        ? t.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: V.intl.string(V.t["+qoymD"]), questContentCTA: x.Cy.START_QUEST }
            : { text: V.intl.string(V.t.E4kW5O), questContentCTA: x.Cy.START_QUEST }
        : (0, R.Ov)(t)
          ? { text: V.intl.string(V.t.CkUzLd), questContentCTA: x.Cy.START_QUEST }
          : { text: V.intl.string(V.t.l7E81v), questContentCTA: x.Cy.ACCEPT_QUEST };
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
        f = (0, h.RR)({ quest: e }),
        C = (0, h.fc)(e),
        A = (0, U.vU)()?.getId(),
        { launchInGameActivity: T } = (0, h.zW)(e),
        E = (0, B.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case h.F3.UNACCEPTED:
                let t = V.intl.string(V.t.kUQLMJ),
                    i = x.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = V.intl.string(V.t.umdNin)), (i = x.Cy.START_QUEST)),
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
                                    (0, F.Fy)(e));
                                return;
                            }
                            (a ||
                                E ||
                                (0, S.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, F.e0)(e, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: x.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : E &&
                                      (await (0, S.Oy)(e.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      T()));
                        },
                    }
                );
            case h.F3.ACCEPTED:
            case h.F3.IN_PROGRESS:
                if (f && u)
                    return {
                        text: V.intl.string(V.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, P.se)(
                                { quest: e },
                                {
                                    content: r,
                                    ctaContent: x.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, R.K$)(e))
                    return {
                        text: V.intl.string(V.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, F.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, D.WM)(C),
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () =>
                            (0, F.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: x.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: t } = j(e);
                    return {
                        text: t,
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () => {
                            T();
                        },
                    };
                }
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: V.intl.string(V.t.hsbwjv), onClick: null };
            case h.F3.COMPLETED:
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: null, onClick: d };
            case h.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, k.r7)(e.config) ? V.intl.string(V.t.bAGFz3) : V.intl.string(V.t.vTgCWx),
                };
        }
    }, [n, a, f, u, d, e, r, s, l, A, C, o, T, c, E]);
}
function z() {
    return ((0, N.kW)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, N.r8)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA, Q.uF.QUEST_BAR_V2));
}
function X(t) {
    let { quest: e } = t,
        n = (0, b.s)(),
        r = (0, h.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([g.A], () => ({ premiumSubscription: g.A.getPremiumSubscription() })),
        s = (0, u.bG)([I.A], () => null != I.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, k.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, w.gO)(e.userStatus, Q.uF.QUEST_BAR);
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
    let { isQuestBarVisible: e } = X({ quest: (0, T.Ys)(t) }),
        n = (0, T.nN)(t),
        r = (0, u.bG)([I.A], () => null != n && I.A.isAdContentDismissed(n), [n]),
        i = (0, u.bG)([v.A], () => t.type === l.p.BOUNTY && v.A.isBountyCompleted(t.bounty.id), [t]);
    switch (t.type) {
        case l.p.QUEST:
            return e;
        case l.p.BOUNTY:
            return (0, b.s)() && !r && !i;
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
        s = (0, U.wW)();
    return (0, d.I)(
        i.useCallback(() => {
            e &&
                ((0, L.Xm)(n, { ...r, impressionId: s() }),
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
                            (_.default.track(M.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: H.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                m.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: H.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            s(!0));
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, O.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(y.NN));
                } catch (t) {}
            })();
        }, [d]));
    let C = !e && !c && !a && !r && null == t && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: e || c, confirmedEmpty: C };
}
function tr(t) {
    let e = te(),
        { isShelfEnabled: n } = (0, h.t9)(e);
    return !n && null != e && (0, B.I0)(e, t);
}
