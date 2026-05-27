n.d(e, { c9: () => H, dN: () => W, TQ: () => z, Lk: () => X, H1: () => V, Xf: () => M, _c: () => G, ix: () => D });
var s = n(627968),
    i = n(64700),
    r = n(873174),
    l = n(17928),
    u = n(717421),
    a = n(663417),
    o = n(691540),
    c = n(857250),
    d = n(97483),
    C = n(59520);
n(952818);
var f = n(87719),
    A = n(287809),
    g = n(166403),
    T = n(340124),
    E = n(859703),
    _ = n(507107),
    v = n(302654),
    m = n(31587),
    x = n(971276),
    b = n(18437),
    h = n(590202),
    y = n(971649),
    Q = n(183636),
    S = n(927813),
    p = n(710969);
let q = 10 * S.A.Millis.MINUTE;
function P(t, e, n) {
    if (!(0, x.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now())) return;
    if ("focused" !== Q.A.getState()) {
        null != t && (0, T.Fr)(e, t.ttlMillis);
        return;
    }
    if (E.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let { enableNewRequestBehavior: s } = v.A.getConfig({ location: "maybeRefreshAd" });
    s && ((0, T.N1)(), (0, T.r8)(e, n));
}
var R = n(651892),
    k = n(901406),
    U = n(801365),
    O = n(792620),
    I = n(814793),
    B = n(753386),
    L = n(175248),
    N = n(617986),
    w = n(190107),
    F = n(375708);
function D(t) {
    let { quest: e, questContent: n, questContentPosition: s, questContentRowIndex: r, sourceQuestContent: u } = t,
        a = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        o = a?.hasVerifiedEmailOrPhone(),
        c = a?.verified,
        d = (0, b.Ut)();
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
            (0, U.ks)(e.config) && !c
                ? (0, L.E)()
                : o
                  ? (0, U.K9)(e.config)
                      ? (0, f.x)()
                      : (0, U.tU)(e.config)
                        ? (0, N.hJ)(e, n, u)
                        : (0, U.HG)(e.config)
                          ? (0, N.cf)(e, n, u)
                          : (0, U.ks)(e.config)
                            ? (0, N.Df)(e, n, u)
                            : (0, N.rx)({ quest: e, sourceQuestContent: u })
                  : (0, L.E)());
    }, [e, d, n, s, r, o, c, u]);
}
let M = (t) => {
        let { useReducedMotion: e, className: n } = t,
            [l, o] = (0, u.z)(() => ({})),
            c = i.useRef(!1),
            d = (0, r.animated)(a.f);
        return {
            render: () => (0, s.jsx)(d, { className: n, style: e ? void 0 : l, color: "currentColor", size: "xs" }),
            startAnimation: (t) => {
                (c.current = !0),
                    o({
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
    V = (t, e, n) => {
        let { message: i, xboxURL: r } = (0, m.UX)(),
            l = (0, b.Ut)();
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
function j(t) {
    return (0, O.vl)(t)
        ? t.config.features.includes(w.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: F.intl.string(F.t["+qoymD"]), questContentCTA: h.Cy.START_QUEST }
            : { text: F.intl.string(F.t.E4kW5O), questContentCTA: h.Cy.START_QUEST }
        : (0, O.Ov)(t)
          ? { text: F.intl.string(F.t.CkUzLd), questContentCTA: h.Cy.START_QUEST }
          : { text: F.intl.string(F.t.l7E81v), questContentCTA: h.Cy.ACCEPT_QUEST };
}
function G(t) {
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
        d = D({ quest: e, questContent: s, questContentPosition: r, questContentRowIndex: l, sourceQuestContent: c }),
        C = (0, m.RR)({ quest: e }),
        f = (0, m.fc)(e),
        A = (0, y.vU)()?.getId(),
        { launchInGameActivity: g } = (0, m.zW)(e),
        E = (0, I.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case m.F3.UNACCEPTED:
                let t = F.intl.string(F.t.kUQLMJ),
                    i = h.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = F.intl.string(F.t.umdNin)), (i = h.Cy.START_QUEST)),
                    (o || (0, O.vl)(e)) && ({ text: t, questContentCTA: i } = j(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, O.K$)(e)) {
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
                            a ||
                                E ||
                                (0, T.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, N.e0)(e, {
                                          questContent: s,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: h.Cy.ACCEPT_QUEST,
                                          questContentPosition: r,
                                          questContentRowIndex: l,
                                      })
                                    : E &&
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
                        text: F.intl.string(F.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, k.se)(
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
                        text: F.intl.string(F.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, N.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, B.WM)(f),
                        tooltipText: F.intl.string(F.t.hsbwjv),
                        onClick: () =>
                            (0, N.d5)({
                                quest: e,
                                questContent: s,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: h.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: t } = j(e);
                    return {
                        text: t,
                        tooltipText: F.intl.string(F.t.hsbwjv),
                        onClick: () => {
                            g();
                        },
                    };
                }
                return { text: F.intl.string(F.t.cfY4PE), tooltipText: F.intl.string(F.t.hsbwjv), onClick: null };
            case m.F3.COMPLETED:
                return { text: F.intl.string(F.t.cfY4PE), tooltipText: null, onClick: d };
            case m.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, U.r7)(e.config) ? F.intl.string(F.t.bAGFz3) : F.intl.string(F.t.vTgCWx),
                };
        }
    }, [n, a, C, u, d, e, s, r, l, A, f, o, g, c, E]);
}
function W() {
    var t;
    let e,
        n,
        s,
        { enableNewRequestBehavior: r } = v.A.useConfig({ location: "useQuestBarQuest" }),
        u =
            ((t = _.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (e = (0, i.useRef)(null)),
            (n = (0, l.bG)([E.A], () => E.A.questAdDecisionByPlacement.get(t) ?? null)),
            (s = (0, l.bG)([E.A], () => (n?.questId != null ? (E.A.quests.get(n.questId) ?? null) : null))),
            ((0, i.useEffect)(() => {
                null != e.current && clearInterval(e.current),
                    P(n, t, "questBar-open"),
                    (e.current = setInterval(() => {
                        P(E.A.questAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
                    }, q));
                let s = e.current;
                return () => {
                    null != s && clearInterval(s);
                };
            }, [n, t]),
            null == s || (0, p.Ic)(s))
                ? null
                : s),
        a = (0, l.bG)([E.A], () => E.A.getQuestPreviewOverride(_.uF.QUEST_BAR_V2), []),
        o = (0, l.bG)(
            [E.A],
            () => (0, p.t6)(E.A.quests, E.A.questToDeliverForPlacement, _.yW.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return a ?? (r ? u : o);
}
function z(t) {
    let { quest: e } = t,
        n = (0, x.s)(),
        s = (0, m.LS)(e),
        { premiumSubscription: i } = (0, l.cf)([g.A], () => ({ premiumSubscription: g.A.getPremiumSubscription() })),
        r = (0, l.bG)([E.A], () => null != E.A.getQuestPreviewOverride(_.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let u = e.userStatus?.claimedAt != null;
    if (r && !u) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, U.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let a = null != e.userStatus && (0, p.gO)(e.userStatus, _.uF.QUEST_BAR);
    return u
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : s
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? a
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function H() {
    let { isQuestBarVisible: t } = z({ quest: W() }),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, l.cf)([E.A], () => ({
            lastFetchedCurrentQuests: E.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: E.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let K = { leading: !0, trailing: !1 };
function X(t) {
    let { isShareable: e, questId: n, trackingCtx: s } = t;
    return (0, C.I)(
        i.useCallback(() => {
            e && ((0, R.Xm)(n, s), (0, o.P0)((0, c.o)(F.intl.string(F.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [e, n, s]),
        3e3,
        [],
        K,
    );
}
