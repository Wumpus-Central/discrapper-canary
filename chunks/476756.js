n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    a = n(442837),
    l = n(481060),
    o = n(716364),
    c = n(474873),
    d = n(197344),
    u = n(871465),
    m = n(388032);
function g() {
    let e = (0, a.e7)([c.Z], () => c.Z.getSoundpack()),
        t = d.Z.useHolidaySoundpack();
    r()(null != t, 'should not render this without a holiday soundpack');
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
    return (0, i.jsx)(l.SingleSelect, {
        onChange: o.c,
        value: e,
        options: n,
        maxVisibleItems: n.length
    });
}
