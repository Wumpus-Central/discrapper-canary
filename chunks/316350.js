n.d(t, { Z: () => j }), n(47120), n(266796);
var r,
    i,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    A = n(642128),
    c = n(481060),
    d = n(205641),
    u = n(119331),
    g = n(902807),
    f = n(402766),
    m = n(267642),
    p = n(981631),
    h = n(388032),
    C = n(288661);
let b = {
        tension: 200,
        friction: 20
    },
    v =
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
        })({}, b)),
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
function x(e) {
    let [t, n] = a.useState(0),
        { numUnlocked: r, numRequired: i } = e,
        l = () => {
            n(1);
        },
        u = () => {
            n(2);
        },
        g = 2 === t,
        f = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || g) return null;
    let m = f || g ? C.hidden : null,
        p = f ? d.Z.Stages.FLYING : d.Z.Stages.HOVERING;
    return (0, s.jsx)(c.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: v,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, s.jsxs)(A.animated.div, {
                className: C.tierClose,
                style: e,
                children: [
                    (0, s.jsx)(d.Z, {
                        className: C.tierCloseMechaWumpus,
                        stage: p,
                        onFlyingComplete: u
                    }),
                    (0, s.jsx)('div', {
                        className: o()(C.tierCloseHint, m),
                        children: h.NW.format(h.t.qV3Erq, { numLeft: i - r })
                    }),
                    (0, s.jsx)(c.P3F, {
                        onClick: l,
                        className: o()(C.tierCloseClose, m),
                        children: (0, s.jsx)(c.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function N(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: r, onSetRef: i, tier: l, showHeaderLockStatus: A, headerButton: d = null, subscriptionsRequired: u, subscriptionCount: g, className: m } = e,
        p = (e) => {
            null == i || i(e);
        },
        [h, v] = a.useState(0);
    return (
        a.useLayoutEffect(() => {
            n && v(1);
        }, [n]),
        (0, s.jsx)(c.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === h) },
            config: b,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: o()(
                        {
                            [C.tierHeaderWithoutCardBody]: !t,
                            [C.tierHeaderUnlocked]: r,
                            [C.tierHeaderLocked]: !r
                        },
                        m
                    ),
                    ref: p,
                    children: (0, s.jsxs)('div', {
                        className: C.tierHeaderContent,
                        children: [
                            (0, s.jsx)(f.Z, {
                                tier: l.tier,
                                color: 'currentColor',
                                className: o()(C.tierIcon, { [C.tierIconLocked]: !r })
                            }),
                            (0, s.jsx)('div', {
                                className: o()(C.tierTitle, { [C.tierTitleActive]: r }),
                                children: l.title
                            }),
                            A
                                ? (0, s.jsx)(E, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: d,
                                      subscriptionsRequired: u,
                                      hasAnimatedUnlocked: r
                                  })
                                : null,
                            (0, s.jsx)(x, {
                                numUnlocked: g,
                                numRequired: u
                            })
                        ]
                    })
                })
        })
    );
}
function j(e) {
    let { children: t, subscriptionCount: n, onSetRef: r, tier: i, isAnimatedTo: a, hasBottomMargin: l, headerButton: A = null, withCardBody: d = !0, guildId: f, showHeaderLockStatus: b = !0 } = e,
        v = (0, m.vn)(f)[i.tier],
        x = a && n >= v,
        j = i.tier !== p.Eu4.NONE && i.tier !== p.Eu4.TIER_1,
        E = (e, t) => {
            var n;
            let { Icon: r, className: i } = (0, u.t)(e.icon, t);
            return (0, s.jsxs)(
                'div',
                {
                    className: C.perk,
                    children: [
                        (0, s.jsx)(g.Z, {
                            name: String(e.icon),
                            icon: r,
                            className: C.perkIcon,
                            iconClassName: i
                        }),
                        (0, s.jsxs)('div', {
                            className: C.perkText,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: C.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, s.jsx)(c.IGR, {
                                                  className: C.newBadge,
                                                  text: h.NW.string(h.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: C.perkDescription,
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
            className: o()(C.tier, { [C.tierBottomMargin]: l }),
            children: [
                (0, s.jsx)(N, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: A,
                    showHeaderLockStatus: b,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: d,
                    guildId: f,
                    hasBottomMargin: l,
                    subscriptionsRequired: v,
                    hasAnimatedUnlocked: x,
                    isAnimatedTo: a
                }),
                (0, s.jsx)('div', {
                    className: o()({ [C.tierBody]: d }),
                    children:
                        null != t
                            ? t
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      j
                                          ? (0, s.jsx)('div', {
                                                className: C.previousPerks,
                                                children: h.NW.string(h.t.oKzyRU)
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, s.jsx)('div', {
                                              className: C.perks,
                                              children: i.perks.map((e) => E(e, x))
                                          })
                                  ]
                              })
                })
            ]
        },
        i.tier
    );
}
let E = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: r, subscriptionsRequired: i } = e;
        return null !== r ? r : n ? (0, s.jsx)(I, { transform: t }) : (0, s.jsx)(O, { subscriptionsRequired: i });
    },
    I = (e) => {
        let { transform: t } = e;
        return (0, s.jsx)(A.animated.div, {
            style: { transform: t },
            className: C.tierUnlocked,
            children: h.NW.string(h.t.dNGM0t)
        });
    },
    O = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    className: C.tierRequirement,
                    children: h.NW.format(h.t.t2Wbo6, { required: t })
                }),
                (0, s.jsx)(c.mBM, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.tierLock
                })
            ]
        });
    };
