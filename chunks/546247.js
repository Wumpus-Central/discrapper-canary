n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(998502),
    s = n(939630);
let c = a.ZP.getEnableHardwareAcceleration()
    ? function (e) {
          let { eventTargetRef: t } = e;
          return (0, o._q$)('PulseGradient')
              ? (0, r.jsx)(o.zLd, {
                    className: s.pulseGradient,
                    eventTargetRef: t
                })
              : (0, r.jsx)('div', {
                    children: (0, r.jsxs)('div', {
                        className: s.gradientBackground,
                        children: [(0, r.jsx)('div', { className: l()(s.backgroundDark, s.sphere) }), (0, r.jsx)('div', { className: l()(s.backgroundLight, s.sphere) }), (0, r.jsx)('div', { className: l()(s.foregroundRing, s.sphere) }), (0, r.jsx)('div', { className: l()(s.foregroundBase, s.sphere) })]
                    })
                });
      }
    : function () {
          return (0, r.jsxs)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '1000',
              height: '1000',
              fill: 'none',
              preserveAspectRatio: 'none',
              viewBox: '0 0 1000 1000',
              style: {
                  position: 'absolute',
                  bottom: 0,
                  width: '100%'
              },
              children: [
                  (0, r.jsxs)('g', {
                      'clip-path': 'url(#a)',
                      children: [
                          (0, r.jsx)('path', {
                              fill: '#000',
                              d: 'M1000 0H0v1000h1000V0Z'
                          }),
                          (0, r.jsx)('g', {
                              filter: 'url(#b)',
                              opacity: '.8',
                              children: (0, r.jsx)('path', {
                                  fill: '#201E6E',
                                  d: 'M500 1922.1c349.485 0 632.8-379.26 632.8-847.1 0-467.841-283.315-847.101-632.8-847.101-349.486 0-632.8 379.26-632.8 847.101 0 467.84 283.314 847.1 632.8 847.1Z'
                              })
                          }),
                          (0, r.jsx)('g', {
                              filter: 'url(#c)',
                              opacity: '.5',
                              children: (0, r.jsx)('path', {
                                  fill: '#EB459E',
                                  d: 'M500 1428c177.283 0 321-179.98 321-402 0-222.018-143.717-402-321-402s-321 179.982-321 402c0 222.02 143.717 402 321 402Z'
                              })
                          }),
                          (0, r.jsx)('g', {
                              filter: 'url(#d)',
                              children: (0, r.jsx)('path', {
                                  stroke: '#5865F2',
                                  'stroke-width': '14.648',
                                  d: 'M500 1664.5c368.098 0 666.5-298.4 666.5-666.5 0-368.098-298.402-666.5-666.5-666.5S-166.5 629.902-166.5 998c0 368.1 298.402 666.5 666.5 666.5Z'
                              })
                          }),
                          (0, r.jsx)('g', {
                              filter: 'url(#e)',
                              children: (0, r.jsx)('path', {
                                  fill: '#5865F2',
                                  d: 'M500 1379c166.79 0 302-123.35 302-275.5C802 951.346 666.79 828 500 828s-302 123.346-302 275.5c0 152.15 135.21 275.5 302 275.5Z'
                              })
                          })
                      ]
                  }),
                  (0, r.jsxs)('defs', {
                      children: [
                          (0, r.jsxs)('filter', {
                              id: 'b',
                              width: '1753.88',
                              height: '2182.48',
                              x: '-376.941',
                              y: '-16.241',
                              'color-interpolation-filters': 'sRGB',
                              filterUnits: 'userSpaceOnUse',
                              children: [
                                  (0, r.jsx)('feFlood', {
                                      'flood-opacity': '0',
                                      result: 'BackgroundImageFix'
                                  }),
                                  (0, r.jsx)('feBlend', {
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape'
                                  }),
                                  (0, r.jsx)('feGaussianBlur', {
                                      result: 'effect1_foregroundBlur_1212_34965',
                                      stdDeviation: '122.07'
                                  })
                              ]
                          }),
                          (0, r.jsxs)('filter', {
                              id: 'c',
                              width: '1227.94',
                              height: '1389.94',
                              x: '-113.969',
                              y: '331.031',
                              'color-interpolation-filters': 'sRGB',
                              filterUnits: 'userSpaceOnUse',
                              children: [
                                  (0, r.jsx)('feFlood', {
                                      'flood-opacity': '0',
                                      result: 'BackgroundImageFix'
                                  }),
                                  (0, r.jsx)('feBlend', {
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape'
                                  }),
                                  (0, r.jsx)('feGaussianBlur', {
                                      result: 'effect1_foregroundBlur_1212_34965',
                                      stdDeviation: '146.484'
                                  })
                              ]
                          }),
                          (0, r.jsxs)('filter', {
                              id: 'd',
                              width: '1738.27',
                              height: '1738.27',
                              x: '-369.137',
                              y: '128.863',
                              'color-interpolation-filters': 'sRGB',
                              filterUnits: 'userSpaceOnUse',
                              children: [
                                  (0, r.jsx)('feFlood', {
                                      'flood-opacity': '0',
                                      result: 'BackgroundImageFix'
                                  }),
                                  (0, r.jsx)('feBlend', {
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape'
                                  }),
                                  (0, r.jsx)('feGaussianBlur', {
                                      result: 'effect1_foregroundBlur_1212_34965',
                                      stdDeviation: '97.656'
                                  })
                              ]
                          }),
                          (0, r.jsxs)('filter', {
                              id: 'e',
                              width: '1287.59',
                              height: '1234.59',
                              x: '-143.797',
                              y: '486.203',
                              'color-interpolation-filters': 'sRGB',
                              filterUnits: 'userSpaceOnUse',
                              children: [
                                  (0, r.jsx)('feFlood', {
                                      'flood-opacity': '0',
                                      result: 'BackgroundImageFix'
                                  }),
                                  (0, r.jsx)('feBlend', {
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape'
                                  }),
                                  (0, r.jsx)('feGaussianBlur', {
                                      result: 'effect1_foregroundBlur_1212_34965',
                                      stdDeviation: '170.898'
                                  })
                              ]
                          }),
                          (0, r.jsx)('clipPath', {
                              id: 'a',
                              children: (0, r.jsx)('path', {
                                  fill: '#fff',
                                  d: 'M0 0h1000v1000H0z'
                              })
                          })
                      ]
                  })
              ]
          });
      };
