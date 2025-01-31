n.d(e, { Z: () => l });
var i = n(200651);
n(192379);
var a = n(481060),
    o = n(765250),
    r = n(388032);
function l(t) {
    return (0, i.jsx)(a.II_, {
        id: 'opacity',
        'aria-haspopup': !0,
        label: r.intl.string(r.t.OVovCQ),
        control: (e, n) =>
            (0, i.jsx)(a._wy, {
                ...e,
                ref: n,
                value: 100 * t.opacity,
                maxValue: 100,
                onChange: (e) =>
                    (0, o.nv)({
                        widgetId: t.id,
                        opacity: e / 100
                    }),
                'aria-label': r.intl.string(r.t.kbFsAA)
            })
    });
}
