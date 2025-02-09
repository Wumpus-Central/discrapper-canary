n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(716364),
    c = n(474873),
    d = n(197344),
    u = n(871465),
    h = n(388032);
function m() {
    let e = (0, r.e7)([c.Z], () => c.Z.getSoundpack()),
        t = d.Z.useHolidaySoundpack();
    l()(null != t, 'should not render this without a holiday soundpack');
    let n = [
        {
            value: u.YC.CLASSIC,
            label: h.intl.string(h.t.p3Hg5e)
        },
        {
            value: t.soundpack,
            label: h.intl.string(t.soundpackLabel)
        }
    ];
    return (0, i.jsx)(a.q4e, {
        onChange: o.c,
        value: e,
        options: n,
        maxVisibleItems: n.length
    });
}
