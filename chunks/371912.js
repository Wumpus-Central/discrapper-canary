"use strict";
n.d(t, {
    c9: () => ee,
    dN: () => Q,
    TQ: () => J,
    UX: () => es,
    Lk: () => en,
    lg: () => er,
    H1: () => q,
    T2: () => ei,
    ix: () => $,
    Xf: () => z,
    _c: () => X,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(627968),
    r = n(64700),
    s = n(873263),
    a = n(308186),
    o = n(323889),
    l = n(17928),
    u = n(717421),
    c = n(663417),
    d = n(691540),
    _ = n(857250),
    h = n(97483),
    f = n(59520),
    p = n(274670),
    E = n(144779);
n(952818);
var m = n(87719),
    g = n(287809),
    A = n(166403),
    I = n(515718),
    T = n(340124),
    S = n(859703),
    y = n(507107),
    C = n(192444),
    N = n(104886),
    v = n(302654),
    R = n(347135),
    O = n(971276),
    b = n(18437),
    D = n(590202),
    L = n(971649),
    w = n(183636),
    M = n(927813),
    P = n(710969);
let x = 10 * M.A.Millis.MINUTE;
function k(e, t, n) {
    if (!(0, O.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== w.A.getState()) {
        null != e && (0, T.Fr)(t, e.ttlMillis);
        return;
    }
    if (S.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = v.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, T.N1)(), (0, T.r8)(t, n));
}
var U = n(651892),
    G = n(901406),
    F = n(801365),
    V = n(792620),
    B = n(814793),
    j = n(753386),
    H = n(175248),
    Y = n(617986),
    W = n(190107),
    K = n(375708);
function $(e) {
    let { quest: t, questContent: n, questContentPosition: i, questContentRowIndex: s, sourceQuestContent: a } = e,
        u = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        c = u?.hasVerifiedEmailOrPhone(),
        d = u?.verified,
        _ = (0, b.Ut)(),
        h = (0, L.go)();
    return r.useCallback(() => {
        null != t &&
            ((0, N.E5)(N.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
                ? (0, p.r)({
                      type: E.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: D.Cy.CLAIM_REWARD,
                      surfaceId: n,
                      sourceQuestContent: a,
                      impressionId: h,
                      questContentPosition: i,
                      questContentRowIndex: s,
                  })
                : _({
                      questId: t.id,
                      questContent: n,
                      questContentCTA: D.Cy.CLAIM_REWARD,
                      questContentPosition: i,
                      questContentRowIndex: s,
                      sourceQuestContent: a,
                  }),
            (0, F.ks)(t.config) && !d
                ? (0, H.E)()
                : c
                  ? (0, F.K9)(t.config)
                      ? (0, m.x)()
                      : (0, F.tU)(t.config)
                        ? (0, Y.hJ)(t, n, a)
                        : (0, F.HG)(t.config)
                          ? (0, Y.cf)(t, n, a)
                          : (0, F.ks)(t.config)
                            ? (0, Y.Df)(t, n, a)
                            : (0, Y.rx)({ quest: t, sourceQuestContent: a })
                  : (0, H.E)());
    }, [t, _, h, n, i, s, c, d, a]);
}
function z(e) {
    let { useReducedMotion: t, className: n } = e,
        [s, o] = (0, u.z)(() => ({})),
        l = r.useRef(!1),
        d = (0, a.animated)(c.f);
    return {
        render: () => (0, i.jsx)(d, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
        startAnimation: function (e) {
            (l.current = !0),
                o({
                    from: { rotate: "0deg" },
                    to: { rotate: "360deg" },
                    config: { tension: 750, mass: 5, friction: 100 },
                    loop: () => e ?? l.current,
                    immediate: t,
                });
        },
        stopAnimation: () => {
            l.current = !1;
        },
    };
}
let q = (e, t, n) => {
    let { message: r, xboxURL: s } = (0, R.UX)(),
        a = (0, b.Ut)(),
        l = (0, L.go)();
    return (0, i.jsx)("span", {
        onClick: function (i) {
            let r = i.target;
            if (r?.tagName?.toLowerCase() !== "a") return;
            let u = r.getAttribute("href") === s ? D.Cy.HOW_TO_HELP_ARTICLE_XBOX : D.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
            (0, N.E5)(N.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
                ? (0, p.r)({
                      type: E.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: e,
                      questContentCTA: u,
                      surfaceId: t,
                      sourceQuestContent: n,
                      impressionId: l,
                  })
                : a({ questId: e, questContent: t, questContentCTA: u, sourceQuestContent: n });
        },
        children: r,
    });
};
function Z(e) {
    return (0, V.vl)(e)
        ? e.config.features.includes(W.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: K.intl.string(K.t["+qoymD"]), questContentCTA: D.Cy.START_QUEST }
            : { text: K.intl.string(K.t.E4kW5O), questContentCTA: D.Cy.START_QUEST }
        : (0, V.Ov)(e)
          ? { text: K.intl.string(K.t.CkUzLd), questContentCTA: D.Cy.START_QUEST }
          : { text: K.intl.string(K.t.l7E81v), questContentCTA: D.Cy.ACCEPT_QUEST };
}
function X(e) {
    let {
            quest: t,
            progressState: n,
            questContent: i,
            questContentPosition: s,
            questContentRowIndex: a,
            inGiftInventory: o,
            isVideoQuest: l,
            inGameQuest: u,
            sourceQuestContent: c,
        } = e,
        d = $({ quest: t, questContent: i, questContentPosition: s, questContentRowIndex: a, sourceQuestContent: c }),
        _ = (0, R.RR)({ quest: t }),
        h = (0, R.fc)(t),
        f = (0, L.vU)()?.getId(),
        { launchInGameActivity: p } = (0, R.zW)(t),
        E = (0, B.vA)(t);
    return r.useMemo(() => {
        switch (n) {
            case R.F3.UNACCEPTED:
                let e = K.intl.string(K.t.kUQLMJ),
                    r = D.Cy.ACCEPT_QUEST;
                return (
                    l && ((e = K.intl.string(K.t.umdNin)), (r = D.Cy.START_QUEST)),
                    (u || (0, V.vl)(t)) && ({ text: e, questContentCTA: r } = Z(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, V.K$)(t)) {
                                await (0, T.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                    (0, Y.Fy)(t);
                                return;
                            }
                            l ||
                                E ||
                                (0, T.Oy)(t.id, {
                                    questContent: i,
                                    questContentCTA: r,
                                    questContentPosition: s,
                                    questContentRowIndex: a,
                                    sourceQuestContent: c,
                                }),
                                l
                                    ? await (0, Y.e0)(t, {
                                          questContent: i,
                                          questContentCTA: r,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: D.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                      })
                                    : E &&
                                      (await (0, T.Oy)(t.id, {
                                          questContent: i,
                                          questContentCTA: r,
                                          questContentPosition: s,
                                          questContentRowIndex: a,
                                          sourceQuestContent: c,
                                      }),
                                      p());
                        },
                    }
                );
            case R.F3.ACCEPTED:
            case R.F3.IN_PROGRESS:
                if (_ && o)
                    return {
                        text: K.intl.string(K.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, G.se)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: D.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: a,
                                    impressionId: f,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, V.K$)(t))
                    return {
                        text: K.intl.string(K.t["/cXIc6"]),
                        tooltipText: null,
                        onClick: () => {
                            (0, Y.Fy)(t);
                        },
                    };
                if (l)
                    return {
                        text: (0, j.WM)(h),
                        tooltipText: K.intl.string(K.t.hsbwjv),
                        onClick: () =>
                            (0, Y.d5)({
                                quest: t,
                                questContent: i,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: D.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (E) {
                    let { text: e } = Z(t);
                    return {
                        text: e,
                        tooltipText: K.intl.string(K.t.hsbwjv),
                        onClick: () => {
                            p();
                        },
                    };
                }
                return { text: K.intl.string(K.t.cfY4PE), tooltipText: K.intl.string(K.t.hsbwjv), onClick: null };
            case R.F3.COMPLETED:
                return { text: K.intl.string(K.t.cfY4PE), tooltipText: null, onClick: d };
            case R.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, F.r7)(t.config) ? K.intl.string(K.t.bAGFz3) : K.intl.string(K.t.vTgCWx),
                };
        }
    }, [n, l, _, o, d, t, i, s, a, f, h, u, p, c, E]);
}
function Q() {
    var e;
    let t,
        n,
        i,
        { enableNewRequestBehavior: s } = v.A.useConfig({ location: "useQuestBarQuest" }),
        a =
            ((e = y.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            (t = (0, r.useRef)(null)),
            (n = (0, l.bG)([S.A], () => S.A.questAdDecisionByPlacement.get(e) ?? null)),
            (i = (0, l.bG)([S.A], () => (n?.questId != null ? (S.A.quests.get(n.questId) ?? null) : null))),
            ((0, r.useEffect)(() => {
                null != t.current && clearInterval(t.current),
                    k(n, e, "questBar-open"),
                    (t.current = setInterval(() => {
                        k(S.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                    }, x));
                let i = t.current;
                return () => {
                    null != i && clearInterval(i);
                };
            }, [n, e]),
            null == i || (0, P.Ic)(i))
                ? null
                : i),
        o = (0, l.bG)([S.A], () => S.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []),
        u = (0, l.bG)(
            [S.A],
            () => (0, P.t6)(S.A.quests, S.A.questToDeliverForPlacement, y.yW.DESKTOP_ACCOUNT_PANEL_AREA) ?? null,
        );
    return o ?? (s ? a : u);
}
function J(e) {
    let { quest: t } = e,
        n = (0, O.s)(),
        i = (0, R.LS)(t),
        { premiumSubscription: r } = (0, l.cf)([A.A], () => ({ premiumSubscription: A.A.getPremiumSubscription() })),
        s = (0, l.bG)([S.A], () => null != S.A.getQuestPreviewOverride(y.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let a = t.userStatus?.claimedAt != null;
    if (s && !a) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, F.K9)(t.config) && r?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = null != t.userStatus && (0, P.gO)(t.userStatus, y.uF.QUEST_BAR);
    return a
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : i
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? o
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function ee() {
    let { isQuestBarVisible: e } = J({ quest: Q() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, l.cf)([S.A], () => ({
            lastFetchedCurrentQuests: S.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: S.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let et = { leading: !0, trailing: !1 };
function en(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e;
    return (0, f.I)(
        r.useCallback(() => {
            t && ((0, U.Xm)(n, i), (0, d.P0)((0, _.o)(K.intl.string(K.t["+5kSoW"]), h.Ck.SUCCESS)));
        }, [t, n, i]),
        3e3,
        [],
        et,
    );
}
function ei() {
    let e = (0, C.Qj)(),
        { search: t } = (0, s.zy)(),
        n = r.useMemo(() => new URLSearchParams(t).getAll(R.L1.AD_CREATIVE_IDS).length > 0, [t]),
        i = (0, l.bG)([S.A], () => S.A.getQuestHomeHero()),
        [a, o] = r.useState(() => Date.now()),
        u = null != i ? Date.parse(i.endsAt) : null,
        c = null != i;
    return (r.useEffect(() => {
        if (!c) return;
        let e = setInterval(() => o(Date.now()), 3e4);
        return () => clearInterval(e);
    }, [c]),
    (e && !n) || null == i || null == u || Number.isNaN(u) || a >= u)
        ? null
        : i;
}
function er(e) {
    let [t, n] = r.useState(!0),
        [i, s] = r.useState(!0),
        [a, o] = r.useState(!1),
        [u, c] = r.useState(!1),
        d = (0, l.bG)([S.A], () => S.A.isFetchingQuestHomeHero()),
        _ = ei();
    return (
        r.useEffect(() => {
            !(async function () {
                try {
                    null != e ? await (0, T.IV)(e) : await (0, T.Yf)();
                } catch (e) {
                    s(!1), o(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == _) return;
                    let e = [_.heroImage, _.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(I.NN));
                } catch (e) {
                    c(!0);
                } finally {
                    s(!1);
                }
            })();
        }, [_]),
        { questHomeHero: a || u ? null : _, isLoading: t || d || i }
    );
}
function es(e) {
    let t = ei(),
        { isShelfEnabled: n } = (0, R.t9)(t);
    return !n && null != t && (0, B.I0)(t, e);
}
