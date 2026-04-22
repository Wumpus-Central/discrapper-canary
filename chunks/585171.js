l.d(t, { A: () => d });
var r = l(627968);
l(64700);
var a = l(477782),
    e = l(964355),
    i = l(688810),
    s = l(824744),
    u = l(796774),
    o = l(536432),
    c = l(985018);
function d() {
    let n = (0, o.wH)(),
        { analyticsLocations: t } = (0, i.Ay)();
    return (0, r.jsx)(a.aK, {
        id: "user-volume",
        "aria-haspopup": !0,
        label: c.intl.string(c.t.kbFsAD),
        control: (l, a) =>
            (0, r.jsx)(e.i, {
                ...l,
                ref: a,
                value: (0, s.M)(n),
                maxValue: 100,
                onChange: (n) => (0, u.iy)((0, s.w)(n), t),
                "aria-label": c.intl.string(c.t.kbFsAD),
            }),
    });
}
