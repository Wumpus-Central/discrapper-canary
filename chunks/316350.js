n.d(t, { Z: () => O }), n(47120), n(266796);
var r,
    i,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(642128),
    d = n(481060),
    u = n(205641),
    m = n(119331),
    p = n(902807),
    g = n(402766),
    h = n(267642),
    f = n(981631),
    b = n(388032),
    x = n(646433);
let j = {
        tension: 200,
        friction: 20
    },
    N =
        ((r = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, j)),
        (i = i = { clamp: !0 }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        r);
function v(e) {
    let [t, n] = a.useState(0),
        { numUnlocked: r, numRequired: i } = e,
        l = () => {
            n(1);
        },
        m = () => {
            n(2);
        },
        p = 2 === t,
        g = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || p) return null;
    let h = g || p ? x.hidden : null,
        f = g ? u.Z.Stages.FLYING : u.Z.Stages.HOVERING;
    return (0, s.jsx)(d.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: N,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, s.jsxs)(c.animated.div, {
                className: x.tierClose,
                style: e,
                children: [
                    (0, s.jsx)(u.Z, {
                        className: x.tierCloseMechaWumpus,
                        stage: f,
                        onFlyingComplete: m
                    }),
                    (0, s.jsx)('div', {
                        className: o()(x.tierCloseHint, h),
                        children: b.NW.format(b.t.qV3Erq, { numLeft: i - r })
                    }),
                    (0, s.jsx)(d.P3F, {
                        onClick: l,
                        className: o()(x.tierCloseClose, h),
                        children: (0, s.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: x.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function _(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: r, onSetRef: i, tier: l, showHeaderLockStatus: c, headerButton: u = null, subscriptionsRequired: m, subscriptionCount: p, className: h } = e,
        f = (e) => {
            null == i || i(e);
        },
        [b, N] = a.useState(0);
    return (
        a.useLayoutEffect(() => {
            n && N(1);
        }, [n]),
        (0, s.jsx)(d.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === b) },
            config: j,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: o()(
                        {
                            [x.tierHeaderWithoutCardBody]: !t,
                            [x.tierHeaderUnlocked]: r,
                            [x.tierHeaderLocked]: !r
                        },
                        h
                    ),
                    ref: f,
                    children: (0, s.jsxs)('div', {
                        className: x.tierHeaderContent,
                        children: [
                            (0, s.jsx)(g.Z, {
                                tier: l.tier,
                                className: o()(x.tierIcon, { [x.tierIconLocked]: !r })
                            }),
                            (0, s.jsx)('div', {
                                className: o()(x.tierTitle, { [x.tierTitleActive]: r }),
                                children: l.title
                            }),
                            c
                                ? (0, s.jsx)(y, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: u,
                                      subscriptionsRequired: m,
                                      hasAnimatedUnlocked: r
                                  })
                                : null,
                            (0, s.jsx)(v, {
                                numUnlocked: p,
                                numRequired: m
                            })
                        ]
                    })
                })
        })
    );
}
function O(e) {
    let { children: t, subscriptionCount: n, onSetRef: r, tier: i, isAnimatedTo: a, hasBottomMargin: l, headerButton: c = null, withCardBody: u = !0, guildId: g, showHeaderLockStatus: j = !0 } = e,
        N = (0, h.vn)(g)[i.tier],
        v = a && n >= N,
        O = i.tier !== f.Eu4.NONE && i.tier !== f.Eu4.TIER_1,
        y = (e, t) => {
            var n;
            let { icon: r, className: i } = (0, m.t)(e.icon, t);
            return (0, s.jsxs)(
                'div',
                {
                    className: x.perk,
                    children: [
                        (0, s.jsx)(p.Z, {
                            name: String(e.icon),
                            icon: r,
                            className: x.perkIcon,
                            iconClassName: i
                        }),
                        (0, s.jsxs)('div', {
                            className: x.perkText,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: x.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, s.jsx)(d.IGR, {
                                                  className: x.newBadge,
                                                  text: b.NW.string(b.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: x.perkDescription,
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
            className: o()(x.tier, { [x.tierBottomMargin]: l }),
            children: [
                (0, s.jsx)(_, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: c,
                    showHeaderLockStatus: j,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: u,
                    guildId: g,
                    hasBottomMargin: l,
                    subscriptionsRequired: N,
                    hasAnimatedUnlocked: v,
                    isAnimatedTo: a
                }),
                (0, s.jsx)('div', {
                    className: o()({ [x.tierBody]: u }),
                    children:
                        null != t
                            ? t
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      O
                                          ? (0, s.jsx)('div', {
                                                className: x.previousPerks,
                                                children: b.NW.string(b.t.oKzyRU)
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, s.jsx)('div', {
                                              className: x.perks,
                                              children: i.perks.map((e) => y(e, v))
                                          })
                                  ]
                              })
                })
            ]
        },
        i.tier
    );
}
let y = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: r, subscriptionsRequired: i } = e;
        return null !== r ? r : n ? (0, s.jsx)(C, { transform: t }) : (0, s.jsx)(I, { subscriptionsRequired: i });
    },
    C = (e) => {
        let { transform: t } = e;
        return (0, s.jsx)(c.animated.div, {
            style: { transform: t },
            className: x.tierUnlocked,
            children: b.NW.string(b.t.dNGM0t)
        });
    },
    I = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    className: x.tierRequirement,
                    children: b.NW.format(b.t.t2Wbo6, { required: t })
                }),
                (0, s.jsx)(d.mBM, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.tierLock
                })
            ]
        });
    };
