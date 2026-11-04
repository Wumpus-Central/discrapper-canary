u.r(t);
var l = u(477900),
    n = u(582128),
    s = u(855986),
    r = u(976860),
    c = u(696451),
    d = u(71393),
    i = u(576705),
    a = u(712236),
    f = u(371169),
    p = u(313537),
    A = u(652215);
u.d(
    t,
    {},
    {
        default: function (e) {
            let { guildId: t, projectId: u } = e,
                o = (0, s.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
                h = (0, s.bG)(
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
                    (0, f.listProjects)(t);
                }, [t, o, h]),
                n.useEffect(() => {
                    (0, f.dm)(t, null);
                }, [t, b]),
                n.useEffect(() => {
                    null != b && (0, r.bG)({ pathname: (0, p.z$)(b), state: { conjureEntryPoint: "deep_link" } });
                }, [b]),
                (0, l.jsx)(a.A, { guildId: t })
            );
        },
    },
);
