t.d(i, { default: () => a });
var r = t(200651);
t(192379);
var s = t(481060),
    o = t(239091),
    e = t(299660),
    c = t(517640),
    l = t(388032);
function a(n) {
    let { guild: i, onSelect: t } = n,
        a = (0, c.Z)(i),
        u = (0, e.Z)(i.id);
    return (0, r.jsx)(s.v2r, {
        navId: 'role-subscription-context',
        'aria-label': l.intl.string(l.t.g3KvYG),
        onClose: o.Zy,
        onSelect: t,
        children: (0, r.jsxs)(s.kSQ, {
            children: [a, u]
        })
    });
}
