"use strict";
n.d(t, { H1: () => F, Lk: () => K, TQ: () => j, Xf: () => G, _c: () => B, c9: () => Y, dN: () => H, ix: () => U });
var r = n(627968),
    i = n(64700),
    s = n(419354),
    a = n(311907),
    o = n(717421),
    l = n(663417),
    u = n(691540),
    c = n(857250),
    d = n(97483),
    _ = n(59520);
n(15285);
var f = n(87719),
    p = n(287809),
    h = n(166403),
    E = n(829219),
    m = n(859703),
    g = n(341915),
    A = n(302654),
    I = n(890687),
    T = n(971276),
    S = n(18437),
    y = n(590202),
    N = n(971649),
    v = n(773545),
    C = n(651892),
    O = n(710969),
    R = n(901406),
    b = n(92246),
    D = n(792620),
    L = n(814793),
    w = n(753386),
    M = n(175248),
    P = n(545986),
    x = n(654487),
    k = n(985018);
function U(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: o } = e,
        l = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        u = l?.hasVerifiedEmailOrPhone(),
        c = l?.verified,
        d = (0, S.Ut)();
    return i.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: y.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: s,
                sourceQuestContent: o,
            }),
            (0, b.ks)(t.config) && !c
                ? (0, M.E)()
                : u
                  ? (0, b.K9)(t.config)
                      ? (0, f.x)()
                      : (0, b.tU)(t.config)
                        ? (0, P.hJ)(t, n, o)
                        : (0, b.HG)(t.config)
                          ? (0, P.cf)(t, n, o)
                          : (0, b.ks)(t.config)
                            ? (0, P.Df)(t, n, o)
                            : (0, P.rx)({ quest: t, sourceQuestContent: o })
                  : (0, M.E)());
    }, [t, d, n, r, s, u, c, o]);
}
let G = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [a, u] = (0, o.z)(() => ({})),
            c = i.useRef(!1),
            d = (0, s.animated)(l.f);
        return {
            render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : a, color: "currentColor", size: "xs" }),
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
    F = (e, t, n) => {
        let { message: i, xboxURL: s } = (0, I.UX)(),
            a = (0, S.Ut)();
        return (0, r.jsx)("span", {
            onClick: (r) => {
                let i = r.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            i.getAttribute("href") === s
                                ? y.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : y.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            },
            children: i,
        });
    };
function V(e) {
    return (0, D.vl)(e)
        ? e.config.features.includes(x.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: k.intl.string(k.t["+qoymD"]), questContentCTA: y.Cy.START_QUEST }
            : { text: k.intl.string(k.t.E4kW5O), questContentCTA: y.Cy.START_QUEST }
        : (0, D.Ov)(e)
          ? { text: k.intl.string(k.t.CkUzLd), questContentCTA: y.Cy.START_QUEST }
          : { text: k.intl.string(k.t.l7E81v), questContentCTA: y.Cy.ACCEPT_QUEST };
}
function B(e) {
    let {
            quest: t,
            progressState: n,
            questContent: r,
            questContentPosition: s,
            questContentRowIndex: a,
            inGiftInventory: o,
            isVideoQuest: l,
            inGameQuest: u,
            sourceQuestContent: c,
        } = e,
        d = U({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        _ = (0, I.RR)({ quest: t }),
        f = (0, I.fc)(t),
        p = (0, N.vU)()?.getId(),
        { launchInGameActivity: h } = (0, I.zW)(t),
        m = (0, L.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case I.F3.UNACCEPTED:
                let e = k.intl.string(k.t.kUQLMJ),
                    i = y.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = k.intl.string(k.t.umdNin)), (i = y.Cy.START_QUEST)),
                    (u || (0, D.vl)(t)) && ({ text: e, questContentCTA: i } = V(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, D.K$)(t)) {
                                await (0, E.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, P.Fy)(t);
                                return;
                            }
                            l ||
                                m ||
                                (0, E.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, P.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: y.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : m &&
                                      (await (0, E.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                          sourceQuestContent: c,
                                      }),
                                      h());
                        },
                    }
                );
            case I.F3.ACCEPTED:
            case I.F3.IN_PROGRESS:
                if (_ && o)
                    return {
                        text: k.intl.string(k.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, R.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: y.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: p,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, D.K$)(t))
                    return {
                        text: k.intl.string(k.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, P.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, w.WM)(f),
                        tooltipText: k.intl.string(k.t.hsbwjv),
                        onClick: () =>
                            (0, P.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: y.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (m) {
                    let { text: e } = V(t);
                    return {
                        text: e,
                        tooltipText: k.intl.string(k.t.hsbwjv),
                        onClick: () => {
                            h();
                        },
                    };
                }
                return { text: k.intl.string(k.t.cfY4PE), tooltipText: k.intl.string(k.t.hsbwjv), onClick: null };
            case I.F3.COMPLETED:
                return { text: k.intl.string(k.t.cfY4PE), tooltipText: null, onClick: d };
            case I.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, b.r7)(t.config) ? k.intl.string(k.t.bAGFz3) : k.intl.string(k.t.vTgCWx),
                };
        }
    }, [n, l, _, o, d, t, r, s, a, p, f, u, h, c, m]);
}
function H() {
    let { enableNewRequestBehavior: e } = A.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, v.A)(g.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, a.bG)(
            [m.A],
            () =>
                m.A.questDeliveryOverride ??
                (0, O.t6)(m.A.quests, m.A.questToDeliverForPlacement, g.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function j(e) {
    let { quest: t } = e,
        n = (0, T.s)(),
        r = (0, I.LS)(t),
        { premiumSubscription: i } = (0, a.cf)([h.A], () => ({ premiumSubscription: h.A.getPremiumSubscription() })),
        s = (0, a.bG)([m.A], () => null != m.A.questDeliveryOverride);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, b.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = t.userStatus?.claimedAt != null,
        l = !s && null != t.userStatus && (0, O.gO)(t.userStatus, g.uF.QUEST_BAR);
    return o
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : r
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? l
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function Y() {
    let { isQuestBarVisible: e } = j({ quest: H() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, a.cf)([m.A], () => ({
            lastFetchedCurrentQuests: m.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: m.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let W = { leading: !0, trailing: !1 };
function K(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, _.I)(
        i.useCallback(() => {
            t && ((0, C.Xm)(n, r), (0, u.P0)((0, c.o)(k.intl.string(k.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        W,
    );
}
