n.d(t, {
    DH: () => k,
    Ks: () => M,
    Ws: () => U,
    g2: () => L,
    hf: () => w,
    k3: () => x,
    qN: () => j,
    tP: () => D
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
    O = n(920916),
    I = n(669041),
    S = n(341907),
    T = n(215023),
    N = n(388032);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
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
                    ? (0, S.openQuestsNitroRewardModal)(t, n)
                    : (0, v.Xv)(t.config)
                      ? (0, O.m)(t, n)
                      : (0, v.vQ)(t.config)
                        ? (0, S.openQuestInGameRewardModal)(t, n)
                        : (0, v.xN)(t.config)
                          ? (0, S.openQuestOrbsRewardModal)(t, n)
                          : (0, S.openQuestsRewardCodeModal)({
                                questId: t.id,
                                location: n,
                                questContentPosition: r
                            })
                : (0, I.B)());
    }, [t, l, n, r, o, s]);
}
function D(e) {
    var t;
    let n = (0, a.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let L = (e) => {
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
    x = (e, t) => {
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
function M(e) {
    var t;
    let { quest: n, progressState: r, isCollectibleQuest: o, location: a, questContentPosition: s, questContentRowIndex: u, inGiftInventory: f, isVideoQuest: _ } = e,
        E = w({
            quest: n,
            location: a,
            questContentPosition: s,
            questContentRowIndex: u
        }),
        b = (0, g._s)({ quest: n }),
        y = (0, g.Rf)(n),
        O = i.useCallback(() => {
            (0, d.$)();
        }, []),
        I = i.useCallback(() => {
            (0, c.mK)({
                openInLayer: !1,
                tab: T.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: l.Z.QUEST_HOME_PAGE
            });
        }, []),
        A = null === (t = (0, h.WD)()) || void 0 === t ? void 0 : t.getId();
    return i.useMemo(() => {
        switch (r) {
            case g.OH.UNACCEPTED:
                let e = N.NW.string(N.t.kUQLMD);
                _ && (e = N.NW.string(N.t.umdNio));
                let t = _ ? p.jZ.START_QUEST : p.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, m.AH)(n.id, {
                            questContent: a,
                            questContentCTA: t,
                            questContentPosition: s,
                            questContentRowIndex: u
                        }),
                            _ && (0, S.openVideoQuestModal)(n);
                    }
                };
            case g.OH.ACCEPTED:
            case g.OH.IN_PROGRESS:
                if (b && f)
                    return {
                        text: N.NW.string(N.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, v.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: u,
                                    impressionId: A
                                }
                            )
                    };
                if (_)
                    return {
                        text: (0, v.F9)(y),
                        tooltipText: N.NW.string(N.t.hsbwjo),
                        onClick: () => (0, S.openVideoQuestModal)(n)
                    };
                return {
                    text: N.NW.string(N.t.cfY4PD),
                    tooltipText: N.NW.string(N.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                return {
                    text: N.NW.string(N.t.cfY4PD),
                    tooltipText: null,
                    onClick: E
                };
            case g.OH.CLAIMED:
                let i = {
                    tooltipText: null,
                    onClick: E
                };
                if (o) return P(C({}, i), { text: N.NW.string(N.t.MAS7uL) });
                if ((0, v.vQ)(n.config)) return P(C({}, i), { text: N.NW.string(N.t.vTgCW1) });
                if ((0, v.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: O,
                        text: N.NW.string(N.t['eQX+go'])
                    };
                else if ((0, v.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: N.NW.string(N.t.WYchdX),
                        onClick: I
                    };
                return P(C({}, i), { text: N.NW.string(N.t.bAGFz8) });
        }
    }, [r, _, b, f, E, o, n, a, s, u, A, y, O, I]);
}
function k() {
    return (0, a.e7)([E.Z], () => {
        var e, t;
        return null !== (t = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, v.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, b.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : null;
    });
}
function j(e) {
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
function U(e) {
    let { location: t } = e,
        n = j({
            location: t,
            quest: k()
        });
    return 0 !== (0, a.e7)([E.Z], () => E.Z.lastFetchedCurrentQuests) && !n;
}
