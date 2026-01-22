n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(965957),
    c = n(312671),
    u = n(552122),
    d = n(235079),
    f = n(985018);

function p() {
    let e = (0, s.bG)([c.A], () => c.A.getSoundpack()),
        t = u.A.useHolidaySoundpack();
    a()(null != t, "should not render this without a holiday soundpack");
    let n = [
        {
            id: "default",
            value: d.i.CLASSIC,
            label: f.intl.string(f.t.p3Hg5W),
        },
        {
            id: "holiday",
            value: t.soundpack,
            label: f.intl.string(t.soundpackLabel),
        },
    ];
    return (0, r.jsx)(o.l6P, {
        selectionMode: "single",
        label: f.intl.string(f.t.fgSHf8),
        onSelectionChange: l.p,
        value: e,
        options: n,
        maxOptionsVisible: n.length,
    });
}
