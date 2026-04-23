n.d(t, { A: () => d, H: () => o });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(34457),
    r = n(317525),
    a = n(64749);
function o(e, t, n, i) {
    return (0, l.yK)(
        [r.A],
        () =>
            r.A.getSortedRoles(e)
                .filter((e) => !t.has(e.id) && !(n && (0, s.Oy)(e)) && (null == i || i(e)))
                .map((e) => (0, a.th)(e).row),
        [n, e, i, t],
    );
}
function d(e) {
    let {
            guildId: t,
            selectedRoleIds: n,
            onChange: l,
            placeholder: s,
            disableEveryoneRole: r,
            helperText: d,
            className: c,
            selectableRoleFilter: u,
        } = e,
        m = o(t, n, r, u);
    return (0, i.jsx)(a.Ay, {
        roleRows: m,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => l(t),
        placeholder: s,
        helperText: d,
        className: c,
    });
}
