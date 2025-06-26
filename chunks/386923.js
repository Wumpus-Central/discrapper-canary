n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(695469),
    o = n(442837),
    c = n(481060),
    d = n(918222),
    u = n(404616),
    m = n(434404),
    h = n(690221),
    g = n(496675),
    f = n(63063),
    x = n(981631),
    p = n(130883),
    b = n(388032),
    j = n(767905),
    v = n(683999),
    _ = n(602512),
    C = n(184476);
let y = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    O = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, c.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: y,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    w = (e) =>
        (0, c.Yzy)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 850 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    S = (e) => {
        let { guild: t } = e,
            n = (0, o.e7)([g.Z], () => g.Z.can(x.Plq.MANAGE_GUILD, t));
        return (0, r.jsxs)(c.Kqy, {
            direction: 'horizontal',
            gap: 8,
            children: [
                (0, r.jsxs)(c.Kqy, {
                    direction: 'vertical',
                    gap: 16,
                    children: [
                        (0, r.jsx)(c.Kqy, {
                            direction: 'vertical',
                            gap: 4,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: b.intl.string(p.default.fP8DV1)
                            })
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-lg/semibold',
                                    color: 'header-secondary',
                                    children: b.intl.string(p.default['i7CH/P'])
                                }),
                                (0, r.jsxs)('ol', {
                                    className: l()(j.list, j.orderedList, j.topLevelList),
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children: b.intl.string(p.default['+Izoz8'])
                                            })
                                        }),
                                        (0, r.jsxs)('li', {
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-secondary',
                                                    children: b.intl.string(p.default['iu/RkZ'])
                                                }),
                                                (0, r.jsxs)('ul', {
                                                    className: l()(j.list, j.innerList, j.unorderedList),
                                                    children: [
                                                        (0, r.jsx)('li', {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-md/normal',
                                                                color: 'header-secondary',
                                                                children: b.intl.string(p.default.QogKbG)
                                                            })
                                                        }),
                                                        (0, r.jsx)('li', {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-md/normal',
                                                                color: 'header-secondary',
                                                                children: b.intl.string(p.default.V4orHR)
                                                            })
                                                        }),
                                                        (0, r.jsx)('li', {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-md/normal',
                                                                color: 'header-secondary',
                                                                children: b.intl.string(p.default.VrrQXV)
                                                            })
                                                        }),
                                                        (0, r.jsx)('li', {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-md/normal',
                                                                color: 'header-secondary',
                                                                children: b.intl.string(p.default.pSuM5e)
                                                            })
                                                        }),
                                                        (0, r.jsx)('li', {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-md/normal',
                                                                color: 'header-secondary',
                                                                children: b.intl.string(p.default['/RLXlJ'])
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children: b.intl.string(p.default.j4AmY2)
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(p.default['/g+Pvb'], {
                                                    termsOfService: x.EYA.TERMS,
                                                    communityGuidelines: x.EYA.GUIDELINES,
                                                    helpArticle: f.Z.getArticleURL(x.BhN.FLAG_TO_MOD)
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-lg/semibold',
                                    color: 'header-secondary',
                                    children: b.intl.string(p.default.qJWXs7)
                                }),
                                (0, r.jsxs)('ul', {
                                    className: l()(j.list, j.unorderedList, j.topLevelList),
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(p.default.FUBV1N, { survey: 'https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ' })
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(p.default.W4MIAA, { feedback: 'https://forms.gle/RbDhW46PMmR39XUP7' })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    children: b.intl.string(p.default.J3HKm5)
                                }),
                                n &&
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: b.intl.format(p.default['9x2vbG'], {
                                            optOutHook: (e) =>
                                                (0, r.jsx)(h.Z, {
                                                    onClick: () => m.Z.open(t.id, x.pNK.MODERATION, null, x.KsC.SAFETY_OVERVIEW),
                                                    children: e
                                                })
                                        })
                                    }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    children: b.intl.string(p.default.KcCY29)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('img', {
                    src: C,
                    alt: b.intl.string(b.t.gAlJzc),
                    width: u.TJ,
                    height: u.TJ
                })
            ]
        });
    };
function N(e) {
    let { guild: t } = e,
        [n, a] = (0, d.R)('report-to-mod-education-dismissed', !1),
        [o, u] = (0, d.R)('report-to-mod-education-expanded', !1),
        { transitions: m, setVisible: h } = O(),
        g = w(null != o && o);
    return (i.useEffect(() => {
        n && h(!1);
    }, [n, h]),
    n)
        ? null
        : m((e, n) =>
              n
                  ? (0, r.jsxs)(s.animated.div, {
                        style: e,
                        onClick: () => u(!o),
                        className: l()(_.container, j.container, v.mainCard),
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.inline,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: j.author,
                                        children: [
                                            (0, r.jsx)(c.gw7, {
                                                size: 'custom',
                                                width: 28,
                                                height: 28,
                                                color: 'currentColor',
                                                className: j.discordIcon
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'header-primary',
                                                children: b.intl.string(b.t.uvGmCw)
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'header-primary',
                                                children: '\u2014'
                                            }),
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: b.intl.string(p.default['95qQRE'])
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.P3F, {
                                        onClick: () => a(!0),
                                        children: (0, r.jsx)(c.Dio, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: j.closeIcon
                                        })
                                    })
                                ]
                            }),
                            g((e, n) =>
                                n
                                    ? (0, r.jsxs)(s.animated.div, {
                                          style: e,
                                          children: [(0, r.jsx)('hr', { className: j.separator }), (0, r.jsx)(S, { guild: t })]
                                      })
                                    : null
                            )
                        ]
                    })
                  : null
          );
}
