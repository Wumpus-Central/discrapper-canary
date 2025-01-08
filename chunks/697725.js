r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(331595);
function s(e) {
    let { width: n = 10, height: r = 10, color: s = 'currentColor', ...o } = e;
    return (0, i.jsxs)('svg', {
        ...(0, a.Z)(o),
        width: n,
        height: r,
        viewBox: '0 0 17 22',
        fill: s,
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsxs)('g', {
                filter: 'url(#filter0_d_1296_1706)',
                children: [
                    (0, i.jsx)('path', {
                        opacity: '0.55',
                        d: 'M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z',
                        fill: 'white'
                    }),
                    (0, i.jsx)('path', {
                        opacity: '0.8',
                        d: 'M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z',
                        fill: 'white'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z',
                        fill: 'white'
                    })
                ]
            }),
            (0, i.jsx)('defs', {
                children: (0, i.jsxs)('filter', {
                    id: 'filter0_d_1296_1706',
                    x: '-3.5',
                    y: '-1',
                    width: '24',
                    height: '24',
                    filterUnits: 'userSpaceOnUse',
                    'color-interpolation-filters': 'sRGB',
                    children: [
                        (0, i.jsx)('feFlood', {
                            'flood-opacity': '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, i.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, i.jsx)('feOffset', { dy: '1' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '2' }),
                        (0, i.jsx)('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0'
                        }),
                        (0, i.jsx)('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_1296_1706'
                        }),
                        (0, i.jsx)('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_1296_1706',
                            result: 'shape'
                        })
                    ]
                })
            })
        ]
    });
}
