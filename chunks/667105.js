n.d(t, {
    DH: () => L,
    Ks: () => D,
    Ws: () => w,
    g2: () => R,
    hf: () => N,
    k3: () => O,
    qN: () => x,
    tP: () => C
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(442837),
    o = n(481060),
    l = n(594190),
    u = n(98278),
    c = n(594174),
    d = n(78839),
    f = n(617136),
    _ = n(915750),
    p = n(272008),
    h = n(113434),
    m = n(569984),
    g = n(497505),
    E = n(918701),
    v = n(977156),
    y = n(920916),
    I = n(669041),
    T = n(341907),
    b = n(604162),
    S = n(642145),
    A = n(388032);
function N(e) {
    let { quest: t, location: n, questContentPosition: i, questContentRowIndex: a } = e,
        o = (0, s.e7)([c.default], () => {
            var e;
            return null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        }),
        l = (0, f.O5)();
    return r.useCallback(() => {
        null != t &&
            (l({
                questId: t.id,
                questContent: n,
                questContentCTA: f.jZ.CLAIM_REWARD,
                questContentPosition: i,
                questContentRowIndex: a
            }),
            o
                ? (0, E.Bg)(t.config)
                    ? (0, T.openQuestsNitroRewardModal)(t, n)
                    : (0, E.Xv)(t.config)
                      ? (0, y.m)(t, n)
                      : (0, E.vQ)(t.config)
                        ? (0, T.openQuestInGameRewardModal)(t, n)
                        : (0, T.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: i
                          })
                : (0, I.B)());
    }, [t, l, n, i, a, o]);
}
function C(e) {
    var t;
    let n = (0, s.Wu)([l.ZP], () => l.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    return null != n && Date.now() - 25920000000 <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let R = (e) => {
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
    O = (e, t) => {
        let { message: n, xboxURL: r } = (0, h.KX)(),
            a = (0, f.O5)(),
            s = (n) => {
                var i;
                let s = n.target;
                (null == s ? void 0 : null === (i = s.tagName) || void 0 === i ? void 0 : i.toLowerCase()) === 'a' &&
                    a({
                        questId: e,
                        questContent: t,
                        questContentCTA: s.getAttribute('href') === r ? f.jZ.HOW_TO_HELP_ARTICLE_XBOX : f.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION
                    });
            };
        return (0, i.jsx)('span', {
            onClick: s,
            children: n
        });
    };
function D(e) {
    var t;
    let { quest: n, progressState: i, isCollectibleQuest: a, location: s, questContentPosition: o, questContentRowIndex: l, inGiftInventory: c, isVideoQuest: d } = e,
        m = N({
            quest: n,
            location: s,
            questContentPosition: o,
            questContentRowIndex: l
        }),
        g = (0, h._s)({ quest: n }),
        v = (0, h.Rf)(n),
        y = (0, h.GU)(n),
        I = y.length > 0 ? y[0] : null,
        C = r.useCallback(() => {
            (0, u.$)();
        }, []),
        R = null === (t = (0, _.WD)()) || void 0 === t ? void 0 : t.getId(),
        O = n.id === S.V;
    return r.useMemo(() => {
        if (null != I)
            return {
                text: A.intl.string(A.t.k4z4en),
                tooltipText: I,
                onClick: null
            };
        switch (i) {
            case h.OH.UNACCEPTED:
                let e = A.intl.string(A.t.kUQLMD);
                d && O ? (e = A.intl.string(A.t.CwGuEx)) : d && (e = A.intl.string(A.t.umdNio));
                let t = d ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: e,
                    onClick: () => {
                        (0, p.AH)(n.id, {
                            questContent: s,
                            questContentCTA: t,
                            questContentPosition: o,
                            questContentRowIndex: l
                        }),
                            d && (0, T.openVideoQuestModal)(n);
                    }
                };
            case h.OH.ACCEPTED:
            case h.OH.IN_PROGRESS:
                if (g && c)
                    return {
                        text: A.intl.string(A.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, E.gI)(
                                { quest: n },
                                {
                                    content: s,
                                    ctaContent: f.jZ.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: l,
                                    impressionId: R
                                }
                            )
                    };
                if (d)
                    return {
                        text: (0, b.F9)(v),
                        tooltipText: A.intl.string(A.t.hsbwjo),
                        onClick: () => (0, T.openVideoQuestModal)(n)
                    };
                return {
                    text: A.intl.string(A.t.cfY4PD),
                    tooltipText: A.intl.string(A.t.hsbwjo),
                    onClick: null
                };
            case h.OH.COMPLETED:
                return {
                    text: A.intl.string(A.t.cfY4PD),
                    tooltipText: null,
                    onClick: m
                };
            case h.OH.CLAIMED:
                let r = {
                    tooltipText: null,
                    onClick: m
                };
                if (a)
                    return {
                        ...r,
                        text: A.intl.string(A.t.MAS7uL)
                    };
                if ((0, E.vQ)(n.config))
                    return {
                        ...r,
                        text: A.intl.string(A.t.vTgCW1)
                    };
                if ((0, E.Bg)(n.config))
                    return {
                        tooltipText: null,
                        onClick: C,
                        text: A.intl.string(A.t['eQX+go'])
                    };
                return {
                    ...r,
                    text: A.intl.string(A.t.bAGFz8)
                };
        }
    }, [I, i, d, g, c, m, a, n, s, o, l, R, v, C, O]);
}
function L() {
    return (0, s.e7)([m.Z], () => {
        var e, t;
        return null !== (t = null !== (e = m.Z.questDeliveryOverride) && void 0 !== e ? e : (0, E.PM)(m.Z.quests, m.Z.questToDeliverForPlacement, g.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : null;
    });
}
function x(e) {
    var t;
    let { location: n, quest: i } = e,
        r = (0, v.Zy)({ location: n }),
        a = (0, h.tP)(i),
        { premiumSubscription: o, hasFetchedSubscriptions: l } = (0, s.cj)([d.ZP], () => ({
            premiumSubscription: d.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: d.ZP.hasFetchedSubscriptions()
        })),
        u = (0, s.e7)([m.Z], () => null != m.Z.questDeliveryOverride);
    if (null == i || ((0, E.Bg)(i.config) && (!l || (null == o ? void 0 : o.isPurchasedExternally)))) return !1;
    let c = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        f = !u && null != i.userStatus && (0, E.zE)(i.userStatus, g.jn.QUEST_BAR);
    return r && !f && !c && !a;
}
function w(e) {
    let { location: t } = e,
        n = x({
            location: t,
            quest: L()
        });
    return 0 !== (0, s.e7)([m.Z], () => m.Z.lastFetchedCurrentQuests) && !n;
}
