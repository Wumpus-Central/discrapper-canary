t.d(n, {
    Ie: () => N,
    mv: () => E
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    s = t(692547),
    l = t(481060),
    a = t(239091),
    o = t(584511),
    c = t(118012),
    d = t(922611),
    u = t(699516),
    _ = t(51144),
    h = t(88751),
    m = t(930180),
    x = t(388032),
    g = t(982805);
let E = (e) => {
        let { channelId: n } = e,
            t = (0, m._d)(n);
        return (0, d.Do)({ location: 'blocked-users-notice' })
            ? (0, i.jsx)(T, { channelId: n })
            : 0 === t
              ? null
              : (0, i.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, i.jsx)(l.t6m, {
                            size: 'lg',
                            className: g.__invalid_blockedIcon,
                            color: s.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t['6Tcdt7'], { number: t })
                        }),
                        (0, i.jsx)(l.P3F, {
                            className: g.blockedButton,
                            onClick: (e) => {
                                (0, a.vq)(
                                    e,
                                    (e) =>
                                        (0, i.jsx)(j, {
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
    T = (e) => {
        let { channelId: n } = e,
            t = (0, m._d)(n),
            r = (0, m.K3)(n);
        if (0 === t && 0 === r) return null;
        let o = (e) => {
            (0, a.vq)(
                e,
                (e) =>
                    (0, i.jsx)(j, {
                        ...e,
                        channelId: n
                    }),
                {
                    position: 'left',
                    align: 'bottom'
                }
            );
        };
        return t > 0 && r > 0
            ? (0, i.jsxs)('div', {
                  className: g.blockedNotice,
                  children: [
                      (0, i.jsx)(l.t6m, {
                          size: 'lg',
                          color: s.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, i.jsx)(l.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: x.intl.string(x.t['P/KFX1'])
                      }),
                      (0, i.jsx)(l.P3F, {
                          className: g.blockedButton,
                          onClick: o,
                          children: x.intl.string(x.t.rUEjBQ)
                      })
                  ]
              })
            : r > 0
              ? (0, i.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, i.jsx)(l.kZF, { size: 'lg' }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t.Ri3o39, { number: r })
                        }),
                        (0, i.jsx)(l.P3F, {
                            className: g.blockedButton,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                })
              : (0, i.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, i.jsx)(l.t6m, {
                            size: 'lg',
                            color: s.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t['6Tcdt7'], { number: t })
                        }),
                        (0, i.jsx)(l.P3F, {
                            className: g.blockedButton,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                });
    },
    N = (e) => {
        let { user: n, showStatus: t, speaker: s, channelId: a } = e,
            d = (0, r.e7)([h.ZP], () => h.ZP.isModerator(n.id, a)),
            m = (0, r.e7)([u.Z], () => u.Z.isBlocked(n.id)),
            E = null;
        return (
            t && (E = s ? x.intl.string(x.t.LqMmGx) : d ? x.intl.string(x.t.GMZqSk) : x.intl.string(x.t.suRAp6)),
            (0, i.jsxs)('div', {
                className: g.user,
                children: [
                    (0, i.jsx)(
                        o.Z,
                        {
                            src: n.getAvatarURL(null, 32),
                            size: l.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () =>
                                      (0, i.jsx)(l.S6n, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: g.icon
                                      })
                                : null
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: g.userInfo,
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.username,
                                children: [
                                    (0, i.jsx)(c.Z, {
                                        size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                        children: _.ZP.getName(n)
                                    }),
                                    (0, i.jsx)(c.Z, {
                                        size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                                        color: c.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(n.discriminator)
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: g.username,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: m ? 'text-danger' : 'text-normal',
                                        children: m ? x.intl.string(x.t['4bDptL']) : x.intl.string(x.t.tFY5ZW)
                                    }),
                                    (0, i.jsxs)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', E]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    j = (e) => {
        let { channelId: n } = e,
            t = (0, m.z)(n),
            r = (0, m.bA)(n);
        return (0, i.jsx)(l.Ttm, {
            className: g.container,
            children: [...t, ...r].map((e) => {
                let { user: t } = e;
                return (0, i.jsx)(
                    N,
                    {
                        user: t,
                        channelId: n
                    },
                    t.id
                );
            })
        });
    };
