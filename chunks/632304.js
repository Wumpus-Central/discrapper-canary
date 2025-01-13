n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(846027),
    s = n(131951),
    o = n(36703),
    c = n(358085),
    u = n(388032);
function d(e) {
    let t = (0, l.e7)([s.Z], () => (0, o.P)(s.Z.getOutputVolume()));
    return (0, i.jsx)(r.MenuControlItem, {
        id: 'output',
        label: u.intl.string(u.t.eATD2N),
        control: (n, l) =>
            (0, i.jsx)(r.MenuSliderControl, {
                ...n,
                ref: l,
                value: t,
                maxValue: c.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => a.Z.setOutputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': u.intl.string(u.t.eATD2N)
            })
    });
}
