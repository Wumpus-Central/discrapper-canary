n.d(t, { Z: () => R }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    u = n(142497),
    d = n(338327),
    m = n(496675),
    g = n(63063),
    p = n(981631),
    f = n(190378),
    h = n(388032),
    x = n(239721),
    b = n(438825),
    j = n(236140),
    _ = n(37069),
    v = n(518513),
    O = n(168179),
    C = n(348986),
    y = n(930065),
    N = n(345669);
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
            header: h.intl.string(h.t.oVQF29),
            body: h.intl.format(h.t.A6G7am, {
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
            header: h.intl.string(h.t['0rJl9/']),
            body: h.intl.format(h.t.XsCNk5, {
                infoHook: () =>
                    (0, r.jsx)(c.ua7, {
                        text: h.intl.string(h.t.kPJlTk),
                        'aria-label': h.intl.string(h.t.kPJlTk),
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
            header: h.intl.string(h.t.W2kLJC),
            body: h.intl.string(h.t.hyNkHx)
        }
    ],
    T = [
        {
            iconSrc: C,
            name: 'Pokemon GO Paris',
            position: [-230, -100]
        },
        {
            iconSrc: y,
            name: 'Python',
            position: [-180, -100],
            faded: !0,
            rightAlign: !0
        },
        {
            iconSrc: v,
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
            iconSrc: _,
            name: 'Hogwarts School',
            position: [-270, 40],
            faded: !0,
            rightAlign: !0
        }
    ],
    P = (e) => {
        let { icon: t, color: n, size: i = 24, header: l, body: s } = e;
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
                    children: s
                })
            ]
        });
    },
    w = (e) => {
        let { iconSrc: t, name: n, position: i, faded: l, rightAlign: a, imageCoordinates: o } = e,
            u = {
                [a ? 'right' : 'left']: o[0] + i[0],
                top: o[1] + i[1]
            };
        return (0, r.jsxs)('div', {
            className: s()(x.guildDetails, { [x.faded]: l }),
            style: u,
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
            [n, l] = i.useState(0),
            [s, o] = i.useState(0),
            [_, v] = i.useState(),
            O = (0, a.e7)([m.Z], () => m.Z.can(p.Plq.ADMINISTRATOR, t)),
            C = null == _ ? void 0 : _.offsetWidth,
            y = null == _ ? void 0 : _.offsetHeight;
        i.useEffect(() => {
            null != C && l(C / 2), null != y && o(y / 2);
        }, [C, y, l, o]),
            i.useEffect(() => {
                (0, u.Kw)(f.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []);
        let N = () => {
            d.Z.open();
        };
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsxs)('div', {
                    className: x.banner,
                    ref: (e) => v(e),
                    children: [
                        T.map((e) =>
                            (0, r.jsx)(
                                w,
                                E(I({}, e), {
                                    imageCoordinates: [n, s]
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
                    children: h.intl.string(h.t['M/gBcH'])
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-md/normal',
                    className: x.body,
                    children: h.intl.format(h.t['52EgsL'], { helpdeskArticle: g.Z.getArticleURL(p.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) })
                }),
                (0, r.jsx)(c.ua7, {
                    text: O ? null : h.intl.string(h.t['pjG+T0']),
                    'aria-label': O ? void 0 : h.intl.string(h.t['pjG+T0']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.zxk,
                            E(
                                I(
                                    {
                                        onClick: N,
                                        className: x.button,
                                        disabled: !O
                                    },
                                    e
                                ),
                                { children: h.intl.string(h.t.LhlgY2) }
                            )
                        )
                }),
                (0, r.jsx)('hr', { className: x.separator }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: h.intl.string(h.t.OzLWLC)
                }),
                (0, r.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: x.body,
                    variant: 'text-sm/normal',
                    children: h.intl.format(h.t.rjhrqK, { helpdeskArticle: g.Z.getArticleURL(p.BhN.GUILD_COMMUNITY_FEATURE) })
                }),
                (0, r.jsx)('div', {
                    className: x.features,
                    children: S().map((e, t) => (0, r.jsx)(P, I({}, e), t))
                })
            ]
        });
    };
