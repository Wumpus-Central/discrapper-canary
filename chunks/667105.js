n.d(t, {
    DH: () => F,
    Ks: () => Z,
    Ws: () => H,
    g2: () => U,
    hf: () => j,
    k3: () => G,
    qN: () => V,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(13941),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(335131);
n(594190);
var u = n(98278),
    d = n(507808),
    f = n(594174),
    _ = n(78839),
    p = n(617136),
    h = n(915750),
    m = n(509212),
    g = n(272008),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(704161),
    v = n(200872),
    I = n(977156),
    T = n(323811),
    S = n(111131),
    A = n(725096),
    C = n(110560),
    N = n(669041),
    R = n(46140),
    P = n(981631),
    D = n(215023),
    w = n(388032);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        c = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        u = null == l ? void 0 : l.verified,
        d = (0, p.O5)();
    return i.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: p.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: s,
            }),
            (0, m.xN)(t.config) && !u
                ? (0, N.B)()
                : c
                  ? (0, m.Bg)(t.config)
                      ? (0, C.openQuestsNitroRewardModal)(t, n)
                      : (0, m.Xv)(t.config)
                        ? (0, C.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, m.vQ)(t.config)
                          ? (0, C.openQuestInGameRewardModal)(t, n, s)
                          : (0, m.xN)(t.config)
                            ? (0, C.openQuestOrbsRewardModal)(t, n, s)
                            : (0, C.openQuestsRewardCodeModal)({
                                  quest: t,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, N.B)());
    }, [t, d, n, r, a, c, u, s]);
}
let U = (e) => {
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
    G = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, E.KX)(),
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
function B(e) {
    return e.config.features.includes(R.S7.START_QUEST_CTA)
        ? (0, m.pO)(e)
            ? e.config.features.includes(R.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: w.intl.string(w.t["+qoymD"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
                : {
                      text: w.intl.string(w.t["Ie9++s"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
            : {
                  text: w.intl.string(w.t["hRIVy+"]),
                  questContentCTA: p.jZ.START_QUEST,
              }
        : {
              text: w.intl.string(w.t.l7E81v),
              questContentCTA: p.jZ.ACCEPT_QUEST,
          };
}
function Z(e) {
    var t;
    let {
            quest: n,
            progressState: r,
            isCollectibleQuest: a,
            questContent: o,
            questContentPosition: s,
            questContentRowIndex: f,
            inGiftInventory: _,
            isVideoQuest: b,
            inGameQuest: y,
            sourceQuestContent: O,
        } = e,
        v = j({
            quest: n,
            questContent: o,
            questContentPosition: s,
            questContentRowIndex: f,
            sourceQuestContent: O,
        }),
        I = (0, E._s)({ quest: n }),
        A = (0, E.Rf)(n),
        N = i.useCallback(() => {
            (0, u.$)();
        }, []),
        L = i.useCallback(() => {
            (0, d.Y)({
                pageType: P.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: P.jXE.QUEST_TILE_CTA,
                ctaObject: P.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, c.mK)({
                    tab: D.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: l.Z.QUEST_HOME_PAGE,
                });
        }, []),
        M = null == (t = (0, h.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: U } = (0, E.zB)(n),
        G = (0, m.Rt)(n),
        Z = i.useMemo(() => n.config.features.includes(R.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
    return i.useMemo(() => {
        if (!Z && (0, m.HJ)(n) && r !== E.OH.COMPLETED && r !== E.OH.CLAIMED) {
            let e = w.intl.string(w.t.BkZhUI);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case E.OH.UNACCEPTED:
                let e = w.intl.string(w.t.kUQLMJ),
                    t = p.jZ.ACCEPT_QUEST;
                return (
                    b && ((e = w.intl.string(w.t.umdNin)), (t = p.jZ.START_QUEST)),
                    (y || (0, m.pO)(n)) && ({ text: e, questContentCTA: t } = B(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, m.HJ)(n)) {
                                await (0, g.AH)(n.id, {
                                    questContent: o,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: f,
                                    sourceQuestContent: O,
                                }),
                                    (0, C.openPushToPhoneModal)(n);
                                return;
                            }
                            b ||
                                G ||
                                (0, g.AH)(n.id, {
                                    questContent: o,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: f,
                                    sourceQuestContent: O,
                                }),
                                b
                                    ? (0, S.R)(R.dr.QUEST_HOME_DESKTOP)
                                        ? await (0, C.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                              questContent: o,
                                              questContentCTA: t,
                                              sourceQuestContent: O,
                                              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                              questContentPosition: s,
                                              questContentRowIndex: f,
                                          })
                                        : ((0, g.AH)(n.id, {
                                              questContent: o,
                                              questContentCTA: t,
                                              questContentPosition: s,
                                              questContentRowIndex: f,
                                              sourceQuestContent: O,
                                          }),
                                          (0, C.openVideoQuestModal)({
                                              quest: n,
                                              questContent: o,
                                              sourceQuestContent: O,
                                              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                          }))
                                    : G &&
                                      ((0, S.R)(R.dr.QUEST_HOME_DESKTOP)
                                          ? await (0, g.AH)(n.id, {
                                                questContent: o,
                                                questContentCTA: t,
                                                questContentPosition: s,
                                                questContentRowIndex: f,
                                                sourceQuestContent: O,
                                            })
                                          : (0, g.AH)(n.id, {
                                                questContent: o,
                                                questContentCTA: t,
                                                questContentPosition: s,
                                                questContentRowIndex: f,
                                                sourceQuestContent: O,
                                            }),
                                      U());
                        },
                    }
                );
            case E.OH.ACCEPTED:
            case E.OH.IN_PROGRESS:
                if (I && _)
                    return {
                        text: w.intl.string(w.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, m.gI)(
                                { quest: n },
                                {
                                    content: o,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: f,
                                    impressionId: M,
                                    sourceQuestContent: O,
                                },
                            ),
                    };
                if (Z && (0, m.HJ)(n))
                    return {
                        text: w.intl.string(w.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, C.openPushToPhoneModal)(n);
                        },
                    };
                if (b)
                    return {
                        text: (0, m.F9)(A),
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () =>
                            (0, C.openVideoQuestModal)({
                                quest: n,
                                questContent: o,
                                sourceQuestContent: O,
                                sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (G) {
                    let { text: e } = B(n);
                    return {
                        text: e,
                        tooltipText: w.intl.string(w.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(R.S7.START_QUEST_CTA) && U();
                        },
                    };
                }
                return {
                    text: w.intl.string(w.t.cfY4PE),
                    tooltipText: w.intl.string(w.t.hsbwjv),
                    onClick: null,
                };
            case E.OH.COMPLETED:
                return {
                    text: w.intl.string(w.t.cfY4PE),
                    tooltipText: null,
                    onClick: v,
                };
            case E.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: v,
                };
                if ((0, T.i)("useCtaConfig"))
                    return {
                        tooltipText: null,
                        onClick: v,
                        text: (0, m.wj)(n.config) ? w.intl.string(w.t.bAGFz3) : w.intl.string(w.t.vTgCWx),
                    };
                if (a) return k(x({}, i), { text: w.intl.string(w.t.MAS7uK) });
                if ((0, m.vQ)(n.config)) return k(x({}, i), { text: w.intl.string(w.t.vTgCWx) });
                if ((0, m.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: N,
                        text: w.intl.string(w.t["eQX+gg"]),
                    };
                else if ((0, m.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: w.intl.string(w.t.WYchde),
                        onClick: L,
                    };
                return k(x({}, i), { text: w.intl.string(w.t.bAGFz3) });
        }
    }, [r, b, I, _, v, a, n, o, s, f, M, A, N, L, y, U, O, Z, G]);
}
function F() {
    let { enableNewRequestBehavior: e } = O.Z.useConfig({ location: "useQuestBarQuest" }),
        t = (0, A.Z)(y.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.e7)([b.Z], () => {
            var e, t;
            return null !=
                (t =
                    null != (e = b.Z.questDeliveryOverride)
                        ? e
                        : (0, m.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, y.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
                ? t
                : null;
        });
    return e ? t : n;
}
function V(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, I.Z)({ location: n }),
        a = (0, E.tP)(r),
        s = (0, v.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([_.Z], () => ({
            premiumSubscription: _.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: _.Z.hasFetchedSubscriptions(),
        })),
        u = (0, o.e7)([b.Z], () => null != b.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, m.Bg)(r.config)) {
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
        f = !u && null != r.userStatus && (0, m.zE)(r.userStatus, y.jn.QUEST_BAR);
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
function H(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = V({
            location: t,
            quest: F(),
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([b.Z], () => ({
            lastFetchedCurrentQuests: b.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: b.Z.lastFetchedQuestToDeliver,
        }));
    return {
        isQuestBarEmpty: !n,
        hasLoadedQuestBar: 0 !== r && 0 !== i,
    };
}
