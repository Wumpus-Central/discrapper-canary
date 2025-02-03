n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(496675),
    o = n(434404),
    c = n(999382),
    d = n(981631),
    u = n(388032);
function m(e) {
    let { guild: t } = e,
        n = t.id,
        m = (0, l.e7)([c.Z], () => c.Z.getError('name')),
        h = (0, l.e7)([a.Z], () => a.Z.can(d.Plq.MANAGE_GUILD, t)),
        g = r.useCallback(
            (e) => {
                o.Z.updateGuild({ name: e }), o.Z.updateGuildProfile(n, { name: e });
            },
            [n]
        );
    return (0, i.jsx)(s.xJW, {
        title: u.intl.string(u.t.X56QcH),
        children: (0, i.jsx)(s.oil, {
            type: 'text',
            disabled: !h,
            value: t.name,
            maxLength: 100,
            onChange: g,
            error: m
        })
    });
}
