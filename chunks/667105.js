n.d(t, {
    DH: () => V,
    Ks: () => F,
    Ws: () => Y,
    g2: () => G,
    hf: () => U,
    k3: () => B,
    qN: () => H,
    yc: () => K,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(790519),
    o = n(442837),
    s = n(481060),
    l = n(638730),
    c = n(100527),
    u = n(335131);
n(594190);
var d = n(98278),
    f = n(507808),
    _ = n(594174),
    p = n(78839),
    h = n(22095),
    m = n(617136),
    g = n(915750),
    E = n(509212),
    b = n(113434),
    y = n(569984),
    O = n(497505),
    v = n(704161),
    I = n(200872),
    T = n(977156),
    S = n(323811),
    A = n(111131),
    C = n(725096),
    N = n(110560),
    R = n(669041),
    P = n(46140),
    D = n(981631),
    w = n(215023),
    L = n(388032);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        c = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        u = null == l ? void 0 : l.verified,
        d = (0, m.O5)();
    return i.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: m.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: s,
            }),
            (0, E.xN)(t.config) && !u
                ? (0, R.B)()
                : c
                  ? (0, E.Bg)(t.config)
                      ? (0, N.openQuestsNitroRewardModal)(t, n)
                      : (0, E.Xv)(t.config)
                        ? (0, N.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, E.vQ)(t.config)
                          ? (0, N.openQuestInGameRewardModal)(t, n, s)
                          : (0, E.xN)(t.config)
                            ? (0, N.openQuestOrbsRewardModal)(t, n, s)
                            : (0, N.openQuestsRewardCodeModal)({
                                  quest: t,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, R.B)());
    }, [t, d, n, r, a, c, u, s]);
}
let G = (e) => {
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
    B = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, b.KX)(),
            o = (0, m.O5)(),
            s = (r) => {
                var i;
                let s = r.target;
                (null == s || null == (i = s.tagName) ? void 0 : i.toLowerCase()) === "a" &&
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            s.getAttribute("href") === a
                                ? m.jZ.HOW_TO_HELP_ARTICLE_XBOX
                                : m.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", {
            onClick: s,
            children: i,
        });
    };
