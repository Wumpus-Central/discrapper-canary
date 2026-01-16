n.d(t, {
    DH: () => k,
    Ks: () => M,
    Ws: () => G,
    g2: () => x,
    hf: () => D,
    k3: () => L,
    qN: () => U,
    yc: () => F,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(81239),
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
    h = n(616022),
    m = n(49436),
    g = n(704161),
    E = n(787695),
    b = n(968843),
    y = n(725096),
    O = n(304696),
    v = n(862657),
    S = n(387745),
    I = n(115179),
    T = n(254579),
    C = n(283689),
    A = n(542347),
    N = n(300917),
    P = n(110560),
    w = n(324805),
    R = n(388032);
function D(e) {
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
                ? (0, N.B)()
                : d
                  ? (0, I.Bg)(t.config)
                      ? (0, c.$)()
                      : (0, I.Xv)(t.config)
                        ? (0, P.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, I.vQ)(t.config)
                          ? (0, P.openQuestInGameRewardModal)(t, n, s)
                          : (0, I.xN)(t.config)
                            ? (0, P.openQuestOrbsRewardModal)(t, n, s)
                            : (0, P.openQuestsRewardCodeModal)({
                                  quest: t,
                                  sourceQuestContent: s,
                              })
                  : (0, N.B)());
    }, [t, _, n, r, a, d, f, s]);
}
let x = (e) => {
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
    L = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, b.KX)(),
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
function j(e) {
    return e.config.features.includes(w.S7.START_QUEST_CTA)
        ? (0, T.pO)(e)
            ? e.config.features.includes(w.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: R.intl.string(R.t["+qoymD"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
                : {
                      text: R.intl.string(R.t["Ie9++s"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
            : {
                  text: R.intl.string(R.t["hRIVy+"]),
                  questContentCTA: p.jZ.START_QUEST,
              }
        : {
              text: R.intl.string(R.t.l7E81v),
              questContentCTA: p.jZ.ACCEPT_QUEST,
          };
}
function M(e) {
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
        h = D({
            quest: n,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            sourceQuestContent: d,
        }),
        m = (0, b._s)({ quest: n }),
        g = (0, b.Rf)(n),
        E = null == (t = (0, _.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: y } = (0, b.zB)(n),
        O = (0, C.Rt)(n);
    return i.useMemo(() => {
        switch (r) {
            case b.OH.UNACCEPTED:
                let e = R.intl.string(R.t.kUQLMJ),
                    t = p.jZ.ACCEPT_QUEST;
                return (
                    c && ((e = R.intl.string(R.t.umdNin)), (t = p.jZ.START_QUEST)),
                    (u || (0, T.pO)(n)) && ({ text: e, questContentCTA: t } = j(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, T.HJ)(n)) {
                                await (0, f.AH)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: d,
                                }),
                                    (0, P.openPushToPhoneModal)(n);
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
                                    ? await (0, P.enrollAndStartVideoQuestWithErrorHandling)(n, {
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
                                      y());
                        },
                    }
                );
            case b.OH.ACCEPTED:
            case b.OH.IN_PROGRESS:
                if (m && l)
                    return {
                        text: R.intl.string(R.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, S.gI)(
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
                if ((0, T.HJ)(n))
                    return {
                        text: R.intl.string(R.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, P.openPushToPhoneModal)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, A.F9)(g),
                        tooltipText: R.intl.string(R.t.hsbwjv),
                        onClick: () =>
                            (0, P.openVideoQuestModal)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: d,
                                sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (O) {
                    let { text: e } = j(n);
                    return {
                        text: e,
                        tooltipText: R.intl.string(R.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(w.S7.START_QUEST_CTA) && y();
                        },
                    };
                }
                return {
                    text: R.intl.string(R.t.cfY4PE),
                    tooltipText: R.intl.string(R.t.hsbwjv),
                    onClick: null,
                };
            case b.OH.COMPLETED:
                return {
                    text: R.intl.string(R.t.cfY4PE),
                    tooltipText: null,
                    onClick: h,
                };
            case b.OH.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: h,
                    text: (0, I.wj)(n.config) ? R.intl.string(R.t.bAGFz3) : R.intl.string(R.t.vTgCWx),
                };
        }
    }, [r, c, m, l, h, n, a, o, s, E, g, u, y, d, O]);
}
function k() {
    let { enableNewRequestBehavior: e } = g.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, y.Z)(m.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.e7)([h.Z], () => {
            var e, t;
            return null !=
                (t =
                    null != (e = h.Z.questDeliveryOverride)
                        ? e
                        : (0, v.PM)(h.Z.quests, h.Z.questToDeliverForPlacement, m.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
                ? t
                : null;
        });
    return e ? t : n;
}
function U(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, E.Z)({ location: n }),
        a = (0, b.tP)(r),
        { premiumSubscription: s } = (0, o.cj)([d.Z], () => ({ premiumSubscription: d.Z.getPremiumSubscription() })),
        l = (0, o.e7)([h.Z], () => null != h.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, I.Bg)(r.config) && (null == s ? void 0 : s.isPurchasedExternally))
        return {
            isQuestBarVisible: !1,
            reason: "premium_subscription_is_purchased_externally",
        };
    let c = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        u = !l && null != r.userStatus && (0, v.zE)(r.userStatus, m.jn.QUEST_BAR);
    return c
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
            ? u
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
function G(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = U({
            location: t,
            quest: k(),
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
let Z = {
    leading: !0,
    trailing: !1,
};
function F(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.h)(
        i.useCallback(() => {
            t &&
                ((0, O.f2)(n, r),
                (0, s.showToast)((0, s.createToast)(R.intl.string(R.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        Z,
    );
}
