"use strict";
n.d(t, { H1: () => k, Lk: () => H, TQ: () => V, Xf: () => M, _c: () => G, c9: () => B, dN: () => F, ix: () => P });
var r = n(627968),
    i = n(64700),
    a = n(40153),
    s = n(311907),
    o = n(397927),
    l = n(59520);
n(15285);
var u = n(87719),
    c = n(287809),
    d = n(166403),
    _ = n(829219),
    f = n(859703),
    h = n(341915),
    p = n(302654),
    g = n(677402),
    E = n(890687),
    A = n(18437),
    I = n(590202),
    T = n(971649),
    y = n(773545),
    S = n(651892),
    v = n(710969),
    C = n(901406),
    b = n(92246),
    N = n(792620),
    R = n(814793),
    O = n(753386),
    D = n(175248),
    L = n(545986),
    w = n(654487),
    x = n(985018);
function P(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: o } = e,
        l = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
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
                questContentRowIndex: a,
                sourceQuestContent: o,
            }),
            (0, b.ks)(t.config) && !_
                ? (0, D.E)()
                : d
                  ? (0, b.K9)(t.config)
                      ? (0, u.x)()
                      : (0, b.tU)(t.config)
                        ? (0, L.hJ)(t, n, o)
                        : (0, b.HG)(t.config)
                          ? (0, L.cf)(t, n, o)
                          : (0, b.ks)(t.config)
                            ? (0, L.Df)(t, n, o)
                            : (0, L.rx)({ quest: t, sourceQuestContent: o })
                  : (0, D.E)());
    }, [t, f, n, r, a, d, _, o]);
}
let M = (e) => {
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
    k = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, E.UX)(),
            s = (0, A.Ut)(),
            o = (r) => {
                let i = r.target;
                i?.tagName?.toLowerCase() !== "a" ||
                    s({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            i.getAttribute("href") === a
                                ? I.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : I.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", { onClick: o, children: i });
    };
function U(e) {
    return e.config.features.includes(w.Li.START_QUEST_CTA)
        ? (0, N.vl)(e)
            ? e.config.features.includes(w.Li.CLOUD_GAMING_ACTIVITY)
                ? { text: x.intl.string(x.t["+qoymD"]), questContentCTA: I.Cy.START_QUEST }
                : { text: x.intl.string(x.t["Ie9++s"]), questContentCTA: I.Cy.START_QUEST }
            : { text: x.intl.string(x.t["hRIVy+"]), questContentCTA: I.Cy.START_QUEST }
        : { text: x.intl.string(x.t.l7E81v), questContentCTA: I.Cy.ACCEPT_QUEST };
}
function G(e) {
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
        d = P({ quest: t, questContent: r, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: c }),
        f = (0, E.RR)({ quest: t }),
        h = (0, E.fc)(t),
        p = (0, T.vU)()?.getId(),
        { launchInGameActivity: g } = (0, E.zW)(t),
        A = (0, R.vA)(t);
    return i.useMemo(() => {
        switch (n) {
            case E.F3.UNACCEPTED:
                let e = x.intl.string(x.t.kUQLMJ),
                    i = I.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = x.intl.string(x.t.umdNin)), (i = I.Cy.START_QUEST)),
                    (u || (0, N.vl)(t)) && ({ text: e, questContentCTA: i } = U(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, N.BS)(t)) {
                                await (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                    (0, L.Fy)(t);
                                return;
                            }
                            l ||
                                A ||
                                (0, _.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: i,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, L.e0)(t, {
                                          questContent: r,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: I.Cy.ACCEPT_QUEST,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                      })
                                    : A &&
                                      (await (0, _.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: i,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                          sourceQuestContent: c,
                                      }),
                                      g());
                        },
                    }
                );
            case E.F3.ACCEPTED:
            case E.F3.IN_PROGRESS:
                if (f && o)
                    return {
                        text: x.intl.string(x.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, C.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: I.Cy.CONNECT_CONSOLE,
                                    position: a,
                                    rowIndex: s,
                                    impressionId: p,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, N.BS)(t))
                    return {
                        text: x.intl.string(x.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, L.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, O.WM)(h),
                        tooltipText: x.intl.string(x.t.hsbwjv),
                        onClick: () =>
                            (0, L.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: I.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (A) {
                    let { text: e } = U(t);
                    return {
                        text: e,
                        tooltipText: x.intl.string(x.t.hsbwjv),
                        onClick: () => {
                            t.config.features.includes(w.Li.START_QUEST_CTA) && g();
                        },
                    };
                }
                return { text: x.intl.string(x.t.cfY4PE), tooltipText: x.intl.string(x.t.hsbwjv), onClick: null };
            case E.F3.COMPLETED:
                return { text: x.intl.string(x.t.cfY4PE), tooltipText: null, onClick: d };
            case E.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, b.r7)(t.config) ? x.intl.string(x.t.bAGFz3) : x.intl.string(x.t.vTgCWx),
                };
        }
    }, [n, l, f, o, d, t, r, a, s, p, h, u, g, c, A]);
}
function F() {
    let { enableNewRequestBehavior: e } = p.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, y.A)(h.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, s.bG)(
            [f.A],
            () =>
                f.A.questDeliveryOverride ??
                (0, v.t6)(f.A.quests, f.A.questToDeliverForPlacement, h.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function V(e) {
    let { location: t, quest: n } = e,
        r = (0, g.H)({ location: t }),
        i = (0, E.LS)(n),
        { premiumSubscription: a } = (0, s.cf)([d.A], () => ({ premiumSubscription: d.A.getPremiumSubscription() })),
        o = (0, s.bG)([f.A], () => null != f.A.questDeliveryOverride);
    if (null == n) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, b.K9)(n.config) && a?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let l = n.userStatus?.claimedAt != null,
        u = !o && null != n.userStatus && (0, v.gO)(n.userStatus, h.uF.QUEST_BAR);
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
function B(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = V({ location: t, quest: F() }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, s.cf)([f.A], () => ({
            lastFetchedCurrentQuests: f.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: f.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !n, hasLoadedQuestBar: 0 !== r && 0 !== i };
}
let j = { leading: !0, trailing: !1 };
function H(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, S.Xm)(n, r),
                (0, o.showToast)((0, o.createToast)(x.intl.string(x.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        j,
    );
}
