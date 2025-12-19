n.d(t, {
    DH: () => U,
    Ks: () => k,
    Ws: () => Z,
    g2: () => L,
    hf: () => x,
    k3: () => j,
    qN: () => G,
    yc: () => B,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(620792),
    o = n(442837),
    s = n(481060),
    l = n(638730);
n(594190);
var c = n(98278),
    u = n(594174),
    d = n(78839),
    f = n(22095),
    p = n(617136),
    _ = n(915750),
    m = n(616022),
    h = n(49436),
    g = n(704161),
    E = n(200872),
    b = n(787695),
    y = n(968843),
    O = n(725096),
    v = n(304696),
    S = n(862657),
    I = n(387745),
    T = n(115179),
    C = n(254579),
    A = n(283689),
    N = n(542347),
    P = n(300917),
    R = n(110560),
    w = n(324805),
    D = n(388032);
function x(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        d = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        f = null == l ? void 0 : l.verified,
        _ = (0, p.O5)();
    return i.useCallback(() => {
        null != t &&
            (_({
                questId: t.id,
                questContent: n,
                questContentCTA: p.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: s,
            }),
            (0, T.xN)(t.config) && !f
                ? (0, P.B)()
                : d
                  ? (0, T.Bg)(t.config)
                      ? (0, c.$)()
                      : (0, T.Xv)(t.config)
                        ? (0, R.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, T.vQ)(t.config)
                          ? (0, R.openQuestInGameRewardModal)(t, n, s)
                          : (0, T.xN)(t.config)
                            ? (0, R.openQuestOrbsRewardModal)(t, n, s)
                            : (0, R.openQuestsRewardCodeModal)({
                                  quest: t,
                                  sourceQuestContent: s,
                              })
                  : (0, P.B)());
    }, [t, _, n, r, a, d, f, s]);
}
let L = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [o, l] = (0, s.q_F)(() => ({})),
            c = i.useRef(!1),
            u = (e) => {
                (c.current = !0),
                    l({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100,
                        },
                        loop: () => (null != e ? e : c.current),
                        immediate: t,
                    });
            },
            d = (0, a.animated)(s.DuK);
        return {
            render: () =>
                (0, r.jsx)(d, {
                    className: n,
                    style: t ? void 0 : o,
                    color: "currentColor",
                    size: "xs",
                }),
            startAnimation: u,
            stopAnimation: () => {
                c.current = !1;
            },
        };
    },
    j = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, y.KX)(),
            o = (0, p.O5)(),
            s = (r) => {
                var i;
                let s = r.target;
                (null == s || null == (i = s.tagName) ? void 0 : i.toLowerCase()) === "a" &&
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            s.getAttribute("href") === a
                                ? p.jZ.HOW_TO_HELP_ARTICLE_XBOX
                                : p.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", {
            onClick: s,
            children: i,
        });
    };
