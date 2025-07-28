n.d(t, {
    Z: () => c,
    h: () => s
});
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(345162),
    i = n(485386),
    a = n(512508);
function s(e, t, n, r) {
    return (0, l.Wu)(
        [i.Z],
        () =>
            i.Z.getSortedRoles(e)
                .filter((e) => !t.has(e.id) && !(n && (0, o.fI)(e)) && (null == r || r(e)))
                .map((e) => (0, a.WG)(e).row),
        [n, e, r, t]
    );
}
function c(e) {
    let { guildId: t, selectedRoleIds: n, onChange: l, placeholder: o, disableEveryoneRole: i, helperText: c, className: u, selectableRoleFilter: d } = e,
        C = s(t, n, i, d);
    return (0, r.jsx)(a.ZP, {
        roleRows: C,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => l(t),
        placeholder: o,
        helperText: c,
        className: u
    });
}
