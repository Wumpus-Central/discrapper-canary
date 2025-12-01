n.d(t, {
    DH: () => L,
    Ks: () => x,
    Ws: () => M,
    g2: () => R,
    hf: () => P,
    k3: () => w,
    qN: () => j,
    yc: () => U,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(666917),
    o = n(442837),
    s = n(481060),
    l = n(638730);
n(594190);
var c = n(594174),
    u = n(78839),
    d = n(22095),
    f = n(617136),
    p = n(915750),
    _ = n(313481),
    m = n(616022),
    h = n(49436),
    g = n(509212),
    E = n(704161),
    b = n(200872),
    y = n(787695),
    O = n(111131),
    v = n(725096),
    S = n(115179),
    I = n(542347),
    T = n(300917),
    A = n(110560),
    C = n(324805),
    N = n(388032);
function P(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        u = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        d = null == l ? void 0 : l.verified,
        p = (0, f.O5)();
    return i.useCallback(() => {
        null != t &&
            (p({
                questId: t.id,
                questContent: n,
                questContentCTA: f.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: s,
            }),
            (0, S.xN)(t.config) && !d
                ? (0, T.B)()
                : u
                  ? (0, S.Bg)(t.config)
                      ? (0, A.openQuestsNitroRewardModal)(t, n)
                      : (0, S.Xv)(t.config)
                        ? (0, A.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, S.vQ)(t.config)
                          ? (0, A.openQuestInGameRewardModal)(t, n, s)
                          : (0, S.xN)(t.config)
                            ? (0, A.openQuestOrbsRewardModal)(t, n, s)
                            : (0, A.openQuestsRewardCodeModal)({
                                  quest: t,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, T.B)());
    }, [t, p, n, r, a, u, d, s]);
}
let R = (e) => {
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
    w = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, _.KX)(),
            o = (0, f.O5)(),
            s = (r) => {
                var i;
                let s = r.target;
                (null == s || null == (i = s.tagName) ? void 0 : i.toLowerCase()) === "a" &&
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            s.getAttribute("href") === a
                                ? f.jZ.HOW_TO_HELP_ARTICLE_XBOX
                                : f.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", {
            onClick: s,
            children: i,
        });
    };
function D(e) {
    return e.config.features.includes(C.S7.START_QUEST_CTA)
        ? (0, g.pO)(e)
            ? e.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: N.intl.string(N.t["+qoymD"]),
                      questContentCTA: f.jZ.START_QUEST,
                  }
                : {
                      text: N.intl.string(N.t["Ie9++s"]),
                      questContentCTA: f.jZ.START_QUEST,
                  }
            : {
                  text: N.intl.string(N.t["hRIVy+"]),
                  questContentCTA: f.jZ.START_QUEST,
              }
        : {
              text: N.intl.string(N.t.l7E81v),
              questContentCTA: f.jZ.ACCEPT_QUEST,
          };
}
function x(e) {
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
            sourceQuestContent: m,
        } = e,
        h = P({
            quest: n,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            sourceQuestContent: m,
        }),
        E = (0, _._s)({ quest: n }),
        b = (0, _.Rf)(n),
        y = null == (t = (0, p.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: v } = (0, _.zB)(n),
        T = (0, g.Rt)(n),
        R = i.useMemo(() => n.config.features.includes(C.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
    return i.useMemo(() => {
        if (!R && (0, g.HJ)(n) && r !== _.OH.COMPLETED && r !== _.OH.CLAIMED) {
            let e = N.intl.string(N.t.BkZhUI);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case _.OH.UNACCEPTED:
                let e = N.intl.string(N.t.kUQLMJ),
                    t = f.jZ.ACCEPT_QUEST;
                return (
                    c && ((e = N.intl.string(N.t.umdNin)), (t = f.jZ.START_QUEST)),
                    (u || (0, g.pO)(n)) && ({ text: e, questContentCTA: t } = D(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, g.HJ)(n)) {
                                await (0, d.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: m,
                                }),
                                    (0, A.openPushToPhoneModal)(n);
                                return;
                            }
                            c ||
                                T ||
                                (0, d.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: m,
                                }),
                                c
                                    ? (0, O.R)(C.dr.QUEST_HOME_DESKTOP)
                                        ? await (0, A.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                              questContent: a,
                                              questContentCTA: t,
                                              sourceQuestContent: m,
                                              sourceQuestContentCTA: f.jZ.ACCEPT_QUEST,
                                              questContentPosition: o,
                                              questContentRowIndex: s,
                                          })
                                        : ((0, d.AH)(n.id, {
                                              questContent: a,
                                              questContentCTA: t,
                                              questContentPosition: o,
                                              questContentRowIndex: s,
                                              sourceQuestContent: m,
                                          }),
                                          (0, A.openVideoQuestModal)({
                                              quest: n,
                                              questContent: a,
                                              sourceQuestContent: m,
                                              sourceQuestContentCTA: f.jZ.ACCEPT_QUEST,
                                          }))
                                    : T &&
                                      ((0, O.R)(C.dr.QUEST_HOME_DESKTOP)
                                          ? await (0, d.AH)(n.id, {
                                                questContent: a,
                                                questContentCTA: t,
                                                questContentPosition: o,
                                                questContentRowIndex: s,
                                                sourceQuestContent: m,
                                            })
                                          : (0, d.AH)(n.id, {
                                                questContent: a,
                                                questContentCTA: t,
                                                questContentPosition: o,
                                                questContentRowIndex: s,
                                                sourceQuestContent: m,
                                            }),
                                      v());
                        },
                    }
                );
            case _.OH.ACCEPTED:
            case _.OH.IN_PROGRESS:
                if (E && l)
                    return {
                        text: N.intl.string(N.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, g.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: f.jZ.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: s,
                                    impressionId: y,
                                    sourceQuestContent: m,
                                },
                            ),
                    };
                if (R && (0, g.HJ)(n))
                    return {
                        text: N.intl.string(N.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, A.openPushToPhoneModal)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, I.F9)(b),
                        tooltipText: N.intl.string(N.t.hsbwjv),
                        onClick: () =>
                            (0, A.openVideoQuestModal)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: m,
                                sourceQuestContentCTA: f.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (T) {
                    let { text: e } = D(n);
                    return {
                        text: e,
                        tooltipText: N.intl.string(N.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(C.S7.START_QUEST_CTA) && v();
                        },
                    };
                }
                return {
                    text: N.intl.string(N.t.cfY4PE),
                    tooltipText: N.intl.string(N.t.hsbwjv),
                    onClick: null,
                };
            case _.OH.COMPLETED:
                return {
                    text: N.intl.string(N.t.cfY4PE),
                    tooltipText: null,
                    onClick: h,
                };
            case _.OH.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: h,
                    text: (0, S.wj)(n.config) ? N.intl.string(N.t.bAGFz3) : N.intl.string(N.t.vTgCWx),
                };
        }
    }, [r, c, E, l, h, n, a, o, s, y, b, u, v, m, R, T]);
}
function L() {
    let { enableNewRequestBehavior: e } = E.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, v.Z)(h.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
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
function j(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, y.Z)({ location: n }),
        a = (0, _.tP)(r),
        s = (0, b.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([u.Z], () => ({
            premiumSubscription: u.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: u.Z.hasFetchedSubscriptions(),
        })),
        d = (0, o.e7)([m.Z], () => null != m.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, S.Bg)(r.config)) {
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
        p = !d && null != r.userStatus && (0, g.zE)(r.userStatus, h.jn.QUEST_BAR);
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
function M(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = j({
            location: t,
            quest: L(),
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
let k = {
    leading: !0,
    trailing: !1,
};
function U(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.h)(
        i.useCallback(() => {
            t &&
                ((0, g.f2)(n, r),
                (0, s.showToast)((0, s.createToast)(N.intl.string(N.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        k,
    );
}
