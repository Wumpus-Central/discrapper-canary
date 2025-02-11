n.d(t, {
    Eo: () => R,
    VD: () => P,
    ZP: () => j
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(668781),
    u = n(239091),
    h = n(881052),
    m = n(410030),
    p = n(686546),
    g = n(540059),
    _ = n(66637),
    f = n(782738),
    E = n(371260),
    I = n(372769),
    C = n(134432),
    N = n(695346),
    v = n(768581),
    T = n(356164),
    S = n(890064),
    A = n(981631),
    Z = n(388032),
    b = n(992676),
    x = n(129512),
    L = n(330065),
    y = n(755386);
function P(e) {
    let { guild: t, onClick: r, onView: s } = e,
        f = (0, g.Q3)('BaseGlobalDiscoveryServersCard'),
        [E, T] = l.useState(!1),
        [P, O] = l.useState(!1),
        [R, j] = l.useState(!1),
        D = l.useCallback(async () => {
            O(!0);
            try {
                await r(t.id);
            } catch (n) {
                var e;
                let t = new h.Hx(n);
                d.Z.show({
                    title: Z.intl.string(Z.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : Z.intl.string(Z.t.eAn6z8)
                });
            } finally {
                O(!1);
            }
        }, [t.id, r]),
        w = l.useCallback(
            (e) => {
                e && !E && (T(!0), null == s || s(t.id));
            },
            [t.id, E, s]
        ),
        M = l.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 858523));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            },
            [t]
        ),
        k = (0, m.ZP)(),
        U = t.features.has(A.oNc.HUB),
        G = l.useMemo(() => {
            let e = v.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, C.x_)()
            });
            if (null != e) return e;
            if (U) return y;
            switch (k) {
                case A.BRd.DARK:
                    return x;
                case A.BRd.LIGHT:
                    return L;
            }
        }, [t.discoverySplash, t.id, U, k]),
        B = f ? 48 : 40,
        V = l.useMemo(
            () =>
                v.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: B
                }),
            [t.icon, t.id, B]
        ),
        H = N.Sb.useSetting();
    return (0, i.jsxs)('div', {
        className: b.container,
        children: [
            P &&
                (0, i.jsx)('div', {
                    className: b.spinnerContainer,
                    children: (0, i.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: b.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: w,
                active: !E,
                threshold: 0.55,
                children: (0, i.jsxs)(_.Z, {
                    className: b.card,
                    onClick: D,
                    disabled: P,
                    onContextMenu: M,
                    children: [
                        (0, i.jsxs)('div', {
                            className: b.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: a()(b.banner, { [b.loaded]: R }),
                                    children: (0, i.jsx)('img', {
                                        src: G,
                                        alt: '',
                                        className: b.bannerImage,
                                        onLoad: () => j(!0)
                                    })
                                }),
                                H &&
                                    (0, i.jsx)(S.Z, {
                                        guild: t,
                                        className: b.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: b.icon,
                                    children: (0, i.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: B + 8,
                                        height: B + 8,
                                        children: (0, i.jsx)('div', {
                                            className: b.iconMask,
                                            children: (0, i.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: B,
                                                height: B,
                                                children: (0, i.jsx)('img', {
                                                    src: V,
                                                    alt: '',
                                                    className: b.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: b.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: b.title,
                                    children: [
                                        (0, i.jsx)(I.Z, {
                                            className: b.guildBadge,
                                            guild: t,
                                            tooltipColor: c.ua7.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: b.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: b.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: b.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: b.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: b.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: Z.intl.format(Z.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: b.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: b.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: b.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: Z.intl.format(Z.t.zRl6XV, { count: t.memberCount })
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
function O(e) {
    let { guildId: t, onClick: n, onView: l } = e,
        r = (0, s.e7)([T.Z], () => T.Z.getGuild(t));
    return null == r
        ? null
        : (0, i.jsx)(P, {
              guild: r,
              onClick: n,
              onView: l
          });
}
function R(e) {
    let { guildId: t, index: n, onClick: r, onView: a } = e,
        s = l.useRef(null == t),
        o = l.useCallback(
            (e, t, n, l) =>
                null == t.guildId
                    ? (0, i.jsx)(
                          E.Z,
                          {
                              state: n,
                              cleanUp: l,
                              children: (0, i.jsx)(f.Z, { className: b.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          E.Z,
                          {
                              state: n,
                              cleanUp: l,
                              animate: s.current,
                              children: (0, i.jsx)(O, {
                                  guildId: t.guildId,
                                  onClick: r,
                                  onView: a
                              })
                          },
                          e
                      ),
            [r, a]
        ),
        d = l.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
        }, []),
        u = l.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, i.jsx)('div', {
        className: b.transitionGroup,
        children: (0, i.jsx)(c.W3x, {
            items: u,
            renderItem: o,
            getItemKey: d
        })
    });
}
let j = l.memo(O);
