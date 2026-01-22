n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(827343),
    o = n(688810),
    l = n(430452),
    c = n(824744),
    u = n(985018),
    d = n(867737);
function f() {
    let { analyticsLocations: e } = (0, o.Ay)(),
        { inputVolume: t, outputVolume: n } = (0, i.cf)([l.A], () => ({
            inputVolume: l.A.getInputVolume(),
            outputVolume: l.A.getOutputVolume(),
        }));
    return (0, r.jsxs)("div", {
        className: d.o,
        children: [
            (0, r.jsx)("div", {
                className: d.f,
                children: (0, r.jsx)(a.Apm, {
                    label: u.intl.string(u.t.OX2Bnr),
                    initialValue: (0, c.M)(t),
                    asValueChanges: (t) => s.A.setInputVolume((0, c.w)(t), { analyticsLocations: e }),
                }),
            }),
            (0, r.jsx)("div", {
                className: d.f,
                children: (0, r.jsx)(a.Apm, {
                    label: u.intl.string(u.t.eATD2B),
                    initialValue: (0, c.M)(n),
                    maxValue: 200,
                    onValueRender: (e) => "".concat(e.toFixed(0), "%"),
                    asValueChanges: (t) => s.A.setOutputVolume((0, c.w)(t), { analyticsLocations: e }),
                }),
            }),
        ],
    });
}
