n.d(t, { Z: () => f }), n(388685), n(539854);
var i = n(473749),
    a = n(442837),
    l = n(493773),
    r = n(430824),
    s = n(496675),
    o = n(771845),
    c = n(99325),
    d = n(273387),
    u = n(981631);
let f = (e, t) => {
    let [n, f] = i.useState(!1),
        m = (0, a.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)),
        x = (0, a.Wu)([o.ZP, r.Z, s.Z], () => {
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
        (0, l.ZP)(() => {
            (async () => {
                f(!0),
                    await c._Q(
                        t,
                        x.map((e) => e.id),
                    ),
                    f(!1);
            })();
        }),
        {
            availableGuilds: i.useMemo(() => x.filter((e) => !(null == m ? void 0 : m.has(e.id))), [x, m]),
            addedGuilds: i.useMemo(() => x.filter((e) => (null == m ? void 0 : m.has(e.id))), [x, m]),
            loading: n,
        }
    );
};
