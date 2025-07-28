n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(434404),
    o = n(999382),
    c = n(388032);
function d(e) {
    let { profile: t, canManageGuild: n } = e,
        d = t.id,
        u = (0, l.e7)([o.Z], () => o.Z.getError('name')),
        m = i.useCallback(
            (e) => {
                (s.Z.updateGuild({ name: e }), s.Z.updateGuildProfile(d, { name: e }));
            },
            [d]
        );
    return (0, r.jsx)(a.xJW, {
        title: c.intl.string(c.t.X56QcH),
        children: (0, r.jsx)(a.oil, {
            type: 'text',
            disabled: !n,
            value: t.name,
            maxLength: 100,
            onChange: m,
            error: u
        })
    });
}
