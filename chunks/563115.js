n.d(t, {
    Z: () => s,
    h: () => a
});
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(430824),
    i = n(512508);
function a(e, t, n, r) {
    return (0, l.Wu)(
        [o.Z],
        () =>
            Object.values(o.Z.getRoles(e))
                .filter((e) => !t.has(e.id))
                .filter((t) => !n || t.id !== e)
                .filter(null != r ? r : () => !0)
                .map((e) => (0, i.WG)(e).row),
        [n, e, r, t]
    );
}
function s(e) {
    let { guildId: t, selectedRoleIds: n, onChange: l, placeholder: o, disableEveryoneRole: s, helperText: c, className: u, selectableRoleFilter: d } = e,
        C = a(t, n, s, d);
    return (0, r.jsx)(i.ZP, {
        roleRows: C,
        guildId: t,
        selectedRoleIds: n,
        onChange: (e, t) => l(t),
        placeholder: o,
        helperText: c,
        className: u
    });
}
