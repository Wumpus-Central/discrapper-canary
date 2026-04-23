n.d(t, { c9: () => $, dN: () => j, TQ: () => K, Lk: () => q, H1: () => x, Xf: () => k, _c: () => Y, ix: () => H });
var i = n(627968),
    r = n(64700),
    a = n(419354),
    s = n(17928),
    _ = n(717421),
    l = n(663417),
    o = n(691540),
    E = n(857250),
    d = n(97483),
    c = n(59520);
n(328153);
var u = n(87719),
    I = n(287809),
    A = n(166403),
    T = n(829219),
    S = n(859703),
    N = n(507107),
    O = n(302654),
    R = n(890687),
    f = n(971276),
    C = n(18437),
    p = n(590202),
    m = n(971649),
    L = n(183636),
    D = n(927813),
    h = n(710969);
let g = 10 * D.A.Millis.MINUTE;
function b(e, t, n) {
    if (!(0, f.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== L.A.getState()) {
        null != e && (0, T.Fr)(t, e.ttlMillis);
        return;
    }
    if (S.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = O.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, T.N1)(), (0, T.r8)(t, n));
}
var U = n(651892),
    P = n(901406),
    M = n(801365),
    y = n(792620),
    G = n(814793),
    v = n(753386),
    B = n(175248),
    w = n(545986),
    F = n(654487),
    V = n(985018);
