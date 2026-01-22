n.d(t, {
    A: () => c,
    H: () => s,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(34457),
    o = n(317525),
    a = n(64749);
function s(e, t, n, r) {
    return (0, l.yK)(
        [o.A],
        () =>
            o.A.getSortedRoles(e)
                .filter((e) => !t.has(e.id) && !(n && (0, i.Oy)(e)) && (null == r || r(e)))
                .map((e) => (0, a.th)(e).row),
        [n, e, r, t],
    );
}
function c(e) {
    let {
            guildId: t,
            selectedRoleIds: n,
            onChange: l,
            placeholder: i,
            disableEveryoneRole: o,
            helperText: c,
            className: d,
            selectableRoleFilter: u,
        } = e,
        C = s(t, n, o, u);
    return (0, r.jsx)(a.Ay, {
        roleRows: C,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => l(t),
        placeholder: i,
        helperText: c,
        className: d,
    });
}
