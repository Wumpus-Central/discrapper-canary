n.d(t, {
    A: () => x,
}),
    n(896048),
    n(321073);
var l = n(64700),
    i = n(311907),
    s = n(964486),
    a = n(71393),
    r = n(576705),
    c = n(711014),
    d = n(208882),
    o = n(519480),
    u = n(652215);
let x = (e, t) => {
    let [n, x] = l.useState(!1),
        m = (0, i.bG)([o.A], () => o.A.getAdminGuildEntryIds(t)),
        g = (0, i.yK)([c.Ay, a.A, r.A], () => {
            let t = c.Ay.getFlattenedGuildIds(),
                n = [];
            return (
                t.forEach((t) => {
                    let l = a.A.getGuild(t);
                    null != l && r.A.can(u.xBc.ADMINISTRATOR, l) && l.id !== e && n.push(l);
                }),
                n
            );
        }, [e]);
    return (
        (0, s.Ay)(() => {
            (async () => {
                x(!0),
                    await d.LH(
                        t,
                        g.map((e) => e.id),
                    ),
                    x(!1);
            })();
        }),
        {
            availableGuilds: l.useMemo(() => g.filter((e) => !(null == m ? void 0 : m.has(e.id))), [g, m]),
            addedGuilds: l.useMemo(() => g.filter((e) => (null == m ? void 0 : m.has(e.id))), [g, m]),
            loading: n,
        }
    );
};
