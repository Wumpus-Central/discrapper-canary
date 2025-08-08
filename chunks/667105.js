n.d(t, {
    DH: () => F,
    Ks: () => Z,
    Ws: () => H,
    g2: () => U,
    hf: () => k,
    k3: () => G,
    qN: () => V,
    tP: () => j,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(126663),
    a = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(594190),
    d = n(98278),
    f = n(507808),
    _ = n(594174),
    p = n(78839),
    h = n(617136),
    m = n(915750),
    g = n(509212),
    E = n(272008),
    b = n(113434),
    y = n(569984),
    O = n(497505),
    v = n(530691),
    I = n(200872),
    T = n(977156),
    S = n(110560),
    A = n(920916),
    N = n(669041),
    C = n(46140),
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
function k(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: o, sourceQuestContent: s } = e,
        l = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        c = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        u = null == l ? void 0 : l.verified,
        d = (0, h.O5)();
    return i.useCallback(() => {
        null != t &&
            (d({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: o,
                sourceQuestContent: s,
            }),
            (0, g.xN)(t.config) && !u
                ? (0, N.B)()
                : c
                  ? (0, g.Bg)(t.config)
                      ? (0, S.openQuestsNitroRewardModal)(t, n)
                      : (0, g.Xv)(t.config)
                        ? (0, A.m)(t, n)
                        : (0, g.vQ)(t.config)
                          ? (0, S.openQuestInGameRewardModal)(t, n, s)
                          : (0, g.xN)(t.config)
                            ? (0, S.openQuestOrbsRewardModal)(t, n)
                            : (0, S.openQuestsRewardCodeModal)({
                                  questId: t.id,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s,
                              })
                  : (0, N.B)());
    }, [t, d, n, r, o, c, u, s]);
}
function j(e) {
    var t;
    let n = (0, a.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null != (t = n.lastLaunched) ? t : 0);
}
let U = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [a, l] = (0, s.q_F)(() => ({})),
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
            d = (0, o.animated)(s.DuK);
        return {
            render: () =>
                (0, r.jsx)(d, {
                    className: n,
                    style: t ? void 0 : a,
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
        let { message: i, xboxURL: o } = (0, b.KX)(),
            a = (0, h.O5)(),
            s = (r) => {
                var i;
                let s = r.target;
                (null == s || null == (i = s.tagName) ? void 0 : i.toLowerCase()) === "a" &&
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            s.getAttribute("href") === o
                                ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX
                                : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", {
            onClick: s,
            children: i,
        });
    };
function B(e) {
    return e.config.features.includes(C.S7.START_QUEST_CTA)
        ? {
              text: w.intl.string(w.t.ToGcxM),
              questContentCTA: h.jZ.START_QUEST,
          }
        : {
              text: w.intl.string(w.t.l7E81t),
              questContentCTA: h.jZ.ACCEPT_QUEST,
          };
}
function Z(e) {
    var t;
    let {
            quest: n,
            progressState: r,
            isCollectibleQuest: o,
            questContent: a,
            questContentPosition: s,
            questContentRowIndex: u,
            inGiftInventory: _,
            isVideoQuest: p,
            inGameQuest: y,
            sourceQuestContent: O,
        } = e,
        I = k({
            quest: n,
            questContent: a,
            questContentPosition: s,
            questContentRowIndex: u,
            sourceQuestContent: O,
        }),
        T = (0, b._s)({ quest: n }),
        A = (0, b.Rf)(n),
        N = i.useCallback(() => {
            (0, d.$)();
        }, []),
        D = i.useCallback(() => {
            (0, f.Y)({
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
        x = null == (t = (0, m.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: j } = (0, b.zB)(n),
        U = (0, v.f)({
            location: C.dr.QUEST_HOME_DESKTOP,
            questFeatures: n.config.features,
        });
    return i.useMemo(() => {
        if (!U && (0, g.HJ)(n) && r !== b.OH.COMPLETED && r !== b.OH.CLAIMED) {
            let e = w.intl.string(w.t.BkZhUF);
            return {
                text: e,
                tooltipText: e,
                onClick: null,
            };
        }
        switch (r) {
            case b.OH.UNACCEPTED:
                let e = w.intl.string(w.t.kUQLMD),
                    t = h.jZ.ACCEPT_QUEST;
                return (
                    p && ((e = w.intl.string(w.t.umdNio)), (t = h.jZ.START_QUEST)),
                    y && ({ text: e, questContentCTA: t } = B(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, g.HJ)(n)) {
                                let { enrollOnDesktop: e } = v.S.getCurrentConfig(
                                    { location: C.dr.QUEST_HOME_DESKTOP },
                                    { autoTrackExposure: !1 },
                                );
                                e &&
                                    (await (0, E.AH)(n.id, {
                                        questContent: a,
                                        questContentCTA: t,
                                        questContentPosition: s,
                                        questContentRowIndex: u,
                                        sourceQuestContent: O,
                                    })),
                                    (0, S.openPushToPhoneModal)(n);
                                return;
                            }
                            (0, E.AH)(n.id, {
                                questContent: a,
                                questContentCTA: t,
                                questContentPosition: s,
                                questContentRowIndex: u,
                                sourceQuestContent: O,
                            }),
                                p
                                    ? (0, S.openVideoQuestModal)({
                                          quest: n,
                                          questContent: a,
                                          sourceQuestContent: O,
                                          sourceQuestContentCTA: h.jZ.ACCEPT_QUEST,
                                      })
                                    : y && n.config.features.includes(C.S7.START_QUEST_CTA) && j();
                        },
                    }
                );
            case b.OH.ACCEPTED:
            case b.OH.IN_PROGRESS:
                if (T && _)
                    return {
                        text: w.intl.string(w.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, g.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: h.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: u,
                                    impressionId: x,
                                    sourceQuestContent: O,
                                },
                            ),
                    };
                if (U && (0, g.HJ)(n))
                    return {
                        text: w.intl.string(w.t.IsH2Sk),
                        tooltipText: null,
                        onClick: () => {
                            (0, S.openPushToPhoneModal)(n);
                        },
                    };
                if (p)
                    return {
                        text: (0, g.F9)(A),
                        tooltipText: w.intl.string(w.t.hsbwjo),
                        onClick: () =>
                            (0, S.openVideoQuestModal)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: O,
                                sourceQuestContentCTA: h.jZ.WATCH_VIDEO,
                            }),
                    };
                else if (y && n.config.features.includes(C.S7.START_QUEST_CTA)) {
                    let { text: e } = B(n);
                    return {
                        text: e,
                        tooltipText: w.intl.string(w.t.hsbwjo),
                        onClick: () => {
                            n.config.features.includes(C.S7.START_QUEST_CTA) && j();
                        },
                    };
                }
                return {
                    text: w.intl.string(w.t.cfY4PD),
                    tooltipText: w.intl.string(w.t.hsbwjo),
                    onClick: null,
                };
            case b.OH.COMPLETED:
                return {
                    text: w.intl.string(w.t.cfY4PD),
                    tooltipText: null,
                    onClick: I,
                };
            case b.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: I,
                };
                if (o) return M(L({}, i), { text: w.intl.string(w.t.MAS7uL) });
                if ((0, g.vQ)(n.config)) return M(L({}, i), { text: w.intl.string(w.t.vTgCW1) });
                if ((0, g.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: N,
                        text: w.intl.string(w.t["eQX+go"]),
                    };
                else if ((0, g.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: w.intl.string(w.t.WYchdX),
                        onClick: D,
                    };
                return M(L({}, i), { text: w.intl.string(w.t.bAGFz8) });
        }
    }, [r, p, T, _, I, o, n, a, s, u, x, A, N, D, y, j, O, U]);
}
function F() {
    return (0, a.e7)([y.Z], () => {
        var e, t;
        return null !=
            (t =
                null != (e = y.Z.questDeliveryOverride)
                    ? e
                    : (0, g.PM)(y.Z.quests, y.Z.questToDeliverForPlacement, O.Ok.DESKTOP_ACCOUNT_PANEL_AREA))
            ? t
            : null;
    });
}
function V(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, T.Zy)({ location: n }),
        o = (0, b.tP)(r),
        s = (0, I.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, a.cj)([p.Z], () => ({
            premiumSubscription: p.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: p.Z.hasFetchedSubscriptions(),
        })),
        u = (0, a.e7)([y.Z], () => null != y.Z.questDeliveryOverride);
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
    let d = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        f = !u && null != r.userStatus && (0, g.zE)(r.userStatus, O.jn.QUEST_BAR);
    return d
        ? {
              isQuestBarVisible: !1,
              reason: "quest_claimed",
          }
        : o
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
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, a.cj)([y.Z], () => ({
            lastFetchedCurrentQuests: y.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: y.Z.lastFetchedQuestToDeliver,
        }));
    return 0 !== r && 0 !== i && !n;
}
