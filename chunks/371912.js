n.d(e, {
    c9: () => tt,
    dN: () => J,
    TQ: () => Z,
    UX: () => tr,
    Lk: () => tn,
    lg: () => ti,
    H1: () => X,
    T2: () => ts,
    ix: () => K,
    Xf: () => z,
    _c: () => $,
}),
    n(323874),
    n(14289),
    n(35956);
var s = n(627968),
    i = n(64700),
    r = n(873263),
    l = n(922139),
    u = n(323889),
    a = n(17928),
    o = n(717421),
    c = n(663417),
    C = n(691540),
    d = n(857250),
    A = n(97483),
    f = n(59520),
    T = n(274670),
    g = n(144779);
n(952818);
var _ = n(87719),
    E = n(287809),
    m = n(166403),
    v = n(515718),
    y = n(340124),
    I = n(859703),
    S = n(507107),
    p = n(192444),
    b = n(104886),
    Q = n(302654),
    h = n(347135),
    x = n(971276),
    q = n(18437),
    N = n(590202),
    R = n(971649),
    L = n(183636),
    P = n(927813),
    U = n(710969);
let k = 10 * P.A.Millis.MINUTE;
function w(t, e, n) {
    if (!(0, x.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now())) return;
    if ("focused" !== L.A.getState()) {
        null != t && (0, y.Fr)(e, t.ttlMillis);
        return;
    }
    if (I.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let { enableNewRequestBehavior: s } = Q.A.getConfig({ location: "maybeRefreshAd" });
    s && ((0, y.N1)(), (0, y.r8)(e, n));
}
var D = n(651892),
    O = n(901406),
    B = n(801365),
    F = n(792620),
    M = n(814793),
    V = n(753386),
    G = n(175248),
    j = n(617986),
    H = n(190107),
    W = n(375708);
function K(t) {
    let { quest: e, questContent: n, questContentPosition: s, questContentRowIndex: r, sourceQuestContent: l } = t,
        o = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        c = o?.hasVerifiedEmailOrPhone(),
        C = o?.verified,
        d = (0, q.Ut)(),
        A = (0, R.go)();
    return i.useCallback(() => {
        null != e &&
            ((0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, T.r)({
                      type: g.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: N.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: l,
                      impressionId: A,
                      questContentPosition: s,
                      questContentRowIndex: r,
                  })
                : d({
                      questId: e.id,
                      questContent: n,
                      questContentCTA: N.Cy.CLAIM_REWARD,
                      questContentPosition: s,
                      questContentRowIndex: r,
                      sourceQuestContent: l,
                  }),
            (0, B.ks)(e.config) && !C
                ? (0, G.E)()
                : c
                  ? (0, B.K9)(e.config)
                      ? (0, _.x)()
                      : (0, B.tU)(e.config)
                        ? (0, j.hJ)(e, n, l)
                        : (0, B.HG)(e.config)
                          ? (0, j.cf)(e, n, l)
                          : (0, B.ks)(e.config)
                            ? (0, j.Df)(e, n, l)
                            : (0, j.rx)({ quest: e, sourceQuestContent: l })
                  : (0, G.E)());
    }, [e, d, A, n, s, r, c, C, l]);
}
let z = (t) => {
        let { useReducedMotion: e, className: n } = t,
            [r, u] = (0, o.z)(() => ({})),
            a = i.useRef(!1),
            C = (0, l.animated)(c.f);
        return {
            render: () => (0, s.jsx)(C, { className: n, style: e ? void 0 : r, color: "currentColor", size: "xs" }),
            startAnimation: (t) => {
                (a.current = !0),
                    u({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: { tension: 750, mass: 5, friction: 100 },
                        loop: () => t ?? a.current,
                        immediate: e,
                    });
            },
            stopAnimation: () => {
                a.current = !1;
            },
        };
    },
    X = (t, e, n) => {
        let { message: i, xboxURL: r } = (0, h.UX)(),
            l = (0, q.Ut)(),
            a = (0, R.go)();
        return (0, s.jsx)("span", {
            onClick: (s) => {
                let i = s.target;
                if (i?.tagName?.toLowerCase() !== "a") return;
                let o =
                    i.getAttribute("href") === r ? N.Cy.HOW_TO_HELP_ARTICLE_XBOX : N.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                    ? (0, T.r)({
                          type: g.F.CLICK_INTERNAL,
                          adCreativeType: u.p.QUEST,
                          adCreativeId: t,
                          questContentCTA: o,
                          surfaceId: e,
                          sourceQuestContent: n,
                          impressionId: a,
                      })
                    : l({ questId: t, questContent: e, questContentCTA: o, sourceQuestContent: n });
            },
            children: i,
        });
    };
function Y(t) {
    return (0, F.vl)(t)
        ? t.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: W.intl.string(W.t["+qoymD"]), questContentCTA: N.Cy.START_QUEST }
            : { text: W.intl.string(W.t.E4kW5O), questContentCTA: N.Cy.START_QUEST }
        : (0, F.Ov)(t)
          ? { text: W.intl.string(W.t.CkUzLd), questContentCTA: N.Cy.START_QUEST }
          : { text: W.intl.string(W.t.l7E81v), questContentCTA: N.Cy.ACCEPT_QUEST };
}
function $(t) {
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
        C = K({ quest: e, questContent: s, questContentPosition: r, questContentRowIndex: l, sourceQuestContent: c }),
        d = (0, h.RR)({ quest: e }),
        A = (0, h.fc)(e),
        f = (0, R.vU)()?.getId(),
        { launchInGameActivity: T } = (0, h.zW)(e),
        g = (0, M.vA)(e);
    return i.useMemo(() => {
        switch (n) {
            case h.F3.UNACCEPTED:
                let t = W.intl.string(W.t.kUQLMJ),
                    i = N.Cy.ACCEPT_QUEST;
                return (
                    a && ((t = W.intl.string(W.t.umdNin)), (i = N.Cy.START_QUEST)),
                    (o || (0, F.vl)(e)) && ({ text: t, questContentCTA: i } = Y(e)),
                    {
                        text: t,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, F.K$)(e)) {
                                await (0, y.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                    (0, j.Fy)(e);
                                return;
                            }
                            a ||
                                g ||
                                (0, y.Oy)(e.id, {
                                    questContent: s,
                                    questContentCTA: i,
                                    questContentPosition: r,
                                    questContentRowIndex: l,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, j.e0)(e, {
                                          questContent: s,
                                          questContentCTA: i,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: N.Cy.ACCEPT_QUEST,
                                          questContentPosition: r,
                                          questContentRowIndex: l,
                                      })
                                    : g &&
                                      (await (0, y.Oy)(e.id, {
                                          questContent: s,
                                          questContentCTA: i,
                                          questContentPosition: r,
                                          questContentRowIndex: l,
                                          sourceQuestContent: c,
                                      }),
                                      T());
                        },
                    }
                );
            case h.F3.ACCEPTED:
            case h.F3.IN_PROGRESS:
                if (d && u)
                    return {
                        text: W.intl.string(W.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, O.se)(
                                { quest: e },
                                {
                                    content: s,
                                    ctaContent: N.Cy.CONNECT_CONSOLE,
                                    position: r,
                                    rowIndex: l,
                                    impressionId: f,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, F.K$)(e))
                    return {
                        text: W.intl.string(W.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, j.Fy)(e);
                        },
                    };
                if (a)
                    return {
                        text: (0, V.WM)(A),
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () =>
                            (0, j.d5)({
                                quest: e,
                                questContent: s,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: N.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (g) {
                    let { text: t } = Y(e);
                    return {
                        text: t,
                        tooltipText: W.intl.string(W.t.hsbwjv),
                        onClick: () => {
                            T();
                        },
                    };
                }
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: W.intl.string(W.t.hsbwjv), onClick: null };
            case h.F3.COMPLETED:
                return { text: W.intl.string(W.t.cfY4PE), tooltipText: null, onClick: C };
            case h.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: C,
                    text: (0, B.r7)(e.config) ? W.intl.string(W.t.bAGFz3) : W.intl.string(W.t.vTgCWx),
                };
        }
    }, [n, a, d, u, C, e, s, r, l, f, A, o, T, c, g]);
}
function J() {
    var t;
    let e,
        n,
        s,
        { enableNewRequestBehavior: r } = Q.A.useConfig({ location: "useQuestBarQuest" }),
        l =
            ((t = S.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (e = (0, i.useRef)(null)),
            (n = (0, a.bG)([I.A], () => I.A.questAdDecisionByPlacement.get(t) ?? null)),
            (s = (0, a.bG)([I.A], () => (n?.questId != null ? (I.A.quests.get(n.questId) ?? null) : null))),
            ((0, i.useEffect)(() => {
                null != e.current && clearInterval(e.current),
                    w(n, t, "questBar-open"),
                    (e.current = setInterval(() => {
                        w(I.A.questAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
                    }, k));
                let s = e.current;
                return () => {
                    null != s && clearInterval(s);
                };
            }, [n, t]),
            null == s || (0, U.Ic)(s))
                ? null
                : s),
        u = (0, a.bG)([I.A], () => I.A.getQuestPreviewOverride(S.uF.QUEST_BAR_V2), []),
        o = (0, a.bG)(
            [I.A],
            () => (0, U.t6)(I.A.quests, I.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return u ?? (r ? l : o);
}
function Z(t) {
    let { quest: e } = t,
        n = (0, x.s)(),
        s = (0, h.LS)(e),
        { premiumSubscription: i } = (0, a.cf)([m.A], () => ({ premiumSubscription: m.A.getPremiumSubscription() })),
        r = (0, a.bG)([I.A], () => null != I.A.getQuestPreviewOverride(S.uF.QUEST_BAR_V2), []);
    if (null == e) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let l = e.userStatus?.claimedAt != null;
    if (r && !l) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, B.K9)(e.config) && i?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = null != e.userStatus && (0, U.gO)(e.userStatus, S.uF.QUEST_BAR);
    return l
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : s
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? u
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function tt() {
    let { isQuestBarVisible: t } = Z({ quest: J() }),
        { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0, a.cf)([I.A], () => ({
            lastFetchedCurrentQuests: I.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: I.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
}
let te = { leading: !0, trailing: !1 };
function tn(t) {
    let { isShareable: e, questId: n, trackingCtx: s } = t;
    return (0, f.I)(
        i.useCallback(() => {
            e && ((0, D.Xm)(n, s), (0, C.P0)((0, d.o)(W.intl.string(W.t["+5kSoW"]), A.Ck.SUCCESS)));
        }, [e, n, s]),
        3e3,
        [],
        te,
    );
}
function ts() {
    let t = (0, p.Qj)(),
        { search: e } = (0, r.zy)(),
        n = i.useMemo(() => new URLSearchParams(e).getAll(h.L1.AD_CREATIVE_IDS).length > 0, [e]),
        s = (0, a.bG)([I.A], () => I.A.getQuestHomeHero()),
        [l, u] = i.useState(() => Date.now()),
        o = null != s ? Date.parse(s.endsAt) : null,
        c = null != s;
    return (i.useEffect(() => {
        if (!c) return;
        let t = setInterval(() => u(Date.now()), 3e4);
        return () => clearInterval(t);
    }, [c]),
    (t && !n) || null == s || null == o || Number.isNaN(o) || l >= o)
        ? null
        : s;
}
function ti(t) {
    let [e, n] = i.useState(!0),
        [s, r] = i.useState(!0),
        [l, u] = i.useState(!1),
        [o, c] = i.useState(!1),
        C = (0, a.bG)([I.A], () => I.A.isFetchingQuestHomeHero()),
        d = ts();
    return (
        i.useEffect(() => {
            !(async function () {
                try {
                    null != t ? await (0, y.IV)(t) : await (0, y.Yf)();
                } catch (t) {
                    r(!1), u(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [t]),
        i.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    let t = [d.heroImage, d.sponsorImage].filter((t) => null != t);
                    await Promise.all(t.map(v.NN));
                } catch (t) {
                    c(!0);
                } finally {
                    r(!1);
                }
            })();
        }, [d]),
        { questHomeHero: l || o ? null : d, isLoading: e || C || s }
    );
}
function tr(t) {
    let e = ts(),
        { isShelfEnabled: n } = (0, h.t9)(e);
    return !n && null != e && (0, M.I0)(e, t);
}
