var r = n(477900),
    s = n(582128),
    i = n(120692),
    l = n(323889),
    u = n(855986),
    a = n(717421),
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
    p = n(129230),
    m = n(515718),
    v = n(856383),
    b = n(265704),
    y = n(153229),
    S = n(122760),
    I = n(506988),
    Q = n(61387),
    x = n(760914),
    h = n(971276),
    O = n(590202),
    L = n(971649),
    U = n(233193),
    N = n(651892),
    P = n(710969),
    k = n(574112),
    R = n(417404),
    w = n(792620),
    D = n(814793),
    F = n(753386),
    q = n(175248),
    B = n(321538),
    H = n(221596),
    M = n(652215),
    V = n(792996);
function G(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: i, sourceQuestContent: a } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, L.wW)();
    return s.useCallback(() => {
        null != t &&
            ((0, A.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: t.id,
                questContentCTA: O.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: a,
                impressionId: f(),
                questContentPosition: r,
                questContentRowIndex: i,
            }),
            (0, R.ks)(t.config) && !d
                ? (0, q.E)()
                : c
                  ? (0, R.K9)(t.config)
                      ? (0, g.x)()
                      : (0, R.tU)(t.config)
                        ? (0, B.hJ)(t, n, a)
                        : (0, R.HG)(t.config)
                          ? (0, B.cf)(t, n, a)
                          : (0, R.ks)(t.config)
                            ? (0, B.Df)(t, n, a)
                            : (0, B.rx)({ quest: t, sourceQuestContent: a })
                  : (0, q.E)());
    }, [t, f, n, r, i, c, d, a]);
}
function W(e) {
    return (0, w.vl)(e)
        ? e.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: V.intl.string(V.t["+qoymD"]), questContentCTA: O.Cy.START_QUEST }
            : { text: V.intl.string(V.t.E4kW5O), questContentCTA: O.Cy.START_QUEST }
        : (0, w.Ov)(e)
          ? { text: V.intl.string(V.t.CkUzLd), questContentCTA: O.Cy.START_QUEST }
          : { text: V.intl.string(V.t.l7E81v), questContentCTA: O.Cy.ACCEPT_QUEST };
}
function j() {
    return ((0, U.kW)(I.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, U.r8)(I.p9.DESKTOP_ACCOUNT_PANEL_AREA, I.uF.QUEST_BAR_V2));
}
function Y(e) {
    let { quest: t } = e,
        n = (0, h.s)(),
        r = (0, Q.LS)(t),
        { premiumSubscription: s } = (0, u.cf)([_.A], () => ({ premiumSubscription: _.A.getPremiumSubscription() })),
        i = (0, u.bG)([S.A], () => null != S.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (i && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, R.K9)(t.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, P.gO)(t.userStatus, I.uF.QUEST_BAR);
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
function K(e) {
    let { isQuestBarVisible: t } = Y({ quest: (0, E.Ys)(e) }),
        n = (0, E.nN)(e),
        r = (0, u.bG)([S.A], () => null != n && S.A.isAdContentDismissed(n), [n]),
        s = (0, u.bG)([b.A], () => e.type === l.p.BOUNTY && b.A.isBountyCompleted(e.bounty.id), [e]);
    switch (e.type) {
        case l.p.QUEST:
            return t;
        case l.p.BOUNTY:
            return (0, h.s)() && !r && !s;
        case l.p.PLAYABLE:
        case l.p.NO_FILL:
            return !1;
    }
}
let z = { leading: !0, trailing: !1 };
function X() {
    let e = (0, u.bG)([f.A], () => f.A.getQuestHomeHero()),
        [t, n] = s.useState(() => Date.now()),
        r = null != e ? Date.parse(e.endsAt) : null,
        i = null != e;
    return (s.useEffect(() => {
        if (!i) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [i]),
    null == e || null == r || Number.isNaN(r) || t >= r)
        ? null
        : e;
}
n.d(
    t,
    {},
    {
        H1: (e, t, n) => {
            let { message: s, xboxURL: i } = (0, Q.UX)(),
                u = (0, L.wW)();
            return (0, r.jsx)("span", {
                onClick: function (r) {
                    let s = r.target;
                    if (s?.tagName?.toLowerCase() !== "a") return;
                    let a =
                        s.getAttribute("href") === i
                            ? O.Cy.HOW_TO_HELP_ARTICLE_XBOX
                            : O.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                    (0, A.r)({
                        type: C.F.CLICK_INTERNAL,
                        adCreativeType: l.p.QUEST,
                        adCreativeId: e,
                        questContentCTA: a,
                        surfaceId: t,
                        sourceQuestContent: n,
                        impressionId: u(),
                    });
                },
                children: s,
            });
        },
        Lk: function (e) {
            let { isShareable: t, questId: n, trackingCtx: r } = e,
                i = (0, L.wW)();
            return (0, d.I)(
                s.useCallback(() => {
                    t &&
                        ((0, N.Xm)(n, { ...r, impressionId: i() }),
                        (0, c.P0)({ text: V.intl.string(V.t["+5kSoW"]), variant: "success" }));
                }, [t, n, r, i]),
                3e3,
                [],
                z,
            );
        },
        T2: X,
        TQ: Y,
        UX: function (e) {
            let t = X(),
                { isShelfEnabled: n } = (0, Q.t9)(t);
            return !n && null != t && (0, D.I0)(t, e);
        },
        Xf: function (e) {
            let { useReducedMotion: t, className: n } = e,
                [l, u] = (0, a.z)(() => ({})),
                c = s.useRef(!1),
                d = (0, i.animated)(o.RefreshIcon);
            return {
                render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : l, color: "currentColor", size: "xs" }),
                startAnimation: function (e) {
                    ((c.current = !0),
                        u({
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
                    questContentPosition: i,
                    questContentRowIndex: l,
                    inGiftInventory: u,
                    isVideoQuest: a,
                    inGameQuest: o,
                    sourceQuestContent: c,
                } = e,
                d = G({
                    quest: t,
                    questContent: r,
                    questContentPosition: i,
                    questContentRowIndex: l,
                    sourceQuestContent: c,
                }),
                f = (0, Q.RR)({ quest: t }),
                A = (0, Q.fc)(t),
                C = (0, L.vU)()?.getId(),
                { launchInGameActivity: E } = (0, Q.zW)(t),
                g = (0, D.vA)(t);
            return s.useMemo(() => {
                switch (n) {
                    case Q.F3.UNACCEPTED:
                        let e = V.intl.string(V.t.kUQLMJ),
                            s = O.Cy.ACCEPT_QUEST;
                        return (
                            a && ((e = V.intl.string(V.t.umdNin)), (s = O.Cy.START_QUEST)),
                            (o || (0, w.vl)(t)) && ({ text: e, questContentCTA: s } = W(t)),
                            {
                                text: e,
                                tooltipText: null,
                                onClick: async () => {
                                    if ((0, w.K$)(t)) {
                                        (await (0, y.Oy)(t.id, {
                                            questContent: r,
                                            questContentCTA: s,
                                            questContentPosition: i,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                            (0, B.Fy)(t));
                                        return;
                                    }
                                    (a ||
                                        g ||
                                        (0, y.Oy)(t.id, {
                                            questContent: r,
                                            questContentCTA: s,
                                            questContentPosition: i,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                        a
                                            ? await (0, B.e0)(t, {
                                                  questContent: r,
                                                  questContentCTA: s,
                                                  sourceQuestContent: c,
                                                  sourceQuestContentCTA: O.Cy.ACCEPT_QUEST,
                                                  questContentPosition: i,
                                                  questContentRowIndex: l,
                                              })
                                            : g &&
                                              (await (0, y.Oy)(t.id, {
                                                  questContent: r,
                                                  questContentCTA: s,
                                                  questContentPosition: i,
                                                  questContentRowIndex: l,
                                                  sourceQuestContent: c,
                                              }),
                                              E()));
                                },
                            }
                        );
                    case Q.F3.ACCEPTED:
                    case Q.F3.IN_PROGRESS:
                        if (f && u)
                            return {
                                text: V.intl.string(V.t.Cfye4v),
                                tooltipText: null,
                                onClick: () =>
                                    (0, k.se)(
                                        { quest: t },
                                        {
                                            content: r,
                                            ctaContent: O.Cy.CONNECT_CONSOLE,
                                            position: i,
                                            rowIndex: l,
                                            impressionId: C,
                                            sourceQuestContent: c,
                                        },
                                    ),
                            };
                        if ((0, w.K$)(t))
                            return {
                                text: V.intl.string(V.t["/cXIc6"]),
                                tooltipText: null,
                                onClick: () => {
                                    (0, B.Fy)(t);
                                },
                            };
                        if (a)
                            return {
                                text: (0, F.WM)(A),
                                tooltipText: V.intl.string(V.t.hsbwjv),
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
                                tooltipText: V.intl.string(V.t.hsbwjv),
                                onClick: () => {
                                    E();
                                },
                            };
                        }
                        return {
                            text: V.intl.string(V.t.cfY4PE),
                            tooltipText: V.intl.string(V.t.hsbwjv),
                            onClick: null,
                        };
                    case Q.F3.COMPLETED:
                        return { text: V.intl.string(V.t.cfY4PE), tooltipText: null, onClick: d };
                    case Q.F3.CLAIMED:
                        return {
                            tooltipText: null,
                            onClick: d,
                            text: (0, R.r7)(t.config) ? V.intl.string(V.t.bAGFz3) : V.intl.string(V.t.vTgCWx),
                        };
                }
            }, [n, a, f, u, d, t, r, i, l, C, A, o, E, c, g]);
        },
        c9: function () {
            let e = K(j()),
                { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([S.A, f.A], () => ({
                    lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
                    lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
                }));
            return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
        },
        gJ: K,
        ix: G,
        lg: function (e) {
            let [t, n] = s.useState(!0),
                [r, i] = s.useState(!1),
                [a, o] = s.useState(!1),
                c = (0, u.bG)([f.A], () => f.A.isFetchingQuestHomeHero()),
                d = X();
            (s.useEffect(() => {
                !(async function () {
                    try {
                        null != e ? await (0, y.IV)(e) : await (0, y.Yf)();
                    } catch (e) {
                        o(!0);
                    } finally {
                        n(!1);
                    }
                })();
            }, [e]),
                s.useEffect(() => {
                    !(async function () {
                        try {
                            if (null == d) return;
                            if (null == d.heroImage) {
                                let e = Error("Hero image is missing");
                                (!(function (e) {
                                    let { questHomeHero: t, assetId: n, error: r } = e,
                                        s = r instanceof Error ? r.message : null;
                                    (p.default.track(M.HAw.AD_ASSET_LOADING_FAILURE, {
                                        source: H.rE.QUEST_HOME_DESKTOP,
                                        ad_creative_id: t.id,
                                        ad_creative_type: l.p.QUEST_HOME_HERO,
                                        asset_id: n,
                                    }),
                                        v.A.captureException(
                                            Error(
                                                `Error loading asset: ${null != s ? `${s}, ` : ""}${n}, QuestHomeHeroPreload`,
                                            ),
                                            { tags: { source: H.rE.QUEST_HOME_DESKTOP } },
                                        ));
                                })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                                    i(!0));
                                return;
                            }
                            let e = [
                                null != d.heroVideo ? (0, x.WV)(d.heroVideo) : null,
                                d.heroImage,
                                d.sponsorImage,
                            ].filter((e) => null != e);
                            await Promise.all(e.map(m.NN));
                        } catch (e) {}
                    })();
                }, [d]));
            let [A, C] = s.useState(!1);
            t || c || A || C(!0);
            let E = !A,
                g = !E && !a && !r && null == e && null == d;
            return { questHomeHero: a || r ? null : d, isLoading: E, confirmedEmpty: g };
        },
        wo: j,
    },
);