function H(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: a, sourceQuestContent: _ } = e,
        l = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        o = l?.hasVerifiedEmailOrPhone(),
        E = l?.verified,
        d = (0, C.Ut)();
    return r.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: p.Cy.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: a,
                sourceQuestContent: _,
            }),
            (0, M.ks)(t.config) && !E
                ? (0, B.E)()
                : o
                  ? (0, M.K9)(t.config)
                      ? (0, u.x)()
                      : (0, M.tU)(t.config)
                        ? (0, w.hJ)(t, n, _)
                        : (0, M.HG)(t.config)
                          ? (0, w.cf)(t, n, _)
                          : (0, M.ks)(t.config)
                            ? (0, w.Df)(t, n, _)
                            : (0, w.rx)({ quest: t, sourceQuestContent: _ })
                  : (0, B.E)());
    }, [t, d, n, i, a, o, E, _]);
}
let k = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, o] = (0, _.z)(() => ({})),
            E = r.useRef(!1),
            d = (0, a.animated)(l.f);
        return {
            render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
            startAnimation: (e) => {
                (E.current = !0),
                    o({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: { tension: 750, mass: 5, friction: 100 },
                        loop: () => e ?? E.current,
                        immediate: t,
                    });
            },
            stopAnimation: () => {
                E.current = !1;
            },
        };
    },
    x = (e, t, n) => {
        let { message: r, xboxURL: a } = (0, R.UX)(),
            s = (0, C.Ut)();
        return (0, i.jsx)("span", {
            onClick: (i) => {
                let r = i.target;
                r?.tagName?.toLowerCase() !== "a" ||
                    s({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            r.getAttribute("href") === a
                                ? p.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : p.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            },
            children: r,
        });
    };
function W(e) {
    return (0, y.vl)(e)
        ? e.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: V.intl.string(V.t["+qoymD"]), questContentCTA: p.Cy.START_QUEST }
            : { text: V.intl.string(V.t.E4kW5O), questContentCTA: p.Cy.START_QUEST }
        : (0, y.Ov)(e)
          ? { text: V.intl.string(V.t.CkUzLd), questContentCTA: p.Cy.START_QUEST }
          : { text: V.intl.string(V.t.l7E81v), questContentCTA: p.Cy.ACCEPT_QUEST };
}
function Y(e) {
    let {
            quest: t,
            progressState: n,
            questContent: i,
            questContentPosition: a,
            questContentRowIndex: s,
            inGiftInventory: _,
            isVideoQuest: l,
            inGameQuest: o,
            sourceQuestContent: E,
        } = e,
        d = H({ quest: t, questContent: i, questContentPosition: a, questContentRowIndex: s, sourceQuestContent: E }),
        c = (0, R.RR)({ quest: t }),
        u = (0, R.fc)(t),
        I = (0, m.vU)()?.getId(),
        { launchInGameActivity: A } = (0, R.zW)(t),
        S = (0, G.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case R.F3.UNACCEPTED:
                let e = V.intl.string(V.t.kUQLMJ),
                    r = p.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = V.intl.string(V.t.umdNin)), (r = p.Cy.START_QUEST)),
                    (o || (0, y.vl)(t)) && ({ text: e, questContentCTA: r } = W(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, y.K$)(t)) {
                                await (0, T.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: E,
                                }),
                                    (0, w.Fy)(t);
                                return;
                            }
                            l ||
                                S ||
                                (0, T.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: a,
                                    questContentRowIndex: s,
                                    sourceQuestContent: E,
                                }),
                                l
                                    ? await (0, w.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: E,
                                          sourceQuestContentCTA: p.Cy.ACCEPT_QUEST,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                      })
                                    : S &&
                                      (await (0, T.Oy)(t.id, {
                                          questContent: i,
                                          questContentCTA: r,
                                          questContentPosition: a,
                                          questContentRowIndex: s,
                                          sourceQuestContent: E,
                                      }),
                                      A());
                        },
                    }
                );
            case R.F3.ACCEPTED:
            case R.F3.IN_PROGRESS:
                if (c && _)
                    return {
                        text: V.intl.string(V.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, P.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: p.Cy.CONNECT_CONSOLE,
                                    position: a,
                                    rowIndex: s,
                                    impressionId: I,
                                    sourceQuestContent: E,
                                },
                            ),
                    };
                if ((0, y.K$)(t))
                    return {
                        text: V.intl.string(V.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, w.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, v.WM)(u),
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () =>
                            (0, w.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: E,
                                sourceQuestContentCTA: p.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (S) {
                    let { text: e } = W(t);
                    return {
                        text: e,
                        tooltipText: V.intl.string(V.t.hsbwjv),
                        onClick: () => {
                            A();
                        },
                    };
                }
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: V.intl.string(V.t.hsbwjv), onClick: null };
            case R.F3.COMPLETED:
                return { text: V.intl.string(V.t.cfY4PE), tooltipText: null, onClick: d };
            case R.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, M.r7)(t.config) ? V.intl.string(V.t.bAGFz3) : V.intl.string(V.t.vTgCWx),
                };
        }
    }, [n, l, c, _, d, t, i, a, s, I, u, o, A, E, S]);
}
function j() {
    var e;
    let t,
        n,
        i,
        a,
        { enableNewRequestBehavior: _ } = O.A.useConfig({ location: "useQuestBarQuest" }),
        l =
            ((e = N.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (t = (0, r.useRef)(null)),
            (n = (0, s.bG)([S.A], () => S.A.questDeliveryOverride)),
            (i = (0, s.bG)([S.A], () => S.A.questAdDecisionByPlacement.get(e) ?? null)),
            (a = (0, s.bG)([S.A], () => (i?.questId != null ? (S.A.quests.get(i.questId) ?? null) : null))),
            ((0, r.useEffect)(() => {
                if ((null != t.current && clearInterval(t.current), null != n)) return;
                b(i, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        b(S.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, g));
                let r = t.current;
                return () => {
                    null != r && clearInterval(r);
                };
            }, [i, e, n]),
            null != n)
                ? n
                : null == a || (0, h.Ic)(a)
                  ? null
                  : a),
        o = (0, s.bG)(
            [S.A],
            () =>
                S.A.questDeliveryOverride ??
                (0, h.t6)(S.A.quests, S.A.questToDeliverForPlacement, N.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return _ ? l : o;
}
function K(e) {
    let { quest: t } = e,
        n = (0, f.s)(),
        i = (0, R.LS)(t),
        { premiumSubscription: r } = (0, s.cf)([A.A], () => ({ premiumSubscription: A.A.getPremiumSubscription() })),
        a = (0, s.bG)([S.A], () => null != S.A.questDeliveryOverride);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, M.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let _ = t.userStatus?.claimedAt != null,
        l = !a && null != t.userStatus && (0, h.gO)(t.userStatus, N.uF.QUEST_BAR);
    return _
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? l
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function $() {
    let { isQuestBarVisible: e } = K({ quest: j() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, s.cf)([S.A], () => ({
            lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: S.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let Q = { leading: !0, trailing: !1 };
function q(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, c.I)(
        r.useCallback(() => {
            t && ((0, U.Xm)(n, i), (0, o.P0)((0, E.o)(V.intl.string(V.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        Q,
    );
}
