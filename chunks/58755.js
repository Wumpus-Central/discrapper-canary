n.d(t, { P: () => b }), n(724458), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(394900),
    i = n(661105),
    o = n(609067),
    s = n(94367),
    c = n(203165),
    d = n(481060),
    u = n(789654),
    m = n(246992),
    h = n(500949),
    x = n(833999);
let p = Object.keys(h.jQ).map((e) => ({
        value: e,
        label: e
    })),
    f = Array.from(
        Array.from(
            Object.keys(c.b).reduce((e, t) => {
                let [n] = t.split('.');
                return e.add(n), e;
            }, new Set())
        )
    ).map((e) => ({
        value: e,
        label: e
    }));
function b(e) {
    let { state: t, setState: n } = e,
        { scales: r } = t,
        [i, o] = l.useState(null),
        s = (0, a.jsxs)('div', {
            className: x.section,
            children: [
                (0, a.jsx)(d.VcW, {
                    options: f,
                    placeholder: 'Select a scale to edit...',
                    value: void 0,
                    onChange: (e) => {
                        let a = t.scales.find((t) => t.name === e);
                        null == a &&
                            ((a = {
                                name: e,
                                base: 'plum' === e ? c.b['plum.10'].hex : c.b[''.concat(e, '.500')].hex,
                                colorSpace: h.jQ.ICTCP,
                                showColumnarPalettePreview: !1,
                                useP3ColorSpace: !1,
                                darkness: 0,
                                lightness: 0,
                                easing: h.iw.LINEAR,
                                easingStrength: 1,
                                steps: 26
                            }),
                            n({
                                ...t,
                                scales: [...t.scales, a]
                            }));
                    },
                    popoutLayerContext: m.O$
                }),
                (0, a.jsx)('ul', {
                    className: x.overrides,
                    children: r.map((e) =>
                        (0, a.jsx)(
                            'li',
                            {
                                children: (0, a.jsx)(d.P3F, {
                                    onClick: () => o(e.name),
                                    style: { cursor: 'pointer' },
                                    children: (0, a.jsx)(g, {
                                        scale: e,
                                        onRemove: () =>
                                            n({
                                                ...t,
                                                scales: t.scales.filter((t) => t.name !== e.name)
                                            })
                                    })
                                })
                            },
                            e.name
                        )
                    )
                })
            ]
        }),
        u = r.find((e) => e.name === i),
        p =
            null != u
                ? (0, a.jsx)(_, {
                      onClose: () => o(null),
                      scale: u,
                      setState: n
                  })
                : s;
    return (0, a.jsx)('div', { children: p });
}
function _(e) {
    let { scale: t, setState: n, onClose: l } = e,
        { name: c, base: f, darkness: b, lightness: _, showColumnarPalettePreview: g, colorSpace: j, easingStrength: C = 1, useP3ColorSpace: N, steps: T = 26 } = t,
        E = (0, h.XM)(t),
        y = (0, h.W6)(E, c);
    return (0, a.jsxs)(d.hjN, {
        className: x.paletteSettings,
        children: [
            (0, a.jsxs)('div', {
                className: x.titleWithIcon,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: l,
                        style: { maxWidth: 80 },
                        children: (0, a.jsx)(d.whL, { size: 'sm' })
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: 'text-lg/bold',
                        children: c
                    }),
                    (0, a.jsx)(d.P3F, {
                        onClick: function () {
                            let e = Object.entries(E).reduce((e, t) => {
                                let [n, a] = t;
                                return (
                                    (e[n] = {
                                        value: (0, r.Z)((0, i.Z)(a, h.HW.sRGB), { format: 'hex' }),
                                        type: 'color'
                                    }),
                                    e
                                );
                            }, {});
                            (0, u.q)('figma-'.concat(t.name), JSON.stringify(e, null, 4));
                        },
                        style: { cursor: 'pointer' },
                        children: (0, a.jsx)(v, {})
                    })
                ]
            }),
            (0, a.jsxs)(d.xJW, {
                title: 'Base Color',
                className: x.formItem,
                children: [
                    (0, a.jsxs)(d.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: ['The base color the ', (0, a.jsx)('code', { children: c }), ' palette is generated from.']
                    }),
                    (0, a.jsx)('input', {
                        type: 'color',
                        value: f,
                        onChange: (e) => (0, h.Ib)(c, e.target.value, n)
                    })
                ]
            }),
            (0, a.jsxs)(d.xJW, {
                title: 'Color Space',
                children: [
                    (0, a.jsx)(d.R94, {
                        type: d.geA.DESCRIPTION,
                        children: 'The color space used to generate the palette. Different color spaces will produce different results.'
                    }),
                    (0, a.jsx)(d.q4e, {
                        options: p,
                        value: j,
                        onChange: (e) => (0, h.t4)(c, e, n),
                        popoutLayerContext: m.O$
                    })
                ]
            }),
            (0, a.jsxs)(d.hjN, {
                title: 'Luminance',
                children: [
                    (0, a.jsx)(d.xJW, {}),
                    (0, a.jsxs)(d.xJW, {
                        title: 'Lighten ('.concat((100 * _).toFixed(), '%)'),
                        children: [
                            (0, a.jsx)(d.R94, {
                                type: d.geA.DESCRIPTION,
                                children: 'Decrease the darkness of the darkest color in the palette. Increasing this makes the darker colors in the palette lighter.'
                            }),
                            (0, a.jsx)(d.iRW, {
                                onValueRender: () => null,
                                initialValue: _,
                                stickToMarkers: !0,
                                markers: Array.from({ length: 21 }, (e, t) => t / 10),
                                minValue: 0,
                                maxValue: 2,
                                onValueChange: (e) => (0, h.h9)(c, e, n),
                                onMarkerRender: () => null
                            })
                        ]
                    }),
                    (0, a.jsxs)(d.xJW, {
                        title: 'Darken ('.concat((100 * b).toFixed(), '%)'),
                        children: [
                            (0, a.jsx)(d.R94, {
                                type: d.geA.DESCRIPTION,
                                children: 'Increase the darkness of the lightest color in the palette. Increasing this makes the lighter colors in the palette darker.'
                            }),
                            (0, a.jsx)(d.iRW, {
                                onValueRender: () => null,
                                initialValue: 0,
                                stickToMarkers: !0,
                                markers: Array.from({ length: 21 }, (e, t) => t / 10),
                                minValue: 0,
                                maxValue: 2,
                                onValueChange: (e) => (0, h.YE)(c, e, n),
                                onMarkerRender: () => null
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(d.hjN, {
                title: 'Easing',
                children: (0, a.jsxs)(d.xJW, {
                    title: 'Easing Strength ('.concat(C.toFixed(2), ')'),
                    children: [
                        (0, a.jsx)(d.R94, {
                            type: d.geA.DESCRIPTION,
                            children: 'Adjust the strength of the easing function.'
                        }),
                        (0, a.jsx)(d.iRW, {
                            onValueRender: () => null,
                            initialValue: C,
                            minValue: 1,
                            maxValue: 5,
                            onValueChange: (e) => (0, h.rd)(c, e, n),
                            onMarkerRender: () => null
                        })
                    ]
                })
            }),
            (0, a.jsxs)(d.hjN, {
                title: 'Palette',
                children: [
                    (0, a.jsx)(d.xJW, {
                        children: (0, a.jsx)(d.j7V, {
                            note: 'Renders the palette preview in a single column, useful for comparing the luminance of each step.',
                            value: g,
                            onChange: (e) => (0, h.KB)(c, e, n),
                            children: 'Show columnar palette preview'
                        })
                    }),
                    (0, a.jsx)(d.xJW, {
                        children: (0, a.jsx)(d.j7V, {
                            note: 'Renders the palette preview in a single column, useful for comparing the luminance of each step.',
                            value: N,
                            disabled: !h.S2,
                            onChange: (e) => (0, h.uF)(c, e, n),
                            children: 'Use P3 Color Space'
                        })
                    }),
                    (0, a.jsx)(d.xJW, {
                        title: 'Steps ('.concat(T, ')'),
                        children: (0, a.jsx)(d.iRW, {
                            onValueRender: () => null,
                            initialValue: T,
                            minValue: (0, h.A0)(c).length,
                            maxValue: 100,
                            onValueChange: (e) => (0, h.YC)(c, Math.round(e), n),
                            onMarkerRender: () => null
                        })
                    }),
                    (0, a.jsx)(d.xJW, {
                        title: 'Palette Preview',
                        children: (0, a.jsx)('div', {
                            className: x.paletteOverrides,
                            'data-columnar': g,
                            children: Object.entries(E).map((e, n) => {
                                let [l, c] = e,
                                    u = (0, h.HI)(c),
                                    m = (0, o.Z)((0, s.Z)('black'), c) > 4.5 ? 'black' : 'white',
                                    x = y[l];
                                return (0, a.jsxs)(
                                    'div',
                                    {
                                        style: { backgroundColor: u },
                                        children: [
                                            (0, a.jsxs)(d.Text, {
                                                variant: g ? 'text-sm/medium' : 'text-xs/medium',
                                                style: { color: m },
                                                children: [t.name, '.', n + 1, g && null != x ? (0, a.jsx)('strong', { children: ' - '.concat(x) }) : '']
                                            }),
                                            g &&
                                                (0, a.jsxs)(d.Text, {
                                                    variant: 'text-xxs/medium',
                                                    style: {
                                                        opacity: 0.75,
                                                        color: m
                                                    },
                                                    children: [(0, r.Z)((0, i.Z)(c, h.HW.sRGB), { format: 'hex' }).toUpperCase(), ' - ', u]
                                                })
                                        ]
                                    },
                                    l
                                );
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let { scale: t, onRemove: n } = e,
        o = l.useMemo(() => Object.values((0, h.XM)(t)).map((e) => (0, r.Z)((0, i.Z)(e, h.HW.sRGB), { format: 'hex' })), [t]);
    return (0, a.jsxs)('li', {
        className: x.override,
        children: [
            (0, a.jsxs)('div', {
                className: x.overrideHeader,
                children: [
                    (0, a.jsx)('div', {
                        className: x.title,
                        children: (0, a.jsx)(d.Text, {
                            lineClamp: 1,
                            variant: 'text-md/medium',
                            className: x.overrideHeading,
                            tabularNumbers: !0,
                            children: t.name
                        })
                    }),
                    (0, a.jsx)('span', {}),
                    (0, a.jsx)('span', {}),
                    (0, a.jsx)(d.P3F, {
                        className: x.removeOverride,
                        onClick: n,
                        children: (0, a.jsx)(d.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: x.palettePreview,
                children: o.map((e) =>
                    (0, a.jsx)(
                        'span',
                        {
                            style: {
                                width: 16,
                                height: 16,
                                backgroundColor: e,
                                borderRadius: 'var(--radius-xs)'
                            }
                        },
                        e
                    )
                )
            })
        ]
    });
}
let v = () =>
    (0, a.jsxs)('svg', {
        width: '20',
        height: '20',
        viewBox: '0 0 20 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, a.jsx)('path', {
                d: 'M7.08366 18.3337C8.69366 18.3337 10.0003 17.0892 10.0003 15.5559V12.7781H7.08366C5.47366 12.7781 4.16699 14.0225 4.16699 15.5559C4.16699 17.0892 5.47366 18.3337 7.08366 18.3337Z',
                fill: '#0ACF83'
            }),
            (0, a.jsx)('path', {
                d: 'M4.16699 10.0003C4.16699 8.46699 5.47366 7.22255 7.08366 7.22255H10.0003V12.7781H7.08366C5.47366 12.7781 4.16699 11.5337 4.16699 10.0003Z',
                fill: '#A259FF'
            }),
            (0, a.jsx)('path', {
                d: 'M4.16702 4.44477C4.16702 2.91144 5.47369 1.66699 7.08369 1.66699H10.0004L10.0003 7.22255H7.08366C5.47366 7.22255 4.16702 5.9781 4.16702 4.44477Z',
                fill: '#F24E1E'
            }),
            (0, a.jsx)('path', {
                d: 'M10.0004 1.66699L12.917 1.66699C14.527 1.66699 15.8337 2.91144 15.8337 4.44477C15.8337 5.9781 14.527 7.22255 12.917 7.22255H10.0003L10.0004 1.66699Z',
                fill: '#FF7262'
            }),
            (0, a.jsx)('path', {
                d: 'M15.8337 10.0003C15.8337 11.5337 14.527 12.7781 12.917 12.7781C11.307 12.7781 10.0003 11.5337 10.0003 10.0003C10.0003 8.46699 11.307 7.22255 12.917 7.22255C14.527 7.22255 15.8337 8.46699 15.8337 10.0003Z',
                fill: '#1ABCFE'
            })
        ]
    });
