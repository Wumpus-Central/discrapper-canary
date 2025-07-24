(n.d(t, {
    Eo: () => j,
    VD: () => T,
    ZP: () => x
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
    O = n(356164),
    E = n(826946),
    y = n(981631),
    v = n(388032),
    I = n(727615),
    C = n(129512),
    S = n(330065),
    N = n(755386);
function T(e) {
    let { guild: t, onClick: l, onView: o } = e,
        [f, g] = i.useState(!1),
        [O, T] = i.useState(!1),
        [P, j] = i.useState(!1),
        x = i.useRef(null),
        A = i.useCallback(async () => {
            T(!0);
            try {
                await l(t.id);
            } finally {
                T(!1);
            }
        }, [t.id, l]),
        Z = i.useCallback(
            (e) => {
                e && !f && (g(!0), null == o || o(t.id));
            },
            [t.id, f, o]
        ),
        w = i.useCallback(
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
        L = (0, d.ZP)(),
        R = t.features.has(y.oNc.HUB),
        D = i.useMemo(() => {
            let e = _.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, b.x_)()
            });
            if (null != e) return e;
            if (R) return N;
            switch (L) {
                case y.BRd.DARK:
                    return C;
                case y.BRd.LIGHT:
                    return S;
            }
        }, [t.discoverySplash, t.id, R, L]),
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
        className: I.container,
        children: [
            O &&
                (0, r.jsx)('div', {
                    className: I.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: I.spinner
                    })
                }),
            (0, r.jsx)(s.$, {
                innerRef: x,
                onChange: Z,
                active: !f,
                threshold: 0.55,
                children: (0, r.jsxs)(h.Z, {
                    ref: x,
                    className: I.card,
                    onClick: A,
                    disabled: O,
                    onContextMenu: w,
                    'aria-label': v.intl.string(v.t['M9wQ+f']),
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.header,
                            children: [
                                (0, r.jsx)('div', {
                                    className: a()(I.banner, { [I.loaded]: P }),
                                    children: (0, r.jsx)('img', {
                                        src: D,
                                        alt: '',
                                        className: I.bannerImage,
                                        onLoad: () => j(!0)
                                    })
                                }),
                                (0, r.jsx)(E.Z, {
                                    className: I.maximizeIcon,
                                    guildId: t.id
                                }),
                                (0, r.jsx)('div', {
                                    className: I.icon,
                                    children: (0, r.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, r.jsx)('div', {
                                            className: I.iconMask,
                                            children: (0, r.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, r.jsx)('img', {
                                                    src: k,
                                                    alt: '',
                                                    className: I.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: I.guildDetails,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.title,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            className: I.guildBadge,
                                            guild: t,
                                            tooltipColor: c.ua7.Colors.PRIMARY
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: I.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: I.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)('div', {
                                                className: I.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: I.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: I.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: v.intl.format(v.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)('div', {
                                                className: I.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: I.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: I.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: v.intl.format(v.t.zRl6XV, { count: t.memberCount })
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
        l = (0, o.e7)([O.Z], () => O.Z.getGuild(t));
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
                              children: (0, r.jsx)(f.Z, { className: I.placeholder })
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
        className: I.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: s,
            getItemKey: u
        })
    });
}
let x = i.memo(P);
