n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(493544),
    u = n(607070),
    m = n(714939),
    h = n(981631),
    g = n(388032),
    x = n(740444);
function p(e) {
    let { color: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: x.roleTag,
        children: [
            (0, i.jsx)(o.RoleCircle, {
                className: x.roleDot,
                color: t
            }),
            (0, i.jsx)('span', {
                className: x.roleText,
                children: n
            })
        ]
    });
}
function f(e) {
    let { guild: t, display: n } = e;
    return (0, i.jsxs)('div', {
        className: a()(x.banner, t.backgroundClass, { [x.bannerOut]: !n }),
        children: [
            (0, i.jsx)('div', {
                className: x.roles,
                children: t.roles.map((e, t) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: x.rolesRow,
                            children: e.map((e) =>
                                (0, i.jsx)(
                                    p,
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
            (0, i.jsx)('div', {
                className: x.profileCard,
                children: (0, i.jsxs)('div', {
                    className: x.avatarContainer,
                    children: [
                        (0, i.jsx)(o.Avatar, {
                            size: o.AvatarSizes.SIZE_56,
                            'aria-hidden': !0,
                            status: h.Skl.ONLINE,
                            src: t.avatar
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'header-primary',
                            variant: 'text-md/bold',
                            className: x.avatarName,
                            children: t.username
                        })
                    ]
                })
            })
        ]
    });
}
function C() {
    let e = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        t = r.useMemo(
            () => [
                {
                    backgroundClass: x.bannerClubs,
                    username: 'Wumpus#0000',
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: g.intl.string(g.t['7oaPPj']),
                                color: '#7e00fc'
                            },
                            {
                                name: g.intl.string(g.t['Z/HN6+']),
                                color: '#faa61a'
                            },
                            {
                                name: g.intl.string(g.t.lvHTg4),
                                color: '#f06ea8'
                            }
                        ],
                        [
                            {
                                name: g.intl.string(g.t['6yECkp']),
                                color: '#45ddc0'
                            },
                            {
                                name: g.intl.string(g.t['5DabCQ']),
                                color: '#00b0f4'
                            },
                            {
                                name: g.intl.string(g.t.bB900d),
                                color: '#ba1616'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: x.bannerGaming,
                    username: 'Graggle#0000',
                    avatar: n(507003),
                    roles: [
                        [
                            {
                                name: g.intl.string(g.t['xz/Vfn']),
                                color: '#4a76e6'
                            },
                            {
                                name: g.intl.string(g.t.Bceru7),
                                color: '#ad87ff'
                            },
                            {
                                name: g.intl.string(g.t.W51slp),
                                color: '#6defcf'
                            }
                        ],
                        [
                            {
                                name: g.intl.string(g.t.y9gTiY),
                                color: '#ff73fa'
                            },
                            {
                                name: g.intl.string(g.t.HslvdX),
                                color: '#3ba55c'
                            },
                            {
                                name: g.intl.string(g.t.ipL1AA),
                                color: '#ff1b66'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: x.bannerHobbies,
                    username: 'Mallow#0000',
                    avatar: n(552557),
                    roles: [
                        [
                            {
                                name: g.intl.string(g.t.pAFEbm),
                                color: '#20d6b8'
                            },
                            {
                                name: g.intl.string(g.t['p/HZEB']),
                                color: '#236136'
                            },
                            {
                                name: g.intl.string(g.t['9Qp/JS']),
                                color: '#ff9a15'
                            }
                        ],
                        [
                            {
                                name: g.intl.string(g.t.craF5e),
                                color: '#ff78b9'
                            },
                            {
                                name: g.intl.string(g.t.L1TvXF),
                                color: '#00b0f4'
                            },
                            {
                                name: g.intl.string(g.t.lqKz9P),
                                color: '#6f52e4'
                            }
                        ]
                    ]
                }
            ],
            []
        ),
        [l, a] = r.useState(0);
    return (
        r.useEffect(() => {
            if (e) return;
            let n = setTimeout(() => a((l + 1) % t.length), 6332);
            return () => clearTimeout(n);
        }, [l]),
        (0, i.jsx)('div', {
            className: x.bannerContainer,
            'aria-hidden': !0,
            children: t.map((e, t) =>
                (0, i.jsx)(
                    f,
                    {
                        guild: e,
                        display: t === l
                    },
                    t
                )
            )
        })
    );
}
function v(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [a, s] = r.useState(!1),
        u = async () => {
            s(!0), await c.Z.createRole(t.id), s(!1);
        },
        h = r.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, i.jsx)(d.NM, {
        children: (0, i.jsxs)(o.FormSection, {
            className: x.section,
            title: g.intl.string(g.t.LPJmLy),
            tag: o.FormTitleTags.H2,
            children: [
                (0, i.jsxs)('div', {
                    className: x.container,
                    children: [
                        (0, i.jsx)(C, {}),
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-xl/semibold',
                            children: g.intl.string(g.t.ALlnbm)
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: x.introBody,
                            children: g.intl.string(g.t['1ydhVl'])
                        }),
                        (0, i.jsx)(o.Button, {
                            className: x.button,
                            size: o.Button.Sizes.MEDIUM,
                            onClick: u,
                            submitting: a,
                            children: g.intl.string(g.t.JZZjQE)
                        })
                    ]
                }),
                (0, i.jsx)(o.FormDivider, { className: x.divider }),
                (0, i.jsx)(m.Z, {
                    role: n,
                    onClick: h
                })
            ]
        })
    });
}
