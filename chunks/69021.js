n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(179658),
    u = n(482215),
    o = n(906467),
    c = n(857192),
    s = n(594174);
function d() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n
        } = (0, i.cj)([c.default, s.default, o.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: c.default.layoutDebuggingEnabled,
                isStaff: (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                isDeveloper: o.Z.isDeveloper
            };
        }),
        { horizontalSpacing: d, verticalSpacing: p, maxHorizontalSpacing: g, maxVerticalSpacing: h } = (0, u.i)(),
        { setHorizontalSpacing: m, setVerticalSpacing: x } = u.i.getState(),
        M = [];
    return (
        t &&
            n &&
            (M.push(
                (0, r.jsx)(
                    l.MenuCheckboxItem,
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
                (M.push(
                    (0, r.jsx)(
                        l.MenuControlItem,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, t) =>
                                (0, r.jsx)(l.MenuSliderControl, {
                                    ...e,
                                    ref: t,
                                    value: d,
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
                M.push(
                    (0, r.jsx)(
                        l.MenuControlItem,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, t) =>
                                (0, r.jsx)(l.MenuSliderControl, {
                                    ...e,
                                    ref: t,
                                    value: p,
                                    minValue: 0,
                                    maxValue: h,
                                    onChange: (e) => x(e),
                                    'aria-label': 'Horizontal Spacing',
                                    renderValue: (e) => ''.concat(Math.round(e), 'px')
                                })
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === M.length ? null : (0, r.jsx)(r.Fragment, { children: M })
    );
}
