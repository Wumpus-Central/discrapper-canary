n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(846027),
    s = n(131951),
    o = n(36703),
    c = n(388032);
function u(e) {
    let t = (0, l.e7)([s.Z], () => (0, o.P)(s.Z.getInputVolume()));
    return (0, i.jsx)(a.MenuControlItem, {
        id: 'input',
        label: c.intl.string(c.t.OX2Bnp),
        control: (n, l) =>
            (0, i.jsx)(a.MenuSliderControl, {
                ...n,
                ref: l,
                value: t,
                onChange: (t) => r.Z.setInputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': c.intl.string(c.t.OX2Bnp)
            })
    });
}
