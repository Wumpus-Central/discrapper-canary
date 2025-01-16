n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(749210),
    c = n(493544),
    d = n(607070),
    u = n(714939),
    m = n(981631),
    h = n(388032),
    g = n(740444);
function x(e) {
    let { color: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: g.roleTag,
        children: [
            (0, i.jsx)(a.RoleCircle, {
                className: g.roleDot,
                color: t
            }),
            (0, i.jsx)('span', {
                className: g.roleText,
                children: n
            })
        ]
    });
}
function p(e) {
    let { guild: t, display: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(g.banner, t.backgroundClass, { [g.bannerOut]: !n }),
        children: [
            (0, i.jsx)('div', {
                className: g.roles,
                children: t.roles.map((e, t) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: g.rolesRow,
                            children: e.map((e) =>
                                (0, i.jsx)(
                                    x,
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
                className: g.profileCard,
                children: (0, i.jsxs)('div', {
                    className: g.avatarContainer,
                    children: [
                        (0, i.jsx)(a.Avatar, {
                            size: a.AvatarSizes.SIZE_56,
                            'aria-hidden': !0,
                            status: m.Skl.ONLINE,
                            src: t.avatar
                        }),
                        (0, i.jsx)(a.Text, {
                            color: 'header-primary',
                            variant: 'text-md/bold',
                            className: g.avatarName,
                            children: t.username
                        })
                    ]
                })
            })
        ]
    });
}
function f() {
    let e = r.useMemo(
            () => [
                {
                    backgroundClass: g.bannerClubs,
                    username: 'Wumpus#0000',
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: h.intl.string(h.t['7oaPPj']),
                                color: '#7e00fc'
                            },
                            {
                                name: h.intl.string(h.t['Z/HN6+']),
                                color: '#faa61a'
                            },
                            {
                                name: h.intl.string(h.t.lvHTg4),
                                color: '#f06ea8'
                            }
                        ],
                        [
                            {
                                name: h.intl.string(h.t['6yECkp']),
                                color: '#45ddc0'
                            },
                            {
                                name: h.intl.string(h.t['5DabCQ']),
                                color: '#00b0f4'
                            },
                            {
                                name: h.intl.string(h.t.bB900d),
                                color: '#ba1616'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: g.bannerGaming,
                    username: 'Graggle#0000',
                    avatar: n(507003),
                    roles: [
                        [
                            {
                                name: h.intl.string(h.t['xz/Vfn']),
                                color: '#4a76e6'
                            },
                            {
                                name: h.intl.string(h.t.Bceru7),
                                color: '#ad87ff'
                            },
                            {
                                name: h.intl.string(h.t.W51slp),
                                color: '#6defcf'
                            }
                        ],
                        [
                            {
                                name: h.intl.string(h.t.y9gTiY),
                                color: '#ff73fa'
                            },
                            {
                                name: h.intl.string(h.t.HslvdX),
                                color: '#3ba55c'
                            },
                            {
                                name: h.intl.string(h.t.ipL1AA),
                                color: '#ff1b66'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: g.bannerHobbies,
                    username: 'Mallow#0000',
                    avatar: n(552557),
                    roles: [
                        [
                            {
                                name: h.intl.string(h.t.pAFEbm),
                                color: '#20d6b8'
                            },
                            {
                                name: h.intl.string(h.t['p/HZEB']),
                                color: '#236136'
                            },
                            {
                                name: h.intl.string(h.t['9Qp/JS']),
                                color: '#ff9a15'
                            }
                        ],
                        [
                            {
                                name: h.intl.string(h.t.craF5e),
                                color: '#ff78b9'
                            },
                            {
                                name: h.intl.string(h.t.L1TvXF),
                                color: '#00b0f4'
                            },
                            {
                                name: h.intl.string(h.t.lqKz9P),
                                color: '#6f52e4'
                            }
                        ]
                    ]
                }
            ],
            []
        ),
        [t, l] = r.useState(0),
        s = r.useRef(e);
    return (
        r.useEffect(() => {
            s.current = e;
        }),
        r.useEffect(() => {
            if (d.Z.useReducedMotion) return;
            let e = setTimeout(() => l((t + 1) % s.current.length), 6332);
            return () => clearTimeout(e);
        }, [t]),
        (0, i.jsx)('div', {
            className: g.bannerContainer,
            'aria-hidden': !0,
            children: e.map((e, n) =>
                (0, i.jsx)(
                    p,
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
function C(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [s, d] = r.useState(!1),
        m = async () => {
            d(!0), await o.Z.createRole(t.id), d(!1);
        },
        x = r.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, i.jsx)(c.NM, {
        children: (0, i.jsxs)(a.FormSection, {
            className: g.section,
            title: h.intl.string(h.t.LPJmLy),
            tag: a.FormTitleTags.H2,
            children: [
                (0, i.jsxs)('div', {
                    className: g.container,
                    children: [
                        (0, i.jsx)(f, {}),
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-xl/semibold',
                            children: h.intl.string(h.t.ALlnbm)
                        }),
                        (0, i.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: g.introBody,
                            children: h.intl.string(h.t['1ydhVl'])
                        }),
                        (0, i.jsx)(a.Button, {
                            className: g.button,
                            size: a.Button.Sizes.MEDIUM,
                            onClick: m,
                            submitting: s,
                            children: h.intl.string(h.t.JZZjQE)
                        })
                    ]
                }),
                (0, i.jsx)(a.FormDivider, { className: g.divider }),
                (0, i.jsx)(u.Z, {
                    role: n,
                    onClick: x
                })
            ]
        })
    });
}
