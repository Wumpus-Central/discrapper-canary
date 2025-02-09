n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(142497),
    u = n(338327),
    m = n(496675),
    h = n(63063),
    g = n(981631),
    x = n(190378),
    p = n(388032),
    _ = n(85599),
    C = n(438825),
    f = n(236140),
    v = n(37069),
    N = n(518513),
    j = n(168179),
    I = n(348986),
    E = n(930065),
    b = n(345669);
let T = () => [
        {
            icon: c.IeX,
            color: o.Z.unsafe_rawColors.GREEN_360.css,
            header: p.intl.string(p.t.oVQF29),
            body: p.intl.format(p.t.A6G7am, {
                featureHook: (e, t) =>
                    (0, i.jsx)(
                        'strong',
                        {
                            className: _.featuredText,
                            children: e
                        },
                        t
                    )
            })
        },
        {
            icon: c.IeX,
            color: o.Z.unsafe_rawColors.PARTNER.css,
            header: p.intl.string(p.t['0rJl9/']),
            body: p.intl.format(p.t.XsCNk5, {
                infoHook: () =>
                    (0, i.jsx)(c.ua7, {
                        text: p.intl.string(p.t.kPJlTk),
                        'aria-label': p.intl.string(p.t.kPJlTk),
                        children: (e) =>
                            (0, i.jsx)(c.d3s, {
                                size: 'xs',
                                color: 'currentColor',
                                className: _.infoIcon,
                                ...e
                            })
                    }),
                featureHook: (e, t) =>
                    (0, i.jsx)(
                        'strong',
                        {
                            className: _.featuredText,
                            children: e
                        },
                        t
                    )
            })
        },
        {
            icon: c.d3s,
            color: o.Z.unsafe_rawColors.RED_360.css,
            header: p.intl.string(p.t.W2kLJC),
            body: p.intl.string(p.t.hyNkHx)
        }
    ],
    S = [
        {
            iconSrc: I,
            name: 'Pokemon GO Paris',
            position: [-230, -100]
        },
        {
            iconSrc: E,
            name: 'Python',
            position: [-180, -100],
            faded: !0,
            rightAlign: !0
        },
        {
            iconSrc: N,
            name: 'Learn Latin',
            position: [-280, -30],
            faded: !0
        },
        {
            iconSrc: j,
            name: 'r/leagueoflegends',
            position: [-320, -30],
            rightAlign: !0
        },
        {
            iconSrc: b,
            name: 'Sneaker Fans',
            position: [-250, 40]
        },
        {
            iconSrc: v,
            name: 'Hogwarts School',
            position: [-270, 40],
            faded: !0,
            rightAlign: !0
        }
    ],
    R = (e) => {
        let { icon: t, color: n, size: r = 24, header: l, body: s } = e;
        return (0, i.jsxs)('div', {
            className: _.featureCard,
            children: [
                (0, i.jsx)('div', {
                    className: _.featureIcon,
                    children: (0, i.jsx)(t, {
                        color: null != n ? n : 'currentColor',
                        width: r,
                        height: r,
                        size: 'custom'
                    })
                }),
                (0, i.jsx)(c.X6q, {
                    variant: 'heading-md/semibold',
                    className: _.featureHeader,
                    children: l
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: s
                })
            ]
        });
    },
    Z = (e) => {
        let { iconSrc: t, name: n, position: r, faded: l, rightAlign: a, imageCoordinates: o } = e,
            d = {
                [a ? 'right' : 'left']: o[0] + r[0],
                top: o[1] + r[1]
            };
        return (0, i.jsxs)('div', {
            className: s()(_.guildDetails, { [_.faded]: l }),
            style: d,
            children: [
                (0, i.jsx)('div', {
                    className: _.guildIcon,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t,
                        width: 24,
                        height: 24
                    })
                }),
                (0, i.jsx)(c.X6q, {
                    variant: 'heading-deprecated-12/semibold',
                    children: n
                })
            ]
        });
    },
    y = (e) => {
        let { guild: t } = e,
            [n, l] = r.useState(0),
            [s, o] = r.useState(0),
            [v, N] = r.useState(),
            j = (0, a.e7)([m.Z], () => m.Z.can(g.Plq.ADMINISTRATOR, t)),
            I = null == v ? void 0 : v.offsetWidth,
            E = null == v ? void 0 : v.offsetHeight;
        r.useEffect(() => {
            null != I && l(I / 2), null != E && o(E / 2);
        }, [I, E, l, o]),
            r.useEffect(() => {
                (0, d.Kw)(x.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []);
        let b = () => {
            u.Z.open();
        };
        return (0, i.jsxs)('div', {
            className: _.container,
            children: [
                (0, i.jsxs)('div', {
                    className: _.banner,
                    ref: (e) => N(e),
                    children: [
                        S.map((e) =>
                            (0, i.jsx)(
                                Z,
                                {
                                    ...e,
                                    imageCoordinates: [n, s]
                                },
                                e.name
                            )
                        ),
                        (0, i.jsx)('img', {
                            alt: '',
                            src: C,
                            className: _.image,
                            width: 256
                        }),
                        (0, i.jsx)('img', {
                            alt: '',
                            src: f,
                            className: _.sparkles
                        })
                    ]
                }),
                (0, i.jsx)(c.X6q, {
                    variant: 'heading-xl/semibold',
                    children: p.intl.string(p.t['M/gBcH'])
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-md/normal',
                    className: _.body,
                    children: p.intl.format(p.t['52EgsL'], { helpdeskArticle: h.Z.getArticleURL(g.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) })
                }),
                (0, i.jsx)(c.ua7, {
                    text: j ? null : p.intl.string(p.t['pjG+T0']),
                    'aria-label': j ? void 0 : p.intl.string(p.t['pjG+T0']),
                    children: (e) =>
                        (0, i.jsx)(c.zxk, {
                            onClick: b,
                            className: _.button,
                            disabled: !j,
                            ...e,
                            children: p.intl.string(p.t.LhlgY2)
                        })
                }),
                (0, i.jsx)('hr', { className: _.separator }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: p.intl.string(p.t.OzLWLC)
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: _.body,
                    variant: 'text-sm/normal',
                    children: p.intl.format(p.t.rjhrqK, { helpdeskArticle: h.Z.getArticleURL(g.BhN.GUILD_COMMUNITY_FEATURE) })
                }),
                (0, i.jsx)('div', {
                    className: _.features,
                    children: T().map((e, t) => (0, i.jsx)(R, { ...e }, t))
                })
            ]
        });
    };
