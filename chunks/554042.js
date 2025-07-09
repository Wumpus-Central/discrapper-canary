(n.d(t, { Z: () => O }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(37234),
    d = n(153867),
    u = n(425493),
    m = n(918222),
    p = n(607070),
    g = n(304761),
    h = n(865427),
    f = n(358085),
    b = n(210887),
    x = n(981631),
    _ = n(388032),
    j = n(560030);
let E = [
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
function O() {
    let [e, t] = r.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: s } = (0, l.cj)([b.Z, p.Z], () => ({
            theme: b.Z.theme,
            platformZoom: p.Z.zoom
        })),
        [O, C] = r.useState('upright'),
        v = ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
        S = new Map([
            ['normal', 400],
            ['medium', 500],
            ['semibold', 600],
            ['bold', 700],
            ['extrabold', 800]
        ]);
    r.useEffect(() => {
        f.isPlatformEmbedded ||
            window.addEventListener('resize', () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let T = f.isPlatformEmbedded ? n : e,
        N = (0, l.e7)([g.C], () => {
            var e, t;
            return (0, h.fD)() ? (null == (t = g.C.getCurrentBuildOverride()) || null == (e = t.overrides) ? void 0 : e.discord_web) : null;
        }),
        [I, y] = (0, m.R)('playground-overrideText', null),
        [A, P] = (0, m.R)('playground-defaultText', E[0].value),
        R = r.useCallback(
            (e) => {
                let t = E.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                '' === e || null == e ? (P(E[0].value), y(null)) : null != t ? P(t.value) : (P('custom'), y(e));
            },
            [y, P]
        );
    return (0, i.jsx)('div', {
        className: j.fullscreen,
        style: {
            '--playground-font-family': 'mono' === O ? 'gg mono' : 'gg sans',
            '--playground-font-style': 'italic' === O ? 'italic' : 'normal'
        },
        children: (0, i.jsxs)(o.hjN, {
            tag: o.RB0.H1,
            children: [
                (0, i.jsxs)('div', {
                    className: j.toolbar,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    tag: 'div',
                                    variant: 'heading-lg/bold',
                                    style: { display: 'inline-block' },
                                    children: ['Zoom: ', T, '%']
                                }),
                                null != N
                                    ? (0, i.jsxs)(o.Text, {
                                          tag: 'div',
                                          variant: 'heading-lg/bold',
                                          style: {
                                              display: 'inline-block',
                                              marginLeft: '1em'
                                          },
                                          color: 'header-secondary',
                                          children: ['(', N.id, ')']
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.q4e, {
                                className: j.select,
                                options: E,
                                onChange: (e) => R(e),
                                value: A
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)('div', {
                                className: j.input,
                                children: (0, i.jsx)(o.oil, {
                                    placeholder: 'Enter custom input...',
                                    value: null != I ? I : '',
                                    onChange: R
                                })
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: j.theme,
                                orientation: 'horizontal',
                                options: [
                                    {
                                        name: _.intl.string(_.t.b8Cei4),
                                        value: x.BRd.DARK
                                    },
                                    {
                                        name: _.intl.string(_.t.K2sFfn),
                                        value: x.BRd.LIGHT
                                    }
                                ],
                                onChange: (e) => {
                                    (0, d.ZI)({ theme: e.value });
                                },
                                value: s
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: j.theme,
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
                                    C(e.value);
                                },
                                value: O
                            })
                        }),
                        (0, i.jsx)(u.Z, {
                            closeAction: c.xf,
                            keybind: 'ESC'
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: j.textGrid,
                    children: [
                        (0, i.jsx)('div', {}),
                        v.map((e) =>
                            (0, i.jsx)(
                                'div',
                                {
                                    className: j.columnHeading,
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
                                                className: j.fontSize,
                                                children: [
                                                    (0, i.jsxs)(o.X6q, {
                                                        variant: 'eyebrow',
                                                        children: [e, 'px']
                                                    }),
                                                    100 !== T
                                                        ? (0, i.jsxs)(o.X6q, {
                                                              variant: 'eyebrow',
                                                              color: 'text-muted',
                                                              children: ['(', (e * T) / 100, ')']
                                                          })
                                                        : null
                                                ]
                                            },
                                            e
                                        ),
                                        v.map((t) => {
                                            var n;
                                            let r = null != (n = 'custom' === A ? I : A) ? n : '';
                                            return (0, i.jsx)(
                                                'div',
                                                {
                                                    className: j.textSample,
                                                    children: (0, i.jsxs)('div', {
                                                        title: ''.concat(e, 'px at ').concat(t),
                                                        className: a()(j.text, { [j.breakAnywhere]: !r.includes(' ') }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: S.get(t)
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
