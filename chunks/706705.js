n.d(t, { Z: () => l }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(141079);
function l() {
    let [e, t] = i.useState(!1),
        [l, o] = i.useState(20),
        [c, d] = i.useState(80);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(s.Kqy, {
                gap: 8,
                children: [
                    (0, r.jsx)(s.j7V, {
                        value: e,
                        onChange: () => t(!e),
                        children: 'Enable Rive'
                    }),
                    (0, r.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(s.R94, { children: 'Number of animations' }),
                            (0, r.jsx)(s.iRW, {
                                initialValue: l,
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
                    (0, r.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(s.R94, { children: 'Animation size' }),
                            (0, r.jsx)(s.iRW, {
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
            (0, r.jsx)('div', {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '10px',
                    columnGap: '10px',
                    '--animation-size': ''.concat(c, 'px')
                },
                children: Array.from({ length: l }).map((t, i) =>
                    e
                        ? (0, r.jsx)(
                              s.t7u,
                              {
                                  eventTargetRef: { current: document.body },
                                  className: a.animationObj
                              },
                              i
                          )
                        : (0, r.jsx)(
                              s.Fmz,
                              {
                                  importData: () => n.e('37372').then(n.t.bind(n, 459274, 19)),
                                  className: a.animationObj
                              },
                              i
                          )
                )
            })
        ]
    });
}
