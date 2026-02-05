l.d(t, { A: () => c });
var r = l(627968);
l(64700);
var a = l(397927),
    e = l(688810),
    i = l(824744),
    s = l(796774),
    u = l(536432),
    o = l(985018);
function c() {
    let n = (0, u.wH)(),
        { analyticsLocations: t } = (0, e.Ay)();
    return (0, r.jsx)(a.aK1, {
        id: "user-volume",
        "aria-haspopup": !0,
        label: o.intl.string(o.t.kbFsAD),
        control: (l, e) =>
            (0, r.jsx)(a.i42, {
                ...l,
                ref: e,
                value: (0, i.M)(n),
                maxValue: 100,
                onChange: (n) => (0, s.iy)((0, i.w)(n), t),
                "aria-label": o.intl.string(o.t.kbFsAD),
            }),
    });
}
