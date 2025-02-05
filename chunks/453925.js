n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(846027),
    s = n(131951),
    o = n(36703),
    u = n(388032);
function c(e) {
    let t = (0, i.e7)([s.Z], () => (0, o.P)(s.Z.getInputVolume()));
    return (0, l.jsx)(r.II_, {
        id: 'input',
        label: u.intl.string(u.t.OX2Bnp),
        control: (n, i) =>
            (0, l.jsx)(r._wy, {
                ...n,
                ref: i,
                value: t,
                onChange: (t) => a.Z.setInputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': u.intl.string(u.t.OX2Bnp)
            })
    });
}
