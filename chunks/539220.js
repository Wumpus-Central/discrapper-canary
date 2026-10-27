(t.r(u), t.d(u, { default: () => E }));
var l = t(477900),
    s = t(582128),
    c = t(17928),
    n = t(976860),
    r = t(696451),
    A = t(71393),
    d = t(576705),
    f = t(810753),
    i = t(381991),
    a = t(371169),
    p = t(652215),
    h = t(746080);
function E(e) {
    let { guildId: u, projectId: t } = e,
        E = (0, c.yK)([r.Ay], () => r.Ay.getSelfMember(u)?.roles ?? [], [u]),
        b = (0, c.bG)(
            [A.A, d.A],
            () => {
                let e = A.A.getGuild(u);
                return null != e && d.A.can(p.xBc.MANAGE_GUILD, e);
            },
            [u],
        ),
        G = t ?? null;
    return (
        s.useEffect(() => {
            (0, a.hF)(u);
        }, [u, E, b]),
        s.useEffect(() => {
            (0, a.dm)(u, null);
        }, [u, G]),
        s.useEffect(() => {
            null != G && ((0, n.bG)(p.BVt.CHANNEL(u, h.VV.CONJURE)), (0, i.Ay)(G));
        }, [u, G]),
        (0, l.jsx)(f.A, { guildId: u })
    );
}
