n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(434404),
    o = n(999382),
    c = n(388032);
function d(e) {
    let { profile: t, canManageGuild: n } = e,
        d = t.id,
        u = (0, s.e7)([o.Z], () => o.Z.getError('name')),
        m = i.useCallback(
            (e) => {
                l.Z.updateGuild({ name: e }), l.Z.updateGuildProfile(d, { name: e });
            },
            [d]
        );
    return (0, r.jsx)(a.xJW, {
        title: c.NW.string(c.t.X56QcH),
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
