n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(434404),
    o = n(999382),
    c = n(388032);
function u(e) {
    let { profile: t, canManageGuild: n } = e,
        u = t.id,
        d = (0, l.e7)([o.Z], () => o.Z.getError('name')),
        m = i.useCallback(
            (e) => {
                a.Z.updateGuild({ name: e }), a.Z.updateGuildProfile(u, { name: e });
            },
            [u]
        );
    return (0, r.jsx)(s.xJW, {
        title: c.intl.string(c.t.X56QcH),
        children: (0, r.jsx)(s.oil, {
            type: 'text',
            disabled: !n,
            value: t.name,
            maxLength: 100,
            onChange: m,
            error: d
        })
    });
}
