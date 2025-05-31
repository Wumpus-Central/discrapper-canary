n.d(t, {
    DH: () => F,
    Ks: () => B,
    Ws: () => Z,
    g2: () => j,
    hf: () => k,
    k3: () => U,
    qN: () => V,
    tP: () => M
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(240894),
    o = n(442837),
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
    g = n(272008),
    E = n(113434),
    b = n(569984),
    y = n(497505),
    O = n(918701),
    v = n(977156),
    I = n(373370),
    S = n(920916),
    T = n(669041),
    A = n(341907),
    N = n(46140),
    C = n(981631),
    P = n(215023),
    R = n(388032);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function k(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: a } = e,
        s = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
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
                ? (0, T.B)()
                : l
                  ? (0, O.Bg)(t.config)
                      ? (0, A.openQuestsNitroRewardModal)(t, n)
                      : (0, O.Xv)(t.config)
                        ? (0, S.m)(t, n)
                        : (0, O.vQ)(t.config)
                          ? (0, A.openQuestInGameRewardModal)(t, n)
                          : (0, O.xN)(t.config)
                            ? (0, A.openQuestOrbsRewardModal)(t, n)
                            : (0, A.openQuestsRewardCodeModal)({
                                  questId: t.id,
                                  location: n,
                                  questContentPosition: r
                              })
                  : (0, T.B)());
    }, [t, u, n, r, a, l, c]);
}
function M(e) {
    var t;
    let n = (0, o.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null != (t = n.lastLaunched) ? t : 0);
}
let j = (e) => {
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
    U = (e, t) => {
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
function G(e) {
    return e.config.features.includes(N.S7.START_QUEST_CTA)
        ? {
              text: R.intl.string(R.t.ToGcxM),
              questContentCTA: h.jZ.START_QUEST
          }
        : {
              text: R.intl.string(R.t.l7E81t),
              questContentCTA: h.jZ.ACCEPT_QUEST
          };
}
function B(e) {
    var t;
    let { quest: n, progressState: r, isCollectibleQuest: a, location: o, questContentPosition: s, questContentRowIndex: u, inGiftInventory: _, isVideoQuest: p, inGameQuest: b } = e,
        v = N.dr.CONFLICT_CHECKS;
    switch (o) {
        case y.jn.QUEST_HOME_DESKTOP:
            v = N.dr.QUEST_HOME_DESKTOP;
            break;
        case y.jn.QUESTS_EMBED:
            v = N.dr.EMBED_DESKTOP;
            break;
        default:
            v = N.dr.CONFLICT_CHECKS;
    }
    let S = k({
            quest: n,
            location: o,
            questContentPosition: s,
            questContentRowIndex: u
        }),
        T = (0, E._s)({ quest: n }),
        w = (0, E.Rf)(n),
        L = i.useCallback(() => {
            (0, d.$)();
        }, []),
        M = i.useCallback(() => {
            (0, f.Y)({
                pageType: C.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: C.jXE.QUEST_TILE_CTA,
                ctaObject: C.qAy.CTA_TO_ORBS_SHOP
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
        B = (0, I.up)(v);
    return i.useMemo(() => {
        if ((0, O.HJ)(n) && r !== E.OH.COMPLETED && r !== E.OH.CLAIMED) {
            let e = R.intl.string(R.t.BkZhUF);
            return {
                text: e,
                tooltipText: e,
                onClick: null
            };
        }
        switch (r) {
            case E.OH.UNACCEPTED:
                let e = R.intl.string(R.t.kUQLMD),
                    t = h.jZ.ACCEPT_QUEST;
                return (
                    p && ((e = R.intl.string(R.t.umdNio)), (t = h.jZ.START_QUEST)),
                    b && ({ text: e, questContentCTA: t } = G(n)),
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
                                p ? (0, A.openVideoQuestModal)(n) : b && n.config.features.includes(N.S7.START_QUEST_CTA) && U();
                        }
                    }
                );
            case E.OH.ACCEPTED:
            case E.OH.IN_PROGRESS:
                if (T && _)
                    return {
                        text: R.intl.string(R.t.Cfye4u),
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
                        text: (0, O.F9)(w),
                        tooltipText: R.intl.string(R.t.hsbwjo),
                        onClick: () => (0, A.openVideoQuestModal)(n)
                    };
                if (b && n.config.features.includes(N.S7.START_QUEST_CTA)) {
                    let { text: e } = G(n);
                    return {
                        text: e,
                        tooltipText: R.intl.string(R.t.hsbwjo),
                        onClick: () => {
                            n.config.features.includes(N.S7.START_QUEST_CTA) && U();
                        }
                    };
                }
                return {
                    text: B,
                    tooltipText: R.intl.string(R.t.hsbwjo),
                    onClick: null
                };
            case E.OH.COMPLETED:
                return {
                    text: B,
                    tooltipText: null,
                    onClick: S
                };
            case E.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: S
                };
                if (a) return x(D({}, i), { text: R.intl.string(R.t.MAS7uL) });
                if ((0, O.vQ)(n.config)) return x(D({}, i), { text: R.intl.string(R.t.vTgCW1) });
                if ((0, O.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: L,
                        text: R.intl.string(R.t['eQX+go'])
                    };
                else if ((0, O.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: R.intl.string(R.t.WYchdX),
                        onClick: M
                    };
                return x(D({}, i), { text: R.intl.string(R.t.bAGFz8) });
        }
    }, [r, p, T, _, S, a, n, o, s, u, j, w, L, M, b, U, B]);
}
function F() {
    return (0, o.e7)([b.Z], () => {
        var e, t;
        return null != (t = null != (e = b.Z.questDeliveryOverride) ? e : (0, O.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, y.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? t : null;
    });
}
function V(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, v.Zy)({ location: n }),
        a = (0, E.tP)(r),
        { premiumSubscription: s, hasFetchedSubscriptions: l } = (0, o.cj)([p.ZP], () => ({
            premiumSubscription: p.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions()
        })),
        c = (0, o.e7)([b.Z], () => null != b.Z.questDeliveryOverride);
    if (null == r || ((0, O.Bg)(r.config) && (!l || (null == s ? void 0 : s.isPurchasedExternally)))) return !1;
    let u = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        d = !c && null != r.userStatus && (0, O.zE)(r.userStatus, y.jn.QUEST_BAR);
    return i && !d && !u && !a;
}
function Z(e) {
    let { location: t } = e,
        n = V({
            location: t,
            quest: F()
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cj)([b.Z], () => ({
            lastFetchedCurrentQuests: b.Z.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: b.Z.lastFetchedQuestToDeliver
        }));
    return 0 !== r && 0 !== i && !n;
}
