"use strict";
n.d(t, { c9: () => z, dN: () => W, TQ: () => K, Lk: () => q, H1: () => H, Xf: () => B, _c: () => Y, ix: () => V });
var i = n(627968),
    r = n(64700),
    s = n(873174),
    a = n(17928),
    o = n(717421),
    l = n(663417),
    u = n(691540),
    c = n(857250),
    d = n(97483),
    _ = n(59520);
n(952818);
var f = n(87719),
    h = n(287809),
    p = n(166403),
    E = n(340124),
    m = n(859703),
    g = n(507107),
    A = n(302654),
    I = n(31587),
    T = n(971276),
    S = n(18437),
    N = n(590202),
    y = n(971649),
    C = n(183636),
    v = n(927813),
    O = n(710969);
let R = 10 * v.A.Millis.MINUTE;
function b(e, t, n) {
    if (!(0, T.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== C.A.getState()) {
        null != e && (0, E.Fr)(t, e.ttlMillis);
        return;
    }
    if (m.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = A.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, E.N1)(), (0, E.r8)(t, n));
}
var D = n(651892),
    L = n(901406),
    w = n(801365),
    M = n(792620),
    P = n(814793),
    x = n(753386),
    U = n(175248),
    k = n(617986),
    G = n(190107),
    F = n(375708);
function V(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: s, sourceQuestContent: o } = e,
        l = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        u = l?.hasVerifiedEmailOrPhone(),
        c = l?.verified,
        d = (0, S.Ut)();
    return r.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: N.Cy.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: s,
                sourceQuestContent: o,
            }),
            (0, w.ks)(t.config) && !c
                ? (0, U.E)()
                : u
                  ? (0, w.K9)(t.config)
                      ? (0, f.x)()
                      : (0, w.tU)(t.config)
                        ? (0, k.hJ)(t, n, o)
                        : (0, w.HG)(t.config)
                          ? (0, k.cf)(t, n, o)
                          : (0, w.ks)(t.config)
                            ? (0, k.Df)(t, n, o)
                            : (0, k.rx)({ quest: t, sourceQuestContent: o })
                  : (0, U.E)());
    }, [t, d, n, i, s, u, c, o]);
}
let B = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [a, u] = (0, o.z)(() => ({})),
            c = r.useRef(!1),
            d = (0, s.animated)(l.f);
        return {
            render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : a, color: "currentColor", size: "xs" }),
            startAnimation: (e) => {
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
    },
    H = (e, t, n) => {
        let { message: r, xboxURL: s } = (0, I.UX)(),
            a = (0, S.Ut)();
        return (0, i.jsx)("span", {
            onClick: (i) => {
                let r = i.target;
                r?.tagName?.toLowerCase() !== "a" ||
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            r.getAttribute("href") === s
                                ? N.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : N.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            },
            children: r,
        });
    };
function j(e) {
    return (0, M.vl)(e)
        ? e.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: F.intl.string(F.t["+qoymD"]), questContentCTA: N.Cy.START_QUEST }
            : { text: F.intl.string(F.t.E4kW5O), questContentCTA: N.Cy.START_QUEST }
        : (0, M.Ov)(e)
          ? { text: F.intl.string(F.t.CkUzLd), questContentCTA: N.Cy.START_QUEST }
          : { text: F.intl.string(F.t.l7E81v), questContentCTA: N.Cy.ACCEPT_QUEST };
}
function Y(e) {
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
        d = V({ quest: t, questContent: i, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        _ = (0, I.RR)({ quest: t }),
        f = (0, I.fc)(t),
        h = (0, y.vU)()?.getId(),
        { launchInGameActivity: p } = (0, I.zW)(t),
        m = (0, P.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case I.F3.UNACCEPTED:
                let e = F.intl.string(F.t.kUQLMJ),
                    r = N.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = F.intl.string(F.t.umdNin)), (r = N.Cy.START_QUEST)),
                    (u || (0, M.vl)(t)) && ({ text: e, questContentCTA: r } = j(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, M.K$)(t)) {
                                await (0, E.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, k.Fy)(t);
                                return;
                            }
                            l ||
                                m ||
                                (0, E.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, k.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: N.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : m &&
                                      (await (0, E.Oy)(t.id, {
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
            case I.F3.ACCEPTED:
            case I.F3.IN_PROGRESS:
                if (_ && o)
                    return {
                        text: F.intl.string(F.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, L.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: N.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: h,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, M.K$)(t))
                    return {
                        text: F.intl.string(F.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, k.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, x.WM)(f),
                        tooltipText: F.intl.string(F.t.hsbwjv),
                        onClick: () =>
                            (0, k.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: N.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (m) {
                    let { text: e } = j(t);
                    return {
                        text: e,
                        tooltipText: F.intl.string(F.t.hsbwjv),
                        onClick: () => {
                            p();
                        },
                    };
                }
                return { text: F.intl.string(F.t.cfY4PE), tooltipText: F.intl.string(F.t.hsbwjv), onClick: null };
            case I.F3.COMPLETED:
                return { text: F.intl.string(F.t.cfY4PE), tooltipText: null, onClick: d };
            case I.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, w.r7)(t.config) ? F.intl.string(F.t.bAGFz3) : F.intl.string(F.t.vTgCWx),
                };
        }
    }, [n, l, _, o, d, t, i, s, a, h, f, u, p, c, m]);
}
function W() {
    var e;
    let t,
        n,
        i,
        s,
        { enableNewRequestBehavior: o } = A.A.useConfig({ location: "useQuestBarQuest" }),
        l =
            ((e = g.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (t = (0, r.useRef)(null)),
            (n = (0, a.bG)([m.A], () => m.A.questDeliveryOverride)),
            (i = (0, a.bG)([m.A], () => m.A.questAdDecisionByPlacement.get(e) ?? null)),
            (s = (0, a.bG)([m.A], () => (i?.questId != null ? (m.A.quests.get(i.questId) ?? null) : null))),
            ((0, r.useEffect)(() => {
                if ((null != t.current && clearInterval(t.current), null != n)) return;
                b(i, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        b(m.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, R));
                let r = t.current;
                return () => {
                    null != r && clearInterval(r);
                };
            }, [i, e, n]),
            null != n)
                ? n
                : null == s || (0, O.Ic)(s)
                  ? null
                  : s),
        u = (0, a.bG)(
            [m.A],
            () =>
                m.A.questDeliveryOverride ??
                (0, O.t6)(m.A.quests, m.A.questToDeliverForPlacement, g.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return o ? l : u;
}
function K(e) {
    let { quest: t } = e,
        n = (0, T.s)(),
        i = (0, I.LS)(t),
        { premiumSubscription: r } = (0, a.cf)([p.A], () => ({ premiumSubscription: p.A.getPremiumSubscription() })),
        s = (0, a.bG)([m.A], () => null != m.A.questDeliveryOverride);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, w.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = t.userStatus?.claimedAt != null,
        l = !s && null != t.userStatus && (0, O.gO)(t.userStatus, g.uF.QUEST_BAR);
    return o
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? l
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function z() {
    let { isQuestBarVisible: e } = K({ quest: W() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, a.cf)([m.A], () => ({
            lastFetchedCurrentQuests: m.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: m.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let $ = { leading: !0, trailing: !1 };
function q(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, _.I)(
        r.useCallback(() => {
            t && ((0, D.Xm)(n, i), (0, u.P0)((0, c.o)(F.intl.string(F.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        $,
    );
}
