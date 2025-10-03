n.d(t, {
    DH: () => Z,
    Ks: () => B,
    Ws: () => V,
    g2: () => k,
    hf: () => j,
    k3: () => U,
    qN: () => F,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(137317),
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
    O = n(530691),
    v = n(200872),
    I = n(977156),
    T = n(323811),
    S = n(111131),
    A = n(110560),
    C = n(669041),
    N = n(46140),
    R = n(981631),
    P = n(215023),
    w = n(388032);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
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
                ? (0, C.B)()
                : c
                  ? (0, m.Bg)(t.config)
                      ? (0, A.openQuestsNitroRewardModal)(t, n)
                      : (0, m.Xv)(t.config)
                        ? (0, A.openQuestCollectibleRewardModal)(t, n, s)
                        : (0, m.vQ)(t.config)
                          ? (0, A.openQuestInGameRewardModal)(t, n, s)
                          : (0, m.xN)(t.config)
                            ? (0, A.openQuestOrbsRewardModal)(t, n, s)
                            : (0, A.openQuestsRewardCodeModal)({
                                  quest: t,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, C.B)());
    }, [t, d, n, r, a, c, u, s]);
}
let k = (e) => {
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
    U = (e, t, n) => {
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
function G(e) {
    return e.config.features.includes(N.S7.START_QUEST_CTA)
        ? (0, m.pO)(e)
            ? e.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: w.intl.string(w.t["+qoymJ"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
                : {
                      text: w.intl.string(w.t["Ie9++v"]),
                      questContentCTA: p.jZ.START_QUEST,
                  }
            : {
                  text: w.intl.string(w.t.hRIVy8),
                  questContentCTA: p.jZ.START_QUEST,
              }
        : {
              text: w.intl.string(w.t.l7E81t),
              questContentCTA: p.jZ.ACCEPT_QUEST,
          };
}
function B(e) {
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
            sourceQuestContent: v,
        } = e,
        I = j({
            quest: n,
            questContent: o,
            questContentPosition: s,
            questContentRowIndex: f,
            sourceQuestContent: v,
        }),
        C = (0, E._s)({ quest: n }),
        D = (0, E.Rf)(n),
        x = i.useCallback(() => {
            (0, u.$)();
        }, []),
        k = i.useCallback(() => {
            (0, d.Y)({
                pageType: R.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: R.jXE.QUEST_TILE_CTA,
                ctaObject: R.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, c.mK)({
                    openInLayer: !1,
                    tab: P.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: l.Z.QUEST_HOME_PAGE,
                });
        }, []),
        U = null == (t = (0, h.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: B } = (0, E.zB)(n),
        Z = (0, m.Rt)(n),
        F = (0, O.f)({
            location: N.dr.QUEST_HOME_DESKTOP,
            questFeatures: n.config.features,
        });
    return i.useMemo(() => {
        if (!F && (0, m.HJ)(n) && r !== E.OH.COMPLETED && r !== E.OH.CLAIMED) {
            let e = w.intl.string(w.t.BkZhUF);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case E.OH.UNACCEPTED:
                let e = w.intl.string(w.t.kUQLMD),
                    t = p.jZ.ACCEPT_QUEST;
                return (
                    b && ((e = w.intl.string(w.t.umdNio)), (t = p.jZ.START_QUEST)),
                    (y || (0, m.pO)(n)) && ({ text: e, questContentCTA: t } = G(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, m.HJ)(n)) {
                                let { enrollOnDesktop: e } = O.S.getCurrentConfig(
                                    { location: N.dr.QUEST_HOME_DESKTOP },
                                    { autoTrackExposure: !1 },
                                );
                                e &&
                                    (await (0, g.AH)(n.id, {
                                        questContent: o,
                                        questContentCTA: t,
                                        questContentPosition: s,
                                        questContentRowIndex: f,
                                        sourceQuestContent: v,
                                    })),
                                    (0, A.openPushToPhoneModal)(n);
                                return;
                            }
                            b ||
                                Z ||
                                (0, g.AH)(n.id, {
                                    questContent: o,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: f,
                                    sourceQuestContent: v,
                                }),
                                b
                                    ? (0, S.R)(N.dr.QUEST_HOME_DESKTOP)
                                        ? await (0, A.enrollAndStartVideoQuestWithErrorHandling)(n, {
                                              questContent: o,
                                              questContentCTA: t,
                                              sourceQuestContent: v,
                                              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                              questContentPosition: s,
                                              questContentRowIndex: f,
                                          })
                                        : ((0, g.AH)(n.id, {
                                              questContent: o,
                                              questContentCTA: t,
                                              questContentPosition: s,
                                              questContentRowIndex: f,
                                              sourceQuestContent: v,
                                          }),
                                          (0, A.openVideoQuestModal)({
                                              quest: n,
                                              questContent: o,
                                              sourceQuestContent: v,
                                              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
                                          }))
                                    : Z &&
                                      ((0, S.R)(N.dr.QUEST_HOME_DESKTOP)
                                          ? await (0, g.AH)(n.id, {
                                                questContent: o,
                                                questContentCTA: t,
                                                questContentPosition: s,
                                                questContentRowIndex: f,
                                                sourceQuestContent: v,
                                            })
                                          : (0, g.AH)(n.id, {
                                                questContent: o,
                                                questContentCTA: t,
                                                questContentPosition: s,
                                                questContentRowIndex: f,
                                                sourceQuestContent: v,
                                            }),
                                      B());
                        },
                    }
                );
            case E.OH.ACCEPTED:
            case E.OH.IN_PROGRESS:
                if (C && _)
                    return {
                        text: w.intl.string(w.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, m.gI)(
                                { quest: n },
                                {
                                    content: o,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: f,
                                    impressionId: U,
                                    sourceQuestContent: v,
                                },
                            ),
                    };
                if (F && (0, m.HJ)(n))
                    return {
                        text: w.intl.string(w.t.IsH2Sk),
                        tooltipText: null,
                        onClick: () => {
                            (0, A.openPushToPhoneModal)(n);
                        },
                    };
                if (b)
                    return {
                        text: (0, m.F9)(D),
                        tooltipText: w.intl.string(w.t.hsbwjo),
                        onClick: () =>
                            (0, A.openVideoQuestModal)({
                                quest: n,
                                questContent: o,
                                sourceQuestContent: v,
                                sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (Z) {
                    let { text: e } = G(n);
                    return {
                        text: e,
                        tooltipText: w.intl.string(w.t.hsbwjo),
                        onClick: () => {
                            n.config.features.includes(N.S7.START_QUEST_CTA) && B();
                        },
                    };
                }
                return {
                    text: w.intl.string(w.t.cfY4PD),
                    tooltipText: w.intl.string(w.t.hsbwjo),
                    onClick: null,
                };
            case E.OH.COMPLETED:
                return {
                    text: w.intl.string(w.t.cfY4PD),
                    tooltipText: null,
                    onClick: I,
                };
            case E.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: I,
                };
                if ((0, T.i)("useCtaConfig"))
                    return {
                        tooltipText: null,
                        onClick: I,
                        text: (0, m.wj)(n.config) ? w.intl.string(w.t.bAGFz8) : w.intl.string(w.t.vTgCW1),
                    };
                if (a) return M(L({}, i), { text: w.intl.string(w.t.MAS7uL) });
                if ((0, m.vQ)(n.config)) return M(L({}, i), { text: w.intl.string(w.t.vTgCW1) });
                if ((0, m.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: x,
                        text: w.intl.string(w.t["eQX+go"]),
                    };
                else if ((0, m.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: w.intl.string(w.t.WYchdX),
                        onClick: k,
                    };
                return M(L({}, i), { text: w.intl.string(w.t.bAGFz8) });
        }
    }, [r, b, C, _, I, a, n, o, s, f, U, D, x, k, y, B, v, F, Z]);
}
function Z() {
    return (0, o.e7)([b.Z], () => {
        var e, t;
        return null !=
            (t =
                null != (e = b.Z.questDeliveryOverride)
                    ? e
                    : (0, m.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, y.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
            ? t
            : null;
    });
}
function F(e) {
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
function V(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = F({
            location: t,
            quest: Z(),
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
