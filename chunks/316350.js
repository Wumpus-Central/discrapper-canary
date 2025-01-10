n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i,
    r,
    l,
    s,
    a = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(666912),
    m = n(481060),
    h = n(205641),
    g = n(119331),
    x = n(902807),
    p = n(402766),
    f = n(267642),
    C = n(981631),
    v = n(388032),
    I = n(534560);
let N = {
        tension: 200,
        friction: 20
    },
    _ = {
        ...N,
        clamp: !0
    };
function T(e) {
    let [t, n] = o.useState(0),
        { numUnlocked: i, numRequired: r } = e,
        l = () => {
            n(1);
        },
        s = () => {
            n(2);
        },
        c = 2 === t,
        g = 1 === t;
    if (!(!(i >= r) && i / r >= 0.8) || c) return null;
    let x = g || c ? I.hidden : null,
        p = g ? h.Z.Stages.FLYING : h.Z.Stages.HOVERING;
    return (0, a.jsx)(m.Spring, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: _,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, a.jsxs)(u.animated.div, {
                className: I.tierClose,
                style: e,
                children: [
                    (0, a.jsx)(h.Z, {
                        className: I.tierCloseMechaWumpus,
                        stage: p,
                        onFlyingComplete: s
                    }),
                    (0, a.jsx)('div', {
                        className: d()(I.tierCloseHint, x),
                        children: v.intl.format(v.t.qV3Erq, { numLeft: r - i })
                    }),
                    (0, a.jsx)(m.Clickable, {
                        onClick: l,
                        className: d()(I.tierCloseClose, x),
                        children: (0, a.jsx)(m.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function j(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: i, onSetRef: r, tier: l, showHeaderLockStatus: s, headerButton: c = null, subscriptionsRequired: u, subscriptionCount: h, className: g } = e,
        x = (e) => {
            null == r || r(e);
        },
        [f, C] = o.useState(0);
    return (
        o.useLayoutEffect(() => {
            n && C(1);
        }, [n]),
        (0, a.jsx)(m.Spring, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 0 === f ? 50 : 0 },
            config: N,
            children: (e) =>
                (0, a.jsx)('div', {
                    className: d()(
                        {
                            [I.tierHeaderWithoutCardBody]: !t,
                            [I.tierHeaderUnlocked]: i,
                            [I.tierHeaderLocked]: !i
                        },
                        g
                    ),
                    ref: x,
                    children: (0, a.jsxs)('div', {
                        className: I.tierHeaderContent,
                        children: [
                            (0, a.jsx)(p.Z, {
                                tier: l.tier,
                                className: d()(I.tierIcon, { [I.tierIconLocked]: !i })
                            }),
                            (0, a.jsx)('div', {
                                className: d()(I.tierTitle, { [I.tierTitleActive]: i }),
                                children: l.title
                            }),
                            s
                                ? (0, a.jsx)(E, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: c,
                                      subscriptionsRequired: u,
                                      hasAnimatedUnlocked: i
                                  })
                                : null,
                            (0, a.jsx)(T, {
                                numUnlocked: h,
                                numRequired: u
                            })
                        ]
                    })
                })
        })
    );
}
function b(e) {
    let { children: t, subscriptionCount: n, onSetRef: i, tier: r, isAnimatedTo: l, hasBottomMargin: s, headerButton: o = null, withCardBody: c = !0, guildId: u, showHeaderLockStatus: h = !0 } = e,
        p = (0, f.vn)(u)[r.tier],
        N = l && n >= p,
        _ = r.tier !== C.Eu4.NONE && r.tier !== C.Eu4.TIER_1,
        T = (e, t) => {
            var n;
            let { icon: i, className: r } = (0, g.t)(e.icon, t);
            return (0, a.jsxs)(
                'div',
                {
                    className: I.perk,
                    children: [
                        (0, a.jsx)(x.Z, {
                            name: String(e.icon),
                            icon: i,
                            className: I.perkIcon,
                            iconClassName: r
                        }),
                        (0, a.jsxs)('div', {
                            className: I.perkText,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: I.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, a.jsx)(m.TextBadge, {
                                                  className: I.newBadge,
                                                  text: v.intl.string(v.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, a.jsx)('div', {
                                    className: I.perkDescription,
                                    children: e.description
                                })
                            ]
                        })
                    ]
                },
                null === (n = e.title) || void 0 === n ? void 0 : n.toString()
            );
        };
    return (0, a.jsxs)(
        'div',
        {
            className: d()(I.tier, { [I.tierBottomMargin]: s }),
            children: [
                (0, a.jsx)(j, {
                    subscriptionCount: n,
                    tier: r,
                    headerButton: o,
                    showHeaderLockStatus: h,
                    onSetRef: (e) => {
                        null != i && i(e, r);
                    },
                    withCardBody: c,
                    guildId: u,
                    hasBottomMargin: s,
                    subscriptionsRequired: p,
                    hasAnimatedUnlocked: N,
                    isAnimatedTo: l
                }),
                (0, a.jsx)('div', {
                    className: d()({ [I.tierBody]: c }),
                    children:
                        null != t
                            ? t
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      _
                                          ? (0, a.jsx)('div', {
                                                className: I.previousPerks,
                                                children: v.intl.string(v.t.oKzyRU)
                                            })
                                          : null,
                                      null != r.perks &&
                                          (0, a.jsx)('div', {
                                              className: I.perks,
                                              children: r.perks.map((e) => T(e, N))
                                          })
                                  ]
                              })
                })
            ]
        },
        r.tier
    );
}
((l = i || (i = {}))[(l.OPEN = 0)] = 'OPEN'), (l[(l.CLOSING = 1)] = 'CLOSING'), (l[(l.CLOSED = 2)] = 'CLOSED'), ((s = r || (r = {}))[(s.NONE = 0)] = 'NONE'), (s[(s.UNLOCKED_SLIDE = 1)] = 'UNLOCKED_SLIDE');
let E = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: i, subscriptionsRequired: r } = e;
        return null !== i ? i : n ? (0, a.jsx)(S, { transform: t }) : (0, a.jsx)(R, { subscriptionsRequired: r });
    },
    S = (e) => {
        let { transform: t } = e;
        return (0, a.jsx)(u.animated.div, {
            style: { transform: t },
            className: I.tierUnlocked,
            children: v.intl.string(v.t.dNGM0t)
        });
    },
    R = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)('div', {
                    className: I.tierRequirement,
                    children: v.intl.format(v.t.t2Wbo6, { required: t })
                }),
                (0, a.jsx)(m.LockIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.tierLock
                })
            ]
        });
    };
