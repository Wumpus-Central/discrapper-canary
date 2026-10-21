n.d(e, {
    H1: () => G,
    Lk: () => Z,
    T2: () => tt,
    TQ: () => z,
    UX: () => tn,
    Xf: () => W,
    _c: () => j,
    c9: () => $,
    gJ: () => X,
    ix: () => V,
    lg: () => te,
    wo: () => K,
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
    C = n(274670),
    A = n(144779),
    T = n(494280);
n(952818);
var E = n(87719),
    g = n(287809),
    _ = n(166403),
    p = n(174459),
    v = n(515718),
    m = n(38405),
    y = n(396813),
    S = n(859703),
    I = n(738822),
    Q = n(77870),
    h = n(291749),
    x = n(971276),
    O = n(590202),
    U = n(971649),
    b = n(773545),
    N = n(651892),
    L = n(710969),
    P = n(620954),
    k = n(801365),
    w = n(792620),
    R = n(814793),
    D = n(753386),
    q = n(175248),
    B = n(617986),
    F = n(190107),
    H = n(652215),
    M = n(105292);
function V(t) {
    let { quest: e, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = t,
        o = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        f = (0, U.wW)();
    return i.useCallback(() => {
        null != e &&
            ((0, C.r)({
                type: A.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: e.id,
                questContentCTA: O.Cy.CLAIM_REWARD,
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
                        ? (0, B.hJ)(e, n, a)
                        : (0, k.HG)(e.config)
                          ? (0, B.cf)(e, n, a)
                          : (0, k.ks)(e.config)
                            ? (0, B.Df)(e, n, a)
                            : (0, B.rx)({ quest: e, sourceQuestContent: a })
                  : (0, q.E)());
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
let G = (t, e, n) => {
    let { message: i, xboxURL: s } = (0, Q.UX)(),
        u = (0, U.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let a = i.getAttribute("href") === s ? O.Cy.HOW_TO_HELP_ARTICLE_XBOX : O.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
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
function Y(t) {
    return (0, w.vl)(t)
        ? t.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: M.intl.string(M.t["+qoymD"]), questContentCTA: O.Cy.START_QUEST }
            : { text: M.intl.string(M.t.E4kW5O), questContentCTA: O.Cy.START_QUEST }
        : (0, w.Ov)(t)
          ? { text: M.intl.string(M.t.CkUzLd), questContentCTA: O.Cy.START_QUEST }
          : { text: M.intl.string(M.t.l7E81v), questContentCTA: O.Cy.ACCEPT_QUEST };
}
function j(t) {
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
        d = V({ quest: e, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        f = (0, Q.RR)({ quest: e }),
        C = (0, Q.fc)(e),
        A = (0, U.vU)()?.getId(),
        { launchInGameActivity: T } = (0, Q.zW)(e),
        E = (0, R.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case Q.F3.UNACCEPTED:
                let t = M.intl.string(M.t.kUQLMJ),
                    i = O.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = M.intl.string(M.t.umdNin)), (i = O.Cy.START_QUEST)),
                    (o || (0, w.vl)(e)) && ({ text: t, questContentCTA: i } = Y(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, w.K$)(e)) {
                                (await (0, y.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, B.Fy)(e));
                                return;
                            }
                            (a ||
                                E ||
                                (0, y.Oy)(e.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, B.e0)(e, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: O.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : E &&
                                      (await (0, y.Oy)(e.id, {
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
            case Q.F3.ACCEPTED:
            case Q.F3.IN_PROGRESS:
                if (f && u)
                    return {
                        text: M.intl.string(M.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, P.se)(
                                { quest: e },
                                {
                                    content: r,
                                    ctaContent: O.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, w.K$)(e))
                    return {
                        text: M.intl.string(M.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, B.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, D.WM)(C),
                        tooltipText: M.intl.string(M.t.hsbwjv),
                        onClick: () =>
                            (0, B.d5)({
                                quest: e,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: O.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: t } = Y(e);
                    return {
                        text: t,
                        tooltipText: M.intl.string(M.t.hsbwjv),
                        onClick: () => {
                            T();
                        },
                    };
                }
                return { text: M.intl.string(M.t.cfY4PE), tooltipText: M.intl.string(M.t.hsbwjv), onClick: null };
            case Q.F3.COMPLETED:
                return { text: M.intl.string(M.t.cfY4PE), tooltipText: null, onClick: d };
            case Q.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, k.r7)(e.config) ? M.intl.string(M.t.bAGFz3) : M.intl.string(M.t.vTgCWx),
                };
        }
    }, [n, a, f, u, d, e, r, s, l, A, C, o, T, c, E]);
}
function K() {
    return ((0, b.kW)(I.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, b.r8)(I.p9.DESKTOP_ACCOUNT_PANEL_AREA, I.uF.QUEST_BAR_V2));
}
function z(t) {
    let { quest: e } = t,
        n = (0, x.s)(),
        r = (0, Q.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([_.A], () => ({ premiumSubscription: _.A.getPremiumSubscription() })),
        s = (0, u.bG)([S.A], () => null != S.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, k.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, L.gO)(e.userStatus, I.uF.QUEST_BAR);
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
function X(t) {
    let { isQuestBarVisible: e } = z({ quest: (0, T.Ys)(t) });
    switch (t.type) {
        case l.p.QUEST:
            return e;
        case l.p.BOUNTY:
        case l.p.NO_FILL:
            return !1;
    }
}
function $() {
    let t = X(K()),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, u.cf)([S.A, f.A], () => ({
            lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let J = { leading: !0, trailing: !1 };
function Z(t) {
    let { isShareable: e, questId: n, trackingCtx: r } = t,
        s = (0, U.wW)();
    return (0, d.I)(
        i.useCallback(() => {
            e &&
                ((0, N.Xm)(n, { ...r, impressionId: s() }),
                (0, c.P0)({ text: M.intl.string(M.t["+5kSoW"]), variant: "success" }));
        }, [e, n, r, s]),
        3e3,
        [],
        J,
    );
}
function tt() {
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
function te(t) {
    let [e, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([f.A], () => f.A.isFetchingQuestHomeHero()),
        d = tt();
    (i.useEffect(() => {
        !(async function () {
            try {
                null != t ? await (0, y.IV)(t) : await (0, y.Yf)();
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
                            (p.default.track(H.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: F.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: e.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                m.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: F.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: t }),
                            s(!0));
                        return;
                    }
                    let t = [null != d.heroVideo ? (0, h.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (t) => null != t,
                    );
                    await Promise.all(t.map(v.NN));
                } catch (t) {}
            })();
        }, [d]));
    let C = !e && !c && !a && !r && null == t && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: e || c, confirmedEmpty: C };
}
function tn(t) {
    let e = tt(),
        { isShelfEnabled: n } = (0, Q.t9)(e);
    return !n && null != e && (0, R.I0)(e, t);
}
