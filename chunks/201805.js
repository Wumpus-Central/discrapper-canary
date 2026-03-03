"use strict";
n.d(t, {
    H1: () => G,
    Lk: () => W,
    TQ: () => H,
    Xf: () => U,
    _c: () => V,
    c9: () => j,
    dN: () => B,
    ix: () => k,
    ns: () => K,
});
var r = n(627968),
    i = n(64700),
    s = n(523436),
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
    h = n(759366),
    m = n(245853),
    E = n(302654),
    g = n(677402),
    A = n(890687),
    I = n(18437),
    T = n(590202),
    S = n(971649),
    y = n(773545),
    v = n(651892),
    N = n(710969),
    C = n(639214),
    R = n(901406),
    O = n(92246),
    b = n(792620),
    D = n(814793),
    L = n(753386),
    w = n(175248),
    M = n(545986),
    x = n(654487),
    P = n(985018);
function k(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: o } = e,
        l = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        d = l?.hasVerifiedEmailOrPhone(),
        _ = l?.verified,
        f = (0, I.Ut)();
    return i.useCallback(() => {
        null != t &&
            (f({
                questId: t.id,
                questContent: n,
                questContentCTA: T.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: s,
                sourceQuestContent: o,
            }),
            (0, O.ks)(t.config) && !_
                ? (0, w.E)()
                : d
                  ? (0, O.K9)(t.config)
                      ? (0, u.x)()
                      : (0, O.tU)(t.config)
                        ? (0, M.hJ)(t, n, o)
                        : (0, O.HG)(t.config)
                          ? (0, M.cf)(t, n, o)
                          : (0, O.ks)(t.config)
                            ? (0, M.Df)(t, n, o)
                            : (0, M.rx)({ quest: t, sourceQuestContent: o })
                  : (0, w.E)());
    }, [t, f, n, r, s, d, _, o]);
}
let U = (e) => {
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
    G = (e, t, n) => {
        let { message: i, xboxURL: s } = (0, A.UX)(),
            a = (0, I.Ut)(),
            o = (r) => {
                let i = r.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            i.getAttribute("href") === s
                                ? T.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : T.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", { onClick: o, children: i });
    };
function F(e) {
    return e.config.features.includes(x.Li.START_QUEST_CTA)
        ? (0, b.vl)(e)
            ? e.config.features.includes(x.Li.CLOUD_GAMING_ACTIVITY)
                ? { text: P.intl.string(P.t["+qoymD"]), questContentCTA: T.Cy.START_QUEST }
                : { text: P.intl.string(P.t["Ie9++s"]), questContentCTA: T.Cy.START_QUEST }
            : { text: P.intl.string(P.t["hRIVy+"]), questContentCTA: T.Cy.START_QUEST }
        : { text: P.intl.string(P.t.l7E81v), questContentCTA: T.Cy.ACCEPT_QUEST };
}
function V(e) {
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
        d = k({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        f = (0, A.RR)({ quest: t }),
        p = (0, A.fc)(t),
        h = (0, S.vU)()?.getId(),
        { launchInGameActivity: m } = (0, A.zW)(t),
        E = (0, D.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case A.F3.UNACCEPTED:
                let e = P.intl.string(P.t.kUQLMJ),
                    i = T.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = P.intl.string(P.t.umdNin)), (i = T.Cy.START_QUEST)),
                    (u || (0, b.vl)(t)) && ({ text: e, questContentCTA: i } = F(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, b.K$)(t)) {
                                await (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, M.Fy)(t);
                                return;
                            }
                            l ||
                                E ||
                                (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, M.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: T.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : E &&
                                      (await (0, _.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                          sourceQuestContent: c,
                                      }),
                                      m());
                        },
                    }
                );
            case A.F3.ACCEPTED:
            case A.F3.IN_PROGRESS:
                if (f && o)
                    return {
                        text: P.intl.string(P.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, R.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: T.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: h,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, b.K$)(t))
                    return {
                        text: P.intl.string(P.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, M.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, L.WM)(p),
                        tooltipText: P.intl.string(P.t.hsbwjv),
                        onClick: () =>
                            (0, M.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: T.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: e } = F(t);
                    return {
                        text: e,
                        tooltipText: P.intl.string(P.t.hsbwjv),
                        onClick: () => {
                            t.config.features.includes(x.Li.START_QUEST_CTA) && m();
                        },
                    };
                }
                return { text: P.intl.string(P.t.cfY4PE), tooltipText: P.intl.string(P.t.hsbwjv), onClick: null };
            case A.F3.COMPLETED:
                return { text: P.intl.string(P.t.cfY4PE), tooltipText: null, onClick: d };
            case A.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, O.r7)(t.config) ? P.intl.string(P.t.bAGFz3) : P.intl.string(P.t.vTgCWx),
                };
        }
    }, [n, l, f, o, d, t, r, s, a, h, p, u, m, c, E]);
}
function B() {
    let { enableNewRequestBehavior: e } = E.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, y.A)(p.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, a.bG)(
            [f.A],
            () =>
                f.A.questDeliveryOverride ??
                (0, N.t6)(f.A.quests, f.A.questToDeliverForPlacement, p.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function H(e) {
    let { location: t, quest: n } = e,
        r = (0, g.H)({ location: t }),
        i = (0, A.LS)(n),
        { premiumSubscription: s } = (0, a.cf)([d.A], () => ({ premiumSubscription: d.A.getPremiumSubscription() })),
        o = (0, a.bG)([f.A], () => null != f.A.questDeliveryOverride);
    if (null == n) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, O.K9)(n.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = n.userStatus?.claimedAt != null,
        u = !o && null != n.userStatus && (0, N.gO)(n.userStatus, p.uF.QUEST_BAR);
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
function j(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = H({ location: t, quest: B() }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, a.cf)([f.A], () => ({
            lastFetchedCurrentQuests: f.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !n, hasLoadedQuestBar: 0 !== r && 0 !== i };
}
let Y = { leading: !0, trailing: !1 };
function W(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, v.Xm)(n, r),
                (0, o.showToast)((0, o.createToast)(P.intl.string(P.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        Y,
    );
}
function K(e) {
    let t = (0, a.bG)([f.A], () => f.A.quests),
        s = (0, a.bG)([h.A], () => h.A.getState().autoEnroll),
        l = i.useMemo(() => (0, C.jm)(t, e, !0)[0], [t, e]),
        u = (0, a.bG)([h.A], () => h.A.isDismissed(l?.id)),
        { enabled: c } = m.Ym.useConfig({ location: x.rE.QUEST_ACTIVITY_UNENROLLED_MODAL });
    i.useEffect(() => {
        !c ||
            null == l ||
            l.userStatus?.enrolledAt != null ||
            s ||
            u ||
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, r.jsx)(e, { ...t, quest: l });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [c, l, s, u]);
}
