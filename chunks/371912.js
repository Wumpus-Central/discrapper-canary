"use strict";
n.d(t, {
    c9: () => X,
    dN: () => z,
    TQ: () => q,
    UX: () => et,
    Lk: () => Q,
    lg: () => ee,
    H1: () => W,
    T2: () => J,
    ix: () => j,
    Xf: () => Y,
    _c: () => $,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968),
    r = n(64700),
    s = n(873263),
    a = n(922139),
    o = n(17928),
    l = n(717421),
    u = n(663417),
    c = n(691540),
    d = n(857250),
    _ = n(97483),
    h = n(59520);
n(952818);
var f = n(87719),
    p = n(287809),
    E = n(166403),
    m = n(515718),
    g = n(340124),
    A = n(859703),
    I = n(507107),
    T = n(192444),
    S = n(302654),
    y = n(31587),
    N = n(971276),
    v = n(18437),
    C = n(590202),
    R = n(971649),
    O = n(183636),
    b = n(927813),
    D = n(710969);
let L = 10 * b.A.Millis.MINUTE;
function w(e, t, n) {
    if (!(0, N.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== O.A.getState()) {
        null != e && (0, g.Fr)(t, e.ttlMillis);
        return;
    }
    if (A.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = S.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, g.N1)(), (0, g.r8)(t, n));
}
var M = n(651892),
    P = n(901406),
    x = n(801365),
    k = n(792620),
    U = n(814793),
    G = n(753386),
    F = n(175248),
    V = n(617986),
    B = n(190107),
    H = n(375708);
function j(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: s, sourceQuestContent: a } = e,
        l = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        u = l?.hasVerifiedEmailOrPhone(),
        c = l?.verified,
        d = (0, v.Ut)();
    return r.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: C.Cy.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: s,
                sourceQuestContent: a,
            }),
            (0, x.ks)(t.config) && !c
                ? (0, F.E)()
                : u
                  ? (0, x.K9)(t.config)
                      ? (0, f.x)()
                      : (0, x.tU)(t.config)
                        ? (0, V.hJ)(t, n, a)
                        : (0, x.HG)(t.config)
                          ? (0, V.cf)(t, n, a)
                          : (0, x.ks)(t.config)
                            ? (0, V.Df)(t, n, a)
                            : (0, V.rx)({ quest: t, sourceQuestContent: a })
                  : (0, F.E)());
    }, [t, d, n, i, s, u, c, a]);
}
let Y = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, o] = (0, l.z)(() => ({})),
            c = r.useRef(!1),
            d = (0, a.animated)(u.f);
        return {
            render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
            startAnimation: (e) => {
                (c.current = !0),
                    o({
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
    },
    W = (e, t, n) => {
        let { message: r, xboxURL: s } = (0, y.UX)(),
            a = (0, v.Ut)();
        return (0, i.jsx)("span", {
            onClick: (i) => {
                let r = i.target;
                r?.tagName?.toLowerCase() !== "a" ||
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            r.getAttribute("href") === s
                                ? C.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : C.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            },
            children: r,
        });
    };
function K(e) {
    return (0, k.vl)(e)
        ? e.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: H.intl.string(H.t["+qoymD"]), questContentCTA: C.Cy.START_QUEST }
            : { text: H.intl.string(H.t.E4kW5O), questContentCTA: C.Cy.START_QUEST }
        : (0, k.Ov)(e)
          ? { text: H.intl.string(H.t.CkUzLd), questContentCTA: C.Cy.START_QUEST }
          : { text: H.intl.string(H.t.l7E81v), questContentCTA: C.Cy.ACCEPT_QUEST };
}
function $(e) {
    let {
            quest: t,
            progressState: n,
            questContent: i,
            questContentPosition: s,
            questContentRowIndex: a,
            inGiftInventory: o,
            isVideoQuest: l,
            inGameQuest: u,
            sourceQuestContent: c,
        } = e,
        d = j({ quest: t, questContent: i, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        _ = (0, y.RR)({ quest: t }),
        h = (0, y.fc)(t),
        f = (0, R.vU)()?.getId(),
        { launchInGameActivity: p } = (0, y.zW)(t),
        E = (0, U.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case y.F3.UNACCEPTED:
                let e = H.intl.string(H.t.kUQLMJ),
                    r = C.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = H.intl.string(H.t.umdNin)), (r = C.Cy.START_QUEST)),
                    (u || (0, k.vl)(t)) && ({ text: e, questContentCTA: r } = K(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, k.K$)(t)) {
                                await (0, g.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, V.Fy)(t);
                                return;
                            }
                            l ||
                                E ||
                                (0, g.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, V.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: C.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : E &&
                                      (await (0, g.Oy)(t.id, {
                                          questContent: i,
                                          questContentCTA: r,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                          sourceQuestContent: c,
                                      }),
                                      p());
                        },
                    }
                );
            case y.F3.ACCEPTED:
            case y.F3.IN_PROGRESS:
                if (_ && o)
                    return {
                        text: H.intl.string(H.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, P.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: C.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: f,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, k.K$)(t))
                    return {
                        text: H.intl.string(H.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, V.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, G.WM)(h),
                        tooltipText: H.intl.string(H.t.hsbwjv),
                        onClick: () =>
                            (0, V.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: C.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: e } = K(t);
                    return {
                        text: e,
                        tooltipText: H.intl.string(H.t.hsbwjv),
                        onClick: () => {
                            p();
                        },
                    };
                }
                return { text: H.intl.string(H.t.cfY4PE), tooltipText: H.intl.string(H.t.hsbwjv), onClick: null };
            case y.F3.COMPLETED:
                return { text: H.intl.string(H.t.cfY4PE), tooltipText: null, onClick: d };
            case y.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, x.r7)(t.config) ? H.intl.string(H.t.bAGFz3) : H.intl.string(H.t.vTgCWx),
                };
        }
    }, [n, l, _, o, d, t, i, s, a, f, h, u, p, c, E]);
}
function z() {
    var e;
    let t,
        n,
        i,
        { enableNewRequestBehavior: s } = S.A.useConfig({ location: "useQuestBarQuest" }),
        a =
            ((e = I.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (t = (0, r.useRef)(null)),
            (n = (0, o.bG)([A.A], () => A.A.questAdDecisionByPlacement.get(e) ?? null)),
            (i = (0, o.bG)([A.A], () => (n?.questId != null ? (A.A.quests.get(n.questId) ?? null) : null))),
            ((0, r.useEffect)(() => {
                null != t.current && clearInterval(t.current),
                    w(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        w(A.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, L));
                let i = t.current;
                return () => {
                    null != i && clearInterval(i);
                };
            }, [n, e]),
            null == i || (0, D.Ic)(i))
                ? null
                : i),
        l = (0, o.bG)([A.A], () => A.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []),
        u = (0, o.bG)(
            [A.A],
            () => (0, D.t6)(A.A.quests, A.A.questToDeliverForPlacement, I.yW.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return l ?? (s ? a : u);
}
function q(e) {
    let { quest: t } = e,
        n = (0, N.s)(),
        i = (0, y.LS)(t),
        { premiumSubscription: r } = (0, o.cf)([E.A], () => ({ premiumSubscription: E.A.getPremiumSubscription() })),
        s = (0, o.bG)([A.A], () => null != A.A.getQuestPreviewOverride(I.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let a = t.userStatus?.claimedAt != null;
    if (s && !a) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, x.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = null != t.userStatus && (0, D.gO)(t.userStatus, I.uF.QUEST_BAR);
    return a
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? l
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function X() {
    let { isQuestBarVisible: e } = q({ quest: z() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, o.cf)([A.A], () => ({
            lastFetchedCurrentQuests: A.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let Z = { leading: !0, trailing: !1 };
function Q(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, h.I)(
        r.useCallback(() => {
            t && ((0, M.Xm)(n, i), (0, c.P0)((0, d.o)(H.intl.string(H.t["+5kSoW"]), _.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        Z,
    );
}
function J() {
    let e = (0, T.Qj)(),
        { search: t } = (0, s.zy)(),
        n = r.useMemo(() => new URLSearchParams(t).getAll(y.L1.AD_CREATIVE_IDS).length > 0, [t]),
        i = (0, o.bG)([A.A], () => A.A.getQuestHomeHero()),
        [a, l] = r.useState(() => Date.now()),
        u = null != i ? Date.parse(i.endsAt) : null,
        c = null != i;
    return (r.useEffect(() => {
        if (!c) return;
        let e = setInterval(() => l(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [c]),
    (e && !n) || null == i || null == u || Number.isNaN(u) || a >= u)
        ? null
        : i;
}
function ee(e) {
    let [t, n] = r.useState(!0),
        [i, s] = r.useState(!0),
        [a, l] = r.useState(!1),
        [u, c] = r.useState(!1),
        d = (0, o.bG)([A.A], () => A.A.isFetchingQuestHomeHero()),
        _ = J();
    return (
        r.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, g.IV)(e) : await (0, g.Yf)();
                } catch (e) {
                    s(!1), l(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == _) return;
                    let e = [_.heroImage, _.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(m.NN));
                } catch (e) {
                    c(!0);
                } finally {
                    s(!1);
                }
            })();
        }, [_]),
        { questHomeHero: a || u ? null : _, isLoading: t || d || i }
    );
}
function et(e) {
    let t = J(),
        { isShelfEnabled: n } = (0, y.t9)(t);
    return !n && null != t && (0, U.I0)(t, e);
}
