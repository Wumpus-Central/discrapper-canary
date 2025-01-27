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
        return N;
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
    o = r(192379),
    s = r(642128),
    l = r(442837),
    u = r(481060),
    c = r(594190),
    d = r(98278),
    f = r(594174),
    p = r(78839),
    h = r(617136),
    _ = r(915750),
    m = r(272008),
    g = r(113434),
    E = r(569984),
    v = r(497505),
    y = r(918701),
    b = r(977156),
    I = r(920916),
    T = r(669041),
    S = r(341907),
    A = r(604162),
    C = r(388032);
function N(e) {
    let { quest: n, location: r, questContentPosition: i, questContentRowIndex: a } = e,
        s = (0, l.e7)([f.default], () => {
            var e;
            return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        }),
        u = (0, h.O5)();
    return o.useCallback(() => {
        null != n &&
            (u({
                questId: n.id,
                questContent: r,
                questContentCTA: h.jZ.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: a
            }),
            s
                ? (0, y.Bg)(n.config)
                    ? (0, S.openQuestsNitroRewardModal)(n, r)
                    : (0, y.Xv)(n.config)
                      ? (0, I.openCollectibleRewardModal)(n, r)
                      : (0, y.vQ)(n.config)
                        ? (0, S.openQuestInGameRewardModal)(n, r)
                        : (0, S.openQuestsRewardCodeModal)({
                              questId: n.id,
                              location: r,
                              questContentPosition: i
                          })
                : (0, T.openRewardModalUnverified)());
    }, [n, u, r, i, a, s]);
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
            c = o.useRef(!1),
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
            f = (0, s.animated)(u.RefreshIcon);
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
        let { message: r, xboxURL: i } = (0, g.KX)(),
            o = (0, h.O5)(),
            s = (r) => {
                var a;
                let s = r.target;
                if ((null == s ? void 0 : null === (a = s.tagName) || void 0 === a ? void 0 : a.toLowerCase()) === 'a')
                    o({
                        questId: e,
                        questContent: n,
                        questContentCTA: s.getAttribute('href') === i ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, a.jsx)('span', {
            onClick: s,
            children: r
        });
    };
function L(e) {
    var n;
    let { quest: r, progressState: i, isCollectibleQuest: a, location: s, questContentPosition: l, questContentRowIndex: u, inGiftInventory: c, isVideoQuest: f } = e,
        p = N({
            quest: r,
            location: s,
            questContentPosition: l,
            questContentRowIndex: u
        }),
        E = (0, g._s)({ quest: r }),
        v = (0, g.Rf)(r),
        b = (0, g.GU)(r),
        I = b.length > 0 ? b[0] : null,
        T = o.useCallback(() => {
            (0, d.$)();
        }, []),
        R = null === (n = (0, _.WD)()) || void 0 === n ? void 0 : n.getId();
    return o.useMemo(() => {
        if (null != I)
            return {
                text: C.intl.string(C.t.k4z4en),
                tooltipText: I,
                onClick: null
            };
        switch (i) {
            case g.OH.UNACCEPTED:
                let e = f ? C.intl.string(C.t.umdNio) : C.intl.string(C.t.kUQLMD),
                    n = f ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, m.AH)(r.id, {
                            questContent: s,
                            questContentCTA: n,
                            questContentPosition: l,
                            questContentRowIndex: u
                        }),
                            f && (0, S.openVideoQuestModal)(r);
                    }
                };
            case g.OH.ACCEPTED:
            case g.OH.IN_PROGRESS:
                if (E && c)
                    return {
                        text: C.intl.string(C.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, y.gI)(
                                { quest: r },
                                {
                                    content: s,
                                    ctaContent: h.jZ.CONNECT_CONSOLE,
                                    position: l,
                                    rowIndex: u,
                                    impressionId: R
                                }
                            )
                    };
                if (f)
                    return {
                        text: (0, A.F9)(v),
                        tooltipText: C.intl.string(C.t.hsbwjo),
                        onClick: () => (0, S.openVideoQuestModal)(r)
                    };
                return {
                    text: C.intl.string(C.t.cfY4PD),
                    tooltipText: C.intl.string(C.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                return {
                    text: C.intl.string(C.t.cfY4PD),
                    tooltipText: null,
                    onClick: p
                };
            case g.OH.CLAIMED:
                let o = {
                    tooltipText: null,
                    onClick: p
                };
                if (a)
                    return {
                        ...o,
                        text: C.intl.string(C.t.MAS7uL)
                    };
                if ((0, y.vQ)(r.config))
                    return {
                        ...o,
                        text: C.intl.string(C.t.vTgCW1)
                    };
                else if ((0, y.Bg)(r.config))
                    return {
                        tooltipText: null,
                        onClick: T,
                        text: C.intl.string(C.t['eQX+go'])
                    };
                return {
                    ...o,
                    text: C.intl.string(C.t.bAGFz8)
                };
        }
    }, [I, i, f, E, c, p, a, r, s, l, u, R, v, T]);
}
function x() {
    return (0, l.e7)([E.Z], () => {
        var e, n;
        return null !== (n = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, y.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== n ? n : null;
    });
}
function w(e) {
    var n;
    let { location: r, quest: i } = e,
        a = (0, b.Zy)({ location: r }),
        o = (0, g.tP)(i),
        { premiumSubscription: s, hasFetchedSubscriptions: u } = (0, l.cj)([p.ZP], () => ({
            premiumSubscription: p.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions()
        })),
        c = (0, l.e7)([E.Z], () => null != E.Z.questDeliveryOverride);
    if (null == i || ((0, y.Bg)(i.config) && (!u || (null == s ? void 0 : s.isPurchasedExternally)))) return !1;
    let d = (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        f = !c && null != i.userStatus && (0, y.zE)(i.userStatus, v.jn.QUEST_BAR);
    return a && !f && !d && !o;
}
