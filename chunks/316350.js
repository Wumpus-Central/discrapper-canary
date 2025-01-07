n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i,
    r,
    l,
    a,
    s = n(200651),
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
    _ = n(534560);
let I = {
        tension: 200,
        friction: 20
    },
    N = {
        ...I,
        clamp: !0
    };
function T(e) {
    let [t, n] = o.useState(0),
        { numUnlocked: i, numRequired: r } = e,
        l = () => {
            n(1);
        },
        a = () => {
            n(2);
        },
        c = 2 === t,
        g = 1 === t;
    if (!(!(i >= r) && i / r >= 0.8) || c) return null;
    let x = g || c ? _.hidden : null,
        p = g ? h.Z.Stages.FLYING : h.Z.Stages.HOVERING;
    return (0, s.jsx)(m.Spring, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: N,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, s.jsxs)(u.animated.div, {
                className: _.tierClose,
                style: e,
                children: [
                    (0, s.jsx)(h.Z, {
                        className: _.tierCloseMechaWumpus,
                        stage: p,
                        onFlyingComplete: a
                    }),
                    (0, s.jsx)('div', {
                        className: d()(_.tierCloseHint, x),
                        children: v.intl.format(v.t.qV3Erq, { numLeft: r - i })
                    }),
                    (0, s.jsx)(m.Clickable, {
                        onClick: l,
                        className: d()(_.tierCloseClose, x),
                        children: (0, s.jsx)(m.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function j(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: i, onSetRef: r, tier: l, showHeaderLockStatus: a, headerButton: c = null, subscriptionsRequired: u, subscriptionCount: h, className: g } = e,
        x = (e) => {
            null == r || r(e);
        },
        [f, C] = o.useState(0);
    return (
        o.useLayoutEffect(() => {
            n && C(1);
        }, [n]),
        (0, s.jsx)(m.Spring, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 0 === f ? 50 : 0 },
            config: I,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: d()(
                        {
                            [_.tierHeaderWithoutCardBody]: !t,
                            [_.tierHeaderUnlocked]: i,
                            [_.tierHeaderLocked]: !i
                        },
                        g
                    ),
                    ref: x,
                    children: (0, s.jsxs)('div', {
                        className: _.tierHeaderContent,
                        children: [
                            (0, s.jsx)(p.Z, {
                                tier: l.tier,
                                className: d()(_.tierIcon, { [_.tierIconLocked]: !i })
                            }),
                            (0, s.jsx)('div', {
                                className: d()(_.tierTitle, { [_.tierTitleActive]: i }),
                                children: l.title
                            }),
                            a
                                ? (0, s.jsx)(S, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: c,
                                      subscriptionsRequired: u,
                                      hasAnimatedUnlocked: i
                                  })
                                : null,
                            (0, s.jsx)(T, {
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
    let { children: t, subscriptionCount: n, onSetRef: i, tier: r, isAnimatedTo: l, hasBottomMargin: a, headerButton: o = null, withCardBody: c = !0, guildId: u, showHeaderLockStatus: h = !0 } = e,
        p = (0, f.vn)(u)[r.tier],
        I = l && n >= p,
        N = r.tier !== C.Eu4.NONE && r.tier !== C.Eu4.TIER_1,
        T = (e, t) => {
            var n;
            let { icon: i, className: r } = (0, g.t)(e.icon, t);
            return (0, s.jsxs)(
                'div',
                {
                    className: _.perk,
                    children: [
                        (0, s.jsx)(x.Z, {
                            name: String(e.icon),
                            icon: i,
                            className: _.perkIcon,
                            iconClassName: r
                        }),
                        (0, s.jsxs)('div', {
                            className: _.perkText,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: _.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, s.jsx)(m.TextBadge, {
                                                  className: _.newBadge,
                                                  text: v.intl.string(v.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: _.perkDescription,
                                    children: e.description
                                })
                            ]
                        })
                    ]
                },
                null === (n = e.title) || void 0 === n ? void 0 : n.toString()
            );
        };
    return (0, s.jsxs)(
        'div',
        {
            className: d()(_.tier, { [_.tierBottomMargin]: a }),
            children: [
                (0, s.jsx)(j, {
                    subscriptionCount: n,
                    tier: r,
                    headerButton: o,
                    showHeaderLockStatus: h,
                    onSetRef: (e) => {
                        null != i && i(e, r);
                    },
                    withCardBody: c,
                    guildId: u,
                    hasBottomMargin: a,
                    subscriptionsRequired: p,
                    hasAnimatedUnlocked: I,
                    isAnimatedTo: l
                }),
                (0, s.jsx)('div', {
                    className: d()({ [_.tierBody]: c }),
                    children:
                        null != t
                            ? t
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      N
                                          ? (0, s.jsx)('div', {
                                                className: _.previousPerks,
                                                children: v.intl.string(v.t.oKzyRU)
                                            })
                                          : null,
                                      null != r.perks &&
                                          (0, s.jsx)('div', {
                                              className: _.perks,
                                              children: r.perks.map((e) => T(e, I))
                                          })
                                  ]
                              })
                })
            ]
        },
        r.tier
    );
}
((l = i || (i = {}))[(l.OPEN = 0)] = 'OPEN'), (l[(l.CLOSING = 1)] = 'CLOSING'), (l[(l.CLOSED = 2)] = 'CLOSED'), ((a = r || (r = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.UNLOCKED_SLIDE = 1)] = 'UNLOCKED_SLIDE');
let S = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: i, subscriptionsRequired: r } = e;
        return null !== i ? i : n ? (0, s.jsx)(E, { transform: t }) : (0, s.jsx)(R, { subscriptionsRequired: r });
    },
    E = (e) => {
        let { transform: t } = e;
        return (0, s.jsx)(u.animated.div, {
            style: { transform: t },
            className: _.tierUnlocked,
            children: v.intl.string(v.t.dNGM0t)
        });
    },
    R = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    className: _.tierRequirement,
                    children: v.intl.format(v.t.t2Wbo6, { required: t })
                }),
                (0, s.jsx)(m.LockIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.tierLock
                })
            ]
        });
    };
