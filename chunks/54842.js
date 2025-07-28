(n.d(t, { Z: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(142497),
    u = n(338327),
    m = n(496675),
    g = n(63063),
    p = n(981631),
    h = n(190378),
    f = n(388032),
    x = n(239721),
    b = n(438825),
    j = n(236140),
    v = n(37069),
    _ = n(518513),
    O = n(40271),
    y = n(348986),
    C = n(930065),
    N = n(345669);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let E = () => [
        {
            icon: c.IeX,
            color: o.Z.unsafe_rawColors.GREEN_360.css,
            header: f.intl.string(f.t.oVQF29),
            body: f.intl.format(f.t.A6G7am, {
                featureHook: (e, t) =>
                    (0, r.jsx)(
                        'strong',
                        {
                            className: x.featuredText,
                            children: e
                        },
                        t
                    )
            })
        },
        {
            icon: c.IeX,
            color: o.Z.unsafe_rawColors.PARTNER.css,
            header: f.intl.string(f.t['0rJl9/']),
            body: f.intl.format(f.t.XsCNk5, {
                infoHook: () =>
                    (0, r.jsx)(c.ua7, {
                        text: f.intl.string(f.t.kPJlTk),
                        'aria-label': f.intl.string(f.t.kPJlTk),
                        children: (e) =>
                            (0, r.jsx)(
                                c.d3s,
                                I(
                                    {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: x.infoIcon
                                    },
                                    e
                                )
                            )
                    }),
                featureHook: (e, t) =>
                    (0, r.jsx)(
                        'strong',
                        {
                            className: x.featuredText,
                            children: e
                        },
                        t
                    )
            })
        },
        {
            icon: c.d3s,
            color: o.Z.unsafe_rawColors.RED_360.css,
            header: f.intl.string(f.t.W2kLJC),
            body: f.intl.string(f.t.hyNkHx)
        }
    ],
    S = [
        {
            iconSrc: y,
            name: 'Pokemon GO Paris',
            position: [-230, -100]
        },
        {
            iconSrc: C,
            name: 'Python',
            position: [-180, -100],
            faded: !0,
            rightAlign: !0
        },
        {
            iconSrc: _,
            name: 'Learn Latin',
            position: [-280, -30],
            faded: !0
        },
        {
            iconSrc: O,
            name: 'r/leagueoflegends',
            position: [-320, -30],
            rightAlign: !0
        },
        {
            iconSrc: N,
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
    T = (e) => {
        let { icon: t, color: n, size: i = 24, header: l, body: a } = e;
        return (0, r.jsxs)('div', {
            className: x.featureCard,
            children: [
                (0, r.jsx)('div', {
                    className: x.featureIcon,
                    children: (0, r.jsx)(t, {
                        color: null != n ? n : 'currentColor',
                        width: i,
                        height: i,
                        size: 'custom'
                    })
                }),
                (0, r.jsx)(c.X6q, {
                    variant: 'heading-md/semibold',
                    className: x.featureHeader,
                    children: l
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: a
                })
            ]
        });
    },
    P = (e) => {
        let { iconSrc: t, name: n, position: i, faded: l, rightAlign: s, imageCoordinates: o } = e,
            d = {
                [s ? 'right' : 'left']: o[0] + i[0],
                top: o[1] + i[1]
            };
        return (0, r.jsxs)('div', {
            className: a()(x.guildDetails, { [x.faded]: l }),
            style: d,
            children: [
                (0, r.jsx)('div', {
                    className: x.guildIcon,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t,
                        width: 24,
                        height: 24
                    })
                }),
                (0, r.jsx)(c.X6q, {
                    variant: 'heading-deprecated-12/semibold',
                    children: n
                })
            ]
        });
    },
    w = (e) => {
        let { guild: t } = e,
            [n, l] = i.useState(0),
            [a, o] = i.useState(0),
            [v, _] = i.useState(),
            O = (0, s.e7)([m.Z], () => m.Z.can(p.Plq.ADMINISTRATOR, t)),
            y = null == v ? void 0 : v.offsetWidth,
            C = null == v ? void 0 : v.offsetHeight;
        (i.useEffect(() => {
            (null != y && l(y / 2), null != C && o(C / 2));
        }, [y, C, l, o]),
            i.useEffect(() => {
                (0, d.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []));
        let N = () => {
            u.Z.open();
        };
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsxs)('div', {
                    className: x.banner,
                    ref: (e) => _(e),
                    children: [
                        S.map((e) => {
                            var t, i;
                            return (0, r.jsx)(
                                P,
                                ((t = I({}, e)),
                                (i = i =
                                    {
                                        imageCoordinates: [n, a]
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                t),
                                e.name
                            );
                        }),
                        (0, r.jsx)('img', {
                            alt: '',
                            src: b,
                            className: x.image,
                            width: 256
                        }),
                        (0, r.jsx)('img', {
                            alt: '',
                            src: j,
                            className: x.sparkles
                        })
                    ]
                }),
                (0, r.jsx)(c.X6q, {
                    variant: 'heading-xl/semibold',
                    children: f.intl.string(f.t['M/gBcH'])
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-md/normal',
                    className: x.body,
                    children: f.intl.format(f.t['52EgsL'], { helpdeskArticle: g.Z.getArticleURL(p.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) })
                }),
                (0, r.jsx)(c.ua7, {
                    text: O ? null : f.intl.string(f.t['pjG+T0']),
                    'aria-label': O ? void 0 : f.intl.string(f.t['pjG+T0']),
                    children: (e) =>
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: x.button,
                            children: (0, r.jsx)(
                                c.zxk,
                                I(
                                    {
                                        variant: 'primary',
                                        text: f.intl.string(f.t.LhlgY2),
                                        onClick: N,
                                        disabled: !O
                                    },
                                    e
                                )
                            )
                        })
                }),
                (0, r.jsx)('hr', { className: x.separator }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: f.intl.string(f.t.OzLWLC)
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: x.body,
                    variant: 'text-sm/normal',
                    children: f.intl.format(f.t.rjhrqK, { helpdeskArticle: g.Z.getArticleURL(p.BhN.GUILD_COMMUNITY_FEATURE) })
                }),
                (0, r.jsx)('div', {
                    className: x.features,
                    children: E().map((e, t) => (0, r.jsx)(T, I({}, e), t))
                })
            ]
        });
    };
