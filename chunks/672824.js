e.d(t, { Z: () => c });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    r = e(211739),
    s = e(680089),
    d = e(388032);
function c(n) {
    let t = (0, l.e7)([s.Z], () => s.Z.isCollapsed(n.id), [n.id]);
    return (0, i.jsx)(a.S89, {
        id: 'collapse-category',
        label: d.intl.string(d.t.SvVRsr),
        action: () => (t ? (0, r.mJ)(n.id) : (0, r.c4)(n.id)),
        checked: t
    });
}
