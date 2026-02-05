"use strict";
n.d(t, { H1: () => M, Lk: () => j, TQ: () => V, Xf: () => P, _c: () => U, c9: () => F, dN: () => G, ix: () => x });
var r = n(627968),
    i = n(64700),
    a = n(92674),
    s = n(311907),
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
    m = n(677402),
    g = n(890687),
    E = n(18437),
    A = n(590202),
    I = n(971649),
    T = n(773545),
    y = n(651892),
    S = n(710969),
    v = n(901406),
    C = n(92246),
    b = n(792620),
    N = n(814793),
    R = n(753386),
    O = n(175248),
    D = n(545986),
    L = n(654487),
    w = n(985018);
function x(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: o } = e,
        l = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        d = l?.hasVerifiedEmailOrPhone(),
        _ = l?.verified,
        f = (0, E.Ut)();
    return i.useCallback(() => {
        null != t &&
            (f({
                questId: t.id,
                questContent: n,
                questContentCTA: A.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: o,
            }),
            (0, C.ks)(t.config) && !_
                ? (0, O.E)()
                : d
                  ? (0, C.K9)(t.config)
                      ? (0, u.x)()
                      : (0, C.tU)(t.config)
                        ? (0, D.hJ)(t, n, o)
                        : (0, C.HG)(t.config)
                          ? (0, D.cf)(t, n, o)
                          : (0, C.ks)(t.config)
                            ? (0, D.Df)(t, n, o)
                            : (0, D.rx)({ quest: t, sourceQuestContent: o })
                  : (0, O.E)());
    }, [t, f, n, r, a, d, _, o]);
}
let P = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, l] = (0, o.zhh)(() => ({})),
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
            d = (0, a.animated)(o.fNY);
        return {
            render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
            startAnimation: c,
            stopAnimation: () => {
                u.current = !1;
            },
        };
    },
    M = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, g.UX)(),
            s = (0, E.Ut)(),
            o = (r) => {
                let i = r.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    s({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            i.getAttribute("href") === a
                                ? A.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : A.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", { onClick: o, children: i });
    };
function k(e) {
    return e.config.features.includes(L.Li.START_QUEST_CTA)
        ? (0, b.vl)(e)
            ? e.config.features.includes(L.Li.CLOUD_GAMING_ACTIVITY)
                ? { text: w.intl.string(w.t["+qoymD"]), questContentCTA: A.Cy.START_QUEST }
                : { text: w.intl.string(w.t["Ie9++s"]), questContentCTA: A.Cy.START_QUEST }
            : { text: w.intl.string(w.t["hRIVy+"]), questContentCTA: A.Cy.START_QUEST }
        : { text: w.intl.string(w.t.l7E81v), questContentCTA: A.Cy.ACCEPT_QUEST };
}
function U(e) {
    let {
            quest: t,
            progressState: n,
            questContent: r,
            questContentPosition: a,
            questContentRowIndex: s,
            inGiftInventory: o,
            isVideoQuest: l,
            inGameQuest: u,
            sourceQuestContent: c,
        } = e,
        d = x({ quest: t, questContent: r, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: c }),
        f = (0, g.RR)({ quest: t }),
        p = (0, g.fc)(t),
        h = (0, I.vU)()?.getId(),
        { launchInGameActivity: m } = (0, g.zW)(t),
        E = (0, N.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case g.F3.UNACCEPTED:
                let e = w.intl.string(w.t.kUQLMJ),
                    i = A.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = w.intl.string(w.t.umdNin)), (i = A.Cy.START_QUEST)),
                    (u || (0, b.vl)(t)) && ({ text: e, questContentCTA: i } = k(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, b.BS)(t)) {
                                await (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, D.Fy)(t);
                                return;
                            }
                            l ||
                                E ||
                                (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, D.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: A.Cy.ACCEPT_QUEST,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                      })
                                    : E &&
                                      (await (0, _.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                          sourceQuestContent: c,
                                      }),
                                      m());
                        },
                    }
                );
            case g.F3.ACCEPTED:
            case g.F3.IN_PROGRESS:
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
                                    position: a,
                                    rowIndex: s,
                                    impressionId: h,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, b.BS)(t))
                    return {
                        text: w.intl.string(w.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, D.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, R.WM)(p),
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () =>
                            (0, D.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: A.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: e } = k(t);
                    return {
                        text: e,
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () => {
                            t.config.features.includes(L.Li.START_QUEST_CTA) && m();
                        },
                    };
                }
                return { text: w.intl.string(w.t.cfY4PE), tooltipText: w.intl.string(w.t.hsbwjv), onClick: null };
            case g.F3.COMPLETED:
                return { text: w.intl.string(w.t.cfY4PE), tooltipText: null, onClick: d };
            case g.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, C.r7)(t.config) ? w.intl.string(w.t.bAGFz3) : w.intl.string(w.t.vTgCWx),
                };
        }
    }, [n, l, f, o, d, t, r, a, s, h, p, u, m, c, E]);
}
function G() {
    let { enableNewRequestBehavior: e } = h.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, T.A)(p.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, s.bG)(
            [f.A],
            () =>
                f.A.questDeliveryOverride ??
                (0, S.t6)(f.A.quests, f.A.questToDeliverForPlacement, p.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function V(e) {
    let { location: t, quest: n } = e,
        r = (0, m.H)({ location: t }),
        i = (0, g.LS)(n),
        { premiumSubscription: a } = (0, s.cf)([d.A], () => ({ premiumSubscription: d.A.getPremiumSubscription() })),
        o = (0, s.bG)([f.A], () => null != f.A.questDeliveryOverride);
    if (null == n) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, C.K9)(n.config) && a?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = n.userStatus?.claimedAt != null,
        u = !o && null != n.userStatus && (0, S.gO)(n.userStatus, p.uF.QUEST_BAR);
    return l
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : r
            ? u
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function F(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = V({ location: t, quest: G() }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, s.cf)([f.A], () => ({
            lastFetchedCurrentQuests: f.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !n, hasLoadedQuestBar: 0 !== r && 0 !== i };
}
let B = { leading: !0, trailing: !1 };
function j(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, y.Xm)(n, r),
                (0, o.showToast)((0, o.createToast)(w.intl.string(w.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        B,
    );
}
