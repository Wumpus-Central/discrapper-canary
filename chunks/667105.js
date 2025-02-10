n.d(t, {
    DH: () => M,
    Ks: () => P,
    Ws: () => U,
    g2: () => x,
    hf: () => D,
    k3: () => w,
    qN: () => k,
    tP: () => L
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(335131),
    c = n(594190),
    d = n(98278),
    f = n(594174),
    _ = n(78839),
    p = n(617136),
    h = n(915750),
    m = n(272008),
    g = n(113434),
    E = n(569984),
    v = n(497505),
    y = n(918701),
    I = n(977156),
    T = n(880199),
    b = n(920916),
    S = n(669041),
    A = n(341907),
    N = n(604162),
    C = n(642145),
    R = n(215023),
    O = n(388032);
function D(e) {
    let { quest: t, location: n, questContentPosition: i, questContentRowIndex: a } = e,
        o = (0, s.e7)([f.default], () => {
            var e;
            return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        }),
        l = (0, p.O5)();
    return r.useCallback(() => {
        null != t &&
            (l({
                questId: t.id,
                questContent: n,
                questContentCTA: p.jZ.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: a
            }),
            o
                ? (0, y.Bg)(t.config)
                    ? (0, A.openQuestsNitroRewardModal)(t, n)
                    : (0, y.Xv)(t.config)
                      ? (0, b.m)(t, n)
                      : (0, y.vQ)(t.config)
                        ? (0, A.openQuestInGameRewardModal)(t, n)
                        : (0, A.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: i
                          })
                : (0, S.B)());
    }, [t, l, n, i, a, o]);
}
function L(e) {
    var t;
    let n = (0, s.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let x = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, l] = (0, o.q_F)(() => ({})),
            u = r.useRef(!1),
            c = (e) => {
                (u.current = !0),
                    l({
                        from: { rotate: '0deg' },
                        to: { rotate: '360deg' },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100
                        },
                        loop: () => (null != e ? e : u.current),
                        immediate: t
                    });
            },
            d = (0, a.animated)(o.DuK);
        return {
            render: () =>
                (0, i.jsx)(d, {
                    className: n,
                    style: t ? void 0 : s,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: c,
            stopAnimation: () => {
                u.current = !1;
            }
        };
    },
    w = (e, t) => {
        let { message: n, xboxURL: r } = (0, g.KX)(),
            a = (0, p.O5)(),
            s = (n) => {
                var i;
                let s = n.target;
                (null == s ? void 0 : null === (i = s.tagName) || void 0 === i ? void 0 : i.toLowerCase()) === 'a' &&
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA: s.getAttribute('href') === r ? p.jZ.HOW_TO_HELP_ARTICLE_XBOX : p.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, i.jsx)('span', {
            onClick: s,
            children: n
        });
    };
function P(e) {
    var t;
    let { quest: n, progressState: a, isCollectibleQuest: s, location: o, questContentPosition: c, questContentRowIndex: f, inGiftInventory: _, isVideoQuest: E } = e,
        v = D({
            quest: n,
            location: o,
            questContentPosition: c,
            questContentRowIndex: f
        }),
        I = (0, g._s)({ quest: n }),
        b = (0, g.Rf)(n),
        S = (0, g.GU)(n),
        L = S.length > 0 ? S[0] : null,
        x = r.useCallback(() => {
            (0, d.$)();
        }, []),
        w = r.useCallback(() => {
            (0, u.mK)({
                openInLayer: !1,
                tab: R.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: l.Z.QUEST_HOME_PAGE
            });
        }, []),
        P = null === (t = (0, h.WD)()) || void 0 === t ? void 0 : t.getId(),
        M = n.id === C.V;
    return r.useMemo(() => {
        if (null != L)
            return {
                text: O.intl.string(O.t.k4z4en),
                tooltipText: L,
                onClick: null
            };
        switch (a) {
            case g.OH.UNACCEPTED:
                let e = O.intl.string(O.t.kUQLMD);
                E && M ? (e = O.intl.string(O.t.CwGuEx)) : E && (e = O.intl.string(O.t.umdNio));
                let t = E ? p.jZ.START_QUEST : p.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, m.AH)(n.id, {
                            questContent: o,
                            questContentCTA: t,
                            questContentPosition: c,
                            questContentRowIndex: f
                        }),
                            E && (0, A.openVideoQuestModal)(n);
                    }
                };
            case g.OH.ACCEPTED:
            case g.OH.IN_PROGRESS:
                if (I && _)
                    return {
                        text: O.intl.string(O.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, y.gI)(
                                { quest: n },
                                {
                                    content: o,
                                    ctaContent: p.jZ.CONNECT_CONSOLE,
                                    position: c,
                                    rowIndex: f,
                                    impressionId: P
                                }
                            )
                    };
                if (E)
                    return {
                        text: (0, N.F9)(b),
                        tooltipText: O.intl.string(O.t.hsbwjo),
                        onClick: () => (0, A.openVideoQuestModal)(n)
                    };
                return {
                    text: O.intl.string(O.t.cfY4PD),
                    tooltipText: O.intl.string(O.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                if ((0, y.xN)(n.config)) {
                    let e = (0, y.LM)(n.config);
                    return {
                        tooltipText: null,
                        text: (0, i.jsx)(T.Z, { orbQuantity: e }),
                        onClick: v
                    };
                }
                return {
                    text: O.intl.string(O.t.cfY4PD),
                    tooltipText: null,
                    onClick: v
                };
            case g.OH.CLAIMED:
                let r = {
                    tooltipText: null,
                    onClick: v
                };
                if (s)
                    return {
                        ...r,
                        text: O.intl.string(O.t.MAS7uL)
                    };
                if ((0, y.vQ)(n.config))
                    return {
                        ...r,
                        text: O.intl.string(O.t.vTgCW1)
                    };
                if ((0, y.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: x,
                        text: O.intl.string(O.t['eQX+go'])
                    };
                else if ((0, y.xN)(n.config))
                    return {
                        tooltipText: null,
                        text: O.intl.string(O.t.iEw2Nz),
                        onClick: w
                    };
                return {
                    ...r,
                    text: O.intl.string(O.t.bAGFz8)
                };
        }
    }, [L, a, E, I, _, v, s, n, o, c, f, P, b, x, M, w]);
}
function M() {
    return (0, s.e7)([E.Z], () => {
        var e, t;
        return null !== (t = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, y.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : null;
    });
}
function k(e) {
    var t;
    let { location: n, quest: i } = e,
        r = (0, I.Zy)({ location: n }),
        a = (0, g.tP)(i),
        { premiumSubscription: o, hasFetchedSubscriptions: l } = (0, s.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        })),
        u = (0, s.e7)([E.Z], () => null != E.Z.questDeliveryOverride);
    if (null == i || ((0, y.Bg)(i.config) && (!l || (null == o ? void 0 : o.isPurchasedExternally)))) return !1;
    let c = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        d = !u && null != i.userStatus && (0, y.zE)(i.userStatus, v.jn.QUEST_BAR);
    return r && !d && !c && !a;
}
function U(e) {
    let { location: t } = e,
        n = k({
            location: t,
            quest: M()
        });
    return 0 !== (0, s.e7)([E.Z], () => E.Z.lastFetchedCurrentQuests) && !n;
}
