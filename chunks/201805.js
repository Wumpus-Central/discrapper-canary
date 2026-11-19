var r = n(477900),
    i = n(582128),
    s = n(120692),
    l = n(323889),
    a = n(855986),
    u = n(717421),
    o = n(663417),
    c = n(858899),
    d = n(59520),
    f = n(157695),
    A = n(438457),
    C = n(144779),
    E = n(494280),
    g = n(87719),
    T = n(287809),
    _ = n(166403),
    m = n(129230),
    p = n(515718),
    b = n(856383),
    v = n(265704),
    S = n(797553),
    y = n(122760),
    Q = n(506988),
    h = n(61387),
    I = n(760914),
    x = n(971276),
    O = n(590202),
    U = n(971649),
    L = n(937155),
    N = n(651892),
    P = n(710969),
    k = n(574112),
    R = n(417404),
    w = n(792620),
    D = n(814793),
    F = n(753386),
    H = n(175248),
    B = n(321538),
    q = n(221596),
    M = n(652215),
    G = n(792996);
function V(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: u } = e,
        o = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, U.wW)();
    return i.useCallback(() => {
        null != t &&
            ((0, A.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: t.id,
                questContentCTA: O.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: u,
                impressionId: f(),
                questContentPosition: r,
                questContentRowIndex: s,
            }),
            (0, R.ks)(t.config) && !d
                ? (0, H.E)()
                : c
                  ? (0, R.K9)(t.config)
                      ? (0, g.x)()
                      : (0, R.tU)(t.config)
                        ? (0, B.hJ)(t, n, u)
                        : (0, R.HG)(t.config)
                          ? (0, B.cf)(t, n, u)
                          : (0, R.ks)(t.config)
                            ? (0, B.Df)(t, n, u)
                            : (0, B.rx)({ quest: t, sourceQuestContent: u })
                  : (0, H.E)());
    }, [t, f, n, r, s, c, d, u]);
}
function W(e) {
    return (0, w.vl)(e)
        ? e.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: G.intl.string(G.t["+qoymD"]), questContentCTA: O.Cy.START_QUEST }
            : { text: G.intl.string(G.t.E4kW5O), questContentCTA: O.Cy.START_QUEST }
        : (0, w.Ov)(e)
          ? { text: G.intl.string(G.t.CkUzLd), questContentCTA: O.Cy.START_QUEST }
          : { text: G.intl.string(G.t.l7E81v), questContentCTA: O.Cy.ACCEPT_QUEST };
}
function j() {
    return ((0, L.kW)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, L.r8)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA, Q.uF.QUEST_BAR_V2));
}
function Y(e) {
    let { quest: t } = e,
        n = (0, x.s)(),
        r = (0, h.LS)(t),
        { premiumSubscription: i } = (0, a.cf)([_.A], () => ({ premiumSubscription: _.A.getPremiumSubscription() })),
        s = (0, a.bG)([y.A], () => null != y.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, R.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = null != t.userStatus && (0, P.gO)(t.userStatus, Q.uF.QUEST_BAR);
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
function K(e) {
    let { isQuestBarVisible: t } = Y({ quest: (0, E.Ys)(e) }),
        n = (0, E.nN)(e),
        r = (0, a.bG)([y.A], () => null != n && y.A.isAdContentDismissed(n), [n]),
        i = (0, a.bG)([v.A], () => e.type === l.p.BOUNTY && v.A.isBountyCompleted(e.bounty.id), [e]);
    switch (e.type) {
        case l.p.QUEST:
            return t;
        case l.p.BOUNTY:
            return (0, x.s)() && !r && !i;
        case l.p.PLAYABLE:
        case l.p.NO_FILL:
            return !1;
    }
}
let $ = { leading: !0, trailing: !1 };
function z() {
    let e = (0, a.bG)([f.A], () => f.A.getQuestHomeHero()),
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
n.d(
    t,
    {},
    {
        H1: (e, t, n) => {
            let { message: i, xboxURL: s } = (0, h.UX)(),
                a = (0, U.wW)();
            return (0, r.jsx)("span", {
                onClick: function (r) {
                    let i = r.target;
                    if (i?.tagName?.toLowerCase() !== "a") return;
                    let u =
                        i.getAttribute("href") === s
                            ? O.Cy.HOW_TO_HELP_ARTICLE_XBOX
                            : O.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                    (0, A.r)({
                        type: C.F.CLICK_INTERNAL,
                        adCreativeType: l.p.QUEST,
                        adCreativeId: e,
                        questContentCTA: u,
                        surfaceId: t,
                        sourceQuestContent: n,
                        impressionId: a(),
                    });
                },
                children: i,
            });
        },
        Lk: function (e) {
            let { isShareable: t, questId: n, trackingCtx: r } = e,
                s = (0, U.wW)();
            return (0, d.I)(
                i.useCallback(() => {
                    t &&
                        ((0, N.Xm)(n, { ...r, impressionId: s() }),
                        (0, c.P0)({ text: G.intl.string(G.t["+5kSoW"]), variant: "success" }));
                }, [t, n, r, s]),
                3e3,
                [],
                $,
            );
        },
        T2: z,
        TQ: Y,
        UX: function (e) {
            let t = z(),
                { isShelfEnabled: n } = (0, h.t9)(t);
            return !n && null != t && (0, D.I0)(t, e);
        },
        Xf: function (e) {
            let { useReducedMotion: t, className: n } = e,
                [l, a] = (0, u.z)(() => ({})),
                c = i.useRef(!1),
                d = (0, s.animated)(o.RefreshIcon);
            return {
                render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : l, color: "currentColor", size: "xs" }),
                startAnimation: function (e) {
                    ((c.current = !0),
                        a({
                            from: { rotate: "0deg" },
                            to: { rotate: "360deg" },
                            config: { tension: 750, mass: 5, friction: 100 },
                            loop: () => e ?? c.current,
                            immediate: t,
                        }));
                },
                stopAnimation: () => {
                    c.current = !1;
                },
            };
        },
        _c: function (e) {
            let {
                    quest: t,
                    progressState: n,
                    questContent: r,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    inGiftInventory: a,
                    isVideoQuest: u,
                    inGameQuest: o,
                    sourceQuestContent: c,
                } = e,
                d = V({
                    quest: t,
                    questContent: r,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    sourceQuestContent: c,
                }),
                f = (0, h.RR)({ quest: t }),
                A = (0, h.fc)(t),
                C = (0, U.vU)()?.getId(),
                { launchInGameActivity: E } = (0, h.zW)(t),
                g = (0, D.vA)(t);
            return i.useMemo(() => {
                switch (n) {
                    case h.F3.UNACCEPTED:
                        let e = G.intl.string(G.t.kUQLMJ),
                            i = O.Cy.ACCEPT_QUEST;
                        return (
                            u && ((e = G.intl.string(G.t.umdNin)), (i = O.Cy.START_QUEST)),
                            (o || (0, w.vl)(t)) && ({ text: e, questContentCTA: i } = W(t)),
                            {
                                text: e,
                                tooltipText: null,
                                onClick: async () => {
                                    if ((0, w.K$)(t)) {
                                        (await (0, S.Oy)(t.id, {
                                            questContent: r,
                                            questContentCTA: i,
                                            questContentPosition: s,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                            (0, B.Fy)(t));
                                        return;
                                    }
                                    (u ||
                                        g ||
                                        (0, S.Oy)(t.id, {
                                            questContent: r,
                                            questContentCTA: i,
                                            questContentPosition: s,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                        u
                                            ? await (0, B.e0)(t, {
                                                  questContent: r,
                                                  questContentCTA: i,
                                                  sourceQuestContent: c,
                                                  sourceQuestContentCTA: O.Cy.ACCEPT_QUEST,
                                                  questContentPosition: s,
                                                  questContentRowIndex: l,
                                              })
                                            : g &&
                                              (await (0, S.Oy)(t.id, {
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
                        if (f && a)
                            return {
                                text: G.intl.string(G.t.Cfye4v),
                                tooltipText: null,
                                onClick: () =>
                                    (0, k.se)(
                                        { quest: t },
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
                        if ((0, w.K$)(t))
                            return {
                                text: G.intl.string(G.t["/cXIc6"]),
                                tooltipText: null,
                                onClick: () => {
                                    (0, B.Fy)(t);
                                },
                            };
                        if (u)
                            return {
                                text: (0, F.WM)(A),
                                tooltipText: G.intl.string(G.t.hsbwjv),
                                onClick: () =>
                                    (0, B.d5)({
                                        quest: t,
                                        questContent: r,
                                        sourceQuestContent: c,
                                        sourceQuestContentCTA: O.Cy.WATCH_VIDEO,
                                    }),
                            };
                        else if (g) {
                            let { text: e } = W(t);
                            return {
                                text: e,
                                tooltipText: G.intl.string(G.t.hsbwjv),
                                onClick: () => {
                                    E();
                                },
                            };
                        }
                        return {
                            text: G.intl.string(G.t.cfY4PE),
                            tooltipText: G.intl.string(G.t.hsbwjv),
                            onClick: null,
                        };
                    case h.F3.COMPLETED:
                        return { text: G.intl.string(G.t.cfY4PE), tooltipText: null, onClick: d };
                    case h.F3.CLAIMED:
                        return {
                            tooltipText: null,
                            onClick: d,
                            text: (0, R.r7)(t.config) ? G.intl.string(G.t.bAGFz3) : G.intl.string(G.t.vTgCWx),
                        };
                }
            }, [n, u, f, a, d, t, r, s, l, C, A, o, E, c, g]);
        },
        c9: function () {
            let e = K(j()),
                { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, a.cf)([y.A, f.A], () => ({
                    lastFetchedCurrentQuests: y.A.lastFetchedCurrentQuests,
                    lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
                }));
            return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
        },
        gJ: K,
        ix: V,
        lg: function (e) {
            let [t, n] = i.useState(!0),
                [r, s] = i.useState(!1),
                [u, o] = i.useState(!1),
                c = (0, a.bG)([f.A], () => f.A.isFetchingQuestHomeHero()),
                d = z();
            (i.useEffect(() => {
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
                                (!(function (e) {
                                    let { questHomeHero: t, assetId: n, error: r } = e,
                                        i = r instanceof Error ? r.message : null;
                                    (m.default.track(M.HAw.AD_ASSET_LOADING_FAILURE, {
                                        source: q.rE.QUEST_HOME_DESKTOP,
                                        ad_creative_id: t.id,
                                        ad_creative_type: l.p.QUEST_HOME_HERO,
                                        asset_id: n,
                                    }),
                                        b.A.captureException(
                                            Error(
                                                `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                            ),
                                            { tags: { source: q.rE.QUEST_HOME_DESKTOP } },
                                        ));
                                })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                                    s(!0));
                                return;
                            }
                            let e = [
                                null != d.heroVideo ? (0, I.WV)(d.heroVideo) : null,
                                d.heroImage,
                                d.sponsorImage,
                            ].filter((e) => null != e);
                            await Promise.all(e.map(p.NN));
                        } catch (e) {}
                    })();
                }, [d]));
            let [A, C] = i.useState(!1);
            t || c || A || C(!0);
            let E = !A,
                g = !E && !u && !r && null == e && null == d;
            return { questHomeHero: u || r ? null : d, isLoading: E, confirmedEmpty: g };
        },
        wo: j,
    },
);
