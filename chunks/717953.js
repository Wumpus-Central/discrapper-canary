n.d(t, { Z: () => f });
var r = n(255367),
    i = n(657707),
    o = n(481060),
    a = n(44315),
    s = n(583901),
    l = n(981631),
    c = n(388032),
    u = n(221858);
function d() {
    return (0, r.jsxs)('svg', {
        className: u.newRing,
        width: '68',
        height: '68',
        viewBox: '0 0 68 68',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, r.jsx)('circle', {
                cx: '33.875',
                cy: '33.875',
                r: '32.875',
                stroke: 'url(#paint0_linear_1368_16544)',
                'stroke-width': '2'
            }),
            (0, r.jsx)('defs', {
                children: (0, r.jsxs)('linearGradient', {
                    id: 'paint0_linear_1368_16544',
                    x1: '33.875',
                    y1: '2',
                    x2: '33.875',
                    y2: '65.75',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                        (0, r.jsx)('stop', { 'stop-color': '#B473F5' }),
                        (0, r.jsx)('stop', {
                            offset: '1',
                            'stop-color': '#E292AA'
                        })
                    ]
                })
            })
        ]
    });
}
function f(e) {
    let { onSelect: t } = e;
    return (0, r.jsxs)(s.S4, {
        onSelect: t,
        isSelected: !1,
        name: 'Custom Theme',
        className: u.container,
        showBadge: !1,
        showLockedBadge: !1,
        children: [
            (0, r.jsx)(d, {}),
            (0, r.jsx)(i.V3v, { className: u.paletteIcon }),
            (0, r.jsx)(o.IGR, {
                className: u.newBadge,
                text: c.intl.string(c.t.y2b7CA),
                color: (0, a.Sl)(l.Ilk.RED_430).hex
            })
        ]
    });
}
