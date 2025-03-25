n.d(t, {
    DH: () => G,
    Ks: () => U,
    Ws: () => F,
    g2: () => k,
    hf: () => x,
    k3: () => j,
    qN: () => B,
    tP: () => M
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(594190),
    d = n(98278),
    f = n(703656),
    _ = n(594174),
    p = n(78839),
    h = n(617136),
    m = n(915750),
    g = n(272008),
    E = n(113434),
    b = n(569984),
    v = n(497505),
    y = n(918701),
    O = n(977156),
    I = n(920916),
    S = n(669041),
    T = n(341907),
    A = n(46140),
    N = n(981631),
    C = n(215023),
    R = n(388032);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: o } = e,
        s = (0, a.e7)([_.default], () => {
            var e;
            return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        }),
        l = (0, h.O5)();
    return i.useCallback(() => {
        null != t &&
            (l({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: o
            }),
            s
                ? (0, y.Bg)(t.config)
                    ? (0, T.openQuestsNitroRewardModal)(t, n)
                    : (0, y.Xv)(t.config)
                      ? (0, I.m)(t, n)
                      : (0, y.vQ)(t.config)
                        ? (0, T.openQuestInGameRewardModal)(t, n)
                        : (0, y.xN)(t.config)
                          ? (0, T.openQuestOrbsRewardModal)(t, n)
                          : (0, T.openQuestsRewardCodeModal)({
                                questId: t.id,
                                location: n,
                                questContentPosition: r
                            })
                : (0, S.B)());
    }, [t, l, n, r, o, s]);
}
function M(e) {
    var t;
    let n = (0, a.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let k = (e) => {
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
    j = (e, t) => {
        let { message: n, xboxURL: i } = (0, E.KX)(),
            o = (0, h.O5)(),
            a = (n) => {
                var r;
                let a = n.target;
                (null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) === 'a' &&
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA: a.getAttribute('href') === i ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, r.jsx)('span', {
            onClick: a,
            children: n
        });
    };
function U(e) {
    var t;
    let { quest: n, progressState: r, isCollectibleQuest: o, location: a, questContentPosition: s, questContentRowIndex: u, inGiftInventory: _, isVideoQuest: p, inGameQuest: b } = e,
        v = x({
            quest: n,
            location: a,
            questContentPosition: s,
            questContentRowIndex: u
        }),
        O = (0, E._s)({ quest: n }),
        I = (0, E.Rf)(n),
        S = i.useCallback(() => {
            (0, d.$)();
        }, []),
        P = i.useCallback(() => {
            (0, c.mK)({
                openInLayer: !1,
                tab: C.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: l.Z.QUEST_HOME_PAGE
            });
        }, []),
        D = null === (t = (0, m.WD)()) || void 0 === t ? void 0 : t.getId();
    return i.useMemo(() => {
        switch (r) {
            case E.OH.UNACCEPTED:
                let e = R.NW.string(R.t.kUQLMD),
                    t = h.jZ.ACCEPT_QUEST;
                return (
                    p && ((e = R.NW.string(R.t.umdNio)), (t = h.jZ.START_QUEST)),
                    b && (n.config.features.includes(A.S7.START_QUEST_CTA) ? ((e = R.NW.string(R.t.E80Bdn)), (t = h.jZ.START_QUEST)) : ((e = R.NW.string(R.t.l7E81t)), (t = h.jZ.ACCEPT_QUEST))),
                    {
                        text: e,
                        tooltipText: e,
                        onClick: () => {
                            (0, g.AH)(n.id, {
                                questContent: a,
                                questContentCTA: t,
                                questContentPosition: s,
                                questContentRowIndex: u
                            }),
                                p ? (0, T.openVideoQuestModal)(n) : b && n.config.features.includes(A.S7.START_QUEST_CTA) && (0, f.uL)(N.Z5c.ACTIVITY_DETAILS(n.config.application.id));
                        }
                    }
                );
            case E.OH.ACCEPTED:
            case E.OH.IN_PROGRESS:
                if (O && _)
                    return {
                        text: R.NW.string(R.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, y.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: h.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: u,
                                    impressionId: D
                                }
                            )
                    };
                if (p)
                    return {
                        text: (0, y.F9)(I),
                        tooltipText: R.NW.string(R.t.hsbwjo),
                        onClick: () => (0, T.openVideoQuestModal)(n)
                    };
                return {
                    text: R.NW.string(R.t.cfY4PD),
                    tooltipText: R.NW.string(R.t.hsbwjo),
                    onClick: null
                };
            case E.OH.COMPLETED:
                return {
                    text: R.NW.string(R.t.cfY4PD),
                    tooltipText: null,
                    onClick: v
                };
            case E.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: v
                };
                if (o) return L(w({}, i), { text: R.NW.string(R.t.MAS7uL) });
                if ((0, y.vQ)(n.config)) return L(w({}, i), { text: R.NW.string(R.t.vTgCW1) });
                if ((0, y.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: S,
                        text: R.NW.string(R.t['eQX+go'])
                    };
                else if ((0, y.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: R.NW.string(R.t.WYchdX),
                        onClick: P
                    };
                return L(w({}, i), { text: R.NW.string(R.t.bAGFz8) });
        }
    }, [r, p, O, _, v, o, n, a, s, u, D, I, S, P, b]);
}
function G() {
    return (0, a.e7)([b.Z], () => {
        var e, t;
        return null !== (t = null !== (e = b.Z.questDeliveryOverride) && void 0 !== e ? e : (0, y.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : null;
    });
}
function B(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, O.Zy)({ location: n }),
        o = (0, E.tP)(r),
        { premiumSubscription: s, hasFetchedSubscriptions: l } = (0, a.cj)([p.ZP], () => ({
            premiumSubscription: p.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions()
        })),
        c = (0, a.e7)([b.Z], () => null != b.Z.questDeliveryOverride);
    if (null == r || ((0, y.Bg)(r.config) && (!l || (null == s ? void 0 : s.isPurchasedExternally)))) return !1;
    let u = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        d = !c && null != r.userStatus && (0, y.zE)(r.userStatus, v.jn.QUEST_BAR);
    return i && !d && !u && !o;
}
function F(e) {
    let { location: t } = e,
        n = B({
            location: t,
            quest: G()
        });
    return 0 !== (0, a.e7)([b.Z], () => b.Z.lastFetchedCurrentQuests) && !n;
}
