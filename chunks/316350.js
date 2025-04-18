n.d(t, { Z: () => C }), n(388685), n(953529);
var r,
    i,
    s = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(200100),
    d = n(442837),
    u = n(481060),
    m = n(205641),
    g = n(119331),
    p = n(258368),
    h = n(430824),
    f = n(402766),
    x = n(981631),
    b = n(388032),
    j = n(58260);
let N = {
        tension: 200,
        friction: 20
    },
    _ =
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
        })({}, N)),
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
    let [t, n] = l.useState(0),
        { numUnlocked: r, numRequired: i } = e,
        a = () => {
            n(1);
        },
        d = () => {
            n(2);
        },
        g = 2 === t,
        p = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || g) return null;
    let h = p || g ? j.hidden : null,
        f = p ? m.Z.Stages.FLYING : m.Z.Stages.HOVERING;
    return (0, s.jsx)(u.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: _,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, s.jsxs)(c.animated.div, {
                className: j.tierClose,
                style: e,
                children: [
                    (0, s.jsx)(m.Z, {
                        className: j.tierCloseMechaWumpus,
                        stage: f,
                        onFlyingComplete: d
                    }),
                    (0, s.jsx)('div', {
                        className: o()(j.tierCloseHint, h),
                        children: b.NW.format(b.t.qV3Erq, { numLeft: i - r })
                    }),
                    (0, s.jsx)(u.P3F, {
                        onClick: a,
                        className: o()(j.tierCloseClose, h),
                        children: (0, s.jsx)(u.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function O(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: r, onSetRef: i, tier: a, showHeaderLockStatus: c, headerButton: d = null, subscriptionsRequired: m, subscriptionCount: g, className: p } = e,
        h = (e) => {
            null == i || i(e);
        },
        [x, b] = l.useState(0);
    return (
        l.useLayoutEffect(() => {
            n && b(1);
        }, [n]),
        (0, s.jsx)(u.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === x) },
            config: N,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: o()(
                        {
                            [j.tierHeaderWithoutCardBody]: !t,
                            [j.tierHeaderUnlocked]: r,
                            [j.tierHeaderLocked]: !r
                        },
                        p
                    ),
                    ref: h,
                    children: (0, s.jsxs)('div', {
                        className: j.tierHeaderContent,
                        children: [
                            (0, s.jsx)(f.Z, {
                                tier: a.tier,
                                color: 'currentColor',
                                className: o()(j.tierIcon, { [j.tierIconLocked]: !r })
                            }),
                            (0, s.jsx)('div', {
                                className: o()(j.tierTitle, { [j.tierTitleActive]: r }),
                                children: a.title
                            }),
                            c
                                ? (0, s.jsx)(y, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: d,
                                      subscriptionsRequired: m,
                                      hasAnimatedUnlocked: r
                                  })
                                : null,
                            (0, s.jsx)(v, {
                                numUnlocked: g,
                                numRequired: m
                            })
                        ]
                    })
                })
        })
    );
}
function C(e) {
    let { children: t, subscriptionCount: n, onSetRef: r, tier: i, isAnimatedTo: l, hasBottomMargin: a, headerButton: c = null, withCardBody: m = !0, guildId: f, showHeaderLockStatus: N = !0 } = e,
        _ = (0, d.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getGuild(f)) ? void 0 : e.premiumTier) ? t : x.Eu4.NONE;
        }),
        v = x.oCV[i.tier],
        C = l && i.tier <= _,
        y = i.tier !== x.Eu4.NONE && i.tier !== x.Eu4.TIER_1,
        I = (e, t) => {
            var n;
            let { Icon: r, className: i } = (0, g.t)(e.icon, t);
            return (0, s.jsxs)(
                'div',
                {
                    className: j.perk,
                    children: [
                        (0, s.jsx)(p.Z, {
                            name: String(e.icon),
                            icon: r,
                            className: j.perkIcon,
                            iconClassName: i
                        }),
                        (0, s.jsxs)('div', {
                            className: j.perkText,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: j.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, s.jsx)(u.IGR, {
                                                  className: j.newBadge,
                                                  text: b.NW.string(b.t.y2b7CA)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: j.perkDescription,
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
            className: o()(j.tier, { [j.tierBottomMargin]: a }),
            children: [
                (0, s.jsx)(O, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: c,
                    showHeaderLockStatus: N,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: m,
                    guildId: f,
                    hasBottomMargin: a,
                    subscriptionsRequired: v,
                    hasAnimatedUnlocked: C,
                    isAnimatedTo: l
                }),
                (0, s.jsx)('div', {
                    className: o()({ [j.tierBody]: m }),
                    children:
                        null != t
                            ? t
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      y
                                          ? (0, s.jsx)('div', {
                                                className: j.previousPerks,
                                                children: b.NW.string(b.t.oKzyRU)
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, s.jsx)('div', {
                                              className: j.perks,
                                              children: i.perks.map((e) => I(e, C))
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
        return null !== r ? r : n ? (0, s.jsx)(I, { transform: t }) : (0, s.jsx)(E, { subscriptionsRequired: i });
    },
    I = (e) => {
        let { transform: t } = e;
        return (0, s.jsx)(c.animated.div, {
            style: { transform: t },
            className: j.tierUnlocked,
            children: b.NW.string(b.t.dNGM0t)
        });
    },
    E = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    className: j.tierRequirement,
                    children: b.NW.format(b.t.t2Wbo6, { required: t })
                }),
                (0, s.jsx)(u.mBM, {
                    size: 'md',
                    color: 'currentColor',
                    className: j.tierLock
                })
            ]
        });
    };
