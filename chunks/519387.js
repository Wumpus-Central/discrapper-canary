n.d(i, { default: () => p }), n(321073);
var s = n(627968);
n(64700);
var r = n(136722),
    a = n(158954),
    e = n(595738),
    l = n(376092),
    o = n(985018);
function p(t) {
    let { defaultMemberPermissions: i, onClose: n, transitionState: p } = t,
        c = [];
    for (let t of l.Q) r.zy(i, t) && c.push(t);
    return (0, s.jsx)(a.Modal, {
        "aria-label": o.intl.string(o.t.vusPtq),
        transitionState: p,
        title: o.intl.string(o.t["4gMlpQ"]),
        onClose: n,
        actions: [{ variant: "primary", text: o.intl.string(o.t.i4jeWR), onClick: n }],
        children: (0, s.jsx)(e.A, { grantedPermissions: c }),
    });
}
