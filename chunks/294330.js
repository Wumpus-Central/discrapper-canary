(n.d(t, {
    Eo: () => j,
    VD: () => T,
    ZP: () => A
}),
    n(388685),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(622535),
    c = n(481060),
    u = n(239091),
    d = n(410030),
    p = n(686546),
    h = n(66637),
    f = n(782738),
    g = n(371260),
    m = n(372769),
    b = n(134432),
    _ = n(768581),
    E = n(356164),
    O = n(826946),
    y = n(981631),
    I = n(388032),
    v = n(727615),
    C = n(129512),
    S = n(330065),
    N = n(755386);
function T(e) {
    let { guild: t, onClick: l, onView: o } = e,
        [f, g] = i.useState(!1),
        [E, T] = i.useState(!1),
        [P, j] = i.useState(!1),
        A = i.useRef(null),
        Z = i.useCallback(async () => {
            T(!0);
            try {
                await l(t.id);
            } finally {
                T(!1);
            }
        }, [t.id, l]),
        x = i.useCallback(
            (e) => {
                e && !f && (g(!0), null == o || o(t.id));
            },
            [t.id, f, o]
        ),
        L = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('88560').then(n.bind(n, 858523));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({}, n)),
                            (l = l = { guild: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        );
                    };
                });
            },
            [t]
        ),
        w = (0, d.ZP)(),
        R = t.features.has(y.oNc.HUB),
        D = i.useMemo(() => {
            let e = _.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, b.x_)()
            });
            if (null != e) return e;
            if (R) return N;
            switch (w) {
                case y.BRd.DARK:
                    return C;
                case y.BRd.LIGHT:
                    return S;
            }
        }, [t.discoverySplash, t.id, R, w]),
        k = i.useMemo(
            () =>
                _.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 48
                }),
            [t.icon, t.id]
        );
    return (0, r.jsxs)('div', {
        className: v.container,
        children: [
            E &&
                (0, r.jsx)('div', {
                    className: v.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: v.spinner
                    })
                }),
            (0, r.jsx)(s.$, {
                innerRef: A,
                onChange: x,
                active: !f,
                threshold: 0.55,
                children: (0, r.jsxs)(h.Z, {
                    ref: A,
                    className: v.card,
                    onClick: Z,
                    disabled: E,
                    onContextMenu: L,
                    'aria-label': I.intl.string(I.t['M9wQ+f']),
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, r.jsx)('div', {
                                    className: a()(v.banner, { [v.loaded]: P }),
                                    children: (0, r.jsx)('img', {
                                        src: D,
                                        alt: '',
                                        className: v.bannerImage,
                                        onLoad: () => j(!0)
                                    })
                                }),
                                (0, r.jsx)(O.Z, {
                                    className: v.maximizeIcon,
                                    guildId: t.id
                                }),
                                (0, r.jsx)('div', {
                                    className: v.icon,
                                    children: (0, r.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, r.jsx)('div', {
                                            className: v.iconMask,
                                            children: (0, r.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, r.jsx)('img', {
                                                    src: k,
                                                    alt: '',
                                                    className: v.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: v.guildDetails,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: v.title,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            className: v.guildBadge,
                                            guild: t,
                                            tooltipColor: c.ua7.Colors.PRIMARY
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: v.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: v.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, r.jsxs)('div', {
                                    className: v.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)('div', {
                                                className: v.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: v.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: v.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: I.intl.format(I.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)('div', {
                                                className: v.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: v.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: v.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: I.intl.format(I.t.zRl6XV, { count: t.memberCount })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function P(e) {
    let { guildId: t, onClick: n, onView: i } = e,
        l = (0, o.e7)([E.Z], () => E.Z.getGuild(t));
    return null == l
        ? null
        : (0, r.jsx)(T, {
              guild: l,
              onClick: n,
              onView: i
          });
}
function j(e) {
    let { guildId: t, index: n, onClick: l, onView: a } = e,
        o = i.useRef(null == t),
        s = i.useCallback(
            (e, t, n, i) =>
                null == t.guildId
                    ? (0, r.jsx)(
                          g.Z,
                          {
                              state: n,
                              cleanUp: i,
                              children: (0, r.jsx)(f.Z, { className: v.placeholder })
                          },
                          e
                      )
                    : (0, r.jsx)(
                          g.Z,
                          {
                              state: n,
                              cleanUp: i,
                              animate: o.current,
                              children: (0, r.jsx)(P, {
                                  guildId: t.guildId,
                                  onClick: l,
                                  onView: a
                              })
                          },
                          e
                      ),
            [l, a]
        ),
        u = i.useCallback((e) => {
            var t;
            return null != (t = e.guildId) ? t : ''.concat(e.index);
        }, []),
        d = i.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, r.jsx)('div', {
        className: v.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: s,
            getItemKey: u
        })
    });
}
let A = i.memo(P);
