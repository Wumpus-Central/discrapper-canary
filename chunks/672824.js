t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(211739),
    u = t(680089),
    d = t(388032);
function s(n) {
    let e = (0, r.e7)([u.Z], () => u.Z.isCollapsed(n.id), [n.id]);
    return (0, i.jsx)(l.MenuCheckboxItem, {
        id: 'collapse-category',
        label: d.intl.string(d.t.SvVRsr),
        action: () => (e ? (0, a.mJ)(n.id) : (0, a.c4)(n.id)),
        checked: e
    });
}
