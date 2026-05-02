n.d(e, { c9: () => z, dN: () => V, TQ: () => H, Lk: () => X, H1: () => j, Xf: () => M, _c: () => W, ix: () => F });
var s = n(627968),
    i = n(64700),
    r = n(785651),
    l = n(17928),
    u = n(717421),
    o = n(663417),
    a = n(691540),
    c = n(857250),
    d = n(97483),
    C = n(59520);
n(328153);
var f = n(87719),
    A = n(287809),
    g = n(166403),
    T = n(340124),
    v = n(859703),
    E = n(507107),
    _ = n(302654),
    m = n(31587),
    y = n(971276),
    x = n(18437),
    h = n(590202),
    b = n(971649),
    p = n(183636),
    q = n(927813),
    S = n(710969);
let Q = 10 * q.A.Millis.MINUTE;
function k(t, e, n) {
    if (!(0, y.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now())) return;
    if ("focused" !== p.A.getState()) {
        null != t && (0, T.Fr)(e, t.ttlMillis);
        return;
    }
    if (v.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let { enableNewRequestBehavior: s } = _.A.getConfig({ location: "maybeRefreshAd" });
    s && ((0, T.N1)(), (0, T.r8)(e, n));
}
var O = n(651892),
    P = n(901406),
    R = n(801365),
    U = n(792620),
    I = n(814793),
    D = n(753386),
    L = n(175248),
    N = n(617986),
    B = n(190107),
    w = n(375708);
function F(t) {
    let { quest: e, questContent: n, questContentPosition: s, questContentRowIndex: r, sourceQuestContent: u } = t,
        o = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        a = o?.hasVerifiedEmailOrPhone(),
        c = o?.verified,
        d = (0, x.Ut)();
    return i.useCallback(() => {
        null != e &&
            (d({
                questId: e.id,
                questContent: n,
                questContentCTA: h.Cy.CLAIM_REWARD,
                questContentPosition: s,
                questContentRowIndex: r,
                sourceQuestContent: u,
            }),
            (0, R.ks)(e.config) && !c
                ? (0, L.E)()
                : a
                  ? (0, R.K9)(e.config)
                      ? (0, f.x)()
                      : (0, R.tU)(e.config)
                        ? (0, N.hJ)(e, n, u)
                        : (0, R.HG)(e.config)
                          ? (0, N.cf)(e, n, u)
                          : (0, R.ks)(e.config)
                            ? (0, N.Df)(e, n, u)
                            : (0, N.rx)({ quest: e, sourceQuestContent: u })
                  : (0, L.E)());
    }, [e, d, n, s, r, a, c, u]);
}
let M = (t) => {
        let { useReducedMotion: e, className: n } = t,
            [l, a] = (0, u.z)(() => ({})),
            c = i.useRef(!1),
            d = (0, r.animated)(o.f);
        return {
            render: () => (0, s.jsx)(d, { className: n, style: e ? void 0 : l, color: "currentColor", size: "xs" }),
            startAnimation: (t) => {
                (c.current = !0),
                    a({
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
    j = (t, e, n) => {
        let { message: i, xboxURL: r } = (0, m.UX)(),
            l = (0, x.Ut)();
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
function G(t) {
    return (0, U.vl)(t)
        ? t.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: w.intl.string(w.t["+qoymD"]), questContentCTA: h.Cy.START_QUEST }
            : { text: w.intl.string(w.t.E4kW5O), questContentCTA: h.Cy.START_QUEST }
        : (0, U.Ov)(t)
          ? { text: w.intl.string(w.t.CkUzLd), questContentCTA: h.Cy.START_QUEST }
          : { text: w.intl.string(w.t.l7E81v), questContentCTA: h.Cy.ACCEPT_QUEST };
}
function W(t) {
    let {
            quest: e,
            progressState: n,
            questContent: s,
            questContentPosition: r,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: o,
            inGameQuest: a,
            sourceQuestContent: c,
        } = t,
        d = F({ quest: e, questContent: s, questContentPosition: r, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, m.RR)({ quest: e }),
        f = (0, m.fc)(e),
        A = (0, b.vU)()?.getId(),
        { launchInGameActivity: g } = (0, m.zW)(e),
        v = (0, I.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case m.F3.UNACCEPTED:
                let t = w.intl.string(w.t.kUQLMJ),
                    i = h.Cy.ACCEPT_QUEST;
                return (
                    o && ((t = w.intl.string(w.t.umdNin)), (i = h.Cy.START_QUEST)),
                    (a || (0, U.vl)(e)) && ({ text: t, questContentCTA: i } = G(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, U.K$)(e)) {
                                await (0, T.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, N.Fy)(e);
                                return;
                            }
                            o ||
                                v ||
                                (0, T.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                o
                                    ? await (0, N.e0)(e, {
                                          questContent: s,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: h.Cy.ACCEPT_QUEST,
                                          questContentPosition: r,
                                          questContentRowIndex: l,
                                      })
                                    : v &&
                                      (await (0, T.Oy)(e.id, {
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
            case m.F3.ACCEPTED:
            case m.F3.IN_PROGRESS:
                if (C && u)
                    return {
                        text: w.intl.string(w.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, P.se)(
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
                if ((0, U.K$)(e))
                    return {
                        text: w.intl.string(w.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, N.Fy)(e);
                        },
                    };
                if (o)
                    return {
                        text: (0, D.WM)(f),
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () =>
                            (0, N.d5)({
                                quest: e,
                                questContent: s,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: h.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (v) {
                    let { text: t } = G(e);
                    return {
                        text: t,
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () => {
                            g();
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
                    text: (0, R.r7)(e.config) ? w.intl.string(w.t.bAGFz3) : w.intl.string(w.t.vTgCWx),
                };
        }
    }, [n, o, C, u, d, e, s, r, l, A, f, a, g, c, v]);
}
function V() {
    var t;
    let e,
        n,
        s,
        r,
        { enableNewRequestBehavior: u } = _.A.useConfig({ location: "useQuestBarQuest" }),
        o =
            ((t = E.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (e = (0, i.useRef)(null)),
            (n = (0, l.bG)([v.A], () => v.A.questDeliveryOverride)),
            (s = (0, l.bG)([v.A], () => v.A.questAdDecisionByPlacement.get(t) ?? null)),
            (r = (0, l.bG)([v.A], () => (s?.questId != null ? (v.A.quests.get(s.questId) ?? null) : null))),
            ((0, i.useEffect)(() => {
                if ((null != e.current && clearInterval(e.current), null != n)) return;
                k(s, t, "questBar-open"),
                    (e.current = setInterval(() => {
                        k(v.A.questAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
                    }, Q));
                let i = e.current;
                return () => {
                    null != i && clearInterval(i);
                };
            }, [s, t, n]),
            null != n)
                ? n
                : null == r || (0, S.Ic)(r)
                  ? null
                  : r),
        a = (0, l.bG)(
            [v.A],
            () =>
                v.A.questDeliveryOverride ??
                (0, S.t6)(v.A.quests, v.A.questToDeliverForPlacement, E.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return u ? o : a;
}
function H(t) {
    let { quest: e } = t,
        n = (0, y.s)(),
        s = (0, m.LS)(e),
        { premiumSubscription: i } = (0, l.cf)([g.A], () => ({ premiumSubscription: g.A.getPremiumSubscription() })),
        r = (0, l.bG)([v.A], () => null != v.A.questDeliveryOverride);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, R.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = e.userStatus?.claimedAt != null,
        o = !r && null != e.userStatus && (0, S.gO)(e.userStatus, E.uF.QUEST_BAR);
    return u
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : s
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? o
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function z() {
    let { isQuestBarVisible: t } = H({ quest: V() }),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, l.cf)([v.A], () => ({
            lastFetchedCurrentQuests: v.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: v.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let K = { leading: !0, trailing: !1 };
function X(t) {
    let { isShareable: e, questId: n, trackingCtx: s } = t;
    return (0, C.I)(
        i.useCallback(() => {
            e && ((0, O.Xm)(n, s), (0, a.P0)((0, c.o)(w.intl.string(w.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [e, n, s]),
        3e3,
        [],
        K,
    );
}
