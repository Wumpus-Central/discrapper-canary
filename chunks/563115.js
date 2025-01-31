l.d(t, {
    Z: () => r,
    h: () => s
});
var n = l(200651);
l(192379);
var a = l(442837),
    i = l(430824),
    o = l(512508);
function s(e, t, l, n) {
    return (0, a.Wu)(
        [i.Z],
        () =>
            Object.values(i.Z.getRoles(e))
                .filter((e) => !t.has(e.id))
                .filter((t) => !l || t.id !== e)
                .filter(null != n ? n : () => !0)
                .map((e) => (0, o.WG)(e).row),
        [l, e, n, t]
    );
}
function r(e) {
    let { guildId: t, selectedRoleIds: l, onChange: a, placeholder: i, disableEveryoneRole: r, helperText: c, className: C, selectableRoleFilter: d } = e,
        u = s(t, l, r, d);
    return (0, n.jsx)(o.ZP, {
        roleRows: u,
        guildId: t,
        selectedRoleIds: l,
        onChange: (e, t) => a(t),
        placeholder: i,
        helperText: c,
        className: C
    });
}
