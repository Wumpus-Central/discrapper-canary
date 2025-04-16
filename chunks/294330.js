n.d(t, {
    Eo: () => x,
    VD: () => A,
    ZP: () => L
}),
    n(388685),
    n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(622535),
    c = n(481060),
    u = n(668781),
    d = n(239091),
    p = n(881052),
    h = n(410030),
    f = n(686546),
    g = n(540059),
    m = n(66637),
    b = n(782738),
    _ = n(371260),
    E = n(372769),
    O = n(134432),
    N = n(768581),
    y = n(356164),
    I = n(826946),
    v = n(981631),
    C = n(388032),
    S = n(727615),
    T = n(129512),
    P = n(330065),
    j = n(755386);
function A(e) {
    let { guild: t, onClick: l, onView: o } = e,
        b = (0, g.Q3)('BaseGlobalDiscoveryServersCard'),
        [_, y] = i.useState(!1),
        [A, Z] = i.useState(!1),
        [x, L] = i.useState(!1),
        w = i.useRef(null),
        R = i.useCallback(async () => {
            Z(!0);
            try {
                await l(t.id);
            } catch (n) {
                var e;
                let t = new p.Hx(n);
                u.Z.show({
                    title: C.NW.string(C.t.R0RpRU),
                    body: null != (e = t.getAnyErrorMessage()) ? e : C.NW.string(C.t.eAn6z8)
                });
            } finally {
                Z(!1);
            }
        }, [t.id, l]),
        D = i.useCallback(
            (e) => {
                e && !_ && (y(!0), null == o || o(t.id));
            },
            [t.id, _, o]
        ),
        k = i.useCallback(
            (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('88560').then(n.bind(n, 858523));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
        M = (0, h.ZP)(),
        U = t.features.has(v.oNc.HUB),
        G = i.useMemo(() => {
            let e = N.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, O.x_)()
            });
            if (null != e) return e;
            if (U) return j;
            switch (M) {
                case v.BRd.DARK:
                    return T;
                case v.BRd.LIGHT:
                    return P;
            }
        }, [t.discoverySplash, t.id, U, M]),
        W = b ? 48 : 40,
        V = i.useMemo(
            () =>
                N.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: W
                }),
            [t.icon, t.id, W]
        );
    return (0, r.jsxs)('div', {
        className: S.container,
        children: [
            A &&
                (0, r.jsx)('div', {
                    className: S.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: S.spinner
                    })
                }),
            (0, r.jsx)(s.$, {
                innerRef: w,
                onChange: D,
                active: !_,
                threshold: 0.55,
                children: (0, r.jsxs)(m.Z, {
                    ref: w,
                    className: S.card,
                    onClick: R,
                    disabled: A,
                    onContextMenu: k,
                    'aria-label': C.NW.string(C.t['M9wQ+f']),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.header,
                            children: [
                                (0, r.jsx)('div', {
                                    className: a()(S.banner, { [S.loaded]: x }),
                                    children: (0, r.jsx)('img', {
                                        src: G,
                                        alt: '',
                                        className: S.bannerImage,
                                        onLoad: () => L(!0)
                                    })
                                }),
                                (0, r.jsx)(I.Z, {
                                    className: S.maximizeIcon,
                                    guildId: t.id
                                }),
                                (0, r.jsx)('div', {
                                    className: S.icon,
                                    children: (0, r.jsx)(f.ZP, {
                                        mask: f.ZP.Masks.SQUIRCLE,
                                        width: W + 8,
                                        height: W + 8,
                                        children: (0, r.jsx)('div', {
                                            className: S.iconMask,
                                            children: (0, r.jsx)(f.ZP, {
                                                mask: f.ZP.Masks.SQUIRCLE,
                                                width: W,
                                                height: W,
                                                children: (0, r.jsx)('img', {
                                                    src: V,
                                                    alt: '',
                                                    className: S.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: S.guildDetails,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: S.title,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            className: S.guildBadge,
                                            guild: t,
                                            tooltipColor: c.ua7.Colors.PRIMARY
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: S.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: S.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, r.jsxs)('div', {
                                    className: S.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)('div', {
                                                className: S.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: S.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: S.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: C.NW.format(C.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)('div', {
                                                className: S.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: S.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: S.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: C.NW.format(C.t.zRl6XV, { count: t.memberCount })
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
function Z(e) {
    let { guildId: t, onClick: n, onView: i } = e,
        l = (0, o.e7)([y.Z], () => y.Z.getGuild(t));
    return null == l
        ? null
        : (0, r.jsx)(A, {
              guild: l,
              onClick: n,
              onView: i
          });
}
function x(e) {
    let { guildId: t, index: n, onClick: l, onView: a } = e,
        o = i.useRef(null == t),
        s = i.useCallback(
            (e, t, n, i) =>
                null == t.guildId
                    ? (0, r.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: i,
                              children: (0, r.jsx)(b.Z, { className: S.placeholder })
                          },
                          e
                      )
                    : (0, r.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: i,
                              animate: o.current,
                              children: (0, r.jsx)(Z, {
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
        className: S.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: s,
            getItemKey: u
        })
    });
}
let L = i.memo(Z);
