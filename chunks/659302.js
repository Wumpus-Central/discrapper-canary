n.d(t, {
    DH: () => w,
    Ks: () => D,
    Ws: () => x,
    g2: () => N,
    hf: () => C,
    k3: () => R,
    qN: () => L,
    yc: () => k,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(790519),
    o = n(442837),
    s = n(481060),
    l = n(638730);
n(594190);
var c = n(594174),
    u = n(78839),
    d = n(22095),
    f = n(617136),
    _ = n(915750),
    p = n(313481),
    h = n(616022),
    m = n(49436),
    g = n(509212),
    E = n(704161),
    b = n(200872),
    y = n(787695),
    O = n(111131),
    v = n(725096),
    I = n(300917),
    T = n(110560),
    S = n(324805),
    A = n(388032);
function C(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        u = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        d = null == l ? void 0 : l.verified,
        _ = (0, f.O5)();
    return i.useCallback(() => {
        null != t &&
            (_({
                questId: t.id,
                questContent: n,
                questContentCTA: f.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: s,
            }),
            (0, g.xN)(t.config) && !d
                ? (0, I.B)()
                : u
                  ? (0, g.Bg)(t.config)
                      ? (0, T.openQuestsNitroRewardModal)(t, n)
                      : (0, g.Xv)(t.config)
                        ? (0, T.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, g.vQ)(t.config)
                          ? (0, T.openQuestInGameRewardModal)(t, n, s)
                          : (0, g.xN)(t.config)
                            ? (0, T.openQuestOrbsRewardModal)(t, n, s)
                            : (0, T.openQuestsRewardCodeModal)({
                                  quest: t,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, I.B)());
    }, [t, _, n, r, a, u, d, s]);
}
let N = (e) => {
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
    R = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, p.KX)(),
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
function P(e) {
    return e.config.features.includes(S.S7.START_QUEST_CTA)
        ? (0, g.pO)(e)
            ? e.config.features.includes(S.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: A.intl.string(A.t["+qoymD"]),
                      questContentCTA: f.jZ.START_QUEST,
                  }
                : {
                      text: A.intl.string(A.t["Ie9++s"]),
                      questContentCTA: f.jZ.START_QUEST,
                  }
            : {
                  text: A.intl.string(A.t["hRIVy+"]),
                  questContentCTA: f.jZ.START_QUEST,
              }
        : {
              text: A.intl.string(A.t.l7E81v),
              questContentCTA: f.jZ.ACCEPT_QUEST,
          };
}
function D(e) {
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
            sourceQuestContent: h,
        } = e,
        m = C({
            quest: n,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            sourceQuestContent: h,
        }),
        E = (0, p._s)({ quest: n }),
        b = (0, p.Rf)(n),
        y = null == (t = (0, _.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: v } = (0, p.zB)(n),
        I = (0, g.Rt)(n),
        N = i.useMemo(() => n.config.features.includes(S.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
    return i.useMemo(() => {
        if (!N && (0, g.HJ)(n) && r !== p.OH.COMPLETED && r !== p.OH.CLAIMED) {
            let e = A.intl.string(A.t.BkZhUI);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case p.OH.UNACCEPTED:
                let e = A.intl.string(A.t.kUQLMJ),
                    t = f.jZ.ACCEPT_QUEST;
                return (
                    c && ((e = A.intl.string(A.t.umdNin)), (t = f.jZ.START_QUEST)),
                    (u || (0, g.pO)(n)) && ({ text: e, questContentCTA: t } = P(n)),
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
                                    sourceQuestContent: h,
                                }),
                                    (0, T.openPushToPhoneModal)(n);
                                return;
                            }
                            c ||
                                I ||
                                (0, d.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: h,
                                }),
                                c
                                    ? (0, O.R)(S.dr.QUEST_HOME_DESKTOP)
                                        ? await (0, T.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                              questContent: a,
                                              questContentCTA: t,
                                              sourceQuestContent: h,
                                              sourceQuestContentCTA: f.jZ.ACCEPT_QUEST,
                                              questContentPosition: o,
                                              questContentRowIndex: s,
                                          })
                                        : ((0, d.AH)(n.id, {
                                              questContent: a,
                                              questContentCTA: t,
                                              questContentPosition: o,
                                              questContentRowIndex: s,
                                              sourceQuestContent: h,
                                          }),
                                          (0, T.openVideoQuestModal)({
                                              quest: n,
                                              questContent: a,
                                              sourceQuestContent: h,
                                              sourceQuestContentCTA: f.jZ.ACCEPT_QUEST,
                                          }))
                                    : I &&
                                      ((0, O.R)(S.dr.QUEST_HOME_DESKTOP)
                                          ? await (0, d.AH)(n.id, {
                                                questContent: a,
                                                questContentCTA: t,
                                                questContentPosition: o,
                                                questContentRowIndex: s,
                                                sourceQuestContent: h,
                                            })
                                          : (0, d.AH)(n.id, {
                                                questContent: a,
                                                questContentCTA: t,
                                                questContentPosition: o,
                                                questContentRowIndex: s,
                                                sourceQuestContent: h,
                                            }),
                                      v());
                        },
                    }
                );
            case p.OH.ACCEPTED:
            case p.OH.IN_PROGRESS:
                if (E && l)
                    return {
                        text: A.intl.string(A.t.Cfye4v),
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
                                    sourceQuestContent: h,
                                },
                            ),
                    };
                if (N && (0, g.HJ)(n))
                    return {
                        text: A.intl.string(A.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, T.openPushToPhoneModal)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, g.F9)(b),
                        tooltipText: A.intl.string(A.t.hsbwjv),
                        onClick: () =>
                            (0, T.openVideoQuestModal)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: h,
                                sourceQuestContentCTA: f.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (I) {
                    let { text: e } = P(n);
                    return {
                        text: e,
                        tooltipText: A.intl.string(A.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(S.S7.START_QUEST_CTA) && v();
                        },
                    };
                }
                return {
                    text: A.intl.string(A.t.cfY4PE),
                    tooltipText: A.intl.string(A.t.hsbwjv),
                    onClick: null,
                };
            case p.OH.COMPLETED:
                return {
                    text: A.intl.string(A.t.cfY4PE),
                    tooltipText: null,
                    onClick: m,
                };
            case p.OH.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: m,
                    text: (0, g.wj)(n.config) ? A.intl.string(A.t.bAGFz3) : A.intl.string(A.t.vTgCWx),
                };
        }
    }, [r, c, E, l, m, n, a, o, s, y, b, u, v, h, N, I]);
}
function w() {
    let { enableNewRequestBehavior: e } = E.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, v.Z)(m.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.e7)([h.Z], () => {
            var e, t;
            return null !=
                (t =
                    null != (e = h.Z.questDeliveryOverride)
                        ? e
                        : (0, g.PM)(h.Z.quests, h.Z.questToDeliverForPlacement, m.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
                ? t
                : null;
        });
    return e ? t : n;
}
function L(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, y.Z)({ location: n }),
        a = (0, p.tP)(r),
        s = (0, b.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([u.Z], () => ({
            premiumSubscription: u.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: u.Z.hasFetchedSubscriptions(),
        })),
        d = (0, o.e7)([h.Z], () => null != h.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, g.Bg)(r.config)) {
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
        _ = !d && null != r.userStatus && (0, g.zE)(r.userStatus, m.jn.QUEST_BAR);
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
            ? _
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
function x(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = L({
            location: t,
            quest: w(),
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([h.Z], () => ({
            lastFetchedCurrentQuests: h.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: h.Z.lastFetchedQuestToDeliver,
        }));
    return {
        isQuestBarEmpty: !n,
        hasLoadedQuestBar: 0 !== r && 0 !== i,
    };
}
let M = {
    leading: !0,
    trailing: !1,
};
function k(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.h)(
        i.useCallback(() => {
            t &&
                ((0, g.f2)(n, r),
                (0, s.showToast)((0, s.createToast)(A.intl.string(A.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        M,
    );
}
