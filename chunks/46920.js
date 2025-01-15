t.d(n, {
    Ie: function () {
        return I;
    },
    mv: function () {
        return v;
    }
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(692547),
    r = t(481060),
    o = t(239091),
    s = t(584511),
    c = t(118012),
    d = t(922611),
    u = t(699516),
    m = t(51144),
    x = t(88751),
    h = t(930180),
    f = t(388032),
    g = t(305191);
let v = (e) => {
        let { channelId: n } = e,
            t = (0, h._d)(n);
        return (0, d.Do)({ location: 'blocked-users-notice' })
            ? (0, l.jsx)(_, { channelId: n })
            : 0 === t
              ? null
              : (0, l.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, l.jsx)(r.DenyIcon, {
                            size: 'lg',
                            className: g.__invalid_blockedIcon,
                            color: a.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: f.intl.format(f.t['6Tcdt7'], { number: t })
                        }),
                        (0, l.jsx)(r.Clickable, {
                            className: g.blockedButton,
                            onClick: (e) => {
                                (0, o.vq)(
                                    e,
                                    (e) =>
                                        (0, l.jsx)(j, {
                                            ...e,
                                            channelId: n
                                        }),
                                    {
                                        position: 'left',
                                        align: 'bottom'
                                    }
                                );
                            },
                            children: f.intl.string(f.t.rUEjBQ)
                        })
                    ]
                });
    },
    _ = (e) => {
        let { channelId: n } = e,
            t = (0, h._d)(n),
            i = (0, h.K3)(n);
        if (0 === t && 0 === i) return null;
        let s = (e) => {
            (0, o.vq)(
                e,
                (e) =>
                    (0, l.jsx)(j, {
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
                      (0, l.jsx)(r.DenyIcon, {
                          size: 'lg',
                          color: a.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, l.jsx)(r.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: f.intl.string(f.t['P/KFX1'])
                      }),
                      (0, l.jsx)(r.Clickable, {
                          className: g.blockedButton,
                          onClick: s,
                          children: f.intl.string(f.t.rUEjBQ)
                      })
                  ]
              })
            : i > 0
              ? (0, l.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, l.jsx)(r.EyeSlashIcon, { size: 'lg' }),
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: f.intl.format(f.t.Ri3o39, { number: i })
                        }),
                        (0, l.jsx)(r.Clickable, {
                            className: g.blockedButton,
                            onClick: s,
                            children: f.intl.string(f.t.rUEjBQ)
                        })
                    ]
                })
              : (0, l.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, l.jsx)(r.DenyIcon, {
                            size: 'lg',
                            color: a.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: f.intl.format(f.t['6Tcdt7'], { number: t })
                        }),
                        (0, l.jsx)(r.Clickable, {
                            className: g.blockedButton,
                            onClick: s,
                            children: f.intl.string(f.t.rUEjBQ)
                        })
                    ]
                });
    },
    I = (e) => {
        let { user: n, showStatus: t, speaker: a, channelId: o } = e,
            d = (0, i.e7)([x.ZP], () => x.ZP.isModerator(n.id, o)),
            h = (0, i.e7)([u.Z], () => u.Z.isBlocked(n.id)),
            v = null;
        return (
            t && (v = a ? f.intl.string(f.t.LqMmGx) : d ? f.intl.string(f.t.GMZqSk) : f.intl.string(f.t.suRAp6)),
            (0, l.jsxs)('div', {
                className: g.user,
                children: [
                    (0, l.jsx)(
                        s.Z,
                        {
                            src: n.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: a
                                ? () =>
                                      (0, l.jsx)(r.MicrophoneIcon, {
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
                                        children: m.ZP.getName(n)
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
                                    (0, l.jsx)(r.Text, {
                                        variant: 'text-xs/normal',
                                        color: h ? 'text-danger' : 'text-normal',
                                        children: h ? f.intl.string(f.t['4bDptL']) : f.intl.string(f.t.tFY5ZW)
                                    }),
                                    (0, l.jsxs)(r.Text, {
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
    j = (e) => {
        let { channelId: n } = e,
            t = (0, h.z)(n),
            i = (0, h.bA)(n);
        return (0, l.jsx)(r.Scroller, {
            className: g.container,
            children: [...t, ...i].map((e) => {
                let { user: t } = e;
                return (0, l.jsx)(
                    I,
                    {
                        user: t,
                        channelId: n
                    },
                    t.id
                );
            })
        });
    };
