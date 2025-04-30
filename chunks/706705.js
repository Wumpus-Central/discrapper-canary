n.d(t, { Z: () => a }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(141079);
function a() {
    let [e, t] = r.useState(!1),
        [a, o] = r.useState(20),
        [c, d] = r.useState(80);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(s.Kqy, {
                gap: 8,
                children: [
                    (0, i.jsx)(s.j7V, {
                        value: e,
                        onChange: () => t(!e),
                        children: 'Enable Rive'
                    }),
                    (0, i.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(s.R94, { children: 'Number of animations' }),
                            (0, i.jsx)(s.iRW, {
                                initialValue: a,
                                defaultValue: 20,
                                onValueRender: (e) => ''.concat(Math.round(e), ' animations'),
                                asValueChanges: (e) => o(Math.round(e)),
                                minValue: 1,
                                maxValue: 500,
                                markers: [1, ...Array.from({ length: 25 }, (e, t) => (t + 1) * 20)],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(s.R94, { children: 'Animation size' }),
                            (0, i.jsx)(s.iRW, {
                                initialValue: c,
                                defaultValue: 80,
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onValueChange: (e) => d(Math.round(e)),
                                minValue: 10,
                                maxValue: 300,
                                markers: [10, 50, 100, 200, 300]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '10px',
                    columnGap: '10px',
                    '--animation-size': ''.concat(c, 'px')
                },
                children: Array.from({ length: a }).map((t, r) =>
                    e
                        ? (0, i.jsx)(
                              s.t7u,
                              {
                                  eventTargetRef: { current: document.body },
                                  className: l.animationObj
                              },
                              r
                          )
                        : (0, i.jsx)(
                              s.Fmz,
                              {
                                  importData: () => n.e('37372').then(n.t.bind(n, 459274, 19)),
                                  className: l.animationObj
                              },
                              r
                          )
                )
            })
        ]
    });
}
