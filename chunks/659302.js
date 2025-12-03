n.d(t, {
    DH: () => j,
    Ks: () => L,
    Ws: () => k,
    g2: () => w,
    hf: () => R,
    k3: () => D,
    qN: () => M,
    yc: () => G,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(205120),
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
    g = n(509212),
    E = n(704161),
    b = n(200872),
    y = n(787695),
    O = n(111131),
    v = n(968843),
    S = n(725096),
    I = n(115179),
    T = n(542347),
    A = n(300917),
    C = n(110560),
    N = n(324805),
    P = n(388032);
function R(e) {
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
            (0, I.xN)(t.config) && !f
                ? (0, A.B)()
                : d
                  ? (0, I.Bg)(t.config)
                      ? (0, c.$)()
                      : (0, I.Xv)(t.config)
                        ? (0, C.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, I.vQ)(t.config)
                          ? (0, C.openQuestInGameRewardModal)(t, n, s)
                          : (0, I.xN)(t.config)
                            ? (0, C.openQuestOrbsRewardModal)(t, n, s)
                            : (0, C.openQuestsRewardCodeModal)({
                                  quest: t,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, A.B)());
    }, [t, _, n, r, a, d, f, s]);
}
let w = (e) => {
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
    D = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, v.KX)(),
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
function x(e) {
    return e.config.features.includes(N.S7.START_QUEST_CTA)
        ? (0, g.pO)(e)
            ? e.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: P.intl.string(P.t["+qoymD"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
                : {
                      text: P.intl.string(P.t["Ie9++s"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
            : {
                  text: P.intl.string(P.t["hRIVy+"]),
                  questContentCTA: p.jZ.START_QUEST,
              }
        : {
              text: P.intl.string(P.t.l7E81v),
              questContentCTA: p.jZ.ACCEPT_QUEST,
          };
}
function L(e) {
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
        m = R({
            quest: n,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            sourceQuestContent: d,
        }),
        h = (0, v._s)({ quest: n }),
        E = (0, v.Rf)(n),
        b = null == (t = (0, _.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: y } = (0, v.zB)(n),
        S = (0, g.Rt)(n),
        A = i.useMemo(() => n.config.features.includes(N.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
    return i.useMemo(() => {
        if (!A && (0, g.HJ)(n) && r !== v.OH.COMPLETED && r !== v.OH.CLAIMED) {
            let e = P.intl.string(P.t.BkZhUI);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case v.OH.UNACCEPTED:
                let e = P.intl.string(P.t.kUQLMJ),
                    t = p.jZ.ACCEPT_QUEST;
                return (
                    c && ((e = P.intl.string(P.t.umdNin)), (t = p.jZ.START_QUEST)),
                    (u || (0, g.pO)(n)) && ({ text: e, questContentCTA: t } = x(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, g.HJ)(n)) {
                                await (0, f.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: d,
                                }),
                                    (0, C.openPushToPhoneModal)(n);
                                return;
                            }
                            c ||
                                S ||
                                (0, f.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: d,
                                }),
                                c
                                    ? (0, O.R)(N.dr.QUEST_HOME_DESKTOP)
                                        ? await (0, C.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                              questContent: a,
                                              questContentCTA: t,
                                              sourceQuestContent: d,
                                              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                              questContentPosition: o,
                                              questContentRowIndex: s,
                                          })
                                        : ((0, f.AH)(n.id, {
                                              questContent: a,
                                              questContentCTA: t,
                                              questContentPosition: o,
                                              questContentRowIndex: s,
                                              sourceQuestContent: d,
                                          }),
                                          (0, C.openVideoQuestModal)({
                                              quest: n,
                                              questContent: a,
                                              sourceQuestContent: d,
                                              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                          }))
                                    : S &&
                                      ((0, O.R)(N.dr.QUEST_HOME_DESKTOP)
                                          ? await (0, f.AH)(n.id, {
                                                questContent: a,
                                                questContentCTA: t,
                                                questContentPosition: o,
                                                questContentRowIndex: s,
                                                sourceQuestContent: d,
                                            })
                                          : (0, f.AH)(n.id, {
                                                questContent: a,
                                                questContentCTA: t,
                                                questContentPosition: o,
                                                questContentRowIndex: s,
                                                sourceQuestContent: d,
                                            }),
                                      y());
                        },
                    }
                );
            case v.OH.ACCEPTED:
            case v.OH.IN_PROGRESS:
                if (h && l)
                    return {
                        text: P.intl.string(P.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, g.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: s,
                                    impressionId: b,
                                    sourceQuestContent: d,
                                },
                            ),
                    };
                if (A && (0, g.HJ)(n))
                    return {
                        text: P.intl.string(P.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, C.openPushToPhoneModal)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, T.F9)(E),
                        tooltipText: P.intl.string(P.t.hsbwjv),
                        onClick: () =>
                            (0, C.openVideoQuestModal)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: d,
                                sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (S) {
                    let { text: e } = x(n);
                    return {
                        text: e,
                        tooltipText: P.intl.string(P.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(N.S7.START_QUEST_CTA) && y();
                        },
                    };
                }
                return {
                    text: P.intl.string(P.t.cfY4PE),
                    tooltipText: P.intl.string(P.t.hsbwjv),
                    onClick: null,
                };
            case v.OH.COMPLETED:
                return {
                    text: P.intl.string(P.t.cfY4PE),
                    tooltipText: null,
                    onClick: m,
                };
            case v.OH.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: m,
                    text: (0, I.wj)(n.config) ? P.intl.string(P.t.bAGFz3) : P.intl.string(P.t.vTgCWx),
                };
        }
    }, [r, c, h, l, m, n, a, o, s, b, E, u, y, d, A, S]);
}
function j() {
    let { enableNewRequestBehavior: e } = E.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, S.Z)(h.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.e7)([m.Z], () => {
            var e, t;
            return null !=
                (t =
                    null != (e = m.Z.questDeliveryOverride)
                        ? e
                        : (0, g.PM)(m.Z.quests, m.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
                ? t
                : null;
        });
    return e ? t : n;
}
function M(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, y.Z)({ location: n }),
        a = (0, v.tP)(r),
        s = (0, b.b)({ location: n }),
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
    if ((0, I.Bg)(r.config)) {
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
        p = !u && null != r.userStatus && (0, g.zE)(r.userStatus, h.jn.QUEST_BAR);
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
function k(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = M({
            location: t,
            quest: j(),
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
let U = {
    leading: !0,
    trailing: !1,
};
function G(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.h)(
        i.useCallback(() => {
            t &&
                ((0, g.f2)(n, r),
                (0, s.showToast)((0, s.createToast)(P.intl.string(P.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        U,
    );
}
