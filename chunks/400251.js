n.d(t, {
    m: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(601964),
    x = n(430824),
    v = n(768581),
    _ = n(683818),
    I = n(16853),
    E = n(981631),
    b = n(388032),
    Z = n(393289),
    S = n(883760);
let N = (e) => {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: Z.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: S
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
function T(e) {
    let { entry: t } = e,
        [r, s] = l.useState(!1),
        { canEdit: c } = (0, _.Z)(t);
    return (0, i.jsx)('div', {
        className: a()(Z.actionButtonsContainer, { [Z.forceButtonsShow]: r }),
        children: (0, i.jsxs)(h.ZP, {
            children: [
                c
                    ? (0, i.jsx)(o.Tooltip, {
                          text: b.intl.string(b.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              let { onClick: l, ...r } = e;
                              return (0, i.jsx)(h.zx, {
                                  ...r,
                                  onClick: () => {
                                      null == l || l(),
                                          (0, o.openModalLazy)(async () => {
                                              let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                              return (n) =>
                                                  (0, i.jsx)(e, {
                                                      ...n,
                                                      entry: t
                                                  });
                                          });
                                  },
                                  'aria-label': b.intl.string(b.t.XnuOvL),
                                  children: (0, i.jsx)(o.PencilIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: Z.overflowIcon
                                  })
                              });
                          }
                      })
                    : null,
                (0, i.jsx)(I.Z, {
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.Tooltip, {
                            text: b.intl.string(b.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                let { onClick: l, ...r } = e;
                                return (0, i.jsx)(h.zx, {
                                    ...n,
                                    ...r,
                                    onClick: (e) => {
                                        null == l || l(), t(e);
                                    },
                                    'aria-label': b.intl.string(b.t.UKOtz8),
                                    children: (0, i.jsx)(o.MoreHorizontalIcon, {
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
t.Z = (e) => {
    var t;
    let { entry: r } = e,
        [a, h] = l.useState(!1),
        _ = null != (0, s.e7)([x.Z], () => x.Z.getGuild(r.guildId)),
        I = async () => {
            h(!0);
            try {
                _ ? (0, g.X)(r.guildId) : await d.Z.joinGuild(r.guildId, { source: E.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        S = v.ZP.getGuildSplashURL({
            id: r.guildId,
            splash: r.splash,
            size: 300 * (0, f.x_)()
        }),
        N =
            null !==
                (t = v.ZP.getGuildIconURL({
                    id: r.guildId,
                    icon: r.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        j = b.intl.string(b.t.VJlc0d);
    return (
        _ && (j = b.intl.string(b.t.cqWE2d)),
        (0, i.jsxs)('div', {
            className: Z.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            entry: r
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
                                null != S &&
                                (0, i.jsx)('img', {
                                    src: S,
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
                                        iconSrc: N,
                                        guild: new C.ZP(r),
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
                                    guild: r,
                                    tooltipColor: o.Tooltip.Colors.PRIMARY
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: Z.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: r.name
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            className: Z.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: r.description
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.memberInfo,
                            children: [
                                null != r.approximatePresenceCount &&
                                    (0, i.jsxs)('div', {
                                        className: Z.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: Z.dotOnline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t['LC+S+v'], { membersOnline: r.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != r.approximateMemberCount &&
                                    (0, i.jsxs)('div', {
                                        className: Z.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: Z.dotOffline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t.zRl6XV, { count: r.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            submitting: a,
                            className: Z.joinButton,
                            color: _ ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            onClick: I,
                            children: j
                        })
                    ]
                }),
                (0, i.jsx)(T, { entry: r })
            ]
        })
    );
};
