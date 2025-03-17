n.d(t, {
    QV: () => x,
    ZP: () => N,
    go: () => j
}),
    n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(314852),
    o = n(65361),
    c = n(434404),
    d = n(999382),
    u = n(835887),
    m = n(388661),
    g = n(500230),
    p = n(116175),
    h = n(502936),
    f = n(388032),
    b = n(935921);
let x = [p.ZD.LEAF, p.ZD.SWORD, p.ZD.HEART, p.ZD.FIRE, p.ZD.WATER_DROP, p.ZD.SKULL, p.ZD.MOON, p.ZD.LIGHTNING, p.ZD.COMPASS, p.ZD.TOADSTOOL],
    j = [
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
    N = function () {
        (0, f.j1)(h.M);
        let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
            t = (0, s.e7)([d.Z], () => d.Z.getGuildProfile()),
            { fetchGuildProfile: n, fetchStatus: p } = (0, o.u)(null == e ? void 0 : e.id);
        if (
            (i.useEffect(() => {
                p === l.a.NOT_FETCHED && n();
            }, [n, p]),
            p !== l.a.FETCHED)
        )
            return (0, r.jsx)('div', {
                className: b.spinnerContainer,
                children: (0, r.jsx)(a.$jN, {})
            });
        if (null == e || null == t) return null;
        let N = (null == t ? void 0 : t.tag) == null,
            v = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(m.Z, {
                        className: b.section,
                        guildId: e.id,
                        guildProfile: t,
                        isDisabled: N
                    }),
                    (0, r.jsx)(u.Z, {
                        className: b.section,
                        guildId: e.id,
                        guildProfile: t
                    }),
                    (0, r.jsx)(g.Z, {
                        className: b.section,
                        guildId: e.id,
                        guildProfile: t
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: b.leftContent,
            children: [
                (0, r.jsx)(a.X6q, {
                    className: b.title,
                    variant: 'heading-lg/semibold',
                    children: f.NW.string(h.Z.mf2OwM)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: b.description,
                    children: f.NW.string(h.Z['655Un5'])
                }),
                (0, r.jsxs)('div', {
                    className: b.enableSwitchContainer,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: 'enable-server-tag',
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: f.NW.string(h.Z['1zams7'])
                            })
                        }),
                        (0, r.jsx)(a.rsf, {
                            id: 'enable-server-tag',
                            checked: !N,
                            onChange: () => {
                                if (N) {
                                    var n, r, i, s;
                                    c.Z.updateGuildProfile(e.id, {
                                        tag: null !== (n = null == t ? void 0 : t.tag) && void 0 !== n ? n : '',
                                        badge: null !== (r = null == t ? void 0 : t.badge) && void 0 !== r ? r : x[0],
                                        badgeColorPrimary: null !== (i = null == t ? void 0 : t.badgeColorPrimary) && void 0 !== i ? i : j[0].primary,
                                        badgeColorSecondary: null !== (s = null == t ? void 0 : t.badgeColorSecondary) && void 0 !== s ? s : j[0].secondary
                                    });
                                } else c.Z.updateGuildProfile(e.id, { tag: null });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: b.memberApplicationsInfo,
                    children: f.NW.format(h.Z.WUACVF, {
                        onClick: () => {}
                    })
                }),
                N
                    ? (0, r.jsx)(a.nuw, {
                          children: (0, r.jsx)('div', {
                              className: b.disabledForm,
                              children: v
                          })
                      })
                    : v
            ]
        });
    };
