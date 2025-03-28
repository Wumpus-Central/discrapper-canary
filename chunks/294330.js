n.d(t, {
    Eo: () => R,
    VD: () => w,
    ZP: () => D
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
    f = n(686546),
    g = n(540059),
    m = n(66637),
    b = n(782738),
    _ = n(371260),
    E = n(372769),
    O = n(582404),
    N = n(134432),
    v = n(695346),
    y = n(768581),
    I = n(356164),
    C = n(890064),
    S = n(826946),
    T = n(981631),
    P = n(388032),
    j = n(734504),
    A = n(129512),
    Z = n(330065),
    x = n(755386);
function w(e) {
    let { guild: t, onClick: l, onView: a } = e,
        b = (0, g.Q3)('BaseGlobalDiscoveryServersCard'),
        [_, I] = i.useState(!1),
        [w, L] = i.useState(!1),
        [R, D] = i.useState(!1),
        k = i.useRef(null),
        M = i.useCallback(async () => {
            L(!0);
            try {
                await l(t.id);
            } catch (n) {
                var e;
                let t = new p.Hx(n);
                u.Z.show({
                    title: P.NW.string(P.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : P.NW.string(P.t.eAn6z8)
                });
            } finally {
                L(!1);
            }
        }, [t.id, l]),
        U = i.useCallback(
            (e) => {
                e && !_ && (I(!0), null == a || a(t.id));
            },
            [t.id, _, a]
        ),
        G = i.useCallback(
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
        W = (0, h.ZP)(),
        V = t.features.has(T.oNc.HUB),
        B = i.useMemo(() => {
            let e = y.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, N.x_)()
            });
            if (null != e) return e;
            if (V) return x;
            switch (W) {
                case T.BRd.DARK:
                    return A;
                case T.BRd.LIGHT:
                    return Z;
            }
        }, [t.discoverySplash, t.id, V, W]),
        H = b ? 48 : 40,
        F = i.useMemo(
            () =>
                y.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: H
                }),
            [t.icon, t.id, H]
        ),
        z = v.Sb.useSetting(),
        Y = (0, O.A)({ location: 'GlobalDiscoveryServersCard' });
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            w &&
                (0, r.jsx)('div', {
                    className: j.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: j.spinner
                    })
                }),
            (0, r.jsx)(s.$, {
                innerRef: k,
                onChange: U,
                active: !_,
                threshold: 0.55,
                children: (0, r.jsxs)(m.Z, {
                    ref: k,
                    className: j.card,
                    onClick: M,
                    disabled: w,
                    onContextMenu: G,
                    'aria-label': P.NW.string(P.t['M9wQ+f']),
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.header,
                            children: [
                                (0, r.jsx)('div', {
                                    className: o()(j.banner, { [j.loaded]: R }),
                                    children: (0, r.jsx)('img', {
                                        src: B,
                                        alt: '',
                                        className: j.bannerImage,
                                        onLoad: () => D(!0)
                                    })
                                }),
                                z &&
                                    !Y &&
                                    (0, r.jsx)(C.Z, {
                                        guild: t,
                                        className: j.contextMenu
                                    }),
                                Y &&
                                    (0, r.jsx)(S.Z, {
                                        className: j.maximizeIcon,
                                        guildId: t.id
                                    }),
                                (0, r.jsx)('div', {
                                    className: j.icon,
                                    children: (0, r.jsx)(f.ZP, {
                                        mask: f.ZP.Masks.SQUIRCLE,
                                        width: H + 8,
                                        height: H + 8,
                                        children: (0, r.jsx)('div', {
                                            className: j.iconMask,
                                            children: (0, r.jsx)(f.ZP, {
                                                mask: f.ZP.Masks.SQUIRCLE,
                                                width: H,
                                                height: H,
                                                children: (0, r.jsx)('img', {
                                                    src: F,
                                                    alt: '',
                                                    className: j.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: j.guildDetails,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: j.title,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            className: j.guildBadge,
                                            guild: t,
                                            tooltipColor: c.ua7.Colors.PRIMARY
                                        }),
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: j.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: j.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, r.jsxs)('div', {
                                    className: j.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)('div', {
                                                className: j.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: j.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: j.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: P.NW.format(P.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)('div', {
                                                className: j.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)('div', { className: j.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: j.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: P.NW.format(P.t.zRl6XV, { count: t.memberCount })
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
function L(e) {
    let { guildId: t, onClick: n, onView: i } = e,
        l = (0, a.e7)([I.Z], () => I.Z.getGuild(t));
    return null == l
        ? null
        : (0, r.jsx)(w, {
              guild: l,
              onClick: n,
              onView: i
          });
}
function R(e) {
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
                              children: (0, r.jsx)(b.Z, { className: j.placeholder })
                          },
                          e
                      )
                    : (0, r.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: i,
                              animate: a.current,
                              children: (0, r.jsx)(L, {
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
        className: j.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: s,
            getItemKey: u
        })
    });
}
let D = i.memo(L);
