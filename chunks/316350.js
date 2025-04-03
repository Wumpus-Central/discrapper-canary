n.d(t, { Z: () => v }), n(47120), n(266796);
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
    g = n(902807),
    p = n(402766),
    h = n(981631),
    f = n(388032),
    b = n(824302);
let x = {
        tension: 200,
        friction: 20
    },
    j =
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
        })({}, x)),
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
function N(e) {
    let [t, n] = a.useState(0),
        { numUnlocked: r, numRequired: i } = e,
        l = () => {
            n(1);
        },
        m = () => {
            n(2);
        },
        g = 2 === t,
        p = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || g) return null;
    let h = p || g ? b.hidden : null,
        x = p ? u.Z.Stages.FLYING : u.Z.Stages.HOVERING;
    return (0, s.jsx)(d.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: j,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, s.jsxs)(c.animated.div, {
                className: b.tierClose,
                style: e,
                children: [
                    (0, s.jsx)(u.Z, {
                        className: b.tierCloseMechaWumpus,
                        stage: x,
                        onFlyingComplete: m
                    }),
                    (0, s.jsx)('div', {
                        className: o()(b.tierCloseHint, h),
                        children: f.NW.format(f.t.qV3Erq, { numLeft: i - r })
                    }),
                    (0, s.jsx)(d.P3F, {
                        onClick: l,
                        className: o()(b.tierCloseClose, h),
                        children: (0, s.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function _(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: r, onSetRef: i, tier: l, showHeaderLockStatus: c, headerButton: u = null, subscriptionsRequired: m, subscriptionCount: g, className: h } = e,
        f = (e) => {
            null == i || i(e);
        },
        [j, _] = a.useState(0);
    return (
        a.useLayoutEffect(() => {
            n && _(1);
        }, [n]),
        (0, s.jsx)(d.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === j) },
            config: x,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: o()(
                        {
                            [b.tierHeaderWithoutCardBody]: !t,
                            [b.tierHeaderUnlocked]: r,
                            [b.tierHeaderLocked]: !r
                        },
                        h
                    ),
                    ref: f,
                    children: (0, s.jsxs)('div', {
                        className: b.tierHeaderContent,
                        children: [
                            (0, s.jsx)(p.Z, {
                                tier: l.tier,
                                color: 'currentColor',
                                className: o()(b.tierIcon, { [b.tierIconLocked]: !r })
                            }),
                            (0, s.jsx)('div', {
                                className: o()(b.tierTitle, { [b.tierTitleActive]: r }),
                                children: l.title
                            }),
                            c
                                ? (0, s.jsx)(C, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: u,
                                      subscriptionsRequired: m,
                                      hasAnimatedUnlocked: r
                                  })
                                : null,
                            (0, s.jsx)(N, {
                                numUnlocked: g,
                                numRequired: m
                            })
                        ]
                    })
                })
        })
    );
}
function v(e) {
    let { children: t, subscriptionCount: n, onSetRef: r, tier: i, isAnimatedTo: a, hasBottomMargin: l, headerButton: c = null, withCardBody: u = !0, guildId: p, showHeaderLockStatus: x = !0 } = e,
        j = h.oCV[i.tier],
        N = a && n >= j,
        v = i.tier !== h.Eu4.NONE && i.tier !== h.Eu4.TIER_1,
        C = (e, t) => {
            var n;
            let { Icon: r, className: i } = (0, m.t)(e.icon, t);
            return (0, s.jsxs)(
                'div',
                {
                    className: b.perk,
                    children: [
                        (0, s.jsx)(g.Z, {
                            name: String(e.icon),
                            icon: r,
                            className: b.perkIcon,
                            iconClassName: i
                        }),
                        (0, s.jsxs)('div', {
                            className: b.perkText,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: b.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, s.jsx)(d.IGR, {
                                                  className: b.newBadge,
                                                  text: f.NW.string(f.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: b.perkDescription,
                                    children: e.description
                                })
                            ]
                        })
                    ]
                },
                null == (n = e.title) ? void 0 : n.toString()
            );
        };
    return (0, s.jsxs)(
        'div',
        {
            className: o()(b.tier, { [b.tierBottomMargin]: l }),
            children: [
                (0, s.jsx)(_, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: c,
                    showHeaderLockStatus: x,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: u,
                    guildId: p,
                    hasBottomMargin: l,
                    subscriptionsRequired: j,
                    hasAnimatedUnlocked: N,
                    isAnimatedTo: a
                }),
                (0, s.jsx)('div', {
                    className: o()({ [b.tierBody]: u }),
                    children:
                        null != t
                            ? t
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      v
                                          ? (0, s.jsx)('div', {
                                                className: b.previousPerks,
                                                children: f.NW.string(f.t.oKzyRU)
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, s.jsx)('div', {
                                              className: b.perks,
                                              children: i.perks.map((e) => C(e, N))
                                          })
                                  ]
                              })
                })
            ]
        },
        i.tier
    );
}
let C = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: r, subscriptionsRequired: i } = e;
        return null !== r ? r : n ? (0, s.jsx)(O, { transform: t }) : (0, s.jsx)(y, { subscriptionsRequired: i });
    },
    O = (e) => {
        let { transform: t } = e;
        return (0, s.jsx)(c.animated.div, {
            style: { transform: t },
            className: b.tierUnlocked,
            children: f.NW.string(f.t.dNGM0t)
        });
    },
    y = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    className: b.tierRequirement,
                    children: f.NW.format(f.t.t2Wbo6, { required: t })
                }),
                (0, s.jsx)(d.mBM, {
                    size: 'md',
                    color: 'currentColor',
                    className: b.tierLock
                })
            ]
        });
    };
