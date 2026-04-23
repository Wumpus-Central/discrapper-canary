n.d(t, { A: () => d, H: () => o });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(34457),
    a = n(317525),
    r = n(64749);
function o(e, t, n, i) {
    return (0, l.yK)(
        [a.A],
        () =>
            a.A.getSortedRoles(e)
                .filter((e) => !t.has(e.id) && !(n && (0, s.Oy)(e)) && (null == i || i(e)))
                .map((e) => (0, r.th)(e).row),
        [n, e, i, t],
    );
}
function d(e) {
    let {
            guildId: t,
            selectedRoleIds: n,
            onChange: l,
            placeholder: s,
            disableEveryoneRole: a,
            helperText: d,
            className: c,
            selectableRoleFilter: u,
        } = e,
        m = o(t, n, a, u);
    return (0, i.jsx)(r.Ay, {
        roleRows: m,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => l(t),
        placeholder: s,
        helperText: d,
        className: c,
    });
}
