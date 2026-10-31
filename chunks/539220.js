(u.r(t), u.d(t, { default: () => h }));
var l = u(477900),
    n = u(582128),
    s = u(17928),
    r = u(976860),
    c = u(696451),
    d = u(71393),
    i = u(576705),
    a = u(46746),
    f = u(751841),
    p = u(371169),
    A = u(652215);
function h(e) {
    let { guildId: t, projectId: u } = e,
        h = (0, s.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        o = (0, s.bG)(
            [d.A, i.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && i.A.can(A.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        b = u ?? null;
    return (
        n.useEffect(() => {
            (0, p.listProjects)(t);
        }, [t, h, o]),
        n.useEffect(() => {
            (0, p.dm)(t, null);
        }, [t, b]),
        n.useEffect(() => {
            null != b && (0, r.bG)({ pathname: (0, f.hU)(b), state: { conjureEntryPoint: "deep_link" } });
        }, [b]),
        (0, l.jsx)(a.A, { guildId: t })
    );
}
