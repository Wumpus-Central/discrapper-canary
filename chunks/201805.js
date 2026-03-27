"use strict";
n.d(t, { H1: () => x, Lk: () => H, TQ: () => F, Xf: () => P, _c: () => U, c9: () => V, dN: () => G, ix: () => M });
var r = n(627968),
    i = n(64700),
    s = n(4208),
    a = n(311907),
    o = n(397927),
    l = n(59520);
n(15285);
var u = n(87719),
    c = n(287809),
    d = n(166403),
    _ = n(829219),
    f = n(859703),
    p = n(341915),
    h = n(302654),
    m = n(890687),
    E = n(971276),
    g = n(18437),
    A = n(590202),
    I = n(971649),
    T = n(773545),
    S = n(651892),
    y = n(710969),
    v = n(901406),
    N = n(92246),
    C = n(792620),
    R = n(814793),
    O = n(753386),
    b = n(175248),
    D = n(545986),
    L = n(654487),
    w = n(985018);
function M(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: o } = e,
        l = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        d = l?.hasVerifiedEmailOrPhone(),
        _ = l?.verified,
        f = (0, g.Ut)();
    return i.useCallback(() => {
        null != t &&
            (f({
                questId: t.id,
                questContent: n,
                questContentCTA: A.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: s,
                sourceQuestContent: o,
            }),
            (0, N.ks)(t.config) && !_
                ? (0, b.E)()
                : d
                  ? (0, N.K9)(t.config)
                      ? (0, u.x)()
                      : (0, N.tU)(t.config)
                        ? (0, D.hJ)(t, n, o)
                        : (0, N.HG)(t.config)
                          ? (0, D.cf)(t, n, o)
                          : (0, N.ks)(t.config)
                            ? (0, D.Df)(t, n, o)
                            : (0, D.rx)({ quest: t, sourceQuestContent: o })
                  : (0, b.E)());
    }, [t, f, n, r, s, d, _, o]);
}
let P = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [a, l] = (0, o.zhh)(() => ({})),
            u = i.useRef(!1),
            c = (e) => {
                (u.current = !0),
                    l({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: { tension: 750, mass: 5, friction: 100 },
                        loop: () => e ?? u.current,
                        immediate: t,
                    });
            },
            d = (0, s.animated)(o.fNY);
        return {
            render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : a, color: "currentColor", size: "xs" }),
            startAnimation: c,
            stopAnimation: () => {
                u.current = !1;
            },
        };
    },
    x = (e, t, n) => {
        let { message: i, xboxURL: s } = (0, m.UX)(),
            a = (0, g.Ut)(),
            o = (r) => {
                let i = r.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            i.getAttribute("href") === s
                                ? A.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : A.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", { onClick: o, children: i });
    };
function k(e) {
    return (0, C.vl)(e)
        ? e.config.features.includes(L.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: w.intl.string(w.t["+qoymD"]), questContentCTA: A.Cy.START_QUEST }
            : { text: w.intl.string(w.t["Ie9++s"]), questContentCTA: A.Cy.START_QUEST }
        : (0, C.Ov)(e)
          ? { text: w.intl.string(w.t["hRIVy+"]), questContentCTA: A.Cy.START_QUEST }
          : { text: w.intl.string(w.t.l7E81v), questContentCTA: A.Cy.ACCEPT_QUEST };
}
function U(e) {
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
        d = M({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        f = (0, m.RR)({ quest: t }),
        p = (0, m.fc)(t),
        h = (0, I.vU)()?.getId(),
        { launchInGameActivity: E } = (0, m.zW)(t),
        g = (0, R.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case m.F3.UNACCEPTED:
                let e = w.intl.string(w.t.kUQLMJ),
                    i = A.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = w.intl.string(w.t.umdNin)), (i = A.Cy.START_QUEST)),
                    (u || (0, C.vl)(t)) && ({ text: e, questContentCTA: i } = k(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, C.K$)(t)) {
                                await (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, D.Fy)(t);
                                return;
                            }
                            l ||
                                g ||
                                (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, D.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: A.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : g &&
                                      (await (0, _.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                          sourceQuestContent: c,
                                      }),
                                      E());
                        },
                    }
                );
            case m.F3.ACCEPTED:
            case m.F3.IN_PROGRESS:
                if (f && o)
                    return {
                        text: w.intl.string(w.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, v.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: A.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: h,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, C.K$)(t))
                    return {
                        text: w.intl.string(w.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, D.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, O.WM)(p),
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () =>
                            (0, D.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: A.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (g) {
                    let { text: e } = k(t);
                    return {
                        text: e,
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () => {
                            E();
                        },
                    };
                }
                return { text: w.intl.string(w.t.cfY4PE), tooltipText: w.intl.string(w.t.hsbwjv), onClick: null };
            case m.F3.COMPLETED:
                return { text: w.intl.string(w.t.cfY4PE), tooltipText: null, onClick: d };
            case m.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, N.r7)(t.config) ? w.intl.string(w.t.bAGFz3) : w.intl.string(w.t.vTgCWx),
                };
        }
    }, [n, l, f, o, d, t, r, s, a, h, p, u, E, c, g]);
}
function G() {
    let { enableNewRequestBehavior: e } = h.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, T.A)(p.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, a.bG)(
            [f.A],
            () =>
                f.A.questDeliveryOverride ??
                (0, y.t6)(f.A.quests, f.A.questToDeliverForPlacement, p.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function F(e) {
    let { quest: t } = e,
        n = (0, E.s)(),
        r = (0, m.LS)(t),
        { premiumSubscription: i } = (0, a.cf)([d.A], () => ({ premiumSubscription: d.A.getPremiumSubscription() })),
        s = (0, a.bG)([f.A], () => null != f.A.questDeliveryOverride);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, N.K9)(t.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = t.userStatus?.claimedAt != null,
        l = !s && null != t.userStatus && (0, y.gO)(t.userStatus, p.uF.QUEST_BAR);
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
function V() {
    let { isQuestBarVisible: e } = F({ quest: G() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, a.cf)([f.A], () => ({
            lastFetchedCurrentQuests: f.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let B = { leading: !0, trailing: !1 };
function H(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, S.Xm)(n, r),
                (0, o.showToast)((0, o.createToast)(w.intl.string(w.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        B,
    );
}
