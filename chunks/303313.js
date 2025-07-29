(n.d(i, { default: () => c }), n(539854), n(388685));
var r = n(255367);
n(73800);
var s = n(149765),
    a = n(82659),
    e = n(995648),
    l = n(422559),
    o = n(388032);
function c(t) {
    let { defaultMemberPermissions: i, onClose: n, transitionState: c } = t,
        p = [];
    for (let t of l.VY) s.e$(i, t) && p.push(t);
    return (0, r.jsx)(a.Modal, {
        'aria-label': o.intl.string(o.t.vusPtr),
        transitionState: c,
        title: o.intl.string(o.t['4gMlpa']),
        onClose: n,
        actions: [
            {
                variant: 'primary',
                text: o.intl.string(o.t.i4jeWV),
                onClick: n
            }
        ],
        children: (0, r.jsx)(e.Z, { grantedPermissions: p })
    });
}
