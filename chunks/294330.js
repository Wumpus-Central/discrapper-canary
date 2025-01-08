n.d(t, {
    Eo: function () {
        return y;
    },
    VD: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(668781),
    u = n(239091),
    h = n(881052),
    m = n(410030),
    p = n(686546),
    g = n(66637),
    f = n(782738),
    _ = n(371260),
    E = n(372769),
    I = n(134432),
    C = n(695346),
    N = n(768581),
    v = n(356164),
    S = n(890064),
    T = n(981631),
    b = n(388032),
    A = n(125285),
    Z = n(129512),
    x = n(330065),
    L = n(755386);
function P(e) {
    let { guild: t, onClick: l, onView: s } = e,
        [f, _] = r.useState(!1),
        [v, P] = r.useState(!1),
        [O, y] = r.useState(!1),
        R = r.useCallback(async () => {
            P(!0);
            try {
                await l(t.id);
            } catch (n) {
                var e;
                let t = new h.Hx(n);
                d.Z.show({
                    title: b.intl.string(b.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : b.intl.string(b.t.eAn6z8)
                });
            } finally {
                P(!1);
            }
        }, [t.id, l]),
        j = r.useCallback(
            (e) => {
                e && !f && (_(!0), null == s || s(t.id));
            },
            [t.id, f, s]
        ),
        D = r.useCallback(
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
        M = (0, m.ZP)(),
        w = t.features.has(T.oNc.HUB),
        k = r.useMemo(() => {
            let e = N.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, I.x_)()
            });
            if (null != e) return e;
            if (w) return L;
            switch (M) {
                case T.BRd.DARK:
                    return Z;
                case T.BRd.LIGHT:
                    return x;
            }
        }, [t.discoverySplash, t.id, w, M]),
        U = r.useMemo(
            () =>
                N.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        G = C.Sb.useSetting();
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            v &&
                (0, i.jsx)('div', {
                    className: A.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: A.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: j,
                active: !f,
                threshold: 0.55,
                children: (0, i.jsxs)(g.Z, {
                    className: A.card,
                    onClick: R,
                    disabled: v,
                    onContextMenu: D,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: a()(A.banner, { [A.loaded]: O }),
                                    children: (0, i.jsx)('img', {
                                        src: k,
                                        alt: '',
                                        className: A.bannerImage,
                                        onLoad: () => y(!0)
                                    })
                                }),
                                G &&
                                    (0, i.jsx)(S.Z, {
                                        guild: t,
                                        className: A.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: A.icon,
                                    children: (0, i.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('div', {
                                            className: A.iconMask,
                                            children: (0, i.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 40,
                                                height: 40,
                                                children: (0, i.jsx)('img', {
                                                    src: U,
                                                    alt: '',
                                                    className: A.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: A.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: A.title,
                                    children: [
                                        (0, i.jsx)(E.Z, {
                                            className: A.guildBadge,
                                            guild: t,
                                            tooltipColor: c.Tooltip.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: A.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: A.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: A.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: A.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: A.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: b.intl.format(b.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: A.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: A.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: A.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: b.intl.format(b.t.zRl6XV, { count: t.memberCount })
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
    let { guildId: t, onClick: n, onView: r } = e,
        l = (0, s.e7)([v.Z], () => v.Z.getGuild(t));
    return null == l
        ? null
        : (0, i.jsx)(P, {
              guild: l,
              onClick: n,
              onView: r
          });
}
function y(e) {
    let { guildId: t, index: n, onClick: l, onView: a } = e,
        s = r.useRef(null == t),
        o = r.useCallback(
            (e, t, n, r) =>
                null == t.guildId
                    ? (0, i.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: r,
                              children: (0, i.jsx)(f.Z, { className: A.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: r,
                              animate: s.current,
                              children: (0, i.jsx)(O, {
                                  guildId: t.guildId,
                                  onClick: l,
                                  onView: a
                              })
                          },
                          e
                      ),
            [l, a]
        ),
        d = r.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
        }, []),
        u = r.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, i.jsx)('div', {
        className: A.transitionGroup,
        children: (0, i.jsx)(c.TransitionGroup, {
            items: u,
            renderItem: o,
            getItemKey: d
        })
    });
}
t.ZP = r.memo(O);
