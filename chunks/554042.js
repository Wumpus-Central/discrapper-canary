(n.d(t, { Z: () => j }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(153867),
    d = n(918222),
    u = n(607070),
    m = n(304761),
    p = n(865427),
    g = n(358085),
    h = n(210887),
    f = n(981631),
    b = n(388032),
    x = n(560030);
let _ = [
    {
        label: 'Latin alphabet',
        value: 'aBcDeFgHiJkLmNoPqRsTuVwXyZ'
    },
    {
        label: 'Latin pangram',
        value: 'The quick brown fox jumps over the lazy dog'
    },
    {
        label: 'Greek alphabet',
        value: 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ'
    },
    {
        label: 'Greek pangram',
        value: 'ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ'
    },
    {
        label: 'Cyrillic alphabet',
        value: 'АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ'
    },
    {
        label: 'Cyrillic pangram',
        value: 'В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!'
    },
    {
        label: 'Custom',
        value: 'custom'
    }
];
function j() {
    let [e, t] = r.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: s } = (0, l.cj)([h.Z, u.Z], () => ({
            theme: h.Z.theme,
            platformZoom: u.Z.zoom
        })),
        [j, E] = r.useState('upright'),
        O = ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
        C = new Map([
            ['normal', 400],
            ['medium', 500],
            ['semibold', 600],
            ['bold', 700],
            ['extrabold', 800]
        ]);
    r.useEffect(() => {
        g.isPlatformEmbedded ||
            window.addEventListener('resize', () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let v = g.isPlatformEmbedded ? n : e,
        S = (0, l.e7)([m.C], () => {
            var e, t;
            return (0, p.fD)() ? (null == (t = m.C.getCurrentBuildOverride()) || null == (e = t.overrides) ? void 0 : e.discord_web) : null;
        }),
        [T, N] = (0, d.R)('playground-overrideText', null),
        [I, y] = (0, d.R)('playground-defaultText', _[0].value),
        A = r.useCallback(
            (e) => {
                let t = _.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                '' === e || null == e ? (y(_[0].value), N(null)) : null != t ? y(t.value) : (y('custom'), N(e));
            },
            [N, y]
        );
    return (0, i.jsx)('div', {
        style: {
            '--playground-font-family': 'mono' === j ? 'gg mono' : 'gg sans',
            '--playground-font-style': 'italic' === j ? 'italic' : 'normal'
        },
        children: (0, i.jsxs)(o.hjN, {
            tag: o.RB0.H1,
            children: [
                (0, i.jsxs)('div', {
                    className: x.toolbar,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    tag: 'div',
                                    variant: 'heading-lg/bold',
                                    style: { display: 'inline-block' },
                                    children: ['Zoom: ', v, '%']
                                }),
                                null != S
                                    ? (0, i.jsxs)(o.Text, {
                                          tag: 'div',
                                          variant: 'heading-lg/bold',
                                          style: {
                                              display: 'inline-block',
                                              marginLeft: '1em'
                                          },
                                          color: 'header-secondary',
                                          children: ['(', S.id, ')']
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.q4e, {
                                className: x.select,
                                options: _,
                                onChange: (e) => A(e),
                                value: I
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)('div', {
                                className: x.input,
                                children: (0, i.jsx)(o.oil, {
                                    placeholder: 'Enter custom input...',
                                    value: null != T ? T : '',
                                    onChange: A
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: x.toolbar,
                    children: [
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: x.theme,
                                orientation: 'horizontal',
                                options: [
                                    {
                                        name: b.intl.string(b.t.b8Cei4),
                                        value: f.BRd.DARK
                                    },
                                    {
                                        name: b.intl.string(b.t.K2sFfn),
                                        value: f.BRd.LIGHT
                                    }
                                ],
                                onChange: (e) => {
                                    (0, c.ZI)({ theme: e.value });
                                },
                                value: s
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: x.theme,
                                orientation: 'horizontal',
                                options: [
                                    {
                                        name: 'Upright',
                                        value: 'upright'
                                    },
                                    {
                                        name: 'Italic',
                                        value: 'italic'
                                    },
                                    {
                                        name: 'Mono',
                                        value: 'mono'
                                    }
                                ],
                                onChange: (e) => {
                                    E(e.value);
                                },
                                value: j
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: x.textGrid,
                    children: [
                        (0, i.jsx)('div', {}),
                        O.map((e) =>
                            (0, i.jsx)(
                                'div',
                                {
                                    className: x.columnHeading,
                                    children: (0, i.jsx)(o.X6q, {
                                        variant: 'eyebrow',
                                        children: e
                                    })
                                },
                                e
                            )
                        ),
                        [10, 12, 14, 15, 16, 18, 20, 24].map((e) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(
                                            'div',
                                            {
                                                className: x.fontSize,
                                                children: [
                                                    (0, i.jsxs)(o.X6q, {
                                                        variant: 'eyebrow',
                                                        children: [e, 'px']
                                                    }),
                                                    100 !== v
                                                        ? (0, i.jsxs)(o.X6q, {
                                                              variant: 'eyebrow',
                                                              color: 'text-muted',
                                                              children: ['(', (e * v) / 100, ')']
                                                          })
                                                        : null
                                                ]
                                            },
                                            e
                                        ),
                                        O.map((t) => {
                                            var n;
                                            let r = null != (n = 'custom' === I ? T : I) ? n : '';
                                            return (0, i.jsx)(
                                                'div',
                                                {
                                                    className: x.textSample,
                                                    children: (0, i.jsxs)('div', {
                                                        title: ''.concat(e, 'px at ').concat(t),
                                                        className: a()(x.text, { [x.breakAnywhere]: !r.includes(' ') }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: C.get(t)
                                                        },
                                                        children: [
                                                            (0, i.jsx)('p', { children: r }),
                                                            (0, i.jsx)('p', {
                                                                style: { textTransform: 'lowercase' },
                                                                children: r
                                                            }),
                                                            (0, i.jsx)('p', {
                                                                style: { textTransform: 'uppercase' },
                                                                children: r
                                                            })
                                                        ]
                                                    })
                                                },
                                                ''.concat(e, '-').concat(t)
                                            );
                                        })
                                    ]
                                },
                                e
                            )
                        )
                    ]
                })
            ]
        })
    });
}
