n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(716364),
    c = n(474873),
    d = n(197344),
    u = n(871465),
    m = n(388032);
function p() {
    let e = (0, l.e7)([c.Z], () => c.Z.getSoundpack()),
        t = d.Z.useHolidaySoundpack();
    s()(null != t, 'should not render this without a holiday soundpack');
    let n = [
        {
            value: u.YC.CLASSIC,
            label: m.intl.string(m.t.p3Hg5e)
        },
        {
            value: t.soundpack,
            label: m.intl.string(t.soundpackLabel)
        }
    ];
    return (0, i.jsx)(a.q4e, {
        onChange: o.c,
        value: e,
        options: n,
        maxVisibleItems: n.length
    });
}
