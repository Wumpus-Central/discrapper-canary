n.d(i, { default: () => c }), n(539854), n(388685);
var s = n(54381);
n(473749);
var r = n(149765),
    a = n(793030),
    e = n(995648),
    l = n(422559),
    o = n(388032);
function c(t) {
    let { defaultMemberPermissions: i, onClose: n, transitionState: c } = t,
        p = [];
    for (let t of l.VY) r.e$(i, t) && p.push(t);
    return (0, s.jsx)(a.Modal, {
        "aria-label": o.intl.string(o.t.vusPtq),
        transitionState: c,
        title: o.intl.string(o.t["4gMlpQ"]),
        onClose: n,
        actions: [
            {
                variant: "primary",
                text: o.intl.string(o.t.i4jeWR),
                onClick: n,
            },
        ],
        children: (0, s.jsx)(e.Z, { grantedPermissions: p }),
    });
}
