n.d(t, { Z: () => m }), n(388685), n(539854);
var i = n(473749),
    l = n(442837),
    a = n(493773),
    r = n(430824),
    s = n(496675),
    o = n(771845),
    c = n(99325),
    d = n(273387),
    u = n(981631);
let m = (e, t) => {
    let [n, m] = i.useState(!1),
        x = (0, l.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)),
        g = (0, l.Wu)([o.ZP, r.Z, s.Z], () => {
            let t = o.ZP.getFlattenedGuildIds(),
                n = [];
            return (
                t.forEach((t) => {
                    let i = r.Z.getGuild(t);
                    null != i && s.Z.can(u.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i);
                }),
                n
            );
        }, [e]);
    return (
        (0, a.ZP)(() => {
            (async () => {
                m(!0),
                    await c._Q(
                        t,
                        g.map((e) => e.id),
                    ),
                    m(!1);
            })();
        }),
        {
            availableGuilds: i.useMemo(() => g.filter((e) => !(null == x ? void 0 : x.has(e.id))), [g, x]),
            addedGuilds: i.useMemo(() => g.filter((e) => (null == x ? void 0 : x.has(e.id))), [g, x]),
            loading: n,
        }
    );
};
