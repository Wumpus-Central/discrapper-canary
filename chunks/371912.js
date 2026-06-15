n.d(e, {
    c9: () => Y,
    dN: () => X,
    TQ: () => K,
    UX: () => te,
    Lk: () => J,
    lg: () => tt,
    H1: () => H,
    T2: () => Z,
    ix: () => G,
    Xf: () => j,
    _c: () => z,
}),
    n(323874),
    n(14289),
    n(35956);
var s = n(627968),
    i = n(64700),
    r = n(873263),
    l = n(922139),
    u = n(17928),
    a = n(717421),
    o = n(663417),
    c = n(691540),
    C = n(857250),
    d = n(97483),
    f = n(59520);
n(952818);
var A = n(87719),
    g = n(287809),
    T = n(166403),
    _ = n(515718),
    E = n(340124),
    m = n(859703),
    v = n(507107),
    y = n(192444),
    b = n(302654),
    S = n(347135),
    x = n(971276),
    Q = n(18437),
    h = n(590202),
    p = n(971649),
    q = n(183636),
    I = n(927813),
    P = n(710969);
let U = 10 * I.A.Millis.MINUTE;
function R(t, e, n) {
    if (!(0, x.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now())) return;
    if ("focused" !== q.A.getState()) {
        null != t && (0, E.Fr)(e, t.ttlMillis);
        return;
    }
    if (m.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let { enableNewRequestBehavior: s } = b.A.getConfig({ location: "maybeRefreshAd" });
    s && ((0, E.N1)(), (0, E.r8)(e, n));
}
var k = n(651892),
    w = n(901406),
    N = n(801365),
    O = n(792620),
    L = n(814793),
    D = n(753386),
    B = n(175248),
    F = n(617986),
    M = n(190107),
    V = n(375708);
function G(t) {
    let { quest: e, questContent: n, questContentPosition: s, questContentRowIndex: r, sourceQuestContent: l } = t,
        a = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        o = a?.hasVerifiedEmailOrPhone(),
        c = a?.verified,
        C = (0, Q.Ut)();
    return i.useCallback(() => {
        null != e &&
            (C({
                questId: e.id,
                questContent: n,
                questContentCTA: h.Cy.CLAIM_REWARD,
                questContentPosition: s,
                questContentRowIndex: r,
                sourceQuestContent: l,
            }),
            (0, N.ks)(e.config) && !c
                ? (0, B.E)()
                : o
                  ? (0, N.K9)(e.config)
                      ? (0, A.x)()
                      : (0, N.tU)(e.config)
                        ? (0, F.hJ)(e, n, l)
                        : (0, N.HG)(e.config)
                          ? (0, F.cf)(e, n, l)
                          : (0, N.ks)(e.config)
                            ? (0, F.Df)(e, n, l)
                            : (0, F.rx)({ quest: e, sourceQuestContent: l })
                  : (0, B.E)());
    }, [e, C, n, s, r, o, c, l]);
}
let j = (t) => {
        let { useReducedMotion: e, className: n } = t,
            [r, u] = (0, a.z)(() => ({})),
            c = i.useRef(!1),
            C = (0, l.animated)(o.f);
        return {
            render: () => (0, s.jsx)(C, { className: n, style: e ? void 0 : r, color: "currentColor", size: "xs" }),
            startAnimation: (t) => {
                (c.current = !0),
                    u({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: { tension: 750, mass: 5, friction: 100 },
                        loop: () => t ?? c.current,
                        immediate: e,
                    });
            },
            stopAnimation: () => {
                c.current = !1;
            },
        };
    },
    H = (t, e, n) => {
        let { message: i, xboxURL: r } = (0, S.UX)(),
            l = (0, Q.Ut)();
        return (0, s.jsx)("span", {
            onClick: (s) => {
                let i = s.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    l({
                        questId: t,
                        questContent: e,
                        questContentCTA:
                            i.getAttribute("href") === r
                                ? h.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : h.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            },
            children: i,
        });
    };
function W(t) {
    return (0, O.vl)(t)
        ? t.config.features.includes(M.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: V.intl.string(V.t["+qoymD"]), questContentCTA: h.Cy.START_QUEST }
            : { text: V.intl.string(V.t.E4kW5O), questContentCTA: h.Cy.START_QUEST }
        : (0, O.Ov)(t)
          ? { text: V.intl.string(V.t.CkUzLd), questContentCTA: h.Cy.START_QUEST }
          : { text: V.intl.string(V.t.l7E81v), questContentCTA: h.Cy.ACCEPT_QUEST };
}
function z(t) {
    let {
            quest: e,
            progressState: n,
            questContent: s,
            questContentPosition: r,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = t,
        C = G({ quest: e, questContent: s, questContentPosition: r, questContentRowIndex: l, sourceQuestContent: c }),
        d = (0, S.RR)({ quest: e }),
        f = (0, S.fc)(e),
        A = (0, p.vU)()?.getId(),
        { launchInGameActivity: g } = (0, S.zW)(e),
        T = (0, L.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case S.F3.UNACCEPTED:
                let t = V.intl.string(V.t.kUQLMJ),
                    i = h.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = V.intl.string(V.t.umdNin)), (i = h.Cy.START_QUEST)),
                    (o || (0, O.vl)(e)) && ({ text: t, questContentCTA: i } = W(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, O.K$)(e)) {
                                await (0, E.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, F.Fy)(e);
                                return;
                            }
                            a ||
                                T ||
                                (0, E.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, F.e0)(e, {
                                          questContent: s,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: h.Cy.ACCEPT_QUEST,
                                          questContentPosition: r,
                                          questContentRowIndex: l,
                                      })
                                    : T &&
                                      (await (0, E.Oy)(e.id, {
                                          questContent: s,
                                          questContentCTA: i,
                                          questContentPosition: r,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      g());
                        },
                    }
                );
            case S.F3.ACCEPTED:
            case S.F3.IN_PROGRESS:
                if (d && u)
                    return {
                        text: V.intl.string(V.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, w.se)(
                                { quest: e },
                                {
                                    content: s,
                                    ctaContent: h.Cy.CONNECT_CONSOLE,
                                    position: r,
                                    rowIndex: l,
                                    impressionId: A,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, O.K$)(e))
                    return {
                        text: V.intl.string(V.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, F.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, D.WM)(f),
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () =>
                            (0, F.d5)({
                                quest: e,
                                questContent: s,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: h.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (T) {
                    let { text: t } = W(e);
                    return {
                        text: t,
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () => {
                            g();
                        },
                    };
                }
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: V.intl.string(V.t.hsbwjv), onClick: null };
            case S.F3.COMPLETED:
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: null, onClick: C };
            case S.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: C,
                    text: (0, N.r7)(e.config) ? V.intl.string(V.t.bAGFz3) : V.intl.string(V.t.vTgCWx),
                };
        }
    }, [n, a, d, u, C, e, s, r, l, A, f, o, g, c, T]);
}
function X() {
    var t;
    let e,
        n,
        s,
        { enableNewRequestBehavior: r } = b.A.useConfig({ location: "useQuestBarQuest" }),
        l =
            ((t = v.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (e = (0, i.useRef)(null)),
            (n = (0, u.bG)([m.A], () => m.A.questAdDecisionByPlacement.get(t) ?? null)),
            (s = (0, u.bG)([m.A], () => (n?.questId != null ? (m.A.quests.get(n.questId) ?? null) : null))),
            ((0, i.useEffect)(() => {
                null != e.current && clearInterval(e.current),
                    R(n, t, "questBar-open"),
                    (e.current = setInterval(() => {
                        R(m.A.questAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
                    }, U));
                let s = e.current;
                return () => {
                    null != s && clearInterval(s);
                };
            }, [n, t]),
            null == s || (0, P.Ic)(s))
                ? null
                : s),
        a = (0, u.bG)([m.A], () => m.A.getQuestPreviewOverride(v.uF.QUEST_BAR_V2), []),
        o = (0, u.bG)(
            [m.A],
            () => (0, P.t6)(m.A.quests, m.A.questToDeliverForPlacement, v.yW.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return a ?? (r ? l : o);
}
function K(t) {
    let { quest: e } = t,
        n = (0, x.s)(),
        s = (0, S.LS)(e),
        { premiumSubscription: i } = (0, u.cf)([T.A], () => ({ premiumSubscription: T.A.getPremiumSubscription() })),
        r = (0, u.bG)([m.A], () => null != m.A.getQuestPreviewOverride(v.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (r && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, N.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, P.gO)(e.userStatus, v.uF.QUEST_BAR);
    return l
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : s
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? a
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function Y() {
    let { isQuestBarVisible: t } = K({ quest: X() }),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, u.cf)([m.A], () => ({
            lastFetchedCurrentQuests: m.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: m.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let $ = { leading: !0, trailing: !1 };
function J(t) {
    let { isShareable: e, questId: n, trackingCtx: s } = t;
    return (0, f.I)(
        i.useCallback(() => {
            e && ((0, k.Xm)(n, s), (0, c.P0)((0, C.o)(V.intl.string(V.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [e, n, s]),
        3e3,
        [],
        $,
    );
}
function Z() {
    let t = (0, y.Qj)(),
        { search: e } = (0, r.zy)(),
        n = i.useMemo(() => new URLSearchParams(e).getAll(S.L1.AD_CREATIVE_IDS).length > 0, [e]),
        s = (0, u.bG)([m.A], () => m.A.getQuestHomeHero()),
        [l, a] = i.useState(() => Date.now()),
        o = null != s ? Date.parse(s.endsAt) : null,
        c = null != s;
    return (i.useEffect(() => {
        if (!c) return;
        let t = setInterval(() => a(Date.now()), 3e4);
        return () => clearInterval(t);
    }, [c]),
    (t && !n) || null == s || null == o || Number.isNaN(o) || l >= o)
        ? null
        : s;
}
function tt(t) {
    let [e, n] = i.useState(!0),
        [s, r] = i.useState(!0),
        [l, a] = i.useState(!1),
        [o, c] = i.useState(!1),
        C = (0, u.bG)([m.A], () => m.A.isFetchingQuestHomeHero()),
        d = Z();
    return (
        i.useEffect(() => {
            !(async function () {
                try {
                    null != t ? await (0, E.IV)(t) : await (0, E.Yf)();
                } catch (t) {
                    r(!1), a(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [t]),
        i.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    let t = [d.heroImage, d.sponsorImage].filter((t) => null != t);
                    await Promise.all(t.map(_.NN));
                } catch (t) {
                    c(!0);
                } finally {
                    r(!1);
                }
            })();
        }, [d]),
        { questHomeHero: l || o ? null : d, isLoading: e || C || s }
    );
}
function te(t) {
    let e = Z(),
        { isShelfEnabled: n } = (0, S.t9)(e);
    return !n && null != e && (0, L.I0)(e, t);
}
