n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(496675),
    o = n(434404),
    c = n(999382),
    d = n(981631),
    u = n(388032);
function m(e) {
    let { guild: t } = e,
        n = t.id,
        m = (0, s.e7)([c.Z], () => c.Z.getError('name')),
        p = (0, s.e7)([l.Z], () => l.Z.can(d.Plq.MANAGE_GUILD, t)),
        g = i.useCallback(
            (e) => {
                o.Z.updateGuild({ name: e }), o.Z.updateGuildProfile(n, { name: e });
            },
            [n]
        );
    return (0, r.jsx)(a.xJW, {
        title: u.NW.string(u.t.X56QcH),
        children: (0, r.jsx)(a.oil, {
            type: 'text',
            disabled: !p,
            value: t.name,
            maxLength: 100,
            onChange: g,
            error: m
        })
    });
}
