(n.d(t, {
    DH: () => V,
    Ks: () => B,
    Ws: () => Z,
    g2: () => j,
    hf: () => M,
    k3: () => U,
    qN: () => F,
    tP: () => k
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(66546),
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
    g = n(509212),
    E = n(272008),
    b = n(113434),
    y = n(569984),
    O = n(497505),
    v = n(200872),
    I = n(977156),
    T = n(110560),
    S = n(920916),
    A = n(669041),
    N = n(46140),
    C = n(981631),
    R = n(215023),
    P = n(388032);
function w(e, t, n) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
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
                questContentRowIndex: a,
                sourceQuestContent: s
            }),
            (0, g.xN)(t.config) && !u
                ? (0, A.B)()
                : c
                  ? (0, g.Bg)(t.config)
                      ? (0, T.openQuestsNitroRewardModal)(t, n)
                      : (0, g.Xv)(t.config)
                        ? (0, S.m)(t, n)
                        : (0, g.vQ)(t.config)
                          ? (0, T.openQuestInGameRewardModal)(t, n, s)
                          : (0, g.xN)(t.config)
                            ? (0, T.openQuestOrbsRewardModal)(t, n)
                            : (0, T.openQuestsRewardCodeModal)({
                                  questId: t.id,
                                  questContent: n,
                                  questContentPosition: r,
                                  sourceQuestContent: s
                              })
                  : (0, A.B)());
    }, [t, d, n, r, a, c, u, s]);
}
function k(e) {
    var t;
    let n = (0, o.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null != (t = n.lastLaunched) ? t : 0);
}
let j = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [o, l] = (0, s.q_F)(() => ({})),
            c = i.useRef(!1),
            u = (e) => {
                ((c.current = !0),
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
                    }));
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
    U = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, b.KX)(),
            o = (0, h.O5)(),
            s = (r) => {
                var i;
                let s = r.target;
                (null == s || null == (i = s.tagName) ? void 0 : i.toLowerCase()) === 'a' &&
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA: s.getAttribute('href') === a ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n
                    });
            };
        return (0, r.jsx)('span', {
            onClick: s,
            children: i
        });
    };
