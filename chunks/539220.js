(u.r(t), u.d(t, { default: () => h }));
var l = u(477900),
    s = u(582128),
    c = u(17928),
    r = u(976860),
    n = u(696451),
    d = u(71393),
    f = u(576705),
    i = u(282858),
    A = u(751841),
    a = u(371169),
    p = u(652215);
function h(e) {
    let { guildId: t, projectId: u } = e,
        h = (0, c.yK)([n.Ay], () => n.Ay.getSelfMember(t)?.roles ?? [], [t]),
        b = (0, c.bG)(
            [d.A, f.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && f.A.can(p.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        o = u ?? null;
    return (
        s.useEffect(() => {
            (0, a.listProjects)(t);
        }, [t, h, b]),
        s.useEffect(() => {
            (0, a.dm)(t, null);
        }, [t, o]),
        s.useEffect(() => {
            null != o && (0, r.bG)((0, A.hU)(o));
        }, [o]),
        (0, l.jsx)(i.A, { guildId: t })
    );
}
