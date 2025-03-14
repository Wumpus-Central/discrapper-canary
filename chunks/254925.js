n.d(t, {
    QV: () => h,
    ZP: () => b,
    go: () => f
}),
    n(266796);
var r = n(200651),
    i = n(442837),
    s = n(481060),
    a = n(434404),
    l = n(999382),
    o = n(835887),
    c = n(388661),
    d = n(500230),
    u = n(116175),
    m = n(502936),
    g = n(388032),
    p = n(935921);
let h = [u.ZD.LEAF, u.ZD.SWORD, u.ZD.HEART, u.ZD.FIRE, u.ZD.WATER_DROP, u.ZD.SKULL, u.ZD.MOON, u.ZD.LIGHTNING, u.ZD.COMPASS, u.ZD.TOADSTOOL],
    f = [
        {
            primary: '#ff1c90',
            secondary: '#ff7fc0'
        },
        {
            primary: '#ff8f1c',
            secondary: '#ffae77'
        },
        {
            primary: '#eebe1a',
            secondary: '#fffc7f'
        },
        {
            primary: '#32a070',
            secondary: '#57b59e'
        },
        {
            primary: '#32839a',
            secondary: '#71c2d9'
        },
        {
            primary: '#8a43ff',
            secondary: '#bd95ff'
        },
        {
            primary: '#9b3fe5',
            secondary: '#cc8dff'
        },
        {
            primary: '#942e8f',
            secondary: '#d46cb5'
        },
        {
            primary: '#d14242',
            secondary: '#ff8989'
        },
        {
            primary: '#814300',
            secondary: '#a88a6c'
        },
        {
            primary: '#717224',
            secondary: '#c3c3c3'
        },
        {
            primary: '#5d1d47',
            secondary: '#c58fbb'
        },
        {
            primary: '#222222',
            secondary: '#cccccc'
        }
    ],
    b = function () {
        (0, g.j1)(m.M);
        let e = (0, i.e7)([l.Z], () => l.Z.getGuild()),
            t = (0, i.e7)([l.Z], () => l.Z.getGuildProfile());
        if (null == e || null == t) return null;
        let n = (null == t ? void 0 : t.tag) == null,
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        className: p.section,
                        guildId: e.id,
                        guildProfile: t,
                        isDisabled: n
                    }),
                    (0, r.jsx)(o.Z, {
                        className: p.section,
                        guildId: e.id,
                        guildProfile: t
                    }),
                    (0, r.jsx)(d.Z, {
                        className: p.section,
                        guildId: e.id,
                        guildProfile: t
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: p.leftContent,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: p.title,
                    variant: 'heading-lg/semibold',
                    children: g.NW.string(m.Z.mf2OwM)
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: p.description,
                    children: g.NW.string(m.Z['655Un5'])
                }),
                (0, r.jsxs)('div', {
                    className: p.enableSwitchContainer,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: 'enable-server-tag',
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: g.NW.string(m.Z['1zams7'])
                            })
                        }),
                        (0, r.jsx)(s.rsf, {
                            id: 'enable-server-tag',
                            checked: !n,
                            onChange: () => {
                                if (n) {
                                    var r, i, s, l;
                                    a.Z.updateGuildProfile(e.id, {
                                        tag: null !== (r = null == t ? void 0 : t.tag) && void 0 !== r ? r : '',
                                        badge: null !== (i = null == t ? void 0 : t.badge) && void 0 !== i ? i : h[0],
                                        badgeColorPrimary: null !== (s = null == t ? void 0 : t.badgeColorPrimary) && void 0 !== s ? s : f[0].primary,
                                        badgeColorSecondary: null !== (l = null == t ? void 0 : t.badgeColorSecondary) && void 0 !== l ? l : f[0].secondary
                                    });
                                } else a.Z.updateGuildProfile(e.id, { tag: null });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: p.memberApplicationsInfo,
                    children: g.NW.format(m.Z.WUACVF, {
                        onClick: () => {}
                    })
                }),
                n
                    ? (0, r.jsx)(s.nuw, {
                          children: (0, r.jsx)('div', {
                              className: p.disabledForm,
                              children: u
                          })
                      })
                    : u
            ]
        });
    };