function G(e) {
    return e.config.features.includes(N.S7.START_QUEST_CTA)
        ? {
              text: P.intl.string(P.t.ToGcxM),
              questContentCTA: h.jZ.START_QUEST
          }
        : {
              text: P.intl.string(P.t.l7E81t),
              questContentCTA: h.jZ.ACCEPT_QUEST
          };
}
function B(e) {
    var t;
    let { quest: n, progressState: r, isCollectibleQuest: a, questContent: o, questContentPosition: s, questContentRowIndex: u, inGiftInventory: f, isVideoQuest: p, inGameQuest: y, sourceQuestContent: O } = e,
        v = M({
            quest: n,
            questContent: o,
            questContentPosition: s,
            questContentRowIndex: u,
            sourceQuestContent: O
        }),
        I = (0, b._s)({ quest: n }),
        S = (0, b.Rf)(n),
        A = i.useCallback(() => {
            (0, d.$)();
        }, []),
        w = i.useCallback(() => {
            ((0, _.Y)({
                pageType: C.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: C.jXE.QUEST_TILE_CTA,
                ctaObject: C.qAy.CTA_TO_ORBS_SHOP
            }),
                (0, c.mK)({
                    openInLayer: !1,
                    tab: R.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: l.Z.QUEST_HOME_PAGE
                }));
        }, []),
        L = null == (t = (0, m.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: k } = (0, b.zB)(n);
    return i.useMemo(() => {
        if ((0, g.HJ)(n) && r !== b.OH.COMPLETED && r !== b.OH.CLAIMED) {
            let e = P.intl.string(P.t.BkZhUF);
            return {
                text: e,
                tooltipText: e,
                onClick: null
            };
        }
        switch (r) {
            case b.OH.UNACCEPTED:
                let e = P.intl.string(P.t.kUQLMD),
                    t = h.jZ.ACCEPT_QUEST;
                return (
                    p && ((e = P.intl.string(P.t.umdNio)), (t = h.jZ.START_QUEST)),
                    y && ({ text: e, questContentCTA: t } = G(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: () => {
                            ((0, E.AH)(n.id, {
                                questContent: o,
                                questContentCTA: t,
                                questContentPosition: s,
                                questContentRowIndex: u,
                                sourceQuestContent: O
                            }),
                                p
                                    ? (0, T.openVideoQuestModal)({
                                          quest: n,
                                          questContent: o,
                                          sourceQuestContent: O,
                                          sourceQuestContentCTA: h.jZ.ACCEPT_QUEST
                                      })
                                    : y && n.config.features.includes(N.S7.START_QUEST_CTA) && k());
                        }
                    }
                );
            case b.OH.ACCEPTED:
            case b.OH.IN_PROGRESS:
                if (I && f)
                    return {
                        text: P.intl.string(P.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, g.gI)(
                                { quest: n },
                                {
                                    content: o,
                                    ctaContent: h.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: u,
                                    impressionId: L,
                                    sourceQuestContent: O
                                }
                            )
                    };
                if (p)
                    return {
                        text: (0, g.F9)(S),
                        tooltipText: P.intl.string(P.t.hsbwjo),
                        onClick: () =>
                            (0, T.openVideoQuestModal)({
                                quest: n,
                                questContent: o,
                                sourceQuestContent: O,
                                sourceQuestContentCTA: h.jZ.WATCH_VIDEO
                            })
                    };
                if (y && n.config.features.includes(N.S7.START_QUEST_CTA)) {
                    let { text: e } = G(n);
                    return {
                        text: e,
                        tooltipText: P.intl.string(P.t.hsbwjo),
                        onClick: () => {
                            n.config.features.includes(N.S7.START_QUEST_CTA) && k();
                        }
                    };
                }
                return {
                    text: P.intl.string(P.t.cfY4PD),
                    tooltipText: P.intl.string(P.t.hsbwjo),
                    onClick: null
                };
            case b.OH.COMPLETED:
                return {
                    text: P.intl.string(P.t.cfY4PD),
                    tooltipText: null,
                    onClick: v
                };
            case b.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: v
                };
                if (a) return x(D({}, i), { text: P.intl.string(P.t.MAS7uL) });
                if ((0, g.vQ)(n.config)) return x(D({}, i), { text: P.intl.string(P.t.vTgCW1) });
                if ((0, g.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: A,
                        text: P.intl.string(P.t['eQX+go'])
                    };
                else if ((0, g.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: P.intl.string(P.t.WYchdX),
                        onClick: w
                    };
                return x(D({}, i), { text: P.intl.string(P.t.bAGFz8) });
        }
    }, [r, p, I, f, v, a, n, o, s, u, L, S, A, w, y, k, O]);
}
function V() {
    return (0, o.e7)([y.Z], () => {
        var e, t;
        return null != (t = null != (e = y.Z.questDeliveryOverride) ? e : (0, g.PM)(y.Z.quests, y.Z.questToDeliverForPlacement, O.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? t : null;
    });
}
function F(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, I.Zy)({ location: n }),
        a = (0, b.tP)(r),
        s = (0, v.b)({ location: n }),
        { premiumSubscription: l, hasFetchedSubscriptions: c } = (0, o.cj)([p.Z], () => ({
            premiumSubscription: p.Z.getPremiumSubscription(),
            hasFetchedSubscriptions: p.Z.hasFetchedSubscriptions()
        })),
        u = (0, o.e7)([y.Z], () => null != y.Z.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: 'quest_is_null'
        };
    if ((0, g.Bg)(r.config)) {
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
        _ = !u && null != r.userStatus && (0, g.zE)(r.userStatus, O.jn.QUEST_BAR);
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
function Z(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = F({
            location: t,
            quest: V()
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([y.Z], () => ({
            lastFetchedCurrentQuests: y.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: y.Z.lastFetchedQuestToDeliver
        }));
    return 0 !== r && 0 !== i && !n;
}
