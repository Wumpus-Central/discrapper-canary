n.d(t, {
    H1: () => W,
    Lk: () => ee,
    T2: () => et,
    TQ: () => X,
    UX: () => er,
    Xf: () => G,
    _c: () => K,
    c9: () => J,
    gJ: () => $,
    ix: () => V,
    lg: () => en,
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
    A = n(157695),
    f = n(507395),
    C = n(144779),
    T = n(494280);
n(952818);
var p = n(87719),
    E = n(287809),
    g = n(166403),
    _ = n(174459),
    y = n(515718),
    v = n(38405),
    m = n(265704),
    S = n(427495),
    I = n(859703),
    Q = n(738822),
    b = n(77870),
    L = n(291749),
    h = n(971276),
    O = n(590202),
    x = n(971649),
    U = n(773545),
    N = n(651892),
    P = n(710969),
    B = n(620954),
    w = n(801365),
    k = n(792620),
    R = n(814793),
    D = n(753386),
    q = n(175248),
    F = n(617986),
    H = n(190107),
    Y = n(652215),
    M = n(105292);
function V(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: a } = e,
        o = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        d = o?.verified,
        A = (0, x.wW)();
    return i.useCallback(() => {
        null != t &&
            ((0, f.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: t.id,
                questContentCTA: O.Cy.CLAIM_REWARD,
                surfaceId: n,
                sourceQuestContent: a,
                impressionId: A(),
                questContentPosition: r,
                questContentRowIndex: s,
            }),
            (0, w.ks)(t.config) && !d
                ? (0, q.E)()
                : c
                  ? (0, w.K9)(t.config)
                      ? (0, p.x)()
                      : (0, w.tU)(t.config)
                        ? (0, F.hJ)(t, n, a)
                        : (0, w.HG)(t.config)
                          ? (0, F.cf)(t, n, a)
                          : (0, w.ks)(t.config)
                            ? (0, F.Df)(t, n, a)
                            : (0, F.rx)({ quest: t, sourceQuestContent: a })
                  : (0, q.E)());
    }, [t, A, n, r, s, c, d, a]);
}
function G(e) {
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
let W = (e, t, n) => {
    let { message: i, xboxURL: s } = (0, b.UX)(),
        u = (0, x.wW)();
    return (0, r.jsx)("span", {
        onClick: function (r) {
            let i = r.target;
            if (i?.tagName?.toLowerCase() !== "a") return;
            let a = i.getAttribute("href") === s ? O.Cy.HOW_TO_HELP_ARTICLE_XBOX : O.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, f.r)({
                type: C.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: e,
                questContentCTA: a,
                surfaceId: t,
                sourceQuestContent: n,
                impressionId: u(),
            });
        },
        children: i,
    });
};
function j(e) {
    return (0, k.vl)(e)
        ? e.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: M.intl.string(M.t["+qoymD"]), questContentCTA: O.Cy.START_QUEST }
            : { text: M.intl.string(M.t.E4kW5O), questContentCTA: O.Cy.START_QUEST }
        : (0, k.Ov)(e)
          ? { text: M.intl.string(M.t.CkUzLd), questContentCTA: O.Cy.START_QUEST }
          : { text: M.intl.string(M.t.l7E81v), questContentCTA: O.Cy.ACCEPT_QUEST };
}
function K(e) {
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
        d = V({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: l, sourceQuestContent: c }),
        A = (0, b.RR)({ quest: t }),
        f = (0, b.fc)(t),
        C = (0, x.vU)()?.getId(),
        { launchInGameActivity: T } = (0, b.zW)(t),
        p = (0, R.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case b.F3.UNACCEPTED:
                let e = M.intl.string(M.t.kUQLMJ),
                    i = O.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = M.intl.string(M.t.umdNin)), (i = O.Cy.START_QUEST)),
                    (o || (0, k.vl)(t)) && ({ text: e, questContentCTA: i } = j(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, k.K$)(t)) {
                                (await (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, F.Fy)(t));
                                return;
                            }
                            (a ||
                                p ||
                                (0, S.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, F.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: O.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: l,
                                      })
                                    : p &&
                                      (await (0, S.Oy)(t.id, {
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
            case b.F3.ACCEPTED:
            case b.F3.IN_PROGRESS:
                if (A && u)
                    return {
                        text: M.intl.string(M.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, B.se)(
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
                if ((0, k.K$)(t))
                    return {
                        text: M.intl.string(M.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, F.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, D.WM)(f),
                        tooltipText: M.intl.string(M.t.hsbwjv),
                        onClick: () =>
                            (0, F.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: O.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (p) {
                    let { text: e } = j(t);
                    return {
                        text: e,
                        tooltipText: M.intl.string(M.t.hsbwjv),
                        onClick: () => {
                            T();
                        },
                    };
                }
                return { text: M.intl.string(M.t.cfY4PE), tooltipText: M.intl.string(M.t.hsbwjv), onClick: null };
            case b.F3.COMPLETED:
                return { text: M.intl.string(M.t.cfY4PE), tooltipText: null, onClick: d };
            case b.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, w.r7)(t.config) ? M.intl.string(M.t.bAGFz3) : M.intl.string(M.t.vTgCWx),
                };
        }
    }, [n, a, A, u, d, t, r, s, l, C, f, o, T, c, p]);
}
function z() {
    return ((0, U.kW)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA), (0, U.r8)(Q.p9.DESKTOP_ACCOUNT_PANEL_AREA, Q.uF.QUEST_BAR_V2));
}
function X(e) {
    let { quest: t } = e,
        n = (0, h.s)(),
        r = (0, b.LS)(t),
        { premiumSubscription: i } = (0, u.cf)([g.A], () => ({ premiumSubscription: g.A.getPremiumSubscription() })),
        s = (0, u.bG)([I.A], () => null != I.A.getQuestPreviewOverride(Q.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = t.userStatus?.claimedAt != null;
    if (s && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, w.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != t.userStatus && (0, P.gO)(t.userStatus, Q.uF.QUEST_BAR);
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
function $(e) {
    let { isQuestBarVisible: t } = X({ quest: (0, T.Ys)(e) }),
        n = (0, T.nN)(e),
        r = (0, u.bG)([I.A], () => null != n && I.A.isAdContentDismissed(n), [n]),
        i = (0, u.bG)([m.A], () => e.type === l.p.BOUNTY && m.A.isBountyCompleted(e.bounty.id), [e]);
    switch (e.type) {
        case l.p.QUEST:
            return t;
        case l.p.BOUNTY:
            return (0, h.s)() && !r && !i;
        case l.p.PLAYABLE:
        case l.p.NO_FILL:
            return !1;
    }
}
function J() {
    let e = $(z()),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, u.cf)([I.A, A.A], () => ({
            lastFetchedCurrentQuests: I.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let Z = { leading: !0, trailing: !1 };
function ee(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e,
        s = (0, x.wW)();
    return (0, d.I)(
        i.useCallback(() => {
            t &&
                ((0, N.Xm)(n, { ...r, impressionId: s() }),
                (0, c.P0)({ text: M.intl.string(M.t["+5kSoW"]), variant: "success" }));
        }, [t, n, r, s]),
        3e3,
        [],
        Z,
    );
}
function et() {
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
function en(e) {
    let [t, n] = i.useState(!0),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        c = (0, u.bG)([A.A], () => A.A.isFetchingQuestHomeHero()),
        d = et();
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
                            (_.default.track(Y.HAw.AD_ASSET_LOADING_FAILURE, {
                                source: H.rE.QUEST_HOME_DESKTOP,
                                ad_creative_id: t.id,
                                ad_creative_type: l.p.QUEST_HOME_HERO,
                                asset_id: n,
                            }),
                                v.A.captureException(
                                    Error(
                                        `Error loading asset: ${null != i ? `${i}, ` : ""}${n}, QuestHomeHeroPreload`,
                                    ),
                                    { tags: { source: H.rE.QUEST_HOME_DESKTOP } },
                                ));
                        })({ questHomeHero: d, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                            s(!0));
                        return;
                    }
                    let e = [null != d.heroVideo ? (0, L.WV)(d.heroVideo) : null, d.heroImage, d.sponsorImage].filter(
                        (e) => null != e,
                    );
                    await Promise.all(e.map(y.NN));
                } catch (e) {}
            })();
        }, [d]));
    let f = !t && !c && !a && !r && null == e && null == d;
    return { questHomeHero: a || r ? null : d, isLoading: t || c, confirmedEmpty: f };
}
function er(e) {
    let t = et(),
        { isShelfEnabled: n } = (0, b.t9)(t);
    return !n && null != t && (0, R.I0)(t, e);
}
