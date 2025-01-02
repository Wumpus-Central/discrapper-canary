r.d(n, {
    DH: function () {
        return x;
    },
    Ks: function () {
        return L;
    },
    g2: function () {
        return O;
    },
    hf: function () {
        return C;
    },
    k3: function () {
        return D;
    },
    qN: function () {
        return w;
    },
    tP: function () {
        return R;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(752877),
    l = r(442837),
    u = r(481060),
    c = r(594190),
    d = r(98278),
    f = r(594174),
    _ = r(78839),
    h = r(617136),
    p = r(272008),
    m = r(113434),
    g = r(569984),
    E = r(497505),
    v = r(918701),
    I = r(977156),
    T = r(920916),
    b = r(669041),
    y = r(341907),
    S = r(604162),
    A = r(46140),
    N = r(388032);
function C(e) {
    let { quest: n, location: r, questContentPosition: i, questContentRowIndex: a } = e,
        o = (0, l.e7)([f.default], () => {
            var e;
            return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        });
    return s.useCallback(() => {
        null != n &&
            ((0, h._3)({
                questId: n.id,
                questContent: r,
                questContentCTA: h.jZ.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: a
            }),
            o
                ? (0, v.Bg)(n.config)
                    ? (0, y.openQuestsNitroRewardModal)(n, r)
                    : (0, v.Xv)(n.config)
                      ? (0, T.openCollectibleRewardModal)(n, r)
                      : (0, v.vQ)(n.config)
                        ? (0, y.openQuestInGameRewardModal)(n, r)
                        : (0, y.openQuestsRewardCodeModal)({
                              questId: n.id,
                              location: r,
                              questContentPosition: i
                          })
                : (0, b.openRewardModalUnverified)());
    }, [n, r, i, o, a]);
}
function R(e) {
    var n;
    let r = (0, l.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)).find((n) => (null == n ? void 0 : n.id) === e);
    if (null == r) return !1;
    let i = Date.now() - 25920000000;
    return i <= (null !== (n = r.lastLaunched) && void 0 !== n ? n : 0);
}
let O = (e) => {
        let { useReducedMotion: n, className: r } = e,
            [i, l] = (0, u.useSpring)(() => ({})),
            c = s.useRef(!1),
            d = (e) => {
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
                        immediate: n
                    });
            },
            f = (0, o.animated)(u.RefreshIcon);
        return {
            render: () =>
                (0, a.jsx)(f, {
                    className: r,
                    style: n ? void 0 : i,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: d,
            stopAnimation: () => {
                c.current = !1;
            }
        };
    },
    D = (e, n) => {
        let { message: r, xboxURL: i } = (0, m.KX)(),
            s = (r) => {
                var a;
                let s = r.target;
                if ((null == s ? void 0 : null === (a = s.tagName) || void 0 === a ? void 0 : a.toLowerCase()) !== 'a') return;
                let o = s.getAttribute('href') === i ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, h._3)({
                    questId: e,
                    questContent: n,
                    questContentCTA: o
                });
            };
        return (0, a.jsx)('span', {
            onClick: s,
            children: r
        });
    };
function L(e) {
    let { quest: n, progressState: r, isCollectibleQuest: i, location: a, questContentPosition: o, questContentRowIndex: l, inGiftInventory: u, isVideoQuest: c } = e,
        f = C({
            quest: n,
            location: a,
            questContentPosition: o,
            questContentRowIndex: l
        }),
        _ = (0, m._s)({ quest: n }),
        g = (0, m.Rf)(n),
        E = (0, m.GU)(n),
        I = E.length > 0 ? E[0] : null,
        T = s.useCallback(() => {
            (0, d.$)();
        }, []);
    return s.useMemo(() => {
        if (null != I)
            return {
                text: N.intl.string(N.t.k4z4en),
                tooltipText: I,
                onClick: null
            };
        switch (r) {
            case m.OH.UNACCEPTED:
                let e = c ? N.intl.string(N.t.umdNio) : N.intl.string(N.t.kUQLMD),
                    s = c ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, p.AH)(n.id, {
                            questContent: a,
                            questContentCTA: s,
                            questContentPosition: o,
                            questContentRowIndex: l
                        }),
                            c && (0, y.openVideoQuestModal)(n);
                    }
                };
            case m.OH.ACCEPTED:
            case m.OH.IN_PROGRESS:
                if (_ && u)
                    return {
                        text: N.intl.string(N.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, v.gI)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: h.jZ.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: l
                                }
                            )
                    };
                if (c)
                    return {
                        text: (0, S.F9)(g),
                        tooltipText: N.intl.string(N.t.hsbwjo),
                        onClick: () => (0, y.openVideoQuestModal)(n)
                    };
                return {
                    text: N.intl.string(N.t.cfY4PD),
                    tooltipText: N.intl.string(N.t.hsbwjo),
                    onClick: null
                };
            case m.OH.COMPLETED:
                return {
                    text: N.intl.string(N.t.cfY4PD),
                    tooltipText: null,
                    onClick: f
                };
            case m.OH.CLAIMED:
                let d = {
                    tooltipText: null,
                    onClick: f
                };
                if (i)
                    return {
                        ...d,
                        text: N.intl.string(N.t.MAS7uL)
                    };
                if ((0, v.vQ)(n.config))
                    return {
                        ...d,
                        text: N.intl.string(N.t.vTgCW1)
                    };
                else if ((0, v.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: T,
                        text: N.intl.string(N.t['eQX+go'])
                    };
                return {
                    ...d,
                    text: N.intl.string(N.t.bAGFz8)
                };
        }
    }, [n, i, T, c, a, f, r, o, l, _, u, g, I]);
}
function x() {
    let e = (0, I.ym)({ location: A.dr.QUESTS_BAR });
    return (0, l.e7)([g.Z], () => {
        var n, r;
        return null !== (r = null !== (n = g.Z.questDeliveryOverride) && void 0 !== n ? n : (0, v.PM)(g.Z.quests, g.Z.questToDeliverForPlacement, E.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== r ? r : e ? null : (0, v._)(g.Z.quests, E.jn.QUEST_BAR);
    });
}
function w(e) {
    var n;
    let { location: r, quest: i } = e,
        a = (0, I.Zy)({ location: r }),
        s = (0, m.tP)(i),
        { premiumSubscription: o, hasFetchedSubscriptions: u } = (0, l.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        }));
    if (null == i || ((0, v.Bg)(i.config) && (!u || (null == o ? void 0 : o.isPurchasedExternally)))) return !1;
    let c = (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        d = null != i.userStatus && (0, v.zE)(i.userStatus, E.jn.QUEST_BAR);
    return a && !d && !c && !s;
}
