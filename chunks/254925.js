n.d(t, {
    QV: () => v,
    ZP: () => N,
    go: () => x
}),
    n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(314852),
    o = n(65361),
    A = n(434404),
    c = n(999382),
    d = n(835887),
    u = n(388661),
    g = n(500230),
    f = n(742409),
    m = n(981631),
    p = n(116175),
    h = n(976260),
    C = n(388032),
    b = n(935921);
let v = [p.ZD.LEAF, p.ZD.SWORD, p.ZD.HEART, p.ZD.FIRE, p.ZD.WATER_DROP, p.ZD.SKULL, p.ZD.MOON, p.ZD.LIGHTNING, p.ZD.COMPASS, p.ZD.TOADSTOOL],
    x = [
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
        var e, t, n, p;
        (0, C.j1)(h.M);
        let N = (0, s.e7)([c.Z], () => c.Z.getGuild()),
            j = (0, s.e7)([c.Z], () => c.Z.getGuildProfile()),
            { fetchGuildProfile: E, fetchStatus: I } = (0, o.u)(null == N ? void 0 : N.id);
        if (
            (i.useEffect(() => {
                I === l.a.NOT_FETCHED && E();
            }, [E, I]),
            I !== l.a.FETCHED)
        )
            return (0, r.jsx)('div', {
                className: b.spinnerContainer,
                children: (0, r.jsx)(a.$jN, {})
            });
        if (null == N || null == j) return null;
        let O = (null == j ? void 0 : j.tag) == null,
            y = null !== (e = j.badge) && void 0 !== e ? e : v[0],
            w = null !== (t = j.badgeColorPrimary) && void 0 !== t ? t : x[0].primary,
            P = null !== (n = j.badgeColorSecondary) && void 0 !== n ? n : x[0].secondary,
            B = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.Z, {
                        className: b.section,
                        guildId: N.id,
                        isDisabled: O,
                        tag: null !== (p = j.tag) && void 0 !== p ? p : '',
                        badge: y,
                        primaryColor: w,
                        secondaryColor: P
                    }),
                    (0, r.jsx)(d.Z, {
                        className: b.section,
                        guildId: N.id,
                        badge: y
                    }),
                    (0, r.jsx)(g.Z, {
                        className: b.section,
                        guildId: N.id,
                        badge: y,
                        primaryColor: w,
                        secondaryColor: P
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.X6q, {
                    className: b.title,
                    variant: 'heading-lg/semibold',
                    children: C.NW.string(h.Z.mf2OwM)
                }),
                (0, r.jsxs)('div', {
                    className: b.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.leftContent,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: b.description,
                                    children: C.NW.string(h.Z['655Un5'])
                                }),
                                (0, r.jsxs)('div', {
                                    className: b.enableSwitchContainer,
                                    children: [
                                        (0, r.jsx)('label', {
                                            htmlFor: 'enable-server-tag',
                                            children: (0, r.jsx)(a.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: C.NW.string(h.Z['1zams7'])
                                            })
                                        }),
                                        (0, r.jsx)(a.rsf, {
                                            id: 'enable-server-tag',
                                            checked: !O,
                                            onChange: () => {
                                                if (O) {
                                                    var e;
                                                    A.Z.updateGuildProfile(N.id, {
                                                        tag: null !== (e = j.tag) && void 0 !== e ? e : '',
                                                        badge: y,
                                                        badgeColorPrimary: w,
                                                        badgeColorSecondary: P
                                                    });
                                                } else A.Z.updateGuildProfile(N.id, { tag: null });
                                            }
                                        })
                                    ]
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    className: b.memberApplicationsInfo,
                                    children: C.NW.format(h.Z.WUACVF, {
                                        onClick: () => {
                                            A.Z.setSection(m.pNK.ACCESS);
                                        }
                                    })
                                }),
                                O
                                    ? (0, r.jsx)(a.nuw, {
                                          children: (0, r.jsx)('div', {
                                              className: b.disabledForm,
                                              children: B
                                          })
                                      })
                                    : B
                            ]
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(f.Z, {
                                guildId: N.id,
                                tag: j.tag,
                                badge: y,
                                primaryColor: w,
                                secondaryColor: P
                            })
                        })
                    ]
                })
            ]
        });
    };
