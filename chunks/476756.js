n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(716364),
    c = n(474873),
    u = n(197344),
    d = n(871465),
    f = n(388032);
function p() {
    let e = (0, o.e7)([c.Z], () => c.Z.getSoundpack()),
        t = u.Z.useHolidaySoundpack();
    a()(null != t, "should not render this without a holiday soundpack");
    let n = [
        {
            id: "default",
            value: d.Y.CLASSIC,
            label: f.intl.string(f.t.p3Hg5W),
        },
        {
            id: "holiday",
            value: t.soundpack,
            label: f.intl.string(t.soundpackLabel),
        },
    ];
    return (0, r.jsx)(s.PhF, {
        selectionMode: "single",
        label: f.intl.string(f.t.fgSHf8),
        onSelectionChange: l.c,
        value: e,
        options: n,
        maxOptionsVisible: n.length,
    });
}
