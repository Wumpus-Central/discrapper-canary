n.d(t, {
    DH: () => U,
    Ks: () => j,
    Ws: () => B,
    g2: () => x,
    hf: () => D,
    k3: () => M,
    qN: () => G,
    tP: () => L
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(200100),
    a = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(594190),
    d = n(98278),
    f = n(594174),
    _ = n(78839),
    p = n(617136),
    h = n(915750),
    m = n(272008),
    g = n(113434),
    E = n(569984),
    b = n(497505),
    y = n(918701),
    v = n(977156),
    O = n(920916),
    I = n(669041),
    S = n(341907),
    T = n(46140),
    N = n(215023),
    A = n(388032);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: o } = e,
        s = (0, a.e7)([f.default], () => {
            var e;
            return null == (e = f.default.getCurrentUser()) ? void 0 : e.hasVerifiedEmailOrPhone();
        }),
        l = (0, p.O5)();
    return i.useCallback(() => {
        null != t &&
            (l({
                questId: t.id,
                questContent: n,
                questContentCTA: p.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: o
            }),
            s
                ? (0, y.Bg)(t.config)
                    ? (0, S.openQuestsNitroRewardModal)(t, n)
                    : (0, y.Xv)(t.config)
                      ? (0, O.m)(t, n)
                      : (0, y.vQ)(t.config)
                        ? (0, S.openQuestInGameRewardModal)(t, n)
                        : (0, y.xN)(t.config)
                          ? (0, S.openQuestOrbsRewardModal)(t, n)
                          : (0, S.openQuestsRewardCodeModal)({
                                questId: t.id,
                                location: n,
                                questContentPosition: r
                            })
                : (0, I.B)());
    }, [t, l, n, r, o, s]);
}
function L(e) {
    var t;
    let n = (0, a.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null != (t = n.lastLaunched) ? t : 0);
}
let x = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [a, l] = (0, s.q_F)(() => ({})),
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
            d = (0, o.animated)(s.DuK);
        return {
            render: () =>
                (0, r.jsx)(d, {
                    className: n,
                    style: t ? void 0 : a,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: u,
            stopAnimation: () => {
                c.current = !1;
            }
        };
    },
    M = (e, t) => {
        let { message: n, xboxURL: i } = (0, g.KX)(),
            o = (0, p.O5)(),
            a = (n) => {
                var r;
                let a = n.target;
                (null == a || null == (r = a.tagName) ? void 0 : r.toLowerCase()) === 'a' &&
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA: a.getAttribute('href') === i ? p.jZ.HOW_TO_HELP_ARTICLE_XBOX : p.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, r.jsx)('span', {
            onClick: a,
            children: n
        });
    };
function k(e) {
    return e.config.features.includes(T.S7.START_QUEST_CTA)
        ? {
              text: A.NW.string(A.t.ToGcxM),
              questContentCTA: p.jZ.START_QUEST
          }
        : {
              text: A.NW.string(A.t.l7E81t),
              questContentCTA: p.jZ.ACCEPT_QUEST
          };
}
function j(e) {
    var t;
    let { quest: n, progressState: r, isCollectibleQuest: o, location: a, questContentPosition: s, questContentRowIndex: u, inGiftInventory: f, isVideoQuest: _, inGameQuest: E } = e,
        b = D({
            quest: n,
            location: a,
            questContentPosition: s,
            questContentRowIndex: u
        }),
        v = (0, g._s)({ quest: n }),
        O = (0, g.Rf)(n),
        I = i.useCallback(() => {
            (0, d.$)();
        }, []),
        C = i.useCallback(() => {
            (0, c.mK)({
                openInLayer: !1,
                tab: N.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: l.Z.QUEST_HOME_PAGE
            });
        }, []),
        P = null == (t = (0, h.WD)()) ? void 0 : t.getId(),
        { launchInGameActivity: L } = (0, g.zB)(n);
    return i.useMemo(() => {
        switch (r) {
            case g.OH.UNACCEPTED:
                let e = A.NW.string(A.t.kUQLMD),
                    t = p.jZ.ACCEPT_QUEST;
                return (
                    _ && ((e = A.NW.string(A.t.umdNio)), (t = p.jZ.START_QUEST)),
                    E && ({ text: e, questContentCTA: t } = k(n)),
                    {
                        text: e,
                        tooltipText: e,
                        onClick: () => {
                            (0, m.AH)(n.id, {
                                questContent: a,
                                questContentCTA: t,
                                questContentPosition: s,
                                questContentRowIndex: u
                            }),
                                _ ? (0, S.openVideoQuestModal)(n) : E && n.config.features.includes(T.S7.START_QUEST_CTA) && L();
                        }
                    }
                );
            case g.OH.ACCEPTED:
            case g.OH.IN_PROGRESS:
                if (v && f)
                    return {
                        text: A.NW.string(A.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, y.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: u,
                                    impressionId: P
                                }
                            )
                    };
                if (_)
                    return {
                        text: (0, y.F9)(O),
                        tooltipText: A.NW.string(A.t.hsbwjo),
                        onClick: () => (0, S.openVideoQuestModal)(n)
                    };
                if (E && n.config.features.includes(T.S7.START_QUEST_CTA)) {
                    let { text: e } = k(n);
                    return {
                        text: e,
                        tooltipText: A.NW.string(A.t.hsbwjo),
                        onClick: () => {
                            n.config.features.includes(T.S7.START_QUEST_CTA) && L();
                        }
                    };
                }
                return {
                    text: A.NW.string(A.t.cfY4PD),
                    tooltipText: A.NW.string(A.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                return {
                    text: A.NW.string(A.t.cfY4PD),
                    tooltipText: null,
                    onClick: b
                };
            case g.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: b
                };
                if (o) return w(R({}, i), { text: A.NW.string(A.t.MAS7uL) });
                if ((0, y.vQ)(n.config)) return w(R({}, i), { text: A.NW.string(A.t.vTgCW1) });
                if ((0, y.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: I,
                        text: A.NW.string(A.t['eQX+go'])
                    };
                else if ((0, y.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: A.NW.string(A.t.WYchdX),
                        onClick: C
                    };
                return w(R({}, i), { text: A.NW.string(A.t.bAGFz8) });
        }
    }, [r, _, v, f, b, o, n, a, s, u, P, O, I, C, E, L]);
}
function U() {
    return (0, a.e7)([E.Z], () => {
        var e, t;
        return null != (t = null != (e = E.Z.questDeliveryOverride) ? e : (0, y.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, b.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? t : null;
    });
}
function G(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, v.Zy)({ location: n }),
        o = (0, g.tP)(r),
        { premiumSubscription: s, hasFetchedSubscriptions: l } = (0, a.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        })),
        c = (0, a.e7)([E.Z], () => null != E.Z.questDeliveryOverride);
    if (null == r || ((0, y.Bg)(r.config) && (!l || (null == s ? void 0 : s.isPurchasedExternally)))) return !1;
    let u = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        d = !c && null != r.userStatus && (0, y.zE)(r.userStatus, b.jn.QUEST_BAR);
    return i && !d && !u && !o;
}
function B(e) {
    let { location: t } = e,
        n = G({
            location: t,
            quest: U()
        });
    return 0 !== (0, a.e7)([E.Z], () => E.Z.lastFetchedCurrentQuests) && !n;
}
