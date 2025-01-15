n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(37234),
    d = n(153867),
    u = n(425493),
    m = n(918222),
    g = n(607070),
    h = n(304761),
    p = n(865427),
    x = n(358085),
    f = n(210887),
    _ = n(981631),
    E = n(388032),
    C = n(597562);
let T = [
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
function S() {
    let [e, t] = r.useState(Math.round((window.outerWidth / window.innerWidth) * 100)),
        { platformZoom: n, theme: s } = (0, l.cj)([f.Z, g.Z], () => ({
            theme: f.Z.theme,
            platformZoom: g.Z.zoom
        })),
        [S, b] = r.useState('upright'),
        I = ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
        N = new Map([
            ['normal', 400],
            ['medium', 500],
            ['semibold', 600],
            ['bold', 700],
            ['extrabold', 800]
        ]);
    r.useEffect(() => {
        !x.isPlatformEmbedded &&
            window.addEventListener('resize', () => {
                t(Math.round((window.outerWidth / window.innerWidth) * 100));
            });
    }, []);
    let v = x.isPlatformEmbedded ? n : e,
        A = (0, l.e7)([h.C], () => {
            var e, t;
            return (0, p.fD)() ? (null === (t = h.C.getCurrentBuildOverride()) || void 0 === t ? void 0 : null === (e = t.overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        [j, O] = (0, m.R)('playground-overrideText', null),
        [R, P] = (0, m.R)('playground-defaultText', T[0].value),
        y = r.useCallback(
            (e) => {
                let t = T.find((t) => {
                    let { value: n } = t;
                    return n === e;
                });
                '' === e || null == e ? (P(T[0].value), O(null)) : null != t ? P(t.value) : (P('custom'), O(e));
            },
            [O, P]
        );
    return (0, i.jsx)('div', {
        className: C.fullscreen,
        style: {
            '--playground-font-family': 'mono' === S ? 'gg mono' : 'gg sans',
            '--playground-font-style': 'italic' === S ? 'italic' : 'normal'
        },
        children: (0, i.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H1,
            children: [
                (0, i.jsxs)('div', {
                    className: C.toolbar,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    tag: 'div',
                                    variant: 'heading-lg/bold',
                                    style: { display: 'inline-block' },
                                    children: ['Zoom: ', v, '%']
                                }),
                                null != A
                                    ? (0, i.jsxs)(o.Text, {
                                          tag: 'div',
                                          variant: 'heading-lg/bold',
                                          style: {
                                              display: 'inline-block',
                                              marginLeft: '1em'
                                          },
                                          color: 'header-secondary',
                                          children: ['(', A.id, ')']
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(o.FormItem, {
                            children: (0, i.jsx)(o.SingleSelect, {
                                className: C.select,
                                options: T,
                                onChange: (e) => y(e),
                                value: R
                            })
                        }),
                        (0, i.jsx)(o.FormItem, {
                            children: (0, i.jsx)('div', {
                                className: C.input,
                                children: (0, i.jsx)(o.TextInput, {
                                    placeholder: 'Enter custom input...',
                                    value: null != j ? j : '',
                                    onChange: y
                                })
                            })
                        }),
                        (0, i.jsx)(o.FormItem, {
                            children: (0, i.jsx)(o.RadioGroup, {
                                withTransparentBackground: !0,
                                className: C.theme,
                                orientation: 'horizontal',
                                options: [
                                    {
                                        name: E.intl.string(E.t.b8Cei4),
                                        value: _.BRd.DARK
                                    },
                                    {
                                        name: E.intl.string(E.t.K2sFfn),
                                        value: _.BRd.LIGHT
                                    }
                                ],
                                onChange: (e) => {
                                    (0, d.ZI)({ theme: e.value });
                                },
                                value: s
                            })
                        }),
                        (0, i.jsx)(o.FormItem, {
                            children: (0, i.jsx)(o.RadioGroup, {
                                withTransparentBackground: !0,
                                className: C.theme,
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
                                    b(e.value);
                                },
                                value: S
                            })
                        }),
                        (0, i.jsx)(u.Z, {
                            closeAction: c.xf,
                            keybind: 'ESC'
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: C.textGrid,
                    children: [
                        (0, i.jsx)('div', {}),
                        I.map((e) =>
                            (0, i.jsx)(
                                'div',
                                {
                                    className: C.columnHeading,
                                    children: (0, i.jsx)(o.Heading, {
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
                                                className: C.fontSize,
                                                children: [
                                                    (0, i.jsxs)(o.Heading, {
                                                        variant: 'eyebrow',
                                                        children: [e, 'px']
                                                    }),
                                                    100 !== v
                                                        ? (0, i.jsxs)(o.Heading, {
                                                              variant: 'eyebrow',
                                                              color: 'text-muted',
                                                              children: ['(', (e * v) / 100, ')']
                                                          })
                                                        : null
                                                ]
                                            },
                                            e
                                        ),
                                        I.map((t) => {
                                            var n;
                                            let r = null !== (n = 'custom' === R ? j : R) && void 0 !== n ? n : '';
                                            return (0, i.jsx)(
                                                'div',
                                                {
                                                    className: C.textSample,
                                                    children: (0, i.jsxs)('div', {
                                                        title: ''.concat(e, 'px at ').concat(t),
                                                        className: a()(C.text, { [C.breakAnywhere]: !r.includes(' ') }),
                                                        style: {
                                                            fontSize: e,
                                                            fontWeight: N.get(t)
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
