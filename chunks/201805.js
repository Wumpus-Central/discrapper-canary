var r = n(477900),
    i = n(582128),
    s = n(156150),
    l = n(323889),
    a = n(855986),
    u = n(717421),
    o = n(663417),
    c = n(858899),
    d = n(59520),
    f = n(157695),
    E = n(438457),
    A = n(144779),
    C = n(907191),
    _ = n(494280),
    T = n(107195),
    g = n(87719),
    m = n(287809),
    p = n(166403),
    b = n(129230),
    S = n(515718),
    v = n(856383),
    y = n(265704),
    O = n(797553),
    Q = n(122760),
    h = n(506988),
    I = n(221640),
    x = n(61387),
    U = n(760914),
    N = n(971276),
    P = n(590202),
    k = n(971649),
    H = n(233193),
    L = n(651892),
    R = n(710969),
    D = n(574112),
    F = n(417404),
    w = n(792620),
    B = n(814793),
    q = n(753386),
    M = n(175248),
    G = n(321538),
    V = n(221596),
    Y = n(652215),
    W = n(792996);
function j(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: u } = e,
        o = (0, a.bG)([m.default], () => m.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, k.wW)();
    return i.useCallback(() => {
        null != t &&
            ((0, E.r)({
                type: A.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: t.id,
                questContentCTA: P.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: u,
                impressionId: f(),
                questContentPosition: r,
                questContentRowIndex: s,
            }),
            (0, F.ks)(t.config) && !d
                ? (0, M.E)()
                : c
                  ? (0, F.K9)(t.config)
                      ? (0, g.x)()
                      : (0, F.tU)(t.config)
                        ? (0, G.hJ)(t, n, u)
                        : (0, F.HG)(t.config)
                          ? (0, G.cf)(t, n, u)
                          : (0, F.ks)(t.config)
                            ? (0, G.Df)(t, n, u)
                            : (0, G.rx)({ quest: t, sourceQuestContent: u })
                  : (0, M.E)());
    }, [t, f, n, r, s, c, d, u]);
}
function K(e) {
    return (0, w.vl)(e)
        ? e.config.features.includes(V.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: W.intl.string(W.t["+qoymD"]), questContentCTA: P.Cy.START_QUEST }
            : { text: W.intl.string(W.t.E4kW5O), questContentCTA: P.Cy.START_QUEST }
        : (0, w.Ov)(e)
          ? { text: W.intl.string(W.t.CkUzLd), questContentCTA: P.Cy.START_QUEST }
          : { text: W.intl.string(W.t.l7E81v), questContentCTA: P.Cy.ACCEPT_QUEST };
}
function $() {
    return ((0, H.kW)(h.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, H.r8)(h.p9.DESKTOP_ACCOUNT_PANEL_AREA, h.uF.QUEST_BAR_V2));
}
function z(e) {
    let { quest: t } = e,
        n = (0, N.s)(),
        r = (0, x.LS)(t),
        { premiumSubscription: i } = (0, a.cf)([p.A], () => ({ premiumSubscription: p.A.getPremiumSubscription() })),
        s = (0, a.bG)([Q.A], () => null != Q.A.getQuestPreviewOverride(h.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, F.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = null != t.userStatus && (0, R.gO)(t.userStatus, h.uF.QUEST_BAR);
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
function X(e) {
    let { isQuestBarVisible: t } = z({ quest: (0, _.Ys)(e) }),
        n = (0, _.nN)(e),
        r = (0, a.bG)([Q.A], () => null != n && Q.A.isAdContentDismissed(n), [n]),
        i = (0, a.bG)([y.A], () => e.type === l.p.BOUNTY && y.A.isBountyCompleted(e.bounty.id), [e]);
    switch (e.type) {
        case l.p.QUEST:
            return t;
        case l.p.BOUNTY:
            return (0, N.s)() && !r && !i;
        case l.p.PLAYABLE:
        case l.p.NO_FILL:
            return !1;
    }
}
let J = { leading: !0, trailing: !1 };
function Z() {
    let { enabled: e } = I.Y.useConfig({ location: V.rE.QUEST_HOME_HERO }),
        t = (0, a.bG)([f.A], () => f.A.getQuestHomeHero()),
        n = (0, a.bG)([f.A], () => f.A.getAdDecisionsForPlacement(h.p9.QUEST_HOME_BANNER_DESKTOP)[0]),
        [r, s] = i.useState(() => Date.now()),
        l = null != t ? Date.parse(t.endsAt) : null,
        u = null != t;
    return (i.useEffect(() => {
        if (!u) return;
        let e = setInterval(() => s(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [u]),
    null == t || null == l || Number.isNaN(l) || r >= l || (e && !(0, T.sv)(n, r)))
        ? null
        : t;
}
n.d(
    t,
    {},
    {
        H1: (e, t, n) => {
            let { message: i, xboxURL: s } = (0, x.UX)(),
                a = (0, k.wW)();
            return (0, r.jsx)("span", {
                onClick: function (r) {
                    let i = r.target;
                    if (i?.tagName?.toLowerCase() !== "a") return;
                    let u =
                        i.getAttribute("href") === s
                            ? P.Cy.HOW_TO_HELP_ARTICLE_XBOX
                            : P.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                    (0, E.r)({
                        type: A.F.CLICK_INTERNAL,
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
                s = (0, k.wW)();
            return (0, d.I)(
                i.useCallback(() => {
                    t &&
                        ((0, L.Xm)(n, { ...r, impressionId: s() }),
                        (0, c.P0)({ text: W.intl.string(W.t["+5kSoW"]), variant: "success" }));
                }, [t, n, r, s]),
                3e3,
                [],
                J,
            );
        },
        T2: Z,
        TQ: z,
        UX: function (e) {
            let t = Z(),
                { isShelfEnabled: n } = (0, x.t9)(t);
            return !n && null != t && (0, B.I0)(t, e);
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
                d = j({
                    quest: t,
                    questContent: r,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    sourceQuestContent: c,
                }),
                f = (0, x.RR)({ quest: t }),
                E = (0, x.fc)(t),
                A = (0, k.vU)()?.getId(),
                { launchInGameActivity: C } = (0, x.zW)(t),
                _ = (0, B.vA)(t);
            return i.useMemo(() => {
                switch (n) {
                    case x.F3.UNACCEPTED:
                        let e = W.intl.string(W.t.kUQLMJ),
                            i = P.Cy.ACCEPT_QUEST;
                        return (
                            u && ((e = W.intl.string(W.t.umdNin)), (i = P.Cy.START_QUEST)),
                            (o || (0, w.vl)(t)) && ({ text: e, questContentCTA: i } = K(t)),
                            {
                                text: e,
                                tooltipText: null,
                                onClick: async () => {
                                    if ((0, w.K$)(t)) {
                                        (await (0, O.Oy)(t.id, {
                                            questContent: r,
                                            questContentCTA: i,
                                            questContentPosition: s,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                            (0, G.Fy)(t));
                                        return;
                                    }
                                    (u ||
                                        _ ||
                                        (0, O.Oy)(t.id, {
                                            questContent: r,
                                            questContentCTA: i,
                                            questContentPosition: s,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                        u
                                            ? await (0, G.e0)(t, {
                                                  questContent: r,
                                                  questContentCTA: i,
                                                  sourceQuestContent: c,
                                                  sourceQuestContentCTA: P.Cy.ACCEPT_QUEST,
                                                  questContentPosition: s,
                                                  questContentRowIndex: l,
                                              })
                                            : _ &&
                                              (await (0, O.Oy)(t.id, {
                                                  questContent: r,
                                                  questContentCTA: i,
                                                  questContentPosition: s,
                                                  questContentRowIndex: l,
                                                  sourceQuestContent: c,
                                              }),
                                              C()));
                                },
                            }
                        );
                    case x.F3.ACCEPTED:
                    case x.F3.IN_PROGRESS:
                        if (f && a)
                            return {
                                text: W.intl.string(W.t.Cfye4v),
                                tooltipText: null,
                                onClick: () =>
                                    (0, D.se)(
                                        { quest: t },
                                        {
                                            content: r,
                                            ctaContent: P.Cy.CONNECT_CONSOLE,
                                            position: s,
                                            rowIndex: l,
                                            impressionId: A,
                                            sourceQuestContent: c,
                                        },
                                    ),
                            };
                        if ((0, w.K$)(t))
                            return {
                                text: W.intl.string(W.t["/cXIc6"]),
                                tooltipText: null,
                                onClick: () => {
                                    (0, G.Fy)(t);
                                },
                            };
                        if (u)
                            return {
                                text: (0, q.WM)(E),
                                tooltipText: W.intl.string(W.t.hsbwjv),
                                onClick: () =>
                                    (0, G.d5)({
                                        quest: t,
                                        questContent: r,
                                        sourceQuestContent: c,
                                        sourceQuestContentCTA: P.Cy.WATCH_VIDEO,
                                    }),
                            };
                        else if (_) {
                            let { text: e } = K(t);
                            return {
                                text: e,
                                tooltipText: W.intl.string(W.t.hsbwjv),
                                onClick: () => {
                                    C();
                                },
                            };
                        }
                        return {
                            text: W.intl.string(W.t.cfY4PE),
                            tooltipText: W.intl.string(W.t.hsbwjv),
                            onClick: null,
                        };
                    case x.F3.COMPLETED:
                        return { text: W.intl.string(W.t.cfY4PE), tooltipText: null, onClick: d };
                    case x.F3.CLAIMED:
                        return {
                            tooltipText: null,
                            onClick: d,
                            text: (0, F.r7)(t.config) ? W.intl.string(W.t.bAGFz3) : W.intl.string(W.t.vTgCWx),
                        };
                }
            }, [n, u, f, a, d, t, r, s, l, A, E, o, C, c, _]);
        },
        c9: function () {
            let e = X($()),
                { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, a.cf)([Q.A, f.A], () => ({
                    lastFetchedCurrentQuests: Q.A.lastFetchedCurrentQuests,
                    lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
                }));
            return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
        },
        gJ: X,
        ix: j,
        lg: function (e) {
            let [t, n] = i.useState(!0),
                [r, s] = i.useState(!1),
                [u, o] = i.useState(!1),
                c = (0, a.bG)([f.A], () => f.A.isFetchingQuestHomeHero()),
                d = Z(),
                { enabled: E } = I.Y.useConfig({ location: V.rE.QUEST_HOME_HERO }),
                A = i.useCallback(async () => {
                    try {
                        (await (0, O.Yf)(), o(!1));
                    } catch (e) {
                        o(!0);
                    }
                }, []);
            ((0, C.k)(E && null == e ? h.p9.QUEST_HOME_BANNER_DESKTOP : null, {
                fetch: A,
                callerSource: "questHomeHero",
                refetchOnFocus: !0,
            }),
                i.useEffect(() => {
                    !(async function () {
                        try {
                            null != e ? await (0, O.IV)(e) : E || (await (0, O.Yf)());
                        } catch (e) {
                            o(!0);
                        } finally {
                            n(!1);
                        }
                    })();
                }, [e, E]),
                i.useEffect(() => {
                    !(async function () {
                        try {
                            if (null == d) return;
                            if (null == d.heroImage) {
                                let e = Error("Hero image is missing");
                                (!(function (e) {
                                    let { questHomeHero: t, assetId: n, error: r } = e,
                                        i = r instanceof Error ? r.message : null;
                                    (b.default.track(Y.HAw.AD_ASSET_LOADING_FAILURE, {
                                        source: V.rE.QUEST_HOME_DESKTOP,
                                        ad_creative_id: t.id,
                                        ad_creative_type: l.p.QUEST_HOME_HERO,
                                        asset_id: n,
                                    }),
                                        v.A.captureException(
                                            Error(
                                                `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                            ),
                                            { tags: { source: V.rE.QUEST_HOME_DESKTOP } },
                                        ));
                                })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                                    s(!0));
                                return;
                            }
                            let e = [
                                null != d.heroVideo ? (0, U.WV)(d.heroVideo) : null,
                                d.heroImage,
                                d.sponsorImage,
                            ].filter((e) => null != e);
                            await Promise.all(e.map(S.NN));
                        } catch (e) {}
                    })();
                }, [d]));
            let [_, T] = i.useState(!1);
            t || c || _ || T(!0);
            let g = !_ || (E && c && null == d),
                m = !g && !u && !r && null == e && null == d;
            return { questHomeHero: u || r ? null : d, isLoading: g, confirmedEmpty: m };
        },
        wo: $,
    },
);
