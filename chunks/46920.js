t.d(n, {
    Ie: () => f,
    mv: () => v
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(692547),
    a = t(481060),
    s = t(239091),
    o = t(584511),
    c = t(118012),
    d = t(922611),
    u = t(699516),
    _ = t(51144),
    h = t(88751),
    m = t(930180),
    x = t(388032),
    g = t(834110);
let v = (e) => {
        let { channelId: n } = e,
            t = (0, m._d)(n);
        return (0, d.Do)({ location: 'blocked-users-notice' })
            ? (0, l.jsx)(b, { channelId: n })
            : 0 === t
              ? null
              : (0, l.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, l.jsx)(a.t6m, {
                            size: 'lg',
                            className: g.__invalid_blockedIcon,
                            color: r.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, l.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t['6Tcdt7'], { number: t })
                        }),
                        (0, l.jsx)(a.P3F, {
                            className: g.blockedButton,
                            onClick: (e) => {
                                (0, s.vq)(
                                    e,
                                    (e) =>
                                        (0, l.jsx)(N, {
                                            ...e,
                                            channelId: n
                                        }),
                                    {
                                        position: 'left',
                                        align: 'bottom'
                                    }
                                );
                            },
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                });
    },
    b = (e) => {
        let { channelId: n } = e,
            t = (0, m._d)(n),
            i = (0, m.K3)(n);
        if (0 === t && 0 === i) return null;
        let o = (e) => {
            (0, s.vq)(
                e,
                (e) =>
                    (0, l.jsx)(N, {
                        ...e,
                        channelId: n
                    }),
                {
                    position: 'left',
                    align: 'bottom'
                }
            );
        };
        return t > 0 && i > 0
            ? (0, l.jsxs)('div', {
                  className: g.blockedNotice,
                  children: [
                      (0, l.jsx)(a.t6m, {
                          size: 'lg',
                          color: r.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, l.jsx)(a.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: x.intl.string(x.t['P/KFX1'])
                      }),
                      (0, l.jsx)(a.P3F, {
                          className: g.blockedButton,
                          onClick: o,
                          children: x.intl.string(x.t.rUEjBQ)
                      })
                  ]
              })
            : i > 0
              ? (0, l.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, l.jsx)(a.kZF, { size: 'lg' }),
                        (0, l.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t.Ri3o39, { number: i })
                        }),
                        (0, l.jsx)(a.P3F, {
                            className: g.blockedButton,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                })
              : (0, l.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, l.jsx)(a.t6m, {
                            size: 'lg',
                            color: r.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, l.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t['6Tcdt7'], { number: t })
                        }),
                        (0, l.jsx)(a.P3F, {
                            className: g.blockedButton,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                });
    },
    f = (e) => {
        let { user: n, showStatus: t, speaker: r, channelId: s } = e,
            d = (0, i.e7)([h.ZP], () => h.ZP.isModerator(n.id, s)),
            m = (0, i.e7)([u.Z], () => u.Z.isBlocked(n.id)),
            v = null;
        return (
            t && (v = r ? x.intl.string(x.t.LqMmGx) : d ? x.intl.string(x.t.GMZqSk) : x.intl.string(x.t.suRAp6)),
            (0, l.jsxs)('div', {
                className: g.user,
                children: [
                    (0, l.jsx)(
                        o.Z,
                        {
                            src: n.getAvatarURL(null, 32),
                            size: a.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: r
                                ? () =>
                                      (0, l.jsx)(a.S6n, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: g.icon
                                      })
                                : null
                        },
                        n.id
                    ),
                    (0, l.jsxs)('div', {
                        className: g.userInfo,
                        children: [
                            (0, l.jsxs)('div', {
                                className: g.username,
                                children: [
                                    (0, l.jsx)(c.Z, {
                                        size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                        children: _.ZP.getName(n)
                                    }),
                                    (0, l.jsx)(c.Z, {
                                        size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                        color: c.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(n.discriminator)
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: g.username,
                                children: [
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-xs/normal',
                                        color: m ? 'text-danger' : 'text-normal',
                                        children: m ? x.intl.string(x.t['4bDptL']) : x.intl.string(x.t.tFY5ZW)
                                    }),
                                    (0, l.jsxs)(a.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', v]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    N = (e) => {
        let { channelId: n } = e,
            t = (0, m.z)(n),
            i = (0, m.bA)(n);
        return (0, l.jsx)(a.Ttm, {
            className: g.container,
            children: [...t, ...i].map((e) => {
                let { user: t } = e;
                return (0, l.jsx)(
                    f,
                    {
                        user: t,
                        channelId: n
                    },
                    t.id
                );
            })
        });
    };
