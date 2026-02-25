"use strict";
n.d(t, {
    H1: () => U,
    Lk: () => Y,
    TQ: () => B,
    Xf: () => k,
    _c: () => F,
    c9: () => H,
    dN: () => V,
    ix: () => P,
    ns: () => W,
});
var r = n(627968),
    i = n(64700),
    s = n(442215),
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
    m = n(302654),
    E = n(677402),
    g = n(890687),
    A = n(18437),
    I = n(590202),
    T = n(971649),
    S = n(773545),
    y = n(651892),
    v = n(710969),
    N = n(639214),
    C = n(901406),
    b = n(92246),
    R = n(792620),
    O = n(814793),
    D = n(753386),
    L = n(175248),
    w = n(545986),
    x = n(654487),
    M = n(985018);
function P(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: s, sourceQuestContent: o } = e,
        l = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        d = l?.hasVerifiedEmailOrPhone(),
        _ = l?.verified,
        f = (0, A.Ut)();
    return i.useCallback(() => {
        null != t &&
            (f({
                questId: t.id,
                questContent: n,
                questContentCTA: I.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: s,
                sourceQuestContent: o,
            }),
            (0, b.ks)(t.config) && !_
                ? (0, L.E)()
                : d
                  ? (0, b.K9)(t.config)
                      ? (0, u.x)()
                      : (0, b.tU)(t.config)
                        ? (0, w.hJ)(t, n, o)
                        : (0, b.HG)(t.config)
                          ? (0, w.cf)(t, n, o)
                          : (0, b.ks)(t.config)
                            ? (0, w.Df)(t, n, o)
                            : (0, w.rx)({ quest: t, sourceQuestContent: o })
                  : (0, L.E)());
    }, [t, f, n, r, s, d, _, o]);
}
let k = (e) => {
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
    U = (e, t, n) => {
        let { message: i, xboxURL: s } = (0, g.UX)(),
            a = (0, A.Ut)(),
            o = (r) => {
                let i = r.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            i.getAttribute("href") === s
                                ? I.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : I.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", { onClick: o, children: i });
    };
function G(e) {
    return e.config.features.includes(x.Li.START_QUEST_CTA)
        ? (0, R.vl)(e)
            ? e.config.features.includes(x.Li.CLOUD_GAMING_ACTIVITY)
                ? { text: M.intl.string(M.t["+qoymD"]), questContentCTA: I.Cy.START_QUEST }
                : { text: M.intl.string(M.t["Ie9++s"]), questContentCTA: I.Cy.START_QUEST }
            : { text: M.intl.string(M.t["hRIVy+"]), questContentCTA: I.Cy.START_QUEST }
        : { text: M.intl.string(M.t.l7E81v), questContentCTA: I.Cy.ACCEPT_QUEST };
}
function F(e) {
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
        d = P({ quest: t, questContent: r, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        f = (0, g.RR)({ quest: t }),
        p = (0, g.fc)(t),
        h = (0, T.vU)()?.getId(),
        { launchInGameActivity: m } = (0, g.zW)(t),
        E = (0, O.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case g.F3.UNACCEPTED:
                let e = M.intl.string(M.t.kUQLMJ),
                    i = I.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = M.intl.string(M.t.umdNin)), (i = I.Cy.START_QUEST)),
                    (u || (0, R.vl)(t)) && ({ text: e, questContentCTA: i } = G(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, R.BS)(t)) {
                                await (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, w.Fy)(t);
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
                                    ? await (0, w.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: I.Cy.ACCEPT_QUEST,
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
            case g.F3.ACCEPTED:
            case g.F3.IN_PROGRESS:
                if (f && o)
                    return {
                        text: M.intl.string(M.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, C.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: I.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: h,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, R.BS)(t))
                    return {
                        text: M.intl.string(M.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, w.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, D.WM)(p),
                        tooltipText: M.intl.string(M.t.hsbwjv),
                        onClick: () =>
                            (0, w.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: I.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: e } = G(t);
                    return {
                        text: e,
                        tooltipText: M.intl.string(M.t.hsbwjv),
                        onClick: () => {
                            t.config.features.includes(x.Li.START_QUEST_CTA) && m();
                        },
                    };
                }
                return { text: M.intl.string(M.t.cfY4PE), tooltipText: M.intl.string(M.t.hsbwjv), onClick: null };
            case g.F3.COMPLETED:
                return { text: M.intl.string(M.t.cfY4PE), tooltipText: null, onClick: d };
            case g.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, b.r7)(t.config) ? M.intl.string(M.t.bAGFz3) : M.intl.string(M.t.vTgCWx),
                };
        }
    }, [n, l, f, o, d, t, r, s, a, h, p, u, m, c, E]);
}
function V() {
    let { enableNewRequestBehavior: e } = m.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, S.A)(p.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, a.bG)(
            [f.A],
            () =>
                f.A.questDeliveryOverride ??
                (0, v.t6)(f.A.quests, f.A.questToDeliverForPlacement, p.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function B(e) {
    let { location: t, quest: n } = e,
        r = (0, E.H)({ location: t }),
        i = (0, g.LS)(n),
        { premiumSubscription: s } = (0, a.cf)([d.A], () => ({ premiumSubscription: d.A.getPremiumSubscription() })),
        o = (0, a.bG)([f.A], () => null != f.A.questDeliveryOverride);
    if (null == n) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, b.K9)(n.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = n.userStatus?.claimedAt != null,
        u = !o && null != n.userStatus && (0, v.gO)(n.userStatus, p.uF.QUEST_BAR);
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
function H(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = B({ location: t, quest: V() }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, a.cf)([f.A], () => ({
            lastFetchedCurrentQuests: f.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !n, hasLoadedQuestBar: 0 !== r && 0 !== i };
}
let j = { leading: !0, trailing: !1 };
function Y(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, y.Xm)(n, r),
                (0, o.showToast)((0, o.createToast)(M.intl.string(M.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        j,
    );
}
function W(e) {
    let t = (0, a.bG)([f.A], () => f.A.quests),
        s = (0, a.bG)([h.A], () => h.A.getState().autoEnroll),
        l = i.useMemo(
            () => (0, N.jm)(t, e, !0).find((e) => !e.config.features.includes(x.Li.ACTIVITY_QUEST_AUTO_ENROLLMENT)),
            [t, e],
        ),
        u = (0, a.bG)([h.A], () => h.A.isDismissed(l?.id));
    i.useEffect(() => {
        null == l ||
            l.userStatus?.enrolledAt != null ||
            s ||
            u ||
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                return (t) => (0, r.jsx)(e, { ...t, quest: l });
            });
    }, [l, s, u]);
}
