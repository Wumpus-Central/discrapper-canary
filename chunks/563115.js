n.d(t, {
    Z: () => c,
    h: () => s,
});
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(345162),
    o = n(485386),
    a = n(654814);
function s(e, t, n, r) {
    return (0, l.Wu)(
        [o.Z],
        () =>
            o.Z.getSortedRoles(e)
                .filter((e) => !t.has(e.id) && !(n && (0, i.fI)(e)) && (null == r || r(e)))
                .map((e) => (0, a.WG)(e).row),
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
            className: u,
            selectableRoleFilter: d,
        } = e,
        C = s(t, n, o, d);
    return (0, r.jsx)(a.ZP, {
        roleRows: C,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => l(t),
        placeholder: i,
        helperText: c,
        className: u,
    });
}
