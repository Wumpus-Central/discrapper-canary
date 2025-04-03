n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(37234),
    d = n(153867),
    u = n(425493),
    m = n(918222),
    g = n(607070),
    p = n(304761),
    h = n(865427),
    f = n(358085),
    b = n(210887),
    N = n(981631),
    x = n(388032),
    _ = n(560030);
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
function j() {
    let [e, t] = i.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: s } = (0, l.cj)([b.Z, g.Z], () => ({
            theme: b.Z.theme,
            platformZoom: g.Z.zoom
        })),
        [j, O] = i.useState('upright'),
        C = ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
        S = new Map([
            ['normal', 400],
            ['medium', 500],
            ['semibold', 600],
            ['bold', 700],
            ['extrabold', 800]
        ]);
    i.useEffect(() => {
        f.isPlatformEmbedded ||
            window.addEventListener('resize', () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let v = f.isPlatformEmbedded ? n : e,
        T = (0, l.e7)([p.C], () => {
            var e, t;
            return (0, h.fD)() ? (null == (t = p.C.getCurrentBuildOverride()) || null == (e = t.overrides) ? void 0 : e.discord_web) : null;
        }),
        [I, y] = (0, m.R)('playground-overrideText', null),
        [A, P] = (0, m.R)('playground-defaultText', E[0].value),
        R = i.useCallback(
            (e) => {
                let t = E.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                '' === e || null == e ? (P(E[0].value), y(null)) : null != t ? P(t.value) : (P('custom'), y(e));
            },
            [y, P]
        );
    return (0, r.jsx)('div', {
        className: _.fullscreen,
        style: {
            '--playground-font-family': 'mono' === j ? 'gg mono' : 'gg sans',
            '--playground-font-style': 'italic' === j ? 'italic' : 'normal'
        },
        children: (0, r.jsxs)(o.hjN, {
            tag: o.RB0.H1,
            children: [
                (0, r.jsxs)('div', {
                    className: _.toolbar,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    tag: 'div',
                                    variant: 'heading-lg/bold',
                                    style: { display: 'inline-block' },
                                    children: ['Zoom: ', v, '%']
                                }),
                                null != T
                                    ? (0, r.jsxs)(o.Text, {
                                          tag: 'div',
                                          variant: 'heading-lg/bold',
                                          style: {
                                              display: 'inline-block',
                                              marginLeft: '1em'
                                          },
                                          color: 'header-secondary',
                                          children: ['(', T.id, ')']
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.xJW, {
                            children: (0, r.jsx)(o.q4e, {
                                className: _.select,
                                options: E,
                                onChange: (e) => R(e),
                                value: A
                            })
                        }),
                        (0, r.jsx)(o.xJW, {
                            children: (0, r.jsx)('div', {
                                className: _.input,
                                children: (0, r.jsx)(o.oil, {
                                    placeholder: 'Enter custom input...',
                                    value: null != I ? I : '',
                                    onChange: R
                                })
                            })
                        }),
                        (0, r.jsx)(o.xJW, {
                            children: (0, r.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: _.theme,
                                orientation: 'horizontal',
                                options: [
                                    {
                                        name: x.NW.string(x.t.b8Cei4),
                                        value: N.BRd.DARK
                                    },
                                    {
                                        name: x.NW.string(x.t.K2sFfn),
                                        value: N.BRd.LIGHT
                                    }
                                ],
                                onChange: (e) => {
                                    (0, d.ZI)({ theme: e.value });
                                },
                                value: s
                            })
                        }),
                        (0, r.jsx)(o.xJW, {
                            children: (0, r.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: _.theme,
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
                                    O(e.value);
                                },
                                value: j
                            })
                        }),
                        (0, r.jsx)(u.Z, {
                            closeAction: c.xf,
                            keybind: 'ESC'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: _.textGrid,
                    children: [
                        (0, r.jsx)('div', {}),
                        C.map((e) =>
                            (0, r.jsx)(
                                'div',
                                {
                                    className: _.columnHeading,
                                    children: (0, r.jsx)(o.X6q, {
                                        variant: 'eyebrow',
                                        children: e
                                    })
                                },
                                e
                            )
                        ),
                        [10, 12, 14, 15, 16, 18, 20, 24].map((e) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            'div',
                                            {
                                                className: _.fontSize,
                                                children: [
                                                    (0, r.jsxs)(o.X6q, {
                                                        variant: 'eyebrow',
                                                        children: [e, 'px']
                                                    }),
                                                    100 !== v
                                                        ? (0, r.jsxs)(o.X6q, {
                                                              variant: 'eyebrow',
                                                              color: 'text-muted',
                                                              children: ['(', (e * v) / 100, ')']
                                                          })
                                                        : null
                                                ]
                                            },
                                            e
                                        ),
                                        C.map((t) => {
                                            var n;
                                            let i = null != (n = 'custom' === A ? I : A) ? n : '';
                                            return (0, r.jsx)(
                                                'div',
                                                {
                                                    className: _.textSample,
                                                    children: (0, r.jsxs)('div', {
                                                        title: ''.concat(e, 'px at ').concat(t),
                                                        className: a()(_.text, { [_.breakAnywhere]: !i.includes(' ') }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: S.get(t)
                                                        },
                                                        children: [
                                                            (0, r.jsx)('p', { children: i }),
                                                            (0, r.jsx)('p', {
                                                                style: { textTransform: 'lowercase' },
                                                                children: i
                                                            }),
                                                            (0, r.jsx)('p', {
                                                                style: { textTransform: 'uppercase' },
                                                                children: i
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
