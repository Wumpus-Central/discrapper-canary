n.d(t, {
    Eo: () => L,
    VD: () => Z,
    ZP: () => w
}),
    n(47120),
    n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(622535),
    c = n(481060),
    u = n(668781),
    d = n(239091),
    p = n(881052),
    h = n(410030),
    g = n(686546),
    f = n(540059),
    m = n(66637),
    b = n(782738),
    _ = n(371260),
    E = n(372769),
    O = n(134432),
    N = n(695346),
    v = n(768581),
    y = n(356164),
    I = n(890064),
    C = n(981631),
    S = n(388032),
    T = n(240922),
    P = n(129512),
    j = n(330065),
    A = n(755386);
function Z(e) {
    let { guild: t, onClick: l, onView: a } = e,
        b = (0, f.Q3)('BaseGlobalDiscoveryServersCard'),
        [_, y] = i.useState(!1),
        [Z, x] = i.useState(!1),
        [L, w] = i.useState(!1),
        R = i.useCallback(async () => {
            x(!0);
            try {
                await l(t.id);
            } catch (n) {
                var e;
                let t = new p.Hx(n);
                u.Z.show({
                    title: S.NW.string(S.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : S.NW.string(S.t.eAn6z8)
                });
            } finally {
                x(!1);
            }
        }, [t.id, l]),
        D = i.useCallback(
            (e) => {
                e && !_ && (y(!0), null == a || a(t.id));
            },
            [t.id, _, a]
        ),
        k = i.useCallback(
            (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 858523));
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
        U = t.features.has(C.oNc.HUB),
        G = i.useMemo(() => {
            let e = v.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, O.x_)()
            });
            if (null != e) return e;
            if (U) return A;
            switch (M) {
                case C.BRd.DARK:
                    return P;
                case C.BRd.LIGHT:
                    return j;
            }
        }, [t.discoverySplash, t.id, U, M]),
        W = b ? 48 : 40,
        V = i.useMemo(
            () =>
                v.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: W
                }),
            [t.icon, t.id, W]
        ),
        B = N.Sb.useSetting();
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            Z &&
                (0, r.jsx)('div', {
                    className: T.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: T.spinner
                    })
                }),
            (0, r.jsx)(s.$, {
                onChange: D,
                active: !_,
                threshold: 0.55,
                children: (0, r.jsxs)(m.Z, {
                    className: T.card,
                    onClick: R,
                    disabled: Z,
                    onContextMenu: k,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, r.jsx)('div', {
                                    className: o()(T.banner, { [T.loaded]: L }),
                                    children: (0, r.jsx)('img', {
                                        src: G,
                                        alt: '',
                                        className: T.bannerImage,
                                        onLoad: () => w(!0)
                                    })
                                }),
                                B &&
                                    (0, r.jsx)(I.Z, {
                                        guild: t,
                                        className: T.contextMenu
                                    }),
                                (0, r.jsx)('div', {
                                    className: T.icon,
                                    children: (0, r.jsx)(g.ZP, {
                                        mask: g.ZP.Masks.SQUIRCLE,
                                        width: W + 8,
                                        height: W + 8,
                                        children: (0, r.jsx)('div', {
                                            className: T.iconMask,
                                            children: (0, r.jsx)(g.ZP, {
                                                mask: g.ZP.Masks.SQUIRCLE,
                                                width: W,
                                                height: W,
                                                children: (0, r.jsx)('img', {
                                                    src: V,
                                                    alt: '',
                                                    className: T.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: T.guildDetails,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.title,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            className: T.guildBadge,
                                            guild: t,
                                            tooltipColor: c.ua7.Colors.PRIMARY
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: T.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: T.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, r.jsxs)('div', {
                                    className: T.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)('div', {
                                                className: T.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: T.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: T.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: S.NW.format(S.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)('div', {
                                                className: T.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: T.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: T.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: S.NW.format(S.t.zRl6XV, { count: t.memberCount })
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
function x(e) {
    let { guildId: t, onClick: n, onView: i } = e,
        l = (0, a.e7)([y.Z], () => y.Z.getGuild(t));
    return null == l
        ? null
        : (0, r.jsx)(Z, {
              guild: l,
              onClick: n,
              onView: i
          });
}
function L(e) {
    let { guildId: t, index: n, onClick: l, onView: o } = e,
        a = i.useRef(null == t),
        s = i.useCallback(
            (e, t, n, i) =>
                null == t.guildId
                    ? (0, r.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: i,
                              children: (0, r.jsx)(b.Z, { className: T.placeholder })
                          },
                          e
                      )
                    : (0, r.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: i,
                              animate: a.current,
                              children: (0, r.jsx)(x, {
                                  guildId: t.guildId,
                                  onClick: l,
                                  onView: o
                              })
                          },
                          e
                      ),
            [l, o]
        ),
        u = i.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
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
        className: T.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: s,
            getItemKey: u
        })
    });
}
let w = i.memo(x);
