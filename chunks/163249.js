n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(749210),
    c = n(493544),
    d = n(607070),
    u = n(714939),
    m = n(981631),
    g = n(388032),
    p = n(406116);
function h(e) {
    let { color: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: p.roleTag,
        children: [
            (0, r.jsx)(l.xko, {
                className: p.roleDot,
                color: t
            }),
            (0, r.jsx)('span', {
                className: p.roleText,
                children: n
            })
        ]
    });
}
function f(e) {
    let { guild: t, display: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(p.banner, t.backgroundClass, { [p.bannerOut]: !n }),
        children: [
            (0, r.jsx)('div', {
                className: p.roles,
                children: t.roles.map((e, t) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: p.rolesRow,
                            children: e.map((e) =>
                                (0, r.jsx)(
                                    h,
                                    {
                                        color: e.color,
                                        children: e.name
                                    },
                                    e.name
                                )
                            )
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)('div', {
                className: p.profileCard,
                children: (0, r.jsxs)('div', {
                    className: p.avatarContainer,
                    children: [
                        (0, r.jsx)(l.qEK, {
                            size: l.EFr.SIZE_56,
                            'aria-hidden': !0,
                            status: m.Skl.ONLINE,
                            src: t.avatar
                        }),
                        (0, r.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-md/bold',
                            className: p.avatarName,
                            children: t.username
                        })
                    ]
                })
            })
        ]
    });
}
function b() {
    let e = i.useMemo(
            () => [
                {
                    backgroundClass: p.bannerClubs,
                    username: 'Wumpus#0000',
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: g.NW.string(g.t['7oaPPj']),
                                color: '#7e00fc'
                            },
                            {
                                name: g.NW.string(g.t['Z/HN6+']),
                                color: '#faa61a'
                            },
                            {
                                name: g.NW.string(g.t.lvHTg4),
                                color: '#f06ea8'
                            }
                        ],
                        [
                            {
                                name: g.NW.string(g.t['6yECkp']),
                                color: '#45ddc0'
                            },
                            {
                                name: g.NW.string(g.t['5DabCQ']),
                                color: '#00b0f4'
                            },
                            {
                                name: g.NW.string(g.t.bB900d),
                                color: '#ba1616'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: p.bannerGaming,
                    username: 'Graggle#0000',
                    avatar: n(507003),
                    roles: [
                        [
                            {
                                name: g.NW.string(g.t['xz/Vfn']),
                                color: '#4a76e6'
                            },
                            {
                                name: g.NW.string(g.t.Bceru7),
                                color: '#ad87ff'
                            },
                            {
                                name: g.NW.string(g.t.W51slp),
                                color: '#6defcf'
                            }
                        ],
                        [
                            {
                                name: g.NW.string(g.t.y9gTiY),
                                color: '#ff73fa'
                            },
                            {
                                name: g.NW.string(g.t.HslvdX),
                                color: '#3ba55c'
                            },
                            {
                                name: g.NW.string(g.t.ipL1AA),
                                color: '#ff1b66'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: p.bannerHobbies,
                    username: 'Mallow#0000',
                    avatar: n(552557),
                    roles: [
                        [
                            {
                                name: g.NW.string(g.t.pAFEbm),
                                color: '#20d6b8'
                            },
                            {
                                name: g.NW.string(g.t['p/HZEB']),
                                color: '#236136'
                            },
                            {
                                name: g.NW.string(g.t['9Qp/JS']),
                                color: '#ff9a15'
                            }
                        ],
                        [
                            {
                                name: g.NW.string(g.t.craF5e),
                                color: '#ff78b9'
                            },
                            {
                                name: g.NW.string(g.t.L1TvXF),
                                color: '#00b0f4'
                            },
                            {
                                name: g.NW.string(g.t.lqKz9P),
                                color: '#6f52e4'
                            }
                        ]
                    ]
                }
            ],
            []
        ),
        [t, s] = i.useState(0),
        a = i.useRef(e);
    return (
        i.useEffect(() => {
            a.current = e;
        }),
        i.useEffect(() => {
            if (d.Z.useReducedMotion) return;
            let e = setTimeout(() => s((t + 1) % a.current.length), 6332);
            return () => clearTimeout(e);
        }, [t]),
        (0, r.jsx)('div', {
            className: p.bannerContainer,
            'aria-hidden': !0,
            children: e.map((e, n) =>
                (0, r.jsx)(
                    f,
                    {
                        guild: e,
                        display: n === t
                    },
                    n
                )
            )
        })
    );
}
function x(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: s } = e,
        [a, d] = i.useState(!1),
        m = async () => {
            d(!0), await o.Z.createRole(t.id), d(!1);
        },
        h = i.useCallback(() => {
            s(n.id);
        }, [s, n.id]);
    return (0, r.jsx)(c.NM, {
        children: (0, r.jsxs)(l.hjN, {
            className: p.section,
            title: g.NW.string(g.t.LPJmLy),
            tag: l.RB0.H2,
            children: [
                (0, r.jsxs)('div', {
                    className: p.container,
                    children: [
                        (0, r.jsx)(b, {}),
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            children: g.NW.string(g.t.ALlnbm)
                        }),
                        (0, r.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: p.introBody,
                            children: g.NW.string(g.t['1ydhVl'])
                        }),
                        (0, r.jsx)(l.zxk, {
                            className: p.button,
                            size: l.zxk.Sizes.MEDIUM,
                            onClick: m,
                            submitting: a,
                            children: g.NW.string(g.t.JZZjQE)
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: p.divider }),
                (0, r.jsx)(u.Z, {
                    role: n,
                    onClick: h
                })
            ]
        })
    });
}