function M(e) {
    return e.config.features.includes(w.S7.START_QUEST_CTA)
        ? (0, C.pO)(e)
            ? e.config.features.includes(w.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: D.intl.string(D.t["+qoymD"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
                : {
                      text: D.intl.string(D.t["Ie9++s"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
            : {
                  text: D.intl.string(D.t["hRIVy+"]),
                  questContentCTA: p.jZ.START_QUEST,
              }
        : {
              text: D.intl.string(D.t.l7E81v),
              questContentCTA: p.jZ.ACCEPT_QUEST,
          };
}
function k(e) {
    var t;
    let {
            quest: n,
            progressState: r,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            inGiftInventory: l,
            isVideoQuest: c,
            inGameQuest: u,
            sourceQuestContent: d,
        } = e,
        m = x({
            quest: n,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            sourceQuestContent: d,
        }),
        h = (0, y._s)({ quest: n }),
        g = (0, y.Rf)(n),
        E = null == (t = (0, _.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: b } = (0, y.zB)(n),
        O = (0, A.Rt)(n);
    return i.useMemo(() => {
        switch (r) {
            case y.OH.UNACCEPTED:
                let e = D.intl.string(D.t.kUQLMJ),
                    t = p.jZ.ACCEPT_QUEST;
                return (
                    c && ((e = D.intl.string(D.t.umdNin)), (t = p.jZ.START_QUEST)),
                    (u || (0, C.pO)(n)) && ({ text: e, questContentCTA: t } = M(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, C.HJ)(n)) {
                                await (0, f.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: d,
                                }),
                                    (0, R.openPushToPhoneModal)(n);
                                return;
                            }
                            c ||
                                O ||
                                (0, f.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: d,
                                }),
                                c
                                    ? await (0, R.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                          questContent: a,
                                          questContentCTA: t,
                                          sourceQuestContent: d,
                                          sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                          questContentPosition: o,
                                          questContentRowIndex: s,
                                      })
                                    : O &&
                                      (await (0, f.AH)(n.id, {
                                          questContent: a,
                                          questContentCTA: t,
                                          questContentPosition: o,
                                          questContentRowIndex: s,
                                          sourceQuestContent: d,
                                      }),
                                      b());
                        },
                    }
                );
            case y.OH.ACCEPTED:
            case y.OH.IN_PROGRESS:
                if (h && l)
                    return {
                        text: D.intl.string(D.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, I.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: s,
                                    impressionId: E,
                                    sourceQuestContent: d,
                                },
                            ),
                    };
                if ((0, C.HJ)(n))
                    return {
                        text: D.intl.string(D.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, R.openPushToPhoneModal)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, N.F9)(g),
                        tooltipText: D.intl.string(D.t.hsbwjv),
                        onClick: () =>
                            (0, R.openVideoQuestModal)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: d,
                                sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (O) {
                    let { text: e } = M(n);
                    return {
                        text: e,
                        tooltipText: D.intl.string(D.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(w.S7.START_QUEST_CTA) && b();
                        },
                    };
                }
                return {
                    text: D.intl.string(D.t.cfY4PE),
                    tooltipText: D.intl.string(D.t.hsbwjv),
                    onClick: null,
                };
            case y.OH.COMPLETED:
                return {
                    text: D.intl.string(D.t.cfY4PE),
                    tooltipText: null,
                    onClick: m,
                };
            case y.OH.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: m,
                    text: (0, T.wj)(n.config) ? D.intl.string(D.t.bAGFz3) : D.intl.string(D.t.vTgCWx),
                };
        }
    }, [r, c, h, l, m, n, a, o, s, E, g, u, b, d, O]);
}
function U() {
    let { enableNewRequestBehavior: e } = g.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, O.Z)(h.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.e7)([m.Z], () => {
            var e, t;
            return null !=
                (t =
                    null != (e = m.Z.questDeliveryOverride)
                        ? e
                        : (0, S.PM)(m.Z.quests, m.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
                ? t
                : null;
        });
    return e ? t : n;
}
function G(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, b.Z)({ location: n }),
        a = (0, y.tP)(r),
        s = (0, E.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([d.Z], () => ({
            premiumSubscription: d.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: d.Z.hasFetchedSubscriptions(),
        })),
        u = (0, o.e7)([m.Z], () => null != m.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, T.Bg)(r.config)) {
        if (!s && !c)
            return {
                isQuestBarVisible: !1,
                reason: "premium_subscription_not_fetched",
            };
        if (null == l ? void 0 : l.isPurchasedExternally)
            return {
                isQuestBarVisible: !1,
                reason: "premium_subscription_is_purchased_externally",
            };
    }
    let f = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        p = !u && null != r.userStatus && (0, S.zE)(r.userStatus, h.jn.QUEST_BAR);
    return f
        ? {
              isQuestBarVisible: !1,
              reason: "quest_claimed",
          }
        : a
          ? {
                isQuestBarVisible: !1,
                reason: "quest_expired",
            }
          : i
            ? p
                ? {
                      isQuestBarVisible: !1,
                      reason: "quest_dismissed",
                  }
                : {
                      isQuestBarVisible: !0,
                      reason: "quest_bar_visible",
                  }
            : {
                  isQuestBarVisible: !1,
                  reason: "quest_not_eligible_for_quests",
              };
}
function Z(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = G({
            location: t,
            quest: U(),
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([m.Z], () => ({
            lastFetchedCurrentQuests: m.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: m.Z.lastFetchedQuestToDeliver,
        }));
    return {
        isQuestBarEmpty: !n,
        hasLoadedQuestBar: 0 !== r && 0 !== i,
    };
}
let F = {
    leading: !0,
    trailing: !1,
};
function B(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.h)(
        i.useCallback(() => {
            t &&
                ((0, v.f2)(n, r),
                (0, s.showToast)((0, s.createToast)(D.intl.string(D.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        F,
    );
}
