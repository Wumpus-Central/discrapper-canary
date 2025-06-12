n.d(t, {
    DH: () => F,
    Ks: () => V,
    Ws: () => H,
    g2: () => U,
    hf: () => k,
    k3: () => G,
    qN: () => Z,
    tP: () => j
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(524979),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(594190),
    d = n(98278),
    _ = n(507808),
    f = n(594174),
    p = n(78839),
    h = n(617136),
    m = n(915750),
    g = n(272008),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(918701),
    v = n(200872),
    I = n(977156),
    T = n(373370),
    S = n(920916),
    A = n(669041),
    N = n(341907),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: a } = e,
        s = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        l = null == s ? void 0 : s.hasVerifiedEmailOrPhone(),
        c = null == s ? void 0 : s.verified,
        u = (0, h.O5)();
    return i.useCallback(() => {
        null != t &&
            (u({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a
            }),
            (0, O.xN)(t.config) && !c
                ? (0, A.B)()
                : l
                  ? (0, O.Bg)(t.config)
                      ? (0, N.openQuestsNitroRewardModal)(t, n)
                      : (0, O.Xv)(t.config)
                        ? (0, S.m)(t, n)
                        : (0, O.vQ)(t.config)
                          ? (0, N.openQuestInGameRewardModal)(t, n)
                          : (0, O.xN)(t.config)
                            ? (0, N.openQuestOrbsRewardModal)(t, n)
                            : (0, N.openQuestsRewardCodeModal)({
                                  questId: t.id,
                                  location: n,
                                  questContentPosition: r
                              })
                  : (0, A.B)());
    }, [t, u, n, r, a, l, c]);
}
function j(e) {
    var t;
    let n = (0, o.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null != (t = n.lastLaunched) ? t : 0);
}
let U = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [o, l] = (0, s.q_F)(() => ({})),
            c = i.useRef(!1),
            u = (e) => {
                (c.current = !0),
                    l({
                        from: { rotate: '0deg' },
                        to: { rotate: '360deg' },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100
                        },
                        loop: () => (null != e ? e : c.current),
                        immediate: t
                    });
            },
            d = (0, a.animated)(s.DuK);
        return {
            render: () =>
                (0, r.jsx)(d, {
                    className: n,
                    style: t ? void 0 : o,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: u,
            stopAnimation: () => {
                c.current = !1;
            }
        };
    },
    G = (e, t) => {
        let { message: n, xboxURL: i } = (0, E.KX)(),
            a = (0, h.O5)(),
            o = (n) => {
                var r;
                let o = n.target;
                (null == o || null == (r = o.tagName) ? void 0 : r.toLowerCase()) === 'a' &&
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA: o.getAttribute('href') === i ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, r.jsx)('span', {
            onClick: o,
            children: n
        });
    };
function B(e) {
    return e.config.features.includes(C.S7.START_QUEST_CTA)
        ? {
              text: w.intl.string(w.t.ToGcxM),
              questContentCTA: h.jZ.START_QUEST
          }
        : {
              text: w.intl.string(w.t.l7E81t),
              questContentCTA: h.jZ.ACCEPT_QUEST
          };
}
function V(e) {
    var t;
    let { quest: n, progressState: r, isCollectibleQuest: a, location: o, questContentPosition: s, questContentRowIndex: u, inGiftInventory: f, isVideoQuest: p, inGameQuest: b } = e,
        v = C.dr.CONFLICT_CHECKS;
    switch (o) {
        case y.jn.QUEST_HOME_DESKTOP:
            v = C.dr.QUEST_HOME_DESKTOP;
            break;
        case y.jn.QUESTS_EMBED:
            v = C.dr.EMBED_DESKTOP;
            break;
        default:
            v = C.dr.CONFLICT_CHECKS;
    }
    let I = k({
            quest: n,
            location: o,
            questContentPosition: s,
            questContentRowIndex: u
        }),
        S = (0, E._s)({ quest: n }),
        A = (0, E.Rf)(n),
        D = i.useCallback(() => {
            (0, d.$)();
        }, []),
        x = i.useCallback(() => {
            (0, _.Y)({
                pageType: R.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: R.jXE.QUEST_TILE_CTA,
                ctaObject: R.qAy.CTA_TO_ORBS_SHOP
            }),
                (0, c.mK)({
                    openInLayer: !1,
                    tab: P.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: l.Z.QUEST_HOME_PAGE
                });
        }, []),
        j = null == (t = (0, m.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: U } = (0, E.zB)(n),
        G = (0, T.up)(v);
    return i.useMemo(() => {
        if ((0, O.HJ)(n) && r !== E.OH.COMPLETED && r !== E.OH.CLAIMED) {
            let e = w.intl.string(w.t.BkZhUF);
            return {
                text: e,
                tooltipText: e,
                onClick: null
            };
        }
        switch (r) {
            case E.OH.UNACCEPTED:
                let e = w.intl.string(w.t.kUQLMD),
                    t = h.jZ.ACCEPT_QUEST;
                return (
                    p && ((e = w.intl.string(w.t.umdNio)), (t = h.jZ.START_QUEST)),
                    b && ({ text: e, questContentCTA: t } = B(n)),
                    {
                        text: e,
                        tooltipText: e,
                        onClick: () => {
                            (0, g.AH)(n.id, {
                                questContent: o,
                                questContentCTA: t,
                                questContentPosition: s,
                                questContentRowIndex: u
                            }),
                                p ? (0, N.openVideoQuestModal)(n) : b && n.config.features.includes(C.S7.START_QUEST_CTA) && U();
                        }
                    }
                );
            case E.OH.ACCEPTED:
            case E.OH.IN_PROGRESS:
                if (S && f)
                    return {
                        text: w.intl.string(w.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, O.gI)(
                                { quest: n },
                                {
                                    content: o,
                                    ctaContent: h.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: u,
                                    impressionId: j
                                }
                            )
                    };
                if (p)
                    return {
                        text: (0, O.F9)(A),
                        tooltipText: w.intl.string(w.t.hsbwjo),
                        onClick: () => (0, N.openVideoQuestModal)(n)
                    };
                if (b && n.config.features.includes(C.S7.START_QUEST_CTA)) {
                    let { text: e } = B(n);
                    return {
                        text: e,
                        tooltipText: w.intl.string(w.t.hsbwjo),
                        onClick: () => {
                            n.config.features.includes(C.S7.START_QUEST_CTA) && U();
                        }
                    };
                }
                return {
                    text: G,
                    tooltipText: w.intl.string(w.t.hsbwjo),
                    onClick: null
                };
            case E.OH.COMPLETED:
                return {
                    text: G,
                    tooltipText: null,
                    onClick: I
                };
            case E.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: I
                };
                if (a) return M(L({}, i), { text: w.intl.string(w.t.MAS7uL) });
                if ((0, O.vQ)(n.config)) return M(L({}, i), { text: w.intl.string(w.t.vTgCW1) });
                if ((0, O.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: D,
                        text: w.intl.string(w.t['eQX+go'])
                    };
                else if ((0, O.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: w.intl.string(w.t.WYchdX),
                        onClick: x
                    };
                return M(L({}, i), { text: w.intl.string(w.t.bAGFz8) });
        }
    }, [r, p, S, f, I, a, n, o, s, u, j, A, D, x, b, U, G]);
}
function F() {
    return (0, o.e7)([b.Z], () => {
        var e, t;
        return null != (t = null != (e = b.Z.questDeliveryOverride) ? e : (0, O.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, y.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? t : null;
    });
}
function Z(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, I.Zy)({ location: n }),
        a = (0, E.tP)(r),
        s = (0, v.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([p.ZP], () => ({
            premiumSubscription: p.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions()
        })),
        u = (0, o.e7)([b.Z], () => null != b.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: 'quest_is_null'
        };
    if ((0, O.Bg)(r.config)) {
        if (!s && !c)
            return {
                isQuestBarVisible: !1,
                reason: 'premium_subscription_not_fetched'
            };
        if (null == l ? void 0 : l.isPurchasedExternally)
            return {
                isQuestBarVisible: !1,
                reason: 'premium_subscription_is_purchased_externally'
            };
    }
    let d = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        _ = !u && null != r.userStatus && (0, O.zE)(r.userStatus, y.jn.QUEST_BAR);
    return d
        ? {
              isQuestBarVisible: !1,
              reason: 'quest_claimed'
          }
        : a
          ? {
                isQuestBarVisible: !1,
                reason: 'quest_expired'
            }
          : i
            ? _
                ? {
                      isQuestBarVisible: !1,
                      reason: 'quest_dismissed'
                  }
                : {
                      isQuestBarVisible: !0,
                      reason: 'quest_bar_visible'
                  }
            : {
                  isQuestBarVisible: !1,
                  reason: 'quest_not_eligible_for_quests'
              };
}
function H(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = Z({
            location: t,
            quest: F()
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([b.Z], () => ({
            lastFetchedCurrentQuests: b.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: b.Z.lastFetchedQuestToDeliver
        }));
    return 0 !== r && 0 !== i && !n;
}
