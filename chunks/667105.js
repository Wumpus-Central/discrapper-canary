n.d(t, {
    DH: () => G,
    Ks: () => U,
    Ws: () => V,
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
    f = n(594174),
    _ = n(78839),
    p = n(617136),
    h = n(915750),
    m = n(272008),
    g = n(113434),
    E = n(569984),
    v = n(497505),
    b = n(918701),
    y = n(977156),
    O = n(880199),
    I = n(920916),
    S = n(669041),
    T = n(341907),
    N = n(604162),
    A = n(642145),
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
                ? (0, b.Bg)(t.config)
                    ? (0, T.openQuestsNitroRewardModal)(t, n)
                    : (0, b.Xv)(t.config)
                      ? (0, I.m)(t, n)
                      : (0, b.vQ)(t.config)
                        ? (0, T.openQuestInGameRewardModal)(t, n)
                        : (0, b.xN)(t.config)
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
function U(e) {
    var t;
    let { quest: n, progressState: o, isCollectibleQuest: a, location: s, questContentPosition: u, questContentRowIndex: f, inGiftInventory: _, isVideoQuest: E } = e,
        v = x({
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
        P = i.useCallback(() => {
            (0, c.mK)({
                openInLayer: !1,
                tab: C.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: l.Z.QUEST_HOME_PAGE
            });
        }, []),
        D = null === (t = (0, h.WD)()) || void 0 === t ? void 0 : t.getId(),
        M = n.id === A.V;
    return i.useMemo(() => {
        switch (o) {
            case g.OH.UNACCEPTED:
                let e = R.NW.string(R.t.kUQLMD);
                E && M ? (e = R.NW.string(R.t.CwGuEx)) : E && (e = R.NW.string(R.t.umdNio));
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
                        text: R.NW.string(R.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, b.gI)(
                                { quest: n },
                                {
                                    content: s,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: u,
                                    rowIndex: f,
                                    impressionId: D
                                }
                            )
                    };
                if (E)
                    return {
                        text: (0, N.F9)(I),
                        tooltipText: R.NW.string(R.t.hsbwjo),
                        onClick: () => (0, T.openVideoQuestModal)(n)
                    };
                return {
                    text: R.NW.string(R.t.cfY4PD),
                    tooltipText: R.NW.string(R.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                if ((0, b.xN)(n.config)) {
                    let e = (0, b.LM)(n.config);
                    return {
                        tooltipText: null,
                        text: (0, r.jsx)(O.Z, { orbQuantity: e }),
                        onClick: v
                    };
                }
                return {
                    text: R.NW.string(R.t.cfY4PD),
                    tooltipText: null,
                    onClick: v
                };
            case g.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: v
                };
                if (a) return L(w({}, i), { text: R.NW.string(R.t.MAS7uL) });
                if ((0, b.vQ)(n.config)) return L(w({}, i), { text: R.NW.string(R.t.vTgCW1) });
                if ((0, b.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: S,
                        text: R.NW.string(R.t['eQX+go'])
                    };
                else if ((0, b.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: R.NW.string(R.t.iEw2Nz),
                        onClick: P
                    };
                return L(w({}, i), { text: R.NW.string(R.t.bAGFz8) });
        }
    }, [o, E, y, _, v, a, n, s, u, f, D, I, S, M, P]);
}
function G() {
    return (0, a.e7)([E.Z], () => {
        var e, t;
        return null !== (t = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, b.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : null;
    });
}
function B(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, y.Zy)({ location: n }),
        o = (0, g.tP)(r),
        { premiumSubscription: s, hasFetchedSubscriptions: l } = (0, a.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        })),
        c = (0, a.e7)([E.Z], () => null != E.Z.questDeliveryOverride);
    if (null == r || ((0, b.Bg)(r.config) && (!l || (null == s ? void 0 : s.isPurchasedExternally)))) return !1;
    let u = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        d = !c && null != r.userStatus && (0, b.zE)(r.userStatus, v.jn.QUEST_BAR);
    return i && !d && !u && !o;
}
function V(e) {
    let { location: t } = e,
        n = B({
            location: t,
            quest: G()
        });
    return 0 !== (0, a.e7)([E.Z], () => E.Z.lastFetchedCurrentQuests) && !n;
}
