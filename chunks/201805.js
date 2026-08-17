n.d(t, {
    H1: () => W,
    Lk: () => ee,
    T2: () => et,
    TQ: () => $,
    UX: () => er,
    Xf: () => K,
    _c: () => X,
    c9: () => J,
    dN: () => Y,
    ix: () => G,
    lg: () => en,
});
var r = n(477900),
    i = n(582128),
    s = n(53466),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(691540),
    d = n(857250),
    C = n(97483),
    f = n(59520),
    A = n(274670),
    E = n(144779);
n(952818);
var _ = n(87719),
    g = n(287809),
    T = n(166403),
    m = n(174459),
    v = n(515718),
    p = n(38405),
    I = n(396813),
    S = n(859703),
    h = n(24001),
    y = n(104886),
    Q = n(309593),
    b = n(291749),
    x = n(971276),
    k = n(18437),
    R = n(590202),
    U = n(971649),
    L = n(158403),
    N = n(651892),
    O = n(710969),
    P = n(901406),
    F = n(801365),
    q = n(792620),
    D = n(814793),
    w = n(753386),
    H = n(175248),
    B = n(617986),
    M = n(190107),
    V = n(652215),
    j = n(375708);
function G(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = e,
        o = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, k.Ut)(),
        f = (0, U.go)();
    return i.useCallback(() => {
        null != t &&
            ((0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, A.r)({
                      type: E.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: R.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: f,
                      questContentPosition: r,
                      questContentRowIndex: s,
                  })
                : C({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: R.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, F.ks)(t.config) && !d
                ? (0, H.E)()
                : c
                  ? (0, F.K9)(t.config)
                      ? (0, _.x)()
                      : (0, F.tU)(t.config)
                        ? (0, B.hJ)(t, n, a)
                        : (0, F.HG)(t.config)
                          ? (0, B.cf)(t, n, a)
                          : (0, F.ks)(t.config)
                            ? (0, B.Df)(t, n, a)
                            : (0, B.rx)({ quest: t, sourceQuestContent: a })
                  : (0, H.E)());
    }, [t, C, f, n, r, s, c, d, a]);
}
function K(e) {
    let { useReducedMotion: t, className: n } = e,
        [l, u] = (0, a.z)(() => ({})),
        c = i.useRef(!1),
        d = (0, s.animated)(o.RefreshIcon);
    return {
        render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : l, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (c.current = !0),
                u({
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
let W = (e, t, n) => {
    let { message: i, xboxURL: s } = (0, Q.UX)(),
        u = (0, k.Ut)(),
        a = (0, U.go)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let o = i.getAttribute("href") === s ? R.Cy.HOW_TO_HELP_ARTICLE_XBOX : R.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, A.r)({
                      type: E.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: o,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: a,
                  })
                : u({ questId: e, questContent: t, questContentCTA: o, sourceQuestContent: n });
        },
        children: i,
    });
};
function z(e) {
    return (0, q.vl)(e)
        ? e.config.features.includes(M.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: j.intl.string(j.t["+qoymD"]), questContentCTA: R.Cy.START_QUEST }
            : { text: j.intl.string(j.t.E4kW5O), questContentCTA: R.Cy.START_QUEST }
        : (0, q.Ov)(e)
          ? { text: j.intl.string(j.t.CkUzLd), questContentCTA: R.Cy.START_QUEST }
          : { text: j.intl.string(j.t.l7E81v), questContentCTA: R.Cy.ACCEPT_QUEST };
}
function X(e) {
    let {
            quest: t,
            progressState: n,
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = e,
        d = G({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, Q.RR)({ quest: t }),
        f = (0, Q.fc)(t),
        A = (0, U.vU)()?.getId(),
        { launchInGameActivity: E } = (0, Q.zW)(t),
        _ = (0, D.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case Q.F3.UNACCEPTED:
                let e = j.intl.string(j.t.kUQLMJ),
                    i = R.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = j.intl.string(j.t.umdNin)), (i = R.Cy.START_QUEST)),
                    (o || (0, q.vl)(t)) && ({ text: e, questContentCTA: i } = z(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, q.K$)(t)) {
                                await (0, I.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, B.Fy)(t);
                                return;
                            }
                            a ||
                                _ ||
                                (0, I.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, B.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: R.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, I.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      E());
                        },
                    }
                );
            case Q.F3.ACCEPTED:
            case Q.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: j.intl.string(j.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, P.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: R.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, q.K$)(t))
                    return {
                        text: j.intl.string(j.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, B.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, w.WM)(f),
                        tooltipText: j.intl.string(j.t.hsbwjv),
                        onClick: () =>
                            (0, B.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: R.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (_) {
                    let { text: e } = z(t);
                    return {
                        text: e,
                        tooltipText: j.intl.string(j.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: j.intl.string(j.t.cfY4PE), tooltipText: j.intl.string(j.t.hsbwjv), onClick: null };
            case Q.F3.COMPLETED:
                return { text: j.intl.string(j.t.cfY4PE), tooltipText: null, onClick: d };
            case Q.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, F.r7)(t.config) ? j.intl.string(j.t.bAGFz3) : j.intl.string(j.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, t, r, s, l, A, f, o, E, c, _]);
}
function Y() {
    let e = (0, L.Ay)(h.p9.DESKTOP_ACCOUNT_PANEL_AREA);
    return (0, u.bG)([S.A], () => S.A.getQuestPreviewOverride(h.uF.QUEST_BAR_V2), []) ?? e;
}
function $(e) {
    let { quest: t } = e,
        n = (0, x.s)(),
        r = (0, Q.LS)(t),
        { premiumSubscription: i } = (0, u.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        s = (0, u.bG)([S.A], () => null != S.A.getQuestPreviewOverride(h.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, F.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, O.gO)(t.userStatus, h.uF.QUEST_BAR);
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
function J() {
    let { isQuestBarVisible: e } = $({ quest: Y() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([S.A], () => ({
            lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: S.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let Z = { leading: !0, trailing: !1 };
function ee(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, f.I)(
        i.useCallback(() => {
            t && ((0, N.Xm)(n, r), (0, c.P0)((0, d.o)(j.intl.string(j.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        Z,
    );
}
function et() {
    let e = (0, u.bG)([S.A], () => S.A.getQuestHomeHero()),
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
function en(e) {
    let [t, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([S.A], () => S.A.isFetchingQuestHomeHero()),
        d = et();
    i.useEffect(() => {
        !(async function () {
            try {
                null != e ? await (0, I.IV)(e) : await (0, I.Yf)();
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
                        !(function (e) {
                            let { questHomeHero: t, assetId: n, error: r } = e,
                                i = r instanceof Error ? r.message : null;
                            m.default.track(V.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: M.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                p.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: M.rE.QUEST_HOME_DESKTOP } },
                                );
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            s(!0);
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, b.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(v.NN));
                } catch (e) {}
            })();
        }, [d]);
    let C = !t && !c && !a && !r && null == e && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: t || c, confirmedEmpty: C };
}
function er(e) {
    let t = et(),
        { isShelfEnabled: n } = (0, Q.t9)(t);
    return !n && null != t && (0, D.I0)(t, e);
}
