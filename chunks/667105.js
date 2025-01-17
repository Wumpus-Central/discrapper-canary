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
    o = r(642128),
    l = r(442837),
    u = r(481060),
    c = r(594190),
    d = r(98278),
    f = r(594174),
    _ = r(78839),
    h = r(617136),
    p = r(915750),
    m = r(272008),
    g = r(113434),
    E = r(569984),
    v = r(497505),
    I = r(918701),
    T = r(977156),
    b = r(920916),
    y = r(669041),
    S = r(341907),
    A = r(604162),
    N = r(388032);
function C(e) {
    let { quest: n, location: r, questContentPosition: i, questContentRowIndex: a } = e,
        o = (0, l.e7)([f.default], () => {
            var e;
            return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        }),
        u = (0, h.O5)();
    return s.useCallback(() => {
        null != n &&
            (u({
                questId: n.id,
                questContent: r,
                questContentCTA: h.jZ.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: a
            }),
            o
                ? (0, I.Bg)(n.config)
                    ? (0, S.openQuestsNitroRewardModal)(n, r)
                    : (0, I.Xv)(n.config)
                      ? (0, b.openCollectibleRewardModal)(n, r)
                      : (0, I.vQ)(n.config)
                        ? (0, S.openQuestInGameRewardModal)(n, r)
                        : (0, S.openQuestsRewardCodeModal)({
                              questId: n.id,
                              location: r,
                              questContentPosition: i
                          })
                : (0, y.openRewardModalUnverified)());
    }, [n, u, r, i, a, o]);
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
        let { message: r, xboxURL: i } = (0, g.KX)(),
            s = (0, h.O5)(),
            o = (r) => {
                var a;
                let o = r.target;
                if ((null == o ? void 0 : null === (a = o.tagName) || void 0 === a ? void 0 : a.toLowerCase()) === 'a')
                    s({
                        questId: e,
                        questContent: n,
                        questContentCTA: o.getAttribute('href') === i ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, a.jsx)('span', {
            onClick: o,
            children: r
        });
    };
function L(e) {
    var n;
    let { quest: r, progressState: i, isCollectibleQuest: a, location: o, questContentPosition: l, questContentRowIndex: u, inGiftInventory: c, isVideoQuest: f } = e,
        _ = C({
            quest: r,
            location: o,
            questContentPosition: l,
            questContentRowIndex: u
        }),
        E = (0, g._s)({ quest: r }),
        v = (0, g.Rf)(r),
        T = (0, g.GU)(r),
        b = T.length > 0 ? T[0] : null,
        y = s.useCallback(() => {
            (0, d.$)();
        }, []),
        R = null === (n = (0, p.WD)()) || void 0 === n ? void 0 : n.getId();
    return s.useMemo(() => {
        if (null != b)
            return {
                text: N.intl.string(N.t.k4z4en),
                tooltipText: b,
                onClick: null
            };
        switch (i) {
            case g.OH.UNACCEPTED:
                let e = f ? N.intl.string(N.t.umdNio) : N.intl.string(N.t.kUQLMD),
                    n = f ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, m.AH)(r.id, {
                            questContent: o,
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
                        text: N.intl.string(N.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, I.gI)(
                                { quest: r },
                                {
                                    content: o,
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
                        tooltipText: N.intl.string(N.t.hsbwjo),
                        onClick: () => (0, S.openVideoQuestModal)(r)
                    };
                return {
                    text: N.intl.string(N.t.cfY4PD),
                    tooltipText: N.intl.string(N.t.hsbwjo),
                    onClick: null
                };
            case g.OH.COMPLETED:
                return {
                    text: N.intl.string(N.t.cfY4PD),
                    tooltipText: null,
                    onClick: _
                };
            case g.OH.CLAIMED:
                let s = {
                    tooltipText: null,
                    onClick: _
                };
                if (a)
                    return {
                        ...s,
                        text: N.intl.string(N.t.MAS7uL)
                    };
                if ((0, I.vQ)(r.config))
                    return {
                        ...s,
                        text: N.intl.string(N.t.vTgCW1)
                    };
                else if ((0, I.Bg)(r.config))
                    return {
                        tooltipText: null,
                        onClick: y,
                        text: N.intl.string(N.t['eQX+go'])
                    };
                return {
                    ...s,
                    text: N.intl.string(N.t.bAGFz8)
                };
        }
    }, [b, i, f, E, c, _, a, r, o, l, u, R, v, y]);
}
function x() {
    return (0, l.e7)([E.Z], () => {
        var e, n;
        return null !== (n = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, I.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== n ? n : null;
    });
}
function w(e) {
    var n;
    let { location: r, quest: i } = e,
        a = (0, T.Zy)({ location: r }),
        s = (0, g.tP)(i),
        { premiumSubscription: o, hasFetchedSubscriptions: u } = (0, l.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        }));
    if (null == i || ((0, I.Bg)(i.config) && (!u || (null == o ? void 0 : o.isPurchasedExternally)))) return !1;
    let c = (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        d = null != i.userStatus && (0, I.zE)(i.userStatus, v.jn.QUEST_BAR);
    return a && !d && !c && !s;
}
