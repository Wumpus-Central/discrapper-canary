n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var a = n(311907),
    l = n(397927),
    i = n(827343),
    u = n(430452),
    s = n(824744),
    o = n(985018);
function c(e) {
    let t = (0, a.bG)([u.A], () => (0, s.M)(u.A.getInputVolume()));
    return (0, r.jsx)(l.aK1, {
        id: "input",
        label: o.intl.string(o.t.OX2Bnr),
        control: (n, a) =>
            (0, r.jsx)(l.i42, {
                ...n,
                ref: a,
                value: t,
                onChange: (t) => i.A.setInputVolume((0, s.w)(t), { analyticsLocations: e }),
                "aria-label": o.intl.string(o.t.OX2Bnr),
            }),
    });
}
