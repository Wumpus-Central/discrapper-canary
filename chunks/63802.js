n.d(t, {
    Qi: () => f,
    R9: () => p,
    l_: () => d,
    t: () => _
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(780384),
    o = n(410030),
    l = n(325767),
    u = n(474936),
    c = n(806816);
let d = 'premium_new_tier_2_gradient',
    f = 'premium_old_tier_2_gradient';
function _(e) {
    let { tier: t = u.p9.TIER_2 } = e,
        n = (0, o.ZP)(),
        r = (0, s.ap)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !r &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: a()(c.rimGlowVertical, {
                                [c.rimGlowVerticalTier0]: t === u.p9.TIER_0,
                                [c.rimGlowVerticalTier2]: t === u.p9.TIER_2
                            })
                        }),
                        (0, i.jsx)(p, { foreground: c.buttonSparkleStar1 })
                    ]
                }),
            (0, i.jsx)(p, { foreground: c.buttonSparkleStar2 }),
            (0, i.jsx)(p, { foreground: c.buttonSparkleStar3 }),
            (0, i.jsx)(p, { foreground: c.buttonSparkleStar4 }),
            (0, i.jsx)(p, { foreground: c.buttonSparkleStar5 })
        ]
    });
}
function p(e) {
    let { width: t = 14, height: n = 13, color: r = 'white', foreground: a, ...s } = e;
    return (0, i.jsxs)('svg', {
        ...(0, l.Z)({ ...s }),
        preserveAspectRatio: 'none',
        width: t,
        height: n,
        viewBox: '0 0 14 13',
        className: a,
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsxs)('linearGradient', {
                        id: d,
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '0%',
                        children: [
                            (0, i.jsx)('stop', {
                                offset: '0%',
                                stopColor: '#8547C6'
                            }),
                            (0, i.jsx)('stop', {
                                offset: '50%',
                                stopColor: '#B845C1'
                            }),
                            (0, i.jsx)('stop', {
                                offset: '100%',
                                stopColor: '#AB5D8A'
                            })
                        ]
                    }),
                    (0, i.jsxs)('linearGradient', {
                        id: f,
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '0%',
                        children: [
                            (0, i.jsx)('stop', {
                                offset: '0%',
                                stopColor: '#B473F5'
                            }),
                            (0, i.jsx)('stop', {
                                offset: '100%',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('path', {
                d: 'M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z',
                fill: r
            })
        ]
    });
}
