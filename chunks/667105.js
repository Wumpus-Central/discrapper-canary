n.d(t, {
    DH: () => U,
    Ks: () => j,
    Ws: () => B,
    g2: () => M,
    hf: () => L,
    k3: () => k,
    qN: () => G,
    tP: () => x
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
    f = n(594174),
    _ = n(78839),
    p = n(617136),
    h = n(915750),
    m = n(272008),
    g = n(113434),
    E = n(569984),
    b = n(497505),
    v = n(918701),
    y = n(977156),
    O = n(880199),
    I = n(920916),
    S = n(669041),
    T = n(341907),
    N = n(642145),
    A = n(215023),
    C = n(388032);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: o } = e,
        s = (0, a.e7)([f.default], () => {
            var e;
            return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
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
                ? (0, v.Bg)(t.config)
                    ? (0, T.openQuestsNitroRewardModal)(t, n)
                    : (0, v.Xv)(t.config)
                      ? (0, I.m)(t, n)
                      : (0, v.vQ)(t.config)
                        ? (0, T.openQuestInGameRewardModal)(t, n)
                        : (0, v.xN)(t.config)
                          ? (0, T.openQuestOrbsRewardModal)(t, n)
                          : (0, T.openQuestsRewardCodeModal)({
                                questId: t.id,
                                location: n,
                                questContentPosition: r
                            })
                : (0, S.B)());
    }, [t, l, n, r, o, s]);
}
function x(e) {
    var t;
    let n = (0, a.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let M = (e) => {
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
    k = (e, t) => {
        let { message: n, xboxURL: i } = (0, g.KX)(),
            o = (0, p.O5)(),
            a = (n) => {
                var r;
                let a = n.target;
                (null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) === 'a' &&
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
function j(e) {
    var t;
    let { quest: n, progressState: o, isCollectibleQuest: a, location: s, questContentPosition: u, questContentRowIndex: f, inGiftInventory: _, isVideoQuest: E } = e,
        b = L({
            quest: n,
            location: s,
            questContentPosition: u,
            questContentRowIndex: f
        }),
        y = (0, g._s)({ quest: n }),
        I = (0, g.Rf)(n),
        S = i.useCallback(() => {
            (0, d.$)();
        }, []),
        R = i.useCallback(() => {
            (0, c.mK)({
                openInLayer: !1,
                tab: A.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: l.Z.QUEST_HOME_PAGE
            });
        }, []),
        w = null === (t = (0, h.WD)()) || void 0 === t ? void 0 : t.getId(),
        x = n.id === N.V;
    return i.useMemo(() => {
        switch (o) {
            case g.OH.UNACCEPTED:
                let e = C.NW.string(C.t.kUQLMD);
                E && x ? (e = C.NW.string(C.t.CwGuEx)) : E && (e = C.NW.string(C.t.umdNio));
                let t = E ? p.jZ.START_QUEST : p.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, m.AH)(n.id, {
                            questContent: s,
                            questContentCTA: t,
                            questContentPosition: u,
                            questContentRowIndex: f
                        }),
                            E && (0, T.openVideoQuestModal)(n);
                    }
                };
            case g.OH.ACCEPTED:
            case g.OH.IN_PROGRESS:
                if (y && _)
                    return {
                        text: C.NW.string(C.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, v.gI)(
                                { quest: n },
                                {
                                    content: s,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: u,
                                    rowIndex: f,
                                    impressionId: w
                                }
                            )
                    };
                if (E)
                    return {
                        text: (0, v.F9)(I),
                        tooltipText: C.NW.string(C.t.hsbwjo),
                        onClick: () => (0, T.openVideoQuestModal)(n)
                    };
                return {
                    text: C.NW.string(C.t.cfY4PD),
                    tooltipText: C.NW.string(C.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                if ((0, v.xN)(n.config)) {
                    let e = (0, v.LM)(n.config);
                    return {
                        tooltipText: null,
                        text: (0, r.jsx)(O.Z, { orbQuantity: e }),
                        onClick: b
                    };
                }
                return {
                    text: C.NW.string(C.t.cfY4PD),
                    tooltipText: null,
                    onClick: b
                };
            case g.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: b
                };
                if (a) return D(P({}, i), { text: C.NW.string(C.t.MAS7uL) });
                if ((0, v.vQ)(n.config)) return D(P({}, i), { text: C.NW.string(C.t.vTgCW1) });
                if ((0, v.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: S,
                        text: C.NW.string(C.t['eQX+go'])
                    };
                else if ((0, v.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: C.NW.string(C.t.iEw2Nz),
                        onClick: R
                    };
                return D(P({}, i), { text: C.NW.string(C.t.bAGFz8) });
        }
    }, [o, E, y, _, b, a, n, s, u, f, w, I, S, x, R]);
}
function U() {
    return (0, a.e7)([E.Z], () => {
        var e, t;
        return null !== (t = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, v.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, b.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : null;
    });
}
function G(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, y.Zy)({ location: n }),
        o = (0, g.tP)(r),
        { premiumSubscription: s, hasFetchedSubscriptions: l } = (0, a.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        })),
        c = (0, a.e7)([E.Z], () => null != E.Z.questDeliveryOverride);
    if (null == r || ((0, v.Bg)(r.config) && (!l || (null == s ? void 0 : s.isPurchasedExternally)))) return !1;
    let u = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        d = !c && null != r.userStatus && (0, v.zE)(r.userStatus, b.jn.QUEST_BAR);
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
