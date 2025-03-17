n.d(t, {
    QV: () => j,
    ZP: () => v,
    go: () => N
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
    p = n(981631),
    h = n(116175),
    f = n(502936),
    b = n(388032),
    x = n(935921);
let j = [h.ZD.LEAF, h.ZD.SWORD, h.ZD.HEART, h.ZD.FIRE, h.ZD.WATER_DROP, h.ZD.SKULL, h.ZD.MOON, h.ZD.LIGHTNING, h.ZD.COMPASS, h.ZD.TOADSTOOL],
    N = [
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
    v = function () {
        (0, b.j1)(f.M);
        let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
            t = (0, s.e7)([d.Z], () => d.Z.getGuildProfile()),
            { fetchGuildProfile: n, fetchStatus: h } = (0, o.u)(null == e ? void 0 : e.id);
        if (
            (i.useEffect(() => {
                h === l.a.NOT_FETCHED && n();
            }, [n, h]),
            h !== l.a.FETCHED)
        )
            return (0, r.jsx)('div', {
                className: x.spinnerContainer,
                children: (0, r.jsx)(a.$jN, {})
            });
        if (null == e || null == t) return null;
        let v = (null == t ? void 0 : t.tag) == null,
            _ = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(m.Z, {
                        className: x.section,
                        guildId: e.id,
                        guildProfile: t,
                        isDisabled: v
                    }),
                    (0, r.jsx)(u.Z, {
                        className: x.section,
                        guildId: e.id,
                        guildProfile: t
                    }),
                    (0, r.jsx)(g.Z, {
                        className: x.section,
                        guildId: e.id,
                        guildProfile: t
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: x.leftContent,
            children: [
                (0, r.jsx)(a.X6q, {
                    className: x.title,
                    variant: 'heading-lg/semibold',
                    children: b.NW.string(f.Z.mf2OwM)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: x.description,
                    children: b.NW.string(f.Z['655Un5'])
                }),
                (0, r.jsxs)('div', {
                    className: x.enableSwitchContainer,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: 'enable-server-tag',
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: b.NW.string(f.Z['1zams7'])
                            })
                        }),
                        (0, r.jsx)(a.rsf, {
                            id: 'enable-server-tag',
                            checked: !v,
                            onChange: () => {
                                if (v) {
                                    var n, r, i, s;
                                    c.Z.updateGuildProfile(e.id, {
                                        tag: null !== (n = null == t ? void 0 : t.tag) && void 0 !== n ? n : '',
                                        badge: null !== (r = null == t ? void 0 : t.badge) && void 0 !== r ? r : j[0],
                                        badgeColorPrimary: null !== (i = null == t ? void 0 : t.badgeColorPrimary) && void 0 !== i ? i : N[0].primary,
                                        badgeColorSecondary: null !== (s = null == t ? void 0 : t.badgeColorSecondary) && void 0 !== s ? s : N[0].secondary
                                    });
                                } else c.Z.updateGuildProfile(e.id, { tag: null });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: x.memberApplicationsInfo,
                    children: b.NW.format(f.Z.WUACVF, {
                        onClick: () => {
                            c.Z.setSection(p.pNK.ACCESS);
                        }
                    })
                }),
                v
                    ? (0, r.jsx)(a.nuw, {
                          children: (0, r.jsx)('div', {
                              className: x.disabledForm,
                              children: _
                          })
                      })
                    : _
            ]
        });
    };
