n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(179658),
    l = n(482215),
    c = n(906467),
    u = n(857192),
    s = n(594174);
function d() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n
        } = (0, o.cj)([u.default, s.default, c.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: u.default.layoutDebuggingEnabled,
                isStaff: (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                isDeveloper: c.Z.isDeveloper
            };
        }),
        { horizontalSpacing: d, verticalSpacing: g, maxHorizontalSpacing: m, maxVerticalSpacing: b } = (0, l.i)(),
        { setHorizontalSpacing: p, setVerticalSpacing: f } = l.i.getState(),
        h = [];
    return (
        t &&
            n &&
            (h.push(
                (0, i.jsx)(
                    r.MenuCheckboxItem,
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
                        r.MenuControlItem,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, t) =>
                                (0, i.jsx)(r.MenuSliderControl, {
                                    ...e,
                                    ref: t,
                                    value: d,
                                    minValue: 0,
                                    maxValue: m,
                                    onChange: (e) => p(e),
                                    renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                    'aria-label': 'Horizontal Spacing'
                                })
                        },
                        'horizontal-spacing'
                    )
                ),
                h.push(
                    (0, i.jsx)(
                        r.MenuControlItem,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, t) =>
                                (0, i.jsx)(r.MenuSliderControl, {
                                    ...e,
                                    ref: t,
                                    value: g,
                                    minValue: 0,
                                    maxValue: b,
                                    onChange: (e) => f(e),
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
