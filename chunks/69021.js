n.d(t, { Z: () => u }), n(653041);
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(179658),
    l = n(482215),
    s = n(906467),
    c = n(857192),
    d = n(594174);
function u() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n
        } = (0, o.cj)([c.default, d.default, s.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: c.default.layoutDebuggingEnabled,
                isStaff: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                isDeveloper: s.Z.isDeveloper
            };
        }),
        { horizontalSpacing: u, verticalSpacing: _, maxHorizontalSpacing: g, maxVerticalSpacing: b } = (0, l.i)(),
        { setHorizontalSpacing: m, setVerticalSpacing: E } = l.i.getState(),
        h = [];
    return (
        t &&
            n &&
            (h.push(
                (0, i.jsx)(
                    r.S89,
                    {
                        id: 'layout-debugging',
                        label: 'Enable Layout Debugging',
                        checked: e,
                        action: () => {
                            (0, a.y)({ layoutDebuggingEnabled: !e });
                        }
                    },
                    'layout-debugging'
                )
            ),
            e &&
                (h.push(
                    (0, i.jsx)(
                        r.II_,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, t) =>
                                (0, i.jsx)(r._wy, {
                                    ...e,
                                    ref: t,
                                    value: u,
                                    minValue: 0,
                                    maxValue: g,
                                    onChange: (e) => m(e),
                                    renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                    'aria-label': 'Horizontal Spacing'
                                })
                        },
                        'horizontal-spacing'
                    )
                ),
                h.push(
                    (0, i.jsx)(
                        r.II_,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, t) =>
                                (0, i.jsx)(r._wy, {
                                    ...e,
                                    ref: t,
                                    value: _,
                                    minValue: 0,
                                    maxValue: b,
                                    onChange: (e) => E(e),
                                    'aria-label': 'Horizontal Spacing',
                                    renderValue: (e) => ''.concat(Math.round(e), 'px')
                                })
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === h.length ? null : (0, i.jsx)(i.Fragment, { children: h })
    );
}
