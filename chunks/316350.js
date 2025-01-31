n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(642128),
    o = n(481060),
    c = n(205641),
    d = n(119331),
    u = n(902807),
    m = n(402766),
    h = n(267642),
    g = n(981631),
    x = n(388032),
    p = n(534560);
let _ = {
        tension: 200,
        friction: 20
    },
    C = {
        ..._,
        clamp: !0
    };
function f(e) {
    let [t, n] = r.useState(0),
        { numUnlocked: l, numRequired: d } = e,
        u = () => {
            n(1);
        },
        m = () => {
            n(2);
        },
        h = 2 === t,
        g = 1 === t;
    if (!(!(l >= d) && l / d >= 0.8) || h) return null;
    let _ = g || h ? p.hidden : null,
        f = g ? c.Z.Stages.FLYING : c.Z.Stages.HOVERING;
    return (0, i.jsx)(o.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: C,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, i.jsxs)(a.animated.div, {
                className: p.tierClose,
                style: e,
                children: [
                    (0, i.jsx)(c.Z, {
                        className: p.tierCloseMechaWumpus,
                        stage: f,
                        onFlyingComplete: m
                    }),
                    (0, i.jsx)('div', {
                        className: s()(p.tierCloseHint, _),
                        children: x.intl.format(x.t.qV3Erq, { numLeft: d - l })
                    }),
                    (0, i.jsx)(o.P3F, {
                        onClick: u,
                        className: s()(p.tierCloseClose, _),
                        children: (0, i.jsx)(o.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function v(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: l, onSetRef: a, tier: c, showHeaderLockStatus: d, headerButton: u = null, subscriptionsRequired: h, subscriptionCount: g, className: x } = e,
        C = (e) => {
            null == a || a(e);
        },
        [v, N] = r.useState(0);
    return (
        r.useLayoutEffect(() => {
            n && N(1);
        }, [n]),
        (0, i.jsx)(o.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 0 === v ? 50 : 0 },
            config: _,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: s()(
                        {
                            [p.tierHeaderWithoutCardBody]: !t,
                            [p.tierHeaderUnlocked]: l,
                            [p.tierHeaderLocked]: !l
                        },
                        x
                    ),
                    ref: C,
                    children: (0, i.jsxs)('div', {
                        className: p.tierHeaderContent,
                        children: [
                            (0, i.jsx)(m.Z, {
                                tier: c.tier,
                                className: s()(p.tierIcon, { [p.tierIconLocked]: !l })
                            }),
                            (0, i.jsx)('div', {
                                className: s()(p.tierTitle, { [p.tierTitleActive]: l }),
                                children: c.title
                            }),
                            d
                                ? (0, i.jsx)(j, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: u,
                                      subscriptionsRequired: h,
                                      hasAnimatedUnlocked: l
                                  })
                                : null,
                            (0, i.jsx)(f, {
                                numUnlocked: g,
                                numRequired: h
                            })
                        ]
                    })
                })
        })
    );
}
function N(e) {
    let { children: t, subscriptionCount: n, onSetRef: r, tier: l, isAnimatedTo: a, hasBottomMargin: c, headerButton: m = null, withCardBody: _ = !0, guildId: C, showHeaderLockStatus: f = !0 } = e,
        N = (0, h.vn)(C)[l.tier],
        j = a && n >= N,
        I = l.tier !== g.Eu4.NONE && l.tier !== g.Eu4.TIER_1,
        E = (e, t) => {
            var n;
            let { icon: r, className: l } = (0, d.t)(e.icon, t);
            return (0, i.jsxs)(
                'div',
                {
                    className: p.perk,
                    children: [
                        (0, i.jsx)(u.Z, {
                            name: String(e.icon),
                            icon: r,
                            className: p.perkIcon,
                            iconClassName: l
                        }),
                        (0, i.jsxs)('div', {
                            className: p.perkText,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: p.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, i.jsx)(o.IGR, {
                                                  className: p.newBadge,
                                                  text: x.intl.string(x.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, i.jsx)('div', {
                                    className: p.perkDescription,
                                    children: e.description
                                })
                            ]
                        })
                    ]
                },
                null === (n = e.title) || void 0 === n ? void 0 : n.toString()
            );
        };
    return (0, i.jsxs)(
        'div',
        {
            className: s()(p.tier, { [p.tierBottomMargin]: c }),
            children: [
                (0, i.jsx)(v, {
                    subscriptionCount: n,
                    tier: l,
                    headerButton: m,
                    showHeaderLockStatus: f,
                    onSetRef: (e) => {
                        null != r && r(e, l);
                    },
                    withCardBody: _,
                    guildId: C,
                    hasBottomMargin: c,
                    subscriptionsRequired: N,
                    hasAnimatedUnlocked: j,
                    isAnimatedTo: a
                }),
                (0, i.jsx)('div', {
                    className: s()({ [p.tierBody]: _ }),
                    children:
                        null != t
                            ? t
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      I
                                          ? (0, i.jsx)('div', {
                                                className: p.previousPerks,
                                                children: x.intl.string(x.t.oKzyRU)
                                            })
                                          : null,
                                      null != l.perks &&
                                          (0, i.jsx)('div', {
                                              className: p.perks,
                                              children: l.perks.map((e) => E(e, j))
                                          })
                                  ]
                              })
                })
            ]
        },
        l.tier
    );
}
let j = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: r, subscriptionsRequired: l } = e;
        return null !== r ? r : n ? (0, i.jsx)(I, { transform: t }) : (0, i.jsx)(E, { subscriptionsRequired: l });
    },
    I = (e) => {
        let { transform: t } = e;
        return (0, i.jsx)(a.animated.div, {
            style: { transform: t },
            className: p.tierUnlocked,
            children: x.intl.string(x.t.dNGM0t)
        });
    },
    E = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: p.tierRequirement,
                    children: x.intl.format(x.t.t2Wbo6, { required: t })
                }),
                (0, i.jsx)(o.mBM, {
                    size: 'md',
                    color: 'currentColor',
                    className: p.tierLock
                })
            ]
        });
    };
