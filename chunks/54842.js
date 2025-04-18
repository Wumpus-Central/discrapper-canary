n.d(t, { Z: () => R }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(142497),
    u = n(338327),
    m = n(496675),
    g = n(63063),
    p = n(981631),
    h = n(190378),
    f = n(388032),
    x = n(662561),
    b = n(438825),
    j = n(236140),
    N = n(37069),
    _ = n(518513),
    v = n(168179),
    O = n(348986),
    C = n(930065),
    y = n(345669);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = () => [
        {
            icon: c.IeX,
            color: o.Z.unsafe_rawColors.GREEN_360.css,
            header: f.NW.string(f.t.oVQF29),
            body: f.NW.format(f.t.A6G7am, {
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
            header: f.NW.string(f.t['0rJl9/']),
            body: f.NW.format(f.t.XsCNk5, {
                infoHook: () =>
                    (0, r.jsx)(c.ua7, {
                        text: f.NW.string(f.t.kPJlTk),
                        'aria-label': f.NW.string(f.t.kPJlTk),
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
            header: f.NW.string(f.t.W2kLJC),
            body: f.NW.string(f.t.hyNkHx)
        }
    ],
    T = [
        {
            iconSrc: O,
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
            iconSrc: v,
            name: 'r/leagueoflegends',
            position: [-320, -30],
            rightAlign: !0
        },
        {
            iconSrc: y,
            name: 'Sneaker Fans',
            position: [-250, 40]
        },
        {
            iconSrc: N,
            name: 'Hogwarts School',
            position: [-270, 40],
            faded: !0,
            rightAlign: !0
        }
    ],
    P = (e) => {
        let { icon: t, color: n, size: i = 24, header: s, body: l } = e;
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
                    children: s
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: l
                })
            ]
        });
    },
    w = (e) => {
        let { iconSrc: t, name: n, position: i, faded: s, rightAlign: a, imageCoordinates: o } = e,
            d = {
                [a ? 'right' : 'left']: o[0] + i[0],
                top: o[1] + i[1]
            };
        return (0, r.jsxs)('div', {
            className: l()(x.guildDetails, { [x.faded]: s }),
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
    R = (e) => {
        let { guild: t } = e,
            [n, s] = i.useState(0),
            [l, o] = i.useState(0),
            [N, _] = i.useState(),
            v = (0, a.e7)([m.Z], () => m.Z.can(p.Plq.ADMINISTRATOR, t)),
            O = null == N ? void 0 : N.offsetWidth,
            C = null == N ? void 0 : N.offsetHeight;
        i.useEffect(() => {
            null != O && s(O / 2), null != C && o(C / 2);
        }, [O, C, s, o]),
            i.useEffect(() => {
                (0, d.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []);
        let y = () => {
            u.Z.open();
        };
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsxs)('div', {
                    className: x.banner,
                    ref: (e) => _(e),
                    children: [
                        T.map((e) =>
                            (0, r.jsx)(
                                w,
                                E(I({}, e), {
                                    imageCoordinates: [n, l]
                                }),
                                e.name
                            )
                        ),
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
                    children: f.NW.string(f.t['M/gBcH'])
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-md/normal',
                    className: x.body,
                    children: f.NW.format(f.t['52EgsL'], { helpdeskArticle: g.Z.getArticleURL(p.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) })
                }),
                (0, r.jsx)(c.ua7, {
                    text: v ? null : f.NW.string(f.t['pjG+T0']),
                    'aria-label': v ? void 0 : f.NW.string(f.t['pjG+T0']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.zxk,
                            E(
                                I(
                                    {
                                        onClick: y,
                                        className: x.button,
                                        disabled: !v
                                    },
                                    e
                                ),
                                { children: f.NW.string(f.t.LhlgY2) }
                            )
                        )
                }),
                (0, r.jsx)('hr', { className: x.separator }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: f.NW.string(f.t.OzLWLC)
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: x.body,
                    variant: 'text-sm/normal',
                    children: f.NW.format(f.t.rjhrqK, { helpdeskArticle: g.Z.getArticleURL(p.BhN.GUILD_COMMUNITY_FEATURE) })
                }),
                (0, r.jsx)('div', {
                    className: x.features,
                    children: S().map((e, t) => (0, r.jsx)(P, I({}, e), t))
                })
            ]
        });
    };