function Z(e) {
    return e.config.features.includes(P.S7.START_QUEST_CTA)
        ? (0, E.pO)(e)
            ? e.config.features.includes(P.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: L.intl.string(L.t["+qoymD"]),
                      questContentCTA: m.jZ.START_QUEST,
                  }
                : {
                      text: L.intl.string(L.t["Ie9++s"]),
                      questContentCTA: m.jZ.START_QUEST,
                  }
            : {
                  text: L.intl.string(L.t["hRIVy+"]),
                  questContentCTA: m.jZ.START_QUEST,
              }
        : {
              text: L.intl.string(L.t.l7E81v),
              questContentCTA: m.jZ.ACCEPT_QUEST,
          };
}
function F(e) {
    var t;
    let {
            quest: n,
            progressState: r,
            isCollectibleQuest: a,
            questContent: o,
            questContentPosition: s,
            questContentRowIndex: l,
            inGiftInventory: _,
            isVideoQuest: p,
            inGameQuest: y,
            sourceQuestContent: O,
        } = e,
        v = U({
            quest: n,
            questContent: o,
            questContentPosition: s,
            questContentRowIndex: l,
            sourceQuestContent: O,
        }),
        I = (0, b._s)({ quest: n }),
        T = (0, b.Rf)(n),
        C = i.useCallback(() => {
            (0, d.$)();
        }, []),
        R = i.useCallback(() => {
            (0, f.Y)({
                pageType: D.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: D.jXE.QUEST_TILE_CTA,
                ctaObject: D.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, u.mK)({
                    tab: w.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.Z.QUEST_HOME_PAGE,
                });
        }, []),
        x = null == (t = (0, g.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: k } = (0, b.zB)(n),
        G = (0, E.Rt)(n),
        B = i.useMemo(() => n.config.features.includes(P.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
    return i.useMemo(() => {
        if (!B && (0, E.HJ)(n) && r !== b.OH.COMPLETED && r !== b.OH.CLAIMED) {
            let e = L.intl.string(L.t.BkZhUI);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case b.OH.UNACCEPTED:
                let e = L.intl.string(L.t.kUQLMJ),
                    t = m.jZ.ACCEPT_QUEST;
                return (
                    p && ((e = L.intl.string(L.t.umdNin)), (t = m.jZ.START_QUEST)),
                    (y || (0, E.pO)(n)) && ({ text: e, questContentCTA: t } = Z(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, E.HJ)(n)) {
                                await (0, h.AH)(n.id, {
                                    questContent: o,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: O,
                                }),
                                    (0, N.openPushToPhoneModal)(n);
                                return;
                            }
                            p ||
                                G ||
                                (0, h.AH)(n.id, {
                                    questContent: o,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: l,
                                    sourceQuestContent: O,
                                }),
                                p
                                    ? (0, A.R)(P.dr.QUEST_HOME_DESKTOP)
                                        ? await (0, N.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                              questContent: o,
                                              questContentCTA: t,
                                              sourceQuestContent: O,
                                              sourceQuestContentCTA: m.jZ.ACCEPT_QUEST,
                                              questContentPosition: s,
                                              questContentRowIndex: l,
                                          })
                                        : ((0, h.AH)(n.id, {
                                              questContent: o,
                                              questContentCTA: t,
                                              questContentPosition: s,
                                              questContentRowIndex: l,
                                              sourceQuestContent: O,
                                          }),
                                          (0, N.openVideoQuestModal)({
                                              quest: n,
                                              questContent: o,
                                              sourceQuestContent: O,
                                              sourceQuestContentCTA: m.jZ.ACCEPT_QUEST,
                                          }))
                                    : G &&
                                      ((0, A.R)(P.dr.QUEST_HOME_DESKTOP)
                                          ? await (0, h.AH)(n.id, {
                                                questContent: o,
                                                questContentCTA: t,
                                                questContentPosition: s,
                                                questContentRowIndex: l,
                                                sourceQuestContent: O,
                                            })
                                          : (0, h.AH)(n.id, {
                                                questContent: o,
                                                questContentCTA: t,
                                                questContentPosition: s,
                                                questContentRowIndex: l,
                                                sourceQuestContent: O,
                                            }),
                                      k());
                        },
                    }
                );
            case b.OH.ACCEPTED:
            case b.OH.IN_PROGRESS:
                if (I && _)
                    return {
                        text: L.intl.string(L.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, E.gI)(
                                { quest: n },
                                {
                                    content: o,
                                    ctaContent: m.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: l,
                                    impressionId: x,
                                    sourceQuestContent: O,
                                },
                            ),
                    };
                if (B && (0, E.HJ)(n))
                    return {
                        text: L.intl.string(L.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, N.openPushToPhoneModal)(n);
                        },
                    };
                if (p)
                    return {
                        text: (0, E.F9)(T),
                        tooltipText: L.intl.string(L.t.hsbwjv),
                        onClick: () =>
                            (0, N.openVideoQuestModal)({
                                quest: n,
                                questContent: o,
                                sourceQuestContent: O,
                                sourceQuestContentCTA: m.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (G) {
                    let { text: e } = Z(n);
                    return {
                        text: e,
                        tooltipText: L.intl.string(L.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(P.S7.START_QUEST_CTA) && k();
                        },
                    };
                }
                return {
                    text: L.intl.string(L.t.cfY4PE),
                    tooltipText: L.intl.string(L.t.hsbwjv),
                    onClick: null,
                };
            case b.OH.COMPLETED:
                return {
                    text: L.intl.string(L.t.cfY4PE),
                    tooltipText: null,
                    onClick: v,
                };
            case b.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: v,
                };
                if ((0, S.i)("useCtaConfig"))
                    return {
                        tooltipText: null,
                        onClick: v,
                        text: (0, E.wj)(n.config) ? L.intl.string(L.t.bAGFz3) : L.intl.string(L.t.vTgCWx),
                    };
                if (a) return j(M({}, i), { text: L.intl.string(L.t.MAS7uK) });
                if ((0, E.vQ)(n.config)) return j(M({}, i), { text: L.intl.string(L.t.vTgCWx) });
                if ((0, E.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: C,
                        text: L.intl.string(L.t["eQX+gg"]),
                    };
                else if ((0, E.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: L.intl.string(L.t.WYchde),
                        onClick: R,
                    };
                return j(M({}, i), { text: L.intl.string(L.t.bAGFz3) });
        }
    }, [r, p, I, _, v, a, n, o, s, l, x, T, C, R, y, k, O, B, G]);
}
function V() {
    let { enableNewRequestBehavior: e } = v.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, C.Z)(O.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.e7)([y.Z], () => {
            var e, t;
            return null !=
                (t =
                    null != (e = y.Z.questDeliveryOverride)
                        ? e
                        : (0, E.PM)(y.Z.quests, y.Z.questToDeliverForPlacement, O.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
                ? t
                : null;
        });
    return e ? t : n;
}
function H(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, T.Z)({ location: n }),
        a = (0, b.tP)(r),
        s = (0, I.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([p.Z], () => ({
            premiumSubscription: p.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: p.Z.hasFetchedSubscriptions(),
        })),
        u = (0, o.e7)([y.Z], () => null != y.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, E.Bg)(r.config)) {
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
    let d = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        f = !u && null != r.userStatus && (0, E.zE)(r.userStatus, O.jn.QUEST_BAR);
    return d
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
            ? f
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
function Y(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = H({
            location: t,
            quest: V(),
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([y.Z], () => ({
            lastFetchedCurrentQuests: y.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: y.Z.lastFetchedQuestToDeliver,
        }));
    return {
        isQuestBarEmpty: !n,
        hasLoadedQuestBar: 0 !== r && 0 !== i,
    };
}
let W = {
    leading: !0,
    trailing: !1,
};
function K(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.h)(
        i.useCallback(() => {
            t &&
                ((0, E.f2)(n, r),
                (0, s.showToast)((0, s.createToast)(L.intl.string(L.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        W,
    );
}
