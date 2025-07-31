n.d(t, { Z: () => f });
var r = n(255367),
    o = n(522942),
    l = n(793030),
    i = n(481060),
    a = n(797967),
    s = n(660662),
    c = n(698282),
    d = n(388032),
    u = n(235421),
    p = n(397419);
function f(e) {
    var t;
    let { selectedColors: n, setSelectedColors: f, defaultColor: m, selectedEffectId: g, className: h } = e,
        b = g === o.m.GRADIENT;
    return (0, r.jsxs)('div', {
        className: h,
        children: [
            (0, r.jsxs)(l.X6, {
                variant: 'heading-md/semibold',
                className: p.selectorHeading,
                children: [
                    d.intl.string(c.default['JOpi7+']),
                    (0, r.jsx)(i.SrA, {
                        size: 'xs',
                        color: i.TVs.colors.TEXT_DEFAULT
                    })
                ]
            }),
            (0, r.jsx)(a.default, {
                className: u.colorPicker,
                colorContainerClassName: u.colorPickerContainer,
                defaultColor: m,
                colors: b ? s.vK : s.gD,
                value: n[0],
                secondaryValue: null != (t = n[1]) ? t : void 0,
                onChange: (e) => f([e]),
                onChangeGradientColors: (e) => f(e),
                isGradient: b
            })
        ]
    });
}
