t.d(e, {
    Ie: function () {
        return I;
    },
    mv: function () {
        return f;
    }
}),
    t(47120);
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(692547),
    c = t(481060),
    s = t(239091),
    o = t(584511),
    a = t(118012),
    d = t(922611),
    u = t(699516),
    h = t(51144),
    _ = t(88751),
    m = t(930180),
    x = t(388032),
    g = t(834110);
let f = (n) => {
        let { channelId: e } = n,
            t = (0, m._d)(e);
        return (0, d.Do)({ location: 'blocked-users-notice' })
            ? (0, r.jsx)(E, { channelId: e })
            : 0 === t
              ? null
              : (0, r.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, r.jsx)(c.DenyIcon, {
                            size: 'lg',
                            className: g.__invalid_blockedIcon,
                            color: l.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t['6Tcdt7'], { number: t })
                        }),
                        (0, r.jsx)(c.Clickable, {
                            className: g.blockedButton,
                            onClick: (n) => {
                                (0, s.vq)(
                                    n,
                                    (n) =>
                                        (0, r.jsx)(T, {
                                            ...n,
                                            channelId: e
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
    E = (n) => {
        let { channelId: e } = n,
            t = (0, m._d)(e),
            i = (0, m.K3)(e);
        if (0 === t && 0 === i) return null;
        let o = (n) => {
            (0, s.vq)(
                n,
                (n) =>
                    (0, r.jsx)(T, {
                        ...n,
                        channelId: e
                    }),
                {
                    position: 'left',
                    align: 'bottom'
                }
            );
        };
        return t > 0 && i > 0
            ? (0, r.jsxs)('div', {
                  className: g.blockedNotice,
                  children: [
                      (0, r.jsx)(c.DenyIcon, {
                          size: 'lg',
                          color: l.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: x.intl.string(x.t['P/KFX1'])
                      }),
                      (0, r.jsx)(c.Clickable, {
                          className: g.blockedButton,
                          onClick: o,
                          children: x.intl.string(x.t.rUEjBQ)
                      })
                  ]
              })
            : i > 0
              ? (0, r.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, r.jsx)(c.EyeSlashIcon, { size: 'lg' }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t.Ri3o39, { number: i })
                        }),
                        (0, r.jsx)(c.Clickable, {
                            className: g.blockedButton,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    className: g.blockedNotice,
                    children: [
                        (0, r.jsx)(c.DenyIcon, {
                            size: 'lg',
                            color: l.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.intl.format(x.t['6Tcdt7'], { number: t })
                        }),
                        (0, r.jsx)(c.Clickable, {
                            className: g.blockedButton,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBQ)
                        })
                    ]
                });
    },
    I = (n) => {
        let { user: e, showStatus: t, speaker: l, channelId: s } = n,
            d = (0, i.e7)([_.ZP], () => _.ZP.isModerator(e.id, s)),
            m = (0, i.e7)([u.Z], () => u.Z.isBlocked(e.id)),
            f = null;
        return (
            t && (f = l ? x.intl.string(x.t.LqMmGx) : d ? x.intl.string(x.t.GMZqSk) : x.intl.string(x.t.suRAp6)),
            (0, r.jsxs)('div', {
                className: g.user,
                children: [
                    (0, r.jsx)(
                        o.Z,
                        {
                            src: e.getAvatarURL(null, 32),
                            size: c.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: l
                                ? () =>
                                      (0, r.jsx)(c.MicrophoneIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: g.icon
                                      })
                                : null
                        },
                        e.id
                    ),
                    (0, r.jsxs)('div', {
                        className: g.userInfo,
                        children: [
                            (0, r.jsxs)('div', {
                                className: g.username,
                                children: [
                                    (0, r.jsx)(a.Z, {
                                        size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        children: h.ZP.getName(e)
                                    }),
                                    (0, r.jsx)(a.Z, {
                                        size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        color: a.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(e.discriminator)
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: g.username,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: m ? 'text-danger' : 'text-normal',
                                        children: m ? x.intl.string(x.t['4bDptL']) : x.intl.string(x.t.tFY5ZW)
                                    }),
                                    (0, r.jsxs)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', f]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    T = (n) => {
        let { channelId: e } = n,
            t = (0, m.z)(e),
            i = (0, m.bA)(e);
        return (0, r.jsx)(c.Scroller, {
            className: g.container,
            children: [...t, ...i].map((n) => {
                let { user: t } = n;
                return (0, r.jsx)(
                    I,
                    {
                        user: t,
                        channelId: e
                    },
                    t.id
                );
            })
        });
    };
