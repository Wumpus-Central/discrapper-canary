n.d(t, { H1: () => P, Lk: () => W, TQ: () => j, Xf: () => H, _c: () => F, c9: () => G, dN: () => V, ix: () => w });
var r = n(627968),
    s = n(64700),
    l = n(517738),
    i = n(311907),
    u = n(717421),
    a = n(663417),
    o = n(691540),
    c = n(857250),
    d = n(97483),
    f = n(59520);
n(15285);
var C = n(87719),
    E = n(287809),
    v = n(166403),
    g = n(829219),
    A = n(859703),
    T = n(341915),
    m = n(302654),
    _ = n(890687),
    p = n(971276),
    S = n(18437),
    x = n(590202),
    h = n(971649),
    y = n(773545),
    b = n(651892),
    L = n(710969),
    k = n(901406),
    O = n(92246),
    q = n(792620),
    Q = n(814793),
    R = n(753386),
    U = n(175248),
    I = n(545986),
    M = n(654487),
    N = n(985018);
function w(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: l, sourceQuestContent: u } = e,
        a = (0, i.bG)([E.default], () => E.default.getCurrentUser()),
        o = a?.hasVerifiedEmailOrPhone(),
        c = a?.verified,
        d = (0, S.Ut)();
    return s.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: x.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: l,
                sourceQuestContent: u,
            }),
            (0, O.ks)(t.config) && !c
                ? (0, U.E)()
                : o
                  ? (0, O.K9)(t.config)
                      ? (0, C.x)()
                      : (0, O.tU)(t.config)
                        ? (0, I.hJ)(t, n, u)
                        : (0, O.HG)(t.config)
                          ? (0, I.cf)(t, n, u)
                          : (0, O.ks)(t.config)
                            ? (0, I.Df)(t, n, u)
                            : (0, I.rx)({ quest: t, sourceQuestContent: u })
                  : (0, U.E)());
    }, [t, d, n, r, l, o, c, u]);
}
let H = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [i, o] = (0, u.z)(() => ({})),
            c = s.useRef(!1),
            d = (0, l.animated)(a.f);
        return {
            render: () => (0, r.jsx)(d, { className: n, style: t ? void 0 : i, color: "currentColor", size: "xs" }),
            startAnimation: (e) => {
                (c.current = !0),
                    o({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: { tension: 750, mass: 5, friction: 100 },
                        loop: () => e ?? c.current,
                        immediate: t,
                    });
            },
            stopAnimation: () => {
                c.current = !1;
            },
        };
    },
    P = (e, t, n) => {
        let { message: s, xboxURL: l } = (0, _.UX)(),
            i = (0, S.Ut)();
        return (0, r.jsx)("span", {
            onClick: (r) => {
                let s = r.target;
                s?.tagName?.toLowerCase() !== "a" ||
                    i({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            s.getAttribute("href") === l
                                ? x.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : x.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            },
            children: s,
        });
    };
function D(e) {
    return (0, q.vl)(e)
        ? e.config.features.includes(M.Li.CLOUD_GAMING_ACTIVITY)
            ? { text: N.intl.string(N.t["+qoymD"]), questContentCTA: x.Cy.START_QUEST }
            : { text: N.intl.string(N.t.E4kW5O), questContentCTA: x.Cy.START_QUEST }
        : (0, q.Ov)(e)
          ? { text: N.intl.string(N.t.CkUzLd), questContentCTA: x.Cy.START_QUEST }
          : { text: N.intl.string(N.t.l7E81v), questContentCTA: x.Cy.ACCEPT_QUEST };
}
function F(e) {
    let {
            quest: t,
            progressState: n,
            questContent: r,
            questContentPosition: l,
            questContentRowIndex: i,
            inGiftInventory: u,
            isVideoQuest: a,
            inGameQuest: o,
            sourceQuestContent: c,
        } = e,
        d = w({ quest: t, questContent: r, questContentPosition: l, questContentRowIndex: i, sourceQuestContent: c }),
        f = (0, _.RR)({ quest: t }),
        C = (0, _.fc)(t),
        E = (0, h.vU)()?.getId(),
        { launchInGameActivity: v } = (0, _.zW)(t),
        A = (0, Q.vA)(t);
    return s.useMemo(() => {
        switch (n) {
            case _.F3.UNACCEPTED:
                let e = N.intl.string(N.t.kUQLMJ),
                    s = x.Cy.ACCEPT_QUEST;
                return (
                    a && ((e = N.intl.string(N.t.umdNin)), (s = x.Cy.START_QUEST)),
                    (o || (0, q.vl)(t)) && ({ text: e, questContentCTA: s } = D(t)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, q.K$)(t)) {
                                await (0, g.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: l,
                                    questContentRowIndex: i,
                                    sourceQuestContent: c,
                                }),
                                    (0, I.Fy)(t);
                                return;
                            }
                            a ||
                                A ||
                                (0, g.Oy)(t.id, {
                                    questContent: r,
                                    questContentCTA: s,
                                    questContentPosition: l,
                                    questContentRowIndex: i,
                                    sourceQuestContent: c,
                                }),
                                a
                                    ? await (0, I.e0)(t, {
                                          questContent: r,
                                          questContentCTA: s,
                                          sourceQuestContent: c,
                                          sourceQuestContentCTA: x.Cy.ACCEPT_QUEST,
                                          questContentPosition: l,
                                          questContentRowIndex: i,
                                      })
                                    : A &&
                                      (await (0, g.Oy)(t.id, {
                                          questContent: r,
                                          questContentCTA: s,
                                          questContentPosition: l,
                                          questContentRowIndex: i,
                                          sourceQuestContent: c,
                                      }),
                                      v());
                        },
                    }
                );
            case _.F3.ACCEPTED:
            case _.F3.IN_PROGRESS:
                if (f && u)
                    return {
                        text: N.intl.string(N.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, k.se)(
                                { quest: t },
                                {
                                    content: r,
                                    ctaContent: x.Cy.CONNECT_CONSOLE,
                                    position: l,
                                    rowIndex: i,
                                    impressionId: E,
                                    sourceQuestContent: c,
                                },
                            ),
                    };
                if ((0, q.K$)(t))
                    return {
                        text: N.intl.string(N.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, I.Fy)(t);
                        },
                    };
                if (a)
                    return {
                        text: (0, R.WM)(C),
                        tooltipText: N.intl.string(N.t.hsbwjv),
                        onClick: () =>
                            (0, I.d5)({
                                quest: t,
                                questContent: r,
                                sourceQuestContent: c,
                                sourceQuestContentCTA: x.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (A) {
                    let { text: e } = D(t);
                    return {
                        text: e,
                        tooltipText: N.intl.string(N.t.hsbwjv),
                        onClick: () => {
                            v();
                        },
                    };
                }
                return { text: N.intl.string(N.t.cfY4PE), tooltipText: N.intl.string(N.t.hsbwjv), onClick: null };
            case _.F3.COMPLETED:
                return { text: N.intl.string(N.t.cfY4PE), tooltipText: null, onClick: d };
            case _.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: d,
                    text: (0, O.r7)(t.config) ? N.intl.string(N.t.bAGFz3) : N.intl.string(N.t.vTgCWx),
                };
        }
    }, [n, a, f, u, d, t, r, l, i, E, C, o, v, c, A]);
}
function V() {
    let { enableNewRequestBehavior: e } = m.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, y.A)(T.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, i.bG)(
            [A.A],
            () =>
                A.A.questDeliveryOverride ??
                (0, L.t6)(A.A.quests, A.A.questToDeliverForPlacement, T.yW.DESKTOP_ACCOUNT_PANEL_AREA) ??
                null,
        );
    return e ? t : n;
}
function j(e) {
    let { quest: t } = e,
        n = (0, p.s)(),
        r = (0, _.LS)(t),
        { premiumSubscription: s } = (0, i.cf)([v.A], () => ({ premiumSubscription: v.A.getPremiumSubscription() })),
        l = (0, i.bG)([A.A], () => null != A.A.questDeliveryOverride);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    if ((0, O.K9)(t.config) && s?.isPurchasedExternally)
        return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let u = t.userStatus?.claimedAt != null,
        a = !l && null != t.userStatus && (0, L.gO)(t.userStatus, T.uF.QUEST_BAR);
    return u
        ? { isQuestBarVisible: !1, reason: "quest_claimed" }
        : r
          ? { isQuestBarVisible: !1, reason: "quest_expired" }
          : n
            ? a
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
            : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
}
function G() {
    let { isQuestBarVisible: e } = j({ quest: V() }),
        { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, i.cf)([A.A], () => ({
            lastFetchedCurrentQuests: A.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
        }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
}
let B = { leading: !0, trailing: !1 };
function W(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, f.I)(
        s.useCallback(() => {
            t && ((0, b.Xm)(n, r), (0, o.P0)((0, c.o)(N.intl.string(N.t["+5kSoW"]), d.Ck.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        B,
    );
}
