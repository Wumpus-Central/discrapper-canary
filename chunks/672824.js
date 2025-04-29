n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(211739),
    c = n(680089),
    a = n(388032);
function s(e) {
    let t = (0, i.e7)([c.Z], () => c.Z.isCollapsed(e.id), [e.id]);
    return (0, r.jsx)(l.S89, {
        id: 'collapse-category',
        label: a.intl.string(a.t.SvVRsr),
        action: () => (t ? (0, o.mJ)(e.id) : (0, o.c4)(e.id)),
        checked: t
    });
}
