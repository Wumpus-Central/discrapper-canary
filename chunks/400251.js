n.d(t, {
    Z: () => j,
    m: () => T
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(749210),
    u = n(686546),
    h = n(951394),
    p = n(565138),
    m = n(372769),
    f = n(134432),
    g = n(769654),
    _ = n(601964),
    C = n(430824),
    x = n(768581),
    v = n(683818),
    E = n(16853),
    I = n(981631),
    b = n(388032),
    Z = n(393289),
    N = n(883760);
let T = (e) => {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.P3F, {
        onClick: t,
        className: Z.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: N
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: Z.addServerText,
                children: b.intl.string(b.t.H9jxS0)
            })
        ]
    });
};
function S(e) {
    let { entry: t } = e,
        [a, s] = l.useState(!1),
        { canEdit: c } = (0, v.Z)(t);
    return (0, i.jsx)('div', {
        className: r()(Z.actionButtonsContainer, { [Z.forceButtonsShow]: a }),
        children: (0, i.jsxs)(h.ZP, {
            children: [
                c
                    ? (0, i.jsx)(o.ua7, {
                          text: b.intl.string(b.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              let { onClick: l, ...a } = e;
                              return (0, i.jsx)(h.zx, {
                                  ...a,
                                  onClick: () => {
                                      null == l || l(),
                                          (0, o.ZDy)(async () => {
                                              let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                              return (n) =>
                                                  (0, i.jsx)(e, {
                                                      ...n,
                                                      entry: t
                                                  });
                                          });
                                  },
                                  'aria-label': b.intl.string(b.t.XnuOvL),
                                  children: (0, i.jsx)(o.vdY, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: Z.overflowIcon
                                  })
                              });
                          }
                      })
                    : null,
                (0, i.jsx)(E.Z, {
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.ua7, {
                            text: b.intl.string(b.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                let { onClick: l, ...a } = e;
                                return (0, i.jsx)(h.zx, {
                                    ...n,
                                    ...a,
                                    onClick: (e) => {
                                        null == l || l(), t(e);
                                    },
                                    'aria-label': b.intl.string(b.t.UKOtz8),
                                    children: (0, i.jsx)(o.xhG, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: Z.overflowIcon
                                    })
                                });
                            }
                        });
                    }
                })
            ]
        })
    });
}
let j = (e) => {
    var t;
    let { entry: a } = e,
        [r, h] = l.useState(!1),
        v = null != (0, s.e7)([C.Z], () => C.Z.getGuild(a.guildId)),
        E = async () => {
            h(!0);
            try {
                v ? (0, g.X)(a.guildId) : await d.Z.joinGuild(a.guildId, { source: I.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        N = x.ZP.getGuildSplashURL({
            id: a.guildId,
            splash: a.splash,
            size: 300 * (0, f.x_)()
        }),
        T =
            null !==
                (t = x.ZP.getGuildIconURL({
                    id: a.guildId,
                    icon: a.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        j = b.intl.string(b.t.VJlc0d);
    return (
        v && (j = b.intl.string(b.t.cqWE2d)),
        (0, i.jsxs)('div', {
            className: Z.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            entry: a
                        });
                });
            },
            children: [
                (0, i.jsxs)('div', {
                    className: Z.cardHeader,
                    children: [
                        (0, i.jsx)('div', {
                            className: Z.splash,
                            children:
                                null != N &&
                                (0, i.jsx)('img', {
                                    src: N,
                                    alt: '',
                                    className: Z.splashImage
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: Z.guildIcon,
                            children: (0, i.jsx)(u.ZP, {
                                mask: u.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)('div', {
                                    className: Z.iconMask,
                                    children: (0, i.jsx)(p.Z, {
                                        className: Z.icon,
                                        iconSrc: T,
                                        guild: new _.ZP(a),
                                        size: p.Z.Sizes.MEDIUM,
                                        active: !0
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Z.guildInfo,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.title,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    className: Z.guildBadge,
                                    guild: a,
                                    tooltipColor: o.ua7.Colors.PRIMARY
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: Z.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: a.name
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            className: Z.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: a.description
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.memberInfo,
                            children: [
                                null != a.approximatePresenceCount &&
                                    (0, i.jsxs)('div', {
                                        className: Z.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: Z.dotOnline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t['LC+S+v'], { membersOnline: a.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != a.approximateMemberCount &&
                                    (0, i.jsxs)('div', {
                                        className: Z.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: Z.dotOffline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t.zRl6XV, { count: a.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.zxk, {
                            submitting: r,
                            className: Z.joinButton,
                            color: v ? o.zxk.Colors.PRIMARY : o.zxk.Colors.GREEN,
                            onClick: E,
                            children: j
                        })
                    ]
                }),
                (0, i.jsx)(S, { entry: a })
            ]
        })
    );
};
