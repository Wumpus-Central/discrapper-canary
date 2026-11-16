var i = n(477900),
    r = n(582128),
    s = n(120692),
    l = n(323889),
    u = n(855986),
    a = n(717421),
    o = n(663417),
    c = n(858899),
    d = n(59520),
    f = n(157695),
    A = n(438457),
    C = n(144779),
    g = n(494280),
    E = n(87719),
    T = n(287809),
    _ = n(166403),
    p = n(129230),
    m = n(515718),
    v = n(856383),
    b = n(265704),
    y = n(153229),
    S = n(122760),
    I = n(506988),
    h = n(61387),
    Q = n(760914),
    x = n(971276),
    O = n(590202),
    L = n(971649),
    U = n(387564),
    P = n(651892),
    N = n(710969),
    k = n(574112),
    w = n(417404),
    R = n(792620),
    F = n(814793),
    D = n(753386),
    H = n(175248),
    q = n(321538),
    B = n(221596),
    G = n(652215),
    M = n(792996);
function V(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: s, sourceQuestContent: a } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, L.wW)();
    return r.useCallback(() => {
        null != t &&
            ((0, A.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: t.id,
                questContentCTA: O.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: a,
                impressionId: f(),
                questContentPosition: i,
                questContentRowIndex: s,
            }),
            (0, w.ks)(t.config) && !d
                ? (0, H.E)()
                : c
                  ? (0, w.K9)(t.config)
                      ? (0, E.x)()
                      : (0, w.tU)(t.config)
                        ? (0, q.hJ)(t, n, a)
                        : (0, w.HG)(t.config)
                          ? (0, q.cf)(t, n, a)
                          : (0, w.ks)(t.config)
                            ? (0, q.Df)(t, n, a)
                            : (0, q.rx)({ quest: t, sourceQuestContent: a })
                  : (0, H.E)());
    }, [t, f, n, i, s, c, d, a]);
}
function W(e) {
    return (0, R.vl)(e)
        ? e.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: M.intl.string(M.t["+qoymD"]), questContentCTA: O.Cy.START_QUEST }
            : { text: M.intl.string(M.t.E4kW5O), questContentCTA: O.Cy.START_QUEST }
        : (0, R.Ov)(e)
          ? { text: M.intl.string(M.t.CkUzLd), questContentCTA: O.Cy.START_QUEST }
          : { text: M.intl.string(M.t.l7E81v), questContentCTA: O.Cy.ACCEPT_QUEST };
}
function j() {
    return ((0, U.kW)(I.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, U.r8)(I.p9.DESKTOP_ACCOUNT_PANEL_AREA, I.uF.QUEST_BAR_V2));
}
function Y(e) {
    let { quest: t } = e,
        n = (0, x.s)(),
        i = (0, h.LS)(t),
        { premiumSubscription: r } = (0, u.cf)([_.A], () => ({ premiumSubscription: _.A.getPremiumSubscription() })),
        s = (0, u.bG)([S.A], () => null != S.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, w.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, N.gO)(t.userStatus, I.uF.QUEST_BAR);
    return l
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? a
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function K(e) {
    let { isQuestBarVisible: t } = Y({ quest: (0, g.Ys)(e) }),
        n = (0, g.nN)(e),
        i = (0, u.bG)([S.A], () => null != n && S.A.isAdContentDismissed(n), [n]),
        r = (0, u.bG)([b.A], () => e.type === l.p.BOUNTY && b.A.isBountyCompleted(e.bounty.id), [e]);
    switch (e.type) {
        case l.p.QUEST:
            return t;
        case l.p.BOUNTY:
            return (0, x.s)() && !i && !r;
        case l.p.PLAYABLE:
        case l.p.NO_FILL:
            return !1;
    }
}
let $ = { leading: !0, trailing: !1 };
function z() {
    let e = (0, u.bG)([f.A], () => f.A.getQuestHomeHero()),
        [t, n] = r.useState(() => Date.now()),
        i = null != e ? Date.parse(e.endsAt) : null,
        s = null != e;
    return (r.useEffect(() => {
        if (!s) return;
        let e = setInterval(() => n(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [s]),
    null == e || null == i || Number.isNaN(i) || t >= i)
        ? null
        : e;
}
n.d(
    t,
    {},
    {
        H1: (e, t, n) => {
            let { message: r, xboxURL: s } = (0, h.UX)(),
                u = (0, L.wW)();
            return (0, i.jsx)("span", {
                onClick: function (i) {
                    let r = i.target;
                    if (r?.tagName?.toLowerCase() !== "a") return;
                    let a =
                        r.getAttribute("href") === s
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
                children: r,
            });
        },
        Lk: function (e) {
            let { isShareable: t, questId: n, trackingCtx: i } = e,
                s = (0, L.wW)();
            return (0, d.I)(
                r.useCallback(() => {
                    t &&
                        ((0, P.Xm)(n, { ...i, impressionId: s() }),
                        (0, c.P0)({ text: M.intl.string(M.t["+5kSoW"]), variant: "success" }));
                }, [t, n, i, s]),
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
            return !n && null != t && (0, F.I0)(t, e);
        },
        Xf: function (e) {
            let { useReducedMotion: t, className: n } = e,
                [l, u] = (0, a.z)(() => ({})),
                c = r.useRef(!1),
                d = (0, s.animated)(o.RefreshIcon);
            return {
                render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : l, color: "currentColor", size: "xs" }),
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
                    questContent: i,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    inGiftInventory: u,
                    isVideoQuest: a,
                    inGameQuest: o,
                    sourceQuestContent: c,
                } = e,
                d = V({
                    quest: t,
                    questContent: i,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    sourceQuestContent: c,
                }),
                f = (0, h.RR)({ quest: t }),
                A = (0, h.fc)(t),
                C = (0, L.vU)()?.getId(),
                { launchInGameActivity: g } = (0, h.zW)(t),
                E = (0, F.vA)(t);
            return r.useMemo(() => {
                switch (n) {
                    case h.F3.UNACCEPTED:
                        let e = M.intl.string(M.t.kUQLMJ),
                            r = O.Cy.ACCEPT_QUEST;
                        return (
                            a && ((e = M.intl.string(M.t.umdNin)), (r = O.Cy.START_QUEST)),
                            (o || (0, R.vl)(t)) && ({ text: e, questContentCTA: r } = W(t)),
                            {
                                text: e,
                                tooltipText: null,
                                onClick: async () => {
                                    if ((0, R.K$)(t)) {
                                        (await (0, y.Oy)(t.id, {
                                            questContent: i,
                                            questContentCTA: r,
                                            questContentPosition: s,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                            (0, q.Fy)(t));
                                        return;
                                    }
                                    (a ||
                                        E ||
                                        (0, y.Oy)(t.id, {
                                            questContent: i,
                                            questContentCTA: r,
                                            questContentPosition: s,
                                            questContentRowIndex: l,
                                            sourceQuestContent: c,
                                        }),
                                        a
                                            ? await (0, q.e0)(t, {
                                                  questContent: i,
                                                  questContentCTA: r,
                                                  sourceQuestContent: c,
                                                  sourceQuestContentCTA: O.Cy.ACCEPT_QUEST,
                                                  questContentPosition: s,
                                                  questContentRowIndex: l,
                                              })
                                            : E &&
                                              (await (0, y.Oy)(t.id, {
                                                  questContent: i,
                                                  questContentCTA: r,
                                                  questContentPosition: s,
                                                  questContentRowIndex: l,
                                                  sourceQuestContent: c,
                                              }),
                                              g()));
                                },
                            }
                        );
                    case h.F3.ACCEPTED:
                    case h.F3.IN_PROGRESS:
                        if (f && u)
                            return {
                                text: M.intl.string(M.t.Cfye4v),
                                tooltipText: null,
                                onClick: () =>
                                    (0, k.se)(
                                        { quest: t },
                                        {
                                            content: i,
                                            ctaContent: O.Cy.CONNECT_CONSOLE,
                                            position: s,
                                            rowIndex: l,
                                            impressionId: C,
                                            sourceQuestContent: c,
                                        },
                                    ),
                            };
                        if ((0, R.K$)(t))
                            return {
                                text: M.intl.string(M.t["/cXIc6"]),
                                tooltipText: null,
                                onClick: () => {
                                    (0, q.Fy)(t);
                                },
                            };
                        if (a)
                            return {
                                text: (0, D.WM)(A),
                                tooltipText: M.intl.string(M.t.hsbwjv),
                                onClick: () =>
                                    (0, q.d5)({
                                        quest: t,
                                        questContent: i,
                                        sourceQuestContent: c,
                                        sourceQuestContentCTA: O.Cy.WATCH_VIDEO,
                                    }),
                            };
                        else if (E) {
                            let { text: e } = W(t);
                            return {
                                text: e,
                                tooltipText: M.intl.string(M.t.hsbwjv),
                                onClick: () => {
                                    g();
                                },
                            };
                        }
                        return {
                            text: M.intl.string(M.t.cfY4PE),
                            tooltipText: M.intl.string(M.t.hsbwjv),
                            onClick: null,
                        };
                    case h.F3.COMPLETED:
                        return { text: M.intl.string(M.t.cfY4PE), tooltipText: null, onClick: d };
                    case h.F3.CLAIMED:
                        return {
                            tooltipText: null,
                            onClick: d,
                            text: (0, w.r7)(t.config) ? M.intl.string(M.t.bAGFz3) : M.intl.string(M.t.vTgCWx),
                        };
                }
            }, [n, a, f, u, d, t, i, s, l, C, A, o, g, c, E]);
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
        ix: V,
        lg: function (e) {
            let [t, n] = r.useState(!0),
                [i, s] = r.useState(!1),
                [a, o] = r.useState(!1),
                c = (0, u.bG)([f.A], () => f.A.isFetchingQuestHomeHero()),
                d = z();
            (r.useEffect(() => {
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
                r.useEffect(() => {
                    !(async function () {
                        try {
                            if (null == d) return;
                            if (null == d.heroImage) {
                                let e = Error("Hero image is missing");
                                (!(function (e) {
                                    let { questHomeHero: t, assetId: n, error: i } = e,
                                        r = i instanceof Error ? i.message : null;
                                    (p.default.track(G.HAw.AD_ASSET_LOADING_FAILURE, {
                                        source: B.rE.QUEST_HOME_DESKTOP,
                                        ad_creative_id: t.id,
                                        ad_creative_type: l.p.QUEST_HOME_HERO,
                                        asset_id: n,
                                    }),
                                        v.A.captureException(
                                            Error(
                                                `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                                            ),
                                            { tags: { source: B.rE.QUEST_HOME_DESKTOP } },
                                        ));
                                })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                                    s(!0));
                                return;
                            }
                            let e = [
                                null != d.heroVideo ? (0, Q.WV)(d.heroVideo) : null,
                                d.heroImage,
                                d.sponsorImage,
                            ].filter((e) => null != e);
                            await Promise.all(e.map(m.NN));
                        } catch (e) {}
                    })();
                }, [d]));
            let [A, C] = r.useState(!1);
            t || c || A || C(!0);
            let g = !A,
                E = !g && !a && !i && null == e && null == d;
            return { questHomeHero: a || i ? null : d, isLoading: g, confirmedEmpty: E };
        },
        wo: j,
    },
);
