n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(37234),
    d = n(153867),
    u = n(425493),
    h = n(918222),
    m = n(607070),
    g = n(304761),
    x = n(865427),
    _ = n(358085),
    p = n(210887),
    E = n(981631),
    C = n(388032),
    f = n(633137);
let N = [
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
function I() {
    let [e, t] = s.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: l } = (0, a.cj)([p.Z, m.Z], () => ({
            theme: p.Z.theme,
            platformZoom: m.Z.zoom
        })),
        [I, T] = s.useState('upright'),
        S = ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
        j = new Map([
            ['normal', 400],
            ['medium', 500],
            ['semibold', 600],
            ['bold', 700],
            ['extrabold', 800]
        ]);
    s.useEffect(() => {
        _.isPlatformEmbedded ||
            window.addEventListener('resize', () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let v = _.isPlatformEmbedded ? n : e,
        b = (0, a.e7)([g.C], () => {
            var e, t;
            return (0, x.fD)() ? (null === (t = g.C.getCurrentBuildOverride()) || void 0 === t ? void 0 : null === (e = t.overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        [A, O] = (0, h.R)('playground-overrideText', null),
        [R, D] = (0, h.R)('playground-defaultText', N[0].value),
        P = s.useCallback(
            (e) => {
                let t = N.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                '' === e || null == e ? (D(N[0].value), O(null)) : null != t ? D(t.value) : (D('custom'), O(e));
            },
            [O, D]
        );
    return (0, i.jsx)('div', {
        className: f.fullscreen,
        style: {
            '--playground-font-family': 'mono' === I ? 'gg mono' : 'gg sans',
            '--playground-font-style': 'italic' === I ? 'italic' : 'normal'
        },
        children: (0, i.jsxs)(o.hjN, {
            tag: o.RB0.H1,
            children: [
                (0, i.jsxs)('div', {
                    className: f.toolbar,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    tag: 'div',
                                    variant: 'heading-lg/bold',
                                    style: { display: 'inline-block' },
                                    children: ['Zoom: ', v, '%']
                                }),
                                null != b
                                    ? (0, i.jsxs)(o.Text, {
                                          tag: 'div',
                                          variant: 'heading-lg/bold',
                                          style: {
                                              display: 'inline-block',
                                              marginLeft: '1em'
                                          },
                                          color: 'header-secondary',
                                          children: ['(', b.id, ')']
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.q4e, {
                                className: f.select,
                                options: N,
                                onChange: (e) => P(e),
                                value: R
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)('div', {
                                className: f.input,
                                children: (0, i.jsx)(o.oil, {
                                    placeholder: 'Enter custom input...',
                                    value: null != A ? A : '',
                                    onChange: P
                                })
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: f.theme,
                                orientation: 'horizontal',
                                options: [
                                    {
                                        name: C.intl.string(C.t.b8Cei4),
                                        value: E.BRd.DARK
                                    },
                                    {
                                        name: C.intl.string(C.t.K2sFfn),
                                        value: E.BRd.LIGHT
                                    }
                                ],
                                onChange: (e) => {
                                    (0, d.ZI)({ theme: e.value });
                                },
                                value: l
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            children: (0, i.jsx)(o.FXm, {
                                withTransparentBackground: !0,
                                className: f.theme,
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
                                    T(e.value);
                                },
                                value: I
                            })
                        }),
                        (0, i.jsx)(u.Z, {
                            closeAction: c.xf,
                            keybind: 'ESC'
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.textGrid,
                    children: [
                        (0, i.jsx)('div', {}),
                        S.map((e) =>
                            (0, i.jsx)(
                                'div',
                                {
                                    className: f.columnHeading,
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
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(
                                            'div',
                                            {
                                                className: f.fontSize,
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
                                        S.map((t) => {
                                            var n;
                                            let s = null !== (n = 'custom' === R ? A : R) && void 0 !== n ? n : '';
                                            return (0, i.jsx)(
                                                'div',
                                                {
                                                    className: f.textSample,
                                                    children: (0, i.jsxs)('div', {
                                                        title: ''.concat(e, 'px at ').concat(t),
                                                        className: r()(f.text, { [f.breakAnywhere]: !s.includes(' ') }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: j.get(t)
                                                        },
                                                        children: [
                                                            (0, i.jsx)('p', { children: s }),
                                                            (0, i.jsx)('p', {
                                                                style: { textTransform: 'lowercase' },
                                                                children: s
                                                            }),
                                                            (0, i.jsx)('p', {
                                                                style: { textTransform: 'uppercase' },
                                                                children: s
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
