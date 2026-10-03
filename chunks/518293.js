n.d(t, {
    c9: () => Z,
    UX: () => ei,
    wo: () => $,
    TQ: () => J,
    Lk: () => et,
    lg: () => er,
    H1: () => Y,
    T2: () => en,
    ix: () => G,
    Xf: () => K,
    _c: () => X,
});
var r = n(477900),
    i = n(582128),
    s = n(202091),
    l = n(323889),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(739187),
    d = n(857250),
    C = n(97483),
    f = n(59520),
    A = n(157695),
    E = n(274670),
    _ = n(144779);
n(952818);
var T = n(87719),
    g = n(287809),
    p = n(166403),
    m = n(174459),
    v = n(515718),
    I = n(38405),
    y = n(396813),
    S = n(859703),
    h = n(738822),
    Q = n(104886),
    b = n(866157),
    x = n(291749),
    k = n(971276),
    R = n(18437),
    U = n(590202),
    O = n(971649),
    L = n(158403),
    N = n(651892),
    P = n(710969),
    w = n(901406),
    F = n(801365),
    D = n(792620),
    q = n(814793),
    H = n(753386),
    B = n(175248),
    M = n(617986),
    V = n(190107),
    W = n(652215),
    j = n(375708);
function G(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = e,
        o = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        C = (0, R.Ut)(),
        f = (0, O.wW)();
    return i.useCallback(() => {
        null != t &&
            ((0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: U.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: f(),
                      questContentPosition: r,
                      questContentRowIndex: s,
                  })
                : C({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: U.Cy.CLAIM_REWARD,
                      questContentPosition: r,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, F.ks)(t.config) && !d
                ? (0, B.E)()
                : c
                  ? (0, F.K9)(t.config)
                      ? (0, T.x)()
                      : (0, F.tU)(t.config)
                        ? (0, M.hJ)(t, n, a)
                        : (0, F.HG)(t.config)
                          ? (0, M.cf)(t, n, a)
                          : (0, F.ks)(t.config)
                            ? (0, M.Df)(t, n, a)
                            : (0, M.rx)({ quest: t, sourceQuestContent: a })
                  : (0, B.E)());
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
}
let Y = (e, t, n) => {
    let { message: i, xboxURL: s } = (0, b.UX)(),
        u = (0, R.Ut)(),
        a = (0, O.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let o = i.getAttribute("href") === s ? U.Cy.HOW_TO_HELP_ARTICLE_XBOX : U.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, Q.E5)(Q.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, E.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: o,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: a(),
                  })
                : u({ questId: e, questContent: t, questContentCTA: o, sourceQuestContent: n });
        },
        children: i,
    });
};
function z(e) {
    return (0, D.vl)(e)
        ? e.config.features.includes(V.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: j.intl.string(j.t["+qoymD"]), questContentCTA: U.Cy.START_QUEST }
            : { text: j.intl.string(j.t.E4kW5O), questContentCTA: U.Cy.START_QUEST }
        : (0, D.Ov)(e)
          ? { text: j.intl.string(j.t.CkUzLd), questContentCTA: U.Cy.START_QUEST }
          : { text: j.intl.string(j.t.l7E81v), questContentCTA: U.Cy.ACCEPT_QUEST };
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
        C = (0, b.RR)({ quest: t }),
        f = (0, b.fc)(t),
        A = (0, O.vU)()?.getId(),
        { launchInGameActivity: E } = (0, b.zW)(t),
        _ = (0, q.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case b.F3.UNACCEPTED:
                let e = j.intl.string(j.t.kUQLMJ),
                    i = U.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = j.intl.string(j.t.umdNin)), (i = U.Cy.START_QUEST)),
                    (o || (0, D.vl)(t)) && ({ text: e, questContentCTA: i } = z(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, D.K$)(t)) {
                                (await (0, y.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, M.Fy)(t));
                                return;
                            }
                            (a ||
                                _ ||
                                (0, y.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, M.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: U.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : _ &&
                                      (await (0, y.Oy)(t.id, {
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
            case b.F3.ACCEPTED:
            case b.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: j.intl.string(j.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, w.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: U.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, D.K$)(t))
                    return {
                        text: j.intl.string(j.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, M.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, H.WM)(f),
                        tooltipText: j.intl.string(j.t.hsbwjv),
                        onClick: () =>
                            (0, M.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: U.Cy.WATCH_VIDEO,
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
            case b.F3.COMPLETED:
                return { text: j.intl.string(j.t.cfY4PE), tooltipText: null, onClick: d };
            case b.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, F.r7)(t.config) ? j.intl.string(j.t.bAGFz3) : j.intl.string(j.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, t, r, s, l, A, f, o, E, c, _]);
}
function $() {
    return ((0, L.kW)(h.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, L.r8)(h.p9.DESKTOP_ACCOUNT_PANEL_AREA, h.uF.QUEST_BAR_V2));
}
function J(e) {
    let { quest: t } = e,
        n = (0, k.s)(),
        r = (0, b.LS)(t),
        { premiumSubscription: i } = (0, u.cf)([p.A], () => ({ premiumSubscription: p.A.getPremiumSubscription() })),
        s = (0, u.bG)([S.A], () => null != S.A.getQuestPreviewOverride(h.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, F.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, P.gO)(t.userStatus, h.uF.QUEST_BAR);
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
function Z() {
    let e = (function (e) {
            let { isQuestBarVisible: t } = J({ quest: e.type === l.p.QUEST ? e.quest : null });
            switch (e.type) {
                case l.p.QUEST:
                    return t;
                case l.p.BOUNTY:
                case l.p.NO_FILL:
                    return !1;
            }
        })($()),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([S.A, A.A], () => ({
            lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let ee = { leading: !0, trailing: !1 };
function et(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e,
        s = (0, O.wW)();
    return (0, f.I)(
        i.useCallback(() => {
            t &&
                ((0, N.Xm)(n, { ...r, impressionId: s() }),
                (0, c.P)((0, d.o)(j.intl.string(j.t["+5kSoW"]), C.Ck.SUCCESS)));
        }, [t, n, r, s]),
        3e3,
        [],
        ee,
    );
}
function en() {
    let e = (0, u.bG)([A.A], () => A.A.getQuestHomeHero()),
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
function er(e) {
    let [t, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([A.A], () => A.A.isFetchingQuestHomeHero()),
        d = en();
    (i.useEffect(() => {
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
        i.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    if (null == d.heroImage) {
                        let e = Error("Hero image is missing");
                        (!(function (e) {
                            let { questHomeHero: t, assetId: n, error: r } = e,
                                i = r instanceof Error ? r.message : null;
                            (m.default.track(W.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: V.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                I.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: V.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            s(!0));
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, x.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(v.NN));
                } catch (e) {}
            })();
        }, [d]));
    let C = !t && !c && !a && !r && null == e && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: t || c, confirmedEmpty: C };
}
function ei(e) {
    let t = en(),
        { isShelfEnabled: n } = (0, b.t9)(t);
    return !n && null != t && (0, q.I0)(t, e);
}
