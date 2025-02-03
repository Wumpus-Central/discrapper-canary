n.d(t, { Z: () => d }), n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(179658),
    s = n(482215),
    c = n(906467),
    o = n(857192),
    u = n(594174);
function d() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n
        } = (0, r.cj)([o.default, u.default, c.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: o.default.layoutDebuggingEnabled,
                isStaff: (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                isDeveloper: c.Z.isDeveloper
            };
        }),
        { horizontalSpacing: d, verticalSpacing: g, maxHorizontalSpacing: p, maxVerticalSpacing: h } = (0, s.i)(),
        { setHorizontalSpacing: x, setVerticalSpacing: j } = s.i.getState(),
        m = [];
    return (
        t &&
            n &&
            (m.push(
                (0, i.jsx)(
                    l.S89,
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
                (m.push(
                    (0, i.jsx)(
                        l.II_,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, t) =>
                                (0, i.jsx)(l._wy, {
                                    ...e,
                                    ref: t,
                                    value: d,
                                    minValue: 0,
                                    maxValue: p,
                                    onChange: (e) => x(e),
                                    renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                    'aria-label': 'Horizontal Spacing'
                                })
                        },
                        'horizontal-spacing'
                    )
                ),
                m.push(
                    (0, i.jsx)(
                        l.II_,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, t) =>
                                (0, i.jsx)(l._wy, {
                                    ...e,
                                    ref: t,
                                    value: g,
                                    minValue: 0,
                                    maxValue: h,
                                    onChange: (e) => j(e),
                                    'aria-label': 'Horizontal Spacing',
                                    renderValue: (e) => ''.concat(Math.round(e), 'px')
                                })
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === m.length ? null : (0, i.jsx)(i.Fragment, { children: m })
    );
}
