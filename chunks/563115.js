n.d(t, {
    Z: () => s,
    h: () => i
});
var r = n(200651);
n(192379);
var l = n(442837),
    o = n(430824),
    a = n(512508);
function i(e, t, n, r) {
    return (0, l.Wu)(
        [o.Z],
        () =>
            Object.values(o.Z.getRoles(e))
                .filter((e) => !t.has(e.id))
                .filter((t) => !n || t.id !== e)
                .filter(null != r ? r : () => !0)
                .map((e) => (0, a.WG)(e).row),
        [n, e, r, t]
    );
}
function s(e) {
    let { guildId: t, selectedRoleIds: n, onChange: l, placeholder: o, disableEveryoneRole: s, helperText: c, className: u, selectableRoleFilter: d } = e,
        C = i(t, n, s, d);
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
