n.d(t, { Z: () => f });
var o = n(255367),
    r = n(522942),
    l = n(793030),
    i = n(481060),
    s = n(797967),
    a = n(660662),
    c = n(698282),
    d = n(388032),
    u = n(235421),
    p = n(397419);
function f(e) {
    var t;
    let { selectedColors: n, setSelectedColors: f, defaultColor: m, selectedEffectId: g, className: h } = e,
        b = g === r.m.GRADIENT;
    return (0, o.jsxs)('div', {
        className: h,
        children: [
            (0, o.jsxs)(l.X6, {
                variant: 'heading-md/semibold',
                className: p.selectorHeading,
                children: [
                    d.intl.string(c.default['JOpi7+']),
                    (0, o.jsx)(i.SrA, {
                        size: 'xs',
                        color: i.TVs.colors.TEXT_DEFAULT
                    })
                ]
            }),
            (0, o.jsx)(s.default, {
                className: u.colorPicker,
                colorContainerClassName: u.colorPickerContainer,
                defaultColor: m,
                colors: b ? a.vK : a.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: (e) => f([e]),
                onChangeGradientColors: (e) => f(e),
                isGradient: b
            })
        ]
    });
}
