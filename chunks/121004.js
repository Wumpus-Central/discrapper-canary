l.d(t, { A: () => m }), l(321073);
var i = l(64700),
    s = l(311907),
    a = l(964486),
    n = l(71393),
    r = l(576705),
    c = l(711014),
    d = l(208882),
    o = l(519480),
    u = l(652215);
let m = (e, t) => {
    let [l, m] = i.useState(!1),
        x = (0, s.bG)([o.A], () => o.A.getAdminGuildEntryIds(t)),
        C = (0, s.yK)([c.Ay, n.A, r.A], () => {
            let t = c.Ay.getFlattenedGuildIds(),
                l = [];
            return (
                t.forEach((t) => {
                    let i = n.A.getGuild(t);
                    null != i && r.A.can(u.xBc.ADMINISTRATOR, i) && i.id !== e && l.push(i);
                }),
                l
            );
        }, [e]);
    return (
        (0, a.Ay)(() => {
            (async () => {
                m(!0),
                    await d.LH(
                        t,
                        C.map((e) => e.id),
                    ),
                    m(!1);
            })();
        }),
        {
            availableGuilds: i.useMemo(() => C.filter((e) => !x?.has(e.id)), [C, x]),
            addedGuilds: i.useMemo(() => C.filter((e) => x?.has(e.id)), [C, x]),
            loading: l,
        }
    );
};
