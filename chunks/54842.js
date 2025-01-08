n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(142497),
    u = n(338327),
    m = n(496675),
    h = n(63063),
    g = n(981631),
    x = n(190378),
    p = n(388032),
    f = n(905697),
    C = n(438825),
    v = n(236140),
    _ = n(37069),
    N = n(518513),
    I = n(168179),
    T = n(348986),
    j = n(930065),
    b = n(345669);
let S = () => [
        {
            icon: c.AnalyticsIcon,
            color: o.Z.unsafe_rawColors.GREEN_360.css,
            header: p.intl.string(p.t.oVQF29),
            body: p.intl.format(p.t.A6G7am, {
                featureHook: (e, t) =>
                    (0, i.jsx)(
                        'strong',
                        {
                            className: f.featuredText,
                            children: e
                        },
                        t
                    )
            })
        },
        {
            icon: c.AnalyticsIcon,
            color: o.Z.unsafe_rawColors.PARTNER.css,
            header: p.intl.string(p.t['0rJl9/']),
            body: p.intl.format(p.t.XsCNk5, {
                infoHook: () =>
                    (0, i.jsx)(c.Tooltip, {
                        text: p.intl.string(p.t.kPJlTk),
                        'aria-label': p.intl.string(p.t.kPJlTk),
                        children: (e) =>
                            (0, i.jsx)(c.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: f.infoIcon,
                                ...e
                            })
                    }),
                featureHook: (e, t) =>
                    (0, i.jsx)(
                        'strong',
                        {
                            className: f.featuredText,
                            children: e
                        },
                        t
                    )
            })
        },
        {
            icon: c.CircleInformationIcon,
            color: o.Z.unsafe_rawColors.RED_360.css,
            header: p.intl.string(p.t.W2kLJC),
            body: p.intl.string(p.t.hyNkHx)
        }
    ],
    E = [
        {
            iconSrc: T,
            name: 'Pokemon GO Paris',
            position: [-230, -100]
        },
        {
            iconSrc: j,
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
            iconSrc: I,
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
            iconSrc: _,
            name: 'Hogwarts School',
            position: [-270, 40],
            faded: !0,
            rightAlign: !0
        }
    ],
    R = (e) => {
        let { icon: t, color: n, size: r = 24, header: l, body: a } = e;
        return (0, i.jsxs)('div', {
            className: f.featureCard,
            children: [
                (0, i.jsx)('div', {
                    className: f.featureIcon,
                    children: (0, i.jsx)(t, {
                        color: null != n ? n : 'currentColor',
                        width: r,
                        height: r,
                        size: 'custom'
                    })
                }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-md/semibold',
                    className: f.featureHeader,
                    children: l
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: a
                })
            ]
        });
    },
    y = (e) => {
        let { iconSrc: t, name: n, position: r, faded: l, rightAlign: s, imageCoordinates: o } = e,
            d = {
                [s ? 'right' : 'left']: o[0] + r[0],
                top: o[1] + r[1]
            };
        return (0, i.jsxs)('div', {
            className: a()(f.guildDetails, { [f.faded]: l }),
            style: d,
            children: [
                (0, i.jsx)('div', {
                    className: f.guildIcon,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t,
                        width: 24,
                        height: 24
                    })
                }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    children: n
                })
            ]
        });
    };
t.Z = (e) => {
    let { guild: t } = e,
        [n, l] = r.useState(0),
        [a, o] = r.useState(0),
        [_, N] = r.useState(),
        I = (0, s.e7)([m.Z], () => m.Z.can(g.Plq.ADMINISTRATOR, t)),
        T = null == _ ? void 0 : _.offsetWidth,
        j = null == _ ? void 0 : _.offsetHeight;
    r.useEffect(() => {
        null != T && l(T / 2), null != j && o(j / 2);
    }, [T, j, l, o]),
        r.useEffect(() => {
            (0, d.Kw)(x.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
        }, []);
    let b = () => {
        u.Z.open();
    };
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsxs)('div', {
                className: f.banner,
                ref: (e) => N(e),
                children: [
                    E.map((e) =>
                        (0, i.jsx)(
                            y,
                            {
                                ...e,
                                imageCoordinates: [n, a]
                            },
                            e.name
                        )
                    ),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: C,
                        className: f.image,
                        width: 256
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: v,
                        className: f.sparkles
                    })
                ]
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: p.intl.string(p.t['M/gBcH'])
            }),
            (0, i.jsx)(c.Text, {
                color: 'header-secondary',
                variant: 'text-md/normal',
                className: f.body,
                children: p.intl.format(p.t['52EgsL'], { helpdeskArticle: h.Z.getArticleURL(g.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) })
            }),
            (0, i.jsx)(c.Tooltip, {
                text: I ? null : p.intl.string(p.t['pjG+T0']),
                'aria-label': I ? void 0 : p.intl.string(p.t['pjG+T0']),
                children: (e) =>
                    (0, i.jsx)(c.Button, {
                        onClick: b,
                        className: f.button,
                        disabled: !I,
                        ...e,
                        children: p.intl.string(p.t.LhlgY2)
                    })
            }),
            (0, i.jsx)('hr', { className: f.separator }),
            (0, i.jsx)(c.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: p.intl.string(p.t.OzLWLC)
            }),
            (0, i.jsx)(c.Text, {
                color: 'header-secondary',
                className: f.body,
                variant: 'text-sm/normal',
                children: p.intl.format(p.t.rjhrqK, { helpdeskArticle: h.Z.getArticleURL(g.BhN.GUILD_COMMUNITY_FEATURE) })
            }),
            (0, i.jsx)('div', {
                className: f.features,
                children: S().map((e, t) => (0, i.jsx)(R, { ...e }, t))
            })
        ]
    });
};
